import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { pages } from './../data/pages';

import AspectCard from './../components/AspectCard';
import Avatar from './../components/Avatar';
import PaperCard from './../components/PaperCard';

const aspects = [
  { icon: 'user-headset', text: 'Excellent communication' },
  { icon: 'lightbulb-on', text: 'Extraordinary creativity' },
  { icon: 'bullseye-arrow', text: 'Goal-oriented' },
  { icon: 'handshake', text: 'Effective cooperation' },
  { icon: 'calendar-alt', text: 'Precise planning' },
  { icon: 'exchange', text: 'There was more' },
];

const styles = theme => ({
  gridItem: {
    margin: '0 auto',
  },
  paper: {
    marginTop: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  aspectText: {
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  margin: {
    marginTop: theme.spacing.unit * 2,
  },
});

function Something({ children, ...props }) {
  const { classes } = props;

  return (
    <PaperCard>
      <Typography variant="h1" gutterBottom>
        Give Feedback
      </Typography>
      <Avatar initials="L" />
      <Grid container justify="center" spacing={16}>
        {aspects.map(aspect => (
          <Grid item xs={6} key={aspect.text}>
            <AspectCard aspectCard>
              <FontAwesomeIcon icon={['fal', aspect.icon]} size="3x" />
              <Typography component={'h5'} className={classes.aspectText}>
                {aspect.text}
              </Typography>
            </AspectCard>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        className={classes.margin}
        to="/home"
      >
        {pages.profile.submitButton}
      </Button>
    </PaperCard>
  );
}

Something.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Something);
