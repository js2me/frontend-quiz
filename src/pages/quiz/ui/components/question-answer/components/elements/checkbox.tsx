import { Check, X } from 'lucide-react';
import { cx } from 'yummies/css';

export const Checkbox = ({
  className,
  contentClassName,
  checked,
  number,
  showX,
}: {
  className?: string;
  checked?: boolean;
  contentClassName?: string;
  number: number | string | null | false;
  showX?: boolean;
}) => {
  return (
    <div
      className={cx(
        'relative mt-0.5 mb-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border-2 border-current font-bold transition-all',
        className,
      )}
    >
      {number === false ? (
        <Check
          className={cx(
            'transition-all',
            {
              'scale-100 opacity-100': checked && !showX,
              'scale-0 opacity-0': !checked || showX,
            },
            contentClassName,
          )}
          strokeWidth={4}
        />
      ) : (
        <span className={contentClassName}>{number}</span>
      )}
      {showX && (
        <X className={'absolute inset-0 h-full w-full'} strokeWidth={4} />
      )}
    </div>
  );
};
