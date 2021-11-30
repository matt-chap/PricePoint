import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

export const NavigationTop = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/" class="navbar-brand">OneTrip</Link>
        <Nav className="me-auto">

          <Link to="/plans" class="nav-link">
            Plans
          </Link>
          <Link to="/about" class="nav-link">
            About
          </Link>
          <Link to="/login" class="nav-link">
            Login
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}