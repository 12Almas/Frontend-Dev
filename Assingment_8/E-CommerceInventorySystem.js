const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Phone", category: "Electronics", price: 20000, stock: 2 },
    { id: 3, name: "Shirt", category: "Apparel", price: 1500, stock: 20 },
    { id: 4, name: "Jeans", category: "Apparel", price: 2500, stock: 3 }
];

function getLowStockProducts(items) {
    return items.filter(item => item.stock < 5);
}

function sortProductsByPrice(items) {
    return [...items].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(items) {
    return items.reduce((total, item) => total + (item.price * item.stock), 0);
}

function groupByCategory(items) {
    return items.reduce((acc, item) => {
        const key = item.category;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
}

console.log("Low Stock:", getLowStockProducts(products));
console.log("Sorted by Price:", sortProductsByPrice(products));
console.log("Total Value:", calculateTotalInventoryValue(products));
console.log("Grouped:", groupByCategory(products));