const oktaAuthConfig = {
    issuer: '',
    clientId: '',
    redirectUri: window.location.origin + '/login/callback',
};
  
const oktaSignInConfig = {
    baseUrl: '',
    clientId: '',
    redirectUri: window.location.origin + '/login/callback',
    logo: 'blog.png',
    authParams: {

    }
};
  
export { oktaAuthConfig, oktaSignInConfig };
