import { classes } from '../../../helpers/styles.helper';

import styles from './style.module.scss';

type iButtonActionProps = {
  customClass?: string;
  style?: 'light' | 'simple' | 'simple-opacity';
  textAlign?: 'left' | 'right';
  type?: 'button' | 'submit';
  fitWidth?: boolean;
  slim?: boolean;
  grad?: boolean;
  scrollSnap?: boolean;
  action?: () => void;
  children: React.ReactNode | Array<React.ReactNode>;
};

export function ButtonAction ({
  customClass,
  style,
  textAlign,
  type,
  fitWidth,
  slim,
  grad,
  scrollSnap,
  action,
  children
}: iButtonActionProps) {
  const customizeClass: Array<string> = [];

  slim && customizeClass.push(styles.slim);
  fitWidth && customizeClass.push(styles.fitWidth);
  style && customizeClass.push(styles[style]);
  textAlign && customizeClass.push(styles[textAlign]);
  grad && customizeClass.push(styles.grad);
  scrollSnap && customizeClass.push(styles.scrollSnap);
  customClass && customizeClass.push(customClass);

  return (
    <button
      type={type}
      onClick={action}
      className={classes(styles.button, ...customizeClass)}
    >
      {children}
    </button>
  );
}
