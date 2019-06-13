import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import AspectCard from './../components/AspectCard';
import PaperCard from './../components/PaperCard';
import ProfileInfo from './../components/ProfileInfo';

import AspectDialog from './../templates/partials/AspectDialog';

import {
  fetchAspects,
  fetchStaticAspect,
  postFeedbackAction,
} from './../actions/aspectActions';

import { pages } from './../data/pages';

const styles = theme => ({
  button: {
    marginTop: theme.spacing(2),
  },
});

class GiveFeedbackTemplate extends React.Component {
  componentWillMount() {
    this.props.fetchAspects();
    this.props.fetchStaticAspect();
    // TODO: update url
  }

  state = {
    opened: false,
    aspectId: null,
  };

  handleClose = () => {
    this.setState({ opened: false });
  };

  render() {
    const { classes, aspects, staticAspect, user } = this.props;

    const { name, position } = user;

    if (aspects.length > 0) {
      return (
        <PaperCard>
          <Typography variant="h1" gutterBottom>
            Give Feedback
          </Typography>
          <ProfileInfo name={name} position={position} />
          <Grid container justify="center" spacing={2}>
            {aspects &&
              aspects.map(aspect => (
                <Grid item xs={6} key={aspect.text}>
                  <AspectCard aspect={aspect} />
                </Grid>
              ))}
            {staticAspect && (
              <Grid
                item
                xs={6}
                key={staticAspect.text}
                onClick={() =>
                  this.setState({
                    opened: true,
                    aspectId: staticAspect.id,
                  })
                }
              >
                <AspectCard aspect={staticAspect} />
              </Grid>
            )}
          </Grid>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() =>
              postFeedbackAction({
                relatedUserId: 813,
                ids: [1007, 1008],
                payload: 'ahoj',
                wantsToMeet: true,
              })
            }
          >
            {pages.profile.submitButton}
          </Button>
          <AspectDialog
            opened={this.state.opened}
            currentId={this.state.aspectId}
            handleClose={() => this.handleClose()}
          />
        </PaperCard>
      );
    }

    return (
      <PaperCard>
        <CircularProgress />
      </PaperCard>
    );
  }
}

GiveFeedbackTemplate.propTypes = {
  fetchAspects: PropTypes.func,
  fetchStaticAspect: PropTypes.func,
  aspects: PropTypes.array,
};

const mapStateToProps = state => ({
  aspects: state.aspects.aspects,
  staticAspect: state.aspects.staticAspect,
});

export default connect(
  mapStateToProps,
  { fetchAspects, fetchStaticAspect }
)(withStyles(styles)(GiveFeedbackTemplate));
