/* NOTE BMI Calculator
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

let markObj = {
  fullName: "Mark Miller",

  setMass: function (mass) {
    this.mass = mass;
  },

  setHeight: function (height) {
    this.height = height;
  },

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

let johnObj = {
  fullName: "John Smith",

  setMass: function (mass) {
    this.mass = mass;
  },

  setHeight: function (height) {
    this.height = height;
  },

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

markObj.setHeight(1.69);
markObj.setMass(78);

johnObj.setHeight(1.95);
johnObj.setMass(92);

//Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
markObj.calcBMI() > johnObj.calcBMI()
  ? console.log(
      `${markObj.fullName}'s BMI (${markObj.BMI}) is higher than ${johnObj.fullName}'s BMI (${johnObj.BMI})`
    )
  : console.log(
      `${johnObj.fullName}'s BMI (${johnObj.BMI}) is higher than ${markObj.fullName}'s BMI (${markObj.BMI})`
    );
