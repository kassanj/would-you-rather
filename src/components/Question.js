import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component {

  render() {

    const question = this.props.question

    return (

      <div>
        <li key={question.id}>
          <Link to={`/question/${question.id}`} exact='true' activeclassname='active'>
          <div>QUESTION ID: {question.id}</div>
          <div>{question.author}</div>
          <div>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(question.timestamp)}</div>
          </Link>
        </li>
      </div>
    )
  }
}

export default connect()(Question)
