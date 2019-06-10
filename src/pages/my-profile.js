import React from 'react';

import PaperCard from './../components/PaperCard';
import CustomGrid from './../components/CustomGrid';

import MyProfileTemplate from './../templates/MyProfileTemplate';

export default class MyProfilePage extends React.Component {
  render() {
    return (
      <CustomGrid>
        <PaperCard>
          <MyProfileTemplate />
        </PaperCard>
      </CustomGrid>
    );
  }
}
