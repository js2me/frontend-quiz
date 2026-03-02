import { CodeThemeDC } from '@/shared/api';

import atomOneTheme from './atom-one.css?url';
import githubTheme from './github.css?url';
import isblEditorTheme from './isbl-editor.css?url';
import kimbieTheme from './kimbie.css?url';
import nnfxTheme from './nnfx.css?url';
import pandaSyntaxTheme from './panda-syntax.css?url';
import paraisoTheme from './paraiso.css?url';
import qtCreatorTheme from './qt-creator.css?url';
import stackoverflowTheme from './stackoverflow.css?url';
import tokyoNightTheme from './tokyo-night.css?url';

export const codeThemeCssUrls: Record<CodeThemeDC, string> = {
  [CodeThemeDC.QtCreator]: qtCreatorTheme,
  [CodeThemeDC.AtomOne]: atomOneTheme,
  [CodeThemeDC.Kimbie]: kimbieTheme,
  [CodeThemeDC.Nnfx]: nnfxTheme,
  [CodeThemeDC.TokyoNight]: tokyoNightTheme,
  [CodeThemeDC.Stackoverflow]: stackoverflowTheme,
  [CodeThemeDC.Paraiso]: paraisoTheme,
  [CodeThemeDC.PandaSyntax]: pandaSyntaxTheme,
  [CodeThemeDC.IsblEditor]: isblEditorTheme,
  [CodeThemeDC.Github]: githubTheme,
};
