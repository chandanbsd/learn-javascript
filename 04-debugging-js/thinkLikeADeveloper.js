/* NOTE Solving Real World Problems

Lets say our client request software that computes the amplitude of temperature measurements.
Also we are informed that there may be errors in reading the temperature.

*/

/* Step 1: Asking Questions

Our Question 1:
First let's request the client as to what the input to our program would be, i.e, the type of data we are dealing with

Client's Response:
We are told that the data would be an array as follows
[ 25, 10, "error", 76, 46]

Our Inferences:
We can see that the data is of type number and its given to us in the form of an array.
We can also observe that when an error in reading occurs it is stored as a string "error"
*/

/*
Our Question 2:
Secondly whats the meaning of amplitude. Ask the client.

Client's Response:
We are told that the amplitude is the difference between the largest and smallest value of temperature

Our Inferences:
We will have to find the maximum element in that array and then subtract it from the minimum element in the array
*/

/* Step 2: Formulating a Solution
Use Google, Stack Overflow, MDN etc.

With a clear understating of the solution we can now start breaking the solution to sub-problems and solving them

First Sub - Problem: Accessing Each Element in the array
Solution: To do this we can use a for loop

Second Sub-Problem: Determining if the reading is an error
Solution: We can use an if statement

Third Sub-Problem: Ignoring if the reading is an error
Solution: We can use the continue statement to force the next iteration without performing any computation

Fourth Sub-Problem: Find Maximum Element
Solution: We initialize the maximum value to 0 and then compare and update against each element
Simultaneously, we also initialize our minimum value to a large number and then compare and update again each element within the same loop

*/

/* Step 3: Pseudo Code
Here we formulate our complete solution in simple english.


Step 1: Obtain the input array temps
Step 2: max <- 999, min <- 0
Step 3: loop through each element (ele) in the array
Step 4:     If ele is an error : go to next iteration
            Compare if max > ele : if true then update max <- ele
            Compare if min < ele : if true then update min <- ele
Step 5: calculate amplitude as amplitude <- max - min
Step 6: return amplitude
*/

//Step 4: Code the solution

function computeAmplitude1(temps) {
  let min = 999;
  let max = 0;
  for (let i = 0; i <= temps.length; i++) {
    if (temps[i] == "error") continue;

    if (temps[i] > max) {
      max = temps[i];
    }

    if (temps[i] < min) {
      min = temps[i];
    }
  }

  return max - min;
}

console.log(computeAmplitude1([45, 95, 26, 10, "error", 60]));

/* Now lets say the client updated their requirements to say that instead of 1 arary of temperatures, we
are given two array of temperatures

Now, we need to create a new subproblem:

Merging the two input arrays.

To do this we can use either google, msdn or stack overflow with a simply search query like "Merge two arrays js"

We get the following solution from msdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

Now lets modify our program
*/

function computeAmplitude2(temps1, temps2) {
  temps = temps1.concat(temps2);
  let min = 999;
  let max = 0;
  for (let i = 0; i <= temps.length; i++) {
    if (temps[i] == "error") continue;

    if (temps[i] > max) {
      max = temps[i];
    }

    if (temps[i] < min) {
      min = temps[i];
    }
  }

  return max - min;
}

console.log(
  computeAmplitude2([45, 95, 26, 10, "error", 60], [100, "error", 70])
);
