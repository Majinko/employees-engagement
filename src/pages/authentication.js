import React from 'react';

import { Typography } from '@material-ui/core';

import PaperCard from './../components/PaperCard';

import AuthenticationTemplate from '../templates/AuthenticationTemplate';

export default class AuthenticationPage extends React.Component {
  render() {
    return (
      <PaperCard>
        <AuthenticationTemplate />
      </PaperCard>
    );
  }
}
