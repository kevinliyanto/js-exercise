// Import from custom library
const { scanfString } = require("../../deps/scanf");

process.stderr.write("First string: ");

const s1 = scanfString().replace("\n", "");

process.stderr.write("Second string: ");

const s2 = scanfString().replace("\n", "");

// Put your code here
// Variables: [s1, s2]
