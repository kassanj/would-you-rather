import React, { Component } from 'react'
import { connect } from 'react-redux'

class FourOFour extends Component {
  render() {

    return (
      <div style={{paddingTop: 35}}>
         <h2>404</h2>
      </div>
    )
  }
}

export default connect()(FourOFour)
