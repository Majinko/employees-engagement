import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
});

function PaperCard({ children, ...props }) {
  const { classes } = props;

  return <Paper className={classes.paper}>{children}</Paper>;
}

PaperCard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(PaperCard);
