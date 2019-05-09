import React from 'react';
import PaperCard from './../components/PaperCard';
import { Typography } from '@material-ui/core';

export default class AuthenticationPage extends React.Component {
  render() {
    return (
      <PaperCard>
        <Typography variant="h1">Authentication</Typography>
      </PaperCard>
    );
  }
}
