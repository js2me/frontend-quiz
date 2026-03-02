import { shuffle, sum, take } from 'lodash-es';
import { AbstractModel } from '@/shared/lib/mobx/abstract-model';
import { getFrequencyValue, getRandomInt } from '@/shared/lib/random';
import type {
  QuestionCategory,
  QuestionLevel,
  QuestionTemplate,
  QuestionTemplatesCollectParams,
} from './model.types';

const questionTemplateScannedPaths = import.meta.glob('./data/**/index.ts', {
  eager: true,
  exhaustive: true,
});

export class QuestionTemplatesModel extends AbstractModel {
  private data: Record<QuestionCategory, QuestionTemplate[]> = {
    theory: [],
    code: [],
    layout: [],
    async: [],
    react: [],
    effector: [],
  };

  constructor(abortSignal?: AbortSignal) {
    super(abortSignal);

    Object.entries(questionTemplateScannedPaths).forEach(([path, module]) => {
      const category = path.split('/')[2] as QuestionCategory;
      const questionConfig = (module as any).default as QuestionTemplate;
      this.data[category].push(questionConfig);
    });
  }

  private getTemplatesByCategory(category: QuestionCategory, onlyEnabled?: boolean) {
    const templates = this.data[category];
    if (onlyEnabled) return templates.filter((config) => config.enabled);

    return templates;
  }

  collectTemplates(params: QuestionTemplatesCollectParams): QuestionTemplate[] {
    const result: QuestionTemplate[] = [];

    const questionCountPerGroup = Math.floor(
      params.count / params.categories.length,
    );
    let questionCountNotInUse =
      params.count - questionCountPerGroup * params.categories.length;

    const hasAsyncQuestions = params.categories.includes('async');

    let i = 0;
    for (const category of params.categories) {
      const templateConfigs = this.getTemplatesByCategory(category, true);

      if (category === 'code' && hasAsyncQuestions) {
        const asyncTemplateConfigs = this.getTemplatesByCategory('async', true);

        asyncTemplateConfigs.forEach((it) => {
          templateConfigs.push({ ...it });
        });
      }

      const isAddExtras =
        i === params.categories.length - 1
          ? questionCountNotInUse
          : questionCountNotInUse >= 1
            ? getRandomInt(1, questionCountNotInUse)
            : 0;

      const questions_count = questionCountPerGroup + isAddExtras;

      const pickedQuestionTemplates = take(
        shuffle(
          templateConfigs.filter(({ frequency }) => {
            const frequencies = Object.entries(frequency).reduce<number[]>(
              (frequencies_acc, [questionLevel, levelFrequency]) => {
                if (
                  params.levels.includes(questionLevel as QuestionLevel) &&
                  levelFrequency
                ) {
                  frequencies_acc.push(levelFrequency);
                }
                return frequencies_acc;
              },
              [],
            );

            const avgFrequency = sum(frequencies) / frequencies.length || 0;
            return (
              !!avgFrequency &&
              (avgFrequency === 1 || getFrequencyValue(avgFrequency))
            );
          }),
        ),
        questions_count,
      );

      result.push(...pickedQuestionTemplates);

      i++;

      questionCountNotInUse -= isAddExtras;
    }

    if (params.sortByComplexity) {
      return result.sort((a, b) => a.complexity - b.complexity);
    }

    return result;
  }
}
