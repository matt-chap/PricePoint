import React from 'react'
import styles from './inventoryList.module.scss'
import { Table, Row, Col } from 'react-bootstrap'
import { fakeInventory } from '../../data/fakeData'

export const InventoryList = () => {
    return (
        <Col sm={11} md={11} lg={11} className={styles.inventory_background}>
            <h1>Inventory List</h1>
            <Row className={styles.row_padding}>
                <Col sm={0} md={2} lg={2} className={styles.center_align_items}></Col>
                <Col sm={12} md={8} lg={8} className={styles.center_align_items}></Col>
                <Col sm={0} md={2} lg={2} className={styles.center_align_items}></Col>
            </Row>
            <Row className={styles.row_padding}>
                    <Col xs sm lg className={styles.center_align_items}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className={styles.inventory_data}>IngredientId</th>
                                    <th className={styles.inventory_data}>CurrentStock</th>
                                    <th className={styles.inventory_data}>ClosestExperationDate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fakeInventory && fakeInventory.map((x) => {
                                    return (
                                        <tr key={x.InventoryId}>
                                            <td className={styles.inventory_data}>{x.IngredientId}</td>
                                            <td className={styles.inventory_data}>{x.CurrentStock}</td>
                                            <td className={styles.inventory_data}>{x.ClosestExperationDate}</td>
                                        </tr>
                                    )
                                }
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
        </Col>
    )
}