import Link from 'next/link';
import { Navigation, Logo } from '../../';
import { classes } from '../../../helpers/styles.helper';
import styles from './style.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Navigation.Home selectTheme={false} />

      <div className={styles.legal}>
        <span className={classes(styles.logo, styles.content)}>
          <Logo.Complete size={'small'} />
        </span>
        |
        <span className={styles.content}>
          &copy; 2022
        </span>
        |
        <Link href={'/?content=legal-use'} className={styles.content}>
          Termos de uso
        </Link>
        |
        <Link href={'/?content=legal-privacy'} className={styles.content}>
          Política de privaciadade
        </Link>
      </div>
    </footer>
  );
}
