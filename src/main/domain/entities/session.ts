import type { Session, SessionRecord } from 'next-session/lib/types';
import { User } from '@entities/user';

export type AppSession = Session<SessionRecord> & {
  admin?: User;
  user?: User;
}