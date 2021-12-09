import React from 'react'
import styles from './employeeList.module.scss'
import { Table, Row, Col } from 'react-bootstrap'
import { fakeEmployees } from '../../data/fakeData'

export const EmployeeList = () => {
    return (
        <Col sm={11} md={11} lg={11} className={styles.employee_background}>
            <h1>Employee List</h1>
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
                                    <th className={styles.recipe_data}>Name</th>
                                    <th className={styles.recipe_data}>Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fakeEmployees && fakeEmployees.map((x) => {
                                    return (
                                        <tr key={x.RecipeId}>
                                            <td className={styles.recipe_data}>{x.Name}</td>
                                            <td className={styles.recipe_data}>{x.Salary}</td>
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