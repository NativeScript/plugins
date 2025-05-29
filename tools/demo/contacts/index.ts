import { DemoSharedBase } from '../utils';
import { Contacts } from '@nativescript/contacts';
import { request as requestPermissions } from '@nativescript-community/perms';
import { isIOS } from '@nativescript/core';

export class DemoSharedContacts extends DemoSharedBase {
	result = `Chosen results will display here...`;
	contactId: string;
	contactName: string;

	constructor() {
		super();
		if (global.isAndroid) {
			requestPermissions({
				contacts: {},
				'android.permission.GET_ACCOUNTS': {},
				'android.permission.READ_CONTACTS': {},
				'android.permission.WRITE_CONTACTS': {},
				'android.permission.GLOBAL_SEARCH': {},
			}).then(() => {});
		}
	}
	testIt() {}
	getContact() {
		console.log('getContact');
		Contacts.getContact().then((result) => {
			// console.log('result:', result)
			this._updateResult(result.data);
		});
	}

	getContactById() {
		console.log('getContactById', this.contactId);

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
		console.log('getContactsByName', this.contactName);
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
		console.log('getAllContacts');

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
