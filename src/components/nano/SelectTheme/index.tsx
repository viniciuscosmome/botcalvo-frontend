import { useState } from 'react';
import styles from './style.module.scss';

type iThemeProp = {
  data: string;
  icon: string;
  content: string;
};

export function SelectTheme() {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const themes: Array<iThemeProp> = [
    {
      data: '',
      icon: '',
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

  const setDocumentThemeAttribute = (index: number) => {
    document.querySelector('html')?.setAttribute('data-user-theme', themes[index].data);
    document.body.setAttribute('data-user-theme', themes[index].data);
  };

  const handleClick = (): void => {
    let updateTo = selectedTheme + 1;
    if (updateTo > 2) updateTo = 0;
    setSelectedTheme(updateTo);
    setDocumentThemeAttribute(updateTo);
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      <span className={styles.circle}>
        <i className={themes[selectedTheme].icon}></i>
      </span>
      <span className={styles.content}>
        {themes[selectedTheme].content}
      </span>
    </button>
  );
}
