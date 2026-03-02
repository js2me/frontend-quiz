import { Settings } from 'lucide-react';
import { Link } from 'mobx-route/react';
import { withViewModel } from 'mobx-view-model';
import type { ReactNode } from 'react';
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
import { LayoutVM } from '../model';

import { SettingsPopup } from './components/settings-popup';

export const Container = withViewModel<LayoutVM, { children?: ReactNode }>(
  LayoutVM,
  ({ children, model }) => {
    return (
      <div className={'relative flex h-full min-h-[inherit] flex-col'}>
        <LogoSvg
          className={
            'fixed bottom-2 left-2 h-14 w-14 cursor-pointer select-none text-reverse active:scale-105 max-xs:h-10 max-xs:w-10'
          }
        />
        <img
          src={tysonImage}
          alt={''}
          style={{
            filter: 'drop-shadow(rgba(0, 0, 0, 0.225) 0px 2px 7px)',
          }}
          className={
            'fixed right-2 bottom-2 w-36 -scale-x-100 cursor-pointer select-none active:-scale-x-105 active:scale-y-105 dark:brightness-75'
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
              {model.navItems.map((props) => {
                const isActive =
                  'to' in props
                    ? typeof props.to === 'string'
                      ? undefined
                      : props.to?.isOpened
                    : false;

                const { text, icon: Icon, action, target } = props;

                return (
                  <NavigationMenuItem key={text} onClick={action}>
                    <Link
                      asChild
                      {...(props.to
                        ? { to: props.to as any }
                        : { href: props.href || ('' as any) })}
                    >
                      <NavigationMenuLink
                        active={isActive}
                        target={target}
                        className={cx(
                          'flex flex-row items-center',
                          buttonVariants({
                            variant:
                              props.style === 'negative'
                                ? 'destructive-link'
                                : 'link',
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
                  <Settings className={'mr-1 size-4'} />
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
            'prose mx-auto flex w-full max-w-210 flex-1 flex-col p-6 max-md:p-4'
          }
        >
          {children}
        </div>
      </div>
    );
  },
);
