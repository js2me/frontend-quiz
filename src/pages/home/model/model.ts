import { valibotResolver } from '@hookform/resolvers/valibot';
import { makeAutoObservable } from 'mobx';
import { MobxForm } from 'mobx-react-hook-form';
import { ViewModelSimple } from 'mobx-view-model';

import { quizCreateSchema } from '@/features/quiz/create/model';
import { ModelLoader } from '@/shared/lib/mobx/model-loader';

import { quizAvailableCountToChoose } from '../config';

export class HomePageVM implements ViewModelSimple {
  private modelLoader = new ModelLoader();

  id = 'home-page';

  questionTemplates = this.modelLoader.init({
    context: this,
    property: 'questionTemplates',
    fn: () =>
      import('@/entities/question-templates/model').then(
        ({ QuestionTemplatesModel }) => {
          return new QuestionTemplatesModel();
        },
      ),
  });

  newQuizForm = new MobxForm({
    resolver: valibotResolver(quizCreateSchema),
    defaultValues: {
      questionsCount: quizAvailableCountToChoose[1],
      levels: ['low', 'medium'],
      categories: ['theory', 'code'],
    },
  });

  get isLoading() {
    return this.modelLoader.checkLoading(this, 'questionTemplates');
  }

  constructor() {
    makeAutoObservable(this);
  }
}
