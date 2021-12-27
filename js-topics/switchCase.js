// var day = "Monday";

let day = prompt("Enter the date:");

switch (day) {
  case "Monday":
    console.log("It the start of the week");
    break;

  case "Tuesday":
  case "Wednesday":
    console.log("Its the Middle of the week");
    break;

  case "Thursday":
  case "Friday":
    console.log("It's almost the end of the week");
    break;

  case "Saturday":
  case "Sunday":
    console.log("Weekend is here");
    break;

  default:
    console.log("Not a valid date");
}

if (day === "Monday") {
  console.log("It's the start of the week");
} else if (day === "Tuesday" || day === "Wednesday") {
  console.log("It's the middle of the week");
} else if (day === "Thursday" || day === "Friday") {
  console.log("It's almost the end of the week");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend is here");
} else {
  console.log("Not a valid date");
}
