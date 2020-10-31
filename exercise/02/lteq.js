// Import from custom library
const { scanfString } = require("../../deps/scanf");

process.stderr.write("Insert a number: ");

const r = scanfString().replace("\n", "");

// Parse r into number
const yourNumber = Number(r);

// Put your code here
// Variables: [yourNumber]
