import { AArrowDown, AArrowUp, ALargeSmall } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { ComponentType } from 'react';

import { FontSizeSetting, settings } from '@/entities/settings/model';
import {
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupProps,
} from '@/shared/ui/toggle-group';

const FONT_SIZE_ICONS: Record<
  FontSizeSetting,
  ComponentType<{ className?: string }>
> = {
  sm: AArrowDown,
  md: ALargeSmall,
  lg: AArrowUp,
};

export const FontSizeSwitcherButton = observer(
  (props: Pick<Partial<ToggleGroupProps>, 'className'>) => {
    return (
      <ToggleGroup
        {...props}
        type={'single'}
        value={settings.fontSize}
        onValueChange={settings.setFontSize}
      >
        {settings.availableFontSizes.map((fontSize) => {
          const FontSizeIcon = FONT_SIZE_ICONS[fontSize];

          return (
            <ToggleGroupItem key={fontSize} value={fontSize} size={'lg'}>
              <FontSizeIcon className={'!size-5'} />
            </ToggleGroupItem>
          );
        })}
      </ToggleGroup>
    );
  },
);
