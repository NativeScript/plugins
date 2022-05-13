import { IonicPortalCommon } from './common';

declare var com;
export class IonicPortalManager {
	static register(apiKey: string) {
		io.ionic.portals.PortalManager.register(apiKey);
	}

	static create(portalId: string, startDir?: string, plugins?: Array<string>, initialContext?: any) {
		const builder = io.ionic.portals.PortalManager.newPortal(portalId).setStartDir(startDir || portalId);
		if (initialContext) {
			const javaMap = new java.util.Map();
			for (const key in initialContext) {
				javaMap.put(key, initialContext[key]);
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
		if (plugins?.length) {
			// non-official capacitor plugins using full java/kotlin package namespace
			if (!list) {
				list = new java.util.ArrayList();
			}
			for (const name of plugins) {
				// use fully qualified package name
				list.add(java.lang.Class.forName(name));
			}
		}
		if (list) {
			builder.setPlugins(list);
		}
		return builder.create();
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

		const portalWebView = new io.ionic.portals.PortalView(this._context);

		portalWebView.setPortalId(this.id);

		return portalWebView;
	}

	public initNativeView(): void {
		super.initNativeView();
		if (this._androidViewId < 0) {
			this._androidViewId = android.view.View.generateViewId();
		}

		this.nativeViewProtected.setId(this._androidViewId);

		this.nativeViewProtected.loadPortal(this._getFragmentManager() ?? this._context, null);
	}
}
