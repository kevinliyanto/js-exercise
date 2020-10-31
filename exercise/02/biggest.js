// Import from custom library
const { scanfString } = require("../../deps/scanf");

process.stderr.write("First number: ");

const n1 = scanfString().replace("\n", "");
const number1 = Number(n1);

process.stderr.write("Second number: ");

const n2 = scanfString().replace("\n", "");
const number2 = Number(n2);

process.stderr.write("Third number: ");

const n3 = scanfString().replace("\n", "");
const number3 = Number(n3);

// Put your code here
// Variables: [number1, number2, number3]
