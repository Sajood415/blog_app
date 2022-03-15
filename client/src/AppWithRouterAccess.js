 import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { oktaAuthConfig, oktaSignInConfig } from './config';
import { Box } from '@material-ui/core';

import Header from './components/Header';
import Home from './components/Home/Home';
import DetailView from './components/Post/DetailView';
import CreatePost from './components/Post/CreateView';
import UpdateView from './components/Post/UpdateView';
import Login from './components/account/Login';
// import About from './components/about/About';

const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppWithRouterAccess = () => {

    const history = useHistory();

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };

    const customAuthHandler = () => {
        history.push('/login');
    };
    
    return (
        <Security
            oktaAuth={oktaAuth}
            onAuthRequired={customAuthHandler}
            restoreOriginalUri={restoreOriginalUri}
        >
            <SecureRoute path='/' component={Header} />
            <Box style={{ marginTop: 64 }}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    
                    <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
                    <Route path='/login/callback' component={LoginCallback} />
                    
                    <Route exact path='/details/:id' component={DetailView} />
                    <Route exact path='/create' component={CreatePost} />
                    <Route exact path='/update/:id' component={UpdateView} />

                    {/* <Route exact path='/about' component={About} /> */}
                </Switch>
            </Box>
        </Security >
    )
}

export default AppWithRouterAccess;