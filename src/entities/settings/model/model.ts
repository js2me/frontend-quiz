import { LinkedAbortController } from 'linked-abort-controller';
import { observable, reaction } from 'mobx';
import { StorageModel, TwoColorThemeStore } from 'mobx-shared-entities';

import { htmlElement } from '@/shared/config';

import { FontSizeSetting } from './model.types';

export class SettingsModel {
  private storageModel: StorageModel;
  private abortController: AbortController;
  private themeStore: TwoColorThemeStore;

  constructor(abortSignal?: AbortSignal) {
    this.abortController = new LinkedAbortController(abortSignal);

    this.storageModel = new StorageModel({
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

  get theme() {
    return this.themeStore.theme;
  }

  switchTheme = () => {
    this.themeStore.switchTheme();
  };

  @observable
  accessor fontSize: FontSizeSetting = 'md';

  availableFontSizes: FontSizeSetting[] = ['sm', 'md', 'lg'];

  setFontSize = (fontSize: FontSizeSetting) => {
    this.fontSize = fontSize;
  };

  destroy() {
    this.abortController.abort();
  }
}
