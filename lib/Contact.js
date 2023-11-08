const HEADINGS = Object.freeze({
  NAME: "Name",
  GIVENNAME: "Given Name",
  FAMILYNAME: "Family Name",
  ADDITIONALNAME: "Additional Name",
  NAMEPREFIX: "Name Prefix",
  NAMESUFFIX: "Name Suffix",
  NICKNAME: "Nickname",
  NOTES: "Notes",
  LOCATION: "Location",
  GENDER: "Gender",
  BIRTHDAY: "Birthday",
  EMAIL1: "E-mail 1 - Value",
  EMAIL2: "E-mail 2 - Value",
  OCCUPATION: "Occupation",
  FORMATTEDADDRESS: "Address 1 - Formatted",
  PHONE1: "Phone 1 - Value",
  ORGANIZATION: "Organization 1 - Name",
  WEBSITE: "Website 1 - Value",
});

// createContact :: (Object, Object) => Object
function createContact(data, HEADINGS) {
  return {
    givenName: data[HEADINGS.GIVENNAME] || "",
    familyName: data[HEADINGS.FAMILYNAME] || "",
    additionalName: data[HEADINGS.ADDITIONALNAME] || "",
    honorificPrefix: data[HEADINGS.NAMEPREFIX] || "",
    honorificSuffix: data[HEADINGS.NAMESUFFIX] || "",
    nickname: data[HEADINGS.NICKNAME] || "",
    notes: data[HEADINGS.NOTES] || "",
    homeLocation: data[HEADINGS.LOCATION] || "",
    gender: data[HEADINGS.GENDER] || "",
    birthDate: data[HEADINGS.BIRTHDAY] || "",
    email: data[HEADINGS.EMAIL1] || "",
    email2: data[HEADINGS.EMAIL2] || "",
    jobTitle: data[HEADINGS.OCCUPATION] || "",
    address: data[HEADINGS.FORMATTEDADDRESS] || "",
    telephone: data[HEADINGS.PHONE1] || "",
    worksFor: data[HEADINGS.ORGANIZATION] || "",
    sameAs: data[HEADINGS.website] || "",
  };
}

export { createContact, HEADINGS };
