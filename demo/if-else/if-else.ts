/* eslint-disable */
import { strict as assert } from "assert";

const answer = 4;
assert.equal(answer, 4);

if (answer > 4) {
  console.log(">4");
}

if (answer === 4) {
  console.log("4");
} else {
  console.log("!4");
}

if (answer < 4) {
  console.log("4");
} else if (answer>4) {
  console.log("!4");
}



// Control flow is the order in which statements are executed in a program. It
// allows programmers to control the flow of their code based on certain
// conditions or events. Control flow structures include conditional
// statements, loops, and function calls, which allow for branching and
// repetition of code.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
