import { DemoSharedBase } from '../utils';
import { IonicPortal, IonicPortalManager } from '@nativescript/ionic-portals';
import { CoreTypes, Page, View } from '@nativescript/core';

const ionicWebPortalSampleId = 'ionicWebPortalSample';

export class DemoSharedIonicPortals extends DemoSharedBase {
	portal: IonicPortal;

	constructor(protected page: Page) {
		super();
	}

	syncNow() {
		IonicPortalManager.syncNow(['e29e2c2e'], false, (status) => {
			console.log('sync complete:', status);
		});
	}

	reload() {
		if (this.portal) {
			this.portal.reload();
		}
	}

	testIt() {
		this._bounce().then(() => {
			this._bounce();
		});
	}

	loadedPortal(args) {
		this.portal = args.object;
	}

	private _bounce() {
		return new Promise<void>((resolve) => {
			(<View>this.page.getViewById(ionicWebPortalSampleId))
				.animate({
					translate: { x: 0, y: 75 },
					duration: 500,
					curve: CoreTypes.AnimationCurve.easeInOut,
				})
				.then(() => {
					(<View>this.page.getViewById(ionicWebPortalSampleId))
						.animate({
							translate: { x: 0, y: 0 },
							duration: 500,
							curve: CoreTypes.AnimationCurve.easeInOut,
						})
						.then(() => {
							resolve();
						});
				});
		});
	}
}
