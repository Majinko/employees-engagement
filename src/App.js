import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faBug,
  faBullseyeArrow,
  faCalendarAlt,
  faCog,
  faCommentAltSmile,
  faExchange,
  faEye,
  faEyeSlash,
  faHandshake,
  faHome,
  faLightbulbOn,
  faLongArrowRight,
  faSearch,
  faSignIn,
  faSignOut,
  faUser,
  faUserHeadset,
  faUsers,
} from '@fortawesome/pro-light-svg-icons';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';
import { setLoggedUser } from './actions/authAction';
import './App.scss';
import Drawer from './components/Drawer';
import { primaryColor } from './config';
import history from './history';
import Routes from './Routes';

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
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h1: {
      color: '#262626',
      fontSize: 32,
      fontWeight: 700,
    },
    h2: {
      color: '#262626',
      fontSize: 24,
      fontWeight: 700,
    },
    h3: {
      color: '#262626',
      fontSize: 18,
      fontWeight: 700,
    },
    h4: {
      color: '#262626',
      fontSize: 16,
      fontWeight: 500,
    },
    h5: {
      color: '#262626',
      fontSize: 16,
      fontWeight: 500,
    },
    h6: {
      color: '#262626',
      fontSize: 16,
      fontWeight: 500,
    },
    p: {
      color: '#262626',
      fontSize: 16,
      fontWeight: 400,
    },
    useNextVariants: true,
  },
});

class App extends React.Component {
  componentDidMount() {
    setLoggedUser();
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

const mapStateToProps = state => ({
  token: state.auth.token,
});

export default connect(
  mapStateToProps,
  { setLoggedUser }
)(App);
