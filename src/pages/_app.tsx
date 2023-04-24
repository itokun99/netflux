import '@libraries/google-font/index.css';
import '@libraries/normalizecss/normalizecss.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';
import StyledGlobalStyle from '@libraries/styled-component/styles';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyledGlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
