import { Application, OrientationChangedEventData } from '@nativescript/core';
import { IonicPortalCommon } from './common';

export class IonicPortalManager {
	static register(apiKey: string) {
		io.ionic.portals.PortalManager.register(apiKey);
	}

	static create(portalId: string, startDir?: string) {
		return io.ionic.portals.PortalManager.newPortal(portalId)
			.setStartDir(startDir || portalId)
			.create();
	}
}

export class IonicPortal extends IonicPortalCommon {
	private _handleOrientationFn: (args: OrientationChangedEventData) => void;

	// @ts-ignore
	get android(): io.ionic.portals.Portal {
		return this.nativeView;
	}

	createNativeView() {
		console.log('createNativeView', this.id);
		if (!this.id) {
			throw new Error(`IonicPortal requires an 'id' property.`);
		}
		// const portal = io.ionic.portals.PortalManager.getPortal(this.id);
		// console.log('portal:', portal);

		// TODO: need Osei help here
		const portalWebView = new io.ionic.portals.PortalView(this._context);
		portalWebView.setPortalId(this.id);

		// // new android.widget.RelativeLayout.LayoutParams(
		// //     android.widget.RelativeLayout.LayoutParams.MATCH_PARENT,
		// //     android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT
		// //   )
		// console.log('portalWebView:', portalWebView);
		// return portalWebView;

		const relativeLayout = new android.widget.RelativeLayout(this._context);
		relativeLayout.setPadding(20, 20, 20, 20);
        
		relativeLayout.addView(<any>portalWebView, new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT));

		relativeLayout.setClipChildren(false);
		relativeLayout.setClipToPadding(false);
		const parent = relativeLayout.getParent() as any;
		if (parent && parent.setClipToPadding) {
			parent.setClipToPadding(false);
		}
		if (parent && parent.setClipChildren) {
			parent.setClipChildren(false);
		}
		return relativeLayout;
	}

	// initNativeView() {
	// 	// console.log('initNativeView:', this.nativeView.subviews.objectAtIndex(0))
	// 	// console.log('initNativeView nativeView.portal:', this.nativeView.portal)
	// 	// ensures the webview fills the area when rotating
	// 	// note: without this, a backgroundcolor set on this {N} view in general would show through proving the webview did not fill the area
	// 	this.nativeView.subviews.objectAtIndex(0).translatesAutoresizingMaskIntoConstraints = false;
	// 	this.nativeView.subviews.objectAtIndex(0).autoresizingMask = UIViewAutoresizing.FlexibleWidth | UIViewAutoresizing.FlexibleHeight;

	// 	// auto-handle orientation
	// 	this._handleOrientationFn = this._handleOrientation.bind(this);
	// 	Application.on(Application.orientationChangedEvent, this._handleOrientationFn);
	// }

	// disposeNativeView() {
	// 	Application.off(Application.orientationChangedEvent, this._handleOrientationFn);
	// 	super.disposeNativeView();
	// }

	// private _handleOrientation(args: OrientationChangedEventData) {
	// 	// ensure updated size is picked up on next tick
	// 	setTimeout(() => {
	// 		// console.log('orientationChangedEvent:', args.newValue);
	// 		// console.log('this.ios.bounds.size.width:', this.ios.bounds.size.width);

	// 		// const wkWebView = this.nativeView.subviews.objectAtIndex(0).subviews.objectAtIndex(0);
	// 		// console.log('wkWebView', wkWebView);
	// 		// wkWebView.frame = this.ios.bounds;

	// 		/**
	// 		 * this.nativeView.subviews.objectAtIndex(0):
	// 		 *   InternalCapWebView
	// 		 * this.nativeView.subviews.objectAtIndex(0).subviews.objectAtIndex(0):
	// 		 * 	 WKWebView
	// 		 */
	// 		// ensure the webview content inside also resizes with view size changes
	// 		this.nativeView.subviews.objectAtIndex(0).subviews.objectAtIndex(0).frame = this.ios.bounds;

	// 		// just experimenting:
	// 		// wkWebView.evaluateJavaScriptCompletionHandler('alert("hello");', () => {
	// 		// 	console.log('location.reload done!')
	// 		// });
	// 	})
	// }
}
