import { Frame, ImageSource, Utils } from '@nativescript/core';

function share(thingsToShare) {
	const activityController = UIActivityViewController.alloc().initWithActivityItemsApplicationActivities(thingsToShare, null);

	const presentViewController = activityController.popoverPresentationController;
	if (presentViewController) {
		const page = Frame.topmost().currentPage;
		if (page && page.ios.navigationItem.rightBarButtonItems && page.ios.navigationItem.rightBarButtonItems.count > 0) {
			presentViewController.barButtonItem = page.ios.navigationItem.rightBarButtonItems[0];
		} else {
			presentViewController.sourceView = page.ios.view;
		}
	}

	Utils.ios.getVisibleViewController(getRootViewController()).presentViewControllerAnimatedCompletion(activityController, true, null);
}

function shareSocial(type: string, text?: string, url?: string): Promise<void> {
	return new Promise((resolve, reject) => {
		const composeViewController = SLComposeViewController.composeViewControllerForServiceType(type);
		if (text) {
			composeViewController.setInitialText(text);
		}
		if (url) {
			composeViewController.addURL(NSURL.URLWithString(url));
		}
		composeViewController.completionHandler = (result) => {
			console.log(result);
			switch (result) {
				case SLComposeViewControllerResult.Cancelled:
					// ignore
					break;
				case SLComposeViewControllerResult.Done:
					resolve();
					break;
			}
		};
		Utils.ios.getVisibleViewController(getRootViewController()).presentViewControllerAnimatedCompletion(composeViewController, true, null);
	});
}

function getRootViewController() {
	const app = UIApplication.sharedApplication;
	const win = app.keyWindow || (app.windows && app.windows.count > 0 && app.windows.objectAtIndex(0));
	return win.rootViewController;
}

export function shareImage(image: ImageSource) {
	share([image.ios]);
}

export function shareText(text: string) {
	share([text]);
}

export function shareUrl(url, text) {
	share([NSURL.URLWithString(url), text]);
}

export function shareViaTwitter(text?: string, url?: string): Promise<void> {
	return shareSocial(SLServiceTypeTwitter, text, url);
}

export function shareViaFacebook(text?: string, url?: string): Promise<void> {
	return shareSocial(SLServiceTypeFacebook, text, url);
}
