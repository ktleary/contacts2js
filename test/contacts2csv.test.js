/* eslint-disable */
// const test = require("ava");
import test from "ava";
// const fs = require("fs");
import fs from "fs";
// const path = require("path");
import path from "path";
// const contacts2js = require("../index");
import contacts2js from "../index.js";
const contactspath = "./test/test-contacts.csv";
// const contactspath = path.join(__dirname, "test-contacts.csv");

const getFile = (filepath) => fs.readFileSync(filepath, { encoding: "utf-8" });

test("it should return an object", (t) => {
  const contacts = getFile(contactspath);
  const jsContacts = contacts2js(contacts);

  t.is(Array.isArray(jsContacts), true);
});

test("it should find Aaron Jones", (t) => {
  const contacts = getFile(contactspath);
  const jsContacts = contacts2js(contacts);

  const jones = jsContacts.find((contact) => contact.familyName === "Jones");

  t.is(jones.familyName, "Jones");
});
