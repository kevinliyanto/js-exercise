// Import from node library (type definition: @types/node)
const fs = require("fs");

process.stdout.write("Price per cone: ");

const c = fs.readFileSync(0).toString().replace("\n", "");
const conePrice = Number(c);

process.stdout.write("Money: ");

const m = fs.readFileSync(0).toString().replace("\n", "");
const money = Number(m);

// Put your code here
// Variables: [conePrice, money]

// Exit the program:
process.exit(0);
