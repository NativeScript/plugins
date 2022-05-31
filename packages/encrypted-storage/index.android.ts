import { Application, knownFolders, Utils } from '@nativescript/core';
import { GetOptions, SetOptions, RemoveOptions, EncryptedStorageCommon, CreationOptions } from './common';
const MasterKeys = androidx.security.crypto.MasterKeys;
const EncryptedSharedPreferences = androidx.security.crypto.EncryptedSharedPreferences;
const DEFAULT_FILE_NAME = 'encrypted_preferences';
export class EncryptedStorage extends EncryptedStorageCommon {
	private sharedPreferences: android.content.SharedPreferences;

	constructor() {
		super();
	}

	init(options?: CreationOptions): boolean {
		this.sharedPreferences = this.createSharedPreferencesRetry(options);
		return this.sharedPreferences != null;
	}

	get(arg: GetOptions): Promise<string> {
		return Promise.resolve(this.getSync(arg));
	}
	getSync(arg: GetOptions) {
		return this.sharedPreferences?.getString(arg.key, null);
	}
	set(arg: SetOptions): Promise<boolean> {
		return Promise.resolve(this.setSync(arg));
	}
	setSync(arg: SetOptions): boolean {
		if (this.sharedPreferences) {
			return this.sharedPreferences?.edit().putString(arg.key, arg.value).commit();
		} else {
			return false;
		}
	}
	remove(arg: RemoveOptions): Promise<boolean> {
		return Promise.resolve(this.removeSync(arg));
	}
	removeSync(arg: RemoveOptions): boolean {
		if (this.sharedPreferences) {
			return this.sharedPreferences.edit().remove(arg.key).commit();
		} else {
			return false;
		}
	}
	removeAll(): Promise<boolean> {
		return Promise.resolve(this.removeAllSync());
	}
	removeAllSync(): boolean {
		if (this.sharedPreferences) {
			return this.sharedPreferences.edit().clear().commit();
		} else {
			return false;
		}
	}

	private createSharedPreferencesRetry(options?: CreationOptions): android.content.SharedPreferences {
		try {
			return this.createSharedPreferences(options?.android?.fileName);
		} catch {
			if (options?.android?.deleteOnError !== false) {
				this.deleteSharedPreferences();

				try {
					return this.createSharedPreferences();
				} catch {
					console.log('Cannot initiate storage');
				}
			}
		}
		return null;
	}

	private createSharedPreferences(filename = DEFAULT_FILE_NAME) {
		const context = Utils.android.getApplicationContext();

		const masterKeyAlias = MasterKeys.getOrCreate(MasterKeys.AES256_GCM_SPEC);
		return EncryptedSharedPreferences.create(
			filename, // fileName
			masterKeyAlias, // masterKeyAlias
			context, // context
			EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV, // prefKeyEncryptionScheme
			EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM // prefvalueEncryptionScheme
		);
	}

	private deleteSharedPreferences() {
		try {
			const context = Application.android.context;
			console.log('deleting preferences');

			context.getSharedPreferences(DEFAULT_FILE_NAME, android.content.Context.MODE_PRIVATE).edit().clear().apply();

			const sharedPrefs = knownFolders.currentApp().getFolder('shared_prefs');
			sharedPrefs.getFile(DEFAULT_FILE_NAME).removeSync();

			const keyStore = java.security.KeyStore.getInstance('AndroidKeyStore');
			keyStore.load(null);
			keyStore.deleteEntry(MasterKeys.AES256_GCM_SPEC.getKeystoreAlias());
		} catch (e) {
			console.log('Error deleting preferences', e);
		}
	}
}
