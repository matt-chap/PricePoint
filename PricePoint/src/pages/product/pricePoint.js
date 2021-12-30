import React from 'react'
import styles from './pricePoint.module.scss'
import { Table, Row, Col } from 'react-bootstrap'
import {roundtoThePlace} from '../../functions/formatNumbers'
import { fakeEmployees, fakeRecipes, fakeIngredients, fakeInventory, AmountType, Conversion, fakeFees } from '../../data/fakeData'

//TODO: make a rounding function

var recipeTransformed = fakeRecipes.map(x => {
    let totalEmployeeExpense = fakeEmployees.map(x => x.Salary).reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    }, 0);

    let totalFees = fakeFees.map(x => x.MonthlyFee).reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    }, 0);

    let totalAmount = (((totalEmployeeExpense / 12) / 900) + (totalFees / 900));
    let ingredientTotal = 0
    return ({
        RecipeId: x.RecipeId,
        RecipeName: x.Recipe,
        Ingredients: x.Ingrdients.map(y => {
            let inv = fakeInventory.filter(z => z.IngredientId == y.IngredientId)[0]
            let ing = fakeIngredients.filter(z => z.IngredientId == y.IngredientId)[0]
            let invType = inv?.AmountType ?? AmountType.UNKOWN
            let totalPerIngredient = 0

            let conversionRate = Conversion.filter(z => (z.ConvertFrom == y.Type && z.ConvertTo == invType)
                || (z.ConvertFrom == invType && z.ConvertTo == y.Type))[0]

            if (invType != AmountType.UNKOWN && conversionRate) {
                let costOfInventoryItem = (inv.Cost / inv.AmountBought)

                if (conversionRate.ConvertFrom == x.AmountType) {
                    totalPerIngredient = (costOfInventoryItem * conversionRate.Rate) * y.Amount
                    ingredientTotal += totalPerIngredient
                }
                else {
                    totalPerIngredient = (costOfInventoryItem / conversionRate.Rate) * y.Amount
                    ingredientTotal += totalPerIngredient
                }
            }
            return ({
                IngredientName: ing.Ingredient,
                OldestExpireDate: inv?.ClosestExperationDate ?? "Never bought",
                AmountBought: inv?.AmountBought ?? "Never bought",
                AmountCost: inv?.Cost ?? "Never bought",
                AmountType: Object.keys(AmountType)[invType],
                RecipeAmount: y.Amount,
                RecipeAmountType: Object.keys(AmountType)[y.Type],
                RecipeTotal: totalPerIngredient
            })
        }),
        IngredientTotal: ingredientTotal,
        EmployeeExpense: totalEmployeeExpense,
        FeeExpenses: totalFees,
        Total: totalAmount + ingredientTotal
    })
})


export const PricePoint = () => {
    return (
        <Col sm={11} md={11} lg={11} className={styles.recipe_background}>
            <h1>Price Point</h1>
            <Row className={styles.row_padding}>
                <Col xs sm lg className={styles.center_align_items}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th className={styles.table_recipe_name}>Name</th>
                                <th className={styles.table_recipe_data}>Ingrdient Info</th>
                                <th className={styles.table_recipe_data}>Extra Expenses</th>
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
                                        <td className={styles.table_recipe_name}>
                                            <div className={styles.ingredient_container}>
                                                <div className={styles.ingredient_columns}>
                                                    <div className={styles.ingredient_sub_header}>Employee Expense</div>
                                                    <div>
                                                        <div>Total: {x.EmployeeExpense} per year</div>
                                                        <div>{x.EmployeeExpense / 12} / 900 sold per month = {(x.EmployeeExpense / 12) / 900}</div>
                                                    </div>
                                                </div>
                                                <div className={styles.ingredient_columns}>
                                                    <div className={styles.ingredient_sub_header}>Fee Expense</div>
                                                    <div>
                                                        <div>Total: {x.FeeExpenses} per month</div>
                                                        <div>{x.FeeExpenses} / 900 sold per month = {x.FeeExpenses / 900}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={styles.table_recipe_name}>
                                            <div className={styles.ingredient_columns}>
                                                <div className={styles.ingredient_name}>Percentages</div>
                                                
                                                <div>
                                                <div className={styles.ingredient_sub_header}>{roundtoThePlace(x.Total, 1)}</div>
                                                    <div>Ingredients: {roundtoThePlace((x.IngredientTotal / x.Total), 1) * 100}%</div>
                                                    <div>Employee: {roundtoThePlace((((x.EmployeeExpense / 12) / 900)/ x.Total), 1) * 100}%</div>
                                                    <div>Fees: {roundtoThePlace(((x.FeeExpenses / 900 ) / x.Total), 1) * 100}%</div>
                                                    <div></div>
                                                </div>
                                            </div></td>
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