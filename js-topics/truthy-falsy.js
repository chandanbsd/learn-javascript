//falsy values 0, NaN, '', undefined, null
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));

//truthy values
console.log(Boolean("Chandan"));
console.log(Boolean({}));

let money = 100;

if (money) {
  console.log("Get a Job");
} else {
  console.log("Retire");
}

/*
Result:
Get a Job
*/

let height;

if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is not defined");
}
