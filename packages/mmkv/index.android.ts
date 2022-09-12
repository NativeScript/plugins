import { INSCMMKV } from '.';
import { Utils } from '@nativescript/core';
declare function double(value: number);

export class NSCMMKV implements INSCMMKV {
	#native: com.tencent.mmkv.MMKV;
	constructor(options?: { id?: string; path?: string; encryptionKey?: string; mode?: 'SINGLE' | 'MULTI' }) {
		if (!options) {
			this.#native = com.tencent.mmkv.MMKV.defaultMMKV();
		} else {
			if (options?.id && options?.encryptionKey && options?.path) {
				this.#native = com.tencent.mmkv.MMKV.mmkvWithID(options?.id, com.tencent.mmkv.MMKV.SINGLE_PROCESS_MODE, options?.encryptionKey, options?.path);
			} else if (options?.id && options?.encryptionKey && options?.mode) {
				this.#native = com.tencent.mmkv.MMKV.mmkvWithID(options?.id, options.mode === 'MULTI' ? com.tencent.mmkv.MMKV.MULTI_PROCESS_MODE : com.tencent.mmkv.MMKV.SINGLE_PROCESS_MODE, options?.encryptionKey, options?.path || null);
			} else if (options?.id && options?.encryptionKey && !options?.path && !options?.mode) {
				this.#native = com.tencent.mmkv.MMKV.mmkvWithID(options?.id, com.tencent.mmkv.MMKV.SINGLE_PROCESS_MODE, options?.encryptionKey, null);
			} else if (options?.id && !options?.encryptionKey && options?.path && !options?.mode) {
				this.#native = com.tencent.mmkv.MMKV.mmkvWithID(options?.id, options?.path);
			} else if (options?.id && options?.mode && !options?.encryptionKey && !options?.path) {
				this.#native = com.tencent.mmkv.MMKV.mmkvWithID(options?.id, options.mode === 'MULTI' ? com.tencent.mmkv.MMKV.MULTI_PROCESS_MODE : com.tencent.mmkv.MMKV.SINGLE_PROCESS_MODE);
			} else if (options?.id && !options?.encryptionKey && !options?.path && !options.mode) {
				this.#native = com.tencent.mmkv.MMKV.mmkvWithID(options?.id);
			} else if (options?.encryptionKey && !options?.id && !options?.path && !options.mode) {
				this.#native = com.tencent.mmkv.MMKV.defaultMMKV(com.tencent.mmkv.MMKV.SINGLE_PROCESS_MODE, options?.encryptionKey);
			} else {
				// throw or return the default instance
				this.#native = com.tencent.mmkv.MMKV.defaultMMKV();
			}
		}
		return this;
	}

	get native() {
		return this.#native;
	}

	static isFileValid(id: string, path?: string): boolean {
		if (!path) {
			return com.tencent.mmkv.MMKV.isFileValid(id);
		} else {
			return com.tencent.mmkv.MMKV.isFileValid(id, path);
		}
	}

	contains(key: string): boolean {
		return this.native.containsKey(key);
	}

	key(index: number): string | null {
		return this.native.allKeys()[index];
	}

	set(key: string, value: boolean | string | number | ArrayBuffer) {
		if (typeof value === 'boolean' || typeof value === 'string') {
			this.native.encode(key, value as any);
		} else if (typeof value === 'number') {
			this.native.encode(key, double(value));
		} else if (value instanceof ArrayBuffer) {
			if ((value as any)?.nativeObject) {
				const buf = (value as any)?.nativeObject as java.nio.ByteBuffer;
				if (buf.isDirect()) {
					// todo improve :D
					const current = buf.position();
					buf.rewind();
					const size = buf.remaining();
					const array = Array.create('byte', size);
					buf.get(array);
					this.native.encode(key, array);
					buf.position(current);
				} else {
					this.native.encode(key, buf.array());
				}
			} else {
				const buf = java.nio.ByteBuffer.wrap(Array.from(value as any));
				this.native.encode(key, buf.array());
			}
		}
	}

	getBoolean(key: string): boolean | null {
		return this.native.decodeBool(key);
	}

	getString(key: string): string {
		return this.native.decodeString(key);
	}

	getNumber(key: string): number {
		return this.native.decodeFloat(key);
	}

	getBytes(key: string): ArrayBuffer | null {
		const bytes = this.native.decodeBytes(key);
		if (!bytes) {
			return null;
		}
		const buffer = java.nio.ByteBuffer.wrap(bytes);
		return (ArrayBuffer as any).from(buffer);
	}

	putBytes(key: string, value: ArrayBuffer) {
		if (value instanceof ArrayBuffer) {
			this.native.putBytes(key, Array.from(value as any));
		}
	}

	reKey(key?: string): boolean {
		return this.native.reKey(key);
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

	count() {
		return this.native.count();
	}

	get totalSize() {
		return this.native.totalSize();
	}

	get actualSize() {
		return this.native.actualSize();
	}

	get keys(): string[] {
		const keys = this.native.allKeys();
		const count = keys.length;
		const ret = [];
		for (let i = 0; i < count; i++) {
			ret.push(keys[i]);
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
		return this.native.cryptKey();
	}

	static get rootPath() {
		return com.tencent.mmkv.MMKV.getRootDir();
	}

	recrypt(key?: string) {
		this.native.reKey(key || null);
	}
}

export function initialize() {
	com.tencent.mmkv.MMKV.initialize(Utils.android.getApplicationContext());
}
