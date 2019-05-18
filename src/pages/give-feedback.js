import React from 'react';

import CustomGrid from './../components/CustomGrid';

import GiveFeedbackTemplate from './../templates/GiveFeedbackTemplate';

export default class GiveFeedbackPage extends React.Component {
  render() {
    return (
      <CustomGrid>
        <GiveFeedbackTemplate />
      </CustomGrid>
    );
  }
}
