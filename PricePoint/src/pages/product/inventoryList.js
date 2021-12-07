import React from 'react'
import styles from './inventoryList.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

const inventory = [
    {InventoryId: 0, IngredientId: 0, CurrentStock: 10, ClosestExperationDate:"12/12/2021"},
    {InventoryId: 1, IngredientId: 1, CurrentStock: 10, ClosestExperationDate:"12/12/2021"},
    {InventoryId: 2, IngredientId: 2, CurrentStock: 10, ClosestExperationDate:"12/12/2021"},
    {InventoryId: 3, IngredientId: 3, CurrentStock: 10, ClosestExperationDate:"12/12/2021"}
]


export const InventoryPage = () => {
    return (
        <Col sm={11} md={11} lg={11} className={styles.recipe_background}>
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
                                {inventory && inventory.map((x) => {
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