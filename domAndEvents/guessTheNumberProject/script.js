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
console.log(document.querySelector("p"));

//Similarly lets select the  element with the className message
console.log(document.querySelector(".message"));

//Furthermore we can select the content inside the element
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Guess 🎉";

document.querySelector(".guess").value = 35;
console.log(document.querySelector(".guess").value);
