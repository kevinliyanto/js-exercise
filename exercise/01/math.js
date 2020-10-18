// Import from node library (type definition: @types/node)
const fs = require("fs");

process.stdout.write("First number: ");

const n1 = fs.readFileSync(0).toString().replace("\n", "");
const number1 = Number(n1);

process.stdout.write("Second number: ");

const n2 = fs.readFileSync(0).toString().replace("\n", "");
const number2 = Number(n2);

// Put your code here
// Variables: [number1, number2]
