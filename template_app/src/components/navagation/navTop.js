import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

export const NavigationTop = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}