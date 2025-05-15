import { ThemeSwitcherButton } from './theme-switcher-button';

export const SettingsPopup = () => {
  return (
    <div className={'flex flex-col gap-2 p-2 w-[240px]'}>
      <div className={'flex flex-row justify-between gap-2 items-center'}>
        <h4 className={'m-0'}>Тема:</h4>
        <ThemeSwitcherButton variant={'ghost'} />
      </div>
    </div>
  );
};
