import { fromObject } from '@nativescript/core';
import { FlutterCommon } from './common';

let rootFlutterVc: FlutterViewController;

export function init() {}

export class Flutter extends FlutterCommon {
	flutterViewController: FlutterViewController;

	static _events = fromObject({});
	static get events() {
		return this._events;
	}

	createNativeView() {
		this.flutterViewController = FlutterViewController.alloc().initWithEngineNibNameBundle((<any>UIApplication.sharedApplication.delegate)._flutterEngine, null, null);
		rootFlutterVc = this.flutterViewController;
		return this.flutterViewController.view;
	}
}

@NativeClass()
class FlutterDelegate extends UIResponder implements UIApplicationDelegate, FlutterAppLifeCycleProvider {
	_flutterEngine: FlutterEngine;
	_lifeCycleDelegate: FlutterPluginAppLifeCycleDelegate;

	static ObjCProtocols = [UIApplicationDelegate, FlutterAppLifeCycleProvider];

	init() {
		this._lifeCycleDelegate = FlutterPluginAppLifeCycleDelegate.alloc().init();
		return this;
	}

	applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
		this._flutterEngine = FlutterEngine.alloc().initWithNameProject('io.flutter', null);
		this._flutterEngine.runWithEntrypoint(null);
		GeneratedPluginRegistrant.registerWithRegistry(this._flutterEngine);
		return this._lifeCycleDelegate.applicationDidFinishLaunchingWithOptions(application, launchOptions);
	}

	touchesBeganWithEvent(touches: NSSet<UITouch>, event: _UIEvent): void {
		super.touchesBeganWithEvent(touches, event);
	}

	rootFlutterViewController() {
		return rootFlutterVc;
	}

	addApplicationLifeCycleDelegate(delegate: NSObject): void {
		this._lifeCycleDelegate.addDelegate(delegate);
	}
}

export { FlutterDelegate };
