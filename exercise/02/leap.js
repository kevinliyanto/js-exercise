// Import from custom library
const { scanfString } = require("../../deps/scanf");

process.stdout.write("Type a year: ");

const r = scanfString().replace("\n", "");

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
