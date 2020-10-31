// Import from custom library
const { scanfString } = require("../../deps/scanf");

process.stderr.write("Price per cone: ");

const c = scanfString().replace("\n", "");
const conePrice = Number(c);

process.stderr.write("Money: ");

const m = scanfString().replace("\n", "");
const money = Number(m);

// Put your code here
// Variables: [conePrice, money]

// Exit the program:
process.exit(0);
