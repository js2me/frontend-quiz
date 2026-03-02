import { makeAutoObservable } from 'mobx';
import type { AnyRoute } from 'mobx-route';
import type { ViewModelSimple } from 'mobx-view-model';
import type { ComponentType, HTMLAttributeAnchorTarget } from 'react';
import { typeGuard } from 'yummies/type-guard';
import { aboutRoute } from '@/pages/about';
import { homeRoute } from '@/pages/home';
import { quizRoute } from '@/pages/quiz';
import { GithubIcon } from '@/shared/ui/icons/github';

interface LayoutNavItem {
  text: string;
  to?: string | AnyRoute;
  href?: string | AnyRoute;
  target?: HTMLAttributeAnchorTarget;
  icon?: ComponentType;
  action?: VoidFunction;
  style?: 'negative';
}

export class LayoutVM implements ViewModelSimple {
  id = 'layout';

  private extraNavItems: LayoutNavItem[] = [];

  get navItems(): LayoutNavItem[] {
    return [
      ...this.extraNavItems,
      {
        text: 'Квиз',
        to: quizRoute.isOpened ? quizRoute : homeRoute,
      },
      !quizRoute.isOpened && {
        text: 'О проекте',
        to: aboutRoute,
      },
      !quizRoute.isOpened && {
        text: 'GitHub',
        icon: GithubIcon,
        target: '_blank',
        href: 'https://github.com/js2me/frontend-quiz',
      },
    ].filter((it) => typeGuard.isObject(it));
  }

  setNavItems(items: LayoutNavItem[]) {
    this.extraNavItems = items;
  }

  constructor() {
    makeAutoObservable(this);
  }
}
