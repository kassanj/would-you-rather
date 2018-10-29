import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 275,
  },
  actions: {
    paddingBottom: 15
  },
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '60%'
  }
};

class FeedView extends Component {
  render() {

    const { type, question, classes } = this.props

    return (
        <li key={question.id}>
           <Card className={classes.card}>
             <CardContent>
               <Typography component="h4" style={{fontWeight: 700, textDecoration: 'uppercase', paddingBottom: 15, color: '#3f51b5'}}>
                  Would you rather...
               </Typography>
               <Typography component="p">
                 {question.optionOne.text}
               </Typography>
               <Typography component="p">
                   or
               </Typography>
               <Typography component="p">
                 {question.optionTwo.text}
                </Typography>
             </CardContent>
             <CardActions className={classes.actions}>
               <Link to={`/question/${question.id}`} exact='true' activeclassname='active' className={classes.button}>
                 <Button variant="outlined" color="primary" size="large">
                     { type === 'unanswered' ? 'Vote!' : 'See Results' }
                 </Button>
               </Link>
             </CardActions>
           </Card>
      </li>
    )
  }
}

export default connect()(withStyles(styles)(FeedView))
