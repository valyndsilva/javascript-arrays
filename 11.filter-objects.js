const people = [{ name: "John" }, { name: "Ann" }];

const jPeople = people.filter(({ name }) => name.startsWith("J"));
console.log(jPeople);
jPeople[0].name = "Jack";
console.log(jPeople);
console.log(people);
