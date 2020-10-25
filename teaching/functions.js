function exit() {
  process.exit(0);
}

// try {
//   arrowFunction(2, 3);
// } catch (e) {
//   // If there is an error on the statement inside try, this will be printed
//   console.log("Error on calling arrow function before declaration");
// }

test(2, 3);

// Normal function
// Works globally (in the file)
function test(param1, param2) {
  console.log(param1);
  console.log(param2);
}

// Arrow function
// Callable after declaration
const arrowFunction = (param1, param2) => {
  console.log(param1);
  console.log(param2);
};

test(2, 3);

// Function can also return a value
const add = (x1, x2) => {
  return x1 + x2;
};

console.log(add(1, 3));
