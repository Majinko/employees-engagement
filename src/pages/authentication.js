import React from 'react';

import { Typography } from '@material-ui/core';

import PaperCard from './../components/PaperCard';


export default class AuthenticationPage extends React.Component {
  render() {
    return (
      <PaperCard>
        <Typography variant="h1">Authentication</Typography>
      </PaperCard>
    );
  }
}
