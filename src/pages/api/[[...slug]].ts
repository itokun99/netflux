import { createRouter, expressWrapper } from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import cors from 'cors';
import { googleAuthController, googleTokenController } from '@controllers/admin/auth/google'
import { createResponseError } from '@backend/utils/http';

const router = createRouter<NextApiRequest, NextApiResponse>()

// express style api routers
router
  .use(expressWrapper(cors()))
  .post("/api/admin/auth/google", googleAuthController)
  .post("/api/admin/auth/google/token", googleTokenController)


// run api
export default router.handler({
  onNoMatch: (_req, res) => {
    return res.status(405).json(createResponseError('method-not-allowed'))
  },
  onError: (err, _req, res) => {
    return res.status(500).json(createResponseError('internal-server-error'))
  },
});