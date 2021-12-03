import React from 'react'
import styles from './navLeft.module.scss'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

export const NavigationLeft = () => {
  return (

        <Nav className="flex-column" style={{width:'200px'}} className={`${styles.nav_left_background}`}>

          <Link to="/internalLayout/ingredients" className={`${styles.nav_link}`}>
            Ingredients
          </Link>
          <Link to="/about" className={`${styles.nav_link}`}>
            About
          </Link>
          <Link to="/login" className={`${styles.nav_link}`}>
            Login
          </Link>
          <Link to="/login" className={`${styles.nav_link}`}>
            Login
          </Link>
        </Nav>
  )
}