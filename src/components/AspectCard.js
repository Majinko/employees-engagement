import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

function createStyled(styles, options) {
  function Styled(props) {
    const { children, ...other } = props;
    return children(other);
  }

  Styled.propTypes = {
    children: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };

  return withStyles(styles, options)(Styled);
}

const Styled = createStyled(theme => ({
  aspectCard: {
    border: '2px solid transparent',
    marginTop: theme.spacing.unit,
    display: 'block',
    width: '100%',
  },
  aspectCardActive: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));

function PaperCard({ children, aspectCard, ...props }) {
  return (
    <Styled>
      {({ classes }) => (
        <Paper
          className={classes.aspectCard}
          component={Button}
          onClick={e => {
            e.currentTarget.classList.toggle(classes.aspectCardActive);
          }}
        >
          {children}
        </Paper>
      )}
    </Styled>
  );
}

PaperCard.propTypes = {
  classes: PropTypes.object.isRequired,
  aspectCard: PropTypes.bool,
};

export default PaperCard;
