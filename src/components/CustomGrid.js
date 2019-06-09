import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  gridItem: {
    margin: '0 auto',
  },
});

function CustomGrid({ children, ...props }) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
}

CustomGrid.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(CustomGrid);
