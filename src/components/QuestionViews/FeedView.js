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

    const { question, classes } = this.props

    return (
       <li key={question.id}>
           <Card className={classes.card}>
             <CardContent>
               <Typography color="textSecondary" gutterBottom>
               </Typography>
               <Typography variant="h5" component="h2">
               </Typography>
               <Typography component="p">
                 <div>{question.optionOne.text}</div> or <div>{question.optionTwo.text}</div>
               </Typography>
             </CardContent>
             <CardActions className={classes.actions}>
               <Link to={`/question/${question.id}`} exact='true' activeclassname='active' className={classes.button}>
                 <Button variant="outlined" color="primary" size="large">
                     Vote!
                 </Button>
               </Link>
             </CardActions>
           </Card>
      </li>
    )
  }
}

export default connect()(withStyles(styles)(FeedView))
