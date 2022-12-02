import { SyntheticEvent } from 'react';
import { classes } from '../../../helpers/styles.helper';
import styles from './style.module.scss';

type iFormsProps = {
  customClass?: string;
  action: string;
  method: string;
  onsubmit: (event: SyntheticEvent) => void;
  children: React.ReactNode | Array<React.ReactNode>;
};

export function Forms({ customClass, action, method, onsubmit, children }: iFormsProps) {
  return (
    <form
      action={action}
      method={method}
      onSubmit={onsubmit}
      className={classes(styles.form, customClass ?? '')}>

      {children}
    </form>
  );
}
