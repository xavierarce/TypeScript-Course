/* eslint-disable */
import { strict as assert } from "assert";

const numbers: number[] = [1, 2, 3];

let letters: string[] = ["a", "b", "c"];

letters = ["a", "b", "c"];

const b = letters[1];
assert.equal(b, "b");

const names = [
  ["Jayson", "l"],
  ["alice", "b"],
];

const jayson = names[0][0];

console.log(jayson);

const numbersB: number[] = [];

numbersB.push(10);
numbersB.push(12);
numbersB.push(13);
numbersB.push(104);
console.log(numbersB);
numbersB.pop();
console.log(numbersB);
numbersB.splice(1, 1);
console.log(numbersB);

// Arrays offer a way to store and manipulate collections of values of the same
// type. They are defined using square brackets and can be populated with
// values at initialization, or later using various methods such as push(),
// splice(), and concat(). Arrays can be of a fixed length or dynamically
// resized as needed, and they can be used with various array methods to
// perform common operations like sorting, filtering, and mapping.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
