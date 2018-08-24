import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollVoting extends Component {
  render() {

    const { question } = this.props

    return (
       <li>
         <b>PollVoting</b>
         <div>{question.id}</div>
         <div>{question.author}</div>
         <div>Created: {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(question.timestamp)}</div>
         <div onClick={(e) => console.log(e)}>{question.optionOne.text}</div>
         <div onClick={(e) => console.log(e)}>{question.optionTwo.text}</div>
   </li>
    )
  }
}

export default connect()(PollVoting)
