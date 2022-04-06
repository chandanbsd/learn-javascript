/* NOTE push
This adds the element to the end of the array.
It returns the new length of the array after appending the element.
*/

let fruits = ["apples"];

let fruitsLength = fruits.push("peach");

console.log(fruits); //["apples", "peach"]
console.log(fruits.length, fruitsLength); //2 2

/* NOTE unshift
This method adds the element to the beginning of the array, i.e at index = 0.
It also returns the new length of the array after insertion
*/

fruitsLength = fruits.unshift("grapes");
console.log(fruits); //["grapes", "apples", "peach"]
console.log(fruitsLength); //3

/* NOTE pop
This method is used to remove the last element in the array
It returns the element that was removed
*/

let delEle = fruits.pop();
console.log(fruits); //["grapes", "apples"]
console.log(delEle); //peach

/* NOTE shift
This method is used to remove the first element from the array.
It also returns the element that was deleted
*/

delEle = fruits.shift();
console.log(fruits); //["apples"]
console.log(delEle); //grapes
