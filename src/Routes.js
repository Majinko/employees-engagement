import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
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

const Routes = ({ token }) => (
  <Switch>
    <Route exact path="/authentication" component={Authentication} />
    <AuthRoute exact path="/home" component={Home} isAuthenticated={token} />
    <Route exact path="/" component={Index} />
    <AuthRoute
      exact
      path="/my-profile"
      component={MyProfile}
      isAuthenticated={token}
    />
    <AuthRoute
      exact
      path="/my-team"
      component={MyTeam}
      isAuthenticated={token}
    />
    <AuthRoute
      exact
      path="/settings"
      component={Settings}
      isAuthenticated={token}
    />
    <AuthRoute
      exact
      path="/give-feedback/:id"
      component={GiveFeedback}
      isAuthenticated={token}
    />
    <Route exact path="/error" component={Error} />
    <AuthRoute
      exact
      path="/success"
      component={Success}
      isAuthenticated={token}
    />
    <AuthRoute
      exact
      path="/search"
      component={Search}
      isAuthenticated={token}
    />
  </Switch>
);

Routes.propTypes = {
  token: PropTypes.string,
};

export default Routes;
