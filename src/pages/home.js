import React from 'react';

import HomeTemplate from '../templates/HomeTemplate';
import CustomGrid from './../components/CustomGrid';

export default class HomePage extends React.Component {
  render() {
    return (
      <CustomGrid>
        <HomeTemplate />
      </CustomGrid>
    );
  }
}
