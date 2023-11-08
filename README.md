# contacts2js

A Node.js module for converting CSV formatted Google contacts to an array of Contact objects with schema.org properties.

## Installation

You can install contacts2js via npm:

```bash

npm install contacts2js
```

## Usage

To use contacts2js, follow these simple steps:

Import the module into your Node.js application:

```javascript
const contacts2js = require("contacts2js");
```

Call the contacts2js function with a CSV string representing Google contacts:

```js
const csvContacts = "your CSV formatted Google contacts here";
const contacts = contacts2js(csvContacts);
```

contacts2js will return an array of Contact objects, each containing schema.org properties for a contact.

Example:

```javascript
const csvContacts = "your CSV formatted Google contacts here";
const contacts = contacts2js(csvContacts);

console.log(contacts);
```

## Configuration

By default, the Contact class is configured to use commonly used fields from the Google CSV format.

## API

contacts2js(csvContacts)
csvContacts (string): The CSV formatted Google contacts to be converted.
Returns an array of Contact objects with schema.org properties.

## Testing

You can run tests for the contacts2js module using the following command:

```bash
npm test
```
