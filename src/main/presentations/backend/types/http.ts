import type { NextApiRequest, NextApiResponse } from 'next';

export interface JsonResponse<T = any> {
  status: number;
  code: string;
  message: string;
  data?: T
}


export type ControllerHandleType<T = any> = (req: NextApiRequest, res: NextApiResponse<T>) => void;