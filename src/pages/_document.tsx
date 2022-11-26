import { Html, Head, Main, NextScript } from 'next/document';
import { useContext } from 'react';
import { ThemeContext } from '../components/macro/Context';

export default function Document() {
  const context = useContext(ThemeContext);

  return (
    <Html lang={'pt-BR'}>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body data-user-theme={context.theme?.data}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
