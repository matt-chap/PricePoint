import React from 'react'
import styles from './inventoryList.module.scss'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { TextField, Autocomplete } from '@mui/material'
import { Table, Row, Col } from 'react-bootstrap'
import { fakeInventory, fakeIngredients } from '../../data/fakeData'

let inventoryTransform = fakeInventory.map(x => {
    let ing = fakeIngredients.filter(z => z.IngredientId == x.IngredientId)[0]

    const currentStock = fakeInventory.filter(z => z.IngredientId == x.IngredientId).map(x => x.AmountBought).reduce((partial_sum, a) => partial_sum + a, 0);
    return ({
        IngredientId: x.IngredientId,
        InventoryName: ing?.Ingredient ?? "unknown",
        CurrentStock: currentStock,
        ClosestExperationDate: x.ClosestExperationDate
    })
})

export const InventoryList = () => {
    return (
        <Col sm={11} md={11} lg={11} className={styles.inventory_background}>
            <h1>Inventory List</h1>
            <Row className={styles.row_padding}>
                <Col sm={0} md={2} lg={2} className={styles.center_align_items}>Add</Col>
                <Col sm={12} md={8} lg={8} className={styles.center_align_items}><input type='text'></input></Col>
                <Col sm={0} md={2} lg={2} className={styles.center_align_items}></Col>
            </Row>
            <Row className={styles.row_padding}>
                    <Col xs sm lg className={styles.center_align_items}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className={styles.inventory_data}>CurrentStock</th>
                                    <th className={styles.inventory_data}>InventoryName</th>
                                    <th className={styles.inventory_data}>ClosestExperationDate</th>
                                </tr>
                                <tr>
                                    <th className={styles.inventory_data}>
                                    <AddCircleIcon />
                                    </th>
                                    <th className={styles.inventory_data}>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={fakeIngredients}
                                        sx={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="InventoryName" />}
                                        />
                                    </th>
                                    <th className={styles.inventory_data}>
                                    <TextField id="standard-basic" label="Standard" variant="standard" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventoryTransform && inventoryTransform.map((x) => {
                                    return (
                                        <tr key={x.InventoryId}>
                                            <td className={styles.inventory_data}>{x.CurrentStock}</td>
                                            <td className={styles.inventory_data}>{x.InventoryName}</td>
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