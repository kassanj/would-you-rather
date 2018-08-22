import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import Leaderboard from './Leaderboard'


class Dashboard extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Leaderboard />
      </div>
    )
  }
}

export default connect()(Dashboard)
