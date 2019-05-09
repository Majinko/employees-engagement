import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Authentication from './pages/authentication';
import Home from './pages/home';
import Index from './pages/index';
import MyProfile from './pages/my-profile';
import MyTeam from './pages/my-team';
import Settings from './pages/settings';

const Routes = () => (
  <Switch>
    <Route exact path="/authentication" component={Authentication} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/" component={Index} />
    <Route exact path="/my-profile" component={MyProfile} />
    <Route exact path="/my-team" component={MyTeam} />
    <Route exact path="/settings" component={Settings} />
    <Route exact path="/" component={Index} />
  </Switch>
);

export default Routes;
