// Import from custom library
const { scanfString } = require("../../deps/scanf");

// Put code here (before main function call) if you are doing the challenge

main();

// Do not change this function
function main() {
  process.stderr.write("Input number: ");

  const n = scanfString().replace("\n", "");
  const r = Number(n);

  const v = fibonacci(r);
  console.log(v);
}

/**
 * Modify the function below so that it returns the xth fibonacci number
 * @param {number} x
 * @returns {void}
 */
function fibonacci(x) {
  // Put your code here
}
