import { API_CONFIG } from '@configs/app';

export const AdminApiEndpoint = {
  googleAuth: API_CONFIG.baseUrl + '/admin/auth/google',
  googleAuthToken: API_CONFIG.baseUrl + '/admin/auth/google/token'
}

export enum UserApiEndpoint {}