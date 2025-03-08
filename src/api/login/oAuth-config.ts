import { OAuthProvider } from '@/types/types';

export const kakaoOAuth: OAuthProvider = {
  name: 'kakao',
  authUrl: 'https://kauth.kakao.com/oauth/authorize',
  tokenUrl: 'https://kauth.kakao.com/oauth/token',
  clientId: import.meta.env.VITE_KAKAO_REST_API, // REST API 키
  redirectUri: 'http://localhost:5173/auth/kakao/callback',
  scope: 'profile_nickname profile_image account_email',
};

export const googleOAuth: OAuthProvider = {
  name: 'google',
  authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenUrl: 'https://oauth2.googleapis.com/token',
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
  redirectUri: 'http://localhost:5173/auth/google/callback',
  scope: 'email profile',
};
