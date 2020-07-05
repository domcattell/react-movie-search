import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Film from '../pages/Film';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/movies/:filmID' component={Film}/>
        </Switch>
    );
}

export default Routes;
