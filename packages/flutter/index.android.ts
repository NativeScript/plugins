import { Application, Observable, Utils, fromObject } from '@nativescript/core';
import { FlutterCommon } from './common';

function makeFragmentName(viewId: number): string {
	return 'android:flutter:' + viewId;
}

let didInit = false;
let flutterEngine: io.flutter.embedding.engine.FlutterEngine;
let channel: io.flutter.plugin.common.MethodChannel;
let listener;
const instances = new Map();
export function init() {
	if (!didInit) {
		flutterEngine = new io.flutter.embedding.engine.FlutterEngine(Utils.android.getApplicationContext());
		flutterEngine.getDartExecutor().executeDartEntrypoint(io.flutter.embedding.engine.dart.DartExecutor.DartEntrypoint.createDefault());
		io.flutter.embedding.engine.FlutterEngineCache.getInstance().put('default_nativescript', flutterEngine);
		io.flutter.embedding.engine.plugins.util.GeneratedPluginRegister.registerGeneratedPlugins(flutterEngine);
		channel = new io.flutter.plugin.common.MethodChannel(flutterEngine.getDartExecutor().getBinaryMessenger(), 'nativescript');
		listener = new io.flutter.plugin.common.MethodChannel.MethodCallHandler({
			onMethodCall(call: io.flutter.plugin.common.MethodCall, result: io.flutter.plugin.common.MethodChannel.Result) {
				const method = call.method;
				if (method.startsWith('__notify:')) {
					try {
						const eventName = method.replace('__notify:', '');
						Flutter.events.notify({
							eventName,
							object: fromObject({}),
							data: Utils.dataDeserialize(call.arguments()),
						});
						result.success(null);
					} catch (error) {
						result.error('1000', error.message, '');
					}
				} else if (method === 'log') {
					console.log(Utils.dataDeserialize(call.arguments()));
				} else {
					const data = Utils.dataDeserialize(call.arguments());
					const instance: string | null = data?.instance;
					if (instance?.startsWith('__nativeNS:')) {
						const ret = eval(instance.replace('__nativeNS:', ''));
						result.success(Utils.dataSerialize(ret, true));
						return;
					} else if (instance?.startsWith('__nativeInstance:')) {
						const id = instance.replace('__nativeInstance:', '');
						const nativeInstance = instances.get(id);
						if (nativeInstance) {
						} else {
						}
					}
					console.log('method', method, 'arguments', call.arguments());
				}
			},
		});

		channel.setMethodCallHandler(listener);

		didInit = true;
	}
}

export class Flutter extends FlutterCommon {
	_fragment: io.flutter.embedding.android.FlutterFragment & androidx.fragment.app.Fragment;
	_androidViewId: number = -1;
	_activityCallbacks: android.app.Application.ActivityLifecycleCallbacks;
	_channel: io.flutter.plugin.common.MethodChannel;

	static _events = fromObject({});
	static get events() {
		return this._events;
	}

	createNativeView(): Object {
		return new android.widget.FrameLayout(this._context);
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

		tr.replace(this._androidViewId, this._fragment, name);

		tr.commitAllowingStateLoss();
	}
}
