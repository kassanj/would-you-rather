import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 275,
    marginBottom: 20,
    flex: 1
  },
  voted: {
    position: 'relative',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 275,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "#e7ebff",
    boxShadow: '#3f51b5 0px 1px 6px, #3f51b5 0px 1px 4px',
    flex: 1
  },
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '60%'
  },
  voteText: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#3f51b5",
    color: "#FFFFFF"
  }
};

class PollResults extends Component {

  render() {

    const { question, answerOne, answerTwo, classes } = this.props

    const calc1 = question.optionOne.votes.length
    const calc2 = question.optionTwo.votes.length
    const sum =  calc1 + calc2
    const perc1 = Math.round(( calc1 / sum ) * 100)
    const perc2 = Math.round(( calc2 / sum  ) * 100)

    return (
       <div>
         <h2>Results <span role="img" aria-label="ballot">📊</span></h2>
         <Card className={ answerOne.length > 0 ? classes.voted : classes.card }>
           <CardContent>
            <Typography className={ classes.voteText }>
                {answerOne.length > 0 ? 'Your\nVote!' : " " }
            </Typography>
             <Typography component="p" style={{paddingBotton: 16, paddingTop: 16}}>
               {question.optionOne.text}
             </Typography>
             <Typography variant="h4">
               {perc1}%
             </Typography>
             <Typography color="textSecondary" gutterBottom>
               {calc1} out of {sum} votes
              </Typography>
           </CardContent>
         </Card>

         <Card className={ answerTwo.length > 0 ? classes.voted : classes.card }>
           <CardContent>
             <Typography className={ classes.voteText }>
               {answerTwo.length > 0 ? 'Your\nVote!' : " " }
             </Typography>
             <Typography component="p" style={{paddingBotton: 16, paddingTop: 16}}>
               {question.optionTwo.text}
             </Typography>
             <Typography variant="h4">
                {perc2}%
             </Typography>
             <Typography color="textSecondary" gutterBottom>
               {calc2} out of {sum} votes
              </Typography>
           </CardContent>
         </Card>
       </div>
    )
  }
}

function mapStateToProps({ authedUser, users, question }, props ) {

    const answerOne = props.question.optionOne.votes.filter((x) => x === authedUser)
    const answerTwo = props.question.optionTwo.votes.filter((x) => x === authedUser)

    return {
      answerOne,
      answerTwo
    }
}


export default connect(mapStateToProps)(withStyles(styles)(PollResults))
