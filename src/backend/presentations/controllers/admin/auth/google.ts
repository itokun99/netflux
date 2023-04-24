import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import { withController, JsonResponseInterface, ControllerHandleType } from '@backend/utils/http';
import { BLOGGER_CONFIG, GOOGLE_CONFIG } from '@backend/configs/google';



const get: ControllerHandleType<JsonResponseInterface<{ url?: string }>> = (_req, res) => {
  
  // init oauth client
  const oauth2Client = new google.auth.OAuth2(
    GOOGLE_CONFIG.clientId,
    GOOGLE_CONFIG.clientSecret,
    GOOGLE_CONFIG.redirectUrlAdmin  
  );

  // get auth url
  const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: BLOGGER_CONFIG.scope,
    include_granted_scopes: true
  })

  // passing json and handle by frontend action
  res.status(200).json({
    status: 200,
    code: 'GOOGLE-OAUTH-200',
    message: 'Successfully',
    data: {
      url: authorizationUrl
    }
  })
}




export default withController({ get });