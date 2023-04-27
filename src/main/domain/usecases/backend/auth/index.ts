import type { NextApiRequest } from 'next';
import { getAuthUrlAdmin, getAuthTokenAdmin, getProfileAdmin } from '@repositories/backend/google';
import { createResponseError, createJsonResponse } from '@backend/utils/http';
import { User } from '@entities/user';

export const googleLoginAdmin = () => {
  // receive google oauth url
  const authUrl = getAuthUrlAdmin();

  return createJsonResponse<{ url: string }>({
    status: 200,
    code: 'GOOGLE-AUTH-200',
    message: 'Successfully',
    data: {
      url: authUrl
    } 
  })
}

export const googleGetAccessTokenAdmin = async (req: NextApiRequest) => {
  try {
    const tokenResponse = await getAuthTokenAdmin(req.body.code);
    const profile = await getProfileAdmin(tokenResponse.access_token);

    return createJsonResponse<User>({
      status: 200,
      code: 'GOOGLE-AUTH-200',
      message: 'Successfully',
      data: {
        id: profile.resourceName,
        auth: {
          provider: 'google',
          // tokenId: tokenResponse.id_token,
          // expiresIn: tokenResponse.expires_in,
          // tokenType: tokenResponse.token_type,
          accessToken: tokenResponse.access_token,
          refreshToken: tokenResponse.refresh_token
        },
        profile: {
          id: profile.resourceName,
          name: profile.names[0].displayName,
          email: profile.emailAddresses[0].value,
          dob: `${profile.birthdays[0].date.year}-${profile.birthdays[0].date.month}-${profile.birthdays[0].date.day}`,
          address: profile.addresses[0].formattedValue,
          gender: profile.genders[0].value,
          photo: profile.photos[0].url,
          role: 'super-admin'
        }
        
      }
    })
  } catch (err: any) {
    if(err.response) {
      return createResponseError('google-auth-error', err.response.data);
    }
    return createResponseError('internal-server-error');
  }
}