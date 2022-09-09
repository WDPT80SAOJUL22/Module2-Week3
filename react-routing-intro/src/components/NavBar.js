import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className = 'navbar' >
        <ul>
            {/* <Link to='/'> Home </Link>
            <Link to='/about'> About </Link>
            <Link to='/projects'> Projects </Link> */}

            <NavLink 
                to='/'
                className={({ isActive }) => isActive ? 'selected' : ''}
            > Home </NavLink>
            <NavLink 
                to='/about'
                className={({ isActive }) => isActive ? 'selected' : ''}
            > About </NavLink>
            <NavLink 
                to='/projects'
                className={({ isActive }) => isActive ? 'selected' : ''}
            > Projects </NavLink>


        </ul>
    </nav>
  )
}
