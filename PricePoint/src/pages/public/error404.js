import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styles from './error404.module.scss'

export const Error404 = () => {
    return (
        <div className={styles.landing_background}>
            <Container fluid>
                <Row md={12} className={styles.image_container}>
                    <Col md={12}>
                        <Row>
                            <Col md={12}>
                                404
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}