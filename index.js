const parse = require("csv-parse/lib/sync");
const { HEADINGS, createContact } = require("./lib/Contact");

function getRecords(csvdata) {
  if (!csvdata) return [];
  return parse(csvdata, {
    columns: true,
    skip_empty_lines: true,
  });
}

// contacts2js :: string -> [Contact]
function contacts2js(csvContacts = "") {
  const records = getRecords(csvContacts);
  return records.map((record) => createContact(record, HEADINGS));
}

/* eslint-disable fp/no-mutation */
module.exports = contacts2js;
