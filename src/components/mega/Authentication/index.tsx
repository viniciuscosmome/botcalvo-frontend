import Link from 'next/link';
import { Wrapper, Logo } from '../../';
import { classes } from '../../../helpers/styles.helper';
import styles from './style.module.scss';

type iAuthenticationProps = {
  children: React.ReactNode | Array<React.ReactNode>;
};

export function AuthenticationWrapper({ children }: iAuthenticationProps) {
  return (
    <Wrapper nowrap>
      <div className={classes(styles.column, styles.left)}>
        <Logo.Complete size={'large'} color={'white'} />
      </div>

      <div className={classes(styles.column, styles.right)}>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.legal}>
          <Link href={'/?content=legal-use'} className={styles.link}>
            Termos de uso
          </Link>
          |
          <Link href={'/?content=legal-privacy'} className={styles.link}>
            Política de Privacidade
          </Link>
        </footer>
      </div>
    </Wrapper>
  );
}
