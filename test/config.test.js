const test = require("node:test");
const assert = require("node:assert/strict");

test("uses the default greeting when GREETING is not set", () => {
  delete process.env.GREETING;

  delete require.cache[require.resolve("../src/config")];
  const { greeting } = require("../src/config");

  assert.equal(greeting, "Hello Git!");
});

test("uses GREETING when it is provided", () => {
  process.env.GREETING = "Hello CI!";

  delete require.cache[require.resolve("../src/config")];
  const { greeting } = require("../src/config");

  assert.equal(greeting, "Hello CI!");

  delete process.env.GREETING;
});
