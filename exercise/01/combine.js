// Import from node library (type definition: @types/node)
const fs = require("fs");

process.stdout.write("First string: ");

const s1 = fs.readFileSync(0).toString().replace("\n", "");

process.stdout.write("Second string: ");

const s2 = fs.readFileSync(0).toString().replace("\n", "");

// Put your code here
// Variables: [s1, s2]
