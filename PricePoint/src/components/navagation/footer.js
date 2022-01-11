import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Android, Apple } from '@mui/icons-material'
import styles from './footer.module.scss'

export const Footer = () => {
    return (
        <div className={`${styles.footer_background} bg-dark`}>
            <Container>
                <Row md={12}>
                    <Col md={8}>
                        <Row md={12} className={styles.bold_text}>
                            <Col md={4}>About</Col>
                            <Col md={4}>Help Center</Col>
                        </Row>
                        <Row md={12}>
                            <Col md={4}>Terms and Conditions</Col>
                            <Col md={4}>Contact Us</Col>
                        </Row>
                        <Row md={12}>
                            <Col md={4}>Privacy</Col>
                            <Col md={4}>FAQ</Col>
                        </Row>
                    </Col>
                    <Col md={4} style={{}} className={styles.center_items}>
                        <Row md={12} className={styles.bold_text}>
                            <Col md={12}>APPs</Col>
                        </Row>
                        <Row md={12}>
                            <Col md={6} style={{ textAlign: "center" }}>
                                <Row md={12}>
                                    <Col md={12} >
                                        <Apple style={{fontSize: "calc(30px + 2vmin)"}}  />
                                    </Col>
                                </Row>
                                <Row md={12} >
                                    <Col md={12} styles={{ justifyContent: "center" }}>
                                        iOS
                                    </Col>

                                </Row>
                            </Col>
                            <Col md={6}>
                                <Row md={12}>
                                    <Col md={12}>
                                        <Android style={{fontSize: "calc(30px + 2vmin)"}} />
                                    </Col>
                                </Row>
                                <Row md={12} >
                                    <Col md={12} styles={{ justifyContent: "center" }}>
                                        Android
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}