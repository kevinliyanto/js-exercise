main();

// Do not change this function
function main() {
  const e = [0.95, -2.2, 8, 1.3, -5.5, -14, 7.5, 6.8, 43, -2.35];
  const f = [...e];
  const v = swapFirstSecond;
  v(e);
  let [s, t] = [true, true];
  for (let i = 0; i < e.length; i += 2) {
    e[i] > e[i + 1] && (s = false);
  }
  for (let i = 0; i < f.length; i++) {
    f.indexOf(e[i]) !== -1 || (t = false);
  }
  console.log(`Your array is ${s ? "" : "not "}correct`);
  if (!t) console.log(`You have modified a value on your array`);
}

// Modify the functions below
function swapFirstSecond(k) {
  // Put your code here
  for (let i = 0; i < k.length; i += 2) {
    if (k[i] > k[i + 1]) {
      const f = k[i];
      k[i] = k[i + 1];
      k[i + 1] = f;
    }
  }
}
