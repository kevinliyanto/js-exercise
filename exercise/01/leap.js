// Import from node library (type definition: @types/node)
const fs = require("fs");

process.stdout.write("Type a year: ");

// r: string
// Take from stdin until end of transmission
// End of transmission = Ctrl + D
// And replaces any newline
const r = fs.readFileSync(0).toString().replace("\n", "");

// Parse r into number
const year = Number(r);

// Check if input is a leap year
// Algorithm is taken from Wikipedia:

// if (year is not divisible by 4) then (it is a common year)
// else if (year is not divisible by 25) then (it is a leap year)
// else if (year is not divisible by 16) then (it is a common year)
// else (it is a leap year)

// Put your code here
// Variables: [year]
