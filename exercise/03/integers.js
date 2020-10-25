// Import from custom library
const { scanfString } = require("../../deps/scanf");

main();

// Do not change this function
function main() {
  process.stdout.write("First number: ");

  const n1 = scanfString().replace("\n", "");
  const number1 = Number(n1);

  process.stdout.write("Second number: ");

  const n2 = scanfString().replace("\n", "");
  const number2 = Number(n2);

  printAllIntegers(number1, number2);
}

// Modify the functions below
function printAllIntegers(val1, val2) {
  // Put your code here
}
