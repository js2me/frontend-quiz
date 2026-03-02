import type { FullQuestionDtoDC } from '@/shared/api';

export const isErroredQuestion = (question: FullQuestionDtoDC) =>
  !question.isRight && !!question.answer_count;
