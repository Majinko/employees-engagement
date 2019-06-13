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
