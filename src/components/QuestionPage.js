import React, { Component } from 'react'
import { connect } from 'react-redux'
import Switch from './Switch'
import Author from './Author';
import FourOFour from './FourOFour';

class QuestionPage extends Component {

  render() {

    const { targetQuestion, errorPage, userAnswers, authorName, authorImageUrl} = this.props
    let answered = null

    if ( targetQuestion ) {
       answered = userAnswers.includes(targetQuestion.id)
    }

    if (errorPage) {
      return (
        <FourOFour />
      );
    }

    return (
      <div style={{paddingTop: 25}}>
        <Switch key={targetQuestion.id} status={ !answered ? "PollVoting" : "PollResults" } question={targetQuestion} />
        <Author authorName={authorName} authorImageUrl={authorImageUrl} />
      </div>
    )

  }
}

function mapStateToProps ({ authedUser, questions, users }, props) {

  if (questions[props.match.params.id] === undefined) {
    const errorPage = true
    return {
      errorPage,
    };
  }

  const userName = questions[props.match.params.id].author;
  const authorName = authedUser === userName ? 'you' : users[userName].name;
  const authorImageUrl = users[userName].avatarURL;
  const pageId = props.match.params.id
  const errorPage = false

  return {
    authorName,
    authorImageUrl,
    targetQuestion: questions[pageId],
    errorPage,
    userAnswers: Object.keys(users[authedUser].answers)
  }
}

export default connect(mapStateToProps)(QuestionPage)
