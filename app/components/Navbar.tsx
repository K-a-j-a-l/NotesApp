import { NavLink } from '@remix-run/react'
import React from 'react'

export default function Navbar() {
  return (
    <nav id="main-navigation">
        <ul>
            <li className='nav-item'>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to="/notes">My Notes</NavLink>
            </li>
        </ul>
    </nav>
  )
}
