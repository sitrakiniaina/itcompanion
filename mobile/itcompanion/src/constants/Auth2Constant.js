export const API_BASE_URL = 'https://192.168.8.112:8080';
export const ACCESS_TOKEN = 'accessToken';
export const ETU_ID ='etuId';
export const OAUTH2_REDIRECT_URI = 'itcompanion://oauth2'; 

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;