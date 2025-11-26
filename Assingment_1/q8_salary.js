let currentSalary = 50000;
const incrementRate = 10;
const projection = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * (incrementRate / 100);
    projection.push({ Year: year, Salary: Math.round(currentSalary) });
}

console.table(projection);