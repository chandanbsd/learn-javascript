function addNumbers(a, b) {
  return a + b;
}

function addMultipleNumbers(a, b, c) {
  res = addNumbers(a, b);

  return res * c;
}

console.log(addMultipleNumbers(5, 5, 5));
