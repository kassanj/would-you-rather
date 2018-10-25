import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import Nav from './Nav'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Login from './Login'
import AddButton from './AddButton'
import ExclusiveRoute from './ExclusiveRoute'
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
                  <Link to="/add"><AddButton /></Link>
                  <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path="/login" exact component={Login} />
                    <ExclusiveRoute path='/question/:id' component={QuestionPage} />
                    <ExclusiveRoute path='/add' component={NewQuestion} />
                    <ExclusiveRoute path='/leaderboard' component={Leaderboard} />
                  </Switch>
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
