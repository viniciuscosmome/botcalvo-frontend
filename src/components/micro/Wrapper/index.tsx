import { classes } from '../../../helpers/styles.helper';
import styles from './style.module.scss';

type iWrapperProps = {
  workarea?: boolean;
  nowrap?: boolean;
  children: React.ReactNode | Array<React.ReactNode>;
};

export function Wrapper({workarea, nowrap, children}: iWrapperProps) {
  const customizeClass: Array<string> = [];

  customizeClass.push(styles.wrapper);
  workarea && customizeClass.push(styles.workarea);
  nowrap && customizeClass.push(styles.nowrap);

  return (
    <div className={classes(...customizeClass)}>
      {children}
    </div>
  );
}
