import { fetcher } from '@libraries/axios';
import { AdminApiEndpoint } from '@configs/api';
import { ApiResponse } from '@frontend/types/api';
import { User } from '@entities/user';

export function getAuthUrlAdmin() {
  return fetcher
    .post<ApiResponse<{ url: string }>>(AdminApiEndpoint.googleAuth)
    .then(res => res.data.data?.url)
    .catch(err => {
      throw err
    });
}

export function getAuthTokenAdmin(code: string) {
  return fetcher
    .post<ApiResponse<User>>(AdminApiEndpoint.googleAuthToken, { code })
    .then(res => res.data.data)
    .catch(err => {
      throw err
    });  
}