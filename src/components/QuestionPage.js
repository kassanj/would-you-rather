import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPage extends Component {
  render() {

    return (
      <div>
        Question Page
      </div>
    )
  }
}

export default connect()(QuestionPage)
