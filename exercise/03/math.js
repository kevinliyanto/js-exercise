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

  const s = sum(number1, number2);
  const a = average(number1, number2);
  const m = multiply(number1, number2);

  console.log(`Sum: ${s}\nAverage: ${a}\nMultiply: ${m}`);
}

// Modify the functions below

/**
 * Calculate the sum between two number
 * @param {number} n1
 * @param {number} n2
 * @returns {number}
 */
function sum(n1, n2) {
  // Put your code here
  return 0;
}

/**
 * Calculate the average between two number
 * @param {number} n1
 * @param {number} n2
 * @returns {number}
 */
function average(n1, n2) {
  // Put your code here
  return 0;
}

/**
 * Calculate the multiplication result between two number
 * @param {number} n1
 * @param {number} n2
 * @returns {number}
 */
function multiply(n1, n2) {
  // Put your code here
  return 0;
}
