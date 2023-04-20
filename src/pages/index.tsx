import Head from 'next/head'
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@components/pages/Homepage'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflux - Free Streaming Website</title>
        <meta name="description" content="Most popular streaming website for free user" />
      </Head>
      <HomePage />
    </>
  )
}
