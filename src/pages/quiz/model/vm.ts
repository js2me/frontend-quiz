import { ViewModelBase } from 'mobx-view-model';
import { Quiz } from '@/entities/quiz/model/quiz';
import type { Question } from '@/entities/quiz/model/quiz/types';
import { homeRoute } from '@/pages/home';
import { LayoutVM } from '@/widgets/layout/model';

export class QuizPageVM extends ViewModelBase {
  quiz = Quiz.restore()!;
  displayResultsLabel: any;
  continueDisabled: boolean | undefined;
  clickContinueButton: MouseEventHandler<HTMLButtonElement> | undefined;
  clickQuestionAnswer: ((answer: AnswerDtoDC) => void) | undefined;

  get isProcessing() {
    return false;
  }

  handleFinishQuiz = () => {
    this.quiz.finish();
    homeRoute.open(null, { replace: true });
  };

  handleQuestionClick(question: Question): void {
    throw new Error('Method not implemented.');
  }

  mount(): void {
    if (!this.quiz) {
      homeRoute.open(null, { replace: true });
      return;
    }

    super.mount();

    this.viewModels.get(LayoutVM)?.setNavItems([
      {
        text: 'Завершить',
        action: this.handleFinishQuiz,
        style: 'negative',
      },
    ]);
  }

  protected willUnmount(): void {
    this.viewModels.get(LayoutVM)?.setNavItems([]);
  }
}
