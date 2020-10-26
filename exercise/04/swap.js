main();

// Do not change this function
function main() {
  const e = [0.95, -2.2, 8, 1.3, -5.5, -14, 7.5, 6.8, 43, -2.35],
    f = [...e],
    v = swapFirstSecond;
  v(e);
  let [s, t] = [!0, !0];
  for (let o = 0; o < e.length; o += 2) e[o] > e[o + 1] && (s = !1);
  for (let o = 0; o < f.length; o++) -1 !== f.indexOf(e[o]) || (t = !1);
  console.log(`Your array is ${s ? "" : "not "}correct`),
    t || console.log("You have modified a value on your array");
}

// Modify the functions below
function swapFirstSecond(array) {
  // Put your code here
}
