import type { FullQuestionDtoDC } from '@/shared/api';

export const isRightQuestion = (question: FullQuestionDtoDC) =>
  !!question.isRight && !!question.answer_count;
