import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollResults from './QuestionViews/PollResults'
import PollVoting from './QuestionViews/PollVoting'
import FeedView from './QuestionViews/FeedView'

class Question extends Component {

  render() {

    const { id, question, status } = this.props

    switch (status) {
       case 'PollResults':
         return (
           <PollResults
             id={id}
             question={question}
           />
         );
       case 'PollVoting':
         return (
           <PollVoting
             id={id}
             question={question}
           />
         );
       case 'GeneralView':
         return (
           <FeedView
             id={id}
             question={question}
             status={status}
           />
         );
       default:
         return (
           <FeedView
             id={id}
             question={question}
             status={status}
           />
         );
       }
  }
}

export default connect()(Question)
