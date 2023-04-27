import Head from 'next/head'
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from '@frontend/types/next';

const HomePage = dynamic(() => import('@components/pages/Homepage'));
const MainTemplate = dynamic(() => import('@components/templates/MainTemplate'));

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Kerja Koding - Loker IT untuk Pemula</title>
        <meta name="description" content="Website pencarian kerja dan artikel seputar dunia Kerja IT" />
      </Head>
      <HomePage />
    </>
  )
}

Home.getLayout = (page, pageProps) => {
  return (
    <MainTemplate {...pageProps}>
      {page}
    </MainTemplate>
  )
}


export default Home;