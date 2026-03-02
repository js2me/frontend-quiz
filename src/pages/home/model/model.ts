import { computed, makeObservable } from 'mobx';
import { ViewModelBase } from 'mobx-view-model';
import { Quiz } from '@/entities/quiz/model/quiz';
import { quizParamsSchema } from '@/entities/quiz/model/quiz-params/schema';
import { quizRoute } from '@/pages/quiz';
import { SchemaForm } from '@/shared/lib/react/react-hook-form';
import { createToast } from '@/shared/ui/toast';
import { quizAvailableCountToChoose } from '../config';

export class HomePageVM extends ViewModelBase {
  newQuizForm = new SchemaForm({
    schema: quizParamsSchema,
    defaultValues: Quiz.lastParams ?? {
      questionsCount: quizAvailableCountToChoose[1],
      levels: ['low', 'medium'],
      categories: ['theory', 'code'],
    },
    onSubmit: async (formData) => {
      try {
        await Quiz.create(formData);
        await quizRoute.open();
      } catch {
        createToast({
          message: 'Что-то пошло не так',
          type: 'error',
        });
      }
    },
  });

  get isLoading() {
    return this.newQuizForm.isSubmitting;
  }

  willMount(): void {
    makeObservable(this, {
      isLoading: computed,
    });
  }
}
