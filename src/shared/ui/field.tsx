import { TriangleAlert } from 'lucide-react';
import { ReactNode } from 'react';
import { cx } from 'yummies/css';

import { Label } from './label';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

export interface FieldProps {
  className?: string;
  label?: string;
  error?: Maybe<string>;
  errorPlacement?: 'label' | 'bottom';
  children?: ReactNode;
}

export const Field = ({
  className,
  label,
  error,
  errorPlacement = 'label',
  children,
}: FieldProps) => (
  <div className={cx('flex flex-col gap-2 prose', className)}>
    {label && (
      <Label
        className={cx({
          'text-red-400': error,
        })}
      >
        {label}
        {errorPlacement === 'label' && !!error && (
          <Tooltip>
            <TooltipTrigger>
              <TriangleAlert className={'size-4.5 -mt-1 -mb-1 -ml-0.5'} />
            </TooltipTrigger>
            <TooltipContent>{error}</TooltipContent>
          </Tooltip>
        )}
      </Label>
    )}
    {children}
    {errorPlacement === 'bottom' && !!error && (
      <span className={'text-red-400'}>{error}</span>
    )}
  </div>
);
