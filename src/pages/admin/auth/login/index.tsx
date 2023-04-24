import dynamic from 'next/dynamic';

const LoginPage = dynamic(() => import('@components/pages/Login'))

const Login = () => {
  return <LoginPage />;
}

export default Login;