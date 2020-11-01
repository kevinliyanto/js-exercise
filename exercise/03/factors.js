// Import from custom library
const { scanfString } = require("../../deps/scanf");

main();

// Do not change this function
function main() {
  process.stderr.write("Input number: ");

  const n = scanfString().replace("\n", "");
  const r = Number(n);

  printFactors(r);
}

/**
 * Modify the function below so that it prints all of val's factors
 * @param {number} val
 * @returns {void}
 */
function printFactors(val) {
  // Put your code here
}
