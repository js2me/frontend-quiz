import { Moon, Sun, SunMoon } from 'lucide-react';
import { observer } from 'mobx-react-lite';

import { themeStore } from '@/shared/config';
import { Button, ButtonProps } from '@/shared/ui/button';

export const ThemeSwitcherButton = observer((props: ButtonProps) => {
  return (
    <Button onClick={themeStore.switchTheme} variant={'secondary'} {...props}>
      {themeStore.theme === 'light' && (
        <>
          <Sun />
          Светлая
        </>
      )}
      {themeStore.theme === 'auto' && (
        <>
          <SunMoon />
          Авто
        </>
      )}
      {themeStore.theme === 'dark' && (
        <>
          <Moon />
          Тёмная
        </>
      )}
    </Button>
  );
});
