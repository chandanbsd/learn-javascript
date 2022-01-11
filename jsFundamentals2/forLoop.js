/* NOTE For Loop
A looping construct like the for loop is made to execute a set of statements a certain number of times
 */
for (let i = 1; i <= 10; i++) {
  console.log(`Current Value of i = ${i}`);
}

/* NOTE Looping over arrays
We can use the "length" property to determine the the total number of elements in the array
*/
let years = [1991, 1992, 1993, 1994];
let ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2022 - years[i];
}

console.log(ages);
