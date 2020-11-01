// Import from custom library
const { scanfString } = require("../../deps/scanf");

main();

// Do not change this function
function main() {
  process.stderr.write("Diamond count: ");

  const n = scanfString().replace("\n", "");
  const r = Number(n);

  printDiamond(r);
}

/**
 * Modify the function below so that it prints diamonds according to the
 * provided value
 * @param {number} val
 * @returns {void}
 */
function printDiamond(val) {
  // Put your code here
}
