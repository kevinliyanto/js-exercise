// Import from node library (type definition: @types/node)
const fs = require("fs");

process.stdout.write("Insert a number: ");

// r: string
// Take from stdin until end of transmission
// End of transmission = Ctrl + D
// And replaces any newline
const r = fs.readFileSync(0).toString().replace("\n", "");

// Parse r into number
const yourNumber = Number(r);

// Put your code here
// Variables: [yourNumber]
