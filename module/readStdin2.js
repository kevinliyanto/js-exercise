// Import from node library (type definition: @types/node)
const fs = require("fs");

console.log("Type a number:");

// r: string
// Take from stdin until end of transmission
// End of transmission = Ctrl + D
// And replaces any newline
const r = fs.readFileSync(0).toString().replace("\n", "");

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
} else {
  console.log("Input is equal to 5");
}
