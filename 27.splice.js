const values = [1, 2, 4, 5, 6];
//Splice lets you remove and add elements from/to an array
console.log(values); // [1, 2, 4, 5, 6];
values.splice(2, 0, 3);
console.log(values); //[1, 2, 3, 4, 5, 6];
values.splice(2, 1);
console.log(values); //[1, 2, 4, 5, 6];

const unchanging = [1, 2, 4, 5, 6];
const copy = [...unchanging];
copy.splice(2, 0, 3);
console.log(copy); //[1, 2, 3, 4, 5, 6];
console.log(unchanging); //[1, 2, 4, 5, 6];
