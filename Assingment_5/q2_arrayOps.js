function applyOperation(numbers, operation) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }
    return result;
}

const nums = [1, 2, 3, 4];

const doubled = applyOperation(nums, num => num * 2);
console.log("Doubled:", doubled);

const squared = applyOperation(nums, num => num * num);
console.log("Squared:", squared);