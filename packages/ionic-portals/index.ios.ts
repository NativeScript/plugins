import { Application, OrientationChangedEventData } from '@nativescript/core';
import { IonicPortalCommon } from './common';

export class IonicPortalManager {
	static registeredPlugins: Array<string>;

	static register(apiKey: string) {
		PortalManager.register(apiKey);
	}

	static create(portalId: string, startDir?: string) {
		return PortalManager.newPortal(portalId)
			.setStartDir(startDir || portalId)
			.create();
	}

	static registerPlugins(names: Array<string>) {
		if (!IonicPortalManager.registeredPlugins) {
			IonicPortalManager.registeredPlugins = [];
		}
		IonicPortalManager.registeredPlugins = names.filter((name) => !IonicPortalManager.registeredPlugins.includes(name));
	}
}

export class IonicPortal extends IonicPortalCommon {
	private _handleOrientationFn: (args: OrientationChangedEventData) => void;

	// @ts-ignore
	get ios(): PortalWebView {
		return this.nativeView;
	}

	createNativeView() {
		if (!this.id) {
			throw new Error(`IonicPortal requires an 'id' property.`);
		}
		const portal = PortalManager.getPortalError(this.id);
		const portalWebView = PortalWebView.alloc().initWithPortal(portal);
		return portalWebView;
	}

	initNativeView() {
		if (IonicPortalManager.registeredPlugins) {
			for (const plugin of IonicPortalManager.registeredPlugins) {
				this.ios.bridge.pluginWithName(plugin);
			}
		}
		// auto-handle orientation
		this._handleOrientationFn = this._updateWebViewSize.bind(this);
		Application.on(Application.orientationChangedEvent, this._handleOrientationFn);
	}

	disposeNativeView() {
		Application.off(Application.orientationChangedEvent, this._handleOrientationFn);
		super.disposeNativeView();
	}

	onLoaded() {
		super.onLoaded();

		this._updateWebViewSize();
	}

	private _updateWebViewSize() {
		// updated size on next tick
		setTimeout(() => {
			// ensure the webview content inside also resizes with view size changes
			this.nativeView.subviews.objectAtIndex(0).subviews.objectAtIndex(0).frame = this.ios.bounds;
		});
	}
}
