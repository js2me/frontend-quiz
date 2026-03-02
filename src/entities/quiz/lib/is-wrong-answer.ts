import type { AnswerDtoDC } from '@/shared/api';

export const isWrongAnswer = (answer: AnswerDtoDC) => {
  return !answer.right;
};
