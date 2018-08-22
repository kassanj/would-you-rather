import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Nav from './Nav'
// import LoadingBar from 'react-redux-loading'
// import logo from './logo.svg';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
        <div className="App">
          {this.props.loading === true
           ? null
           : <Nav /> }
          {this.props.loading === true
           ? 'Loading...'
           : <Dashboard /> }
        </div>
    );
  }
}


function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
