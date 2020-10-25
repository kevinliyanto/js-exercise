// Normal function has 'arguments' property (an object type)
function testArguments() {
  console.log(arguments);
  console.log(arguments[2]);
}

testArguments(123, 4, "testString", 5);

// More arrows
const moreArrows = (p1) => (p2) => {
  console.log(p1);
  console.log(p2);
};

moreArrows("first")("second");

// Equivalent to
function moreFunctions(p1) {
  return function f(p2) {
    console.log(p1);
    console.log(p2);
  };
}

moreFunctions("first")("second");
