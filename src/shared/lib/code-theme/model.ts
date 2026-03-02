import { makeObservable, observable } from 'mobx';
import { codeThemeCssUrls } from './assets';
import { loadCodeThemeCssFile } from './lib/load-code-theme-css-file';

export enum CodeThemeDC {
  Paraiso = 'paraiso',
  Github = 'github',
  AtomOne = 'atom-one',
  QtCreator = 'qt-creator',
  Stackoverflow = 'stackoverflow',
  TokyoNight = 'tokyo-night',
  Nnfx = 'nnfx',
  Kimbie = 'kimbie',
  PandaSyntax = 'panda-syntax',
  IsblEditor = 'isbl-editor',
}

export const codeThemeData = makeObservable(
  {
    value: CodeThemeDC.AtomOne,
    variants: Object.values(CodeThemeDC),
    async use(codeTheme: CodeThemeDC) {
      const themeUrl = codeThemeCssUrls[codeTheme];
      await loadCodeThemeCssFile(themeUrl);
      this.value = codeTheme;
      return codeTheme;
    },
  },
  {
    value: observable.ref,
  },
);
