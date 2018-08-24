import React, { Component } from 'react'
import { connect } from 'react-redux'

class FourOFour extends Component {
  render() {

    return (
      <div>
         <b>404</b>
      </div>
    )
  }
}

export default connect()(FourOFour)
