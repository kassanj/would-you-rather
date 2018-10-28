import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionSwitch from './QuestionSwitch'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class Home extends Component {

  state = {
    value: 0,
  };

  handleChange = (e, value) => {
    this.setState({ value });
  };

  render() {

    const { notAnsweredQIds, answeredQIds } = this.props
    const { value } = this.state;

    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              scrollButtons="auto"
            >
              <Tab label="Unanswered" />
              <Tab label="Answered" />
            </Tabs>
          </AppBar>
          {value === 0 &&
          <TabContainer>
            {notAnsweredQIds.map((question) => (
              <QuestionSwitch key={question.id} status="TabView" type="unanswered" question={question} />
            ))}
          </TabContainer>}
          {value === 1 &&
            <TabContainer>
              {answeredQIds.map((question) => (
                <QuestionSwitch key={question.id} status="TabView" type="answered" question={question}/>
              ))}
            </TabContainer>}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }) {

      const notAnsweredQuestions = Object.values(questions).filter((question) =>
          !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser))

      const answeredQuestions = Object.values(questions).filter((question) =>
          question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
      )

      return {
          notAnsweredQIds: Object.values(notAnsweredQuestions)
              .sort((a, b) => b.timestamp - a.timestamp).map((q) => q),
          answeredQIds: Object.values(answeredQuestions)
              .sort((a, b) => b.timestamp - a.timestamp).map((q) => q)
      }
}

export default connect(mapStateToProps)(Home)
