import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'

import Nav from './components//Nav'
import QuestionPage from './components/QuestionPage'
import NewQuestion from './components/NewQuestion'
import Leaderboard from './components/Leaderboard'
import Login from './components/Login'
import Home from './components/Home'
import AddButton from './components/AddButton'
import PrivateRoute from './components/PrivateRoute'
import FourOFour from './components/FourOFour'


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
