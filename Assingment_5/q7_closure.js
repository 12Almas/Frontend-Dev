function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5));

console.log("Explanation: The inner function remembers the 'multiplier' variable from the outer function's scope even after the outer function has finished executing. This is a closure.");