import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import SheltersMap from './pages/SheltersMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/sheltersmap" component={SheltersMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;