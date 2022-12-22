import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import { AuthProvider } from '../contexts/auth';
import ThemeContrroler from '../modules/theme';
import '../styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(ThemeContrroler.updateTheme, [ThemeContrroler.updateTheme]);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
