import { classes } from '../../../helpers/styles.helper';
import styles from './style.module.scss';

type iMainProps = {
  customClass?: string;
  children: React.ReactNode | Array<React.ReactNode>;
};

export function Main({ children, customClass }: iMainProps) {
  return (
    <main className={classes(styles.main, customClass ?? '')}>
      {children}
    </main>
  );
}
