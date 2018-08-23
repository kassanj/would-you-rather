import React, { Component } from 'react'
import { connect } from 'react-redux'

import Home from './Home'
import Login from './Login'

class Dashboard extends Component {

  render() {

    {/* Add Login conditional   */}

    return (

      <div>
        {this.props.authedId === null
         ? <Login />
         : <Home /> }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)
