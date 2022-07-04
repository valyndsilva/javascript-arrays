const numbers = [10, 20, 30, 40, 50];

numbers.forEach((value, index) => {
  console.log(value);
  console.log(index);
});

// Cannot use break or continue in forEach. It is also incompatible with async/await.
