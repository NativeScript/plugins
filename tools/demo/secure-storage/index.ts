import { DemoSharedBase } from '../utils';
import { SecureStorage } from '@nativescript/secure-storage';

export class DemoSharedSecureStorage extends DemoSharedBase {
	lastRetrievedValue = '';
	secureStorage = new SecureStorage();

	constructor() {
		super();
	}

	testIt() {
		console.log('test secure-storage!');
	}

	doSetSync() {
		const success = this.secureStorage.setSync({
			key: 'foo',
			value: 'I was set at ' + new Date(),
		});
		console.log('Successfully set a value? ' + success);
	}

	doSet() {
		this.secureStorage
			.set({
				key: 'foo',
				value: 'I was set at ' + new Date(),
			})
			.then(
				(success) => {
					console.log('Successfully set a value? ' + success);
				},
				(err) => {
					console.log(err);
				}
			);
	}

	doGet() {
		this.secureStorage
			.get({
				key: 'foo',
			})
			.then(
				(value) => {
					console.log('Value: ' + value);
					this.lastRetrievedValue = value === null ? '(no value set)' : value;
				},
				(err) => {
					console.log(err);
				}
			);
	}

	doGetSync() {
		const value = this.secureStorage.getSync({
			key: 'foo',
		});
		this.lastRetrievedValue = value === null ? '(no value set)' : value;
	}

	doRemove() {
		this.secureStorage
			.remove({
				key: 'foo',
			})
			.then(
				(success) => {
					console.log('Successfully removed a value? ' + success);
					this.lastRetrievedValue = '';
				},
				(err) => {
					console.log(err);
				}
			);
	}

	doRemoveSync() {
		this.secureStorage.removeSync({
			key: 'foo',
		});
		this.lastRetrievedValue = '';
	}

	doRemoveAll() {
		this.secureStorage.removeAll().then(
			(success) => {
				console.log('Successfully removed all values? ' + success);
				this.lastRetrievedValue = '';
			},
			(err) => {
				console.log(err);
			}
		);
	}

	doRemoveAllSync() {
		this.secureStorage.removeAllSync();
		this.lastRetrievedValue = '';
	}
}
