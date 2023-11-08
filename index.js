import { parse } from "csv-parse/sync";
import { HEADINGS, createContact } from "./lib/Contact.js";

const getRecords = (csvdata) => {
  if (!csvdata) return [];

  try {
    return parse(csvdata, {
      columns: true,
      skip_empty_lines: true,
    });
  } catch (err) {
    console.error(`Failed to parse CSV data: ${err.message}`);
    return [];
  }
};

const contacts2js = (csvContacts) =>
  getRecords(csvContacts).map((record) => createContact(record, HEADINGS));

export default contacts2js;
