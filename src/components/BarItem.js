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
  rootGrow: {
    flexGrow: 1,
  },
});

function BarItem({ children, ...props }) {
  const { classes, isFilling } = props;
  console.log(props);

  return (
    <div
      className={
        isFilling ? [classes.root, classes.rootGrow].join(' ') : classes.root
      }
    >
      {children}
    </div>
  );
}

BarItem.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(BarItem);
