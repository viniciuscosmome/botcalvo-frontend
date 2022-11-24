import { classes } from '../../../helpers/styles.helper';
import styles from './style.module.scss';

type iColumnProps = {
  workarea?: boolean;
  customClass?: string;
  select: 'left' | 'right';
  children: React.ReactNode | Array<React.ReactNode>;
}

export function ColumnDashboard({ select, workarea, customClass, children }: iColumnProps) {
  const customizeClass: Array<string> = [];

  customizeClass.push(styles[select]);
  workarea && customizeClass.push(styles.workarea);
  customClass && customizeClass.push(customClass);

  return (
    <div className={classes(...customizeClass)}>
      {children}
    </div>
  );
}
