import { Application, OrientationChangedEventData } from '@nativescript/core';
import { IonicPortalCommon } from './common';

export class IonicPortalManager {
	static register(apiKey: string) {
		PortalManager.register(apiKey);
	}

	static create(portalId: string, startDir?: string, plugins?: Array<string>, initialContext?: any) {
		const builder = PortalManager.newPortal(portalId).setStartDir(startDir || portalId);
		if (initialContext) {
			builder.setInitialContext(initialContext);
		}
		return builder.create();
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
