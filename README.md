# contacts2js

> Convert CSV formatted Google contacts to an array of Contact with schema.org properties

## Configuration

Heading and Contact class are configured to use commonly used field from Google CSV format.

## Usage

- pass in a Google contacts csv string
- returns an array of Contacts

```
// contacts2js :: string -> [Contact]
function contacts2js(csvContacts = "") {
  const records = getRecords(csvContacts);
  return records.map((record) => createContact(record, HEADINGS));
}

```

## Installation

- npm install contacts2js

## Test

- npm test
