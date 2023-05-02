import dynamic from 'next/dynamic';
import type { GetServerSidePropsContext } from 'next';
import { createRouter } from 'next-connect';
import { getSession } from '@libraries/next-session';
import { NextPageWithLayout } from '@frontend/types/next';
import { validateAuthAdminPage } from '@usecases/frontend/auth';

const Page = dynamic(() => import('@components/pages/admin/Dashboard'));
const Layout = dynamic(() => import('@components/templates/AdminLayout'));

const Dashboard: NextPageWithLayout = () => {
  return <Page></Page>
}

Dashboard.getLayout = (page, pageProps) => {
  return (
    <Layout {...pageProps}>
      {page}
    </Layout>
  )
}

const router = createRouter();
router.get(validateAuthAdminPage);

export const getServerSideProps = async ({ req, res }: GetServerSidePropsContext) => {
  return router.run(req, res);
}

export default Dashboard