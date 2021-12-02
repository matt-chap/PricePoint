import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

export const NavigationLeft = () => {
  return (

        <Nav className="flex-column" style={{width:'200px'}}>

          <Link to="/plans" class="nav-link">
            Plans
          </Link>
          <Link to="/about" class="nav-link">
            About
          </Link>
          <Link to="/login" class="nav-link">
            Login
          </Link>
          <Link to="/login" class="nav-link">
            Login
          </Link>
        </Nav>
  )
}