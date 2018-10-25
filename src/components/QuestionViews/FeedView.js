import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class FeedView extends Component {
  render() {

    const { question } = this.props

    return (
       <li key={question.id}>
         <Link to={`/question/${question.id}`} exact='true' activeclassname='active'>
           <div>{question.optionOne.text}</div> or <div>{question.optionTwo.text}</div> 
        </Link>
      </li>
    )
  }
}

export default connect()(FeedView)
