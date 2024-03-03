/* eslint-disable */
import { strict as assert } from "assert";

type PersonName = string;

const myName: PersonName = " Jasons";
const alsoMyName: string = "Jayson";

function print(thing: string) {
  console.log(`Name ${thing}`);
}

print("house");

function printName(name: PersonName) {
  console.log(`My name is ${name}`);
}

printName("Xavier");

const printName2 = (name: PersonName) => {
  console.log(`2 My name is ${name}`);
};
printName2("Xavier");

// Type aliases provide a way to give a name to a specific type or to create a
// union of multiple types. They can be used to define object types, which can
// then be used as types for variables, function parameters, and return types.
// Type aliases offer a way to make your code more readable and maintainable by
// providing descriptive names for complex types.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
