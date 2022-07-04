const numbers = [10, 20, 30, 40, 50];

const middleThree = numbers.filter((_, i) => i > 0 && i < 4);
console.log(middleThree);

const easierMiddleThree = numbers.slice(1, 4);
console.log(easierMiddleThree);

numbers.slice(); // creates a shallow copy of the entire array
numbers.slice(1);
numbers.slice(-1);
numbers.slice(-2);
