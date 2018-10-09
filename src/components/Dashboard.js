import React, { Component } from 'react'
import { connect } from 'react-redux'

import Home from './Home'
import Login from './Login'

class Dashboard extends Component {

  render() {

    return (

      <div>
        {this.props.authedUser === null
         ? <Login />
         : <Home /> }
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    authedUser: authedUser == null ? authedUser : Object.keys(users)
        .filter((a) => a === authedUser)
        .map((a) => users[a].name )
  }
}

export default connect(mapStateToProps)(Dashboard)
