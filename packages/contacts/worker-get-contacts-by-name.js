require('@nativescript/core/globals');
var Contact = require("./models/contact").Contact;
var helper = require("./helper");
/* pass debug messages to main thread since web workers do not have console access */
// function console_log(msg) { postMessage({ type: 'debug', message: msg }); }
// function console_dump(msg) { postMessage({ type: 'dump', message: msg }); }
let contactFields;
self.onmessage = function (event) {
    contactFields = event.data.contactFields;
    var keysToFetch = []; // All Properties that we are using in the Model
    if (contactFields.indexOf('name') > -1) {
        keysToFetch.push("givenName", "familyName", "middleName", "namePrefix", "nameSuffix", "phoneticGivenName", "phoneticMiddleName", "phoneticFamilyName");
    }
    if (contactFields.indexOf('organization') > -1) {
        keysToFetch.push("jobTitle", "departmentName", "organizationName");
    }
    if (contactFields.indexOf('nickname') > -1) {
        keysToFetch.push("nickname");
    }
    if (contactFields.indexOf('notes') > -1) {
        keysToFetch.push("note");
    }
    if (contactFields.indexOf('photo') > -1) {
        keysToFetch.push("imageData", "imageDataAvailable");
    }
    if (contactFields.indexOf('phoneNumbers') > -1) {
        keysToFetch.push("phoneNumbers");
    }
    if (contactFields.indexOf('emailAddresses') > -1) {
        keysToFetch.push("emailAddresses");
    }
    if (contactFields.indexOf('postalAddresses') > -1) {
        keysToFetch.push("postalAddresses");
    }
    if (contactFields.indexOf('urlAddresses') > -1) {
        keysToFetch.push("urlAddresses");
    }
    const store = new CNContactStore();
    const foundContacts = store.unifiedContactsMatchingPredicateKeysToFetchError(CNContact.predicateForContactsMatchingName(event.data.searchPredicate), keysToFetch);
    //   if(error) { postMessage({ type: 'error', message: error }); }
    if (foundContacts.count > 0) {
        var cts = [];
        for (var i = 0; i < foundContacts.count; i++) {
            var contactModel = new Contact();
            contactModel.initializeFromNative(foundContacts[i], contactFields);
            cts.push(contactModel);
        }
        postMessage({ type: 'result', message: { data: cts, response: "fetch" } });
    }
    else {
        postMessage({ type: 'result', message: { data: null, response: "fetch" } });
    }
};