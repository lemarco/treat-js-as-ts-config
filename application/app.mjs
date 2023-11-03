import node from "../types/node.mjs";
import npm from "./npm.mjs";

node.fs.readFile("./app.mjs", (error, data) => {
  if (error) {
    console.log({ error });
  } else {
    console.log({ data });
  }
});

console.log({ node, npm });
