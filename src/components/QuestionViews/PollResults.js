import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollResults extends Component {
  render() {

    const { question } = this.props

    return (
       <li>
         <h2>Results 📊</h2>
         <div>{question.optionOne.text}</div>
         <div>{question.optionOne.votes.length}</div>
         <div>{question.optionTwo.text}</div>
         <div>{question.optionTwo.votes.length}</div>
       </li>
    )
  }
}

export default connect()(PollResults)
