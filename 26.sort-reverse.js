const numbers = [2, 6, 3, 4, 1, 5];
//Sort
numbers.sort();

const names = ["Jack", "Jill", "Jane", "John", "Jim"];
names.sort();

const people = [
  { id: 6, name: "Jack" },
  { id: 1, name: "Sam" },
  { id: 3, name: "Sally" },
];
people.sort((a, b) => a.id - b.id);
console.log(people); //[{ id: 6, name: "Jack" },{ id: 1, name: "Sam" },{ id: 3, name: "Sally" }]

const unchanging = [2, 6, 3, 4, 1, 5];
const newNumbers = [...unchanging].sort();
console.log(unchanging);
[2, 6, 3, 4, 1, 5];

//Reverse
console.log(numbers); //[1, 2, 3, 4, 5, 6]
numbers.reverse();
console.log(numbers); //[6, 5, 4, 3, 2, 1]

console.log(unchanging); //[2, 6, 3, 4, 1, 5]
[...unchanging].sort().reverse(); //[6, 5, 4, 3, 2, 1]
console.log(unchanging); //[2, 6, 3, 4, 1, 5]
