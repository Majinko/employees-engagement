import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const styles = theme => ({
  paper: {
    display: 'block',
    marginTop: theme.spacing(1),
    textAlign: 'center',
    margin: '0 auto',
    padding: `${theme.spacing(2)}px`,
    textDecoration: 'none',
  },
});

function PaperCard({ children, user, ...props }) {
  const { classes, hasLink } = props;
  if (hasLink) {
    return (
      <Paper
        component={Link}
        to={{
          pathname: `give-feedback/${user.id}`,
          state: {
            user,
          },
        }}
        className={classes.paper}
      >
        {children}
      </Paper>
    );
  }

  return <Paper className={classes.paper}>{children}</Paper>;
}

PaperCard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(PaperCard);
