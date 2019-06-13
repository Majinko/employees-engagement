import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  fetchAspects,
  fetchStaticAspect,
  postFeedbackAction,
} from '../actions/aspectActions';
import AspectCard from '../components/AspectCard';
import PaperCard from '../components/PaperCard';
import ProfileInfo from '../components/ProfileInfo';
import { pages } from '../data/pages';
import AspectDialog from './partials/AspectDialog';

const styles = theme => ({
  button: {
    marginTop: theme.spacing(2),
  },
});

class GiveFeedbackTemplate extends React.Component {
  state = {
    opened: false,
    aspectId: null,
  };

  componentWillMount() {
    fetchAspects();
    fetchStaticAspect();
    // TODO: update url
  }

  handleClose = () => {
    this.setState({ opened: false });
  };

  render() {
    const { classes, aspects, staticAspect, user } = this.props;

    const { name, position } = user;

    const { opened, aspectId } = this.state;

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
                payload: 'test',
                wantsToMeet: true,
              })
            }
          >
            {pages.profile.submitButton}
          </Button>
          <AspectDialog
            opened={opened}
            currentId={aspectId}
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
  aspects: PropTypes.shape.isRequired,
};

const mapStateToProps = state => ({
  aspects: state.aspects.aspects,
  staticAspect: state.aspects.staticAspect,
});

export default connect(
  mapStateToProps,
  { fetchAspects, fetchStaticAspect }
)(withStyles(styles)(GiveFeedbackTemplate));
