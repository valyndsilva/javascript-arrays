const numbers = [12, 15, 12, 2, 6, 6, 2, 12];
//Reduce to an Object
const lookup = {};
for (const number of numbers) {
  lookup[number] = (lookup[number] ?? 0) + 1; // if lookup[number] is undefined then set it to 0
}
console.log(lookup);

numbers.reduce(
  (lookup, value) => ({
    ...lookup,
    [value]: (lookup[value] ?? 0) + 1,
  }),
  {}
);

numbers.reduce(
  ({ min, max }, value) => ({
    min: Math.min(min, value),
    max: Math.max(max, value),
  }),
  {
    min: Infinity,
    max: -Infinity,
  }
);
