import type { NextApiRequest, NextApiResponse } from 'next';
import { withController } from '@backend/utils/http';
import { googleGetAccessTokenAdmin, googleLoginAdmin } from '@usecases/backend/auth';

export const googleAuthController = (_req: NextApiRequest, res: NextApiResponse) => {
  const result = googleLoginAdmin();
  res.status(result.status).json(result);
};

export const googleTokenController =  async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await googleGetAccessTokenAdmin(req);
  res.status(result.status).json(result);
}