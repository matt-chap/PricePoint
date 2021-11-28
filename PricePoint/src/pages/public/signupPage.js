import React from 'react'
import styles from './signupPage.module.scss'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export const SignupPage = () => {
    const handleSignUp = async (e) => {
        e.preventDefault()
    }

    return (
        <Container fluid className={styles.signup_background}>
            <Row className={styles.row_padding}>
                <Col xs={0} sm={0} md={1} lg={1}></Col>
                <Col sm={12} md={6} lg={3} className={styles.row_padding}>
                    <Form onSubmit={handleSignUp}>
                        <Form.Group controlid="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required type="text" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group controlid="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required type="text" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control required type="text" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" />
                        </Form.Group>
                        <div className={styles.flex_reverse}>
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col sm={12} md={5} lg={8} className={styles.center_align_items}>
                    <div>
                        Sign up today and be awesome.
                    </div>
                </Col>
            </Row>
        </Container>
    )
}