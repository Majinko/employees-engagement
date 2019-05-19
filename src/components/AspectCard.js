import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

import { createPost } from '../actions/postActions';

function createStyled(styles, options) {
  function Styled(props) {
    const { children, ...other } = props;
    return children(other);
  }

  Styled.propTypes = {
    children: PropTypes.func,
    classes: PropTypes.object,
    aspectCard: PropTypes.bool,
  };

  return withStyles(styles, options)(Styled);
}

const Styled = createStyled(theme => ({
  aspectCard: {
    border: '2px solid transparent',
    marginTop: theme.spacing.unit,
    display: 'block',
    width: '100%',
  },
  aspectCardActive: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));

class AspectCard extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };

    this.ClickFn = this.ClickFn.bind(this);
  }

  ClickFn(e) {
    e.currentTarget.classList.toggle('active');

    const element = this.props.children[1].props.children;
    this.setState({ title: element }, () => {
      const post = {
        title: this.state.title,
      };
      this.props.createPost(post);
    });
  }

  render() {
    return (
      <Styled>
        {({ classes }) => (
          <Paper
            className={classes.aspectCard}
            component={Button}
            onClick={this.ClickFn}
            data-aspect={this.props.children[1].props.children}
          >
            {this.props.children}
          </Paper>
        )}
      </Styled>
    );
  }
}

AspectCard.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(
  null,
  { createPost }
)(AspectCard);
