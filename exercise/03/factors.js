// Import from custom library
const { scanfString } = require("../../deps/scanf");

main();

// Do not change this function
function main() {
  process.stdout.write("Input number: ");

  const n = scanfString().replace("\n", "");
  const r = Number(n);

  printFactors(r);
}

// Modify the function below
function printFactors(val) {
  // Put your code here
}
