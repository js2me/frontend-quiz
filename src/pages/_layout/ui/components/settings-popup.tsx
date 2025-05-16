import { FontSizeSwitcherButton } from './font-size-switcher-button';
import { ThemeSwitcherButton } from './theme-switcher-button';

export const SettingsPopup = () => {
  return (
    <div className={'flex flex-col gap-3 p-3 min-w-60'}>
      <div className={'flex flex-row justify-between gap-2 items-center'}>
        <h4 className={'m-0'}>Тема:</h4>
        <ThemeSwitcherButton variant={'ghost'} />
      </div>
      <div className={'flex flex-row justify-between gap-2 items-center'}>
        <h4 className={'m-0'}>Шрифт:</h4>
        <FontSizeSwitcherButton />
      </div>
    </div>
  );
};
