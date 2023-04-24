import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';
import { GetServerSidePropsContext, GetServerSidePropsResult, NextApiHandler } from 'next';
import { COOKIES } from '@backend/configs/session';
import { APP_ENV } from '@backend/configs/app';
import { User } from '@backend/entities/user';

declare module "iron-session" {
  interface IronSessionData {
    user?: User;
    theme?: 'light' | 'dark';
  }
}

export const sessionOptions = {
  password: COOKIES.password || '',
  cookieName: COOKIES.name || '',
  cookieOptions: {
    secure:  APP_ENV.name === 'production',
  },
};

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSessionSsr<P extends { [key: string]: unknown } = { [key: string]: unknown }>(
  handler: (context: GetServerSidePropsContext) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) {
  return withIronSessionSsr(handler, sessionOptions);
}