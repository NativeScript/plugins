import '@nativescript/core/globals';

import { Contact } from './models/contact';

/* pass debug messages to main thread since web workers do not have console access */
// function console_log(msg) { postMessage({ type: 'debug', message: msg }); }
// function console_dump(msg) { postMessage({ type: 'dump', message: msg }); }

let contactFields;
self.onmessage = function (event) {
	console.log('GET CONTACTS BY NAME WORKER');
	// prettier-ignore
	contactFields = event.data.contactFields ?? [
    'name',
    'organization',
    'nickname',
    'notes',
    'photo',
    'urls',
    'phoneNumbers',
    'emailAddresses',
    'postalAddresses'
  ];

	console.log('contactFields', contactFields);
	console.log('event.data.searchPredicate', event.data.searchPredicate);

	const keysToFetch = []; // All Properties that we are using in the Model
	if (contactFields.indexOf('name') > -1) {
		// prettier-ignore
		keysToFetch.push(
      "givenName",
      "familyName",
      "middleName",
      "namePrefix",
      "nameSuffix", 
      "phoneticGivenName", 
      "phoneticMiddleName",
      "phoneticFamilyName"
    );
	}

	if (contactFields.indexOf('organization') > -1) {
		keysToFetch.push('jobTitle', 'departmentName', 'organizationName');
	}
	if (contactFields.indexOf('nickname') > -1) {
		keysToFetch.push('nickname');
	}
	if (contactFields.indexOf('notes') > -1) {
		keysToFetch.push('note');
	}
	if (contactFields.indexOf('photo') > -1) {
		keysToFetch.push('imageData', 'imageDataAvailable');
	}
	if (contactFields.indexOf('phoneNumbers') > -1) {
		keysToFetch.push('phoneNumbers');
	}
	if (contactFields.indexOf('emailAddresses') > -1) {
		keysToFetch.push('emailAddresses');
	}
	if (contactFields.indexOf('postalAddresses') > -1) {
		keysToFetch.push('postalAddresses');
	}
	if (contactFields.indexOf('urlAddresses') > -1) {
		keysToFetch.push('urlAddresses');
	}

	const store = new CNContactStore();
	const foundContacts = store.unifiedContactsMatchingPredicateKeysToFetchError(CNContact.predicateForContactsMatchingName(event.data.searchPredicate), keysToFetch);

	// if (error) {
	// 	postMessage({ type: 'error', message: error });
	// }

	console.log('foundContacts', foundContacts);
	if (foundContacts.count > 0) {
		const cts = [];
		for (let i = 0; i < foundContacts.count; i++) {
			const contactModel = new Contact();
			contactModel.initializeFromNative(foundContacts[i], contactFields);
			cts.push(contactModel);
		}
		postMessage({ type: 'result', message: { data: cts, response: 'fetch' } });
	} else {
		postMessage({ type: 'result', message: { data: null, response: 'fetch' } });
	}
};
