import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollResults extends Component {
  render() {

    const { question } = this.props

    console.log(question)

    return (
       <li>
         <h2>Poll Results</h2>
         <div>{question.optionOne.text}</div>
         <div>{question.optionOne.votes.length}</div>
         <div>{question.optionTwo.text}</div>
         <div>{question.optionTwo.votes.length}</div>
       </li>
    )
  }
}

export default connect()(PollResults)
