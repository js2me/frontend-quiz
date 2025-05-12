import { ReactNode } from 'react';
import { cx } from 'yummies/css';

export const Header = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return <h1 className={cx('pt-4', className)}>{children}</h1>;
};
