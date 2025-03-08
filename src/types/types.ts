export type OAuthProvider = {
  name: string;
  authUrl: string;
  tokenUrl: string;
  clientId: string;
  clientSecret?: string;
  redirectUri: string;
  scope: string;
};

export type OAuthToken = {
  access_token: string;
  token_type: string;
  refresh_token?: string;
  expires_in?: number;
  scope?: string;
  id_token?: string;
};

export type UserProfile = {
  id: string;
  email?: string;
  name?: string;
  picture?: string;
  provider: string;
};

export type loginBannerType = {
  images: Array<string>;
};
