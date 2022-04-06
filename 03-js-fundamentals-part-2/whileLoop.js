/* NOTE While Loop
While loop is best used when we know the terminating condition but we are not
completely sure of the number of iterations it may take to reach it
*/

//Example: Rolling the dice until we get 6
let dice = 0;
while (dice != 6) {
  console.log(`Dice Roll = ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}

console.log(`Yay! Dice Roll = $dice}`);
