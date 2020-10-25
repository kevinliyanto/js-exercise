// Import from custom library
const { scanfString } = require("../../deps/scanf");

main();

// Do not change this function
function main() {
  process.stdout.write("Input number: ");

  const n = scanfString().replace("\n", "");
  const r = Number(n);

  const lcm = divisible(r);
  console.log(`Greatest common multiple for input ${r}: ${lcm ? lcm : "none"}`);
}

// Modify the function below
// Print all positive integers less than or equal to `val` divisible by 3 and 5.
// Return 0 if there is no greatest common multiple for 3 and 5 below val
function divisible(val) {
  // Put your code here
  return 0;
}
