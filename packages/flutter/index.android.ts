import { Utils, fromObject } from '@nativescript/core';

import { FlutterChannelType, FlutterCommon } from './common';

function makeFragmentName(viewId: number): string {
	return 'android:flutter:' + viewId;
}

let didInit = false;
let flutterEngine: io.flutter.embedding.engine.FlutterEngine;
let channel: io.flutter.plugin.common.MethodChannel;
let listener;
let MethodCallClazz: java.lang.Class<io.flutter.plugin.common.MethodCall>;
let argumentsMethod;
const channelMethods = new Map();
export function init() {
	if (!didInit) {
		// todo remove remove after fixing runtime;
		MethodCallClazz = java.lang.Class.forName('io.flutter.plugin.common.MethodCall');
		argumentsMethod = MethodCallClazz.getDeclaredMethod('arguments', []);

		flutterEngine = new io.flutter.embedding.engine.FlutterEngine(Utils.android.getApplicationContext());
		flutterEngine.getDartExecutor().executeDartEntrypoint(io.flutter.embedding.engine.dart.DartExecutor.DartEntrypoint.createDefault());
		io.flutter.embedding.engine.FlutterEngineCache.getInstance().put('default_nativescript', flutterEngine);
		io.flutter.embedding.engine.plugins.util.GeneratedPluginRegister.registerGeneratedPlugins(flutterEngine);
		channel = new io.flutter.plugin.common.MethodChannel(flutterEngine.getDartExecutor().getBinaryMessenger(), 'nativescript');
		listener = new io.flutter.plugin.common.MethodChannel.MethodCallHandler({
			onMethodCall(call: io.flutter.plugin.common.MethodCall, result: io.flutter.plugin.common.MethodChannel.Result) {
				const method = channelMethods.get(call.method);
				if (method) {
					const args = argumentsMethod.invoke(call, null); //call.arguments();
					const methodArgs = args ? Utils.dataDeserialize(args) : null;

					method(methodArgs).then((value) => {
						console.log('value:', value);
						result.success(value);
					});
				} else {
					result.notImplemented();
				}
			},
		});

		channel.setMethodCallHandler(listener);

		didInit = true;
	}
}

export class Flutter extends FlutterCommon {
	_fragment;
	_androidViewId: number = -1;
	_activityCallbacks: android.app.Application.ActivityLifecycleCallbacks;

	static _events = fromObject({});
	static get events() {
		return this._events;
	}

	createNativeView(): Object {
		return new android.widget.FrameLayout(this._context);
	}

	_channel: FlutterChannelType;

	//@ts-ignore
	get channel(): FlutterChannelType {
		return this._channel;
	}

	set channel(value: FlutterChannelType) {
		if (this._channel) {
			Object.keys(this._channel).forEach((key) => {
				channelMethods.delete(key);
			});
		}
		this._channel = value;
		if (value) {
			Object.keys(value).forEach((key) => {
				const val = value[key];
				channelMethods.set(key, val);
			});
		}
	}

	initNativeView(): void {
		super.initNativeView();
		if (this._androidViewId < 0) {
			this._androidViewId = android.view.View.generateViewId();
		}

		/*
		const ref = new WeakRef(this);
		Application.android.on('activityNewIntent', args =>{
			this._fragment?.onNewIntent?.(args.intent)
		});
		Application.android.on('activityRequestPermissions', args =>{
			this._fragment?.onRequestPermissionsResult(
				args.requestCode,
				args.permissions,
				args.grantResults
			);
		});
		this._activityCallbacks = new android.app.Application.ActivityLifecycleCallbacks(<any>{
			onActivityPostResumed(param0, param1?) {
				const owner = ref.get();
				if(owner){
					owner._fragment?.onPostResume?.();
				}
			}
		});

		(Application.android.startActivity as android.app.Activity).registerActivityLifecycleCallbacks(
			this._activityCallbacks
		);

		*/

		this.nativeViewProtected.setId(this._androidViewId);

		const fm = this._getFragmentManager() as androidx.fragment.app.FragmentManager;

		//this._fragment = io.flutter.embedding.android.FlutterFragment.createDefault() as any;

		this._fragment = io.flutter.embedding.android.FlutterFragment.withCachedEngine('default_nativescript').build() as any;

		const name = makeFragmentName(this._androidViewId);

		const tr = fm.beginTransaction();

		tr.replace(this._androidViewId, this._fragment as any, name);

		tr.commit();
	}

	invoke(name: string, args?: Array<any>, callback?: (value?: any) => void) {
		if (callback) {
			const result = new io.flutter.plugin.common.MethodChannel.Result({
				success(param0: any) {},
				error(param0: string, param1: string, param2: any): void {},
				notImplemented(): void {},
			});

			// this.notify({
			// 	eventName: Flutter.invokeResultEvent,
			// 	object: this,
			// 	data: result,
			// });

			channel.invokeMethod(name, args, result);
		} else {
			channel.invokeMethod(name, Utils.dataSerialize(args, true));
		}
	}
}
