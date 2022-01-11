/* NOTE Lopping Backwards
 */

let years = [1991, 1992, 1993, 1994];
for (let i = years.length - 1; i >= 0; i--) {
  // i = length - 1 due to zero based indexing
  console.log(years[i]);
}

/* NOTE Nested Loops
 */

for (let i = 0; i < 5; i++) {
  console.log(`Lifting Weight = ${i}`);
  for (let j = 0; j <= 3; j++) {
    console.log(`Lifting Weight = ${j}`);
  }
  console.log("**********************");
}
