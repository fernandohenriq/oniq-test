import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Calculator from './pages/Calculator';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Calculator} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
