const strVal = "Hello";
const numVal = 42;
const boolVal = true;
const arrVal = [1, 2, 3];
const objVal = { id: 1 };
const nullVal = null;
const undefVal = undefined;

const report = [
    { Value: strVal, Type: typeof strVal },
    { Value: numVal, Type: typeof numVal },
    { Value: boolVal, Type: typeof boolVal },
    { Value: arrVal, Type: Array.isArray(arrVal) ? 'array' : typeof arrVal },
    { Value: objVal, Type: typeof objVal },
    { Value: nullVal, Type: typeof nullVal },
    { Value: undefVal, Type: typeof undefVal }
];

console.table(report);