const numbers = [10, 20, 30, 40, 50];
// const first = numbers[0];
// const second = numbers[1];
const [first, second, third, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(third);
console.log(rest);
