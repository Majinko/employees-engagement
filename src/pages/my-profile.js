import React from 'react';
import Paper from './../components/Paper';
import { Typography } from '@material-ui/core';

export default class MyProfilePage extends React.Component {
  render() {
    return (
      <Paper>
        <Typography variant="h1">My Profile</Typography>
      </Paper>
    );
  }
}
