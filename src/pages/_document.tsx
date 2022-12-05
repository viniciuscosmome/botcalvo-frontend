import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang={'pt-BR'}>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body data-user-theme="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
