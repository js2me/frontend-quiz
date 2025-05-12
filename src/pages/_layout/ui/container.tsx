import { observer } from 'mobx-react-lite';
import { AnyRoute } from 'mobx-route';
import { Link } from 'mobx-route/react';
import { useCreateViewModel } from 'mobx-view-model';
import { ReactNode } from 'react';
import { cx } from 'yummies/css';

import { buttonVariants } from '@/shared/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/shared/ui/navigation-menu';

import { LayoutModel } from '../model';

export const Container = observer(({ children }: { children?: ReactNode }) => {
  const model = useCreateViewModel(LayoutModel);

  return (
    <div className={'flex flex-col p-4'}>
      <NavigationMenu className={'ml-auto'}>
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
                    {text}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <div className={'flex flex-col max-w-[840px] w-full mx-auto prose'}>
        {children}
      </div>
    </div>
  );
});
