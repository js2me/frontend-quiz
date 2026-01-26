import { computed, makeObservable } from 'mobx';
import { createModelLoader } from 'mobx-shared-entities';
import type { ViewModelSimple } from 'mobx-view-model';
import { quizCreateSchema } from '@/features/quiz/create/model';
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
