"use strict";
/*NOTE debugger
While using console based messages is conventional especially when
the potential source of error is known,

A much smarter way for debugging code, particularly when the cause of the
error is unknown is using the JS debugger that is built into every web browser
To do this we may either use the "debugger" keyword to invoke the debugger at
any point or we can manually add breakpoints by  loading the file through a
web browser
*/

// Let's look at a buggy program to find minimum element in the array

let numbers = [1, 2, 3, 4, 5];

let min = 0; //This initialization introduces a bug, that we'll see later

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < min) {
    //this always returns false since the no elements is lesser than our assumption 0
    min = numbers[i]; // this code is never reached
    debugger;
  }
}
