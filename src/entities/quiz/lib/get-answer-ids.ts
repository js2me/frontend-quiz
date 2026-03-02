import type { AnswerDtoDC, QuestionQuizProcessingDtoDC } from '@/shared/api';
import { sortAnswersBySelectedOrder } from './sort-answers-by-selected-order';

export const getAnswerIds = (
  question: QuestionQuizProcessingDtoDC,
): AnswerDtoDC['id'][] => {
  return sortAnswersBySelectedOrder(
    question.answers.filter((answer) => answer.selected),
  ).map((answer) => answer.id);
};
