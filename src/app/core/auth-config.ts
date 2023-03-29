import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8000/o/',
  clientId: 'mzex6hZvnegV7zRzaGvUQ3vExoAVtLRnOcd3gcm2', // The "Auth Code + PKCE" client
  responseType: 'code',
  redirectUri: window.location.origin + '/',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  scope: 'openid writey_write', // Ask offline_access to support refresh token refreshes
  useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
  silentRefreshTimeout: 5000, // For faster testing
  timeoutFactor: 0.25, // For faster testing
  sessionChecksEnabled: true,
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
};
