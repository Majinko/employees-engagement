import React, { Component } from 'react';
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

import { fetchAspects } from './../actions/aspectActions';

import { pages } from './../data/pages';

const styles = theme => ({
  button: {
    marginTop: theme.spacing(2),
  },
});

class Something extends Component {
  componentWillMount() {
    this.props.fetchAspects();
  }

  state = {
    opened: false,
  };

  handleClickOpen = () => {
    this.setState({ opened: true });
  };

  handleClose = () => {
    this.setState({ opened: false });
  };

  render() {
    const { classes, aspects } = this.props;

    if (aspects.length > 0) {
      return (
        <PaperCard>
          <Typography variant="h1" gutterBottom>
            Give Feedback
          </Typography>
          <ProfileInfo name="Linda Krásna" position="Project Lead" />
          <Grid container justify="center" spacing={4}>
            {aspects &&
              aspects.map(aspect => (
                <Grid
                  item
                  xs={6}
                  key={aspect.text}
                  onClick={aspect.type === 'more' ? this.handleClickOpen : null}
                >
                  <AspectCard aspect={aspect} />
                </Grid>
              ))}
          </Grid>
          <Button
            variant="contained"
            color="primary"
            to="/home"
            className={classes.button}
          >
            {pages.profile.submitButton}
          </Button>
          <AspectDialog
            opened={this.state.opened}
            handleClose={() => this.handleClose()}
          />
        </PaperCard>
      );
    }

    return (
      <PaperCard>
        <CircularProgress />;
      </PaperCard>
    );
  }
}

Something.propTypes = {
  fetchAspects: PropTypes.func,
  aspects: PropTypes.array,
};

const mapStateToProps = state => ({
  aspects: state.aspects.aspects,
});

export default connect(
  mapStateToProps,
  { fetchAspects }
)(withStyles(styles)(Something));
