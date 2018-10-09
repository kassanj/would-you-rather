import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollResults extends Component {
  render() {

    const { question } = this.props

    console.log(question)

    return (
       <li>
         <b>Poll Results</b>
         <div>{question.id}</div>
         <div>{question.author}</div>
         <div>{question.optionOne.text}</div>
         <div>{question.optionOne.votes.length}</div>
         <div>{question.optionTwo.text}</div>
         <div>{question.optionTwo.votes.length}</div>
         <div>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(question.timestamp)}</div>
       </li>
    )
  }
}

export default connect()(PollResults)
