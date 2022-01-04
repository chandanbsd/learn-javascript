// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀
*/

//Input Set 1
/*
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.96;
true
*/

//Input set 2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
//false

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log("Does Mark has higher BMI than John ? " + markHigherBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is greater than John's (${johnBMI})`);
} else {
  console.log(`Mark's BMI (${markBMI}) is smaller than John's (${johnBMI})`);
}
