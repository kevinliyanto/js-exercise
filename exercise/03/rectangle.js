// Import from custom library
const { scanfString } = require("../../deps/scanf");

main();

// Do not change this function
function main() {
  process.stdout.write("Width: ");

  const n1 = scanfString().replace("\n", "");
  const w = Number(n1);

  process.stdout.write("Height: ");

  const n2 = scanfString().replace("\n", "");
  const h = Number(n2);

  printRectangle(w, h);
}

// Modify the functions below
function printRectangle(width, height) {
  // Put your code here
}
