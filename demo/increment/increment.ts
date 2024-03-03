/* eslint-disable */
import { strict as assert, equal } from "assert";

let n = 1;
n++; //Incremet

assert.equal(n, 2);

n=1
++n;
assert.equal(n, 2);

n = 5;
const k = n++;
// assert.equal(k, 6);
assert.equal(n, 6);

n = 5;
const j = ++n;
assert.equal(j, 6);

n = 5;
const l = (n += 5);
assert.equal(l, 10);

// Incrementing numbers is a common task to perform when writing programs. So
// common that there is an operator dedicated to just incrementing numbers.
// However, it does come with a few caveats to be aware of.

// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
