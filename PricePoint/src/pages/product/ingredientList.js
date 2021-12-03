import React from 'react'
import styles from './ingredientsList.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

export const IngredientList = () => {
    return (
        <Container fluid className={styles.product_background}>
            <h1>Ingredient List</h1>
            <Row className={styles.row_padding}>
                <Col sm={0} md={2} lg={2} className={styles.center_align_items}></Col>
                <Col sm={12} md={8} lg={8} className={styles.center_align_items}></Col>
                <Col sm={0} md={2} lg={2} className={styles.center_align_items}></Col>
            </Row>
        </Container>
    )
}