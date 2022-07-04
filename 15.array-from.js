const numbers = [10, 20, 30, 40, 50];

Array.from(numbers); // shallow copy of the array numbers
Array.from(numbers, (v) => v * 10); // Array.from has a map function built into it.
