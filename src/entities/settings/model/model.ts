import { LinkedAbortController } from 'linked-abort-controller';
import { makeObservable, observable, reaction } from 'mobx';
import { Storage, TwoColorThemeStore } from 'mobx-swiss-knife';

import { htmlElement } from '@/shared/config';

import type { FontSizeSetting } from './model.types';

export class SettingsModel {
  private storageModel: Storage;
  private abortController: AbortController;
  private themeStore: TwoColorThemeStore;

  get theme() {
    return this.themeStore.theme;
  }

  switchTheme = () => {
    this.themeStore.switchTheme();
  };

  fontSize: FontSizeSetting = 'md';

  availableFontSizes: FontSizeSetting[] = ['sm', 'md', 'lg'];

  setFontSize = (fontSize: FontSizeSetting) => {
    this.fontSize = fontSize;
  };

  destroy() {
    this.abortController.abort();
  }

  constructor(abortSignal?: AbortSignal) {
    this.abortController = new LinkedAbortController(abortSignal);

    this.storageModel = new Storage({
      abortSignal: this.abortController.signal,
    });
    this.themeStore = new TwoColorThemeStore({
      abortSignal: this.abortController.signal,
      fallbackTheme: 'dark',
      onChangeColorScheme: (colorScheme) => {
        if (colorScheme === 'dark') {
          htmlElement.classList.add('dark');
        } else {
          htmlElement.classList.remove('dark');
        }
      },
    });

    makeObservable(this, { fontSize: observable });

    reaction(
      () => this.fontSize,
      (fontSize) => {
        htmlElement.dataset.fontSize = fontSize;
      },
      {
        fireImmediately: true,
        signal: this.abortController.signal,
      },
    );

    this.storageModel.syncProperty(this, 'fontSize');
  }
}
