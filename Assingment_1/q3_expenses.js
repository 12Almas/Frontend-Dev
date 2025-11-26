const expenses = [5000, 1500, 8000, 2000, 1000];

const total = expenses.reduce((acc, curr) => acc + curr, 0);
const average = total / expenses.length;
const totalWithTax = total + (total * 0.10);

console.log(`Total Expenses: ${total.toFixed(2)}`);
console.log(`Average Expense: ${average.toFixed(2)}`);
console.log(`Final Amount (with 10% Tax): ${totalWithTax.toFixed(2)}`);