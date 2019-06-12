import React from 'react';

import CustomGrid from './../components/CustomGrid';

import GiveFeedbackTemplate from './../templates/GiveFeedbackTemplate';

export default class GiveFeedbackPage extends React.Component {
  state = {
    user: {},
  };

  componentDidMount() {
    this.setState({ user: this.props.location.state.user });
  }

  render() {
    return (
      <CustomGrid>
        <GiveFeedbackTemplate user={this.state.user} />
      </CustomGrid>
    );
  }
}
