import React from 'react';

import { Typography } from '@material-ui/core';
import Avatar from './../components/Avatar';

function ProfileInfo({ name, position }) {
  const initialCharacter = name.substring(0, 1);
  return (
    <React.Fragment>
      <Avatar initials={initialCharacter} />
      <Typography variant="h3" gutterBottom>
        {name}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {position}
      </Typography>
    </React.Fragment>
  );
}

export default ProfileInfo;
