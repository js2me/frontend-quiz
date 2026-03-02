import type { AnswerDtoDC } from '@/shared/api';

export const isRightChosenAnswer = (answer: AnswerDtoDC, ordered?: boolean) => {
  if (ordered) {
    return !!answer.right && answer.selectedOrder === answer.order;
  }

  return !!answer.right && !!answer.selected;
};
