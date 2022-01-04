/* NOTE type conversion This is an explicit action by the user
Type Cohesion: Automated by the compiler
*/

year = "1999";
console.log(Number(year), year);

/* NOTE 
Whats happens when we try to convert something that is not a number to a number

NaN is a special item type that is housed inside the Number type. NaN stands for not a number
*/
console.log(Number("Chandan")); //Results in NaN

console.log(typeof NaN); /* Output: number */

console.log(Number("Chandan"));

//type cohersion
console.log("I'm " + 22 + "years old");

//type conversion
console.log("I'm " + String(22) + "years old");

//string concatenation
console.log("I'm " + "22" + "years old");

/* NOTE -, *, /
using - ‘minus’, * ‘multiply’, / ‘divide’ sign with strings and number causes type cohesion to number. (Opposite of + action)
*/

//string operator number -> number
console.log("10" - 2); //8
console.log("10" * 2); //20
console.log("10" / 2); //5

//example

n = 1 + "1"; // String concatenation (Type Cohesion from number to string): 1 + '1' = '11'
n = n - 1; //Type cohesion from string to number to soolve expression: '11' - 1 = 10
console.log(n); //Result: 10

console.log("10" - "4" - "3" - 2 + "5"); //Result = '15'
