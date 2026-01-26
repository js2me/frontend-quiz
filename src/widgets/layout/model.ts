import { makeAutoObservable } from 'mobx';
import type { AnyRoute } from 'mobx-route';
import type { ViewModelSimple } from 'mobx-view-model';
import type { ComponentType } from 'react';
import { aboutRoute } from '@/pages/about';
import { homeRoute } from '@/pages/home';
import { GithubIcon } from '@/shared/ui/icons/github';

interface LayoutNavItem {
  text: string;
  to?: string | AnyRoute;
  href?: string | AnyRoute;
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
        href: 'https://github.com/js2me/frontend-quiz',
      },
    ];
  }

  constructor() {
    makeAutoObservable(this);
  }
}
