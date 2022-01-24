import { DemoSharedBase } from '../utils';
import { Contacts } from '@nativescript/contacts';
import { requestPermissions } from 'nativescript-permissions';
import { isIOS } from '@nativescript/core';

export class DemoSharedContacts extends DemoSharedBase {
	result = `Chosen results will display here...`;
	contactId: string;
	contactName: string;

	constructor() {
		super();
		if (global.isAndroid) {
			requestPermissions([android.Manifest.permission.GET_ACCOUNTS, android.Manifest.permission.READ_CONTACTS, android.Manifest.permission.WRITE_CONTACTS, android.Manifest.permission.GLOBAL_SEARCH], "I need these permissions because I'm cool").then(() => {}, () => {});
		}
	}

	getContact() {
		Contacts.getContact().then((result) => {
			// console.log('result:', result)
			this._updateResult(result.data);
		});
	}

	getContactById() {
		Contacts.getContactById(this.contactId).then(
			(result) => {
				this._updateResult(result.data[0]);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	contactIdChange(args) {
		this.contactId = args.value;
	}

	getContactsByName() {
		Contacts.getContactsByName(this.contactName).then(
			(result) => {
				this._updateResult(result.data[0]);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	contactNameChange(args) {
		this.contactName = args.value;
	}

	getAllContacts() {
		// uncomment the following and comment the original to test android's all without worker
		// const promise = isIOS ? Contacts.getAllContacts : Contacts.getAllContactsWithoutWorker;
		// promise().then(
		Contacts.getAllContacts().then(
			(result) => {
				this._updateResult(result.data);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	private _updateResult(data: any) {
		this.notifyPropertyChange('result', JSON.stringify(data, null, 2));
	}
}
