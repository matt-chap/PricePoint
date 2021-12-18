import React from 'react'
import styles from './pricePoint.module.scss'
import { Table, Row, Col } from 'react-bootstrap'
import { fakeEmployees, fakeRecipes, fakeIngredients, fakeInventory, AmountType, Conversion } from '../../data/fakeData'

var recipeTransformed = fakeRecipes.map(x => {
    let totalAmount = 0;
    return ({
        RecipeId: x.RecipeId,
        RecipeName: x.Recipe,
        Ingredients: x.Ingrdients.map(y => {
            let inv = fakeInventory.filter(z => z.IngredientId == y.IngredientId)[0]
            let ing = fakeIngredients.filter(z => z.IngredientId == y.IngredientId)[0]
            let invType = inv?.AmountType ?? AmountType.UNKOWN
            let totalPerIngredient = 0

            let conversionRate = Conversion.filter(z => (z.ConvertFrom == y.AmountType && z.ConvertTo == invType)
                || (z.ConvertFrom == invType && z.ConvertTo == y.AmountType))[0]

            if (invType != AmountType.UNKOWN && conversionRate) {
                let costOfInventoryItem = (inv.Cost / inv.AmountBought)
                
                if (conversionRate.ConvertFrom == x.AmountType) {
                    totalPerIngredient = (costOfInventoryItem * conversionRate.Rate) * y.Amount
                    totalAmount += totalPerIngredient
                }
                else {
                    totalPerIngredient = (costOfInventoryItem / conversionRate.Rate) * y.Amount
                    totalAmount += totalPerIngredient
                }
            }
            return ({
                IngredientName: ing.Ingredient,
                OldestExpireDate: inv?.ClosestExperationDate ?? "Never bought",
                AmountBought: inv?.AmountBought ?? "Never bought",
                AmountCost: inv?.Cost ?? "Never bought",
                AmountType: Object.keys(AmountType)[invType],
                RecipeAmount: y.Amount,
                RecipeAmountType: Object.keys(AmountType)[y.AmountType],
                RecipeTotal: totalPerIngredient
            })
        }),
        Total: totalAmount
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
                                <th className={styles.table_recipe_name}>Name</th>
                                <th className={styles.table_recipe_data}>IngrdientInfo</th>
                                <th className={styles.table_recipe_name}>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipeTransformed && recipeTransformed.map((x) => {
                                return (
                                    <tr key={x.RecipeId}>
                                        <td className={styles.table_recipe_name}>{x.RecipeName}</td>
                                        <td className={styles.table_recipe_data}>{x.Ingredients.map((y) => {
                                            return (
                                                <div className={styles.ingredient_container}>
                                                    <div className={styles.ingredient_name}>{y.IngredientName}</div>
                                                    <div className={styles.ingredient_columns}>
                                                        <div className={styles.ingredient_sub_header}>Inventory</div>
                                                        <div>Expire Date: {y.OldestExpireDate}</div>
                                                        <div>Amount Bought: {y.AmountBought}</div>
                                                        <div>Amount Cost: {y.AmountCost}</div>
                                                        <div>Amount Type: {y.AmountType}</div>
                                                    </div>
                                                    <div className={styles.ingredient_columns}>
                                                        <div className={styles.ingredient_sub_header}>Ingredient</div>
                                                        <div>Amount: {y.RecipeAmount}</div>
                                                        <div>Type: {y.RecipeAmountType}</div>
                                                        <div>Total: {y.RecipeTotal}</div>
                                                    </div>
                                                </div>
                                            )
                                        })}</td>
                                        <td className={styles.table_recipe_name}>{x.Total}</td>
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