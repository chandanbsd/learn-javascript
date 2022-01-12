/* NOTE Problem Solving
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

//Approach

// Let's look at the input: it is an array of numbers as follows
let maxTemps1 = [17, 21, 23];
let maxTemps2 = [12, 5, -5, 0, 4];

// Expected output is supposed to be a string that describes the index value + 1 as day
// and actual value of array as temperature
// lets code the function

const display = (temps) => {
  for (let i = 0; i < temps.length; i++) {
    console.log(`... ${temps[i]} in  ${i + 1} days ...`);
  }
};

display(maxTemps1);
display(maxTemps2);
