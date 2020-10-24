// Import from custom library
const { scanfString } = require("../deps/scanf");

process.stdout.write("Type a number: ");

// This takes an input and ends the input on enter
const r = scanfString().replace("\n", "");

// Parse r into number
const rNumber = Number(r);

// If - else if - else statement
if (rNumber === 2) {
  console.log("Input is equal to 2");
} else if (rNumber > 5) {
  console.log("Input is bigger than 5");
} else if (rNumber < 1) {
  console.log("Input is less than 1");
} else if (rNumber < 2) {
  console.log("Input is less than 2");
} else if (rNumber < 3) {
  console.log("Input is less than 3");
} else if (rNumber < 4) {
  console.log("Input is less than 4");
} else if (rNumber < 5) {
  console.log("Input is less than 5");
} else if (rNumber === 5) {
  console.log("Input is equal to 5");
} else {
  console.log("Input is bigger than 5");
}
