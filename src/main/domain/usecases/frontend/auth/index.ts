import url from 'url';
import type { IncomingMessage, ServerResponse } from 'http';
import { getAuthUrlAdmin, getAuthTokenAdmin } from '@repositories/frontend/auth';
import { getSession } from '@libraries/next-session';
import { getErrorMessageFromApi } from '@frontend/utils/helper';

export const getLoginUrlAdmin = async () => {

  try {
    const authUrl = await getAuthUrlAdmin();

    if(!authUrl.data?.url) {
      throw new Error('url is empty');
    }

    return authUrl.data.url;
  } catch (err: any) {
    console.log('getLoginUrlAdmin err', err);
    throw err;
  }
}

export const validateLoginAdmin = async (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
  try {
    const session = await getSession(req, res)
    
    // if has admin session, redirect to dashboard
    if (session?.admin) {
      return {
        props: {},
        redirect: {
          destination: '/admin/dashboard'
        }
      }
    }

    const query = url.parse(String(req.url), true).query;

    // if no code query, show default page
    if (!query.code) {
      return { props: {} }
    }

    const data = await getAuthTokenAdmin(query.code as string);

    // there is no data, throw exception
    if (!data) {
      throw new Error('user data is empty');
    }


    // save login data to session
    session.admin = data;
    session.commit();

    // redirect to dashboard when validated user success
    return {
      props: {
        data
      },
      redirect: {
        destination: '/admin/dashboard'
      }
    }
  } catch (err: any) {
    const errorMessage = getErrorMessageFromApi(err);
    
    // return error message when error validation
    return {
      props: {
        error: {
          message: errorMessage
        }
      }
    }
  }
}


