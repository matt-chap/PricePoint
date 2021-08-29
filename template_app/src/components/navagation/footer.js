import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './footer.module.scss'

export const Footer = () => {
    return (
        <div className={`${styles.footer_background} bg-dark`}>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </div>
    )
}