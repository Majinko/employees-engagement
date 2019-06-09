import React from 'react';

import { Typography } from '@material-ui/core';

import Avatar from './../components/Avatar';
import PaperCard from './PaperCard';

import Bar from './Bar';
import BarItem from './BarItem';

function ProfileInfo({ name, position }) {
  const initials = name
    .split(' ')
    .map(characters => characters[0])
    .join('');

  return (
    <PaperCard>
      <Bar>
        <BarItem>
          <Avatar initials={initials} />
        </BarItem>
        <BarItem>
          <Typography variant="h3" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {position}
          </Typography>
        </BarItem>
      </Bar>
    </PaperCard>
  );
}

export default ProfileInfo;
