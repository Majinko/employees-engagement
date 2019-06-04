import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthRoute from './components/AuthRoute';

import Authentication from './pages/authentication';
import Home from './pages/home';
import Index from './pages/index';
import MyProfile from './pages/my-profile';
import MyTeam from './pages/my-team';
import Settings from './pages/settings';
import GiveFeedback from './pages/give-feedback';
import Error from './pages/error';
import Success from './pages/success';
import Search from './pages/search';

// TODO: check if user `isAuthenticated` with function
const isAuthenticated = true;

const Routes = () => (
  <Switch>
    <Route exact path="/authentication" component={Authentication} />
    <AuthRoute
      exact
      path="/home"
      component={Home}
      isAuthenticated={isAuthenticated}
    />
    <Route exact path="/" component={Index} />
    <AuthRoute
      exact
      path="/my-profile"
      component={MyProfile}
      isAuthenticated={isAuthenticated}
    />
    <AuthRoute
      exact
      path="/my-team"
      component={MyTeam}
      isAuthenticated={isAuthenticated}
    />
    <AuthRoute
      exact
      path="/settings"
      component={Settings}
      isAuthenticated={isAuthenticated}
    />
    <AuthRoute
      exact
      path="/give-feedback"
      component={GiveFeedback}
      isAuthenticated={isAuthenticated}
    />
    <Route exact path="/error" component={Error} />
    <AuthRoute
      exact
      path="/success"
      component={Success}
      isAuthenticated={isAuthenticated}
    />
    <AuthRoute
      exact
      path="/search"
      component={Search}
      isAuthenticated={isAuthenticated}
    />
  </Switch>
);

export default Routes;
