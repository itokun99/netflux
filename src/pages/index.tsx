import Head from 'next/head'
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from './_app';

const HomePage = dynamic(() => import('@components/pages/Homepage'));

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


export default Home;