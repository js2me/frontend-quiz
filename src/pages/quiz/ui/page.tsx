import { withViewModel } from 'mobx-view-model';
import { QuizPageVM } from '../model/vm';

export const QuizPage = withViewModel(QuizPageVM, ({ model }) => {
  return (
    <div className="flex">
      <h1>Quiz</h1>
      <button onClick={model.handleFinishQuiz}>завершить</button>
    </div>
  );
});
