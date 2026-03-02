import { cx } from 'yummies/css';

export const Numberbox = ({
  className,
  number,
}: {
  className?: string;
  number: number | null;
}) => {
  return (
    <div
      className={cx(
        'mt-0.5 mb-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border-2 font-bold transition-colors',
        className,
      )}
    >
      <span>{number}</span>
    </div>
  );
};
