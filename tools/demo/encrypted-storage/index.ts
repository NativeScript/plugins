import { DemoSharedBase } from '../utils';
import { EncryptedStorage } from '@nativescript/encrypted-storage';
import { alert } from '@nativescript/core';

export class DemoSharedEncryptedStorage extends DemoSharedBase {
	private secureStorage: EncryptedStorage;

	constructor() {
		super();
		this.secureStorage = new EncryptedStorage();
		if (this.secureStorage.init()) {
			console.log('All Good on Initalization');
			this.set('lastRetrievedValue', 'All Good on Initalization');
		} else {
			console.log('No Good on Initalization');
			this.set('lastRetrievedValue', 'No Good on Initalization');
		}
	}

	public doGet() {
		this.secureStorage
			.get({
				key: 'foo',
			})
			.then(
				(value) => {
					console.log('Value: ' + value);
					this.set('lastRetrievedValue', value === null ? '(no value set)' : value);
				},
				(err) => {
					console.log(err);
				}
			);
	}

	public doGetSync() {
		const value = this.secureStorage.getSync({
			key: 'foo',
		});
		this.set('lastRetrievedValue', value === null ? '(no value set)' : value);
	}

	public doSet() {
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

	public doSetSync() {
		const success = this.secureStorage.setSync({
			key: 'foo',
			value: 'I was set at ' + new Date(),
		});
		console.log('Successfully set a value? ' + success);
	}

	public doRemove() {
		this.secureStorage
			.remove({
				key: 'foo',
			})
			.then(
				(success) => {
					console.log('Successfully removed a value? ' + success);
					this.set('lastRetrievedValue', '');
				},
				(err) => {
					console.log(err);
				}
			);
	}

	public doRemoveSync() {
		this.secureStorage.removeSync({
			key: 'foo',
		});
		this.set('lastRetrievedValue', '');
	}

	public doRemoveAll() {
		this.secureStorage.removeAll().then(
			(success) => {
				console.log('Successfully removed all values? ' + success);
				this.set('lastRetrievedValue', '');
			},
			(err) => {
				console.log(err);
			}
		);
	}

	public doRemoveAllSync() {
		this.secureStorage.removeAllSync();
		this.set('lastRetrievedValue', '');
	}

	public doClearAllOnFirstRunSync() {
		const res: boolean = this.secureStorage.clearAllOnFirstRunSync();
		if (res) {
			console.log('Cleared');
			this.set('lastRetrievedValue', '');
		} else {
			alert('Is not the first run ! \n use `removeAllSync` or `removeAll` ;-)');
		}
	}

	public doClearAllOnFirstRun() {
		this.secureStorage.clearAllOnFirstRun().then((res) => {
			if (res) {
				console.log('Cleared');
				this.set('lastRetrievedValue', '');
			} else {
				alert('Is not the first run ! \n use `removeAllSync` or `removeAll` ;-)');
			}
		});
	}

	public doIsFirstRun() {
		this.secureStorage.isFirstRun().then((isFirst) => {
			this.set('isFirstRun', isFirst);
		});
	}

	public doIsFirstRunSync() {
		this.set('isFirstRun', this.secureStorage.isFirstRunSync());
	}
}
