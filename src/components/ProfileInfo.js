import React from 'react';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Avatar from './../components/Avatar';

const styles = theme => ({
  avatar: {
    marginBottom: theme.spacing(1),
  },
});

function ProfileInfo({ name, position, ...props }) {
  const initials = name
    .split(' ')
    .map(characters => characters[0])
    .join('');

  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.avatar}>
        <Avatar initials={initials} />
      </div>
      <Typography variant="h3" gutterBottom>
        {name}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {position}
      </Typography>
    </React.Fragment>
  );
}

export default withStyles(styles)(ProfileInfo);
