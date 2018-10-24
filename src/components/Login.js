import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSetAuthUser } from '../actions/shared';

class Login extends Component {

  login = (e, id) => {
    const { dispatch } = this.props;
    dispatch(handleSetAuthUser(id));
  }

  render() {

    const { userBank } = this.props

     return (
       <div>
         <ul className='dashboard-list'>
           { userBank.map(user => (
            <li key={user.id}
                onClick={ e => this.login(e, user.id)}>
               <img src={user.image} class="avatar-img" />
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
