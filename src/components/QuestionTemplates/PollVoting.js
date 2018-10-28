import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer} from '../../actions/shared'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 250,
  },
  input: {
    display: 'none',
  },
});

class PollVoting extends Component {

  handleOptionOne = (e) => {
    e.preventDefault()
    const { dispatch, question } = this.props
    const option = 'optionOne'
    const id = question['id']
    dispatch(handleQuestionAnswer(id, option))
  }

  handleOptionTwo = (e) => {
    e.preventDefault()
    const { dispatch, question } = this.props
    const option = 'optionTwo'
    const id = question['id']
    dispatch(handleQuestionAnswer(id, option));
  }

  render() {

    const { question, classes } = this.props

    return (
       <li>
         <h2>Voting <span role="img" aria-label="ballot">🗳️</span></h2>
         <p>Select an option below.</p>
         <Typography component="h4" style={{fontWeight: 700, textDecoration: 'uppercase', paddingBottom: 15, color: '#3f51b5'}}>
            Would you rather...
         </Typography>
           <Button variant="outlined"
                   color="primary"
                   onClick={this.handleOptionOne}
                   className={classes.button}>
             {question.optionOne.text}
           </Button>
           <Button variant="outlined"
                   color="primary"
                   onClick={this.handleOptionTwo}
                   className={classes.button}>
             {question.optionTwo.text}
           </Button>
       </li>
    )
  }
}


export default connect()(withStyles(styles)(PollVoting))
