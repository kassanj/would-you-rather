import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import Nav from './Nav'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Login from './Login'
import Home from './Home'
import AddButton from './AddButton'
import PrivateRoute from './PrivateRoute'
import FourOFour from './FourOFour'
import LoadingBar from 'react-redux-loading'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
          <div className="App">
            <LoadingBar style={{ backgroundColor: 'blue', height: '2px' }} />
            <Nav />
            <Link to="/add"><AddButton /></Link>
            <Switch>
              <PrivateRoute path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <PrivateRoute path='/question/:id' exact component={QuestionPage} />
              <PrivateRoute path='/add' exact component={NewQuestion} />
              <PrivateRoute path='/leaderboard' exact component={Leaderboard} />
              <PrivateRoute component = { FourOFour }/>
            </Switch>
         </div>
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
