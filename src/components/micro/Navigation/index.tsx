import Link from 'next/link';
import { useState } from 'react';

import type { iChannel } from '../../../services/global.api.types';
import { classes } from '../../../helpers/styles.helper';
import { Title, ButtonAction, SelectThemeButtons } from '../..';
import styles from './style.module.scss';

type iButtonProps = {
  id: string;
  name: string;
  redirect?: string;
};

type iNavigationDashboardSectionProps = {
  icon?: string;
  title?: string;
  extraButtonIcon?: string;
  extraButtonContent?: string;
  extraButtonRedirect?: string;
  options: Array<iChannel> | Array<iButtonProps> | undefined;
};

type iHomeProps = {
  responsive?: boolean;
  selectTheme: boolean;
};

const renderNavItem = ({
  id,
  name,
  redirect,
}: iButtonProps, index: number) => {
  const redirectTo = redirect ? redirect : `./channel?id=${id}`;

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
  options }: iNavigationDashboardSectionProps) {
  const extraButtonRedirectTo = extraButtonRedirect ?? '#unknow';

  return (
    <section className={styles.section}>
      {title &&
        <Title size='small'>
          {icon && <i className={icon}></i>} {title}
        </Title>}

      <nav className={styles.list}>
        {options?.map(renderNavItem)}
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

function Home({selectTheme, responsive}: iHomeProps) {
  const [showNavigation, setShowNavigation] = useState(false);
  const responsiveClass = responsive ? styles.responsive : '';

  const handleClick = (): void => {
    setShowNavigation(!showNavigation);
  };

  return (
    <>
      {responsive &&
        <ButtonAction action={handleClick} customClass={styles.openMenu} grad slim>
          {!showNavigation && <i className="bi bi-list"></i>}
          {showNavigation && <i className="bi bi-x-circle-fill"></i>}
        </ButtonAction>}

      <nav className={classes(styles.home, responsiveClass, showNavigation ? styles.visible : '')}>
        <Link href={'/'} className={styles.link}>
          In??cio
        </Link>

        <Link href={'/auth/login'} className={styles.link}>
          Entrar
        </Link>

        <Link href={'/auth/register'}>
          <ButtonAction slim grad customClass={styles.register}>
            Cadastrar
          </ButtonAction>
        </Link>

        {selectTheme && <SelectThemeButtons />}
      </nav>
    </>
  );
}

export const Navigation = {
  Home,
  Dashboard,
};
