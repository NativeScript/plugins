import { NSCMMKV, initialize } from '@nativescript/mmkv-metal';

initialize();

console.log('initialize');

class Storage {
	getItem(name) {
		return undefined;
	}

	key(id) {
		return undefined;
	}

	setItem(name, value) {}

	removeItem(name) {}

	clear() {}

	get length() {
		return 0;
	}
}

class LocalStorage extends Storage {
	#mmkv: NSCMMKV;
	constructor() {
		super();
		this.#mmkv = new NSCMMKV();
	}
	getItem(name) {
		return this.#mmkv.getString(name);
	}

	key(id) {
		return this.#mmkv.key(id);
	}

	setItem(name, value) {
		if (value === null) {
			this.#mmkv.set(name, 'null');
		} else if (value === undefined) {
			this.#mmkv.set(name, 'undefined');
		} else {
			this.#mmkv.set(name, value.toString());
		}
	}

	removeItem(name) {
		this.#mmkv.delete(name);
	}

	clear() {
		this.#mmkv.clearAll();
	}

	get length(): number {
		return (this.#mmkv as any).count?.() ?? 0;
	}
}

if (!global.Storage) {
	global.Storage = Storage;
}

if (!(global?.localStorage instanceof LocalStorage) || !global.localStorage || (module as any)?.hot) {
	global.localStorage = new LocalStorage();
}

if (!global.sessionStorage) {
	class SessionStorage extends Storage {
		#data = {};
		getItem(name) {
			if (this.#data.hasOwnProperty(name)) {
				return this.#data[name];
			}
			return null;
		}

		key(id) {
			const keys = Object.keys(this.#data);
			if (id >= keys.length) {
				return null;
			}
			return keys[id];
		}

		setItemObject(name, value) {
			this.#data[name] = value;
		}

		setItem(name, value) {
			if (value === null) {
				this.#data[name] = 'null';
			} else if (value === undefined) {
				this.#data[name] = 'undefined';
			} else {
				this.#data[name] = value.toString();
			}
		}

		removeItem(name) {
			if (this.#data[name]) {
				delete this.#data[name];
			}
		}

		clear() {
			this.#data = {};
		}
	}

	global.sessionStorage = new SessionStorage();
}

export default global.localStorage;

if ((module as any)?.hot) {
	const hot = (module as any)?.hot;
	hot?.accept?.();
	hot?.dispose?.(() => {
		global.localStorage = undefined;
	});
}
