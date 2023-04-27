import type { NextApiResponse, NextApiRequest } from 'next';
import { ControllerHandleType, JsonResponse } from '@backend/types/http';

type ErrorCaseType = 
  'method-not-allowed' |
  'unauthorized' |
  'internal-server-error' |
  'google-auth-error' |
  'page-not-found'

export const createResponseError = (errorCase: ErrorCaseType, errorData?: any): JsonResponse => {
  switch(errorCase) {
    case 'method-not-allowed':
      return createJsonResponse({ status: 405, code: 'APP-405', message: 'Method not allowed' });
    case 'unauthorized':
      return createJsonResponse({ status: 401, code: 'APP-401', message: 'Unauthorized' });
    case 'google-auth-error':
      return createJsonResponse({ status: 400, code: 'GOOGLE-AUTH-400', message: 'Authorization failed, please re-login', data: errorData });
    case 'page-not-found':
      return createJsonResponse({ status: 404, code: 'APP-404', message: 'Page not found' });
    default:
      return createJsonResponse({ status: 500, code: 'APP-500', message: 'Internal server error' });
  }
}

export const createAuthHeader = (token: string) => ({
  Authorization: `Bearer ${token}`,
});

export const createJsonResponse = <T = any>({
  status,
  code,
  message,
  data
}: JsonResponse<T>) => {
  return {
    status,
    code,
    message,
    data
  }
}

interface WithControllerInterface {
  get?: ControllerHandleType;
  post?: ControllerHandleType;
  put?: ControllerHandleType;
  patch?: ControllerHandleType;
  delete?: ControllerHandleType;
}

export function withController({ get, post, put, patch, delete: deleteHandler }: WithControllerInterface) {
  return function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET' && typeof get === 'function') return get(req, res);
    if (req.method === 'POST' && typeof post === 'function') return post(req, res);
    if (req.method === 'PUT' && typeof put === 'function') return put(req, res);
    if (req.method === 'PATCH' && typeof patch === 'function') return patch(req, res);
    if (req.method === 'DELETE' && typeof deleteHandler === 'function') return deleteHandler(req, res);
    
    const resError = createResponseError('method-not-allowed');
    res.status(resError.status).json(resError)
  };
}