import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import Nav from './Nav'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Login from './Login'
import LoadingBar from 'react-redux-loading'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: 'blue', height: '2px' }} />
            <div className="App">
              {this.props.loading === true
               ? null
               : <div>
                  <Nav />
                  <Route path='/' exact component={Dashboard} />
                  <Route path="/login" exact component={Login} />
                  <Route path='/question/:id' component={QuestionPage} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                </div> }
            </div>
        </Fragment>
     </Router>
    );
  }
}


function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser
  }
}

export default connect(mapStateToProps)(App)
