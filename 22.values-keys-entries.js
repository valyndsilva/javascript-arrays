const values = [10, 20, 30, 40, 50];

values.entries();
for (const value of values.entries()) {
  console.log(value); //[0,10],[1,20],[2,30],[3,40],[4,50]
}
for (const value of values.keys()) {
  console.log(value); // 0,1,2,3,4
}
for (const value of values.values()) {
  console.log(value); // 10,20,30,40,50
}

const customers = {
  Jack: 12,
  Jim: 15,
  Sally: 18,
};

function sum(objOrArray) {
  return Object.values(objOrArray).reduce((sum, value) => sum + value, 0);
}

sum(values); //150
sum(customers); //45
