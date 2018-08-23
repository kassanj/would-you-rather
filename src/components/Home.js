import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {

    const { answeredQuestions, unansweredQuestions } = this.props

    return (
      <div>
        <h3 className='center'>Answered Questions</h3>
        <ul className='dashboard-list'>

          {answeredQuestions.map((question) => (
            <li key={question.id}>
              <div>QUESTION ID: {question.id}</div>
              <div>{question.author}</div>
            </li>
          ))}
        </ul>
        <h3 className='center'>Unanswered Questions</h3>
        <ul className='dashboard-list'>

          {unansweredQuestions.map((question) => (
            <li key={question.id}>
              <div>QUESTION ID: {question.id}</div>
              <div>{question.author}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions }) {
  return {
    ...questions,
    authedUser,
    
    answeredQuestions: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
      .filter( a => questions[a].optionOne.votes.includes(authedUser) ||
     questions[a].optionTwo.votes.includes(authedUser))
      .map((a) => questions[a] ),

    unansweredQuestions: Object.keys(questions)
       .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
       .filter( a => questions[a].optionOne.votes.indexOf(authedUser) == -1 &&
      questions[a].optionTwo.votes.indexOf(authedUser) == -1 )
      .map((a) => questions[a] )
  }
}

export default connect(mapStateToProps)(Home)
