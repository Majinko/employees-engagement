import React from 'react';

import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Avatar from './../components/Avatar';
import PaperCard from './PaperCard';

import Bar from './Bar';
import BarItem from './BarItem';

function ProfileInfo({ name, position, timeStamp, hasArrow }) {
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
          {position && (
            <Typography variant="h4" align="left">
              {position}
            </Typography>
          )}
          {timeStamp && (
            <Typography variant="h4" align="left" color="textSecondary">
              {timeStamp}
            </Typography>
          )}
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
