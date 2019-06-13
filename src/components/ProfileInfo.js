import React from 'react';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

import Avatar from './../components/Avatar';

const styles = theme => ({
  avatar: {
    marginBottom: theme.spacing(1),
  },
  text: {
    textAlign: 'center',
  },
});

function ProfileInfo({ name, position, classes, ...props }) {
  let initials = '';

  if (name) {
    initials = name[0];

    if (/\s/.test(name)) {
      initials = name
        .split(' ')
        .map(characters => characters[0])
        .join('');
    }
  }

  if (initials !== '') {
    return (
      <React.Fragment>
        <div className={classes.avatar}>
          <Avatar initials={initials} />
        </div>
        <Typography className={classes.text} variant="h3" gutterBottom>
          {name}
        </Typography>
        <Typography className={classes.text} variant="h4" gutterBottom>
          {position}
        </Typography>
      </React.Fragment>
    );
  }

  return <CircularProgress />;
}

export default withStyles(styles)(ProfileInfo);
