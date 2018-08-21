
import React, { Component } from 'react'
import { connect } from 'react-redux'


class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>Questions</h3>
        <ul className='dashboard-list'>

          {this.props.questionAuthors}
          {this.props.questionIds.map((id) => (
            <li key={id}>
              <div>QUESTION ID: {id}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
 function mapStateToProps ({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    questionAuthors: Object.keys(questions).map(question => question.author)
  }
}
export default connect(mapStateToProps)(Dashboard)
