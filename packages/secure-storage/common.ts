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

export abstract class SecureStorageCommon {
	protected static IS_FIRST_RUN = '__IS_FIRST_RUN__';
	private isFirst: boolean;

	constructor() {
		this.isFirst = ApplicationSettings.getBoolean(SecureStorageCommon.IS_FIRST_RUN, true);
		if (this.isFirst) {
			ApplicationSettings.setBoolean(SecureStorageCommon.IS_FIRST_RUN, false);
		}
	}

	abstract get(arg: GetOptions): Promise<any>;

	abstract getSync(arg: GetOptions): any;

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
		return new Promise<boolean>((resolve, reject) => {
			resolve(this.isFirstRunSync());
		});
	}

	public clearAllOnFirstRun(): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
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
