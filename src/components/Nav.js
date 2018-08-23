import React, { Component } from 'react'
import { connect } from 'react-redux'

class Nav extends Component {

  render() {

    return (
      <div>
        <nav className='nav'>
          <ul className='navbar-left'>
            <li>
                Home
            </li>
            <li>
                New Question
            </li>
            <li>
                Leaderboard
            </li>
          </ul>

          { this.props.authedId === null
           ? null
           :
            <ul className='navbar-right'>
              <li>
                  Hello, {this.props.authedUser}!
              </li>
              <li>
                  Logout
              </li>
            </ul>
          }

        </nav>
      </div>
    )
  }
}
function mapStateToProps ({ users, authedUser }) {
  return {
    ...users,
    authedUser: Object.keys(users)
        .filter((a) => users[a].id == authedUser)
        .map((a) => users[a].name )
  }
}

export default connect(mapStateToProps)(Nav)
