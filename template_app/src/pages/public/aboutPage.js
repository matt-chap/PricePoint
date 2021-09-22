import React from 'react'
import styles from './aboutPage.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

export const AboutPage = () => {
    return (
        <Container fluid className={styles.contactUs_background}>
            <Row className={styles.row_padding}>
                <Col sm={0} md={2} lg={2} className={styles.center_align_items}></Col>
                <Col sm={12} md={8} lg={8} className={styles.center_align_items}></Col>
                <Col sm={0} md={2} lg={2} className={styles.center_align_items}></Col>
            </Row>
        </Container>
    )
}