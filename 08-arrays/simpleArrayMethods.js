let arr = [1, 2, 3, 4, 5];

//NOTE Slice
//takes 2 arguments, start index and end index.
// The end index is not included in the slice
// the original array is not modified, instead a new array is created
console.log(arr.slice(0, 5));

console.log(arr.slice(1, 2));

//NOTE Here the start index is the ith element counted from the back
console.log(arr.slice(-2));

//NOTES splice
// same as slice but the original array is modified and returned
// the elements within the splice range is removed from the array
// there is a start index but there is no end index, instead there is a count of elements to be deleted from start index

console.log(arr.splice(0, 2));
console.log(arr);

//NOTE Reverse
// mutates the original array

arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());
console.log(arr);

//NOTE CONCAT

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

console.log(arr1.concat(arr2));
console.log([...arr1, ...arr2]);

//NOTE JOIN
// Take the array and make a string that is seperate by specified delimiter

console.log(arr1.join('****'));
