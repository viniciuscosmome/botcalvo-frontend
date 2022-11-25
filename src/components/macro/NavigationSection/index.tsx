import { useRouter } from 'next/router';
import { Title, ButtonAction } from '../../';
import styles from './style.module.scss';

export type iNavigationItemProps = {
  id: number | string;
  name: string;
  redirect: string;
};

type iNavigationSectionProps = {
  icon?: string;
  title?: string;
  extraButtonIcon?: string;
  extraButtonContent?: string;
  extraButtonRedirect?: string;
  content: Array<iNavigationItemProps>;
};

const renderNavItem = ({
  name,
  redirect,
}: iNavigationItemProps, index: number) => {
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

export function NavigationSection({
  icon,
  title,
  extraButtonIcon,
  extraButtonContent,
  extraButtonRedirect,
  content }: iNavigationSectionProps) {
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
