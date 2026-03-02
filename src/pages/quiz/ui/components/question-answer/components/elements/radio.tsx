import { cx } from 'yummies/css';

export const Radio = ({
  className,
  checked,
  circleClassName,
}: {
  className?: string;
  checked?: boolean;
  circleClassName?: string;
}) => {
  return (
    <div
      className={cx(
        'mt-0.5 mb-auto flex shrink-0 items-center justify-center rounded-full border-2 border-current font-bold transition-all',
        className,
      )}
      style={{ width: 20, height: 20 }}
    >
      <div
        style={{ height: 10, width: 10 }}
        className={cx(
          'shrink-0 rounded-full transition-all',
          {
            'scale-100 opacity-100': checked,
            'scale-0 opacity-0': !checked,
          },
          circleClassName,
        )}
      />
    </div>
  );
};
