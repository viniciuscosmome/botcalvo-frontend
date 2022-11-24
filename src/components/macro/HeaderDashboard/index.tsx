import { classes } from '../../../helpers/styles.helper';
import { ColumnDashboard, Title, ButtonAction } from '../../';
import styles from './style.module.scss';

type iHeaderDashboardProps = {
  user: {
    name: string;
  };
}

export function HeaderDashboard({ user }: iHeaderDashboardProps) {
  return (
    <header className={styles.header}>
      <ColumnDashboard select={'left'}>
        <Title size='small'>
          Calvinho
        </Title>

        <ButtonAction slim>
          Me Adicione <i className={classes('bi bi-robot', styles.icon)}></i>
        </ButtonAction>
      </ColumnDashboard>

      <ColumnDashboard select={'right'}>
        <Title size='small'>
          {user.name}
        </Title>
      </ColumnDashboard>
    </header>
  );
}
