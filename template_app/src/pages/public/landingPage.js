import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styles from './landingPage.module.scss'
import { LocalGroceryStore, Storefront, Devices } from '@material-ui/icons'

export const LandingPage = () => {
    return (
        <div className={styles.landing_background}>
            <Container fluid>
            <Row md={12} className={styles.image_container}>
                <Col md={12}>
                </Col>
            </Row>
            <Row md={12} className={styles.landing_about}>
                <Col md={4}>
                    <LocalGroceryStore style={{fontSize: "10rem"}}/>
                </Col>
                <Col md={4}>
                    <Storefront style={{fontSize: "10rem"}}/>
                </Col>
                <Col md={4}>
                    <Devices style={{fontSize: "10rem"}}/>
                </Col>
            </Row>
            <Row md={12} className={styles.landing_about}>
                <Col md={6}>
                </Col>
                <Col md={6}>
                </Col>
            </Row>
            </Container>
        </div>
    )
}