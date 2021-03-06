import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SwipeableViews from 'react-swipeable-views';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import PaperCard from './../components/PaperCard';
import Chart from './../components/Chart';

import { pages } from './../data/pages';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node,
  dir: PropTypes.string,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: '100%',
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label={pages.home.giveFeedbackTab} />
          <Tab label={pages.home.dashboardTab} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Typography variant="h1" gutterBottom>
              {pages.home.giveFeedbackTitle}
            </Typography>
            <Typography variant="h3" gutterBottom>
              {pages.home.giveFeedbackLabel}
            </Typography>
            <FormControl
              fullWidth
              className={classes.marginTop}
              component={Link}
              to="/search"
            >
              <Input
                id="search"
                type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <FontAwesomeIcon icon={['fal', 'search']} size="lg" />
                  </InputAdornment>
                }
              />
            </FormControl>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Typography variant="h3" gutterBottom>
              {pages.home.dashboardIndividualRatings}
            </Typography>
            <PaperCard>
              <Chart />
            </PaperCard>
            <Typography variant="h3" gutterBottom style={{ marginTop: 32 }}>
              {pages.home.dashboardOverallRatings}
            </Typography>
            <PaperCard>...</PaperCard>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
