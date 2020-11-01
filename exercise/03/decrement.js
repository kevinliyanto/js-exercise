// Import from custom library
const { scanfString } = require("../../deps/scanf");

main();

// Do not change this function
function main() {
  process.stderr.write("Input number: ");

  const n = scanfString().replace("\n", "");
  const r = Number(n);

  decrement(r);
}

/**
 * Modify the function below so that it prints every integers
 * between val and 0 inclusively
 * @param {number} val
 * @returns {void}
 */
function decrement(val) {
  // Put your code here
}
