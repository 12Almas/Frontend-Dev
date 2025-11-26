const totalAmount = 6500;
let discountPercent = 0;

if (totalAmount >= 10000) {
    discountPercent = 25;
} else if (totalAmount >= 5000) {
    discountPercent = 15;
} else if (totalAmount >= 2000) {
    discountPercent = 5;
}

const discountAmount = (totalAmount * discountPercent) / 100;
const finalPrice = totalAmount - discountAmount;

console.log(`Original Total: ${totalAmount}`);
console.log(`Discount Percentage: ${discountPercent}%`);
console.log(`Final Price: ${Math.round(finalPrice)}`);