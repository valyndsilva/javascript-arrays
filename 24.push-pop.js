const original = [1, 2, 3, 4, 5];

const originalRef = original;
originalRef === original; //true

console.log(original); // [1,2,3,4,5]
original.pop();
console.log(original); // [1,2,3,4]
original.push(5);
console.log(original); // [1,2,3,4,5]

originalRef === original; //true

//push and pop are have reference issues
let aNumber = 5;
const stateManagerCopy = aNumber;
stateManagerCopy === aNumber; //true
aNumber = 6;
stateManagerCopy === aNumber; //false

const unchanging = [1, 2, 3, 4, 5];
// pop
const popped = unchanging.slice(-1)[0]; //5
const rest = unchanging.slice(0, -1); //[1,2,3,4,5]
// push
const aNewArray = [...unchanging, 6]; //[1,2,3,4,5,6]
