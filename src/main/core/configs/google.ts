export const GOOGLE_CONFIG = {
  clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  projectId: process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID,
  authUri: process.env.NEXT_PUBLIC_GOOGLE_AUTH_URI,
  tokenUri: process.env.NEXT_PUBLIC_GOOGLE_TOKEN_URI,
  certUrl:  process.env.NEXT_PUBLIC_GOOGLE_CERT_URL,
  redirectUrlAdmin: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL_ADMIN,
  redirectUrlUser: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL_USER,
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
}

export const BLOGGER_CONFIG = {
  blogId: process.env.NEXT_PUBLIC_GOOGLE_BLOGGER_BLOG_ID,
  blogUrl: process.env.NEXT_PUBLIC_GOOGLE_BLOGGER_BLOG_URL,
  scope: [
    "https://www.googleapis.com/auth/blogger",
    "https://www.googleapis.com/auth/blogger.readonly",
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email", 
  ]
}

export const FIREBASE_CONFIG = {}

export const GOOGLE_API_ENDPOINT = {
  auth: "https://accounts.google.com/o/oauth2/v2/auth",
  token: "https://oauth2.googleapis.com/token",
  profile: "https://people.googleapis.com/v1/people/me"
}