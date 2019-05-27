import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'

import authenticationIllustration from './../assets/illustrations/authentication.svg'

import AuthenticationFormControl from './partials/AuthenticationFormControl'

import { pages } from './../data/pages'

function TabContainer ({ children, dir })
{
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: '100%',
  },
  image: {
    display: 'block',
    margin: '0 auto',
    maxWidth: '100%',
  },
})

class FullWidthTabs extends React.Component
{
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render ()
  {
    const { classes, theme } = this.props

    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label={pages.authentication.login}/>
          <Tab label={pages.authentication.signup}/>
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <img
              src={authenticationIllustration}
              alt={pages.authentication.login}
              className={classes.image}
            />
            <AuthenticationFormControl/>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <img
              src={authenticationIllustration}
              alt={pages.authentication.signup}
              className={classes.image}
            />
            <AuthenticationFormControl type="register"/>
          </TabContainer>
        </SwipeableViews>
      </div>
    )
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(FullWidthTabs)
