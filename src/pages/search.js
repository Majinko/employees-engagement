import React from 'react';

import PaperCard from './../components/PaperCard';
import CustomGrid from './../components/CustomGrid';

import SearchTemplate from './../templates/SearchTemplate';

export default class SearchPage extends React.Component {
  render() {
    return (
      <CustomGrid>
        <PaperCard>
          <SearchTemplate />
        </PaperCard>
      </CustomGrid>
    );
  }
}
