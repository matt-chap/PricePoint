import React from 'react'
import styles from './pricePoint.module.scss'
import { Table, Row, Col } from 'react-bootstrap'
import { fakeEmployees, fakeRecipes, fakeIngredients, fakeInventory, AmountType } from '../../data/fakeData'

var test = fakeInventory.map(x => {
    let blah = fakeIngredients.filter(y => y.IngredientId == x.IngredientId)[0];
    return ({
        IngredientId: blah.IngredientId,
        Name: blah.Ingredient
    })
})


export const PricePoint = () => {
    return (
        <Col sm={11} md={11} lg={11} className={styles.recipe_background}>
            <h1>Price Point</h1>
            <Row className={styles.row_padding}>
                <Col sm={0} md={2} lg={2} className={styles.center_align_items}>test</Col>
                <Col sm={12} md={8} lg={8} className={styles.center_align_items}></Col>
                <Col sm={0} md={2} lg={2} className={styles.center_align_items}></Col>
            </Row>
            <Row className={styles.row_padding}>
                    <Col xs sm lg className={styles.center_align_items}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className={styles.recipe_data}>IngredientId</th>
                                    <th className={styles.recipe_data}>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {test && test.map((x) => {
                                    return (
                                        <tr key={x.IngredientId}>
                                            <td className={styles.recipe_data}>{x.IngredientId}</td>
                                            <td className={styles.recipe_data}>{x.Name}</td>
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