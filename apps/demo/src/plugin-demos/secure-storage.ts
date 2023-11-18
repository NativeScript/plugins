import { EventData, Observable, Page } from '@nativescript/core';
import { DemoSharedSecureStorage } from '@demo/shared';
import { SecureStorage } from '@nativescript/secure-storage';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSecureStorage {
	private secureStorage: SecureStorage;

	constructor() {
		super();
		this.secureStorage = new SecureStorage();
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
		console.log('go');
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
