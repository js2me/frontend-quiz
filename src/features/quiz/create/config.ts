import {
  QuestionCategory,
  QuestionLevel,
} from '@/entities/question-templates/model';

export const availableQuestionLevels = [
  'low',
  'medium',
  'high',
] satisfies QuestionLevel[];

export const availableQuestionCategories = [
  'theory',
  'code',
  'layout',
] satisfies QuestionCategory[];
