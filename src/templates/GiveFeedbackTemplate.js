import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { pages } from './../data/pages';

import AspectCard from './../components/AspectCard';
import Avatar from './../components/Avatar';
import PaperCard from './../components/PaperCard';

import { fetchAspects } from '../actions/postActions';
import { connect } from 'react-redux';

class Something extends Component {
  componentWillMount() {
    this.props.fetchAspects();
  }

  render() {
    return (
      <PaperCard>
        <Typography variant="h1" gutterBottom>
          Give Feedback
        </Typography>
        <Avatar initials="L" />
        <Grid container justify="center" spacing={16}>
          {this.props.aspects &&
            this.props.aspects.map(aspect => (
              <Grid item xs={6} key={aspect.text}>
                <AspectCard aspectCard>
                  <FontAwesomeIcon icon={['fal', aspect.icon]} size="3x" />
                  <Typography component={'h5'}>{aspect.text}</Typography>
                </AspectCard>
              </Grid>
            ))}
        </Grid>
        <Button variant="contained" color="primary" to="/home">
          {pages.profile.submitButton}
        </Button>
      </PaperCard>
    );
  }
}

Something.propTypes = {
  fetchAspects: PropTypes.func,
  aspects: PropTypes.array,
};

const mapStateToProps = state => ({
  aspects: state.aspects.items,
});

export default connect(
  mapStateToProps,
  { fetchAspects }
)(Something);
