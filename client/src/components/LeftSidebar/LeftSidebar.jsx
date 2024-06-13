import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'

function leftSidebar() {
  return (
    <div className='left-sidebar'>
      <div className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeclassname='active'>
          <p style={{ paddingLeft: "10px" }}>Feed</p>
        </NavLink>
          <NavLink to='/Statuses' className='side-nav-links' activeclassname='active'>
            <p style={{ paddingLeft: "10px" }}>Blogs</p>
          </NavLink>
          <NavLink to='/Users' className='side-nav-links' style={{ paddingLeft: "20px" }}>
            <p>Users</p>
          </NavLink>
          <NavLink to='/Tags' className='side-nav-links' style={{ paddingLeft: "20px" }}>
            <p>Topics</p>
          </NavLink>
      </div>
    </div>
  )
}

export default leftSidebar