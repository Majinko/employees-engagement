import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import React from 'react';
import FeedbackCard from '../components/FeedbackCard';
import { userService } from '../services/user';

class FullWidthTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  handleSearch = event => {
    userService.searchUser(event.target.value).then(results => {
      this.setState({
        users: results,
      });
    });
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
            autoFocus
            endAdornment={
              <InputAdornment position="end">
                <FontAwesomeIcon icon={['fal', 'search']} size="lg" />
              </InputAdornment>
            }
          />
        </FormControl>
        {users.map(user => (
          <FeedbackCard
            name={user.name}
            position={user.position}
            key={user.id}
            user={user}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default FullWidthTabs;
