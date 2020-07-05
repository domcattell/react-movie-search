import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Film from '../pages/Film';
import Search from '../pages/Search';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/movies/:filmID' component={Film}/>
            <Route exact path='/movies/search/:query' component={Search}/>
        </Switch>
    );
}

export default Routes;
