import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {

    return (
      <div>
        LEADERBOARD
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    ...users,
    // orderedUsers: ,
  }
}

export default connect(mapStateToProps)(Leaderboard)
