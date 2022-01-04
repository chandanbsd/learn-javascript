//one-liners don't require return statements
const age = (birthYear) => 2022 - birthYear;

// multi line arrow funtions do require a return statement
const yearsUntilRtirement = (birthYear, currentYear) => {
  let age = currentYear - birthYear;
  return `Years until retirement  = ${65 - age}`;
};

console.log(`Age = ${age(1999)} \n`, yearsUntilRtirement(1999, 2021));

/*
  > Arrow functions can be thought of as a much more concise version of function expressions.
  > While it is quiet similar to other forms of function usage, it DOES’NT have access to the ***this*** keyword.
*/
