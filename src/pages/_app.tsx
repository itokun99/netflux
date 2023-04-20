import '@libraries/google-font/index.css';
import '@libraries/normalizecss/normalizecss.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import StyledGlobalStyle from '@libraries/styled-component/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyledGlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
