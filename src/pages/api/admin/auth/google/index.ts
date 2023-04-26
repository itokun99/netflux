import { withSessionRoute } from '@libraries/iron-session';
import { googleAuthController } from '@controllers/admin/auth/google';

export default withSessionRoute(googleAuthController);