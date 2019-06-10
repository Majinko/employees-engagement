import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { library } from '@fortawesome/fontawesome-svg-core';

import Routes from './Routes';
import history from './history';

import './App.scss';

import Drawer from './components/Drawer';

import { primaryColor } from './config';

import { setLoggedUser } from './actions/authAction';

import {
  faBars,
  faSignIn,
  faHome,
  faUser,
  faUsers,
  faCog,
  faSignOut,
  faBug,
  faEye,
  faEyeSlash,
  faSearch,
  faUserHeadset,
  faLightbulbOn,
  faBullseyeArrow,
  faHandshake,
  faCalendarAlt,
  faExchange,
  faCommentAltSmile,
  faLongArrowRight,
} from '@fortawesome/pro-light-svg-icons';

library.add(
  faBars,
  faSignIn,
  faHome,
  faUser,
  faUsers,
  faCog,
  faSignOut,
  faBug,
  faEye,
  faEyeSlash,
  faSearch,
  faUserHeadset,
  faLightbulbOn,
  faBullseyeArrow,
  faHandshake,
  faCalendarAlt,
  faExchange,
  faCommentAltSmile,
  faLongArrowRight
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h1: {
      fontSize: 32,
      fontWeight: 700,
      color: '#262626',
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
      color: '#262626',
    },
    h3: {
      fontSize: 18,
      fontWeight: 700,
      color: '#262626',
    },
    h4: {
      fontSize: 16,
      fontWeight: 500,
      color: '#262626',
    },
    h5: {
      fontSize: 16,
      fontWeight: 500,
      color: '#262626',
    },
    h6: {
      fontSize: 16,
      fontWeight: 500,
      color: '#262626',
    },
    p: {
      fontSize: 16,
      fontWeight: 400,
      color: '#262626',
    },
  },
});

class App extends React.Component {
  componentDidMount() {
    this.props.setLoggedUser();
  }

  render() {
    const { token } = this.props;
    return (
      <Router history={history}>
        <MuiThemeProvider theme={theme}>
          <Drawer />
          <Routes token={token} />
        </MuiThemeProvider>
      </Router>
    );
  }
}

App.propTypes = {
  setLoggedUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  token: state.auth.token,
});

export default connect(
  mapStateToProps,
  { setLoggedUser }
)(App);
