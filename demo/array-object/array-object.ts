/* eslint-disable */
import { strict as assert } from "assert";

type Link = {
  title: string;
  url: string;
};

const microsoft: Link = {
  title: "microsoft",
  url: "microsoft.com",
};

const typescript: Link = {
  title: "typescript",
  url: "typescript.org",
};

const links = [microsoft, typescript];

const tsUrl = links[1].title;

links[0].title = "Nigce";
console.log(links);
