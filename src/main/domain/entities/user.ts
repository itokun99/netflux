import { Profile } from './profile';

export interface UserAuth {
  accessToken?: string;
  expiresIn?: number;
  tokenType?: string;
  scope?: string;
  refreshToken?: string;
  provider?: 'google' | 'email';
  tokenId?: string;
}
export interface User {
  id: string;
  profile: Profile;
  auth: UserAuth;
  createdAt?: number;
  updatedAt?: number;
  deletedAt?: number;
}