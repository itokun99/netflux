import nextSession from 'next-session';
import { APP_ENV } from '@configs/app';
import { COOKIES } from '@configs/session';

export const getSession = nextSession({
  autoCommit: false,
  name: COOKIES.name,
  cookie: {
    secure: APP_ENV.name === 'production'
  },
})