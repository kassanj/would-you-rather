import React, { Component } from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    absolute: {
      position: 'fixed',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 3,
    },
});

class AddButton extends Component {

  render() {
   console.log(this.state)
   const { authedUser, classes } = this.props;

   return (
      <div>
        { authedUser === null
         ? null
         :
         <Button variant="fab"
                 mini color="primary"
                 aria-label="Add"
                 className={classes.absolute}>
           <AddIcon />
         </Button>
        }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser: authedUser
  }
}

export default compose(
    withStyles(styles),
    connect(mapStateToProps),
)(AddButton);
