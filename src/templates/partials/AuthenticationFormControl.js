import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { pages } from './../../data/pages';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class AuthenticationFormControl extends React.Component {
  state = {
    password: '',
    showPassword: false,
    repeatedPassword: '',
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

  render() {
    const { classes, type } = this.props;

    const register = type === 'register';

    return (
      <React.Fragment>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="email">{pages.authentication.email}</InputLabel>
          <Input id="email" type="email" />
        </FormControl>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="password">
            {pages.authentication.password}
          </InputLabel>
          <Input
            id="password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? (
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
              type={this.state.showRepeatedPassword ? 'text' : 'password'}
              value={this.state.repeatedPassword}
              onChange={this.handleChange('repeatedPassword')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle repeatedPassword visibility"
                    onClick={this.handleClickShowRepeatedPassword}
                  >
                    {this.state.showRepeatedPassword ? (
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
          variant="contained"
          color="primary"
          className={classes.margin}
          component={Link}
          to="/home"
        >
          {register ? 'Sign up' : 'Log in'}
        </Button>
      </React.Fragment>
    );
  }
}

AuthenticationFormControl.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string,
};

export default withStyles(styles)(AuthenticationFormControl);