const oktaAuthConfig = {
    issuer: 'https://dev-70170495.okta.com/oauth2/default',
    clientId: '0oa462t9zac4mGAzZ5d7',
    redirectUri: window.location.origin + '/login/callback',
};
  
const oktaSignInConfig = {
    baseUrl: 'https://dev-70170495.okta.com',
    clientId: '0oa462t9zac4mGAzZ5d7',
    redirectUri: window.location.origin + '/login/callback',
    logo: 'blog.png',
    authParams: {

    }
};
  
export { oktaAuthConfig, oktaSignInConfig };