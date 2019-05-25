import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import TextField from '@material-ui/core/TextField';
import PaperCard from '../../components/PaperCard';
import ProfileInfo from '../../components/ProfileInfo';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Bar from '../../components/Bar';
import BarItem from '../../components/BarItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

class AspectDialog extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({ open: false });
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
              onClick={handleClose}
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

export default withMobileDialog()(withStyles(styles)(AspectDialog));
