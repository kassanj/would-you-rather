import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollResults from './QuestionTemplates/PollResults'
import PollVoting from './QuestionTemplates/PollVoting'
import TabView from './QuestionTemplates/TabView'

class QuestionSwitch extends Component {

  render() {

    const { type, id, question, status } = this.props

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
       case 'TabView':
         return (
           <TabView
             id={id}
             question={question}
             status={status}
             type={type}
           />
         );
       default:
         return (
           <TabView
             id={id}
             question={question}
             status={status}
             type={type}
           />
         );
       }
  }
}

export default connect()(QuestionSwitch)
