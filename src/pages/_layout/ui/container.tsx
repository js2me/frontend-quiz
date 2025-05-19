import { Settings } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { AnyRoute } from 'mobx-route';
import { Link } from 'mobx-route/react';
import { useCreateViewModel } from 'mobx-view-model';
import { ReactNode } from 'react';
import { cx } from 'yummies/css';

import { buttonVariants } from '@/shared/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/shared/ui/navigation-menu';

import { LogoSvg, tysonImage } from '../assets';
import { LayoutModel } from '../model';

import { SettingsPopup } from './components/settings-popup';

export const Container = observer(({ children }: { children?: ReactNode }) => {
  const model = useCreateViewModel(LayoutModel);

  return (
    <div className={'flex flex-col min-h-[inherit] h-full relative'}>
      <LogoSvg
        className={
          'fixed bottom-2 left-2 h-14 w-14 text-reverse max-xs:h-10 max-xs:w-10 active:scale-105 cursor-pointer select-none'
        }
      />
      <img
        src={tysonImage}
        alt={''}
        style={{
          filter: 'drop-shadow(0px 2px 7px #00000086)',
        }}
        className={
          'fixed bottom-2 right-2 w-36 -scale-x-100 dark:brightness-75 active:-scale-x-105 active:scale-y-105 cursor-pointer select-none'
        }
      />
      <div className={'flex flex-row p-6 max-md:p-4'}>
        <NavigationMenu
          className={'ml-auto'}
          viewport
          delayDuration={0}
          skipDelayDuration={1000}
        >
          <NavigationMenuList>
            {model.navItems.map(({ to, text, icon: Icon }) => {
              const isActive = typeof to === 'string' ? undefined : to.isOpened;

              return (
                <NavigationMenuItem key={text}>
                  <Link to={to as AnyRoute} asChild>
                    <NavigationMenuLink
                      active={isActive}
                      className={cx(
                        'flex flex-row items-center',
                        buttonVariants({
                          variant: 'link',
                          active: isActive,
                        }),
                      )}
                    >
                      {Icon && <Icon />}
                      <span
                        className={cx({
                          'max-[320px]:hidden': !!Icon,
                        })}
                      >
                        {text}
                      </span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
            <NavigationMenuItem>
              <NavigationMenuTrigger chevronClassName={'max-sm:hidden'}>
                <Settings className={'size-4 mr-1'} />
                <span className={'max-sm:hidden'}>Настройки</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <SettingsPopup />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div
        className={
          'flex flex-col max-w-210 flex-1 w-full mx-auto prose p-6 max-md:p-4'
        }
      >
        {children}
      </div>
    </div>
  );
});
