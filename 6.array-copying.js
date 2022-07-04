const numbers = [10, 20, 30, 40, 50];
console.log(numbers);
const copyOfNumbers = [...numbers];
console.log(copyOfNumbers);
copyOfNumbers[0] = 100;
console.log(copyOfNumbers);
console.log(numbers);

const people = [{ name: "John" }, { name: "Jane" }];
console.log(people);
const copyOfPeople = [...people];
console.log(copyOfPeople);
copyOfPeople[0].name = "Jack";
console.log(copyOfPeople);
console.log(people);
