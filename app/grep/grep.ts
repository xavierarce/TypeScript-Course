import { readFileSync } from "fs";

const args = process.argv.slice(2);
console.log(args);

const filename = args[0];
const searchstring = args[1];

const contents = readFileSync(filename, "utf-8");

const lines = contents.split("\n");

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes(searchstring)) {
    console.log(lines[i]);
  }
}
