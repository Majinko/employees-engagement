import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

import FeedbackCard from './../components/FeedbackCard';

import { userService } from './../services/user';

class FullWidthTabs extends React.Component {
  handleSearch = event => {
    userService.searchUser(event.target.value).then(users => {
      console.log(users);
    });
  };

  render() {
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
        <FeedbackCard name="Linda Krásna" position="Project Lead" />
      </React.Fragment>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default FullWidthTabs;
