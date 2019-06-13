import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('jwtToken') &&
        JSON.parse(localStorage.getItem('jwtToken')).accessToken ? (
          <Component {...props} />
        ) : (
          <Redirect to="/authentication" />
        )
      }
    />
  );
};

AuthRoute.propTypes = {
  isAuthenticated: PropTypes.string,
};

export default AuthRoute;
