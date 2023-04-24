// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '@backend/libraries/iron-session';
import controller from '@backend/controllers/admin/auth/google';


export default withSessionRoute(controller);