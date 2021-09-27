import React from 'react'
import styles from './privacyPage.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

export const PrivacyPage = () => {
    return (
        <Container fluid className={styles.privacy_background}>
            <Row className={styles.row_padding}>
                <Col xs={0} sm={0} md={1} lg={1}></Col>
                <Col sm={12} md={6} lg={3} className={styles.row_padding}></Col>
                <Col sm={12} md={5} lg={8} className={styles.center_align_items}></Col>
            </Row>
        </Container>
    )
}