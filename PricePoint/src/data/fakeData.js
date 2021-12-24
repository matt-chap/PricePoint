export const AmountType = {
    UNKOWN: 0,
    POUNDS: 1,
    SINGLE: 2,
    OUNCES: 3,
    PACK_16: 4,
    PACK_12: 5,
    PACK_8: 6,
    PACK_4: 7
}

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
        AmountType: AmountType.PACK_8,
        ClosestExperationDate: "08/01/2021"
    },
    {
        InventoryId: 1,
        IngredientId: 1,
        AmountBought: 15,
        Cost: 10,
        AmountType: AmountType.POUNDS,
        ClosestExperationDate: "09/01/2021"
    },
    {
        InventoryId: 2,
        IngredientId: 2,
        AmountBought: 20,
        Cost: 10,
        AmountType: AmountType.POUNDS,
        ClosestExperationDate: "10/01/2021"
    },
    {
        InventoryId: 3,
        IngredientId: 3,
        AmountBought: 25,
        Cost: 10,
        AmountType: AmountType.POUNDS,
        ClosestExperationDate: "11/01/2021"
    },
    {
        InventoryId: 4,
        IngredientId: 5,
        AmountBought: 1,
        Cost: 12,
        AmountType: AmountType.POUNDS,
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
                Type: AmountType.SINGLE
            },
            {
                IngredientId: 1,
                Amount: 1,
                Type: AmountType.OUNCES
            },
            {
                IngredientId: 3,
                Amount: 1,
                Type: AmountType.OUNCES
            }]
    },
    {
        RecipeId: 1,
        Recipe: "Pulled Chicken Burger",
        Ingrdients: [
            {
                IngredientId: 0,
                Amount: 1,
                Type: AmountType.SINGLE
            },
            {
                IngredientId: 2,
                Amount: 1,
                Type: AmountType.OUNCES
            },
            {
                IngredientId: 3,
                Amount: 1,
                Type: AmountType.OUNCES
            }]
    },
    {
        RecipeId: 2,
        Recipe: "Pulled Pork Burger",
        Ingrdients: [
            {
                IngredientId: 0,
                Amount: 1,
                Type: AmountType.SINGLE
            },
            {
                IngredientId: 5,
                Amount: 1,
                Type: AmountType.OUNCES
            },
            {
                IngredientId: 3,
                Amount: 1,
                Type: AmountType.OUNCES
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
        Salary: 25000
    },
    {
        EmployeeId: 3,
        Name: "Employee 4",
        Salary: 5000
    }
]

export const fakeFees = [
    {
        FeeID: 0,
        FeeName: "Fee",
        MonthlyFee: 200
    },
    {
        FeeID: 1,
        FeeName: "Land",
        MonthlyFee: 1000
    }
]

export const Conversion = [
    {
        ConvertFrom: AmountType.POUNDS,
        ConvertTo: AmountType.OUNCES,
        Rate: 16
    },
    {
        ConvertFrom: AmountType.POUNDS,
        ConvertTo: AmountType.POUNDS,
        Rate: 1
    },
    {
        ConvertFrom: AmountType.PACK_4,
        ConvertTo: AmountType.SINGLE,
        Rate: 4
    },
    {
        ConvertFrom: AmountType.PACK_8,
        ConvertTo: AmountType.SINGLE,
        Rate: 8
    },
    {
        ConvertFrom: AmountType.PACK_12,
        ConvertTo: AmountType.SINGLE,
        Rate: 12
    },
    {
        ConvertFrom: AmountType.PACK_16,
        ConvertTo: AmountType.SINGLE,
        Rate: 16
    }
]