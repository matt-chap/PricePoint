export const fakeIngredients = [
    {
        IngredientId: 0,
        Ingredient: "Buns"
    },
    {
        IngredientId: 1,
        Ingredient: "Brisket"
    },
    {
        IngredientId: 2,
        Ingredient: "Chicken"
    },
    {
        IngredientId: 3,
        Ingredient: "Potatoes"
    },
    {
        IngredientId: 4,
        Ingredient: "Tomato"
    },
    {
        IngredientId: 5,
        Ingredient: "Pork"
    }
]

export const fakeInventory = [
    {
        InventoryId: 0,
        IngredientId: 0,
        AmountBought: 10,
        Cost: 10,
        AmountType: 0,
        ClosestExperationDate: "08/01/2021"
    },
    {
        InventoryId: 1,
        IngredientId: 1,
        AmountBought: 15,
        Cost: 10,
        AmountType: 0,
        ClosestExperationDate: "09/01/2021"
    },
    {
        InventoryId: 2,
        IngredientId: 2,
        AmountBought: 20,
        Cost: 10,
        AmountType: 0,
        ClosestExperationDate: "10/01/2021"
    },
    {
        InventoryId: 3,
        IngredientId: 3,
        AmountBought: 25,
        Cost: 10,
        AmountType: 0,
        ClosestExperationDate: "11/01/2021"
    }
]

export const fakeRecipes = [
    {
        RecipeId: 0,
        Recipe: "Beef Brisket Burger",
        Ingrdients: [
            {
                IngredientId: 0,
                Amount: 1,
                AmountType: 0
            },
            {
                IngredientId: 1,
                Amount: 1,
                AmountType: 0
            },
            {
                IngredientId: 3,
                Amount: 1,
                AmountType: 0
            }]
    },
    {
        RecipeId: 1,
        Recipe: "Pulled Chicken Burger",
        Ingrdients: [
            {
                IngredientId: 0,
                Amount: 1,
                AmountType: 0
            },
            {
                IngredientId: 2,
                Amount: 1,
                AmountType: 0
            },
            {
                IngredientId: 3,
                Amount: 1,
                AmountType: 0
            }]
    },
    {
        RecipeId: 2,
        Recipe: "Pulled Pork Burger",
        Ingrdients: [
            {
                IngredientId: 0,
                Amount: 1,
                AmountType: 0
            },
            {
                IngredientId: 5,
                Amount: 1,
                AmountType: 0
            },
            {
                IngredientId: 3,
                Amount: 1,
                AmountType: 0
            }]
    }
]

export const fakeEmployees = [
    {
        EmployeeId: 0,
        Name: "Employee 1",
        Salary: 50000
    },
    {
        EmployeeId: 1,
        Name: "Employee 2",
        Salary: 50000
    },
    {
        EmployeeId: 2,
        Name: "Employee 3",
        Salary: 50000
    },
    {
        EmployeeId: 3,
        Name: "Employee 4",
        Salary: 50000
    }
]

export const AmountType = {
    POUNDS: 0,
    BAG: 1,
    SINGLE: 2,
    UNKOWN: 3
}