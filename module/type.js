// Declare variable "j" with const j. You can't change j because it's using "const"
// At the same time, you're assigning j to the value 5
// number
const j = 5;

// Declare variable "l" with let l. You can change l because it's using "let"
// At the same time, you're assigning j to the value 5
// string
let l = "James";
console.log(l);

// Declare variable "z" with var z.
// var declares a variable globally. You can also redeclare var
// It is advised not to use var
var z = Math.floor(12.3);
console.log(z);

// boolean
const m = true;
console.log(m);

const r = "7355608";

// Number(string) -> number
const t = Number(r) + 5;
console.log(t);

// number.toString() -> string
const u = "test " + t.toString() + " sasdasd";
console.log(u);

// Reassigning a variable
l = "Debian";
console.log(l);

// Because of dynamic typing, you can reassign l even with different type
l = 5;
console.log(l);
