import { classes } from '../../../../helpers/styles.helper';
import styles from './style.module.scss';

type iAlertProps = {
  show: boolean;
  status: 'success' | 'warning' | 'error' | '';
  title: string;
  content: string;
};

export function Alert(props: iAlertProps) {
  const closeAlert = (): void => {
    const alertCard = document.querySelector<HTMLElement>('[data-js="notify-alert"]');
    alertCard?.classList.remove(styles.success);
    alertCard?.classList.remove(styles.warning);
    alertCard?.classList.remove(styles.error);
  };

  return (
    <section data-js={'notify-alert'} className={classes(styles.alert, props.show ? styles[props.status] : '')}>
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
