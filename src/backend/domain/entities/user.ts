import { Profile } from './profile';

export interface User {
  id: string;
  profile: Profile; 
  createdAt?: number;
  updatedAt?: number;
  deletedAt?: number;
}