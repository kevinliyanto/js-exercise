main();

// Do not change this function
function main() {
  const k = [0.95, -2.2, 8, 1.3, -5.5, -14, 7.5, 6.8, 43, -2.35];
  const t = round;
  t(k);
  let s = true;
  for (let i = 0; i < k.length; i++) {
    k[i] % 1 !== 0 && (s = false);
  }
  console.log(`Elements in your array are ${s ? "" : "not "}rounded`);
}

// Modify the functions below
function round(array) {
  // Put your code here
}
