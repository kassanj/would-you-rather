import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {
  render() {

    const { targetQuestion } = this.props

    return (
      <div>
        <Question question={targetQuestion} />
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }, props) {
  const { id } = props.match.params

  return {
    targetQuestion: questions[id]
  }
}

export default connect(mapStateToProps)(QuestionPage)
