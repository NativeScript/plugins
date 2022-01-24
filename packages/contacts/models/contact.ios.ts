import { ImageSource, Utils } from '@nativescript/core';
import { ContactHelper } from '../helper';
import { ContactCommon } from './contact.common';

export class Contact extends ContactCommon {
	initializeFromNative(contactData, contactFields?: Array<string>) {
		contactFields = contactFields || ['name', 'organization', 'nickname', 'notes', 'photo', 'urls', 'phoneNumbers', 'emailAddresses', 'postalAddresses'];

		this.id = ContactHelper.ios.getiOSValue('identifier', contactData);

		//NAME
		this.name.given = ContactHelper.ios.getiOSValue('givenName', contactData);
		this.name.family = ContactHelper.ios.getiOSValue('familyName', contactData);
		this.name.middle = ContactHelper.ios.getiOSValue('middleName', contactData);
		this.name.prefix = ContactHelper.ios.getiOSValue('namePrefix', contactData);
		this.name.suffix = ContactHelper.ios.getiOSValue('nameSuffix', contactData);
		this.name.phonetic.given = ContactHelper.ios.getiOSValue('phoneticGivenName', contactData);
		this.name.phonetic.middle = ContactHelper.ios.getiOSValue('phoneticMiddleName', contactData);
		this.name.phonetic.family = ContactHelper.ios.getiOSValue('phoneticFamilyName', contactData);

		//ORG
		this.organization.jobTitle = ContactHelper.ios.getiOSValue('jobTitle', contactData);
		this.organization.department = ContactHelper.ios.getiOSValue('departmentName', contactData);
		this.organization.name = ContactHelper.ios.getiOSValue('organizationName', contactData);

		this.nickname = ContactHelper.ios.getiOSValue('nickname', contactData);

		this.notes = ContactHelper.ios.getiOSValue('notes', contactData);

		if (contactFields.indexOf('photo') > -1 && contactData.imageDataAvailable) {
			this.photo = 'data:image/png;base64,' + ImageSource.fromDataSync(contactData.imageData).toBase64String('png');
		} else {
			delete this.photo;
		}

		if (contactFields.indexOf('phoneNumbers') > -1 && contactData.phoneNumbers.count > 0) {
			for (var i = 0; i < contactData.phoneNumbers.count; i++) {
				var pdata = contactData.phoneNumbers[i];
				this.phoneNumbers.push({
					id: pdata.identifier,
					label: ContactHelper.ios.getPhoneLabel(pdata.label),
					value: pdata.value.stringValue,
				});
			}
		} else {
			delete this.phoneNumbers;
		}

		if (contactFields.indexOf('emailAddresses') > -1 && contactData.emailAddresses.count > 0) {
			for (var i = 0; i < contactData.emailAddresses.count; i++) {
				var edata = contactData.emailAddresses[i];
				this.emailAddresses.push({
					id: edata.identifier,
					label: ContactHelper.ios.getGenericLabel(edata.label),
					value: edata.value,
				});
			}
		} else {
			delete this.emailAddresses;
		}

		if (contactFields.indexOf('postalAddresses') > -1 && contactData.postalAddresses.count > 0) {
			for (var i = 0; i < contactData.postalAddresses.count; i++) {
				var postaldata = contactData.postalAddresses[i];
				this.postalAddresses.push({
					id: postaldata.identifier,
					label: ContactHelper.ios.getGenericLabel(postaldata.label),
					location: {
						street: postaldata.value.street,
						city: postaldata.value.city,
						state: postaldata.value.state,
						postalCode: postaldata.value.postalCode,
						country: postaldata.value.country,
						countryCode: postaldata.value.ISOCountryCode,
						formatted: '',
					},
				});
			}
		} else {
			delete this.postalAddresses;
		}

		if (contactFields.indexOf('urlAddresses') > -1 && contactData.urlAddresses.count > 0) {
			for (var i = 0; i < contactData.urlAddresses.count; i++) {
				var urldata = contactData.urlAddresses[i];
				this.urls.push({
					label: ContactHelper.ios.getWebsiteLabel(urldata.label),
					value: urldata.value,
				});
			}
		} else {
			delete this.urls;
		}
	}

	initializeFromObject(cObject, contactFields) {
		contactFields = contactFields || ['name', 'organization', 'nickname', 'notes', 'photo', 'urls', 'phoneNumbers', 'emailAddresses', 'postalAddresses'];
		var mainCursorJson = cObject;

		for (var prop in cObject) {
			this[prop] = cObject[prop];
		}
	}

