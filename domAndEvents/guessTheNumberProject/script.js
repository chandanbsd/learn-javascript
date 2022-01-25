"use strict";

/* NOTE DOM
The DOM or the document object model can be thought of as a hierarchical tree that
accurately represents the parent child and sibling relationship of the html code.

This in turn allows us to use JavaScript in the browser to select any element and to
manipulate its rendering by the web browser.

Unlike JS "the programming language" which is defined by ECMA. DOM is not a part of JS.

DOM is actually part of Web API that all browsers implement among others such as Fetch API etc.

Therefore JS and DOM manipulation comes into play when a web page is executed in a browser environment
*/

// Here document is the parent element of the DOM and using that we select the paragraph
//tag on our web page
// console.log(document.querySelector("p"));

//Similarly lets select the  element with the className message
// console.log(document.querySelector(".message"));

//Furthermore we can select the content inside the element
// console.log(document.querySelector(".message").textContent);

// Using the assignment operator =, we can also change the content of the element
// document.querySelector(".message").textContent = "Correct Guess 🎉";

// document.querySelector(".guess").value = 35;
// console.logx(document.querySelector(".guess").value);

/* NOTE Event Listeners
These are special functions that are used to associate a user activity with a
sequence of instructions that are executed as a response

event listeners are added using the addEventListener method
*/

/* NOTE Coding Challenge

Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)

*/
let targetNumber = Math.trunc(Math.random() * 100 + 1);
console.log(targetNumber);
let highScore = 0;
let triesLeft = 0;
document.querySelector(".check").addEventListener("click", function () {
  // Any value/textContent we extract from DOM is always of type string, we need to
  // convert it into the format we desire
  let guess = Number(document.querySelector(".guess ").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number Entered 🚫";
  } else {
    let triesLeft = Number(document.querySelector(".score").textContent);

    let guessedNumber = Number(document.querySelector(".guess").value);

    if (targetNumber == guessedNumber) {
      document.querySelector(".message").textContent = "Game Won 🎊";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "15rem";
      document.querySelector(".number").textContent = targetNumber;

      // triesLeft = 5;
    } else if (targetNumber > guessedNumber) {
      document.querySelector(".message").textContent = "Guess Higher ⬆️";
      triesLeft -= 1;
    } else {
      document.querySelector(".message").textContent = "Guess smaller ⬇️";
      triesLeft -= 1;
    }
    document.querySelector(".score").textContent = triesLeft;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  targetNumber = Math.trunc(Math.random() * 100 + 1);
  console.log(targetNumber);
  triesLeft = 5;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = "5";
});
