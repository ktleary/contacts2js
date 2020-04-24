/*
Some commononly used fields are:
["Name", "Given Name", "Additional Name", "Family Name", "Name Prefix", "Name Suffix", "Nickname", "Notes", "Location", "Gender", "Birthday", "E-mail 1 - Value", "E-mail 2 - Value", "Occupation", "Address 1 - Formatted", "Phone 1 - Value", "Organization 1 - Name", "Website 1 - Value'" ]

// name, description, familyName, givenName, additionalName, url, email, homeLocation, birthDate, telephone, address, image, deathDate, birthPlace, deathPlace, knows, sameAs, jobTitle, additionalType, worksFor
const person = new Person({
  name: 'Bob Jones',
  familyName: 'Jones',
  givenName: 'Bob',
  address: '36 Phillip St',
});

*/

const HEADINGS = Object.freeze({
  NAME: 'Name',
  GIVENNAME: 'Given Name',
  FAMILYNAME: 'Family Name',
  ADDITIONALNAME: 'Additional Name',
  NAMEPREFIX: 'Name Prefix',
  NAMESUFFIX: 'Name Suffix',
  NICKNAME: 'Nickname',
  NOTES: 'Notes',
  LOCATION: 'Location',
  GENDER: 'Gender',
  BIRTHDAY: 'Birthday',
  EMAIL1: 'E-mail 1 - Value',
  EMAIL2: 'E-mail 2 - Value',
  OCCUPATION: 'Occupation',
  FORMATTEDADDRESS: 'Address 1 - Formatted',
  PHONE1: 'Phone 1 - Value',
  ORGANIZATION: 'Organization 1 - Name',
  WEBSITE: 'Website 1 - Value',
});

class Contact {
  constructor(data, HEADINGS) {
    this.givenName = data[HEADINGS.GIVENNAME] || '';
    this.FamilyName = data[HEADINGS.FAMILYNAME] || '';
    this.additionalName = data[HEADINGS.ADDITIONALNAME] || '';
    this.honorificPrefix = data[HEADINGS.NAMEPREFIX] || '';
    this.honorificSuffix = data[HEADINGS.NAMESUFFIX] || '';
    this.nickname = data[HEADINGS.NICKNAME] || '';
    this.notes = data[HEADINGS.NOTES] || '';
    this.homeLocation = data[HEADINGS.LOCATION] || '';
    this.gender = data[HEADINGS.GENDER] || '';
    this.birthDate = data[HEADINGS.BIRTHDAY] || '';
    this.email = data[HEADINGS.EMAIL1] || '';
    this.email2 = data[HEADINGS.EMAIL2] || '';
    this.jobTitle = data[HEADINGS.OCCUPATION] || '';
    this.address = data[HEADINGS.FORMATTEDADDRESS] || '';
    this.telephone = data[HEADINGS.PHONE1] || '';
    this.worksFor = data[HEADINGS.ORGANIZATION] || '';
    this.sameAs = data[HEADINGS.website] || '';
  }
}

module.exports = { Contact, HEADINGS };
