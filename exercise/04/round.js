main();

// Do not change this function
function main() {
  const e = [0.95, -2.2, 8, 1.3, -5.5, -14, 7.5, 6.8, 43, -2.35],
    f = [...e],
    [g, h] = [round, Math.round];
  g(e);
  let [s, t] = [!0, !0];
  for (let o = 0; o < e.length; o++) e[o] % 1 != 0 && (s = !1);
  for (let o = 0; o < f.length; o++) -1 !== e.indexOf(h(f[o])) || (t = !1);
  console.log(`Elements in your array are ${s ? "" : "not "}rounded`),
    t || console.log("You have modified a value on your array");
}

/**
 * Modify the functions below so that it rounds every number in the array
 * You have to modify content of the array itself
 * @param {number[]} array
 * @returns {void}
 */
function round(array) {
  // Put your code here
}
