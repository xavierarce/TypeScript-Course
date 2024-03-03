/* eslint-disable */
import { strict as assert } from "assert";

type A = string;

type Coordinate = {
  x: number;
  y: number;
};

const origin: Coordinate = {
  x: 0,
  y: 0,
};

const xPosition = origin.x;
const yPosition = origin.y;

let coord: Coordinate = { x: 1, y: 1 };

coord.x = 20;
coord.y = 10;
console.log(assert.deepEqual(coord, { x: 20, y: 10 }));

const threethree = { x: 20, y: 10 };

const printCoord = (coord: Coordinate) => {
  console.log(coord.x, coord.y);
};

printCoord(coord);
printCoord({ x: 5, y: 3 });

type PersonName = string;

type Location = {
  coord: Coordinate;
  name: PersonName;
};

let home: Location = {
  coord: { x: 0, y: 0 },
  name: "home",
};

home.coord.x = 1;

// Objects are a fundamental data type used to represent a collection of
// properties with their respective values. They are defined using either an
// object literal notation or a constructor notation.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html
