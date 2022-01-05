/* NOTE Object Methods
In js we can write functions inside an object, this makes it a member of that object.
Unlike functions that may be declared either as a definition, anonymous function or arrow function.
Object Methods have to be declared only as anonymous function.

This is because function definitions cannot be syntactically stored as a name value pair
But anonymous function are perfect for this purpose.

However arrow functions may not be used since they do not have access to the this keyword.
The this keyword is a crucial part of objects
*/

const personalProfile = {
  firstName: "Chandan",
  lastName: "Bangalore Shankar Denanath",
  skills: ["Python"],

  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },

  addSkill: function (newSkill) {
    this.skills.push(newSkill);
  },
};

console.log(personalProfile.getFullName()); //Chandan Bangalore Shanakar Denanat
personalProfile.addSkill("JavaScript");
console.log(personalProfile.skills); //["Python", "JavaScript"]
