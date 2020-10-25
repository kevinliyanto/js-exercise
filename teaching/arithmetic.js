// Addition
const d = 3 + 2.5;
console.log("Result: " + d.toString());

// Subtraction
const e = 3 - 1.7;
console.log(e.toString());

// Multiplication
const f = 5 * 4;
console.log(f.toString());

// Division
const g = 5 / (2 + 0.5);

// Floor
const g1 = Math.floor(5 / 2);
// g1 = 2

// Ceiling
const g2 = Math.floor(5 / 2);
// g2 = 3

// Modulus operator
const h1 = 7 % 3;
console.log(h1.toString());

const h2 = 8.2 % 5.1;
// Ideally, h would be 3.1
console.log(h2.toString());

// To parse properly:
console.log(h2.toFixed(1).toString());

// a = (Math.floor(a / b) * b) + (a % b)
