import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styles from './landingPage.module.scss'

export const LandingPage = () => {
    return (
        <div className={styles.landing_background} style={{height:"100vh"}}>
            <Container>
            <Row md={12} className={styles.image_container}>
                <Col md={12}>
                </Col>
            </Row>
            </Container>
        </div>
    )
}