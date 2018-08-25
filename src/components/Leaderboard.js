import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {

   const { userDetails } = this.props

    return (
      <div>
        <ul className='dashboard-list'>
          {userDetails.map(user => (
           <li key={user.id}>
              <div>{user.image}</div>
              <div>{user.name}</div>
              <div>Answered: {user.questionsAnswered}</div>
              <div>Questions: {user.questionsCreated}</div>
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


export default connect(mapStateToProps)(Leaderboard)
