import { Observable, EventData, Page, GridLayout, CoreTypes, Screen, Dialogs } from '@nativescript/core';
import { DemoSharedIonicPortals } from '@demo/shared';
import {} from '@nativescript/ionic-portals';
// import { LoadingIndicator } from '@nstudio/nativescript-loading-indicator';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel(page);
}

export class DemoModel extends DemoSharedIonicPortals {
	// Note: can uncomment following to test more with live updates
	// top: GridLayout;
	// progress = new LoadingIndicator();
	// tryThis() {
	// 	if (this.top) {
	// 		// this.top.animate({
	// 		// 	opacity: 0,
	// 		// 	duration: 2000,
	// 		// 	curve: CoreTypes.AnimationCurve.easeInOut
	// 		// });
	// 		if (this.portal) {
	// 			this.top.ios.alpha = 1;
	// 			this.page.actionBarHidden = true;
	// 			UIView.animateWithDurationAnimationsCompletion(2, () => {
	// 				// this.portal.marginTop = 0;
	// 				this.top.ios.alpha = 0;
	// 				// this.portal.marginTop = 150;
	// 				this.portal.ios.frame = CGRectMake(0, 0,Screen.mainScreen.widthDIPs, Screen.mainScreen.heightDIPs)
	// 			}, ()=> {
	// 			})
	// 		}
	// 	}
	// }
	// syncNow() {
	// 	this.progress.show({
	// 		message: 'Syncing Portal to Ionic AppFlow...'
	// 	})
	// 	return new Promise<void>(() => {
	// 		super.syncNow().then(() => {
	// 			setTimeout(() => {
	// 				this.progress.hide();
	// 				Dialogs.confirm({
	// 					title: 'Portal Synced!',
	// 					message: 'Would you like to reload it now?',
	// 					okButtonText: `Yes!`
	// 				}).then(ok => {
	// 					this.reload();
	// 					setTimeout(() => {
	// 						this.tryThis();
	// 					}, 500);
	// 				})
	// 			}, 3000)
	// 		})
	// 	})
	// }
	// loadedTop(args) {
	// 	this.top = args.object;
	// }
	// loadedPortal(args: any): void {
	// 	// args.object.ios.frame = CGRectMake(0, 300,Screen.mainScreen.widthDIPs, Screen.mainScreen.heightDIPs-300)
	// 	super.loadedPortal(args);
	// 	setTimeout(() => {
	// 		args.object.ios.frame = CGRectMake(0, 190,Screen.mainScreen.widthDIPs, Screen.mainScreen.heightDIPs-190)
	// 	})
	// }
}
