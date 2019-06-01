import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Bar from './../../components/Bar';
import BarItem from './../../components/BarItem';
import PaperCard from './../../components/PaperCard';
import ProfileInfo from './../../components/ProfileInfo';

import {
  leaveFeedback,
  setAspect,
  unsetAspect,
} from './../../actions/aspectActions';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

class AspectDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: '',
    };

    this.handleSave = this.handleSave.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ feedback: e.target.value });
  }

  handleSave = () => {
    this.props.handleClose();

    if (this.state.feedback.length === 0) {
      this.props.unsetAspect(this.props.currentId, false);
    } else {
      this.props.setAspect(this.props.currentId, true);
      this.props.leaveFeedback(this.props.currentId, this.state.feedback);
    }
  };

  render() {
    const { fullScreen, classes, opened, handleClose } = this.props;

    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          className={classes.root}
          open={opened}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent>
            <ProfileInfo name="Linda Krásna" position="Project Lead" />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Leave feedback"
              type="email"
              fullWidth
              multiline
              onChange={this.onChange}
              value={this.state.feedback}
            />
            <PaperCard>
              <Bar>
                <BarItem>
                  <FontAwesomeIcon icon={['fal', 'lightbulb-on']} size="2x" />
                </BarItem>
                <BarItem>
                  <Typography gutterBottom>
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </Typography>
                </BarItem>
              </Bar>
            </PaperCard>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleSave}
              color="primary"
              variant="contained"
              autoFocus
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AspectDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  leaveFeedback: PropTypes.func.isRequired,
  unsetAspect: PropTypes.func.isRequired,
  setAspect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  aspects: state.aspects.aspects,
});

export default compose(
  withMobileDialog(),
  withStyles(styles),
  connect(
    mapStateToProps,
    { leaveFeedback, setAspect, unsetAspect }
  )
)(AspectDialog);
