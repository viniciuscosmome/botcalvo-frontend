import { useEffect } from 'react';
import { classes } from '../../../../helpers/styles.helper';
import styles from './style.module.scss';

type iAlertProps = {
  status: 'success' | 'warning' | 'error' | '';
  title: string;
  content: string;
  autoClose: number;
};

export function Alert(props: iAlertProps) {
  const closeAlert = (): void => {
    const alertCard = document.querySelector<HTMLElement>('[data-js="notify-alert"]');
    alertCard?.remove();
  };

  const startAutoClose = () => {
    if (props.autoClose <= 0) return;
    setTimeout(closeAlert, props.autoClose);
  };

  useEffect(startAutoClose, [startAutoClose]);

  return (
    <section data-js={'notify-alert'} className={classes(styles.alert, styles[props.status])}>
      <h3 className={styles.title}>
        <span>
          {props.title}
        </span>

        <button type={'button'} className={styles.close} onClick={closeAlert}>
          <i className={classes(styles.icon, 'bi bi-x-octagon-fill')}></i>
        </button>
      </h3>

      <p className={styles.content}>
        {props.content}
      </p>
    </section>
  );
}
