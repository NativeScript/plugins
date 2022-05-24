import { IonicPortalCommon, IonicPortalManagerCommon } from './common';

declare var com, kotlin;

export class IonicPortalManager extends IonicPortalManagerCommon {
	static register(apiKey: string) {
		io.ionic.portals.PortalManager.register(apiKey);
	}
	static publishTopic(topic: string, data?: any) {
		io.ionic.portals.PortalsPlugin.publish(topic, dataSerialize(data, true));
	}

	static subscribeToTopic(topic: string, callback: (data?: any) => void): number {
		super.subscribeToTopic(topic, callback);
		const that = new WeakRef(this);
		const subscriptionId = io.ionic.portals.PortalsPlugin.subscribe(
			topic,
			new kotlin.jvm.functions.Function1({
				invoke(data) {
					const owner = that.get();
					if (!owner) {
						return;
					}
					if (owner.Listeners && owner.Listeners[topic]) {
						for (const listener of owner.Listeners[topic]) {
							if (data) {
								listener.callback(dataDeserialize(data));
							} else {
								listener.callback();
							}
						}
					}
				},
			})
		);
		this.Listeners[topic].push({
			callback,
			subscriptionId,
		});
		return subscriptionId;
	}

	static unsubscribeFromTopic(topic: string, subscriptionId: number) {
		io.ionic.portals.PortalsPlugin.unsubscribe(topic, subscriptionId);
		super.unsubscribeFromTopic(topic, subscriptionId);
	}
}

export class IonicPortal extends IonicPortalCommon {
	private _androidViewId = -1;

	// @ts-ignore
	get android(): io.ionic.portals.PortalView {
		return this.nativeViewProtected;
	}

	createNativeView() {
		if (!this.id) {
			throw new Error(`IonicPortal requires an 'id' property.`);
		}

		const builder = io.ionic.portals.PortalManager.newPortal(this.id);
		if (IonicPortalManager.InitialContexts && IonicPortalManager.InitialContexts[this.id]) {
			const javaMap = new java.util.HashMap();
			for (const key in IonicPortalManager.InitialContexts[this.id]) {
				javaMap.put(key, dataSerialize(IonicPortalManager.InitialContexts[this.id][key], true));
			}
			builder.setInitialContext(javaMap);
		}
		let list: java.util.ArrayList<any>;
		if (typeof com !== 'undefined' && com?.capacitorjs?.plugins) {
			// auto register all official plugins detected
			list = new java.util.ArrayList();
			const capPluginNamespaces = Object.keys(com.capacitorjs.plugins);
			for (const pluginPackage of capPluginNamespaces) {
				// console.log('--- com.capacitorjs.plugins.', pluginPackage);
				const classNames = Object.keys(com.capacitorjs.plugins[pluginPackage]).filter((name) => {
					return name.endsWith('Plugin');
				});
				// console.log('classNames:', classNames);
				for (let className of classNames) {
					// console.log(' package:', `com.capacitorjs.plugins.${pluginPackage}.${className}`);
					list.add(java.lang.Class.forName(`com.capacitorjs.plugins.${pluginPackage}.${className}`));
				}
			}
		}
		if (IonicPortalManager.AndroidPlugins?.length) {
			// non-official capacitor plugins using full java/kotlin package namespace
			if (!list) {
				list = new java.util.ArrayList();
			}
			for (const name of IonicPortalManager.AndroidPlugins) {
				// use fully qualified package name
				list.add(java.lang.Class.forName(name));
			}
		}
		if (list) {
			builder.setPlugins(list);
		}
		builder.create();

		const portalWebView = new io.ionic.portals.PortalView(this._context);

		portalWebView.setPortalId(this.id);

		return portalWebView;
	}

	initNativeView(): void {
		super.initNativeView();
		if (this._androidViewId < 0) {
			this._androidViewId = android.view.View.generateViewId();
		}

		this.nativeViewProtected.setId(this._androidViewId);

		this.nativeViewProtected.loadPortal(this._getFragmentManager() ?? this._context, null);
	}
}
const dataDeserialize = function (nativeData?: any) {
	if (nativeData === null || typeof nativeData !== 'object') {
		return nativeData;
	}
	let store;

	switch (nativeData.getClass().getName()) {
		case 'java.lang.String': {
			return String(nativeData);
		}

		case 'java.lang.Boolean': {
			return String(nativeData) === 'true';
		}

		case 'java.lang.Float':
		case 'java.lang.Integer':
		case 'java.lang.Long':
		case 'java.lang.Double':
		case 'java.lang.Short': {
			return Number(nativeData);
		}

		case 'org.json.JSONArray': {
			store = [];
			for (let j = 0; j < nativeData.length(); j++) {
				store[j] = dataDeserialize(nativeData.get(j));
			}
			break;
		}
		case 'org.json.JSONObject': {
			store = {};
			let i = nativeData.keys();
			while (i.hasNext()) {
				let key = i.next();
				store[key] = dataDeserialize(nativeData.get(key));
			}
			break;
		}

		case 'androidx.collection.SimpleArrayMap': {
			const count = nativeData.size();
			for (let l = 0; l < count; l++) {
				const key = nativeData.keyAt(l);
				store[key] = dataDeserialize(nativeData.get(key));
			}
			break;
		}

		case 'androidx.collection.ArrayMap':
		case 'android.os.Bundle':
		case 'java.util.HashMap':
		case 'java.util.Map': {
			store = {};
			const keys = nativeData.keySet().toArray();
			for (let k = 0; k < keys.length; k++) {
				const key = keys[k];
				store[key] = dataDeserialize(nativeData.get(key));
			}
			break;
		}

		default:
			if (typeof nativeData === 'object' && nativeData instanceof java.util.List) {
				const array = [];
				const size = nativeData.size();
				for (let i = 0, n = size; i < n; i++) {
					array[i] = dataDeserialize(nativeData.get(i));
				}
				store = array;
			} else {
				store = null;
			}
			break;
	}
	return store;
};

const dataSerialize = function (data?: any, wrapPrimitives?: boolean) {
	let store;
	switch (typeof data) {
		case 'string':
		case 'boolean': {
			if (wrapPrimitives) {
				if (typeof data === 'string') {
					return new java.lang.String(data);
				}
				return new java.lang.Boolean(data);
			}
			return data;
		}
		case 'number': {
			const hasDecimals = numberHasDecimals(data);
			if (numberIs64Bit(data)) {
				if (hasDecimals) {
					return java.lang.Double.valueOf(data);
				} else {
					return java.lang.Long.valueOf(data);
				}
			} else {
				if (hasDecimals) {
					return java.lang.Float.valueOf(data);
				} else {
					return java.lang.Integer.valueOf(data);
				}
			}
		}

		case 'object': {
			if (!data) {
				return null;
			}

			if (data instanceof Date) {
				return new java.util.Date(data.getTime());
			}

			if (Array.isArray(data)) {
				store = new java.util.ArrayList();
				data.forEach((item) => store.add(dataSerialize(item, wrapPrimitives)));
				return store;
			}

			if (data.native) {
				return data.native;
			}

			store = new java.util.HashMap();
			Object.keys(data).forEach((key) => store.put(key, dataSerialize(data[key], wrapPrimitives)));
			return store;
		}

		default:
			return null;
	}
};
const numberHasDecimals = function (value: number): boolean {
	return !(value % 1 === 0);
};

const numberIs64Bit = function (value: number): boolean {
	return value < -Math.pow(2, 31) + 1 || value > Math.pow(2, 31) - 1;
};
