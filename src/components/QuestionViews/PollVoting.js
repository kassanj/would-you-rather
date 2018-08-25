import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer} from '../../actions/shared'

class PollVoting extends Component {

  handleOptionOne = (e) => {
    e.preventDefault()
    const { dispatch, question } = this.props
    const option = 'optionOne'
    const id = question['id']
    dispatch(handleQuestionAnswer(id, option))
  }

  handleOptionTwo = (e) => {
    e.preventDefault()
    const { dispatch, question } = this.props
    const option = 'optionTwo'
    const id = question['id']
    dispatch(handleQuestionAnswer(id, option));
  }

  render() {

    const { question } = this.props

    return (
       <li>
         <b>PollVoting</b>
         <div>{question.id}</div>
         <div>{question.author}</div>
         <div>Created: {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(question.timestamp)}</div>
         <button onClick={this.handleOptionOne}>{question.optionOne.text}</button>
         <button onClick={this.handleOptionTwo}>{question.optionTwo.text}</button>
   </li>
    )
  }
}

export default connect()(PollVoting)
