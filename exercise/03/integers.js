// Import from custom library
const { scanfString } = require("../../deps/scanf");

main();

// Do not change this function
function main() {
  process.stderr.write("First number: ");

  const n1 = scanfString().replace("\n", "");
  const number1 = Number(n1);

  process.stderr.write("Second number: ");

  const n2 = scanfString().replace("\n", "");
  const number2 = Number(n2);

  printAllIntegers(number1, number2);
}

/**
 * Modify the function below so that it prints every integers
 * between val1 and val2 inclusively. Integer closest to val2
 * must be the last printed number
 * @param {number} val1
 * @param {number} val2
 * @returns {void}
 */
function printAllIntegers(val1, val2) {
  // Put your code here
}
