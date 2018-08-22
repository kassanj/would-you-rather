import React, { Component } from 'react'
import { connect } from 'react-redux'

import Home from './Home'
import Login from './Login'

class Dashboard extends Component {

  render() {

    {/* Add Login conditional   */}

    return (

      <div>
        <Home />
        <Login />
      </div>
    )
  }
}

export default connect()(Dashboard)
