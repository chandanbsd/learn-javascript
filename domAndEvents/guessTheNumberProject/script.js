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

document.querySelector(".check").addEventListener("click", function () {
  // Any value/textContent we extract from DOM is always of type string, we need to
  // convert it into the format we desire
  let guess = Number(document.querySelector(".guess ").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number Entered 🚫";
  }
});
