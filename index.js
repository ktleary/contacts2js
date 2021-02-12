const parse = require("csv-parse/lib/sync");
const { HEADINGS, createContact } = require("./lib/Contact");

const getRecords = (csvdata) =>
  csvdata
    ? parse(csvdata, {
        columns: true,
        skip_empty_lines: true,
      })
    : [];

const contacts2js = (csvContacts) =>
  getRecords(csvContacts).map((record) => createContact(record, HEADINGS));

/* eslint-disable fp/no-mutation */
module.exports = contacts2js;
