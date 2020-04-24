'use strict';

const parse = require('csv-parse/lib/sync');
const { HEADINGS, Contact } = require('./lib/Contact');

function getRecords(csvdata) {
  if (!csvdata) return [];
  return parse(csvdata, {
    columns: true,
    skip_empty_lines: true,
  });
}

function contacts2js(csvContacts = '') {
  const records = getRecords(csvContacts);
  return records.map((record) => new Contact(record, HEADINGS));
}

module.exports = contacts2js;
