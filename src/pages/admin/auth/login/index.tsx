import dynamic from 'next/dynamic';
import type { GetServerSideProps } from 'next';

const LoginPage = dynamic(() => import('@components/pages/Login'))

const Login = () => {
  return <LoginPage />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const req = context.req;


  console.log("context req ==>", req);


  return {
    props: {}
  }
}

export default Login;