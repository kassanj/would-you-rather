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
  }
};


class Leaderboard extends Component {
  render() {

   const { userDetails, classes } = this.props

    return (
      <div style={{paddingTop: 15}}>
        <h2>Leaderboard</h2>
        <ul className='dashboard-list'>
          {userDetails.map(user => (
           <li key={user.id}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {user.name}
                    </Typography>
                    <img src={user.image} className="avatar" alt={user.name} />
                    <Typography>
                      Answered {user.questionsAnswered} questions
                    </Typography>
                    <Typography>
                      Posted {user.questionsCreated} questions
                    </Typography>
                  </CardContent>
                </Card>
           </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {

  const userDetails = Object.keys(users)
    .map((user) => {
      const userDeets = {
        id: users[user].id,
        image: users[user].avatarURL,
        name: users[user].name,
        questionsAnswered: Object.keys(users[user].answers).length,
        questionsCreated: users[user].questions.length,
      };
      const rank = userDeets.questionsAnswered + userDeets.questionsCreated;
      userDeets.rank = rank;
      return (userDeets);
    })
    .sort((a, b) => (
      b.rank - a.rank
    ));

  return {
    userDetails,
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Leaderboard))
