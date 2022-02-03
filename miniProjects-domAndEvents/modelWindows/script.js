"use strict";

/*NOTE querySelector()
When we are selecting a single DOM element we can use querySelector()
*/
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

/*NOTE querySelectorAll()
When we need to select all DOM elements that matches our criteria (same class, id or element).
It returns a Node list over which we need to iterate to access the elements.
*/
const btnsOpenModal = document.querySelectorAll(".show-modal");

/*NOTE Event Handler Functions
A better practice in writing event handling code is grouping the instructions
into functions and then passing the function as an argument to the event listener
*/

const openModal = function () {
  /*NOTE ClassList
    Here we are selecting the list of classes associated with the object( here "DOM element")
    and then we are removing a particular class from the list of classes
  */
  //ANCHOR We don't need to use selector notations such as . or #
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

/*NOTE Keypress
Event listeners can also handle key presses similar to click events
*/
