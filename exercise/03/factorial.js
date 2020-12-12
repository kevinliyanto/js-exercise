// Import from custom library
const { scanfString } = require("../../deps/scanf");

main();

// Do not change this function
function main() {
  process.stderr.write("Input number: ");

  const n = scanfString().replace("\n", "");
  const r = Number(n);

  const v = factorial(r);
  console.log(v);
}

/**
 * Modify the function below so that it returns the xth factorial number
 * @param {number} x
 * @returns {void}
 */
function factorial(x) {
  // Put your code here
  if (x == 1) return 1;
  return x * factorial(x - 1);
}
