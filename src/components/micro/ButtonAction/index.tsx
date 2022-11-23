import { classes } from '../../../helpers/styles.helper';

import styles from './style.module.scss';

type iButtonActionProps = {
  style?: string;
  textAlign?: string;
  fitWidth?: boolean;
  slim?: boolean;
  type?: 'button' | 'submit';
  action?: () => unknown;
  children?: React.ReactNode | Array<React.ReactNode>;
};

export function ButtonAction ({
  style,
  textAlign,
  type,
  fitWidth,
  slim,
  action,
  children
}: iButtonActionProps) {
  const customClass: Array<string> = [];

  slim && customClass.push(styles.slim);
  fitWidth && customClass.push(styles.fitWidth);
  style && customClass.push(styles[style]);
  textAlign && customClass.push(styles[textAlign]);

  return (
    <button
      type={type}
      onClick={action}
      className={classes(styles.button, ...customClass)}
    >
      {children}
    </button>
  );
}
