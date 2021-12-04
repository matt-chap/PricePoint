import React from 'react'
import { NavigationLeft } from '../navagation/navLeft'
import { Outlet } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

export const InternalLayout = () => {
    return (
        <Container fluid className="p-0">
            <Row className="m-0">
            <NavigationLeft />
            <Outlet />
            </Row>
        </Container>
    )
}