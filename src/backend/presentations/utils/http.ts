import type { NextApiResponse, NextApiRequest } from 'next';

export interface JsonResponseInterface<T = any> {
  status: number;
  code: string;
  message: string;
  data?: T
}

export const unauthorized = (res: NextApiResponse<JsonResponseInterface>): void => {
  res.status(401).json({
    status: 401,
    code: 'APP-401',
    message: 'Unauthorized'
  })
};
export const methodNotAlowed = (res: NextApiResponse<JsonResponseInterface>) => {
  res.status(405).json({
    status: 405,
    code:  'APP-401',
    message: 'Method Not Allowed'
  })
};


export const createAuthHeader = (token: string) => ({
  Authorization: `Bearer ${token}`,
});


export type ControllerHandleType<T = any> = (req: NextApiRequest, res: NextApiResponse<T>) => void;

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
    methodNotAlowed(res);
  };
}