// JSDoc is a way to document your JavaScript function

/**
 * Perform an addition between a (number) and b (number), returning a number
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

// Even if this is not strict (you can still pass in string) like the example below
// It helps you to understand what a function does
// Using VSCode, hover to the add() function to see the documentation written above
const f = add("Hello ", "there");

// JavaScript doesn't have any type checking, unlike TypeScript
