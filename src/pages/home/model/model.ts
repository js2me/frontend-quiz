import { computed, makeObservable } from 'mobx';
import { createModelLoader } from 'mobx-swiss-knife';
import type { ViewModelSimple } from 'mobx-view-model';
import { quizCreateSchema } from '@/features/quiz/create/model';
import { Quiz } from '@/features/quiz/create/model/model';
import { quizRoute } from '@/pages/quiz';
import { SchemaForm } from '@/shared/lib/react/react-hook-form';
import { quizAvailableCountToChoose } from '../config';

export class HomePageVM implements ViewModelSimple {
  private abortCtrl = new AbortController();

  private modelLoader = createModelLoader({
    abortSignal: this.abortCtrl.signal,
    context: this,
  });

  questionTemplates = this.modelLoader.connect({
    property: 'questionTemplates',
    fn: () =>
      import('@/entities/question-templates/model').then(
        (m) => new m.QuestionTemplatesModel(),
      ),
  });

  newQuizForm = new SchemaForm({
    schema: quizCreateSchema,
    defaultValues: {
      questionsCount: quizAvailableCountToChoose[1],
      levels: ['low', 'medium'],
      categories: ['theory', 'code'],
    },
    onSubmit: (formData) => {
      Quiz.create(formData);
      quizRoute.open();
    },
  });

  get isLoading() {
    return this.modelLoader.isLoading('questionTemplates');
  }

  unmount() {
    this.abortCtrl.abort();
  }

  constructor() {
    makeObservable(this, {
      isLoading: computed,
    });
  }
}
