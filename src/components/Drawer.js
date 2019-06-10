import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Toolbar from '@material-ui/core/Toolbar';

import { setLoggedUser } from './../actions/authAction';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getSentenceCase, getPath } from './../utils';

// TODO: render some `menuItems` when user `isAuthenticated`
import { menuItems } from './../data/menuItems';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -theme.spacing(2),
    marginRight: theme.spacing(3),
  },
  menuWrapper: {
    width: 250,
  },
  menuItemIcon: {
    marginRight: theme.spacing(2),
  },
});

class DrawerComponent extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = open => () => {
    this.setState({
      left: open,
    });
  };

  render() {
    const { classes } = this.props;

    const menuList = (
      <MenuList className={classes.menuWrapper}>
        {menuItems.map(
          item =>
            !item.hidden && (
              <MenuItem
                component={Link}
                to={
                  item.label === 'sign-out'
                    ? '/authentication'
                    : getPath(item.label) && item.label === 'splash-screen'
                    ? '/'
                    : getPath(item.label)
                }
                key={item.label}
                onClick={() => {
                  if (item.label === 'sign-out') {
                    localStorage.removeItem('jwtToken');
                    this.props.setLoggedUser();
                  }
                }}
              >
                <FontAwesomeIcon
                  icon={['fal', item.icon]}
                  size="lg"
                  className={classes.menuItemIcon}
                />
                <Typography>{getSentenceCase(item.label)}</Typography>
              </MenuItem>
            )
        )}
      </MenuList>
    );

    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.toggleDrawer(true)}
              >
                <FontAwesomeIcon icon={['fal', 'bars']} />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
        <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {menuList}
          </div>
        </Drawer>
      </div>
    );
  }
}

DrawerComponent.propTypes = {
  classes: PropTypes.object,
  setLoggedUser: PropTypes.func.isRequired,
};

export default compose(
  withStyles(styles),
  connect(
    null,
    { setLoggedUser }
  )
)(DrawerComponent);
