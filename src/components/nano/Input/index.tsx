import { SyntheticEvent } from 'react';
import styles from './style.module.scss';

type iInputProps = {
  index?: number;
  required?: boolean;
  describe: string;
  type: string;
  name: string;
  value: string | number | undefined;
  onChange: (event: SyntheticEvent<HTMLInputElement>) => void;
};

export function Input(props: iInputProps) {
  const id = `${props.name}-${props.index ?? 0}`;

  return (
    <label htmlFor={id} className={styles.label}>
      <input id={id} className={styles.input} {...props}/>
      <div className={styles.describe}>
        {props.describe}
      </div>
    </label>
  );
}
