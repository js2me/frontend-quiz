import type { QuestionLevel } from '../model';

const levelLabels: Record<QuestionLevel, string> = {
  low: 'Junior 😺',
  medium: 'Middle 🤓',
  high: 'Senior 🤖',
};

export const getQuestionLevelLabel = (level: QuestionLevel) =>
  levelLabels[level];
