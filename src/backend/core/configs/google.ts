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
    "https://www.googleapis.com/auth/blogger.readonly"
  ]
}

export const FIREBASE_CONFIG = {}