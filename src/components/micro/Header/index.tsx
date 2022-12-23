import Link from 'next/link';
import { useContext } from 'react';

import { AuthContext } from '../../../contexts/auth';
import { classes } from '../../../helpers/styles.helper';
import { Logo, Column, Title, ButtonAction, Navigation } from '../..';
import styles from './style.module.scss';

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <Column select={'left'}>
        <Title size='small'>
          <Link href={'/dashboard/stats'}>
            <Logo.Complete color />
          </Link>
        </Title>

        <ButtonAction slim grad>
          Me Adicione <Logo.Icon color={'white'} size={'small'}/>
        </ButtonAction>
      </Column>

      <Column select={'right'}>
        <Title size='small'>
          {user?.name ?? ''}
        </Title>
      </Column>
    </header>
  );
}

function Home() {
  return (
    <header className={classes(styles.header, styles.home)}>
      <Link href={'/'}>
        <Logo.Complete color />
      </Link>

      <Navigation.Home selectTheme={true} responsive={true} />
    </header>
  );
}

export const Header = {
  Home,
  Dashboard,
};
