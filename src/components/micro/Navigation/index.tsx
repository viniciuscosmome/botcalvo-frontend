import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  const handleClick = (): void => {
    redirect && router.push(redirect);
  };

  return (
    <ButtonAction key={index} action={handleClick} style='simple' textAlign='left' fitWidth scrollSnap slim>
      {name}
    </ButtonAction>
  );
};

function Dashboard({
  icon,
  title,
  extraButtonIcon,
  extraButtonContent,
  extraButtonRedirect,
  content }: iNavigationDashboardSectionProps) {
  const router = useRouter();

  const handleClick = (): void => {
    extraButtonRedirect && router.push(extraButtonRedirect);
  };

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
        <ButtonAction action={handleClick} customClass={styles.extraButton} style='simple-opacity' textAlign='left' fitWidth slim>
          {extraButtonIcon && <i className={extraButtonIcon}></i>} {extraButtonContent}
        </ButtonAction>}
    </section>
  );
}

function Home() {
  return (
    <nav className={styles.home}>
      <Link href={'/'} className={styles.link}>
        Home
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
