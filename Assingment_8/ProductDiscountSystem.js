function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
  const discountAmount = (this.price * percent) / 100;
  return this.price - discountAmount;
};

const product1 = new Product("Laptop", 50000);
const product2 = new Product("Headphones", 2000);
const product3 = new Product("Mouse", 500);

console.log(`${product1.name} discounted price: ${product1.applyDiscount(10)}`);
console.log(`${product2.name} discounted price: ${product2.applyDiscount(20)}`);
console.log(`${product3.name} discounted price: ${product3.applyDiscount(5)}`);