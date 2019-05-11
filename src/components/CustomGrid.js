import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomGrid);
