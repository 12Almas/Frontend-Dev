const menu = {
    "Burger": 150,
    "Pizza": 250,
    "Pasta": 200,
    "Salad": 100
};

function calculateBill(orderItems) {
    const prices = orderItems.map(item => {
        if (!menu[item]) {
            throw new Error(`Item '${item}' is not on the menu.`);
        }
        return menu[item];
    });

    const total = prices.reduce((sum, price) => sum + price, 0);
    return total;
}

try {
    const myOrder = ["Burger", "Pasta", "Salad"];
    console.log("Total Bill:", calculateBill(myOrder));

    const invalidOrder = ["Pizza", "Sushi"];
    console.log("Total Bill:", calculateBill(invalidOrder));
} catch (error) {
    console.log("Error:", error.message);
}