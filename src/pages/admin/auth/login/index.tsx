import dynamic from 'next/dynamic';
import Head from 'next/head';
import { createRouter } from 'next-connect';
import type { NextPage, GetServerSidePropsContext } from 'next';
import { validateLoginAdmin } from '@usecases/frontend/auth';

const LoginPage = dynamic(() => import('@components/pages/Login'))

const Login: NextPage = ({ error }: { error?: { message: string } }) => {

  console.log("error ==>", error)

  return (
    <>
      <Head>
        <title>Admin | Login</title>
      </Head>
      <LoginPage />
    </>
  );
}


const router = createRouter()
router.get(validateLoginAdmin)


export const getServerSideProps = async ({ req, res, query }: GetServerSidePropsContext) => {
  return router.run(req, res);
}

export default Login;