import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

function createStyled(styles, options) {
  function Styled(props) {
    const { children, ...other } = props;
    return children(other);
  }

  Styled.propTypes = {
    children: PropTypes.func,
    classes: PropTypes.object,
    initials: PropTypes.string,
  };

  return withStyles(styles, options)(Styled);
}

const Styled = createStyled(theme => ({
  avatar: {
    background: theme.palette.primary.main,
    width: 64,
    height: 64,
    marginBottom: theme.spacing(1),
  },
}));

function ProfileInfo({ initials }) {
  return (
    <Styled>
      {({ classes }) => <Avatar className={classes.avatar}>{initials}</Avatar>}
    </Styled>
  );
}

export default ProfileInfo;
