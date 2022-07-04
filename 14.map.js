const numbers = [10, 20, 30, 40, 50];

// Map of scalars
const numbersTimes10 = numbers.map((v) => v * 10);
console.log(numbersTimes10);

const numbersTimes10Obj = numbers.map((v) => ({ value: v * 10 }));
console.log(numbersTimes10Obj);

// Chaining Filter and Map
const numbersWithNegatives = [-10, 20, 30, -40, -50];
const positveBy10 = numbersWithNegatives
  .filter((v) => v > 0)
  .map((v) => v * 10);
console.log(positveBy10);

// Map over objects
const people = [
  { first: "Jane", last: "Smith", address: { city: "Oakland" } },
  { first: "Sally", last: "Joe", address: { city: "Foster City" } },
];

const cheapClone = (obj) => JSON.parse(JSON.stringify(obj)); // lodash method cloneDeep is better for creating deep copies

const fullNames = people.map((p) =>
  cheapClone({
    ...p,
    fullName: `${p.first} ${p.last}`,
  })
);
console.log(fullNames);
fullNames[0].first = "Penny";
fullNames[0].address.city = "San Jose";
console.log(fullNames);
console.log(people);
