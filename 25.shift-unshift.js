const original = [1, 2, 3, 4, 5];
//shift and unshift are have reference issues
console.log(original); // [1,2,3,4,5]
original.shift();
console.log(original); // [2,3,4,5]
original.unshift(1);
console.log(original); // [1,2,3,4,5]

const unchanging = [1, 2, 3, 4, 5];
// shift
const [value, ...rest] = unchanging;
console.log(value); // 1
console.log(rest); // [2,3,4,5]
// unshift
const newArray = [0, ...unchanging];
console.log(newArray); // [0,1,2,3,4,5]
console.log(unchanging); // [1,2,3,4,5]
