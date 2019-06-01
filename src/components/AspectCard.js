import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { setAspect } from '../actions/aspectActions';

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
    marginTop: theme.spacing(1),
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

    this.setAspectOnClick = this.setAspectOnClick.bind(this);
  }

  setAspectOnClick(id, value) {
    this.props.setAspect(id, !value);
  }

  render() {
    const { aspect } = this.props;

    return (
      <Styled>
        {({ classes }) => (
          <Paper
            className={
              aspect.isActive
                ? [classes.aspectCard, classes.aspectCardActive].join(' ')
                : classes.aspectCard
            }
            component={Button}
            onClick={() => this.setAspectOnClick(aspect.id, aspect.isActive)}
          >
            <FontAwesomeIcon icon={['fal', aspect.icon]} size="3x" />
            <Typography component={'h5'}>{aspect.text}</Typography>
          </Paper>
        )}
      </Styled>
    );
  }
}

AspectCard.propTypes = {
  setAspect: PropTypes.func.isRequired,
};

export default connect(
  null,
  { setAspect }
)(AspectCard);
