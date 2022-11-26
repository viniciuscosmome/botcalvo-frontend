import { useContext } from 'react';
import { ThemeContext, iThemeProps, themeDefaultValue } from '../../mega/Context';
import styles from './style.module.scss';

type iThemeProp = {
  data: string;
  icon: string;
  content: string;
};

export function SelectTheme() {
  const themeContext = useContext(ThemeContext);
  const themes: Array<iThemeProp> = [
    {
      data: '',
      icon: 'bi bi-cloud-sun-fill',
      content: 'padrão'
    },
    {
      data: 'light',
      icon: 'bi bi-brightness-high-fill',
      content: 'claro'
    },
    {
      data: 'dark',
      icon: 'bi bi-moon-fill',
      content: 'escuro'
    }
  ];

  const updateGlobalTheme = (newTheme: iThemeProps): void => {
    document.querySelector('body')?.setAttribute('data-user-theme', newTheme.data);
  };

  const handleClick = (): void => {
    let newTheme: iThemeProps = themeDefaultValue;
    const searchData = themeContext.theme?.data;
    const { length } = themes;

    for (let index = 0; index < length; index++) {
      if (searchData !== themes[index].data) continue;

      newTheme = themes[index + 1] ?? themes[0];

      break;
    }

    updateGlobalTheme(newTheme);
    themeContext.setTheme(newTheme);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <span className={styles.circle}>
        <i className={themeContext.theme?.icon}></i>
      </span>
      <span className={styles.content}>
        {themeContext.theme?.content}
      </span>
    </button>
  );
}
