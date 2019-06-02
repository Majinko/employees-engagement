import React from 'react';

import { Typography } from '@material-ui/core';

import PaperCard from '../components/PaperCard';
import CustomGrid from '../components/CustomGrid';

export default class SuccessPage extends React.Component {
  render() {
    return (
      <CustomGrid>
        <PaperCard>
          <Typography variant="h1" gutterBottom>
            Done
          </Typography>
          <Typography variant="h3" gutterBottom>
            Thanks for your interest in making the better workplace.
          </Typography>
        </PaperCard>
      </CustomGrid>
    );
  }
}
