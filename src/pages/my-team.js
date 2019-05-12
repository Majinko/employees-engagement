import React from 'react';

import { Typography } from '@material-ui/core';

import PaperCard from './../components/PaperCard';
import CustomGrid from './../components/CustomGrid';

export default class MyTeamPage extends React.Component {
  render() {
    return (
      <CustomGrid>
        <PaperCard>
          <Typography variant="h1">My Team</Typography>
        </PaperCard>
      </CustomGrid>
    );
  }
}
