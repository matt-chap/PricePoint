import React from 'react'
import styles from './ingredientsList.module.scss'
import { fakeIngredients } from '../../data/fakeData'
import { Table, Row, Col } from 'react-bootstrap'

export const IngredientList = () => {
    return (
        <Col sm={11} md={11} lg={11} className={styles.ingredient_background}>
            <h1>Ingredient List</h1>
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
                                    <th className={styles.ingredient_data}>Ingrdient</th>
                                </tr>
                            </thead>
                            {/*TODO: Make list Editable*/}
                            <tbody>
                                {fakeIngredients && fakeIngredients.map((x) => {
                                    return (
                                        <tr key={x.IngredientId}>
                                            <td className={styles.ingredient_data}>{x.Ingredient}</td>
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