if (18 == "18") {
  console.log("Loose equals performs type cohersion");
}

if (18 === "18") {
} else {
  console.log(
    "Strict equals does not perform type cohersion to check equality"
  );
}

num = prompt("Enter the number");
console.log(typeof num);
console.log(num);
console.log(Number(num));
