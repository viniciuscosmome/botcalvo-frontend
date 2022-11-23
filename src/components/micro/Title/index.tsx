import { classes } from '../../../helpers/styles.helper';
import styles from './style.module.scss';

type iTitleProps = {
  customClass?: string;
  size?: 'small' | 'medium';
  colorTheme?: boolean;
  children: React.ReactNode | Array<React.ReactNode>;
};

export function Title({
  customClass,
  size,
  colorTheme,
  children
}: iTitleProps) {
  const customizeClass: Array<string> = [];

  size && customizeClass.push(styles[size]);
  colorTheme && customizeClass.push(styles.colorTheme);
  customClass && customizeClass.push(customClass);

  return (
    <h2 className={classes(styles.title, ...customizeClass)}>
      {children}
    </h2>
  );
}
