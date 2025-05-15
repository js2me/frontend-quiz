import { createTwoColorThemeStore } from 'mobx-shared-entities';

import { htmlElement } from './dom';

export const themeStore = createTwoColorThemeStore({
  fallbackTheme: 'dark',
  onChangeColorScheme: (colorScheme) => {
    if (colorScheme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  },
});
