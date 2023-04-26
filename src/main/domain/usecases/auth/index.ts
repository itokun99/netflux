import type { NextApiRequest, NextApiResponse } from 'next';
import googleRepo from '@repositories/google';
import { createResponseError, createJsonResponse, JsonResponseInterface } from '@backend/utils/http';

interface AuthUseCase {
  googleLoginAdmin: (req: NextApiRequest) => JsonResponseInterface;
  googleGetAccessToken: (req: NextApiRequest) => Promise<JsonResponseInterface>;
}

const googleLoginAdmin = (req: NextApiRequest) => {

  // if user still authenticated, return error need to logout or not accessible api
  if(req.session.admin) {
    return createResponseError('method-not-allowed');
  }
  
  // receive google oauth url
  const authUrl = googleRepo.getAuthUrlAdmin();

  return createJsonResponse<{ url: string }>({
    status: 200,
    code: 'GOOGLE-AUTH-200',
    message: 'Successfully',
    data: {
      url: authUrl
    } 
  })
}

const googleGetAccessToken = async (req: NextApiRequest) => {
  if(req.session.admin) {
    return createResponseError('method-not-allowed');
  }

  try {
    const tokenResponse = await googleRepo.getAuthTokenAdmin(req.body.code);
    const profile = await googleRepo.getProfileAdmin(tokenResponse.access_token);

    return createJsonResponse({
      status: 200,
      code: 'GOOGLE-AUTH-200',
      message: 'Successfully',
      data: {
        profile,
        token: tokenResponse
      }
    })
  } catch (err: any) {
    if(err.response) {
      return createResponseError('google-auth-error', err.response.data);
    }
    return createResponseError('internal-server-error');
  }
}

const authUseCase: AuthUseCase = {
  googleLoginAdmin,
  googleGetAccessToken
}


export default authUseCase;