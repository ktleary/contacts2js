/* eslint-disable */
const test = require("ava");
const contacts2js = require("./index");
const contact = require("./docs/example-google-contact");

// failing test -- need a sample csv
test("it should return an object", (t) => {
  const jsContact = contacts2js(contact);
  t.assert(typeof jsContact, object);
});

test("it should be true for hello", (t) => {
  const hello = "hello";
  t.assert(hello, "hello");
});
