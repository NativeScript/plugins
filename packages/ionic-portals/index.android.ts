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
	// @ts-ignore
	get android(): io.ionic.portals.Portal {
		return this.nativeView;
	}

	createNativeView() {
		console.log('createNativeView', this.id);
		if (!this.id) {
			throw new Error(`IonicPortal requires an 'id' property.`);
		}

		// TODO: need Osei help here
		const portalWebView = new io.ionic.portals.PortalView(this._context);
		portalWebView.setPortalId(this.id);

		const relativeLayout = new android.widget.RelativeLayout(this._context);
		relativeLayout.addView(<any>portalWebView, new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.MATCH_PARENT));

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
}
