//one-liners don't require return statements
const age = (birthYear) => 2022 - birthYear;

// multi line arrow funtions do require a return statement
const yearsUntilRtirement = (birthYear, currentYear) => {
  let age = currentYear - birthYear;
  return `Years until retirement  = ${65 - age}`;
};

console.log(`Age = ${age(1999)} \n`, yearsUntilRtirement(1999, 2021));
