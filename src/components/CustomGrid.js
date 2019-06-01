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
      <Grid container>
        <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
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