	save() {
		var isUpdate = false;
		var store = <CNContactStore>CNContactStore.new();
		var contactRecord: CNMutableContact;

		if (this.id && this.id !== '') {
			var searchPredicate = CNContact.predicateForContactsWithIdentifiers([this.id]);
			var keysToFetch: Array<any> = ['givenName', 'familyName', 'middleName', 'namePrefix', 'nameSuffix', 'phoneticGivenName', 'phoneticMiddleName', 'phoneticFamilyName', 'nickname', 'jobTitle', 'departmentName', 'organizationName', 'note', 'phoneNumbers', 'emailAddresses', 'postalAddresses', 'urlAddresses', 'imageData']; // All Properties that we are changing
			var foundContacts = store.unifiedContactsMatchingPredicateKeysToFetchError(searchPredicate, keysToFetch);
			if (foundContacts.count > 0) {
				contactRecord = foundContacts[0].mutableCopy();
				isUpdate = true;
			}
		}

		if (!contactRecord) {
			contactRecord = <CNMutableContact>CNMutableContact.new();
		}

		// Set Names
		contactRecord.givenName = this.name.given;
		contactRecord.familyName = this.name.family;
		contactRecord.middleName = this.name.middle;
		contactRecord.namePrefix = this.name.prefix;
		contactRecord.nameSuffix = this.name.suffix;
		contactRecord.phoneticGivenName = this.name.phonetic.given;
		contactRecord.phoneticMiddleName = this.name.phonetic.middle;
		contactRecord.phoneticFamilyName = this.name.phonetic.family;

		// Set nickname
		contactRecord.nickname = this.nickname;

		// Set Phones
		contactRecord.phoneNumbers = Utils.ios.collections.jsArrayToNSArray(
			this.phoneNumbers
				? this.phoneNumbers.map(function (item) {
						return CNLabeledValue.labeledValueWithLabelValue(ContactHelper.ios.getNativePhoneLabel(item.label), CNPhoneNumber.phoneNumberWithStringValue(item.value));
				  })
				: []
		);

		// Set Emails
		contactRecord.emailAddresses = Utils.ios.collections.jsArrayToNSArray(
			this.emailAddresses
				? this.emailAddresses.map(function (item) {
						return CNLabeledValue.labeledValueWithLabelValue(ContactHelper.ios.getNativeGenericLabel(item.label), item.value);
				  })
				: []
		);

		// Set Addresses
		contactRecord.postalAddresses = Utils.ios.collections.jsArrayToNSArray(
			this.postalAddresses
				? this.postalAddresses.map(function (item) {
						var mutableAddress = <CNMutablePostalAddress>CNMutablePostalAddress.new();
						mutableAddress.street = item.location.street;
						mutableAddress.city = item.location.city;
						mutableAddress.state = item.location.state;
						mutableAddress.postalCode = item.location.postalCode;
						mutableAddress.country = item.location.country;
						mutableAddress.ISOCountryCode = item.location.countryCode;

						return CNLabeledValue.labeledValueWithLabelValue(ContactHelper.ios.getNativeGenericLabel(item.label), mutableAddress);
				  })
				: []
		);

		// Set Note
		contactRecord.note = this.notes;

		// Set Websites
		contactRecord.urlAddresses = Utils.ios.collections.jsArrayToNSArray(
			this.urls
				? this.urls.map(function (item) {
						return CNLabeledValue.labeledValueWithLabelValue(ContactHelper.ios.getNativeWebsiteLabel(item.label), item.value);
				  })
				: []
		);

		// Set Organization
		contactRecord.jobTitle = this.organization.jobTitle;
		contactRecord.departmentName = this.organization.department;
		contactRecord.organizationName = this.organization.name;

		// Set photo
		if (!this.photo || !this.photo.ios) {
			// Delete the image
			contactRecord.imageData = null;
		} else {
			contactRecord.imageData = UIImageJPEGRepresentation(this.photo.ios, 1.0);
		}

		var saveRequest = new CNSaveRequest();
		if (isUpdate) {
			saveRequest.updateContact(contactRecord);
		} else {
			saveRequest.addContactToContainerWithIdentifier(contactRecord, null);
		}

		// var error;
		store.executeSaveRequestError(saveRequest);

		// if (error) {
		//     throw new Error(error.localizedDescription);
		// }

		//Update our id for new contacts so that we can do something else with them if we choose.
		if (contactRecord['identifier'] !== this.id) {
			this.id = contactRecord['identifier'];
		}
	}
	delete() {
		var store = new CNContactStore();
		var contactRecord;

		if (this.id && this.id !== '') {
			var searchPredicate = CNContact.predicateForContactsWithIdentifiers([this.id]);
			var keysToFetch: Array<any> = ['givenName', 'familyName', 'middleName', 'namePrefix', 'nameSuffix', 'phoneticGivenName', 'phoneticMiddleName', 'phoneticFamilyName', 'nickname', 'jobTitle', 'departmentName', 'organizationName', 'note', 'phoneNumbers', 'emailAddresses', 'postalAddresses', 'urlAddresses', 'imageData']; // All Properties that we are changing
			var foundContacts = store.unifiedContactsMatchingPredicateKeysToFetchError(searchPredicate, keysToFetch);
			if (foundContacts.count > 0) {
				contactRecord = foundContacts[0].mutableCopy();
			}
		}

		if (contactRecord) {
			var saveRequest = new CNSaveRequest();
			saveRequest.deleteContact(contactRecord);

			// var error;
			store.executeSaveRequestError(saveRequest);

			// if (error) {
			//     throw new Error(error.localizedDescription);
			// }
		}
	}
	isUnified() {
		const store = new CNContactStore();
		let contactRecord;

		if (this.id && this.id !== '') {
			const searchPredicate = CNContact.predicateForContactsWithIdentifiers([this.id]);
			const keysToFetch: Array<any> = ['givenName', 'familyName', 'middleName', 'namePrefix', 'nameSuffix', 'phoneticGivenName', 'phoneticMiddleName', 'phoneticFamilyName', 'nickname', 'jobTitle', 'departmentName', 'organizationName', 'note', 'phoneNumbers', 'emailAddresses', 'postalAddresses', 'urlAddresses', 'imageData', 'imageDataAvailable']; // All Properties that we are using in the Model
			const foundContacts = store.unifiedContactsMatchingPredicateKeysToFetchError(searchPredicate, keysToFetch);
			if (foundContacts.count > 0) {
				contactRecord = foundContacts[0];
			}
		}
		return contactRecord ? contactRecord.isUnifiedWithContactWithIdentifier(this.id) : false;
	}
}
