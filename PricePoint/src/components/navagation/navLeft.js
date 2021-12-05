import React from 'react'
import styles from './navLeft.module.scss'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

export const NavigationLeft = () => {
  return (
    <Col sm={1} md={1} lg={1} className="g-0">
    <Nav className="flex-column" className={`${styles.nav_left_background}`}>
      <Link to="/internalLayout/ingredients" className={`${styles.nav_link}`}>
        Ingredients
      </Link>
      <Link to="/internalLayout/inventory" className={`${styles.nav_link}`}>
        Inventory
      </Link>
      <Link to="/internalLayout/recipe" className={`${styles.nav_link}`}>
        Recipe
      </Link>
      <Link to="/internalLayout/employee" className={`${styles.nav_link}`}>
        Employee
      </Link>
    </Nav>
    </Col>
  )
}