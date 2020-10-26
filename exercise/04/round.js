main();

// Do not change this function
function main() {
  const e = [0.95, -2.2, 8, 1.3, -5.5, -14, 7.5, 6.8, 43, -2.35];
  const f = [...e];
  const [g, h] = [round, Math.round];
  g(e);
  let [s, t] = [true, true];
  for (let i = 0; i < e.length; i++) {
    e[i] % 1 !== 0 && (s = false);
  }
  for (let i = 0; i < f.length; i++) {
    e.indexOf(h(f[i])) !== -1 || (t = false);
  }
  console.log(`Elements in your array are ${s ? "" : "not "}rounded`);
  if (!t) console.log(`You have modified a value on your array`);
}

// Modify the functions below
function round(array) {
  // Put your code here
}
