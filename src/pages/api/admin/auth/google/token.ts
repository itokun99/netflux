import { withSessionRoute } from '@libraries/iron-session';
import { googleTokenController } from '@controllers/admin/auth/google';

export default withSessionRoute(googleTokenController);