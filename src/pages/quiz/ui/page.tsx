import { withViewModel } from 'mobx-view-model';
import { QuizPageVM } from '../model/vm';

export const QuizPage = withViewModel(QuizPageVM, () => {
  return <div>Quiz</div>;
});
