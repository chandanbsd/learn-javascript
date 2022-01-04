// NOTE == vs ===
if (18 == "18") {
  console.log("Loose equals performs type cohersion");
}

if (18 === "18") {
} else {
  console.log(
    "Strict equals does not perform type cohersion to check equality"
  );
}

// NOTE Strict Shorthand
num = 18;
//num = '18'
if (num !== 18) {
  console.log("Your not 18");
}
