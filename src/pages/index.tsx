import Head from 'next/head'
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from '@frontend/types/next';

const Page = dynamic(() => import('@components/pages/Homepage'));
const Layout = dynamic(() => import('@components/templates/UserLayout'));

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Kerja Koding - Loker IT untuk Pemula</title>
        <meta name="description" content="Website pencarian kerja dan artikel seputar dunia Kerja IT" />
      </Head>
      <Page />
    </>
  )
}

Home.getLayout = (page, pageProps) => {
  return (
    <Layout {...pageProps}>
      {page}
    </Layout>
  )
}


export default Home;