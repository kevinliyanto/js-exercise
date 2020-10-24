// Import from custom library
const { scanfString } = require("../deps/scanf");

console.log("Type something:");

// This takes an input and ends the input on enter
const r = scanfString().replace("\n", "");

// string has the property length
console.log(r.length);

// you can also replace things on string
console.log(r.replace("java", "type"));
