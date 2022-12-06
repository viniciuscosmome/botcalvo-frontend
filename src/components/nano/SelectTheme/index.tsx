import ThemeController, { themes } from '../../../modules/theme';
import type { iThemeProp } from '../../../modules/theme';
import styles from './style.module.scss';

export function SelectThemeButtons() {
  const renderButton = (props: iThemeProp, index: number) => {
    return (
      <button
        key={index}
        className={styles.button}
        data-select-color-schema={props.data}
        onClick={ThemeController.change}
      >
        <span className={styles.circle}>
          <i className={props.icon}></i>
        </span>
        <span className={styles.content}>
          {props.content}
        </span>
      </button>
    );
  };

  return (
    <>
      {themes.map(renderButton)}
    </>
  );
}
