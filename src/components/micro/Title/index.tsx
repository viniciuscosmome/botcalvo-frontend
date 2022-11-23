import { classes } from '../../../helpers/styles.helper';
import styles from './style.module.scss';

type iTitleProps = {
  customClass?: string;
  size?: 'small' | 'medium';
  colorTheme?: boolean;
  uppercase?: boolean;
  capitalize?: boolean;
  children: React.ReactNode | Array<React.ReactNode>;
};

export function Title({
  customClass,
  size,
  colorTheme,
  uppercase,
  capitalize,
  children
}: iTitleProps) {
  const customizeClass: Array<string> = [];

  size && customizeClass.push(styles[size]);
  colorTheme && customizeClass.push(styles.colorTheme);
  uppercase && customizeClass.push(styles.uppercase);
  capitalize && customizeClass.push(styles.capitalize);
  customClass && customizeClass.push(customClass);

  return (
    <h2 className={classes(styles.title, ...customizeClass)}>
      {children}
    </h2>
  );
}
