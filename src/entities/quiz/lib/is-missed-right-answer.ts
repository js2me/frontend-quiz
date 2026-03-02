import type { AnswerDtoDC } from '@/shared/api';

export const isMissedRightAnswer = (answer: AnswerDtoDC) => {
  return !answer.selected && !!answer.right;
};
