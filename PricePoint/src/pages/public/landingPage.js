import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styles from './landingPage.module.scss'
import { LocalGroceryStore, Storefront, Devices } from '@mui/icons-material'
import Button from '@mui/material/Button';
import { style } from 'dom-helpers';

export const LandingPage = () => {
    return (
        <div className={styles.landing_background}>
            <Container fluid>
                <Row md={12} className={styles.image_container}>
                    <Col md={12}>
                        <Row>
                            <Col md={12}>
                                Get it all in OneTrip. Sign up today.
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Button variant="outlined" color="primary" className={styles.button_primary}>
                                Sign Up
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} className={styles.landing_about}>
                    <Col md={4}>
                        <Row>
                            <Col md={12}>
                                <LocalGroceryStore style={{ fontSize: "10rem" }} />
                            </Col>
                            <Col md={12} className={styles.summary_text}>
                            Quisque pharetra tortor sit amet euismod faucibus. 
                            Integer nibh neque, mattis vitae laoreet non, facilisis et nulla. 
                            Integer ut mi aliquet, vulputate eros placerat, venenatis urna. 
                            Vestibulum venenatis quis turpis quis tincidunt. 
                            Suspendisse placerat, augue ut laoreet iaculis, metus velit ultricies ipsum, nec egestas ex lacus eu dolor. 
                            Nunc faucibus ultrices dui, ut vehicula arcu euismod vitae. 
                            Vestibulum viverra massa nec justo eleifend, sit amet sollicitudin turpis finibus. Donec in suscipit odio. Integer consequat. 
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row>
                            <Col md={12}>
                                <Storefront style={{ fontSize: "10rem" }} />
                            </Col>
                            <Col md={12} className={styles.summary_text}>
                            Quisque pharetra tortor sit amet euismod faucibus. 
                            Integer nibh neque, mattis vitae laoreet non, facilisis et nulla. 
                            Integer ut mi aliquet, vulputate eros placerat, venenatis urna. 
                            Vestibulum venenatis quis turpis quis tincidunt. 
                            Suspendisse placerat, augue ut laoreet iaculis, metus velit ultricies ipsum, nec egestas ex lacus eu dolor. 
                            Nunc faucibus ultrices dui, ut vehicula arcu euismod vitae. 
                            Vestibulum viverra massa nec justo eleifend, sit amet sollicitudin turpis finibus. Donec in suscipit odio. Integer consequat. 
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row>
                            <Col md={12}>
                                <Devices style={{ fontSize: "10rem" }} />
                            </Col>
                            <Col md={12}  className={styles.summary_text} >
                            Quisque pharetra tortor sit amet euismod faucibus. 
                            Integer nibh neque, mattis vitae laoreet non, facilisis et nulla. 
                            Integer ut mi aliquet, vulputate eros placerat, venenatis urna. Vestibulum venenatis quis turpis quis tincidunt. Suspendisse placerat, augue ut laoreet iaculis, metus velit ultricies ipsum, nec egestas ex lacus eu dolor. Nunc faucibus ultrices dui, ut vehicula arcu euismod vitae. 
                            Vestibulum viverra massa nec justo eleifend, sit amet sollicitudin turpis finibus. Donec in suscipit odio. Integer consequat. 
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row md={12} className={styles.image_container}>
                    <Col md={12}>
                    </Col>
                </Row>
                <Row md={12} className={styles.landing_about}>
                    <Col md={4}>
                        <Row>
                            <Col md={12}>
                            </Col>
                            <Col md={12} className={styles.summary_text}>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row>
                            <Col md={12}>
                            </Col>
                            <Col md={12} className={styles.summary_text}>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row>
                            <Col md={12}>
                            </Col>
                            <Col md={12} className={styles.summary_text}>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}