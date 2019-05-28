import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    marginRight: 16,
    '&:last-child': {
      marginRight: 0,
    },
  },
});

function BarItem({ children, ...props }) {
  const { classes } = props;

  return <div className={classes.root}>{children}</div>;
}

BarItem.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(BarItem);
