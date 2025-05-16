import { Moon, Sun, SunMoon } from 'lucide-react';
import { observer } from 'mobx-react-lite';

import { settings } from '@/entities/settings/model';
import { Button, ButtonProps } from '@/shared/ui/button';

export const ThemeSwitcherButton = observer((props: ButtonProps) => {
  return (
    <Button onClick={settings.switchTheme} variant={'secondary'} {...props}>
      {settings.theme === 'light' && (
        <>
          <Sun />
          Светлая
        </>
      )}
      {settings.theme === 'auto' && (
        <>
          <SunMoon />
          Авто
        </>
      )}
      {settings.theme === 'dark' && (
        <>
          <Moon />
          Тёмная
        </>
      )}
    </Button>
  );
});
