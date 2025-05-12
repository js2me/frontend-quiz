import { TriangleAlert } from 'lucide-react';
import { ReactNode } from 'react';
import { cx } from 'yummies/css';

import { Label } from './label';

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
      <Label>
        {label}
        {errorPlacement === 'label' && !!error && (
          <TriangleAlert className={'text-red-400'} />
        )}
      </Label>
    )}
    {children}
    {errorPlacement === 'bottom' && !!error && (
      <span className={'text-red-400'}>{error}</span>
    )}
  </div>
);
