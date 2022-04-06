/* NOTE Object Type
    > These can be thought of as collection of primitive types.
    > Similar to a python dict
*/
let me = {
  firstName: "Chandan",
  lastName: "Bangalore Shankar Denanath",
};

/* NOTE Primitive Types
    > These are the fundamental data types on which the object types are built upon
*/
let firstName = "Chandan";
let lastName = "Bangalore Shankar Denanath";

/* NOTE Types of primitives
    > Numbers: Any number weather a fraction or not
    > String: sequence of characters
    > Boolean: true or false values
    > Null: means empty value
    > Symbol: Introduced in ES2015, signifies that the variable is unique and cannot be changed 
    > Undefined: Variable declared but not initialized or assigned any value
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
    > BigInt (ES2020): Larger integers than the Number type can hold
 */

let itemPrice = 200;
let discountAmount = 0.2;
let itemName = "Paneer";
let expiryDate = null;
let importDate;
let inStock = true;

/* NOTE JS has Dynamic Typing
JavaScript has dynamic typing: The value that a variable holds can change from one type to another at any point in the program. The user is not required to do any manual management.
*/
