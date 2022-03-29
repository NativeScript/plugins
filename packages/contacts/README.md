# @nativescript/contacts

Easy access to iOS and Android contact directory. Pick a contact, update it, delete it, or add a new one.

```javascript
npm install @nativescript/contacts
```

## Usage

### iOS Settings

Add following key to Info.plist often found in `App_Resources/iOS/Info.plist`

```
<key>NSContactsUsageDescription</key>
<string>Kindly provide permission to access contacts on your device.</string>
```

User will be asked for permissions when contacts are accessed by the app.

Since iOS 13, you will also [need entitlements](https://developer.apple.com/documentation/contacts/requesting_authorization_to_access_contacts). If you do not have `App_Resources/iOS/app.entitlements` yet, you can add the file with at least these contents:

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>com.apple.developer.contacts.notes</key>
    <true/>
  </dict>
</plist>
```

### Android Settings

From API level 23 on you need to check for the appropriate permissions to access the contacts. So not only do you need these permissions in your `AndroidManifest.xml`:

```
<uses-permission android:name="android.permission.GET_ACCOUNTS" />
<uses-permission android:name="android.permission.READ_CONTACTS" />
<uses-permission android:name="android.permission.WRITE_CONTACTS" />
<uses-permission android:name="android.permission.GLOBAL_SEARCH" />
```

You also need to make sure to request the permissions everytime you perform the operation itself (e.g. using the nativescript-permissions plugin):

```
import { Contact } from '@nativescript/contacts';
import { requestPermissions } from 'nativescript-permissions';

const contact = new Contact();
// build a new contact...

requestPermissions([android.Manifest.permission.GET_ACCOUNTS, android.Manifest.permission.READ_CONTACTS, android.Manifest.permission.WRITE_CONTACTS, android.Manifest.permission.GLOBAL_SEARCH], "I need these permissions because I'm cool").then(() => {
    contact.save();
});
```

### Methods

#### getContact: Pick one contact and bring back its data.

```ts
import { Contacts } from '@nativescript/contacts';

Contacts.getContact().then(function (args) {
	/// Returns args:
	/// args.data: Generic cross platform JSON object
	/// args.reponse: "selected" or "cancelled" depending on wheter the user selected a contact.

	if (args.response === 'selected') {
		const contact = args.data; //See data structure below

		// lets say you wanted to grab first name and last name
		console.log(contact.name.given + ' ' + contact.name.family);

		//lets say you want to get the phone numbers
		contact.phoneNumbers.forEach(function (phone) {
			console.log(phone.value);
		});

		//lets say you want to get the addresses
		contact.postalAddresses.forEach(function (address) {
			console.log(address.location.street);
		});
	}
});
```

#### Save a new contact

```ts
import { Contact, KnownLabel } from '@nativescript/contacts';
import { ImageSource } from '@nativescript/core';

const newContact = new Contact();
newContact.name.given = 'John';
newContact.name.family = 'Doe';
newContact.phoneNumbers.push({
	label: KnownLabel.HOME,
	value: '123457890',
}); // See below for known labels
newContact.phoneNumbers.push({ label: 'My Custom Label', value: '11235813' });
newContact.photo = ImageSource.fromFileOrResource('~/photo.png');
newContact.save();
```

#### Update an existing contact

```ts
import { Application, ImageSource } from '@nativescript/core';
import { Contacts } from '@nativescript/contacts';

Contacts.getContact().then(function (args) {
	if (args.response === 'selected') {
		const contact = args.data;
		contact.name.given = 'Jane';
		contact.name.family = 'Doe';

		ImageSource.fromUrl('http://www.google.com/images/errors/logo_sm_2.png').then(function (src) {
			contact.photo = src;
			contact.save();
		});
	}
});
```

#### Delete a contact

```ts
import { Contacts } from '@nativescript/contacts';

Contacts.getContact().then(function (args) {
	/// args.data: Generic cross platform JSON object
	/// args.reponse: "selected" or "cancelled" depending on wheter the user selected a contact.

	if (args.response === 'selected') {
		const contact = args.data; //See data structure below
		contact.delete();
	}
});
```

#### Check if contact is Unified/Linked (iOS Specific)

```ts
import { Contacts } from '@nativescript/contacts';

Contacts.getContact().then(function (args) {
	/// args.data: Generic cross platform JSON object
	/// args.reponse: "selected" or "cancelled" depending on wheter the user selected a contact.

	if (args.response === 'selected') {
		const contact = args.data; //See data structure below
		console.log(contact.isUnified() ? 'Contact IS unified' : 'Contact is NOT unified');
	}
});
```

#### getContactsByName: Find all contacts whose name matches. Returns an array of contact data.

```ts
import { Contacts } from '@nativescript/contacts';

/*
  contactFields contains the fields to retrieve from native backend to reduce processing time
  const contactFields = ['name','organization','nickname','notes','photo','urls','phoneNumbers','emailAddresses','postalAddresses']
*/
const contactFields = ['name', 'phoneNumbers'];

Contacts.getContactsByName('Hicks', contactFields).then(
	function (args) {
		console.log('getContactsByName Complete');
		/// Returns args:
		/// args.data: Generic cross platform JSON object, null if no contacts were found.
		/// args.reponse: "fetch"
	},
	function (err) {
		console.log('Error: ' + err);
	}
);
```

#### getAllContacts: Find all contacts. Returns an array of contact data.

```ts
import { Contacts } from '@nativescript/contacts';

/*
  Optional: contactFields contains the fields to retrieve from native backend to reduce processing time
  const contactFields = ['name','organization','nickname','notes','photo','urls','phoneNumbers','emailAddresses','postalAddresses']

  If not supplied, all available contactFields will be returned.
*/
const contactFields = ['name', 'phoneNumbers'];

Contacts.getAllContacts(contactFields).then(
	function (args) {
		console.log('getAllContacts Complete');
		/// Returns args:
		/// args.data: Generic cross platform JSON object, null if no contacts were found.
		/// args.reponse: "fetch"
	},
	function (err) {
		console.log('Error: ' + err);
	}
);
```

#### getContactById: Finds the contact with the matching identifier. Returns GetFetchResult. _(iOS Only)_

```ts
import { Contacts } from '@nativescript/contacts';

const contactId = '[Contact Identifier]'; // Assumes this is a valid contact identifier (Contact.id)

Contacts.getContactById(contactId).then(
	function (args) {
		console.log('getContactById Complete');
		/// Returns args:
		/// args.data: Generic cross platform JSON object, null if no contacts were found.
		/// args.reponse: "fetch"
	},
	function (err) {
		console.log('Error: ' + err);
	}
);
```

#### getGroups: Find groups. Returns an array of group data.

```ts
import { Contacts } from '@nativescript/contacts';

Contacts
	.getGroups('Test Group') //[name] optional. If defined will look for group with the specified name, otherwise will return all groups.
	.then(
		function (args) {
			console.log('getGroups Complete');
			/// Returns args:
			/// args.data: Generic cross platform JSON object, null if no groups were found.
			/// args.reponse: "fetch"

			if (args.data === null) {
				console.log('No Groups Found!');
			} else {
				console.log('Group(s) Found!');
			}
		},
		function (err) {
			console.log('Error: ' + err);
		}
	);
```

#### Save a new group

```ts
import { Group } from '@nativescript/contacts';

const groupModel = new Group();
groupModel.name = 'Test Group';
//Save Argument (boolean)
//iOS: [false=> Use Local Container, true=> Use Default Container]
//Android: will always be true, setting this value will not affect android.
groupModel.save(false);
```

#### Delete a group

```ts
import { Contacts } from '@nativescript/contacts';

Contacts.getGroups('Test Group').then(
	function (args) {
		console.log('getGroups Complete');
		console.log(JSON.stringify(args));
		/// Returns args:
		/// args.data: Generic cross platform JSON object, null if no groups were found.
		/// args.reponse: "fetch"

		if (args.data !== null) {
			console.log('Group(s) Found!');
			args.data[0].delete(); //Delete the first found group
		}
	},
	function (err) {
		console.log('Error: ' + err);
	}
);
```

#### Add Member To Group

```ts
import { Contacts } from '@nativescript/contacts';

Contacts.getContact().then(function (args) {
	/// args.data: Generic cross platform JSON object
	/// args.reponse: "selected" or "cancelled" depending on wheter the user selected a contact.

	if (args.response === 'selected') {
		const contact = args.data; //See data structure below
		Contacts.getGroups('Test Group').then(
			function (a) {
				if (a.data !== null) {
					const group = a.data[0];
					group.addMember(contact);
				}
			},
			function (err) {
				console.log('Error: ' + err);
			}
		);
	}
});
```

#### Remove Member From Group

```ts
import { Contacts } from '@nativescript/contacts';

Contacts
	.getGroups('Test Group') //[name] optional. If defined will look for group with the specified name, otherwise will return all groups.
	.then(
		function (args) {
			if (args.data !== null) {
				const group = args.data[0];

				Contacts.getContactsInGroup(group).then(
					function (a) {
						/// Returns args:
						/// args.data: Generic cross platform JSON object, null if no groups were found.
						/// args.reponse: "fetch"
						console.log('getContactsInGroup complete');

						if (a.data !== null) {
							a.data.forEach(function (c, idx) {
								group.removeMember(c);
							});
						}
					},
					function (err) {
						console.log('Error: ' + err);
					}
				);
			}
		},
		function (err) {
			console.log('Error: ' + err);
		}
	);
```

#### getContactsInGroup: Get all contacts in a group. Returns an array of contact data.

```ts
import { Contacts } from '@nativescript/contacts';

Contacts
	.getGroups('Test Group') //[name] optional. If defined will look for group with the specified name, otherwise will return all groups.
	.then(
		function (args) {
			if (args.data !== null) {
				const group = args.data[0];

				Contacts.getContactsInGroup(group).then(
					function (a) {
						console.log('getContactsInGroup complete');
						/// Returns args:
						/// args.data: Generic cross platform JSON object, null if no groups were found.
						/// args.reponse: "fetch"
					},
					function (err) {
						console.log('Error: ' + err);
					}
				);
			}
		},
		function (err) {
			console.log('Error: ' + err);
		}
	);
```

### Single User Data Structure

```ts
{
    id : "",
    name : {
        given: "",
        middle: "",
        family: "",
        prefix: "",
        suffix: "",
        displayname: "",
        phonetic : {
            given: "",
            middle: "",
            family: ""
        }
    },
    nickname : "",
    organization : {
        name: "",
        jobTitle: "",
        department: "",

        // Android Specific properties
        symbol: "",
        phonetic: "",
        location: "",
        type: ""
    },
    notes : "",
    photo: null, // {N} ImageSource instance

    phoneNumbers : [],
    emailAddresses : [],
    postalAddresses : [],
    urls : []
}
```

### PhoneNumber / EmailAddress structure

```ts
{
    id: "",
    label: "",
    value: ""
}
```

### Url structure

```ts
{
    label: "",
    value: ""
}
```

### PostalAddress structure

```ts
{
    id: "",
    label: "",
    location: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        countryCode: ""
    }
}
```

### Known Labels (for Urls, Addresses and Phones)

The following constants are exposed from the plugin in the `KnownLabel` structure. See details bellow for what types and on what platform they are supported

- **HOME**
  iOS - _phone, email, postal, url_
  Android - _phone, email, postal, url_
- **WORK**
  iOS - _phone, email, postal, url_
  Android - _phone, email, postal, url_
- **OTHER**
  iOS - _phone, email, postal, url_
  Android - _phone, email, postal, url_
- **FAX_HOME**
  iOS - _phone_
  Android - _phone_
- **FAX_WORK**
  iOS - _phone_
  Android - _phone_
- **PAGER**
  iOS - _phone_
  Android - _phone_
- **MAIN**
  iOS - _phone_
  Android - _phone_
- **HOMEPAGE**
  iOS - _url_
  Android - _url_
- **CALLBACK**
  Android - _phone_
- **CAR**
  Android - _phone_
- **COMPANY_MAIN**
  Android - _phone_
- **ISDN**
  Android - _phone_
- **OTHER_FAX**
  Android - _phone_
- **RADIO**
  Android - _phone_
- **TELEX**
  Android - _phone_
- **TTY_TDD**
  Android - _phone_
- **WORK_MOBILE**
  Android - _phone_
- **WORK_PAGER**
  Android - _phone_
- **ASSISTANT**
  Android - _phone_
- **MMS**
  Android - _phone_
- **FTP**
  Android - _url_
- **PROFILE**
  Android - _url_
- **BLOG**
  Android - _url_

Those are the system labels but you can also use any custom label you want.

### Single Group Data Structure

```ts
{
	id: '';
	name: '';
}
```

### `GetFetchResult` Data Structure

The object returned by contact fetch requests.

```ts
{
  data: Contact[];
  response: string;
}
```

### iOS

See apples docs on properties available:
https://developer.apple.com/library/mac/documentation/Contacts/Reference/CNContact_Class/index.html#//apple_ref/occ/cl/CNContact

NOTE: Since the plugin uses the Contact framework it is supported only on iOS 9.0 and above!

## Credit

All credit to original author [Ryan Lebel](https://github.com/firescript) for creating [nativescript-contacts](https://github.com/firescript/nativescript-contacts).

## License

Apache License Version 2.0
