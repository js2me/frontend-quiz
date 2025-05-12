import { valibotResolver } from '@hookform/resolvers/valibot';
import { makeAutoObservable } from 'mobx';
import { MobxForm } from 'mobx-react-hook-form';
import { ViewModelSimple } from 'mobx-view-model';

import { newQuizSchema } from './schemas';

export class HomePageVM implements ViewModelSimple {
  id = 'home-page';

  newQuizForm = new MobxForm({
    resolver: valibotResolver(newQuizSchema),
    defaultValues: {
      questionsCount: 16,
    },
  });

  constructor() {
    makeAutoObservable(this);
  }
}
