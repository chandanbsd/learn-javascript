"use strict";
/* NOTE console.log()
This is the most popular method to display messages from the javascript program to the js console
*/

for (let i = 1; i <= 5; i++) {
  console.log(`Loop Entered, i = ${i}`);
}

/* NOTE console.error()
This method is use to display error messages defined by the user
*/
let divisor = 0;
if (divisor === 0) {
  console.error("Cannot divide by zero");
}

/* NOTE console.warning()
This method is use to write user defined warning messages to the JS console
*/

let variable;

console.warn("variable not initialized");

/* NOTE console.table()
this method is generally used to display JS objects or arrays in a neat and tabular fashion
*/

const cookie = {
  name: "Oreo",
  price: 8.99,
  flavour: "Chocolate",
};

console.table(cookie);
