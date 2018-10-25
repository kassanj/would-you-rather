import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function ExclusiveRoute({ component: Component, ...rest }) {

  const { authedUser } = rest;

  return (

    <Route
      {...rest}
      render = {props => (
        authedUser !== null
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/',
            state: { from: props.location },
          }}
          />
      )}
    />

  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(ExclusiveRoute);
