import React from 'react';

import { Typography } from '@material-ui/core';

import PaperCard from './../components/PaperCard';
import CustomGrid from './../components/CustomGrid';

export default class ErrorPage extends React.Component {
  render() {
    return (
      <CustomGrid>
        <PaperCard>
          <Typography variant="h1" gutterBottom>
            Oops
          </Typography>
          <Typography variant="h3" gutterBottom>
            404 - Page not found
          </Typography>
          <Typography>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </Typography>
        </PaperCard>
      </CustomGrid>
    );
  }
}
