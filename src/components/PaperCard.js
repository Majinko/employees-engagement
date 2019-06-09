import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(1),
    textAlign: 'center',
    margin: '0 auto',
    padding: `${theme.spacing(2)}px`,
  },
});

function PaperCard({ children, ...props }) {
  const { classes, hasLink } = props;
  if (hasLink) {
    return (
      <Link to="give-feedback">
        <Paper className={classes.paper}>{children}</Paper>
      </Link>
    );
  }

  return <Paper className={classes.paper}>{children}</Paper>;
}

PaperCard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(PaperCard);
