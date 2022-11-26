import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeContext, themeDefaultValue } from '../components/macro/Context/';
import type { iThemeProps } from '../components/macro/Context/';
import '../styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<iThemeProps | null>(themeDefaultValue);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
