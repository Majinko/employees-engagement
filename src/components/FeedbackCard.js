import React from 'react';

import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Avatar from './../components/Avatar';
import PaperCard from './PaperCard';

import Bar from './Bar';
import BarItem from './BarItem';

function ProfileInfo({ name, position, hasArrow }) {
  const initials = name
    .split(' ')
    .map(characters => characters[0])
    .join('');

  return (
    <PaperCard hasLink>
      <Bar>
        <BarItem>
          <Avatar initials={initials} />
        </BarItem>
        <BarItem isFilling>
          <Typography variant="h3" gutterBottom align="left">
            {name}
          </Typography>
          <Typography variant="h4" gutterBottom align="left">
            {position}
          </Typography>
        </BarItem>
        {hasArrow && (
          <BarItem>
            <FontAwesomeIcon icon={['fal', 'long-arrow-right']} size="2x" />
          </BarItem>
        )}
      </Bar>
    </PaperCard>
  );
}

export default ProfileInfo;
