/* NOTE Arrays
    > An array can be created using the let or the const keyword.
    > Irrespective of whether the array is created as a variable or constant, elements of an array may be modified.
    > Const only prevents the array itself from being reassigned
*/

let fruits = ["Apples", "Oranges", "Watermelon"];
console.log(fruits); // ["Apples", "Oranges", "Watermelon"]

fruits[0] = "Peaches";
console.log(fruits); //["Peaches", "Oranges", "Watermelon"]

const fastFood = ["Burgers", "Pizzas", "Hot Dogs"];
fastFood[1] = "Baguets";

fruits = ["Grapes"]; // arrays of variable types may be reassigned

// fastFood = ["Croissant"]; This throws an error

//Interesting Example

const birthYears = [1985, 1995, 2005];

function age(birthYear) {
  return 2022 - birthYear;
}

const ages = [age(birthYears[0]), age(birthYears[1]), age(birthYears[2])];
console.log(ages); //OUTPUT: [37, 27, 17]
