import { FlutterCommon } from './common';

export class Flutter extends FlutterCommon {
	flutterViewController: FlutterViewController;

	createNativeView() {
		this.flutterViewController = FlutterViewController.alloc().initWithProjectNibNameBundle(null, null, null);
		return this.flutterViewController.view;
	}
}
