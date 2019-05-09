import React from 'react';
import PaperCard from './../components/PaperCard';
import { Typography } from '@material-ui/core';

export default class MyProfilePage extends React.Component {
  render() {
    return (
      <PaperCard>
        <Typography variant="h1">My Profile</Typography>
      </PaperCard>
    );
  }
}
