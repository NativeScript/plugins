import { GetOptions, SetOptions, RemoveOptions, RemoveAllOptions, SecureStorageCommon } from './common';
import { Utils } from '@nativescript/core';

declare const com: any;

export class SecureStorage extends SecureStorageCommon {
	private hawk: any; // com.orhanobut.hawk.Hawk

	constructor() {
		super();
		this.hawk = com.orhanobut.hawk.Hawk.init(Utils.android.getApplicationContext()).build();
	}

	public get(arg: GetOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			resolve(com.orhanobut.hawk.Hawk.get(arg.key));
		});
	}

	getSync(arg: GetOptions): any {
		return com.orhanobut.hawk.Hawk.get(arg.key);
	}

	public set(arg: SetOptions): Promise<boolean> {
		return new Promise((resolve, reject) => {
			resolve(com.orhanobut.hawk.Hawk.put(arg.key, arg.value));
		});
	}

	setSync(arg: SetOptions): boolean {
		return com.orhanobut.hawk.Hawk.put(arg.key, arg.value);
	}

	public remove(arg: RemoveOptions): Promise<boolean> {
		return new Promise((resolve, reject) => {
			resolve(com.orhanobut.hawk.Hawk.delete(arg.key));
		});
	}

	removeSync(arg: RemoveOptions): boolean {
		return com.orhanobut.hawk.Hawk.delete(arg.key);
	}

	public removeAll(arg?: RemoveAllOptions): Promise<boolean> {
		return new Promise((resolve, reject) => {
			resolve(com.orhanobut.hawk.Hawk.deleteAll());
		});
	}

	public removeAllSync(arg?: RemoveAllOptions): boolean {
		return com.orhanobut.hawk.Hawk.deleteAll();
	}
}
