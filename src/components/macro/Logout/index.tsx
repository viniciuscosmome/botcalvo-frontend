import { useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/auth';
import Link from 'next/link';

import styles from './style.module.scss';

export function Logout() {
  const { disconnectUser } = useContext(AuthContext);

  useEffect(() => {
    disconnectUser();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.message}>
          Desconectado <i className={'bi bi-broadcast'}></i>
        </div>

        <Link href='/auth/login' className={styles.link}>
          Entrar
        </Link>
      </div>
    </>
  );
}
