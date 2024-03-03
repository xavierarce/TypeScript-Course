/* eslint-disable */
import { strict as assert } from "assert";

type Title = string;
type PublishYear = number;

type Book = [Title, PublishYear];

const sample: Book = ["sample", 1980];

function coord(): [number, number] {
  return [3, 5];
}

const coordinate = coord();

const multi: [number, number][] = [coord(), [1, 1], [2, 4], [3, 3]];

// Tuples provide a way to express an array with a fixed number of elements of
// different types, creating a data structure with multiple different types.
// They can be especially handy when dealing with scenarios such as
// representing coordinates, storing key-value pairs, or returning multiple
// values from a function. Since they are type-checked, TypeScript can ensure
// that the values in the tuple are correct at compile time.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
