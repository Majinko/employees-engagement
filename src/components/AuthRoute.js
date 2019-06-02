import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/authentication" />
      )
    }
  />
);

AuthRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default AuthRoute;
