import { fetcher } from 'src/main/core/libraries/axios';
import { GOOGLE_CONFIG, BLOGGER_CONFIG, GOOGLE_API_ENDPOINT } from '@configs/google';
import { GoogleAuthTokenResponse } from '@entities/google';

interface GoogleRepo {
  getAuthUrlAdmin: () => string;
  getAuthTokenAdmin: (authCode: string) => Promise<GoogleAuthTokenResponse>;
  getProfileAdmin: (token: string) => Promise<any>;
}

const getAuthUrlAdmin = () => {
  const authorizationUrl = new URL(`${GOOGLE_API_ENDPOINT.auth}?client_id=${GOOGLE_CONFIG.clientId}&response_type=code&access_type=offline&include_granted_scopes=true&scope=${BLOGGER_CONFIG.scope.join(' ')}&redirect_uri=${GOOGLE_CONFIG.redirectUrlAdmin}`);
  return String(authorizationUrl);
}

const getAuthTokenAdmin = (authCode: string): Promise<GoogleAuthTokenResponse> => {
  return fetcher.post<GoogleAuthTokenResponse>(GOOGLE_API_ENDPOINT.token, {
      code: authCode, 
      client_id: GOOGLE_CONFIG.clientId, 
      client_secret: GOOGLE_CONFIG.clientSecret, 
      grant_type: 'authorization_code', 
      redirect_uri: GOOGLE_CONFIG.redirectUrlAdmin
    }, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(res => {
      return res.data;
    }).catch(err => {
      throw err
    });
}

const getProfileAdmin = (token: string) => {
  return fetcher.get(GOOGLE_API_ENDPOINT.profile, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      personFields: 'emailAddresses,clientData,names,nicknames,photo,metadata'
    }
  }).then(res => {
    return res.data;
  }).catch(err => {
    throw err;
  })
}


const googleRepo: GoogleRepo = {
  getAuthUrlAdmin,
  getAuthTokenAdmin,
  getProfileAdmin
}

export default googleRepo;