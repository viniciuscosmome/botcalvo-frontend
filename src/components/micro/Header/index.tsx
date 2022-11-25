import { classes } from '../../../helpers/styles.helper';
import { Logo, Column, Title, ButtonAction, Navigation } from '../..';
import styles from './style.module.scss';

type iHeaderDashboardProps = {
  user: {
    name: string;
  };
};

function Dashboard({ user }: iHeaderDashboardProps) {
  return (
    <header className={styles.header}>
      <Column select={'left'}>
        <Title size='small'>
          Calvinho
        </Title>

        <ButtonAction slim grad>
          Me Adicione <Logo.Icon color={'white'} size={'small'}/>
        </ButtonAction>
      </Column>

      <Column select={'right'}>
        <Title size='small'>
          {user.name}
        </Title>
      </Column>
    </header>
  );
}

function Home() {
  return (
    <header className={classes(styles.header, styles.home)}>
      <Logo.Complete color />

      <Navigation.Home />
    </header>
  );
}

export const Header = {
  Home,
  Dashboard,
};
