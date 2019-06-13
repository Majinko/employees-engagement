import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {
  leaveFeedback,
  setAspect,
  unsetAspect,
} from '../../actions/aspectActions';
import Bar from '../../components/Bar';
import BarItem from '../../components/BarItem';
import PaperCard from '../../components/PaperCard';
import ProfileInfo from '../../components/ProfileInfo';
import { pages } from '../../data/pages';

const styles = () => ({
  dialogContent: {
    paddingTop: 24,
  },
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});

class AspectDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxChecked: true,
      feedback: '',
    };

    this.handleSave = this.handleSave.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ feedback: e.target.value });
  }

  handleSave = () => {
    const { handleClose, currentId } = this.props;
    const { feedback, checkboxChecked } = this.state;

    handleClose();

    if (feedback.length === 0) {
      unsetAspect(currentId, false);
    } else {
      setAspect(currentId, true);
      leaveFeedback(currentId, feedback, checkboxChecked);
    }
  };

  handleCheckboxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { fullScreen, classes, opened, handleClose } = this.props;
    const { feedback, checkboxChecked } = this.state;

    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          className={classes.root}
          open={opened}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent className={classes.dialogContent}>
            <ProfileInfo name="Linda Krásna" position="Project Lead" />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label={pages.giveFeedback.modal.label}
              type="email"
              fullWidth
              multiline
              onChange={this.onChange}
              value={feedback}
              placeholder={pages.giveFeedback.modal.placeholder}
            />
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxChecked}
                    onChange={this.handleCheckboxChange('checkboxChecked')}
                    value="checkboxChecked"
                    color="primary"
                  />
                }
                label={pages.giveFeedback.modal.checkbox}
              />
            </FormGroup>
            <PaperCard>
              <Bar>
                <BarItem>
                  <FontAwesomeIcon icon={['fal', 'lightbulb-on']} size="2x" />
                </BarItem>
                <BarItem>
                  <Typography gutterBottom>
                    {pages.giveFeedback.modal.educationBox}
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
