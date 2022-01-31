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
	}

	public onLoaded(): void {
		super.onLoaded();
		this.nativeViewProtected.loadPortal(this._context, null);
	}
}
