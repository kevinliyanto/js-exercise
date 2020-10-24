// Import from custom library
const { scanfString } = require("../../deps/scanf");

process.stdout.write("Price per cone: ");

const c = scanfString().replace("\n", "");
const conePrice = Number(c);

process.stdout.write("Money: ");

const m = scanfString().replace("\n", "");
const money = Number(m);

// Put your code here
// Variables: [conePrice, money]

// Exit the program:
process.exit(0);
