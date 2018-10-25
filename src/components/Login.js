import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSetAuthUser } from '../actions/shared';

class Login extends Component {

  handleLogin = (e, id) => {
    e.preventDefault()
    const { dispatch } = this.props;
    dispatch(handleSetAuthUser(id));
  }

  render() {

    const { userBank } = this.props

     return (
       <div>
         <h2>Login</h2>
         <p>Please select a user to login.</p>
         <p>Only logged users can submit a vote. Do not miss out on the fun!</p>
         <ul className='dashboard-list'>
           { userBank.map(user => (
            <li key={user.id}
                onClick={ e => this.handleLogin(e, user.id)}>
               <img src={user.image} className="avatar" alt={user.name} />
               <div>{user.name}</div>
            </li>
           )) }
         </ul>
       </div>
     )
  }
}

function mapStateToProps({ users }) {
  const userBank = Object.keys(users)
    .map((user) => {
      const userProperties = {
        id: users[user].id,
        image: users[user].avatarURL,
        name: users[user].name,
      };
      return userProperties;
    })
  return {
    userBank
  };
}

export default connect(mapStateToProps)(Login)
