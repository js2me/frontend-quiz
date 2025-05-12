import { makeAutoObservable } from 'mobx';
import { AnyRoute } from 'mobx-route';
import { ViewModelSimple } from 'mobx-view-model';
import { ComponentType } from 'react';

import { GithubIcon } from '@/shared/ui/icons/github';

import { aboutRoute } from '../about';
import { homeRoute } from '../home';

interface LayoutNavItem {
  text: string;
  to: string | AnyRoute;
  icon?: ComponentType;
}

export class LayoutModel implements ViewModelSimple {
  id = 'layout';

  get navItems(): LayoutNavItem[] {
    return [
      {
        text: 'Квиз',
        to: homeRoute,
      },
      {
        text: 'О проекте',
        to: aboutRoute,
      },
      {
        text: 'GitHub',
        icon: GithubIcon,
        to: 'https://github.com/js2me/frontend-quiz',
      },
    ];
  }

  constructor() {
    makeAutoObservable(this);
  }
}
