import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styles from './landingPage.module.scss'

export const LandingPage = () => {
    return (
        <div className={styles.landing_background}>
            <Container fluid>
            <Row md={12} className={styles.image_container}>
                <Col md={12}>
                </Col>
            </Row>
            <Row md={12} style={{backgroundColor:"red",height:"180px"}}>
                <Col md={4}>
                </Col>
                <Col md={4}>
                </Col>
                <Col md={4}>
                </Col>
            </Row>
            </Container>
        </div>
    )
}