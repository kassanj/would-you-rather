import React, { Component } from 'react'

 export default function Nav () {

  return (
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

      {/* Hide section below when app is logged-out  */}

      <ul className='navbar-right'>
        <li>
            Hello!
            {/* Add Logged-in user's name */}
        </li>
        <li>
            Logout
        </li>
      </ul>


    </nav>
  )
}
