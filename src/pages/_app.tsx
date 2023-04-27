import '@libraries/google-font/index.css';
import '@libraries/normalizecss/normalizecss.css';
import Head from 'next/head';
import StyledGlobalStyle from '@libraries/styled-component/styles';
import { theme } from '@libraries/styled-component/theme';
import { ThemeProvider } from 'styled-components';
import { AppPropsWithLayout } from '@frontend/types/next';

export default function App({ Component, pageProps }: AppPropsWithLayout<{}>) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <StyledGlobalStyle />
        {getLayout(<Component {...pageProps} />, pageProps)}
      </ThemeProvider>
    </>
  )
}
