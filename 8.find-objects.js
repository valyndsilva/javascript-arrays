const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

console.log(names.find((value) => value === "Alice"));

const people = [{ name: "John" }, { name: "Jane" }];
const person = people.find((p) => p.name === "Jane");
console.log(person);
person.name = "Sally";
console.log(person);
console.log(peple);
