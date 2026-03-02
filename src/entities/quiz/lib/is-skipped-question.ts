import type { FullQuestionDtoDC } from '@/shared/api';

export const isSkippedQuestion = (question: FullQuestionDtoDC) =>
  !question.answer_count;
