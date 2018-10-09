import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class FeedView extends Component {
  render() {

    const { question } = this.props

    return (
       <li key={question.id}>
         <b>Feed View</b>
         <Link to={`/question/${question.id}`} exact='true' activeclassname='active'>
           <div>{question.id}</div>
           <div>{question.author}</div>
           <div>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(question.timestamp)}</div>
         </Link>
      </li>
    )
  }
}

export default connect()(FeedView)
