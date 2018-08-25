import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {
  render() {

    const { notAnsweredQIds, answeredQIds, questions} = this.props

    return (
      <div>
        <h3 className='center'>Answered Questions</h3>
        <ul className='dashboard-list'>
          {answeredQIds.map((question) => (
            <Question key={question} status="GeneralView" question={question}/>
          ))}
        </ul>
        <h3 className='center'>Unanswered Questions</h3>
        <ul className='dashboard-list'>
          {notAnsweredQIds.map((question) => (
            <Question key={question} status="GeneralView" question={question} />
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }) {

      const notAnsweredQuestions = Object.values(questions).filter((question) =>
          !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser))

      const answeredQuestions = Object.values(questions).filter((question) =>
          question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
      )

      return {
          notAnsweredQIds: Object.values(notAnsweredQuestions)
              .sort((a, b) => b.timestamp - a.timestamp).map((q) => q),
          answeredQIds: Object.values(answeredQuestions)
              .sort((a, b) => b.timestamp - a.timestamp).map((q) => q)
      }
}

export default connect(mapStateToProps)(Home)
