import { Utils, ViewBase } from '@nativescript/core';
import { FlutterCommon } from './common';

let flutterEngineGroup: FlutterEngineGroup;

export function init() {}

export class Flutter extends FlutterCommon {
	flutterViewController: FlutterViewController;
	platformChannel: FlutterMethodChannel;

	createNativeView() {
		if (!this.id) {
			throw new Error(`Flutter requires an 'id' property set to match your Dart entry point name.`);
		}
		const engine = flutterEngineGroup.makeEngineWithEntrypointLibraryURI(this.id, null);
		GeneratedPluginRegistrant.registerWithRegistry(engine);
		this.flutterViewController = FlutterViewController.alloc().initWithEngineNibNameBundle(engine, null, null);
		return this.flutterViewController.view;
	}

	initNativeView() {
		this.platformChannel = FlutterMethodChannel.methodChannelWithNameBinaryMessenger('nativescript', this.flutterViewController.binaryMessenger);
		this.platformChannel.setMethodCallHandler(this._methodCallHandler.bind(this));
	}

	disposeNativeView() {
		if (this.platformChannel) {
			this.platformChannel.setMethodCallHandler(null);
			this.platformChannel = null;
		}
	}

	invoke(name: string, args?: Array<any>, callback?: (value?: any) => void) {
		if (this.platformChannel) {
			if (callback) {
				this.platformChannel.invokeMethodArgumentsResult(name, args, (result) => {
					this.notify({
						eventName: Flutter.invokeResultEvent,
						object: this,
						data: result,
					});
				});
			} else {
				this.platformChannel.invokeMethodArguments(name, args);
			}
		}
	}

	private _methodCallHandler(call: FlutterMethodCall, result: any) {
		// console.log('Flutter called NativeScript with:', call.method);

		if (this.channel?.[call.method]) {
			const methodArgs = call.arguments ? Utils.dataDeserialize(call.arguments) : null;
			this.channel[call.method](methodArgs).then((value) => {
				// console.log('value:', value);
				result(value);
			});
		}
	}

	onLoaded() {
		super.onLoaded();
		// we do this on onLoaded as the viewControllers are not properly setup on createNativeView
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		let vcParent: ViewBase = this;
		while (vcParent && !vcParent.viewController) {
			vcParent = vcParent.parent;
		}
		const vc = vcParent?.viewController || Utils.ios.getRootViewController();
		if (vc) {
			vc.addChildViewController(this.flutterViewController);
			this.flutterViewController.didMoveToParentViewController(vc);
		}
	}
}

@NativeClass()
export class FlutterDelegate extends FlutterAppDelegate implements UIApplicationDelegate {
	static ObjCProtocols = [UIApplicationDelegate, FlutterAppLifeCycleProvider, FlutterPluginRegistry];

	applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
		flutterEngineGroup = FlutterEngineGroup.alloc().initWithNameProject('ns_flutter_engine', null);
		return true;
	}
}
