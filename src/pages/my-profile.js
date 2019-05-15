import React from 'react';

import ProfileTemplate from '../templates/ProfileTemplate';
import CustomGrid from './../components/CustomGrid';

export default class MyProfilePage extends React.Component {
  render() {
    return (
      <CustomGrid>
        <ProfileTemplate />
      </CustomGrid>
    );
  }
}
