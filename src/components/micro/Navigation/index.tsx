import Link from 'next/link';
import { Title, ButtonAction, SelectTheme } from '../..';
import styles from './style.module.scss';

export type iNavigationDashboardItemProps = {
  id: number | string;
  name: string;
  redirect: string;
};

type iNavigationDashboardSectionProps = {
  icon?: string;
  title?: string;
  extraButtonIcon?: string;
  extraButtonContent?: string;
  extraButtonRedirect?: string;
  content: Array<iNavigationDashboardItemProps>;
};

const renderNavItem = ({
  name,
  redirect,
}: iNavigationDashboardItemProps, index: number) => {
  const redirectTo = redirect ?? '#unknow';

  return (
    <Link href={redirectTo} key={index}>
      <ButtonAction style='simple' textAlign='left' fitWidth scrollSnap slim>
        {name}
      </ButtonAction>
    </Link>
  );
};

function Dashboard({
  icon,
  title,
  extraButtonIcon,
  extraButtonContent,
  extraButtonRedirect,
  content }: iNavigationDashboardSectionProps) {
  const extraButtonRedirectTo = extraButtonRedirect ?? '#unknow';

  return (
    <section className={styles.section}>
      {title &&
        <Title size='small'>
          {icon && <i className={icon}></i>} {title}
        </Title>}

      <nav className={styles.list}>
        {content.map(renderNavItem)}
      </nav>

      {extraButtonContent && extraButtonRedirect &&
        <Link href={extraButtonRedirectTo} className={styles.extraButton}>
          <ButtonAction style='simple-opacity' textAlign='left' fitWidth slim>
            {extraButtonIcon && <i className={extraButtonIcon}></i>} {extraButtonContent}
          </ButtonAction>
        </Link>}
    </section>
  );
}

function Home() {
  return (
    <nav className={styles.home}>
      <Link href={'/'} className={styles.link}>
        Ínicio
      </Link>

      <Link href={'/auth/login'} className={styles.link}>
        Entrar
      </Link>

      <Link href={'/auth/register'}>
        <ButtonAction slim grad customClass={styles.register}>
          Cadastrar
        </ButtonAction>
      </Link>

      <SelectTheme />
    </nav>
  );
}

export const Navigation = {
  Home,
  Dashboard,
};
