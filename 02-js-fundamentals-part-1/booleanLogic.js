a = true;
b = false;

if (a && b) {
  console.log("a and b are true");
}

if (a || b) {
  console.log("a or b is true");
}

if (!a) {
  console.log("a is false");
}

if (!b) {
  console.log("b is false");
}

//! takes precedence over other operators, so values are ! first and then compared with and, or
