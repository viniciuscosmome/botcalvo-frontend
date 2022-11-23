import { classes } from '../../../helpers/styles.helper';

import styles from './style.module.scss';

type iButtonActionProps = {
  customClass?: string;
  style?: 'light' | 'simple';
  textAlign?: 'left' | 'right';
  type?: 'button' | 'submit';
  fitWidth?: boolean;
  slim?: boolean;
  grad?: boolean;
  action?: () => unknown;
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
  action,
  children
}: iButtonActionProps) {
  const customizeClass: Array<string> = [];

  slim && customizeClass.push(styles.slim);
  fitWidth && customizeClass.push(styles.fitWidth);
  style && customizeClass.push(styles[style]);
  textAlign && customizeClass.push(styles[textAlign]);
  grad && customizeClass.push(styles.grad);
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
