import type { AnswerDtoDC } from '@/shared/api';
import { QuizModeAnswer } from './components/quiz-mode-answer';
import { ViewModeAnswer } from './components/view-mode-answer';

export interface QuestionAnswerProps {
  mode?: 'view' | 'quiz';
  answer: AnswerDtoDC;

  multiple?: boolean;
  ordered?: boolean;

  onClick?: (answer: AnswerDtoDC) => void;
}

export const QuestionAnswer = (props: QuestionAnswerProps) => {
  const Renderer = props.mode === 'view' ? ViewModeAnswer : QuizModeAnswer;
  return <Renderer {...props} />;
};
