/* NOTE Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/

const describeCountry = (country, population, capitalCity) => {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
};

let country1 = describeCountry("USA", "340 million", "Washington, D.C.");
let country2 = describeCountry("India", "1.4 billion", "New Delhi");
let country3 = describeCountry("France", "38 million", "France");

console.log(country1, country2, country3);

/* NOTE Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/

function percentageOfWorld1(population) {
  return `${Math.floor((population / 7900) * 100)}%`;
}

let population1 = percentageOfWorld1(340);
let population2 = percentageOfWorld1(1800);
let population3 = percentageOfWorld1(38);

console.log(population1, population2, population3);

const percentageOfWorld2 = function (population) {
  return `${Math.floor((population / 7900) * 100)}%`;
};

console.log(
  percentageOfWorld2(340),
  percentageOfWorld2(1800),
  percentageOfWorld2(38)
);

/* NOTE Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

const percentageOfWorld3 = (population) => {
  return `${Math.floor((population / 7900) * 100)}%`;
};

console.log(percentageOfWorld3(1800));

/* NOTE Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/

const describePopulation = (country, population) => {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )} of the world`;
};

console.log(describePopulation("USA", "340"));
console.log(describePopulation("India", "1400"));
console.log(describePopulation("France", "38"));

/* NOTE Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/

let populations = [340, 1800, 38, 100];
populations.length > 4
  ? console.log("There are 4 elements")
  : console.log("Less than 4 elements");

let percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

/* NOTE Basic Array Operations (Methods)
1. Create an array containing all the frostings of donuts.
Store the array into a variable called 'donuts'
2. At some point, a new frosting called 'Blueberry'. So add it to the end of the 'donuts' array
3. Unfortunately, after some time, the new frosting is removed. So remove it from
the end of the array
4. If the 'frostings' array does not include ‘Chocolate’, log to the
console: 'Probably don't like chocolates'
5. Change the name of one of your frostings . To do that, find the
index of the frosting in the 'donuts' array, and then use that index to
change the array at that index position. 
*/

const donuts = ["Chocolate", "Glazed"];
console.log(donuts);

donuts.push("Raspberry Filling");
console.log(donuts);

donuts.pop();
console.log(donuts);

if (!donuts.includes("Chocolate")) {
  console.log("Probably don't like chocolates");
}
console.log(donuts);

donuts[donuts.indexOf("Glazed")] = "Original Glazed";
console.log(donuts);

/* NOTE Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
*/
const myCountry1 = {
  country: "USA",
  capital: "Washington, D.C.",
  language: "English",
  population: 340,
  neighbours: ["Canada", "Mexico"],
};
console.log(myCountry1);

/* NOTE Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.
*/
console.log(
  `${myCountry1.country} has ${myCountry1.population} million ${myCountry1.language}-speaking people, ${myCountry1.neighbours.length} neighboring countries and a capital called ${myCountry1.capital}`
);

myCountry1.population += 2;
console.log(myCountry1.population);

myCountry1["population"] -= 2;
console.log(myCountry1["population"]);

/* NOTE Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
*/
const myCountry = {
  country: "USA",
  capital: "Washington, D.C.",
  language: "English",
  population: 340,
  neighbours: ["Canada", "Mexico"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighboring countries and a capital called ${this.capital}`;
  },

  checkIsIsland: function () {
    this.neighbours.length > 0
      ? (this.isIsland = true)
      : (this.isIsland = false);
  },
};

console.log(myCountry.describe());
myCountry.checkIsIsland();
console.log(myCountry.isIsland);

/* NOTE Iteration: The for Loop
1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/

for (let i = 0; i < 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

/* NOTE Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is
*/

percentages2 = [];
for (let i = 0; i < populations.length; i += 1) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

percentages2.length == percentages.length
  ? console.log(true)
  : console.log(false);

let flag = 0;
for (let i = 0; i < percentages2.length; i++) {
  if (percentages[i] !== percentages2[i]) {
    flag = 1;
    console.log("Not equal");
    break;
  }
}
if (!flag) {
  console.log("Equal");
}

/* NOTE Looping Backwards and Loops in Loops
1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway 
*/
let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

/* NOTE The while Loop
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?
*/

let i = 0;
while (i < listOfNeighbours.length) {
  let j = 0;
  while (j < listOfNeighbours[i].length) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    j += 1;
  }
  i += 1;
}

//For the particular example above the for loop is more suitable since the number of iterations required is well defined
