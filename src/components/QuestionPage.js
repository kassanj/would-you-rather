import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import FourOFour from './FourOFour';

class QuestionPage extends Component {

  render() {

    const { targetQuestion, errorPage, userAnswers } = this.props
    let answered = null

    if ( targetQuestion ) {
       answered = userAnswers.includes(targetQuestion.id)
    }

    if (errorPage) {
      return (
        <FourOFour />
      );
    }

    if (answered) {
      return (
        <div>
          <Question key={targetQuestion.id} status="PollResults" question={targetQuestion} />
        </div>
      )
    }

    if (!answered) {
      return (
        <div>
          <Question key={targetQuestion.id} status="PollVoting" question={targetQuestion} />
        </div>
      )
    }

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
    errorPage,
    userAnswers: Object.keys(users[authedUser].answers)
  }
}

export default connect(mapStateToProps)(QuestionPage)
