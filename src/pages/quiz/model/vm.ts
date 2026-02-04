import { ViewModelBase } from 'mobx-view-model';
import { Quiz } from '@/features/quiz/create/model/model';
import { homeRoute } from '@/pages/home';

export class QuizPageVM extends ViewModelBase {
  handleFinishQuiz = () => {
    Quiz.current?.finish();
    homeRoute.open(null, { replace: true });
  };
}
