import React from 'react'
import styles from './signupPage.module.scss'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export const SignupPage = () => {
    const handleSignUp = async (e) => {
        e.preventDefault()
    }

    return (
        <Container fluid className={styles.signup_background}>
            <Row >
                <Col xs={0} md={2} lg={3}></Col>
                <Col>
                    <div className={styles.fullHeight}>
                        <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
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
                            <div>
                                <Button variant="primary" type="submit">
                                    Sign Up
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col xs={0} md={2} lg={3}></Col>
            </Row>
        </Container>
    )
}