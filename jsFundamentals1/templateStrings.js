let firstName = "Chandan";
let lastName = "B S D";

let statementWithConcat = "Hi, I'm " + firstName + " " + lastName;
console.log(statementWithConcat);

let statementWithTemplate = `Hi, I'm ${firstName} ${lastName}`;
console.log(statementWithTemplate);

//Multi Line Template Strings

let multipleLineTemplateString = `Hi,
I'm ${firstName}, 
My Last name is ${lastName}`;
console.log(multipleLineTemplateString);

//Another way thats only possible due to a bug in JS
let multiLineString = "hi \n\
I'm Chandan";
console.log(multiLineString);
