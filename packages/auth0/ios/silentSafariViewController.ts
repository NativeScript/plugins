import { Device } from '@nativescript/core';

@NativeClass()
class SilentSafariViewController extends SFSafariViewController implements SFSafariViewControllerDelegate {
	public onResult: (result: boolean) => void = () => {};

	public static alloc(): SilentSafariViewController {
		return <SilentSafariViewController>super.alloc();
	}

	public initWithURLCallback(URL: NSURL, callback: (result: boolean) => void) {
		if (Number(Device.osVersion.split('.')[0]) >= 11.0) {
			super.initWithURLConfiguration(URL, new SFSafariViewControllerConfiguration());
		} else {
			super.initWithURLEntersReaderIfAvailable(URL, false);
		}

		this.onResult = callback;
		this.delegate = this;
		this.view.alpha = 0.05; // Apple does not allow invisible SafariViews, this is the threshold.
		this.modalPresentationStyle = UIModalPresentationStyle.OverCurrentContext;

		return this;
	}

	public safariViewController(controller: SFSafariViewController, didLoadSuccessfully: boolean) {
		controller.dismissViewControllerAnimatedCompletion(false, () => {
			this.onResult(didLoadSuccessfully);
		});
	}

	public static ObjCProtocols = [SFSafariViewControllerDelegate];
}

export { SilentSafariViewController };
