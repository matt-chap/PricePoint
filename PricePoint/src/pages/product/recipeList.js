import React from 'react'
import styles from './recipeList.module.scss'
import { Table, Row, Col } from 'react-bootstrap'
import { fakeRecipes, AmountType } from '../../data/fakeData'

export const RecipeList = () => {
    return (
        <Col sm={11} md={11} lg={11} className={styles.recipe_background}>
            <h1>Recipe List</h1>
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
                                    <th className={styles.recipe_data}>Recipe</th>
                                    <th className={styles.recipe_data}>Ingrdients</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fakeRecipes && fakeRecipes.map((x) => {
                                    return (
                                        <tr key={x.RecipeId}>
                                            <td className={styles.recipe_data}>{x.Recipe}</td>
                                            <td className={styles.recipe_data}>{x.Ingrdients && x.Ingrdients.map((v) => { return (
                                                "IngredientId " + v.IngredientId + "\n" +
                                                "Amount Type " + Object.keys(AmountType)[v.AmountType ] + "\n" +
                                                "Amount " + v.Amount + "\n" 
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