/* NOTE continue
The continue statement is used to force the next iteration of the loop.
*/

// display only even number upto 10
for (let i = 0; i < 10; i++) {
  if (i % 2 != 0) continue;
  console.log(i); //0, 2, 4, 6, 8
}

/*NOTE break
The break statement stop the looping and take the flow of execution to just outside the loop
 */

// Using break to stop when  10 is found in a list of number

let numbers = [9, 6, 5, 10, 5, 20];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == 10) {
    console.log(`10 found at location ${i + 1}`);
    break;
  }
}
