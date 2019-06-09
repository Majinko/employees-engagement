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
  const initialCharacter = name.substring(0, 1);

  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.avatar}>
        <Avatar initials={initialCharacter} />
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
