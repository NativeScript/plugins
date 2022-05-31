import { ApplicationSettings } from '@nativescript/core';

export interface SetOptions {
	accessGroup?: string;
	service?: string;
	key: string;
	value: string;
}

export interface GetOptions {
	accessGroup?: string;
	service?: string;
	key: string;
}

export interface RemoveOptions {
	accessGroup?: string;
	service?: string;
	key: string;
}

export interface RemoveAllOptions {
	service?: string;
}
/**
 * Options for the constuction of EncryptedStorage
 */
export interface CreationOptions {
	android?: AndroidCreationOptions;
	ios?: IOSCreationOptions;
}
/**
 * IOS options for the constuction of EncryptedStorage
 */
export interface IOSCreationOptions {
	// defaults to kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly
	accessibilityType?: string;
	//
	disableFallbackToUserDefaults?: boolean;
}

/**
 * Android options for the constuction of EncryptedStorage
 */
export interface AndroidCreationOptions {
	// The name of the shared prefferences file
	fileName?: string;
	// If an error occurs accessing the EncryptedShared Preferences delete the Preferences.
	deleteOnError?: boolean;
}

export abstract class EncryptedStorageCommon {
	protected static IS_FIRST_RUN = '__IS_FIRST_RUN__';
	private isFirst: boolean;

	constructor() {
		this.isFirst = ApplicationSettings.getBoolean(EncryptedStorageCommon.IS_FIRST_RUN, true);
		if (this.isFirst) {
			ApplicationSettings.setBoolean(EncryptedStorageCommon.IS_FIRST_RUN, false);
		}
	}

	/**
	 * Initialize the encrypted storage.
	 * @param options creation options for IOS/Android.
	 * @returns true if successfully initalized.
	 */
	abstract init(options?: CreationOptions): boolean;

	abstract get(arg: GetOptions): Promise<string>;

	abstract getSync(arg: GetOptions): string;

	abstract set(arg: SetOptions): Promise<boolean>;

	abstract setSync(arg: SetOptions): boolean;

	abstract remove(arg: RemoveOptions): Promise<boolean>;

	abstract removeSync(arg: RemoveOptions): boolean;

	abstract removeAll(arg?: RemoveAllOptions): Promise<boolean>;

	abstract removeAllSync(arg?: RemoveAllOptions): boolean;

	public isFirstRunSync(): boolean {
		return this.isFirst;
	}

	public isFirstRun(): Promise<boolean> {
		return new Promise<boolean>((resolve) => {
			resolve(this.isFirstRunSync());
		});
	}

	public clearAllOnFirstRun(): Promise<boolean> {
		return new Promise<boolean>((resolve) => {
			if (this.isFirstRunSync()) {
				this.removeAll();
				resolve(true);
			} else {
				resolve(false);
			}
		});
	}

	public clearAllOnFirstRunSync(): boolean {
		try {
			if (this.isFirstRunSync()) {
				this.removeAllSync();
				return true;
			}
			return false;
		} catch (e) {
			console.log(e);
			return false;
		}
	}
}
