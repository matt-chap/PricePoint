import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

export const NavigationTop = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">OneTrip</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#plans">Plans</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}