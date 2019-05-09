import React from 'react';
import PaperCard from './../components/PaperCard';
import { Typography } from '@material-ui/core';

export default class IndexPage extends React.Component {
  render() {
    return (
      <PaperCard>
        <Typography variant="h1">Index</Typography>
      </PaperCard>
    );
  }
}
