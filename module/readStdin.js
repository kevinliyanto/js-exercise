// Import from node library (type definition: @types/node)
const fs = require("fs");

console.log("Type something:");

// r: string
// Take from stdin until end of transmission
// End of transmission = Ctrl + D
const r = fs.readFileSync(0).toString();

// string has the property length
console.log(r.length);

// you can also replace things on string
console.log(r.replace("java", "type"));
