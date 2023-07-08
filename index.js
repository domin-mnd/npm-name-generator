import { createInterface } from "node:readline/promises";
import { word } from "slova";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Checks if a package with the given name exists in the NPM registry.
 *
 * @param {string} packageName - The name of the package to check.
 * @return {Promise<boolean>} Returns a boolean indicating whether the package exists or not.
 */
async function check(packageName) {
  const res = await fetch(`https://registry.npmjs.org/${packageName}`);
  const data = await res.json();
  return data?.error === "Not found";
}

const availableNames = [];

/**
 * Asynchronous function that generates a certain amount
 * list of available npm package names based on the length.
 *
 * @param {number} length The length of the package name
 * @param {number} quantity The amount of package names
 *
 * @return {Promise<string[]>} Array of available names
 */
async function main(length, quantity) {
  const wordNames = word({
    length, // length of package
    amount: 1,
  })();

  try {
    if (await check(wordNames[0])) {
      availableNames.push(wordNames[0]);
      console.log("[INFO]", `${wordNames[0]} is available!`);
    } else {
      console.log("[INFO]", `${wordNames[0]} is not available!`);
    }
  } catch (e) {
    console.error("[ERROR]", `${wordNames[0]} returned an error!`);
  }

  if (availableNames.length !== quantity) return main(length, quantity);

  return availableNames;
}

const length = await rl.question("Enter package name length: ");
const quantity = await rl.question("Enter package name quantity: ");

console.log(
  "[INFO]",
  "Fetching package names may take some time, please wait..."
);
const result = await main(+length, +quantity);
console.log("[INFO]", "available package names:", result);
rl.close();
