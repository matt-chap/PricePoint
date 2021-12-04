import React from 'react'
import styles from './inventoryPage.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

export const InventoryPage = () => {
    return (
        <Col sm={11} md={11} lg={11} className={styles.inventory_background}>
            <h1>Inventory List</h1>
            <Row className={styles.row_padding}>
                <Col sm={0} md={2} lg={2} className={styles.center_align_items}></Col>
                <Col sm={12} md={8} lg={8} className={styles.center_align_items}></Col>
                <Col sm={0} md={2} lg={2} className={styles.center_align_items}></Col>
            </Row>
        </Col>
    )
}