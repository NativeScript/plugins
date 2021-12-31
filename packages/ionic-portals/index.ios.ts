import { Application, OrientationChangedEventData } from '@nativescript/core';
import { IonicPortalCommon } from './common';

export class IonicPortalManager {

	static register(apiKey: string) {
		PortalManager.register(apiKey);
	}

	static create(portalId: string, startDir?: string) {
		return PortalManager.newPortal(portalId)
			.setStartDir(startDir || portalId)
			.create();
	}
}

export class IonicPortal extends IonicPortalCommon {
	private _handleOrientationFn: (args: OrientationChangedEventData) => void;
	// @ts-ignore
	get ios(): PortalWebView {
		return this.nativeView;
	}

	createNativeView() {
		console.log('createNativeView', this.id)
		if (!this.id) {
			throw new Error(`IonicPortal requires an 'id' property.`)
		}
		const portal = PortalManager.getPortalError(this.id);
		
		// console.log('this.parent:', this.parent);
		// console.log('this.parent.ios.bounds.size.width:', (<CGRect>this.parent.ios.bounds).size.width)
		// console.log('this.parent.ios.bounds.size.height:', (<CGRect>this.parent.ios.bounds).size.height)
		
		// TODO: Experiment with adding a standard init *without* frame handling
		// Then allows portal to be set after init to avoid having to set an initial frame size to see if helps the initial size issue - {N} should be able to size it automatically without manually specifying a frame
		const portalWebView = PortalWebView.alloc().initWithFramePortal(CGRectMake(0, 0, this.parent.ios.bounds.size.width, this.parent.ios.bounds.size.height), portal);
		// portalWebView.autoresizingMask = UIViewAutoresizing.FlexibleWidth | UIViewAutoresizing.FlexibleHeight;
		portalWebView.autoresizingMask = UIViewAutoresizing.FlexibleWidth | UIViewAutoresizing.FlexibleHeight | UIViewAutoresizing.FlexibleTopMargin | UIViewAutoresizing.FlexibleLeftMargin | UIViewAutoresizing.FlexibleRightMargin  | UIViewAutoresizing.FlexibleBottomMargin;
		portalWebView.autoresizesSubviews = true;
		return portalWebView;
	}

	initNativeView() {
		// console.log('initNativeView:', this.nativeView.subviews.objectAtIndex(0))
		// console.log('initNativeView nativeView.portal:', this.nativeView.portal)
		// ensures the webview fills the area when rotating
		// note: without this, a backgroundcolor set on this {N} view in general would show through proving the webview did not fill the area
		this.nativeView.subviews.objectAtIndex(0).translatesAutoresizingMaskIntoConstraints = false;
		this.nativeView.subviews.objectAtIndex(0).autoresizingMask = UIViewAutoresizing.FlexibleWidth | UIViewAutoresizing.FlexibleHeight;

		// auto-handle orientation
		this._handleOrientationFn = this._handleOrientation.bind(this);
		Application.on(Application.orientationChangedEvent, this._handleOrientationFn);
	}

	disposeNativeView() {
		Application.off(Application.orientationChangedEvent, this._handleOrientationFn);
		super.disposeNativeView();
	}

	private _handleOrientation(args: OrientationChangedEventData) {
		// ensure updated size is picked up on next tick
		setTimeout(() => {
			// console.log('orientationChangedEvent:', args.newValue);
			// console.log('this.ios.bounds.size.width:', this.ios.bounds.size.width);

			// const wkWebView = this.nativeView.subviews.objectAtIndex(0).subviews.objectAtIndex(0);
			// console.log('wkWebView', wkWebView);
			// wkWebView.frame = this.ios.bounds;

			/**
			 * this.nativeView.subviews.objectAtIndex(0): 
			 *   InternalCapWebView
			 * this.nativeView.subviews.objectAtIndex(0).subviews.objectAtIndex(0):
			 * 	 WKWebView
			 */
			// ensure the webview content inside also resizes with view size changes
			this.nativeView.subviews.objectAtIndex(0).subviews.objectAtIndex(0).frame = this.ios.bounds;

			// just experimenting:
			// wkWebView.evaluateJavaScriptCompletionHandler('alert("hello");', () => {
			// 	console.log('location.reload done!')
			// });
		})
	}
}
