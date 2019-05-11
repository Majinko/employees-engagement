import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import CustomGrid from './CustomGrid';

const styles = theme => ({
  gridItem: {
    margin: '0 auto',
  },
  paper: {
    marginTop: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
});

function PaperCard({ children, ...props }) {
  const { classes } = props;

  return (
    <CustomGrid>
      <Paper className={classes.paper}>{children}</Paper>
    </CustomGrid>
  );
}

PaperCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperCard);
