import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import FourOFour from './FourOFour';

class QuestionPage extends Component {
  render() {


    const { targetQuestion, errorPage } = this.props

    if (errorPage) {
      return (
        <FourOFour />
      );
    }

    return (
      <div>
        <Question question={targetQuestion} />
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }, props) {

  if (questions[props.match.params.id] === undefined) {
    const errorPage = true
    return {
      errorPage,
    };
  }

  const pageId = props.match.params.id
  const errorPage = false

  return {
    targetQuestion: questions[pageId],
    errorPage
  }
}

export default connect(mapStateToProps)(QuestionPage)
