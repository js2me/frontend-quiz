import type { QuestionTemplateConfig } from '@/entities/question-templates/model';

export interface Question {
  id: number;
  template: QuestionTemplateConfig;
  position: number;
  pings: number;
  generated: RawQuestion;
  answers: null | string[];
  visited: boolean;
  answerCount: number;
  skipCount: number;
  lastAnswerDate?: number;
  isRight?: boolean;
}

export interface QuizState {
  id: string;
  creationDate: number;
  expirationDate: number;
  finishedDate?: Maybe<number>;
  questions: Question[];
}
