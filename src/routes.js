import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Calculator from './pages/Calculator';
import Login from './pages/Login';
import Admin from './pages/Admin';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Calculator} />
                <Route path="/login" exact component={Login} />
                <Route path="/admin" exact component={Admin} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
