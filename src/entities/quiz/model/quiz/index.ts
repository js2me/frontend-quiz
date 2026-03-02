import { makeAutoObservable } from 'mobx';
import { storageData } from 'mobx-web-api';
import { generateId, generateNumericId } from 'yummies/id';
import { models } from '@/shared/lib/mobx/models';
import type { QuizParams } from '../quiz-params';
import type { Question, QuizState } from './types';

const storedParams = storageData.key<QuizParams | null>(
  'quiz/params',
  null,
  'local',
);
const storedState = storageData.key<QuizState | null>(
  'quiz/state',
  null,
  'local',
);

export class Quiz {
  state: QuizState;

  position = 0;

  private constructor(
    public params: QuizParams,
    state: QuizState,
  ) {
    this.state = { ...state };
    makeAutoObservable(this);
  }

  get isFinished() {
    return this.state.finishedDate != null;
  }

  get isActive() {
    return !this.isFinished;
  }

  get activeQuestion() {
    return this.state.questions.find(it => it.position === this.position);
  }


  finish() {
    this.state.finishedDate = Date.now();
    storedState.value = null;
  }

  static get lastParams() {
    return storedParams.value;
  }

  static async create(params: QuizParams) {
    using questionTemplatesModel = await models.lazy(
      'QuestionTemplatesModel',
      () => import('@/entities/question-templates/model'),
    );

    const { createQuestionHelpers } = await import(
      '@/entities/question-helpers/model'
    );

    const questionTemplateConfigs =
      questionTemplatesModel.collectTemplateConfigs({
        categories: params.categories,
        count: params.questionsCount,
        levels: params.levels,
        sortByComplexity: true,
      });

    const questions: Question[] = [];

    for await (const questionTemplateConfig of questionTemplateConfigs) {
      const questionHelpers = createQuestionHelpers();
      const questionExecutor = (await questionTemplateConfig.loader()).default;

      const rawQuestion = questionExecutor(questionHelpers);

      questions.push({
        id: questions.length,
        template: questionTemplateConfig,
        position: questions.length,
        pings: 0,
        skipCount: 0,
        isRight: false,
        answerCount: 0,
        generated: rawQuestion,
        answers: null,
        visited: false,
      });

      // const generated = await this.questionTemplates.execute_question_template(
      //   questionTemplateConfig.id,
      // );

      // const question = this.db.questions.create({
      //   position: questions.length,
      //   pings: 0,
      //   skip_count: 0,
      //   is_right: false,
      //   answer_count: 0,
      //   last_answer_date: undefined,
      //   quiz,
      //   question_template: questionTemplateConfig,
      //   generated,
      //   generated_date: new Date(),
      // });

      // questions.push(question);
    }

    const quiz = new Quiz(params, {
      id: generateId(),
      creationDate: Date.now(),
      expirationDate: Date.now(),
      questions,
    });

    storedParams.value = params;
    storedState.value = quiz.state;

    return quiz;
  }

  static get hasActive() {
    return !!storedParams.value && !!storedState.value;
  }

  static restore() {
    if (Quiz.hasActive) {
      return new Quiz(storedParams.value!, storedState.value!);
    }

    return null;
  }
}
