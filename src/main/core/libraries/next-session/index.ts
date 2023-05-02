import nextSession, { SessionStore } from 'next-session';
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { APP_ENV } from '@configs/app';
import { COOKIES } from '@configs/session';
import { AppSession } from '@entities/session';

export const getSession = nextSession<AppSession>({
  autoCommit: false,
  name: COOKIES.name,
  cookie: {
    secure: APP_ENV.name === 'production'
  }
});