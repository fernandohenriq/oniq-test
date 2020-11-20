import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Calculator from './pages/Calculator';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { AuthProvider } from './utils/auth';
import PrivateRoute from './components/PrivateRoute';

function Routes(){
    return(
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Calculator} />
                    <Route path="/login" exact component={Login} />
                    <PrivateRoute path="/admin" exact component={Admin} />
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default Routes;
