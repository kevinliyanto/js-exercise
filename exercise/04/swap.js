main();

// Do not change this function
function main() {
  const k = [0.95, -2.2, 8, 1.3, -5.5, -14, 7.5, 6.8, 43, -2.35];
  const t = swapFirstSecond;
  t(k);
  let s = true;
  for (let i = 0; i < k.length; i += 2) {
    k[i] > k[i + 1] && (s = false);
  }

  console.log(`Your array is ${s ? "" : "not "}correct`);
}

// Modify the functions below
function swapFirstSecond(array) {
  // Put your code here
}
