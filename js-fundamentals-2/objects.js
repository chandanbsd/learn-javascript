/* NOTE Objects
Objects are similar to arrays but instead of indexing based organization of elements,
Objects store data as name: value pairs
*/

const user = {
  name: "Chandan B S D",
  userId: 102,
};

/* NOTE Accessing Values
We can access values in two ways, either using the dot notation of by using property name as index
*/
//DOT Notation
console.log(user.name);
console.log(user.userId);

// Index Based Accessing
console.log(user["name"]);
console.log(user["userId"]);

//NOTE Interesting Example
var query = "name";

console.log(user[query]); //This is Valid, OUTPUT: Chandan B S D

//This is invalid. As JS does not substitute query with its value but
//instead searches for the property query in the object user which does not exist (i.e., undefined)
console.log(user.query); //Output: undefined

/* NOTE Adding new Key:Value pairs.
To do this we use the assignment operator along with a dot or index based property declaration
*/

user.linkedIn = "https://www.linkedin.com/in/chandanbsd";
user["github"] = "https://www.github.com/chandanbsd";

// Array as a property of an object

user.skills = ["JavaScript", "React", "Python"];

console.log(
  `Hi, I'm ${user.name} and I have ${user.skills.length} skills and my favorite skill is ${user.skills[0]}`
);
