import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import { setLoggedUser } from '../../actions/authAction';
import { pages } from '../../data/pages';
import { authenticationService } from '../../services/authentication';

const styles = theme => ({
  margin: {
    margin: theme.spacing(1),
  },
});

class AuthenticationFormControl extends React.Component {
  state = {
    email: '',
    password: '',
    path: '/authentication',
    repeatedPassword: '',
    showPassword: false,
    showRepeatedPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClickShowRepeatedPassword = () => {
    this.setState(state => ({
      showRepeatedPassword: !state.showRepeatedPassword,
    }));
  };

  submit = () => {
    const { email, password } = this.state;
    const { history } = this.props;
    authenticationService.login(email, password).then(() => {
      setLoggedUser();
      history.push('/home');
    });

    if (authenticationService.jwtTokenValue) {
      history.push('/');
    }
  };

  render() {
    const { classes, type } = this.props;

    const {
      email,
      showPassword,
      password,
      showRepeatedPassword,
      repeatedPassword,
      path,
    } = this.state;

    const register = type === 'register';

    return (
      <React.Fragment>
        <FormControl
          fullWidth
          className={classes.margin}
          onSubmit={this.submit}
        >
          <InputLabel htmlFor={register ? 'register-email' : 'email'}>
            {pages.authentication.email}
          </InputLabel>
          <Input
            id={register ? 'register-email' : 'email'}
            type="email"
            value={email}
            onChange={this.handleChange('email')}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor={register ? 'register-password' : 'password'}>
            {pages.authentication.password}
          </InputLabel>
          <Input
            id={register ? 'register-password' : 'password'}
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {showPassword ? (
                    <FontAwesomeIcon
                      icon={['fal', 'eye']}
                      size="xs"
                      className={classes.menuItemIcon}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={['fal', 'eye-slash']}
                      size="xs"
                      className={classes.menuItemIcon}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {register && (
          <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="repeatedPassword">
              {pages.authentication.repeatPassword}
            </InputLabel>
            <Input
              id="repeatedPassword"
              type={showRepeatedPassword ? 'text' : 'password'}
              value={repeatedPassword}
              onChange={this.handleChange('repeatedPassword')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle repeatedPassword visibility"
                    onClick={this.handleClickShowRepeatedPassword}
                  >
                    {showRepeatedPassword ? (
                      <FontAwesomeIcon
                        icon={['fal', 'eye']}
                        size="xs"
                        className={classes.menuItemIcon}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={['fal', 'eye-slash']}
                        size="xs"
                        className={classes.menuItemIcon}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        )}
        <Button
          onClick={this.submit}
          variant="contained"
          color="primary"
          className={classes.margin}
          component={Link}
          to={path}
        >
          {register ? 'Sign up' : 'Log in'}
        </Button>
      </React.Fragment>
    );
  }
}

AuthenticationFormControl.propTypes = {
  classes: PropTypes.shape.isRequired,
  history: PropTypes.shape.isRequired,
  type: PropTypes.string.isRequired,
};

export default withRouter(
  compose(
    withStyles(styles),
    connect(
      null,
      { setLoggedUser }
    )
  )(AuthenticationFormControl)
);
