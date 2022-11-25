import { classes } from '../../../helpers/styles.helper';
import { Column, Title, ButtonAction } from '../..';
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
          Me Adicione <i className={classes('bi bi-robot', styles.icon)}></i>
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
    <header className={styles.header}>
      Home header
    </header>
  );
}

export const Header = {
  Home,
  Dashboard,
};
