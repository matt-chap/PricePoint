import React from 'react'
import styles from './inventoryList.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

const inventory = [
    {RecipeId: 0, Recipe:"Burger", Ingrdients: ["Ingredient1","Ingredient2","Ingredient3"], CostBreakdown:[{Inventory: 3, Employee: 4, Land: 0.25, Total: 10}]},
    {RecipeId: 1, Recipe:"Burger", Ingrdients: ["Ingredient1","Ingredient2","Ingredient3"], CostBreakdown:[{Inventory: 3, Employee: 4, Land: 0.25, Total: 10}]},
    {RecipeId: 2, Recipe:"Burger", Ingrdients: ["Ingredient1","Ingredient2","Ingredient3"], CostBreakdown:[{Inventory: 3, Employee: 4, Land: 0.25, Total: 10}]},
    {RecipeId: 3, Recipe:"Burger", Ingrdients: ["Ingredient1","Ingredient2","Ingredient3"], CostBreakdown:[{Inventory: 3, Employee: 4, Land: 0.25, Total: 10}]}
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
                                    <th className={styles.inventory_data}>Recipe</th>
                                    <th className={styles.inventory_data}>Ingrdients</th>
                                    <th className={styles.inventory_data}>Cost Breakdown</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventory && inventory.map((x) => {
                                    return (
                                        <tr key={x.RecipeId}>
                                            <td className={styles.inventory_data}>{x.Recipe}</td>
                                            <td className={styles.inventory_data}>{x.Ingrdients && x.Ingrdients.join("\n")}</td>
                                            <td className={styles.inventory_data}>{x.CostBreakdown && x.CostBreakdown.map((v) => { return (
                                                "Inventory " + v.Inventory + "\n" +
                                                "Employee " + v.Employee + "\n" +
                                                "Land " + v.Land + "\n" +
                                                "Total " + v.Total + "\n"
                                            )})}</td>
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