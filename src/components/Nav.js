import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component {

  render() {

    return (

      <div>
        { this.props.authedUser === null
         ? null
         :
          <nav className='nav'>
            <ul className='navbar-left'>
              <li>
                <NavLink to='/' exact activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/add' exact activeClassName='active'>
                  New Question
                </NavLink>
              </li>
              <li>
                <NavLink to='/leaderboard' exact activeClassName='active'>
                  Leaderboard
                </NavLink>
              </li>
            </ul>

            <ul className='navbar-right'>
              <li>
                  Hello, {this.props.authedUser}!
              </li>
              <li>
                  Logout
                  // onClick ---> trigger Logout action
              </li>
            </ul>
          </nav>
        }
      </div>
    )
  }
}



function mapStateToProps ({ users, authedUser }) {
  return {
    authedUser: authedUser == null ? authedUser : Object.keys(users)
        .filter((a) => a === authedUser)
        .map((a) => users[a].name )
  }
}

export default connect(mapStateToProps)(Nav)
