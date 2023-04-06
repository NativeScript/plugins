import { INSCMMKV } from '.';

function intoData(value: string) {
	return NSString.stringWithString(value).dataUsingEncoding(NSUTF8StringEncoding);
}

function intoString(value: NSData) {
	return NSString.alloc().initWithDataEncoding(value, NSUTF8StringEncoding);
}

export class NSCMMKV implements INSCMMKV {
	#native: MMKV;
	constructor(options?: { id?: string; path?: string; encryptionKey?: string; mode?: 'SINGLE' | 'MULTI' }) {
		MMKV.initializeMMKV(null);
		if (!options) {
			this.#native = MMKV.defaultMMKV();
		} else {
			if (options?.id && options?.encryptionKey && options?.path) {
				this.#native = MMKV.mmkvWithIDCryptKeyRootPath(options?.id, intoData(options?.encryptionKey), options?.path);
			} else if (options?.id && options?.encryptionKey && !options?.path && options?.mode) {
				this.#native = MMKV.mmkvWithIDCryptKeyMode(options?.id, intoData(options?.encryptionKey), options.mode === 'MULTI' ? MMKVMode.MultiProcess : MMKVMode.SingleProcess);
			} else if (options?.id && options?.encryptionKey && !options?.path && !options?.mode) {
				this.#native = MMKV.mmkvWithIDCryptKey(options?.id, intoData(options?.encryptionKey));
			} else if (options?.id && !options?.encryptionKey && options?.path && !options?.mode) {
				this.#native = MMKV.mmkvWithIDRootPath(options?.id, options.path);
			} else if (options?.id && options?.mode && !options?.encryptionKey && !options?.path) {
				this.#native = MMKV.mmkvWithIDMode(options?.id, options.mode === 'MULTI' ? MMKVMode.MultiProcess : MMKVMode.SingleProcess);
			} else if (options?.id && !options?.encryptionKey && !options?.path && !options.mode) {
				this.#native = MMKV.mmkvWithID(options?.id);
			} else if (options?.encryptionKey && !options?.id && !options?.path && !options.mode) {
				const data = intoData(options?.encryptionKey);
				this.#native = MMKV.defaultMMKVWithCryptKey(data);
			} else {
				// throw or return the default instance
				this.#native = MMKV.defaultMMKV();
			}
		}
	}
	get native() {
		return this.#native;
	}

	static isFileValid(id: string, path?: string): boolean {
		if (!path) {
			return MMKV.isFileValid(id);
		} else {
			return MMKV.isFileValidRootPath(id, path);
		}
	}

	contains(key: string): boolean {
		return this.native.containsKey(key);
	}

	set(key: string, value: boolean | string | number | ArrayBuffer) {
		if (typeof value === 'boolean') {
			this.native.setBoolForKey(value, key);
		} else if (typeof value === 'string') {
			this.native.setStringForKey(value, key);
		} else if (typeof value === 'number') {
			this.native.setDoubleForKey(value, key);
		} else if (value instanceof ArrayBuffer) {
			const data = NSData.dataWithData(value as any);
			if (data) {
				this.native.setDataForKey(data, key);
			}
		}
	}

	key(index: number): string | null {
		try {
			const keys = this.native.allKeys();
			return keys.objectAtIndex(index);
		} catch (e) {}
		return null;
	}

	getBoolean(key: string): boolean {
		return this.native.getBoolForKey(key);
	}

	getString(key: string): string {
		return this.native.getStringForKey(key);
	}

	getNumber(key: string): number {
		return this.native.getDoubleForKey(key);
	}

	getBytes(key: string) {
		const bytes = this.native.getDataForKey(key);
		if (!bytes) {
			return null;
		}
		return interop.bufferFromData(bytes);
	}

	clearAll() {
		this.native.clearAll();
	}

	delete(key: string | string[]) {
		if (Array.isArray(key)) {
			this.native.removeValuesForKeys(key);
		} else {
			this.native.removeValueForKey(key);
		}
	}

	get totalSize() {
		return this.native.totalSize();
	}

	get actualSize() {
		return this.native.actualSize();
	}

	count() {
		return this.native.count();
	}

	get keys(): string[] {
		const keys = this.native.allKeys();
		const count = keys.count;
		const ret = [];
		for (let i = 0; i < count; i++) {
			ret.push(keys.objectAtIndex(i));
		}
		return ret;
	}

	clearMemoryCache() {
		this.native.clearMemoryCache();
	}

	close() {
		this.native.close();
	}

	get cryptKey() {
		const key = this.native.cryptKey();
		if (key) {
			return intoString(key) as any;
		}
		return null;
	}

	static get rootPath() {
		return MMKV.mmkvBasePath();
	}

	recrypt(key?: string) {
		if (key) {
			this.native.reKey(intoData(key));
		} else {
			this.native.reKey(null);
		}
	}
}

export function initialize() {
	MMKV.initialize();
}
