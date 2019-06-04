import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

import FeedbackCard from './../components/FeedbackCard';

import { userService } from './../services/user';

class FullWidthTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  handleSearch = event => {
    userService.searchUsers(event.target.value).then(results => {
      console.log(results);
      this.setState({
        users: results,
      });
    });

    console.log(this.state);
  };

  render() {
    const { users } = this.state;

    return (
      <React.Fragment>
        <FormControl fullWidth>
          <Input
            id="search"
            type="text"
            onKeyUp={this.handleSearch}
            endAdornment={
              <InputAdornment position="end">
                <FontAwesomeIcon icon={['fal', 'search']} size="lg" />
              </InputAdornment>
            }
          />
        </FormControl>
        {users.map(user => (
          <FeedbackCard name={user.name} position={user.position} />
        ))}
      </React.Fragment>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default FullWidthTabs;
