import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import FilmPage from '../pages/FilmPage';
import SearchPage from '../pages/SearchPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/movies/:filmID' component={FilmPage}/>
            <Route exact path='/movies/search/:query' component={SearchPage}/>
        </Switch>
    );
}

export default Routes;
