import React from 'react';
import { Router } from 'react-router-dom';

import './App.scss';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Routes from './Routes';
import history from './history';

import Drawer from './components/Drawer';

import { library } from '@fortawesome/fontawesome-svg-core';
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
  faEyeSlash
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0026AC',
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
  render() {
    return (
      <Router history={history}>
        <MuiThemeProvider theme={theme}>
          <Drawer />
          <Routes />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
