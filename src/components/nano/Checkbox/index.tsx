import { SyntheticEvent } from 'react';
import { classes } from '../../../helpers/styles.helper';
import styles from './style.module.scss';

type iCheckboxProps = {
  index?: number;
  required?: boolean;
  name: string;
  checked: boolean;
  children: React.ReactNode | Array<React.ReactNode>;
  onChange: (event: SyntheticEvent<HTMLInputElement>) => void;
};

export function Checkbox(props: iCheckboxProps) {
  const id = `${props.name}-${props.index ?? 0}`;

  return (
    <label htmlFor={id} className={styles.label}>
      <input
        id={id}
        className={styles.checkbox}
        type={'checkbox'}
        name={props.name}
        checked={props.checked}
        onChange={props.onChange}
        required={props.required}
      />

      <i className={classes('bi bi-check2-square', styles.selected)}></i>
      <i className={classes('bi bi-app', styles.undefined)}></i>

      <div className={styles.content}>
        {props.children}
      </div>
    </label>
  );
}
