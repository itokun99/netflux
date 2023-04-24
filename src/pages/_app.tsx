import '@libraries/google-font/index.css';
import '@libraries/normalizecss/normalizecss.css';
import { useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';
import StyledGlobalStyle from '@libraries/styled-component/styles';
import { theme } from '@libraries/styled-component/theme';
import { ThemeProvider } from 'styled-components';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout<T = any> = AppProps<T> & {
  Component: NextPageWithLayout<T>
}

export default function App({ Component, pageProps }: AppPropsWithLayout<{}>) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <StyledGlobalStyle />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  )
}
