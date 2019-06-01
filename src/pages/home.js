import React from 'react';

import CustomGrid from './../components/CustomGrid';

import HomeTemplate from './../templates/HomeTemplate';

export default class HomePage extends React.Component {
  render() {
    return (
      <CustomGrid>
        <HomeTemplate />
      </CustomGrid>
    );
  }
}
