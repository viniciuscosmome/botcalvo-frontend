import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import ThemeContrroler from '../modules/theme';
import '../styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(ThemeContrroler.updateTheme, [ThemeContrroler.updateTheme]);

  return (
    <Component {...pageProps} />
  );
}
