import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
});

function Bar({ children, ...props }) {
  const { classes } = props;

  return <div className={classes.root}>{children}</div>;
}

Bar.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Bar);
