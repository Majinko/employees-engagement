import React from 'react';

import PaperCard from './../components/PaperCard';
import CustomGrid from './../components/CustomGrid';

import AuthenticationTemplate from './../templates/AuthenticationTemplate';

export default class AuthenticationPage extends React.Component {
  render() {
    return (
      <CustomGrid>
        <PaperCard>
          <AuthenticationTemplate />
        </PaperCard>
      </CustomGrid>
    );
  }
}
