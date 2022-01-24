import { Utils, Frame } from '@nativescript/core';
import { Contact, Group } from './models';

export * from './common';
export * from './models';

let delegate: CustomCNContactPickerViewControllerDelegate;
export class Contacts {
	static getContact() {
		return new Promise((resolve, reject) => {
			const controller = CNContactPickerViewController.alloc().init();
			delegate = CustomCNContactPickerViewControllerDelegate.initWithResolveReject(resolve, reject);

			controller.delegate = delegate;

			const page = Frame.topmost().ios.controller;
			page.presentViewControllerAnimatedCompletion(controller, true, null);
		});
	}
	static getContactById(id: string, contactFields?: Array<string>) {
		return new Promise((resolve, reject) => {
			if (!id) {
				reject('Missing Contact Identifier');
			}
			contactFields = contactFields || ['name', 'organization', 'nickname', 'photo', 'urls', 'phoneNumbers', 'emailAddresses', 'postalAddresses'];
			const store = CNContactStore.new();
			const searchPredicate = CNContact.predicateForContactsWithIdentifiers([id]);
			const keysToFetch = [];
			if (contactFields.indexOf('name') > -1) {
				keysToFetch.push('givenName', 'familyName', 'middleName', 'namePrefix', 'nameSuffix', 'phoneticGivenName', 'phoneticMiddleName', 'phoneticFamilyName');
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

			const foundContacts = store.unifiedContactsMatchingPredicateKeysToFetchError(searchPredicate, keysToFetch);

			if (foundContacts && foundContacts.count > 0) {
				let contactModel = new Contact();
				contactModel.initializeFromNative(foundContacts[0]);

				resolve({
					data: [contactModel],
					response: 'fetch',
				});
			} else {
				resolve({
					data: null,
					response: 'fetch',
				});
			}
		});
	}
	static getContactsByName(searchPredicate, contactFields?: Array<string>) {
		return new Promise((resolve, reject) => {
			const worker = new Worker('./worker-get-contacts-by-name.js'); // relative for caller script path
			worker.postMessage({
				searchPredicate: searchPredicate,
				contactFields: contactFields,
			});
			worker.onmessage = function (event) {
				if (event.data.type == 'debug') {
					// console.log(event.data.message);
				} else if (event.data.type == 'dump') {
					// console.dump(event.data.message);
				} else if (event.data.type == 'error') {
					reject(event.data.message);
				} else {
					worker.terminate();
					resolve(event.data.message);
				}
			};
			worker.onerror = function (e) {
				// console.dump(e);
			};
		});
	}
	static getAllContacts(contactFields?: Array<string>) {
		return new Promise((resolve, reject) => {
			const worker = new Worker('./worker-get-all-contacts.js'); // relative for caller script path
			worker.postMessage({ contactFields: contactFields });
			worker.onmessage = function (event) {
				var _contacts = [];
				try {
					(event.data.message.data || []).forEach(function (contact) {
						var contactModel = new Contact();
						contactModel.initializeFromObject(contact, event.data.contactFields);
						_contacts.push(contactModel);
					});
				} catch (e) {
					// console.dump(e)
				}
				event.data.message.data = _contacts;
				if (event.data.type == 'debug') {
					// console.log(event.data.message);
				} else if (event.data.type == 'dump') {
					// console.dump(event.data.message);
				} else if (event.data.type == 'error') {
					reject(event.data.message);
				} else {
					worker.terminate();
					resolve(event.data.message);
				}
			};
			worker.onerror = function (e) {
				// console.dump(e);
			};
		});
	}
	static getGroups(name: string) {
		return new Promise((resolve, reject) => {
			const store = new CNContactStore();

			let foundGroups = store.groupsMatchingPredicateError(null);

			if (foundGroups && foundGroups.count > 0) {
				var groups = [],
					i = 0,
					groupModel = null;

				if (name) {
					var foundGroupsMutable = foundGroups.mutableCopy();
					for (i = 0; i < foundGroupsMutable.count; i++) {
						if (foundGroupsMutable[i]['name'] === name) {
							groupModel = new Group();
							groupModel.initializeFromNative(foundGroups[i]);
							groups.push(groupModel);
						} else {
							foundGroupsMutable.removeObjectAtIndex(i);
						}
					}
					if (foundGroupsMutable.count > 0) {
						foundGroups = foundGroupsMutable.copy();
					} else {
						foundGroups = null;
						groups = null;
					}
				} else {
					for (i = 0; i < foundGroups.count; i++) {
						groupModel = new Group();
						groupModel.initializeFromNative(foundGroups[i]);
						groups.push(groupModel);
					}
				}
				resolve({
					data: groups,
					response: 'fetch',
				});
			} else {
				resolve({
					data: null,
					response: 'fetch',
				});
			}
		});
	}
	static getContactsInGroup(groupId: string) {
		return new Promise((resolve, reject) => {
			const store = new CNContactStore();

			const keysToFetch = <NSArray<any>>Utils.ios.collections.jsArrayToNSArray(['givenName', 'familyName', 'middleName', 'namePrefix', 'nameSuffix', 'phoneticGivenName', 'phoneticMiddleName', 'phoneticFamilyName', 'nickname', 'jobTitle', 'departmentName', 'organizationName', 'note', 'phoneNumbers', 'emailAddresses', 'postalAddresses', 'urlAddresses', 'imageData', 'imageDataAvailable']); // All Properties that we are using in the Model
			const foundContacts = store.unifiedContactsMatchingPredicateKeysToFetchError(CNContact.predicateForContactsInGroupWithIdentifier(groupId), keysToFetch);

			if (foundContacts && foundContacts.count > 0) {
				var cts = [];
				for (var i = 0; i < foundContacts.count; i++) {
					var contactModel = new Contact();
					contactModel.initializeFromNative(foundContacts[i]);
					cts.push(contactModel);
				}
				resolve({
					data: cts,
					response: 'fetch',
				});
			} else {
				resolve({
					data: null,
					response: 'fetch',
				});
			}
		});
	}
}

@NativeClass()
class CustomCNContactPickerViewControllerDelegate extends NSObject {
	static ObjCProtocols = [CNContactPickerDelegate];
	resolve: (options: { data: any; response: string }) => void;
	reject: (error: string) => void;

	static initWithResolveReject(resolve, reject) {
		const delegate = <CustomCNContactPickerViewControllerDelegate>CustomCNContactPickerViewControllerDelegate.alloc().init();
		delegate.resolve = resolve;
		delegate.reject = reject;
		return delegate;
	}

	contactPickerDidCancel(controller) {
		this.resolve({
			data: null,
			response: 'cancelled',
		});
		delegate = null;
	}
	contactPickerDidSelectContact(controller, contact) {
		console.log('contactPickerDidSelectContact:', contact);

		const page = Frame.topmost().ios.controller;
		page.dismissViewControllerAnimatedCompletion(true, () => {
			// Convert the native contact object
			const contactModel = new Contact();
			contactModel.initializeFromNative(contact);

			this.resolve({
				data: contactModel,
				response: 'selected',
			});
			delegate = null;
		});
	}
}
