declare module io {
	export module flutter {
		export class BuildConfig {
			public static class: java.lang.Class<io.flutter.BuildConfig>;
			public static DEBUG: boolean;
			public static PROFILE: boolean;
			public static RELEASE: boolean;
			public static JIT_RELEASE: boolean;
		}
	}
}

declare module io {
	export module flutter {
		export class FlutterInjector {
			public static class: java.lang.Class<io.flutter.FlutterInjector>;
			public executorService(): java.util.concurrent.ExecutorService;
			public static instance(): io.flutter.FlutterInjector;
			public flutterLoader(): io.flutter.embedding.engine.loader.FlutterLoader;
			public deferredComponentManager(): io.flutter.embedding.engine.deferredcomponents.DeferredComponentManager;
			public static setInstance(param0: io.flutter.FlutterInjector): void;
			public static reset(): void;
			public getFlutterJNIFactory(): io.flutter.embedding.engine.FlutterJNI.Factory;
		}
		export module FlutterInjector {
			export class Builder {
				public static class: java.lang.Class<io.flutter.FlutterInjector.Builder>;
				public setFlutterLoader(param0: io.flutter.embedding.engine.loader.FlutterLoader): io.flutter.FlutterInjector.Builder;
				public setFlutterJNIFactory(param0: io.flutter.embedding.engine.FlutterJNI.Factory): io.flutter.FlutterInjector.Builder;
				public setExecutorService(param0: java.util.concurrent.ExecutorService): io.flutter.FlutterInjector.Builder;
				public setDeferredComponentManager(param0: io.flutter.embedding.engine.deferredcomponents.DeferredComponentManager): io.flutter.FlutterInjector.Builder;
				public build(): io.flutter.FlutterInjector;
				public constructor();
			}
			export module Builder {
				export class NamedThreadFactory {
					public static class: java.lang.Class<io.flutter.FlutterInjector.Builder.NamedThreadFactory>;
					public newThread(param0: java.lang.Runnable): java.lang.Thread;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export class Log {
			public static class: java.lang.Class<io.flutter.Log>;
			public static ASSERT: number;
			public static DEBUG: number;
			public static ERROR: number;
			public static INFO: number;
			public static VERBOSE: number;
			public static WARN: number;
			public static v(param0: string, param1: string): void;
			public static w(param0: string, param1: string): void;
			public static d(param0: string, param1: string, param2: java.lang.Throwable): void;
			public static i(param0: string, param1: string): void;
			public constructor();
			public static wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
			public static i(param0: string, param1: string, param2: java.lang.Throwable): void;
			public static w(param0: string, param1: string, param2: java.lang.Throwable): void;
			public static println(param0: number, param1: string, param2: string): void;
			public static wtf(param0: string, param1: string): void;
			public static getStackTraceString(param0: java.lang.Throwable): string;
			public static e(param0: string, param1: string, param2: java.lang.Throwable): void;
			public static e(param0: string, param1: string): void;
			public static setLogLevel(param0: number): void;
			public static v(param0: string, param1: string, param2: java.lang.Throwable): void;
			public static d(param0: string, param1: string): void;
		}
	}
}

declare module io {
	export module flutter {
		export module app {
			export class FlutterActivity implements io.flutter.view.FlutterView.Provider, io.flutter.plugin.common.PluginRegistry, io.flutter.app.FlutterActivityDelegate.ViewFactory {
				public static class: java.lang.Class<io.flutter.app.FlutterActivity>;
				/** @deprecated */
				public valuePublishedByPlugin(param0: string): any;
				/** @deprecated */
				public registrarFor(param0: string): io.flutter.plugin.common.PluginRegistry.Registrar;
				public onBackPressed(): void;
				public onPause(): void;
				public valuePublishedByPlugin(param0: string): any;
				public constructor();
				public createFlutterNativeView(): io.flutter.view.FlutterNativeView;
				/** @deprecated */
				public hasPlugin(param0: string): boolean;
				public onStop(): void;
				public registrarFor(param0: string): io.flutter.plugin.common.PluginRegistry.Registrar;
				public onTrimMemory(param0: number): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public hasPlugin(param0: string): boolean;
				public onResume(): void;
				public onLowMemory(): void;
				public onUserLeaveHint(): void;
				public createFlutterView(param0: globalAndroid.content.Context): io.flutter.view.FlutterView;
				public retainFlutterNativeView(): boolean;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public getFlutterView(): io.flutter.view.FlutterView;
				public onStart(): void;
				public onPostResume(): void;
				public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
				public onNewIntent(param0: globalAndroid.content.Intent): void;
				public onDestroy(): void;
			}
		}
	}
}

declare module io {
	export module flutter {
		export module app {
			export class FlutterActivityDelegate implements io.flutter.app.FlutterActivityEvents, io.flutter.view.FlutterView.Provider, io.flutter.plugin.common.PluginRegistry {
				public static class: java.lang.Class<io.flutter.app.FlutterActivityDelegate>;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
				/** @deprecated */
				public valuePublishedByPlugin(param0: string): any;
				/** @deprecated */
				public registrarFor(param0: string): io.flutter.plugin.common.PluginRegistry.Registrar;
				public onBackPressed(): boolean;
				public onResume(): void;
				public onLowMemory(): void;
				public onPause(): void;
				public onUserLeaveHint(): void;
				public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): boolean;
				public valuePublishedByPlugin(param0: string): any;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				/** @deprecated */
				public hasPlugin(param0: string): boolean;
				public getFlutterView(): io.flutter.view.FlutterView;
				public onStart(): void;
				public onPostResume(): void;
				public constructor(param0: globalAndroid.app.Activity, param1: io.flutter.app.FlutterActivityDelegate.ViewFactory);
				public onNewIntent(param0: globalAndroid.content.Intent): void;
				public onStop(): void;
				public onDestroy(): void;
				public registrarFor(param0: string): io.flutter.plugin.common.PluginRegistry.Registrar;
				public onTrimMemory(param0: number): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public hasPlugin(param0: string): boolean;
			}
			export module FlutterActivityDelegate {
				export class ViewFactory {
					public static class: java.lang.Class<io.flutter.app.FlutterActivityDelegate.ViewFactory>;
					/**
					 * Constructs a new instance of the io.flutter.app.FlutterActivityDelegate$ViewFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { createFlutterView(param0: globalAndroid.content.Context): io.flutter.view.FlutterView; createFlutterNativeView(): io.flutter.view.FlutterNativeView; retainFlutterNativeView(): boolean });
					public constructor();
					public retainFlutterNativeView(): boolean;
					public createFlutterView(param0: globalAndroid.content.Context): io.flutter.view.FlutterView;
					public createFlutterNativeView(): io.flutter.view.FlutterNativeView;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module app {
			export class FlutterActivityEvents implements io.flutter.plugin.common.PluginRegistry.ActivityResultListener, io.flutter.plugin.common.PluginRegistry.RequestPermissionsResultListener {
				public static class: java.lang.Class<io.flutter.app.FlutterActivityEvents>;
				/**
				 * Constructs a new instance of the io.flutter.app.FlutterActivityEvents interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onCreate(param0: globalAndroid.os.Bundle): void; onNewIntent(param0: globalAndroid.content.Intent): void; onPause(): void; onStart(): void; onResume(): void; onPostResume(): void; onDestroy(): void; onStop(): void; onBackPressed(): boolean; onUserLeaveHint(): void; onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean; onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): boolean });
				public constructor();
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
				public onBackPressed(): boolean;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onStart(): void;
				public onPostResume(): void;
				public onNewIntent(param0: globalAndroid.content.Intent): void;
				public onPause(): void;
				public onUserLeaveHint(): void;
				public onStop(): void;
				public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): boolean;
				public onDestroy(): void;
			}
		}
	}
}

declare module io {
	export module flutter {
		export module app {
			export class FlutterApplication {
				public static class: java.lang.Class<io.flutter.app.FlutterApplication>;
				public setCurrentActivity(param0: globalAndroid.app.Activity): void;
				public onCreate(): void;
				public getCurrentActivity(): globalAndroid.app.Activity;
				public constructor();
			}
		}
	}
}

declare module io {
	export module flutter {
		export module app {
			export class FlutterFragmentActivity implements io.flutter.view.FlutterView.Provider, io.flutter.plugin.common.PluginRegistry, io.flutter.app.FlutterActivityDelegate.ViewFactory {
				public static class: java.lang.Class<io.flutter.app.FlutterFragmentActivity>;
				/** @deprecated */
				public valuePublishedByPlugin(param0: string): any;
				/** @deprecated */
				public registrarFor(param0: string): io.flutter.plugin.common.PluginRegistry.Registrar;
				public onBackPressed(): void;
				public onPause(): void;
				public valuePublishedByPlugin(param0: string): any;
				public constructor();
				public createFlutterNativeView(): io.flutter.view.FlutterNativeView;
				/** @deprecated */
				public hasPlugin(param0: string): boolean;
				public onStop(): void;
				public registrarFor(param0: string): io.flutter.plugin.common.PluginRegistry.Registrar;
				public onTrimMemory(param0: number): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public hasPlugin(param0: string): boolean;
				public onLowMemory(): void;
				public onUserLeaveHint(): void;
				public createFlutterView(param0: globalAndroid.content.Context): io.flutter.view.FlutterView;
				public retainFlutterNativeView(): boolean;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public getFlutterView(): io.flutter.view.FlutterView;
				public onStart(): void;
				public onPostResume(): void;
				public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
				public onNewIntent(param0: globalAndroid.content.Intent): void;
				public onDestroy(): void;
			}
		}
	}
}

declare module io {
	export module flutter {
		export module app {
			export class FlutterPlayStoreSplitApplication {
				public static class: java.lang.Class<io.flutter.app.FlutterPlayStoreSplitApplication>;
				public onCreate(): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module flutter {
		export module app {
			export class FlutterPluginRegistry implements io.flutter.plugin.common.PluginRegistry, io.flutter.plugin.common.PluginRegistry.RequestPermissionsResultListener, io.flutter.plugin.common.PluginRegistry.ActivityResultListener, io.flutter.plugin.common.PluginRegistry.NewIntentListener, io.flutter.plugin.common.PluginRegistry.UserLeaveHintListener, io.flutter.plugin.common.PluginRegistry.ViewDestroyListener {
				public static class: java.lang.Class<io.flutter.app.FlutterPluginRegistry>;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
				/** @deprecated */
				public valuePublishedByPlugin(param0: string): any;
				/** @deprecated */
				public registrarFor(param0: string): io.flutter.plugin.common.PluginRegistry.Registrar;
				public onViewDestroy(param0: io.flutter.view.FlutterNativeView): boolean;
				public onNewIntent(param0: globalAndroid.content.Intent): boolean;
				public onUserLeaveHint(): void;
				public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): boolean;
				public valuePublishedByPlugin(param0: string): any;
				public destroy(): void;
				public attach(param0: io.flutter.view.FlutterView, param1: globalAndroid.app.Activity): void;
				public getPlatformViewsController(): io.flutter.plugin.platform.PlatformViewsController;
				/** @deprecated */
				public hasPlugin(param0: string): boolean;
				public constructor(param0: io.flutter.view.FlutterNativeView, param1: globalAndroid.content.Context);
				public onPreEngineRestart(): void;
				public constructor(param0: io.flutter.embedding.engine.FlutterEngine, param1: globalAndroid.content.Context);
				public registrarFor(param0: string): io.flutter.plugin.common.PluginRegistry.Registrar;
				public hasPlugin(param0: string): boolean;
				public detach(): void;
			}
			export module FlutterPluginRegistry {
				export class FlutterRegistrar extends io.flutter.plugin.common.PluginRegistry.Registrar {
					public static class: java.lang.Class<io.flutter.app.FlutterPluginRegistry.FlutterRegistrar>;
					public messenger(): io.flutter.plugin.common.BinaryMessenger;
					public addNewIntentListener(param0: io.flutter.plugin.common.PluginRegistry.NewIntentListener): io.flutter.plugin.common.PluginRegistry.Registrar;
					public activity(): globalAndroid.app.Activity;
					public view(): io.flutter.view.FlutterView;
					public addRequestPermissionsResultListener(param0: io.flutter.plugin.common.PluginRegistry.RequestPermissionsResultListener): io.flutter.plugin.common.PluginRegistry.Registrar;
					public lookupKeyForAsset(param0: string): string;
					public activeContext(): globalAndroid.content.Context;
					public platformViewRegistry(): io.flutter.plugin.platform.PlatformViewRegistry;
					public context(): globalAndroid.content.Context;
					public textures(): io.flutter.view.TextureRegistry;
					public lookupKeyForAsset(param0: string, param1: string): string;
					public addActivityResultListener(param0: io.flutter.plugin.common.PluginRegistry.ActivityResultListener): io.flutter.plugin.common.PluginRegistry.Registrar;
					public addUserLeaveHintListener(param0: io.flutter.plugin.common.PluginRegistry.UserLeaveHintListener): io.flutter.plugin.common.PluginRegistry.Registrar;
					public addViewDestroyListener(param0: io.flutter.plugin.common.PluginRegistry.ViewDestroyListener): io.flutter.plugin.common.PluginRegistry.Registrar;
					public publish(param0: any): io.flutter.plugin.common.PluginRegistry.Registrar;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class AndroidTouchProcessor {
					public static class: java.lang.Class<io.flutter.embedding.android.AndroidTouchProcessor>;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.graphics.Matrix): boolean;
					public onGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public constructor(param0: io.flutter.embedding.engine.renderer.FlutterRenderer, param1: boolean);
				}
				export module AndroidTouchProcessor {
					export class PointerChange {
						public static class: java.lang.Class<io.flutter.embedding.android.AndroidTouchProcessor.PointerChange>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.android.AndroidTouchProcessor$PointerChange interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
						public static REMOVE: number;
						public static PAN_ZOOM_END: number;
						public static UP: number;
						public static PAN_ZOOM_START: number;
						public static ADD: number;
						public static DOWN: number;
						public static MOVE: number;
						public static PAN_ZOOM_UPDATE: number;
						public static CANCEL: number;
						public static HOVER: number;
					}
					export class PointerDeviceKind {
						public static class: java.lang.Class<io.flutter.embedding.android.AndroidTouchProcessor.PointerDeviceKind>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.android.AndroidTouchProcessor$PointerDeviceKind interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
						public static STYLUS: number;
						public static TRACKPAD: number;
						public static TOUCH: number;
						public static UNKNOWN: number;
						public static INVERTED_STYLUS: number;
						public static MOUSE: number;
					}
					export class PointerSignalKind {
						public static class: java.lang.Class<io.flutter.embedding.android.AndroidTouchProcessor.PointerSignalKind>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.android.AndroidTouchProcessor$PointerSignalKind interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
						public static SCALE: number;
						public static UNKNOWN: number;
						public static NONE: number;
						public static SCROLL: number;
						public static SCROLL_INERTIA_CANCEL: number;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class DrawableSplashScreen extends io.flutter.embedding.android.SplashScreen {
					public static class: java.lang.Class<io.flutter.embedding.android.DrawableSplashScreen>;
					public transitionToFlutter(param0: java.lang.Runnable): void;
					public createSplashView(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle): globalAndroid.view.View;
					public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.widget.ImageView.ScaleType, param2: number);
					public doesSplashViewRememberItsTransition(): boolean;
					public saveSplashScreenState(): globalAndroid.os.Bundle;
					public constructor(param0: globalAndroid.graphics.drawable.Drawable);
				}
				export module DrawableSplashScreen {
					export class DrawableSplashScreenView {
						public static class: java.lang.Class<io.flutter.embedding.android.DrawableSplashScreen.DrawableSplashScreenView>;
						public constructor(param0: globalAndroid.content.Context);
						public setSplashDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.widget.ImageView.ScaleType): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setSplashDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class ExclusiveAppComponent<T> extends java.lang.Object {
					public static class: java.lang.Class<io.flutter.embedding.android.ExclusiveAppComponent<any>>;
					/**
					 * Constructs a new instance of the io.flutter.embedding.android.ExclusiveAppComponent<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { detachFromFlutterEngine(): void; getAppComponent(): T });
					public constructor();
					public detachFromFlutterEngine(): void;
					public getAppComponent(): T;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class FlutterActivity implements io.flutter.embedding.android.FlutterActivityAndFragmentDelegate.Host {
					public static class: java.lang.Class<io.flutter.embedding.android.FlutterActivity>;
					public static FLUTTER_VIEW_ID: number;
					public delegate: io.flutter.embedding.android.FlutterActivityAndFragmentDelegate;
					public static createDefaultIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
					public getDartEntrypointArgs(): java.util.List<string>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onDestroy(): void;
					public getActivity(): globalAndroid.app.Activity;
					public getFlutterEngine(): io.flutter.embedding.engine.FlutterEngine;
					public onStart(): void;
					public onFlutterSurfaceViewCreated(param0: io.flutter.embedding.android.FlutterSurfaceView): void;
					public detachFromFlutterEngine(): void;
					public onNewIntent(param0: globalAndroid.content.Intent): void;
					public constructor();
					public popSystemNavigator(): boolean;
					public unregisterOnBackInvokedCallback(): void;
					public getContext(): globalAndroid.content.Context;
					public getRenderMode(): io.flutter.embedding.android.RenderMode;
					public getMetaData(): globalAndroid.os.Bundle;
					public shouldDestroyEngineWithHost(): boolean;
					public getDartEntrypointLibraryUri(): string;
					public release(): void;
					public updateSystemUiOverlays(): void;
					public onResume(): void;
					public getDartEntrypointFunctionName(): string;
					public onTrimMemory(param0: number): void;
					public provideSplashScreen(): io.flutter.embedding.android.SplashScreen;
					public onFlutterTextureViewCreated(param0: io.flutter.embedding.android.FlutterTextureView): void;
					public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
					public getBackgroundMode(): io.flutter.embedding.android.FlutterActivityLaunchConfigs.BackgroundMode;
					public provideFlutterEngine(param0: globalAndroid.content.Context): io.flutter.embedding.engine.FlutterEngine;
					public onBackPressed(): void;
					public providePlatformPlugin(param0: globalAndroid.app.Activity, param1: io.flutter.embedding.engine.FlutterEngine): io.flutter.plugin.platform.PlatformPlugin;
					public static withCachedEngine(param0: string): io.flutter.embedding.android.FlutterActivity.CachedEngineIntentBuilder;
					public shouldRestoreAndSaveState(): boolean;
					public registerOnBackInvokedCallback(): void;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public getCachedEngineId(): string;
					public shouldHandleDeeplinking(): boolean;
					public getFlutterShellArgs(): io.flutter.embedding.engine.FlutterShellArgs;
					public onPostResume(): void;
					public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					public onFlutterUiDisplayed(): void;
					public configureFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void;
					public cleanUpFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void;
					public getLifecycle(): androidx.lifecycle.Lifecycle;
					public shouldAttachEngineToActivity(): boolean;
					public onFlutterUiNoLongerDisplayed(): void;
					public getInitialRoute(): string;
					public static withNewEngine(): io.flutter.embedding.android.FlutterActivity.NewEngineIntentBuilder;
					public onPause(): void;
					public getAppBundlePath(): string;
					public getTransparencyMode(): io.flutter.embedding.android.TransparencyMode;
					public onUserLeaveHint(): void;
					public onStop(): void;
					public getExclusiveAppComponent(): io.flutter.embedding.android.ExclusiveAppComponent<globalAndroid.app.Activity>;
					public shouldDispatchAppLifecycleState(): boolean;
				}
				export module FlutterActivity {
					export class CachedEngineIntentBuilder {
						public static class: java.lang.Class<io.flutter.embedding.android.FlutterActivity.CachedEngineIntentBuilder>;
						public constructor(param0: java.lang.Class<any>, param1: string);
						public backgroundMode(param0: io.flutter.embedding.android.FlutterActivityLaunchConfigs.BackgroundMode): io.flutter.embedding.android.FlutterActivity.CachedEngineIntentBuilder;
						public build(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
						public destroyEngineWithActivity(param0: boolean): io.flutter.embedding.android.FlutterActivity.CachedEngineIntentBuilder;
					}
					export class NewEngineIntentBuilder {
						public static class: java.lang.Class<io.flutter.embedding.android.FlutterActivity.NewEngineIntentBuilder>;
						public backgroundMode(param0: io.flutter.embedding.android.FlutterActivityLaunchConfigs.BackgroundMode): io.flutter.embedding.android.FlutterActivity.NewEngineIntentBuilder;
						public constructor(param0: java.lang.Class<any>);
						public initialRoute(param0: string): io.flutter.embedding.android.FlutterActivity.NewEngineIntentBuilder;
						public build(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
						public dartEntrypointArgs(param0: java.util.List<string>): io.flutter.embedding.android.FlutterActivity.NewEngineIntentBuilder;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class FlutterActivityAndFragmentDelegate extends io.flutter.embedding.android.ExclusiveAppComponent<globalAndroid.app.Activity> {
					public static class: java.lang.Class<io.flutter.embedding.android.FlutterActivityAndFragmentDelegate>;
					public getAppComponent(): globalAndroid.app.Activity;
					public detachFromFlutterEngine(): void;
					public getAppComponent(): any;
				}
				export module FlutterActivityAndFragmentDelegate {
					export class DelegateFactory {
						public static class: java.lang.Class<io.flutter.embedding.android.FlutterActivityAndFragmentDelegate.DelegateFactory>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.android.FlutterActivityAndFragmentDelegate$DelegateFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { createDelegate(param0: io.flutter.embedding.android.FlutterActivityAndFragmentDelegate.Host): io.flutter.embedding.android.FlutterActivityAndFragmentDelegate });
						public constructor();
						public createDelegate(param0: io.flutter.embedding.android.FlutterActivityAndFragmentDelegate.Host): io.flutter.embedding.android.FlutterActivityAndFragmentDelegate;
					}
					export class Host implements io.flutter.embedding.android.SplashScreenProvider, io.flutter.embedding.android.FlutterEngineProvider, io.flutter.embedding.android.FlutterEngineConfigurator, io.flutter.plugin.platform.PlatformPlugin.PlatformPluginDelegate {
						public static class: java.lang.Class<io.flutter.embedding.android.FlutterActivityAndFragmentDelegate.Host>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.android.FlutterActivityAndFragmentDelegate$Host interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getContext(): globalAndroid.content.Context;
							shouldHandleDeeplinking(): boolean;
							getActivity(): globalAndroid.app.Activity;
							getLifecycle(): androidx.lifecycle.Lifecycle;
							getFlutterShellArgs(): io.flutter.embedding.engine.FlutterShellArgs;
							getCachedEngineId(): string;
							shouldDestroyEngineWithHost(): boolean;
							detachFromFlutterEngine(): void;
							getDartEntrypointFunctionName(): string;
							getDartEntrypointLibraryUri(): string;
							getDartEntrypointArgs(): java.util.List<string>;
							getAppBundlePath(): string;
							getInitialRoute(): string;
							getRenderMode(): io.flutter.embedding.android.RenderMode;
							getTransparencyMode(): io.flutter.embedding.android.TransparencyMode;
							getExclusiveAppComponent(): io.flutter.embedding.android.ExclusiveAppComponent<globalAndroid.app.Activity>;
							provideSplashScreen(): io.flutter.embedding.android.SplashScreen;
							provideFlutterEngine(param0: globalAndroid.content.Context): io.flutter.embedding.engine.FlutterEngine;
							providePlatformPlugin(param0: globalAndroid.app.Activity, param1: io.flutter.embedding.engine.FlutterEngine): io.flutter.plugin.platform.PlatformPlugin;
							configureFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void;
							cleanUpFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void;
							shouldAttachEngineToActivity(): boolean;
							onFlutterSurfaceViewCreated(param0: io.flutter.embedding.android.FlutterSurfaceView): void;
							onFlutterTextureViewCreated(param0: io.flutter.embedding.android.FlutterTextureView): void;
							onFlutterUiDisplayed(): void;
							onFlutterUiNoLongerDisplayed(): void;
							shouldRestoreAndSaveState(): boolean;
							updateSystemUiOverlays(): void;
							shouldDispatchAppLifecycleState(): boolean;
							provideSplashScreen(): io.flutter.embedding.android.SplashScreen;
							provideFlutterEngine(param0: globalAndroid.content.Context): io.flutter.embedding.engine.FlutterEngine;
							configureFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void;
							cleanUpFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void;
							popSystemNavigator(): boolean;
						});
						public constructor();
						public getFlutterShellArgs(): io.flutter.embedding.engine.FlutterShellArgs;
						public onFlutterSurfaceViewCreated(param0: io.flutter.embedding.android.FlutterSurfaceView): void;
						public detachFromFlutterEngine(): void;
						public getAppBundlePath(): string;
						public getCachedEngineId(): string;
						public shouldRestoreAndSaveState(): boolean;
						public shouldHandleDeeplinking(): boolean;
						public shouldDestroyEngineWithHost(): boolean;
						public getDartEntrypointLibraryUri(): string;
						public provideFlutterEngine(param0: globalAndroid.content.Context): io.flutter.embedding.engine.FlutterEngine;
						public getDartEntrypointFunctionName(): string;
						public provideSplashScreen(): io.flutter.embedding.android.SplashScreen;
						public getActivity(): globalAndroid.app.Activity;
						public configureFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void;
						public onFlutterTextureViewCreated(param0: io.flutter.embedding.android.FlutterTextureView): void;
						public getRenderMode(): io.flutter.embedding.android.RenderMode;
						public updateSystemUiOverlays(): void;
						public getContext(): globalAndroid.content.Context;
						public providePlatformPlugin(param0: globalAndroid.app.Activity, param1: io.flutter.embedding.engine.FlutterEngine): io.flutter.plugin.platform.PlatformPlugin;
						public getDartEntrypointArgs(): java.util.List<string>;
						public shouldAttachEngineToActivity(): boolean;
						public getTransparencyMode(): io.flutter.embedding.android.TransparencyMode;
						public cleanUpFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void;
						public getInitialRoute(): string;
						public onFlutterUiNoLongerDisplayed(): void;
						public getExclusiveAppComponent(): io.flutter.embedding.android.ExclusiveAppComponent<globalAndroid.app.Activity>;
						public onFlutterUiDisplayed(): void;
						public getLifecycle(): androidx.lifecycle.Lifecycle;
						public shouldDispatchAppLifecycleState(): boolean;
						public popSystemNavigator(): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class FlutterActivityLaunchConfigs {
					public static class: java.lang.Class<io.flutter.embedding.android.FlutterActivityLaunchConfigs>;
				}
				export module FlutterActivityLaunchConfigs {
					export class BackgroundMode {
						public static class: java.lang.Class<io.flutter.embedding.android.FlutterActivityLaunchConfigs.BackgroundMode>;
						public static opaque: io.flutter.embedding.android.FlutterActivityLaunchConfigs.BackgroundMode;
						public static transparent: io.flutter.embedding.android.FlutterActivityLaunchConfigs.BackgroundMode;
						public static values(): androidNative.Array<io.flutter.embedding.android.FlutterActivityLaunchConfigs.BackgroundMode>;
						public static valueOf(param0: string): io.flutter.embedding.android.FlutterActivityLaunchConfigs.BackgroundMode;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class FlutterEngineConfigurator {
					public static class: java.lang.Class<io.flutter.embedding.android.FlutterEngineConfigurator>;
					/**
					 * Constructs a new instance of the io.flutter.embedding.android.FlutterEngineConfigurator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { configureFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void; cleanUpFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void });
					public constructor();
					public configureFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void;
					public cleanUpFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class FlutterEngineProvider {
					public static class: java.lang.Class<io.flutter.embedding.android.FlutterEngineProvider>;
					/**
					 * Constructs a new instance of the io.flutter.embedding.android.FlutterEngineProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { provideFlutterEngine(param0: globalAndroid.content.Context): io.flutter.embedding.engine.FlutterEngine });
					public constructor();
					public provideFlutterEngine(param0: globalAndroid.content.Context): io.flutter.embedding.engine.FlutterEngine;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class FlutterFragment implements io.flutter.embedding.android.FlutterActivityAndFragmentDelegate.Host, io.flutter.embedding.android.FlutterActivityAndFragmentDelegate.DelegateFactory {
					public static class: java.lang.Class<io.flutter.embedding.android.FlutterFragment>;
					public static FLUTTER_VIEW_ID: number;
					public static ARG_DART_ENTRYPOINT: string;
					public static ARG_DART_ENTRYPOINT_URI: string;
					public static ARG_DART_ENTRYPOINT_ARGS: string;
					public static ARG_INITIAL_ROUTE: string;
					public static ARG_HANDLE_DEEPLINKING: string;
					public static ARG_APP_BUNDLE_PATH: string;
					public static ARG_SHOULD_DELAY_FIRST_ANDROID_VIEW_DRAW: string;
					public static ARG_FLUTTER_INITIALIZATION_ARGS: string;
					public static ARG_FLUTTERVIEW_RENDER_MODE: string;
					public static ARG_FLUTTERVIEW_TRANSPARENCY_MODE: string;
					public static ARG_SHOULD_ATTACH_ENGINE_TO_ACTIVITY: string;
					public static ARG_CACHED_ENGINE_ID: string;
					public static ARG_DESTROY_ENGINE_WITH_FRAGMENT: string;
					public static ARG_ENABLE_STATE_RESTORATION: string;
					public static ARG_SHOULD_AUTOMATICALLY_HANDLE_ON_BACK_PRESSED: string;
					public getDartEntrypointArgs(): java.util.List<string>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public getActivity(): globalAndroid.app.Activity;
					public getFlutterEngine(): io.flutter.embedding.engine.FlutterEngine;
					public onStart(): void;
					public onFlutterSurfaceViewCreated(param0: io.flutter.embedding.android.FlutterSurfaceView): void;
					public detachFromFlutterEngine(): void;
					public onNewIntent(param0: globalAndroid.content.Intent): void;
					public constructor();
					public createDelegate(param0: io.flutter.embedding.android.FlutterActivityAndFragmentDelegate.Host): io.flutter.embedding.android.FlutterActivityAndFragmentDelegate;
					public popSystemNavigator(): boolean;
					public getContext(): globalAndroid.content.Context;
					public onAttach(param0: globalAndroid.content.Context): void;
					public getRenderMode(): io.flutter.embedding.android.RenderMode;
					public shouldDestroyEngineWithHost(): boolean;
					public getDartEntrypointLibraryUri(): string;
					public updateSystemUiOverlays(): void;
					public onResume(): void;
					public getDartEntrypointFunctionName(): string;
					public onTrimMemory(param0: number): void;
					public provideSplashScreen(): io.flutter.embedding.android.SplashScreen;
					public onFlutterTextureViewCreated(param0: io.flutter.embedding.android.FlutterTextureView): void;
					public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
					public static withNewEngine(): io.flutter.embedding.android.FlutterFragment.NewEngineFragmentBuilder;
					public provideFlutterEngine(param0: globalAndroid.content.Context): io.flutter.embedding.engine.FlutterEngine;
					public onBackPressed(): void;
					public providePlatformPlugin(param0: globalAndroid.app.Activity, param1: io.flutter.embedding.engine.FlutterEngine): io.flutter.plugin.platform.PlatformPlugin;
					public shouldRestoreAndSaveState(): boolean;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public getCachedEngineId(): string;
					public shouldHandleDeeplinking(): boolean;
					public getFlutterShellArgs(): io.flutter.embedding.engine.FlutterShellArgs;
					public static withCachedEngine(param0: string): io.flutter.embedding.android.FlutterFragment.CachedEngineFragmentBuilder;
					public onPostResume(): void;
					public onDetach(): void;
					public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					public onFlutterUiDisplayed(): void;
					public configureFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void;
					public cleanUpFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void;
					public onDestroyView(): void;
					public shouldAttachEngineToActivity(): boolean;
					public getLifecycle(): androidx.lifecycle.Lifecycle;
					public onFlutterUiNoLongerDisplayed(): void;
					public static createDefault(): io.flutter.embedding.android.FlutterFragment;
					public getInitialRoute(): string;
					public onPause(): void;
					public getAppBundlePath(): string;
					public getTransparencyMode(): io.flutter.embedding.android.TransparencyMode;
					public onUserLeaveHint(): void;
					public onStop(): void;
					public getExclusiveAppComponent(): io.flutter.embedding.android.ExclusiveAppComponent<globalAndroid.app.Activity>;
					public shouldDispatchAppLifecycleState(): boolean;
				}
				export module FlutterFragment {
					export class ActivityCallThrough {
						public static class: java.lang.Class<io.flutter.embedding.android.FlutterFragment.ActivityCallThrough>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.android.FlutterFragment$ActivityCallThrough interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
					export class CachedEngineFragmentBuilder {
						public static class: java.lang.Class<io.flutter.embedding.android.FlutterFragment.CachedEngineFragmentBuilder>;
						public shouldAutomaticallyHandleOnBackPressed(param0: boolean): io.flutter.embedding.android.FlutterFragment.CachedEngineFragmentBuilder;
						public shouldDelayFirstAndroidViewDraw(param0: boolean): io.flutter.embedding.android.FlutterFragment.CachedEngineFragmentBuilder;
						public constructor(param0: java.lang.Class<any>, param1: string);
						public createArgs(): globalAndroid.os.Bundle;
						public build(): io.flutter.embedding.android.FlutterFragment;
						public shouldAttachEngineToActivity(param0: boolean): io.flutter.embedding.android.FlutterFragment.CachedEngineFragmentBuilder;
						public handleDeeplinking(param0: java.lang.Boolean): io.flutter.embedding.android.FlutterFragment.CachedEngineFragmentBuilder;
						public destroyEngineWithFragment(param0: boolean): io.flutter.embedding.android.FlutterFragment.CachedEngineFragmentBuilder;
						public transparencyMode(param0: io.flutter.embedding.android.TransparencyMode): io.flutter.embedding.android.FlutterFragment.CachedEngineFragmentBuilder;
						public renderMode(param0: io.flutter.embedding.android.RenderMode): io.flutter.embedding.android.FlutterFragment.CachedEngineFragmentBuilder;
					}
					export class NewEngineFragmentBuilder {
						public static class: java.lang.Class<io.flutter.embedding.android.FlutterFragment.NewEngineFragmentBuilder>;
						public constructor();
						public renderMode(param0: io.flutter.embedding.android.RenderMode): io.flutter.embedding.android.FlutterFragment.NewEngineFragmentBuilder;
						public shouldAttachEngineToActivity(param0: boolean): io.flutter.embedding.android.FlutterFragment.NewEngineFragmentBuilder;
						public flutterShellArgs(param0: io.flutter.embedding.engine.FlutterShellArgs): io.flutter.embedding.android.FlutterFragment.NewEngineFragmentBuilder;
						public build(): io.flutter.embedding.android.FlutterFragment;
						public transparencyMode(param0: io.flutter.embedding.android.TransparencyMode): io.flutter.embedding.android.FlutterFragment.NewEngineFragmentBuilder;
						public dartLibraryUri(param0: string): io.flutter.embedding.android.FlutterFragment.NewEngineFragmentBuilder;
						public shouldAutomaticallyHandleOnBackPressed(param0: boolean): io.flutter.embedding.android.FlutterFragment.NewEngineFragmentBuilder;
						public constructor(param0: java.lang.Class<any>);
						public createArgs(): globalAndroid.os.Bundle;
						public dartEntrypoint(param0: string): io.flutter.embedding.android.FlutterFragment.NewEngineFragmentBuilder;
						public appBundlePath(param0: string): io.flutter.embedding.android.FlutterFragment.NewEngineFragmentBuilder;
						public dartEntrypointArgs(param0: java.util.List<string>): io.flutter.embedding.android.FlutterFragment.NewEngineFragmentBuilder;
						public initialRoute(param0: string): io.flutter.embedding.android.FlutterFragment.NewEngineFragmentBuilder;
						public handleDeeplinking(param0: java.lang.Boolean): io.flutter.embedding.android.FlutterFragment.NewEngineFragmentBuilder;
						public shouldDelayFirstAndroidViewDraw(param0: boolean): io.flutter.embedding.android.FlutterFragment.NewEngineFragmentBuilder;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class FlutterFragmentActivity implements io.flutter.embedding.android.SplashScreenProvider, io.flutter.embedding.android.FlutterEngineProvider, io.flutter.embedding.android.FlutterEngineConfigurator {
					public static class: java.lang.Class<io.flutter.embedding.android.FlutterFragmentActivity>;
					public static FRAGMENT_CONTAINER_ID: number;
					public static createDefaultIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
					public getDartEntrypointArgs(): java.util.List<string>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onBackPressed(): void;
					public provideRootLayout(param0: globalAndroid.content.Context): globalAndroid.widget.FrameLayout;
					public static withCachedEngine(param0: string): io.flutter.embedding.android.FlutterFragmentActivity.CachedEngineIntentBuilder;
					public getFlutterEngine(): io.flutter.embedding.engine.FlutterEngine;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public shouldHandleDeeplinking(): boolean;
					public getCachedEngineId(): string;
					public onNewIntent(param0: globalAndroid.content.Intent): void;
					public constructor();
					public onPostResume(): void;
					public configureFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void;
					public createFlutterFragment(): io.flutter.embedding.android.FlutterFragment;
					public cleanUpFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void;
					public getMetaData(): globalAndroid.os.Bundle;
					public getRenderMode(): io.flutter.embedding.android.RenderMode;
					public shouldDestroyEngineWithHost(): boolean;
					public getDartEntrypointLibraryUri(): string;
					public shouldAttachEngineToActivity(): boolean;
					public getDartEntrypointFunctionName(): string;
					public onTrimMemory(param0: number): void;
					public provideSplashScreen(): io.flutter.embedding.android.SplashScreen;
					public getInitialRoute(): string;
					public getAppBundlePath(): string;
					public onUserLeaveHint(): void;
					public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
					public getBackgroundMode(): io.flutter.embedding.android.FlutterActivityLaunchConfigs.BackgroundMode;
					public static withNewEngine(): io.flutter.embedding.android.FlutterFragmentActivity.NewEngineIntentBuilder;
					public provideFlutterEngine(param0: globalAndroid.content.Context): io.flutter.embedding.engine.FlutterEngine;
				}
				export module FlutterFragmentActivity {
					export class CachedEngineIntentBuilder {
						public static class: java.lang.Class<io.flutter.embedding.android.FlutterFragmentActivity.CachedEngineIntentBuilder>;
						public constructor(param0: java.lang.Class<any>, param1: string);
						public build(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
						public destroyEngineWithActivity(param0: boolean): io.flutter.embedding.android.FlutterFragmentActivity.CachedEngineIntentBuilder;
						public backgroundMode(param0: io.flutter.embedding.android.FlutterActivityLaunchConfigs.BackgroundMode): io.flutter.embedding.android.FlutterFragmentActivity.CachedEngineIntentBuilder;
					}
					export class NewEngineIntentBuilder {
						public static class: java.lang.Class<io.flutter.embedding.android.FlutterFragmentActivity.NewEngineIntentBuilder>;
						public constructor(param0: java.lang.Class<any>);
						public build(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
						public dartEntrypointArgs(param0: java.util.List<string>): io.flutter.embedding.android.FlutterFragmentActivity.NewEngineIntentBuilder;
						public initialRoute(param0: string): io.flutter.embedding.android.FlutterFragmentActivity.NewEngineIntentBuilder;
						public backgroundMode(param0: io.flutter.embedding.android.FlutterActivityLaunchConfigs.BackgroundMode): io.flutter.embedding.android.FlutterFragmentActivity.NewEngineIntentBuilder;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class FlutterImageView implements io.flutter.embedding.engine.renderer.RenderSurface {
					public static class: java.lang.Class<io.flutter.embedding.android.FlutterImageView>;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public resizeIfNeeded(param0: number, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: io.flutter.embedding.android.FlutterImageView.SurfaceKind);
					public getSurface(): globalAndroid.view.Surface;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getImageReader(): globalAndroid.media.ImageReader;
					public pause(): void;
					public closeImageReader(): void;
					public getAttachedRenderer(): io.flutter.embedding.engine.renderer.FlutterRenderer;
					public attachToRenderer(param0: io.flutter.embedding.engine.renderer.FlutterRenderer): void;
					public detachFromRenderer(): void;
					public acquireLatestImage(): boolean;
				}
				export module FlutterImageView {
					export class SurfaceKind {
						public static class: java.lang.Class<io.flutter.embedding.android.FlutterImageView.SurfaceKind>;
						public static background: io.flutter.embedding.android.FlutterImageView.SurfaceKind;
						public static overlay: io.flutter.embedding.android.FlutterImageView.SurfaceKind;
						public static valueOf(param0: string): io.flutter.embedding.android.FlutterImageView.SurfaceKind;
						public static values(): androidNative.Array<io.flutter.embedding.android.FlutterImageView.SurfaceKind>;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class FlutterPlayStoreSplitApplication {
					public static class: java.lang.Class<io.flutter.embedding.android.FlutterPlayStoreSplitApplication>;
					public onCreate(): void;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class FlutterSplashView {
					public static class: java.lang.Class<io.flutter.embedding.android.FlutterSplashView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public displayFlutterViewWithSplash(param0: io.flutter.embedding.android.FlutterView, param1: io.flutter.embedding.android.SplashScreen): void;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module FlutterSplashView {
					export class SavedState {
						public static class: java.lang.Class<io.flutter.embedding.android.FlutterSplashView.SavedState>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<io.flutter.embedding.android.FlutterSplashView.SavedState>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class FlutterSurfaceView implements io.flutter.embedding.engine.renderer.RenderSurface {
					public static class: java.lang.Class<io.flutter.embedding.android.FlutterSurfaceView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context, param1: boolean);
					public pause(): void;
					public getAttachedRenderer(): io.flutter.embedding.engine.renderer.FlutterRenderer;
					public attachToRenderer(param0: io.flutter.embedding.engine.renderer.FlutterRenderer): void;
					public detachFromRenderer(): void;
					public gatherTransparentRegion(param0: globalAndroid.graphics.Region): boolean;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class FlutterTextureView implements io.flutter.embedding.engine.renderer.RenderSurface {
					public static class: java.lang.Class<io.flutter.embedding.android.FlutterTextureView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public pause(): void;
					public setRenderSurface(param0: globalAndroid.view.Surface): void;
					public getAttachedRenderer(): io.flutter.embedding.engine.renderer.FlutterRenderer;
					public attachToRenderer(param0: io.flutter.embedding.engine.renderer.FlutterRenderer): void;
					public detachFromRenderer(): void;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class FlutterView implements io.flutter.plugin.mouse.MouseCursorPlugin.MouseCursorViewDelegate, io.flutter.embedding.android.KeyboardManager.ViewDelegate {
					public static class: java.lang.Class<io.flutter.embedding.android.FlutterView>;
					public onApplyWindowInsets(param0: globalAndroid.view.WindowInsets): globalAndroid.view.WindowInsets;
					public autofill(param0: globalAndroid.util.SparseArray<globalAndroid.view.autofill.AutofillValue>): void;
					public checkInputConnectionProxy(param0: globalAndroid.view.View): boolean;
					public getCurrentImageSurface(): io.flutter.embedding.android.FlutterImageView;
					public onAttachedToWindow(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public revertImageView(param0: java.lang.Runnable): void;
					public addFlutterEngineAttachmentListener(param0: io.flutter.embedding.android.FlutterView.FlutterEngineAttachmentListener): void;
					public getAccessibilityNodeProvider(): globalAndroid.view.accessibility.AccessibilityNodeProvider;
					public detachFromFlutterEngine(): void;
					public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public setPointerIcon(param0: any): void;
					public acquireLatestImageViewFrame(): boolean;
					public createImageView(): io.flutter.embedding.android.FlutterImageView;
					public constructor(param0: globalAndroid.content.Context, param1: io.flutter.embedding.android.FlutterImageView);
					public convertToImageView(): void;
					public setWindowInfoListenerDisplayFeatures(param0: androidx.window.layout.WindowLayoutInfo): void;
					public onDetachedFromWindow(): void;
					public attachOverlaySurfaceToRender(param0: io.flutter.embedding.android.FlutterImageView): void;
					/** @deprecated */
					public constructor(param0: globalAndroid.content.Context, param1: io.flutter.embedding.android.TransparencyMode);
					public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
					public isAttachedToFlutterEngine(): boolean;
					public removeOnFirstFrameRenderedListener(param0: io.flutter.embedding.engine.renderer.FlutterUiDisplayListener): void;
					public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					/** @deprecated */
					public constructor(param0: globalAndroid.content.Context, param1: io.flutter.embedding.android.RenderMode);
					public createWindowInfoRepo(): io.flutter.embedding.android.WindowInfoRepositoryCallbackAdapterWrapper;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
					public findViewByAccessibilityIdTraversal(param0: number): globalAndroid.view.View;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: io.flutter.embedding.android.FlutterTextureView);
					public getAttachedFlutterEngine(): io.flutter.embedding.engine.FlutterEngine;
					public constructor(param0: globalAndroid.content.Context, param1: io.flutter.embedding.android.FlutterSurfaceView);
					public getSystemPointerIcon(param0: number): any;
					public onProvideAutofillVirtualStructure(param0: any, param1: number): void;
					/** @deprecated */
					public constructor(param0: globalAndroid.content.Context, param1: io.flutter.embedding.android.RenderMode, param2: io.flutter.embedding.android.TransparencyMode);
					public fitSystemWindows(param0: globalAndroid.graphics.Rect): boolean;
					public onGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public setVisibility(param0: number): void;
					public getBinaryMessenger(): io.flutter.plugin.common.BinaryMessenger;
					public onTextInputKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
					public addOnFirstFrameRenderedListener(param0: io.flutter.embedding.engine.renderer.FlutterUiDisplayListener): void;
					public redispatch(param0: globalAndroid.view.KeyEvent): void;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public removeFlutterEngineAttachmentListener(param0: io.flutter.embedding.android.FlutterView.FlutterEngineAttachmentListener): void;
					public hasRenderedFirstFrame(): boolean;
					public attachToFlutterEngine(param0: io.flutter.embedding.engine.FlutterEngine): void;
				}
				export module FlutterView {
					export class FlutterEngineAttachmentListener {
						public static class: java.lang.Class<io.flutter.embedding.android.FlutterView.FlutterEngineAttachmentListener>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.android.FlutterView$FlutterEngineAttachmentListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onFlutterEngineAttachedToFlutterView(param0: io.flutter.embedding.engine.FlutterEngine): void; onFlutterEngineDetachedFromFlutterView(): void });
						public constructor();
						public onFlutterEngineDetachedFromFlutterView(): void;
						public onFlutterEngineAttachedToFlutterView(param0: io.flutter.embedding.engine.FlutterEngine): void;
					}
					export class ZeroSides {
						public static class: java.lang.Class<io.flutter.embedding.android.FlutterView.ZeroSides>;
						public static NONE: io.flutter.embedding.android.FlutterView.ZeroSides;
						public static LEFT: io.flutter.embedding.android.FlutterView.ZeroSides;
						public static RIGHT: io.flutter.embedding.android.FlutterView.ZeroSides;
						public static BOTH: io.flutter.embedding.android.FlutterView.ZeroSides;
						public static values(): androidNative.Array<io.flutter.embedding.android.FlutterView.ZeroSides>;
						public static valueOf(param0: string): io.flutter.embedding.android.FlutterView.ZeroSides;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class KeyChannelResponder extends io.flutter.embedding.android.KeyboardManager.Responder {
					public static class: java.lang.Class<io.flutter.embedding.android.KeyChannelResponder>;
					public handleEvent(param0: globalAndroid.view.KeyEvent, param1: io.flutter.embedding.android.KeyboardManager.Responder.OnKeyEventHandledCallback): void;
					public constructor(param0: io.flutter.embedding.engine.systemchannels.KeyEventChannel);
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class KeyData {
					public static class: java.lang.Class<io.flutter.embedding.android.KeyData>;
					public static CHANNEL: string;
					public constructor();
					public constructor(param0: java.nio.ByteBuffer);
				}
				export module KeyData {
					export class Type {
						public static class: java.lang.Class<io.flutter.embedding.android.KeyData.Type>;
						public static kDown: io.flutter.embedding.android.KeyData.Type;
						public static kUp: io.flutter.embedding.android.KeyData.Type;
						public static kRepeat: io.flutter.embedding.android.KeyData.Type;
						public static valueOf(param0: string): io.flutter.embedding.android.KeyData.Type;
						public static values(): androidNative.Array<io.flutter.embedding.android.KeyData.Type>;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class KeyEmbedderResponder extends io.flutter.embedding.android.KeyboardManager.Responder {
					public static class: java.lang.Class<io.flutter.embedding.android.KeyEmbedderResponder>;
					public handleEvent(param0: globalAndroid.view.KeyEvent, param1: io.flutter.embedding.android.KeyboardManager.Responder.OnKeyEventHandledCallback): void;
					public constructor(param0: io.flutter.plugin.common.BinaryMessenger);
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class KeyboardManager extends io.flutter.plugin.editing.InputConnectionAdaptor.KeyboardDelegate {
					public static class: java.lang.Class<io.flutter.embedding.android.KeyboardManager>;
					public responders: androidNative.Array<io.flutter.embedding.android.KeyboardManager.Responder>;
					public constructor(param0: io.flutter.embedding.android.KeyboardManager.ViewDelegate);
					public destroy(): void;
					public handleEvent(param0: globalAndroid.view.KeyEvent): boolean;
				}
				export module KeyboardManager {
					export class CharacterCombiner {
						public static class: java.lang.Class<io.flutter.embedding.android.KeyboardManager.CharacterCombiner>;
						public constructor();
					}
					export class PerEventCallbackBuilder {
						public static class: java.lang.Class<io.flutter.embedding.android.KeyboardManager.PerEventCallbackBuilder>;
						public buildCallback(): io.flutter.embedding.android.KeyboardManager.Responder.OnKeyEventHandledCallback;
					}
					export module PerEventCallbackBuilder {
						export class Callback extends io.flutter.embedding.android.KeyboardManager.Responder.OnKeyEventHandledCallback {
							public static class: java.lang.Class<io.flutter.embedding.android.KeyboardManager.PerEventCallbackBuilder.Callback>;
							public onKeyEventHandled(param0: boolean): void;
						}
					}
					export class Responder {
						public static class: java.lang.Class<io.flutter.embedding.android.KeyboardManager.Responder>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.android.KeyboardManager$Responder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { handleEvent(param0: globalAndroid.view.KeyEvent, param1: io.flutter.embedding.android.KeyboardManager.Responder.OnKeyEventHandledCallback): void });
						public constructor();
						public handleEvent(param0: globalAndroid.view.KeyEvent, param1: io.flutter.embedding.android.KeyboardManager.Responder.OnKeyEventHandledCallback): void;
					}
					export module Responder {
						export class OnKeyEventHandledCallback {
							public static class: java.lang.Class<io.flutter.embedding.android.KeyboardManager.Responder.OnKeyEventHandledCallback>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.android.KeyboardManager$Responder$OnKeyEventHandledCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onKeyEventHandled(param0: boolean): void });
							public constructor();
							public onKeyEventHandled(param0: boolean): void;
						}
					}
					export class ViewDelegate {
						public static class: java.lang.Class<io.flutter.embedding.android.KeyboardManager.ViewDelegate>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.android.KeyboardManager$ViewDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getBinaryMessenger(): io.flutter.plugin.common.BinaryMessenger; onTextInputKeyEvent(param0: globalAndroid.view.KeyEvent): boolean; redispatch(param0: globalAndroid.view.KeyEvent): void });
						public constructor();
						public redispatch(param0: globalAndroid.view.KeyEvent): void;
						public onTextInputKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
						public getBinaryMessenger(): io.flutter.plugin.common.BinaryMessenger;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class KeyboardMap {
					public static class: java.lang.Class<io.flutter.embedding.android.KeyboardMap>;
					public static scanCodeToPhysical: java.util.HashMap<java.lang.Long, java.lang.Long>;
					public static keyCodeToLogical: java.util.HashMap<java.lang.Long, java.lang.Long>;
					public static pressingGoals: androidNative.Array<io.flutter.embedding.android.KeyboardMap.PressingGoal>;
					public static kValueMask: number;
					public static kUnicodePlane: number;
					public static kAndroidPlane: number;
					public static getTogglingGoals(): androidNative.Array<io.flutter.embedding.android.KeyboardMap.TogglingGoal>;
					public constructor();
				}
				export module KeyboardMap {
					export class KeyPair {
						public static class: java.lang.Class<io.flutter.embedding.android.KeyboardMap.KeyPair>;
						public physicalKey: number;
						public logicalKey: number;
						public constructor(param0: number, param1: number);
					}
					export class PressingGoal {
						public static class: java.lang.Class<io.flutter.embedding.android.KeyboardMap.PressingGoal>;
						public mask: number;
						public keys: androidNative.Array<io.flutter.embedding.android.KeyboardMap.KeyPair>;
						public constructor(param0: number, param1: androidNative.Array<io.flutter.embedding.android.KeyboardMap.KeyPair>);
					}
					export class TogglingGoal {
						public static class: java.lang.Class<io.flutter.embedding.android.KeyboardMap.TogglingGoal>;
						public mask: number;
						public physicalKey: number;
						public logicalKey: number;
						public enabled: boolean;
						public constructor(param0: number, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class MotionEventTracker {
					public static class: java.lang.Class<io.flutter.embedding.android.MotionEventTracker>;
					public static getInstance(): io.flutter.embedding.android.MotionEventTracker;
					public track(param0: globalAndroid.view.MotionEvent): io.flutter.embedding.android.MotionEventTracker.MotionEventId;
					public pop(param0: io.flutter.embedding.android.MotionEventTracker.MotionEventId): globalAndroid.view.MotionEvent;
				}
				export module MotionEventTracker {
					export class MotionEventId {
						public static class: java.lang.Class<io.flutter.embedding.android.MotionEventTracker.MotionEventId>;
						public static from(param0: number): io.flutter.embedding.android.MotionEventTracker.MotionEventId;
						public static createUnique(): io.flutter.embedding.android.MotionEventTracker.MotionEventId;
						public getId(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class RenderMode {
					public static class: java.lang.Class<io.flutter.embedding.android.RenderMode>;
					public static surface: io.flutter.embedding.android.RenderMode;
					public static texture: io.flutter.embedding.android.RenderMode;
					public static image: io.flutter.embedding.android.RenderMode;
					public static valueOf(param0: string): io.flutter.embedding.android.RenderMode;
					public static values(): androidNative.Array<io.flutter.embedding.android.RenderMode>;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class SplashScreen {
					public static class: java.lang.Class<io.flutter.embedding.android.SplashScreen>;
					/**
					 * Constructs a new instance of the io.flutter.embedding.android.SplashScreen interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { createSplashView(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle): globalAndroid.view.View; transitionToFlutter(param0: java.lang.Runnable): void; doesSplashViewRememberItsTransition(): boolean; saveSplashScreenState(): globalAndroid.os.Bundle });
					public constructor();
					public transitionToFlutter(param0: java.lang.Runnable): void;
					public createSplashView(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle): globalAndroid.view.View;
					public doesSplashViewRememberItsTransition(): boolean;
					public saveSplashScreenState(): globalAndroid.os.Bundle;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class SplashScreenProvider {
					public static class: java.lang.Class<io.flutter.embedding.android.SplashScreenProvider>;
					/**
					 * Constructs a new instance of the io.flutter.embedding.android.SplashScreenProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { provideSplashScreen(): io.flutter.embedding.android.SplashScreen });
					public constructor();
					public provideSplashScreen(): io.flutter.embedding.android.SplashScreen;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class TransparencyMode {
					public static class: java.lang.Class<io.flutter.embedding.android.TransparencyMode>;
					public static opaque: io.flutter.embedding.android.TransparencyMode;
					public static transparent: io.flutter.embedding.android.TransparencyMode;
					public static values(): androidNative.Array<io.flutter.embedding.android.TransparencyMode>;
					public static valueOf(param0: string): io.flutter.embedding.android.TransparencyMode;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module android {
				export class WindowInfoRepositoryCallbackAdapterWrapper {
					public static class: java.lang.Class<io.flutter.embedding.android.WindowInfoRepositoryCallbackAdapterWrapper>;
					public addWindowLayoutInfoListener(param0: globalAndroid.app.Activity, param1: java.util.concurrent.Executor, param2: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
					public constructor(param0: androidx.window.java.layout.WindowInfoTrackerCallbackAdapter);
					public removeWindowLayoutInfoListener(param0: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export class FlutterEngine {
					public static class: java.lang.Class<io.flutter.embedding.engine.FlutterEngine>;
					public removeEngineLifecycleListener(param0: io.flutter.embedding.engine.FlutterEngine.EngineLifecycleListener): void;
					public constructor(param0: globalAndroid.content.Context, param1: io.flutter.embedding.engine.loader.FlutterLoader, param2: io.flutter.embedding.engine.FlutterJNI, param3: androidNative.Array<string>, param4: boolean);
					public getPlatformChannel(): io.flutter.embedding.engine.systemchannels.PlatformChannel;
					public getSpellCheckChannel(): io.flutter.embedding.engine.systemchannels.SpellCheckChannel;
					public constructor(param0: globalAndroid.content.Context, param1: io.flutter.embedding.engine.loader.FlutterLoader, param2: io.flutter.embedding.engine.FlutterJNI, param3: io.flutter.plugin.platform.PlatformViewsController, param4: androidNative.Array<string>, param5: boolean);
					public getBroadcastReceiverControlSurface(): io.flutter.embedding.engine.plugins.broadcastreceiver.BroadcastReceiverControlSurface;
					public getMouseCursorChannel(): io.flutter.embedding.engine.systemchannels.MouseCursorChannel;
					public getSystemChannel(): io.flutter.embedding.engine.systemchannels.SystemChannel;
					public constructor(param0: globalAndroid.content.Context, param1: androidNative.Array<string>);
					public destroy(): void;
					public getActivityControlSurface(): io.flutter.embedding.engine.plugins.activity.ActivityControlSurface;
					public getAccessibilityChannel(): io.flutter.embedding.engine.systemchannels.AccessibilityChannel;
					public getLocalizationChannel(): io.flutter.embedding.engine.systemchannels.LocalizationChannel;
					public getPlatformViewsController(): io.flutter.plugin.platform.PlatformViewsController;
					public getRestorationChannel(): io.flutter.embedding.engine.systemchannels.RestorationChannel;
					public constructor(param0: globalAndroid.content.Context, param1: androidNative.Array<string>, param2: boolean, param3: boolean);
					public constructor(param0: globalAndroid.content.Context, param1: io.flutter.embedding.engine.loader.FlutterLoader, param2: io.flutter.embedding.engine.FlutterJNI);
					public getDartExecutor(): io.flutter.embedding.engine.dart.DartExecutor;
					public getSettingsChannel(): io.flutter.embedding.engine.systemchannels.SettingsChannel;
					public constructor(param0: globalAndroid.content.Context, param1: io.flutter.embedding.engine.loader.FlutterLoader, param2: io.flutter.embedding.engine.FlutterJNI, param3: io.flutter.plugin.platform.PlatformViewsController, param4: androidNative.Array<string>, param5: boolean, param6: boolean);
					public addEngineLifecycleListener(param0: io.flutter.embedding.engine.FlutterEngine.EngineLifecycleListener): void;
					public constructor(param0: globalAndroid.content.Context, param1: androidNative.Array<string>, param2: boolean);
					public getLifecycleChannel(): io.flutter.embedding.engine.systemchannels.LifecycleChannel;
					public constructor(param0: globalAndroid.content.Context);
					public getDeferredComponentChannel(): io.flutter.embedding.engine.systemchannels.DeferredComponentChannel;
					public getContentProviderControlSurface(): io.flutter.embedding.engine.plugins.contentprovider.ContentProviderControlSurface;
					public getRenderer(): io.flutter.embedding.engine.renderer.FlutterRenderer;
					public getLocalizationPlugin(): io.flutter.plugin.localization.LocalizationPlugin;
					public getPlugins(): io.flutter.embedding.engine.plugins.PluginRegistry;
					public getNavigationChannel(): io.flutter.embedding.engine.systemchannels.NavigationChannel;
					public getTextInputChannel(): io.flutter.embedding.engine.systemchannels.TextInputChannel;
					public getServiceControlSurface(): io.flutter.embedding.engine.plugins.service.ServiceControlSurface;
				}
				export module FlutterEngine {
					export class EngineLifecycleListener {
						public static class: java.lang.Class<io.flutter.embedding.engine.FlutterEngine.EngineLifecycleListener>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.engine.FlutterEngine$EngineLifecycleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onPreEngineRestart(): void; onEngineWillDestroy(): void });
						public constructor();
						public onEngineWillDestroy(): void;
						public onPreEngineRestart(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export class FlutterEngineCache {
					public static class: java.lang.Class<io.flutter.embedding.engine.FlutterEngineCache>;
					public put(param0: string, param1: io.flutter.embedding.engine.FlutterEngine): void;
					public get(param0: string): io.flutter.embedding.engine.FlutterEngine;
					public remove(param0: string): void;
					public static getInstance(): io.flutter.embedding.engine.FlutterEngineCache;
					public clear(): void;
					public contains(param0: string): boolean;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export class FlutterEngineConnectionRegistry implements io.flutter.embedding.engine.plugins.PluginRegistry, io.flutter.embedding.engine.plugins.activity.ActivityControlSurface, io.flutter.embedding.engine.plugins.service.ServiceControlSurface, io.flutter.embedding.engine.plugins.broadcastreceiver.BroadcastReceiverControlSurface, io.flutter.embedding.engine.plugins.contentprovider.ContentProviderControlSurface {
					public static class: java.lang.Class<io.flutter.embedding.engine.FlutterEngineConnectionRegistry>;
					public remove(param0: java.util.Set<java.lang.Class<any>>): void;
					public add(param0: io.flutter.embedding.engine.plugins.FlutterPlugin): void;
					public detachFromBroadcastReceiver(): void;
					public onMoveToForeground(): void;
					public get(param0: java.lang.Class<any>): io.flutter.embedding.engine.plugins.FlutterPlugin;
					public detachFromContentProvider(): void;
					public attachToBroadcastReceiver(param0: globalAndroid.content.BroadcastReceiver, param1: androidx.lifecycle.Lifecycle): void;
					public destroy(): void;
					public onNewIntent(param0: globalAndroid.content.Intent): void;
					public onMoveToBackground(): void;
					public detachFromService(): void;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
					public attachToActivity(param0: io.flutter.embedding.android.ExclusiveAppComponent<globalAndroid.app.Activity>, param1: androidx.lifecycle.Lifecycle): void;
					public detachFromActivity(): void;
					public has(param0: java.lang.Class<any>): boolean;
					public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					public remove(param0: java.lang.Class<any>): void;
					public add(param0: java.util.Set<io.flutter.embedding.engine.plugins.FlutterPlugin>): void;
					public attachToService(param0: globalAndroid.app.Service, param1: androidx.lifecycle.Lifecycle, param2: boolean): void;
					public removeAll(): void;
					public attachToContentProvider(param0: globalAndroid.content.ContentProvider, param1: androidx.lifecycle.Lifecycle): void;
					public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
					public onUserLeaveHint(): void;
					public detachFromActivityForConfigChanges(): void;
					public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): boolean;
				}
				export module FlutterEngineConnectionRegistry {
					export class DefaultFlutterAssets extends io.flutter.embedding.engine.plugins.FlutterPlugin.FlutterAssets {
						public static class: java.lang.Class<io.flutter.embedding.engine.FlutterEngineConnectionRegistry.DefaultFlutterAssets>;
						public getAssetFilePathByName(param0: string): string;
						public getAssetFilePathByName(param0: string, param1: string): string;
						public getAssetFilePathBySubpath(param0: string): string;
						public getAssetFilePathBySubpath(param0: string, param1: string): string;
					}
					export class FlutterEngineActivityPluginBinding extends io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding {
						public static class: java.lang.Class<io.flutter.embedding.engine.FlutterEngineConnectionRegistry.FlutterEngineActivityPluginBinding>;
						public getActivity(): globalAndroid.app.Activity;
						public addActivityResultListener(param0: io.flutter.plugin.common.PluginRegistry.ActivityResultListener): void;
						public addOnUserLeaveHintListener(param0: io.flutter.plugin.common.PluginRegistry.UserLeaveHintListener): void;
						public addOnSaveStateListener(param0: io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding.OnSaveInstanceStateListener): void;
						public removeRequestPermissionsResultListener(param0: io.flutter.plugin.common.PluginRegistry.RequestPermissionsResultListener): void;
						public removeActivityResultListener(param0: io.flutter.plugin.common.PluginRegistry.ActivityResultListener): void;
						public constructor(param0: globalAndroid.app.Activity, param1: androidx.lifecycle.Lifecycle);
						public removeOnNewIntentListener(param0: io.flutter.plugin.common.PluginRegistry.NewIntentListener): void;
						public getLifecycle(): any;
						public addOnNewIntentListener(param0: io.flutter.plugin.common.PluginRegistry.NewIntentListener): void;
						public removeOnSaveStateListener(param0: io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding.OnSaveInstanceStateListener): void;
						public addRequestPermissionsResultListener(param0: io.flutter.plugin.common.PluginRegistry.RequestPermissionsResultListener): void;
						public removeOnUserLeaveHintListener(param0: io.flutter.plugin.common.PluginRegistry.UserLeaveHintListener): void;
					}
					export class FlutterEngineBroadcastReceiverPluginBinding extends io.flutter.embedding.engine.plugins.broadcastreceiver.BroadcastReceiverPluginBinding {
						public static class: java.lang.Class<io.flutter.embedding.engine.FlutterEngineConnectionRegistry.FlutterEngineBroadcastReceiverPluginBinding>;
						public getBroadcastReceiver(): globalAndroid.content.BroadcastReceiver;
					}
					export class FlutterEngineContentProviderPluginBinding extends io.flutter.embedding.engine.plugins.contentprovider.ContentProviderPluginBinding {
						public static class: java.lang.Class<io.flutter.embedding.engine.FlutterEngineConnectionRegistry.FlutterEngineContentProviderPluginBinding>;
						public getContentProvider(): globalAndroid.content.ContentProvider;
					}
					export class FlutterEngineServicePluginBinding extends io.flutter.embedding.engine.plugins.service.ServicePluginBinding {
						public static class: java.lang.Class<io.flutter.embedding.engine.FlutterEngineConnectionRegistry.FlutterEngineServicePluginBinding>;
						public removeOnModeChangeListener(param0: io.flutter.embedding.engine.plugins.service.ServiceAware.OnModeChangeListener): void;
						public addOnModeChangeListener(param0: io.flutter.embedding.engine.plugins.service.ServiceAware.OnModeChangeListener): void;
						public getLifecycle(): any;
						public getService(): globalAndroid.app.Service;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export class FlutterEngineGroup {
					public static class: java.lang.Class<io.flutter.embedding.engine.FlutterEngineGroup>;
					public constructor(param0: globalAndroid.content.Context);
					public createAndRunEngine(param0: globalAndroid.content.Context, param1: io.flutter.embedding.engine.dart.DartExecutor.DartEntrypoint): io.flutter.embedding.engine.FlutterEngine;
					public constructor(param0: globalAndroid.content.Context, param1: androidNative.Array<string>);
					public createAndRunEngine(param0: io.flutter.embedding.engine.FlutterEngineGroup.Options): io.flutter.embedding.engine.FlutterEngine;
					public createAndRunDefaultEngine(param0: globalAndroid.content.Context): io.flutter.embedding.engine.FlutterEngine;
					public createAndRunEngine(param0: globalAndroid.content.Context, param1: io.flutter.embedding.engine.dart.DartExecutor.DartEntrypoint, param2: string): io.flutter.embedding.engine.FlutterEngine;
				}
				export module FlutterEngineGroup {
					export class Options {
						public static class: java.lang.Class<io.flutter.embedding.engine.FlutterEngineGroup.Options>;
						public getAutomaticallyRegisterPlugins(): boolean;
						public setDartEntrypointArgs(param0: java.util.List<string>): io.flutter.embedding.engine.FlutterEngineGroup.Options;
						public setInitialRoute(param0: string): io.flutter.embedding.engine.FlutterEngineGroup.Options;
						public constructor(param0: globalAndroid.content.Context);
						public getContext(): globalAndroid.content.Context;
						public getDartEntrypointArgs(): java.util.List<string>;
						public getWaitForRestorationData(): boolean;
						public getPlatformViewsController(): io.flutter.plugin.platform.PlatformViewsController;
						public setWaitForRestorationData(param0: boolean): io.flutter.embedding.engine.FlutterEngineGroup.Options;
						public getInitialRoute(): string;
						public setDartEntrypoint(param0: io.flutter.embedding.engine.dart.DartExecutor.DartEntrypoint): io.flutter.embedding.engine.FlutterEngineGroup.Options;
						public getDartEntrypoint(): io.flutter.embedding.engine.dart.DartExecutor.DartEntrypoint;
						public setAutomaticallyRegisterPlugins(param0: boolean): io.flutter.embedding.engine.FlutterEngineGroup.Options;
						public setPlatformViewsController(param0: io.flutter.plugin.platform.PlatformViewsController): io.flutter.embedding.engine.FlutterEngineGroup.Options;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export class FlutterJNI {
					public static class: java.lang.Class<io.flutter.embedding.engine.FlutterJNI>;
					public removeEngineLifecycleListener(param0: io.flutter.embedding.engine.FlutterEngine.EngineLifecycleListener): void;
					public isCodePointVariantSelector(param0: number): boolean;
					public detachFromNativeAndReleaseResources(): void;
					public onEndFrame(): void;
					public onSurfaceWindowChanged(param0: globalAndroid.view.Surface): void;
					public destroyOverlaySurfaces(): void;
					public constructor();
					public setPlatformViewsController(param0: io.flutter.plugin.platform.PlatformViewsController): void;
					public cleanupMessageData(param0: number): void;
					public attachToNative(): void;
					public setViewportMetrics(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number, param16: androidNative.Array<number>, param17: androidNative.Array<number>, param18: androidNative.Array<number>): void;
					public loadLibrary(): void;
					public onFirstFrame(): void;
					public updateRefreshRate(): void;
					public dispatchEmptyPlatformMessage(param0: string, param1: number): void;
					public setDeferredComponentManager(param0: io.flutter.embedding.engine.deferredcomponents.DeferredComponentManager): void;
					public onDisplayPlatformView(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack): void;
					public addIsDisplayingFlutterUiListener(param0: io.flutter.embedding.engine.renderer.FlutterUiDisplayListener): void;
					public onSurfaceCreated(param0: globalAndroid.view.Surface): void;
					public isCodePointEmojiModifierBase(param0: number): boolean;
					public isCodePointRegionalIndicator(param0: number): boolean;
					public setRefreshRateFPS(param0: number): void;
					public registerTexture(param0: number, param1: io.flutter.embedding.engine.renderer.SurfaceTextureWrapper): void;
					public onDisplayOverlaySurface(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public setSemanticsEnabled(param0: boolean): void;
					public performNativeAttach(param0: io.flutter.embedding.engine.FlutterJNI): number;
					public setAccessibilityDelegate(param0: io.flutter.embedding.engine.FlutterJNI.AccessibilityDelegate): void;
					public onSurfaceDestroyed(): void;
					public spawn(param0: string, param1: string, param2: string, param3: java.util.List<string>): io.flutter.embedding.engine.FlutterJNI;
					public unregisterTexture(param0: number): void;
					public isCodePointEmojiModifier(param0: number): boolean;
					public static nativeImageHeaderCallback(param0: number, param1: number, param2: number): void;
					public computePlatformResolvedLocale(param0: androidNative.Array<string>): androidNative.Array<string>;
					public onBeginFrame(): void;
					public isCodePointEmoji(param0: number): boolean;
					public deferredComponentInstallFailure(param0: number, param1: string, param2: boolean): void;
					public static getObservatoryUri(): string;
					public setLocalizationPlugin(param0: io.flutter.plugin.localization.LocalizationPlugin): void;
					public createOverlaySurface(): io.flutter.embedding.engine.FlutterOverlaySurface;
					public invokePlatformMessageEmptyResponseCallback(param0: number): void;
					public loadDartDeferredLibrary(param0: number, param1: androidNative.Array<string>): void;
					public removeIsDisplayingFlutterUiListener(param0: io.flutter.embedding.engine.renderer.FlutterUiDisplayListener): void;
					public prefetchDefaultFontManager(): void;
					public getIsSoftwareRenderingEnabled(): boolean;
					public dispatchSemanticsAction(param0: number, param1: number, param2: java.nio.ByteBuffer, param3: number): void;
					public dispatchPointerDataPacket(param0: java.nio.ByteBuffer, param1: number): void;
					public setPlatformMessageHandler(param0: io.flutter.embedding.engine.dart.PlatformMessageHandler): void;
					public notifyLowMemoryWarning(): void;
					public onSurfaceChanged(param0: number, param1: number): void;
					public addEngineLifecycleListener(param0: io.flutter.embedding.engine.FlutterEngine.EngineLifecycleListener): void;
					public requestDartDeferredLibrary(param0: number): void;
					public dispatchSemanticsAction(param0: number, param1: io.flutter.view.AccessibilityBridge.Action): void;
					public handlePlatformMessage(param0: string, param1: java.nio.ByteBuffer, param2: number, param3: number): void;
					public getBitmap(): globalAndroid.graphics.Bitmap;
					public dispatchPlatformMessage(param0: string, param1: java.nio.ByteBuffer, param2: number, param3: number): void;
					public setAsyncWaitForVsyncDelegate(param0: io.flutter.embedding.engine.FlutterJNI.AsyncWaitForVsyncDelegate): void;
					public init(param0: globalAndroid.content.Context, param1: androidNative.Array<string>, param2: string, param3: string, param4: string, param5: number): void;
					/** @deprecated */
					public static nativeLookupCallbackInformation(param0: number): io.flutter.view.FlutterCallbackInformation;
					public runBundleAndSnapshotFromLibrary(param0: string, param1: string, param2: string, param3: globalAndroid.content.res.AssetManager, param4: java.util.List<string>): void;
					public markTextureFrameAvailable(param0: number): void;
					public onVsync(param0: number, param1: number, param2: number): void;
					public invokePlatformMessageResponseCallback(param0: number, param1: java.nio.ByteBuffer, param2: number): void;
					public static decodeImage(param0: java.nio.ByteBuffer, param1: number): globalAndroid.graphics.Bitmap;
					public setAccessibilityFeatures(param0: number): void;
					public isAttached(): boolean;
					public dispatchSemanticsAction(param0: number, param1: io.flutter.view.AccessibilityBridge.Action, param2: any): void;
					public updateJavaAssetManager(param0: globalAndroid.content.res.AssetManager, param1: string): void;
				}
				export module FlutterJNI {
					export class ioflutterembeddingengineFlutterJNIAccessibilityDelegate {
						public static class: java.lang.Class<io.flutter.embedding.engine.FlutterJNI.AccessibilityDelegate>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.engine.FlutterJNI$AccessibilityDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { updateCustomAccessibilityActions(param0: java.nio.ByteBuffer, param1: androidNative.Array<string>): void; updateSemantics(param0: java.nio.ByteBuffer, param1: androidNative.Array<string>, param2: androidNative.Array<java.nio.ByteBuffer>): void });
						public constructor();
						public updateCustomAccessibilityActions(param0: java.nio.ByteBuffer, param1: androidNative.Array<string>): void;
						public updateSemantics(param0: java.nio.ByteBuffer, param1: androidNative.Array<string>, param2: androidNative.Array<java.nio.ByteBuffer>): void;
					}
					export type AccessibilityDelegate = ioflutterembeddingengineFlutterJNIAccessibilityDelegate;
					export class AsyncWaitForVsyncDelegate {
						public static class: java.lang.Class<io.flutter.embedding.engine.FlutterJNI.AsyncWaitForVsyncDelegate>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.engine.FlutterJNI$AsyncWaitForVsyncDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { asyncWaitForVsync(param0: number): void });
						public constructor();
						public asyncWaitForVsync(param0: number): void;
					}
					export class Factory {
						public static class: java.lang.Class<io.flutter.embedding.engine.FlutterJNI.Factory>;
						public constructor();
						public provideFlutterJNI(): io.flutter.embedding.engine.FlutterJNI;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export class FlutterOverlaySurface {
					public static class: java.lang.Class<io.flutter.embedding.engine.FlutterOverlaySurface>;
					public constructor(param0: number, param1: globalAndroid.view.Surface);
					public getId(): number;
					public getSurface(): globalAndroid.view.Surface;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export class FlutterShellArgs {
					public static class: java.lang.Class<io.flutter.embedding.engine.FlutterShellArgs>;
					public static ARG_KEY_TRACE_STARTUP: string;
					public static ARG_TRACE_STARTUP: string;
					public static ARG_KEY_START_PAUSED: string;
					public static ARG_START_PAUSED: string;
					public static ARG_KEY_DISABLE_SERVICE_AUTH_CODES: string;
					public static ARG_DISABLE_SERVICE_AUTH_CODES: string;
					public static ARG_KEY_ENDLESS_TRACE_BUFFER: string;
					public static ARG_ENDLESS_TRACE_BUFFER: string;
					public static ARG_KEY_USE_TEST_FONTS: string;
					public static ARG_USE_TEST_FONTS: string;
					public static ARG_KEY_ENABLE_DART_PROFILING: string;
					public static ARG_ENABLE_DART_PROFILING: string;
					public static ARG_KEY_ENABLE_SOFTWARE_RENDERING: string;
					public static ARG_ENABLE_SOFTWARE_RENDERING: string;
					public static ARG_KEY_SKIA_DETERMINISTIC_RENDERING: string;
					public static ARG_SKIA_DETERMINISTIC_RENDERING: string;
					public static ARG_KEY_TRACE_SKIA: string;
					public static ARG_TRACE_SKIA: string;
					public static ARG_KEY_TRACE_SKIA_ALLOWLIST: string;
					public static ARG_TRACE_SKIA_ALLOWLIST: string;
					public static ARG_KEY_TRACE_SYSTRACE: string;
					public static ARG_TRACE_SYSTRACE: string;
					public static ARG_KEY_ENABLE_IMPELLER: string;
					public static ARG_ENABLE_IMPELLER: string;
					public static ARG_KEY_DUMP_SHADER_SKP_ON_SHADER_COMPILATION: string;
					public static ARG_DUMP_SHADER_SKP_ON_SHADER_COMPILATION: string;
					public static ARG_KEY_CACHE_SKSL: string;
					public static ARG_CACHE_SKSL: string;
					public static ARG_KEY_PURGE_PERSISTENT_CACHE: string;
					public static ARG_PURGE_PERSISTENT_CACHE: string;
					public static ARG_KEY_VERBOSE_LOGGING: string;
					public static ARG_VERBOSE_LOGGING: string;
					public static ARG_KEY_OBSERVATORY_PORT: string;
					public static ARG_OBSERVATORY_PORT: string;
					public static ARG_KEY_DART_FLAGS: string;
					public static ARG_DART_FLAGS: string;
					public static ARG_KEY_MSAA_SAMPLES: string;
					public static ARG_MSAA_SAMPLES: string;
					public add(param0: string): void;
					public static fromIntent(param0: globalAndroid.content.Intent): io.flutter.embedding.engine.FlutterShellArgs;
					public remove(param0: string): void;
					public toArray(): androidNative.Array<string>;
					public constructor(param0: java.util.Set<string>);
					public constructor(param0: androidNative.Array<string>);
					public constructor(param0: java.util.List<string>);
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module dart {
					export class DartExecutor extends io.flutter.plugin.common.BinaryMessenger {
						public static class: java.lang.Class<io.flutter.embedding.engine.dart.DartExecutor>;
						public setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler): void;
						public makeBackgroundTaskQueue(): io.flutter.plugin.common.BinaryMessenger.TaskQueue;
						public disableBufferingIncomingMessages(): void;
						public onDetachedFromJNI(): void;
						public getIsolateServiceId(): string;
						public executeDartEntrypoint(param0: io.flutter.embedding.engine.dart.DartExecutor.DartEntrypoint, param1: java.util.List<string>): void;
						public getBinaryMessenger(): io.flutter.plugin.common.BinaryMessenger;
						/** @deprecated */
						public setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler): void;
						public isExecutingDart(): boolean;
						/** @deprecated */
						public makeBackgroundTaskQueue(param0: io.flutter.plugin.common.BinaryMessenger.TaskQueueOptions): io.flutter.plugin.common.BinaryMessenger.TaskQueue;
						public send(param0: string, param1: java.nio.ByteBuffer): void;
						public enableBufferingIncomingMessages(): void;
						/** @deprecated */
						public disableBufferingIncomingMessages(): void;
						public send(param0: string, param1: java.nio.ByteBuffer, param2: io.flutter.plugin.common.BinaryMessenger.BinaryReply): void;
						public constructor(param0: io.flutter.embedding.engine.FlutterJNI, param1: globalAndroid.content.res.AssetManager);
						public executeDartEntrypoint(param0: io.flutter.embedding.engine.dart.DartExecutor.DartEntrypoint): void;
						public makeBackgroundTaskQueue(param0: io.flutter.plugin.common.BinaryMessenger.TaskQueueOptions): io.flutter.plugin.common.BinaryMessenger.TaskQueue;
						public getPendingChannelResponseCount(): number;
						public notifyLowMemoryWarning(): void;
						public onAttachedToJNI(): void;
						/** @deprecated */
						public setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler, param2: io.flutter.plugin.common.BinaryMessenger.TaskQueue): void;
						/** @deprecated */
						public send(param0: string, param1: java.nio.ByteBuffer): void;
						/** @deprecated */
						public send(param0: string, param1: java.nio.ByteBuffer, param2: io.flutter.plugin.common.BinaryMessenger.BinaryReply): void;
						/** @deprecated */
						public enableBufferingIncomingMessages(): void;
						public executeDartCallback(param0: io.flutter.embedding.engine.dart.DartExecutor.DartCallback): void;
						public setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler, param2: io.flutter.plugin.common.BinaryMessenger.TaskQueue): void;
						public setIsolateServiceIdListener(param0: io.flutter.embedding.engine.dart.DartExecutor.IsolateServiceIdListener): void;
					}
					export module DartExecutor {
						export class DartCallback {
							public static class: java.lang.Class<io.flutter.embedding.engine.dart.DartExecutor.DartCallback>;
							public androidAssetManager: globalAndroid.content.res.AssetManager;
							public pathToBundle: string;
							public callbackHandle: io.flutter.view.FlutterCallbackInformation;
							public constructor(param0: globalAndroid.content.res.AssetManager, param1: string, param2: io.flutter.view.FlutterCallbackInformation);
							public toString(): string;
						}
						export class DartEntrypoint {
							public static class: java.lang.Class<io.flutter.embedding.engine.dart.DartExecutor.DartEntrypoint>;
							public pathToBundle: string;
							public dartEntrypointLibrary: string;
							public dartEntrypointFunctionName: string;
							public static createDefault(): io.flutter.embedding.engine.dart.DartExecutor.DartEntrypoint;
							public hashCode(): number;
							public constructor(param0: string, param1: string);
							public constructor(param0: string, param1: string, param2: string);
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class DefaultBinaryMessenger extends io.flutter.plugin.common.BinaryMessenger {
							public static class: java.lang.Class<io.flutter.embedding.engine.dart.DartExecutor.DefaultBinaryMessenger>;
							public setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler): void;
							public makeBackgroundTaskQueue(): io.flutter.plugin.common.BinaryMessenger.TaskQueue;
							public send(param0: string, param1: java.nio.ByteBuffer): void;
							public disableBufferingIncomingMessages(): void;
							public enableBufferingIncomingMessages(): void;
							public setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler, param2: io.flutter.plugin.common.BinaryMessenger.TaskQueue): void;
							public makeBackgroundTaskQueue(param0: io.flutter.plugin.common.BinaryMessenger.TaskQueueOptions): io.flutter.plugin.common.BinaryMessenger.TaskQueue;
							public send(param0: string, param1: java.nio.ByteBuffer, param2: io.flutter.plugin.common.BinaryMessenger.BinaryReply): void;
						}
						export class IsolateServiceIdListener {
							public static class: java.lang.Class<io.flutter.embedding.engine.dart.DartExecutor.IsolateServiceIdListener>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.dart.DartExecutor$IsolateServiceIdListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onIsolateServiceIdAvailable(param0: string): void });
							public constructor();
							public onIsolateServiceIdAvailable(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module dart {
					export class DartMessenger implements io.flutter.plugin.common.BinaryMessenger, io.flutter.embedding.engine.dart.PlatformMessageHandler {
						public static class: java.lang.Class<io.flutter.embedding.engine.dart.DartMessenger>;
						public setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler): void;
						public send(param0: string, param1: java.nio.ByteBuffer): void;
						public makeBackgroundTaskQueue(): io.flutter.plugin.common.BinaryMessenger.TaskQueue;
						public handlePlatformMessageResponse(param0: number, param1: java.nio.ByteBuffer): void;
						public makeBackgroundTaskQueue(param0: io.flutter.plugin.common.BinaryMessenger.TaskQueueOptions): io.flutter.plugin.common.BinaryMessenger.TaskQueue;
						public disableBufferingIncomingMessages(): void;
						public handleMessageFromDart(param0: string, param1: java.nio.ByteBuffer, param2: number, param3: number): void;
						public enableBufferingIncomingMessages(): void;
						public getPendingChannelResponseCount(): number;
						public setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler, param2: io.flutter.plugin.common.BinaryMessenger.TaskQueue): void;
						public send(param0: string, param1: java.nio.ByteBuffer, param2: io.flutter.plugin.common.BinaryMessenger.BinaryReply): void;
					}
					export module DartMessenger {
						export class BufferedMessageInfo {
							public static class: java.lang.Class<io.flutter.embedding.engine.dart.DartMessenger.BufferedMessageInfo>;
							public message: java.nio.ByteBuffer;
						}
						export class ConcurrentTaskQueue extends io.flutter.embedding.engine.dart.DartMessenger.DartMessengerTaskQueue {
							public static class: java.lang.Class<io.flutter.embedding.engine.dart.DartMessenger.ConcurrentTaskQueue>;
							public dispatch(param0: java.lang.Runnable): void;
						}
						export class DartMessengerTaskQueue {
							public static class: java.lang.Class<io.flutter.embedding.engine.dart.DartMessenger.DartMessengerTaskQueue>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.dart.DartMessenger$DartMessengerTaskQueue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { dispatch(param0: java.lang.Runnable): void });
							public constructor();
							public dispatch(param0: java.lang.Runnable): void;
						}
						export class DefaultTaskQueueFactory extends io.flutter.embedding.engine.dart.DartMessenger.TaskQueueFactory {
							public static class: java.lang.Class<io.flutter.embedding.engine.dart.DartMessenger.DefaultTaskQueueFactory>;
							public makeBackgroundTaskQueue(param0: io.flutter.plugin.common.BinaryMessenger.TaskQueueOptions): io.flutter.embedding.engine.dart.DartMessenger.DartMessengerTaskQueue;
						}
						export class HandlerInfo {
							public static class: java.lang.Class<io.flutter.embedding.engine.dart.DartMessenger.HandlerInfo>;
							public handler: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler;
							public taskQueue: io.flutter.embedding.engine.dart.DartMessenger.DartMessengerTaskQueue;
						}
						export class Reply extends io.flutter.plugin.common.BinaryMessenger.BinaryReply {
							public static class: java.lang.Class<io.flutter.embedding.engine.dart.DartMessenger.Reply>;
							public reply(param0: java.nio.ByteBuffer): void;
						}
						export class SerialTaskQueue extends io.flutter.embedding.engine.dart.DartMessenger.DartMessengerTaskQueue {
							public static class: java.lang.Class<io.flutter.embedding.engine.dart.DartMessenger.SerialTaskQueue>;
							public dispatch(param0: java.lang.Runnable): void;
						}
						export class TaskQueueFactory {
							public static class: java.lang.Class<io.flutter.embedding.engine.dart.DartMessenger.TaskQueueFactory>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.dart.DartMessenger$TaskQueueFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { makeBackgroundTaskQueue(param0: io.flutter.plugin.common.BinaryMessenger.TaskQueueOptions): io.flutter.embedding.engine.dart.DartMessenger.DartMessengerTaskQueue });
							public constructor();
							public makeBackgroundTaskQueue(param0: io.flutter.plugin.common.BinaryMessenger.TaskQueueOptions): io.flutter.embedding.engine.dart.DartMessenger.DartMessengerTaskQueue;
						}
						export class TaskQueueToken extends io.flutter.plugin.common.BinaryMessenger.TaskQueue {
							public static class: java.lang.Class<io.flutter.embedding.engine.dart.DartMessenger.TaskQueueToken>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module dart {
					export class PlatformMessageHandler {
						public static class: java.lang.Class<io.flutter.embedding.engine.dart.PlatformMessageHandler>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.engine.dart.PlatformMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { handleMessageFromDart(param0: string, param1: java.nio.ByteBuffer, param2: number, param3: number): void; handlePlatformMessageResponse(param0: number, param1: java.nio.ByteBuffer): void });
						public constructor();
						public handlePlatformMessageResponse(param0: number, param1: java.nio.ByteBuffer): void;
						public handleMessageFromDart(param0: string, param1: java.nio.ByteBuffer, param2: number, param3: number): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module dart {
					export class PlatformTaskQueue extends io.flutter.embedding.engine.dart.DartMessenger.DartMessengerTaskQueue {
						public static class: java.lang.Class<io.flutter.embedding.engine.dart.PlatformTaskQueue>;
						public constructor();
						public dispatch(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module deferredcomponents {
					export class DeferredComponentManager {
						public static class: java.lang.Class<io.flutter.embedding.engine.deferredcomponents.DeferredComponentManager>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.engine.deferredcomponents.DeferredComponentManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { setJNI(param0: io.flutter.embedding.engine.FlutterJNI): void; setDeferredComponentChannel(param0: io.flutter.embedding.engine.systemchannels.DeferredComponentChannel): void; installDeferredComponent(param0: number, param1: string): void; getDeferredComponentInstallState(param0: number, param1: string): string; loadAssets(param0: number, param1: string): void; loadDartLibrary(param0: number, param1: string): void; uninstallDeferredComponent(param0: number, param1: string): boolean; destroy(): void });
						public constructor();
						public loadAssets(param0: number, param1: string): void;
						public uninstallDeferredComponent(param0: number, param1: string): boolean;
						public setJNI(param0: io.flutter.embedding.engine.FlutterJNI): void;
						public getDeferredComponentInstallState(param0: number, param1: string): string;
						public setDeferredComponentChannel(param0: io.flutter.embedding.engine.systemchannels.DeferredComponentChannel): void;
						public destroy(): void;
						public installDeferredComponent(param0: number, param1: string): void;
						public loadDartLibrary(param0: number, param1: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module deferredcomponents {
					export class PlayStoreDeferredComponentManager extends io.flutter.embedding.engine.deferredcomponents.DeferredComponentManager {
						public static class: java.lang.Class<io.flutter.embedding.engine.deferredcomponents.PlayStoreDeferredComponentManager>;
						public static MAPPING_KEY: string;
						public loadingUnitIdToComponentNames: globalAndroid.util.SparseArray<string>;
						public loadingUnitIdToSharedLibraryNames: globalAndroid.util.SparseArray<string>;
						public loadAssets(param0: number, param1: string): void;
						public uninstallDeferredComponent(param0: number, param1: string): boolean;
						public setJNI(param0: io.flutter.embedding.engine.FlutterJNI): void;
						public getDeferredComponentInstallState(param0: number, param1: string): string;
						public setDeferredComponentChannel(param0: io.flutter.embedding.engine.systemchannels.DeferredComponentChannel): void;
						public destroy(): void;
						public installDeferredComponent(param0: number, param1: string): void;
						public loadDartLibrary(param0: number, param1: string): void;
						public constructor(param0: globalAndroid.content.Context, param1: io.flutter.embedding.engine.FlutterJNI);
					}
					export module PlayStoreDeferredComponentManager {
						export class FeatureInstallStateUpdatedListener {
							public static class: java.lang.Class<io.flutter.embedding.engine.deferredcomponents.PlayStoreDeferredComponentManager.FeatureInstallStateUpdatedListener>;
							public onStateUpdate(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module loader {
					export class ApplicationInfoLoader {
						public static class: java.lang.Class<io.flutter.embedding.engine.loader.ApplicationInfoLoader>;
						public static PUBLIC_AOT_SHARED_LIBRARY_NAME: string;
						public static PUBLIC_VM_SNAPSHOT_DATA_KEY: string;
						public static PUBLIC_ISOLATE_SNAPSHOT_DATA_KEY: string;
						public static PUBLIC_FLUTTER_ASSETS_DIR_KEY: string;
						public static NETWORK_POLICY_METADATA_KEY: string;
						public static PUBLIC_AUTOMATICALLY_REGISTER_PLUGINS_METADATA_KEY: string;
						public static load(param0: globalAndroid.content.Context): io.flutter.embedding.engine.loader.FlutterApplicationInfo;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module loader {
					export class FlutterApplicationInfo {
						public static class: java.lang.Class<io.flutter.embedding.engine.loader.FlutterApplicationInfo>;
						public aotSharedLibraryName: string;
						public vmSnapshotData: string;
						public isolateSnapshotData: string;
						public flutterAssetsDir: string;
						public domainNetworkPolicy: string;
						public nativeLibraryDir: string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: boolean);
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module loader {
					export class FlutterLoader {
						public static class: java.lang.Class<io.flutter.embedding.engine.loader.FlutterLoader>;
						public constructor(param0: io.flutter.embedding.engine.FlutterJNI, param1: java.util.concurrent.ExecutorService);
						public constructor();
						public constructor(param0: io.flutter.embedding.engine.FlutterJNI);
						public startInitialization(param0: globalAndroid.content.Context): void;
						public ensureInitializationComplete(param0: globalAndroid.content.Context, param1: androidNative.Array<string>): void;
						public getLookupKeyForAsset(param0: string, param1: string): string;
						public initialized(): boolean;
						public ensureInitializationCompleteAsync(param0: globalAndroid.content.Context, param1: androidNative.Array<string>, param2: globalAndroid.os.Handler, param3: java.lang.Runnable): void;
						public getLookupKeyForAsset(param0: string): string;
						public findAppBundlePath(): string;
						public startInitialization(param0: globalAndroid.content.Context, param1: io.flutter.embedding.engine.loader.FlutterLoader.Settings): void;
						public automaticallyRegisterPlugins(): boolean;
					}
					export module FlutterLoader {
						export class InitResult {
							public static class: java.lang.Class<io.flutter.embedding.engine.loader.FlutterLoader.InitResult>;
						}
						export class Settings {
							public static class: java.lang.Class<io.flutter.embedding.engine.loader.FlutterLoader.Settings>;
							public constructor();
							public getLogTag(): string;
							public setLogTag(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module loader {
					export class ResourceExtractor {
						public static class: java.lang.Class<io.flutter.embedding.engine.loader.ResourceExtractor>;
					}
					export module ResourceExtractor {
						export class ExtractTask extends globalAndroid.os.AsyncTask<java.lang.Void, java.lang.Void, java.lang.Void> {
							public static class: java.lang.Class<io.flutter.embedding.engine.loader.ResourceExtractor.ExtractTask>;
							public doInBackground(param0: androidNative.Array<java.lang.Void>): java.lang.Void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module mutatorsstack {
					export class FlutterMutatorView {
						public static class: java.lang.Class<io.flutter.embedding.engine.mutatorsstack.FlutterMutatorView>;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public setOnDescendantFocusChangeListener(param0: globalAndroid.view.View.OnFocusChangeListener): void;
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: io.flutter.embedding.android.AndroidTouchProcessor);
						public constructor(param0: globalAndroid.content.Context);
						public unsetOnDescendantFocusChangeListener(): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public readyToDisplay(param0: io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack, param1: number, param2: number, param3: number, param4: number): void;
						public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
						public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module mutatorsstack {
					export class FlutterMutatorsStack {
						public static class: java.lang.Class<io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack>;
						public constructor();
						public pushTransform(param0: androidNative.Array<number>): void;
						public getMutators(): java.util.List<io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack.FlutterMutator>;
						public getFinalMatrix(): globalAndroid.graphics.Matrix;
						public getFinalClippingPaths(): java.util.List<globalAndroid.graphics.Path>;
						public pushClipRect(param0: number, param1: number, param2: number, param3: number): void;
						public pushClipRRect(param0: number, param1: number, param2: number, param3: number, param4: androidNative.Array<number>): void;
					}
					export module FlutterMutatorsStack {
						export class FlutterMutator {
							public static class: java.lang.Class<io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack.FlutterMutator>;
							public getType(): io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack.FlutterMutatorType;
							public getMatrix(): globalAndroid.graphics.Matrix;
							public constructor(param0: io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack, param1: globalAndroid.graphics.Matrix);
							public constructor(param0: io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack, param1: globalAndroid.graphics.Path);
							public constructor(param0: io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack, param1: globalAndroid.graphics.Rect, param2: androidNative.Array<number>);
							public getRect(): globalAndroid.graphics.Rect;
							public getPath(): globalAndroid.graphics.Path;
							public constructor(param0: io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack, param1: globalAndroid.graphics.Rect);
						}
						export class FlutterMutatorType {
							public static class: java.lang.Class<io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack.FlutterMutatorType>;
							public static CLIP_RECT: io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack.FlutterMutatorType;
							public static CLIP_RRECT: io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack.FlutterMutatorType;
							public static CLIP_PATH: io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack.FlutterMutatorType;
							public static TRANSFORM: io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack.FlutterMutatorType;
							public static OPACITY: io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack.FlutterMutatorType;
							public static values(): androidNative.Array<io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack.FlutterMutatorType>;
							public static valueOf(param0: string): io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack.FlutterMutatorType;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export class FlutterPlugin {
						public static class: java.lang.Class<io.flutter.embedding.engine.plugins.FlutterPlugin>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.engine.plugins.FlutterPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onAttachedToEngine(param0: io.flutter.embedding.engine.plugins.FlutterPlugin.FlutterPluginBinding): void; onDetachedFromEngine(param0: io.flutter.embedding.engine.plugins.FlutterPlugin.FlutterPluginBinding): void });
						public constructor();
						public onAttachedToEngine(param0: io.flutter.embedding.engine.plugins.FlutterPlugin.FlutterPluginBinding): void;
						public onDetachedFromEngine(param0: io.flutter.embedding.engine.plugins.FlutterPlugin.FlutterPluginBinding): void;
					}
					export module FlutterPlugin {
						export class FlutterAssets {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.FlutterPlugin.FlutterAssets>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.plugins.FlutterPlugin$FlutterAssets interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getAssetFilePathByName(param0: string): string; getAssetFilePathByName(param0: string, param1: string): string; getAssetFilePathBySubpath(param0: string): string; getAssetFilePathBySubpath(param0: string, param1: string): string });
							public constructor();
							public getAssetFilePathByName(param0: string, param1: string): string;
							public getAssetFilePathByName(param0: string): string;
							public getAssetFilePathBySubpath(param0: string): string;
							public getAssetFilePathBySubpath(param0: string, param1: string): string;
						}
						export class FlutterPluginBinding {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.FlutterPlugin.FlutterPluginBinding>;
							/** @deprecated */
							public getFlutterEngine(): io.flutter.embedding.engine.FlutterEngine;
							public getApplicationContext(): globalAndroid.content.Context;
							public getTextureRegistry(): io.flutter.view.TextureRegistry;
							public constructor(param0: globalAndroid.content.Context, param1: io.flutter.embedding.engine.FlutterEngine, param2: io.flutter.plugin.common.BinaryMessenger, param3: io.flutter.view.TextureRegistry, param4: io.flutter.plugin.platform.PlatformViewRegistry, param5: io.flutter.embedding.engine.plugins.FlutterPlugin.FlutterAssets);
							public getBinaryMessenger(): io.flutter.plugin.common.BinaryMessenger;
							public getFlutterAssets(): io.flutter.embedding.engine.plugins.FlutterPlugin.FlutterAssets;
							public getPlatformViewRegistry(): io.flutter.plugin.platform.PlatformViewRegistry;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export class PluginRegistry {
						public static class: java.lang.Class<io.flutter.embedding.engine.plugins.PluginRegistry>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.engine.plugins.PluginRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { add(param0: io.flutter.embedding.engine.plugins.FlutterPlugin): void; add(param0: java.util.Set<io.flutter.embedding.engine.plugins.FlutterPlugin>): void; has(param0: java.lang.Class<any>): boolean; get(param0: java.lang.Class<any>): io.flutter.embedding.engine.plugins.FlutterPlugin; remove(param0: java.lang.Class<any>): void; remove(param0: java.util.Set<java.lang.Class<any>>): void; removeAll(): void });
						public constructor();
						public has(param0: java.lang.Class<any>): boolean;
						public add(param0: io.flutter.embedding.engine.plugins.FlutterPlugin): void;
						public add(param0: java.util.Set<io.flutter.embedding.engine.plugins.FlutterPlugin>): void;
						public remove(param0: java.util.Set<java.lang.Class<any>>): void;
						public removeAll(): void;
						public get(param0: java.lang.Class<any>): io.flutter.embedding.engine.plugins.FlutterPlugin;
						public remove(param0: java.lang.Class<any>): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module activity {
						export class ActivityAware {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.activity.ActivityAware>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.plugins.activity.ActivityAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onAttachedToActivity(param0: io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding): void; onDetachedFromActivityForConfigChanges(): void; onReattachedToActivityForConfigChanges(param0: io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding): void; onDetachedFromActivity(): void });
							public constructor();
							public onAttachedToActivity(param0: io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding): void;
							public onDetachedFromActivity(): void;
							public onReattachedToActivityForConfigChanges(param0: io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding): void;
							public onDetachedFromActivityForConfigChanges(): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module activity {
						export class ActivityControlSurface {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.activity.ActivityControlSurface>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.plugins.activity.ActivityControlSurface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								attachToActivity(param0: io.flutter.embedding.android.ExclusiveAppComponent<globalAndroid.app.Activity>, param1: androidx.lifecycle.Lifecycle): void;
								detachFromActivityForConfigChanges(): void;
								detachFromActivity(): void;
								onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): boolean;
								onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
								onNewIntent(param0: globalAndroid.content.Intent): void;
								onUserLeaveHint(): void;
								onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
							});
							public constructor();
							public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): boolean;
							public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
							public onUserLeaveHint(): void;
							public attachToActivity(param0: io.flutter.embedding.android.ExclusiveAppComponent<globalAndroid.app.Activity>, param1: androidx.lifecycle.Lifecycle): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
							public onNewIntent(param0: globalAndroid.content.Intent): void;
							public detachFromActivityForConfigChanges(): void;
							public detachFromActivity(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module activity {
						export class ActivityPluginBinding {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getActivity(): globalAndroid.app.Activity;
								getLifecycle(): any;
								addRequestPermissionsResultListener(param0: io.flutter.plugin.common.PluginRegistry.RequestPermissionsResultListener): void;
								removeRequestPermissionsResultListener(param0: io.flutter.plugin.common.PluginRegistry.RequestPermissionsResultListener): void;
								addActivityResultListener(param0: io.flutter.plugin.common.PluginRegistry.ActivityResultListener): void;
								removeActivityResultListener(param0: io.flutter.plugin.common.PluginRegistry.ActivityResultListener): void;
								addOnNewIntentListener(param0: io.flutter.plugin.common.PluginRegistry.NewIntentListener): void;
								removeOnNewIntentListener(param0: io.flutter.plugin.common.PluginRegistry.NewIntentListener): void;
								addOnUserLeaveHintListener(param0: io.flutter.plugin.common.PluginRegistry.UserLeaveHintListener): void;
								removeOnUserLeaveHintListener(param0: io.flutter.plugin.common.PluginRegistry.UserLeaveHintListener): void;
								addOnSaveStateListener(param0: io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding.OnSaveInstanceStateListener): void;
								removeOnSaveStateListener(param0: io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding.OnSaveInstanceStateListener): void;
							});
							public constructor();
							public removeOnUserLeaveHintListener(param0: io.flutter.plugin.common.PluginRegistry.UserLeaveHintListener): void;
							public removeOnSaveStateListener(param0: io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding.OnSaveInstanceStateListener): void;
							public addRequestPermissionsResultListener(param0: io.flutter.plugin.common.PluginRegistry.RequestPermissionsResultListener): void;
							public removeRequestPermissionsResultListener(param0: io.flutter.plugin.common.PluginRegistry.RequestPermissionsResultListener): void;
							public addOnUserLeaveHintListener(param0: io.flutter.plugin.common.PluginRegistry.UserLeaveHintListener): void;
							public addOnNewIntentListener(param0: io.flutter.plugin.common.PluginRegistry.NewIntentListener): void;
							public removeOnNewIntentListener(param0: io.flutter.plugin.common.PluginRegistry.NewIntentListener): void;
							public addOnSaveStateListener(param0: io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding.OnSaveInstanceStateListener): void;
							public addActivityResultListener(param0: io.flutter.plugin.common.PluginRegistry.ActivityResultListener): void;
							public getLifecycle(): any;
							public getActivity(): globalAndroid.app.Activity;
							public removeActivityResultListener(param0: io.flutter.plugin.common.PluginRegistry.ActivityResultListener): void;
						}
						export module ActivityPluginBinding {
							export class OnSaveInstanceStateListener {
								public static class: java.lang.Class<io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding.OnSaveInstanceStateListener>;
								/**
								 * Constructs a new instance of the io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding$OnSaveInstanceStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onSaveInstanceState(param0: globalAndroid.os.Bundle): void; onRestoreInstanceState(param0: globalAndroid.os.Bundle): void });
								public constructor();
								public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
								public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module broadcastreceiver {
						export class BroadcastReceiverAware {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.broadcastreceiver.BroadcastReceiverAware>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.plugins.broadcastreceiver.BroadcastReceiverAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onAttachedToBroadcastReceiver(param0: io.flutter.embedding.engine.plugins.broadcastreceiver.BroadcastReceiverPluginBinding): void; onDetachedFromBroadcastReceiver(): void });
							public constructor();
							public onDetachedFromBroadcastReceiver(): void;
							public onAttachedToBroadcastReceiver(param0: io.flutter.embedding.engine.plugins.broadcastreceiver.BroadcastReceiverPluginBinding): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module broadcastreceiver {
						export class BroadcastReceiverControlSurface {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.broadcastreceiver.BroadcastReceiverControlSurface>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.plugins.broadcastreceiver.BroadcastReceiverControlSurface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { attachToBroadcastReceiver(param0: globalAndroid.content.BroadcastReceiver, param1: androidx.lifecycle.Lifecycle): void; detachFromBroadcastReceiver(): void });
							public constructor();
							public attachToBroadcastReceiver(param0: globalAndroid.content.BroadcastReceiver, param1: androidx.lifecycle.Lifecycle): void;
							public detachFromBroadcastReceiver(): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module broadcastreceiver {
						export class BroadcastReceiverPluginBinding {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.broadcastreceiver.BroadcastReceiverPluginBinding>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.plugins.broadcastreceiver.BroadcastReceiverPluginBinding interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getBroadcastReceiver(): globalAndroid.content.BroadcastReceiver });
							public constructor();
							public getBroadcastReceiver(): globalAndroid.content.BroadcastReceiver;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module contentprovider {
						export class ContentProviderAware {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.contentprovider.ContentProviderAware>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.plugins.contentprovider.ContentProviderAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onAttachedToContentProvider(param0: io.flutter.embedding.engine.plugins.contentprovider.ContentProviderPluginBinding): void; onDetachedFromContentProvider(): void });
							public constructor();
							public onDetachedFromContentProvider(): void;
							public onAttachedToContentProvider(param0: io.flutter.embedding.engine.plugins.contentprovider.ContentProviderPluginBinding): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module contentprovider {
						export class ContentProviderControlSurface {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.contentprovider.ContentProviderControlSurface>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.plugins.contentprovider.ContentProviderControlSurface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { attachToContentProvider(param0: globalAndroid.content.ContentProvider, param1: androidx.lifecycle.Lifecycle): void; detachFromContentProvider(): void });
							public constructor();
							public detachFromContentProvider(): void;
							public attachToContentProvider(param0: globalAndroid.content.ContentProvider, param1: androidx.lifecycle.Lifecycle): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module contentprovider {
						export class ContentProviderPluginBinding {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.contentprovider.ContentProviderPluginBinding>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.plugins.contentprovider.ContentProviderPluginBinding interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getContentProvider(): globalAndroid.content.ContentProvider });
							public constructor();
							public getContentProvider(): globalAndroid.content.ContentProvider;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module lifecycle {
						export class HiddenLifecycleReference {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.lifecycle.HiddenLifecycleReference>;
							public getLifecycle(): androidx.lifecycle.Lifecycle;
							public constructor(param0: androidx.lifecycle.Lifecycle);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module service {
						export class ServiceAware {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.service.ServiceAware>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.plugins.service.ServiceAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onAttachedToService(param0: io.flutter.embedding.engine.plugins.service.ServicePluginBinding): void; onDetachedFromService(): void });
							public constructor();
							public onDetachedFromService(): void;
							public onAttachedToService(param0: io.flutter.embedding.engine.plugins.service.ServicePluginBinding): void;
						}
						export module ServiceAware {
							export class OnModeChangeListener {
								public static class: java.lang.Class<io.flutter.embedding.engine.plugins.service.ServiceAware.OnModeChangeListener>;
								/**
								 * Constructs a new instance of the io.flutter.embedding.engine.plugins.service.ServiceAware$OnModeChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onMoveToForeground(): void; onMoveToBackground(): void });
								public constructor();
								public onMoveToForeground(): void;
								public onMoveToBackground(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module service {
						export class ServiceControlSurface {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.service.ServiceControlSurface>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.plugins.service.ServiceControlSurface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { attachToService(param0: globalAndroid.app.Service, param1: androidx.lifecycle.Lifecycle, param2: boolean): void; detachFromService(): void; onMoveToForeground(): void; onMoveToBackground(): void });
							public constructor();
							public detachFromService(): void;
							public attachToService(param0: globalAndroid.app.Service, param1: androidx.lifecycle.Lifecycle, param2: boolean): void;
							public onMoveToBackground(): void;
							public onMoveToForeground(): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module service {
						export class ServicePluginBinding {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.service.ServicePluginBinding>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.plugins.service.ServicePluginBinding interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getService(): globalAndroid.app.Service; getLifecycle(): any; addOnModeChangeListener(param0: io.flutter.embedding.engine.plugins.service.ServiceAware.OnModeChangeListener): void; removeOnModeChangeListener(param0: io.flutter.embedding.engine.plugins.service.ServiceAware.OnModeChangeListener): void });
							public constructor();
							public removeOnModeChangeListener(param0: io.flutter.embedding.engine.plugins.service.ServiceAware.OnModeChangeListener): void;
							public addOnModeChangeListener(param0: io.flutter.embedding.engine.plugins.service.ServiceAware.OnModeChangeListener): void;
							public getLifecycle(): any;
							public getService(): globalAndroid.app.Service;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module shim {
						export class ShimPluginRegistry extends io.flutter.plugin.common.PluginRegistry {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.shim.ShimPluginRegistry>;
							public constructor(param0: io.flutter.embedding.engine.FlutterEngine);
							/** @deprecated */
							public valuePublishedByPlugin(param0: string): any;
							public hasPlugin(param0: string): boolean;
							public registrarFor(param0: string): io.flutter.plugin.common.PluginRegistry.Registrar;
							/** @deprecated */
							public registrarFor(param0: string): io.flutter.plugin.common.PluginRegistry.Registrar;
							/** @deprecated */
							public hasPlugin(param0: string): boolean;
							public valuePublishedByPlugin(param0: string): any;
						}
						export module ShimPluginRegistry {
							export class ShimRegistrarAggregate implements io.flutter.embedding.engine.plugins.FlutterPlugin, io.flutter.embedding.engine.plugins.activity.ActivityAware {
								public static class: java.lang.Class<io.flutter.embedding.engine.plugins.shim.ShimPluginRegistry.ShimRegistrarAggregate>;
								public addPlugin(param0: io.flutter.embedding.engine.plugins.shim.ShimRegistrar): void;
								public onDetachedFromActivity(): void;
								public onAttachedToActivity(param0: io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding): void;
								public onAttachedToEngine(param0: io.flutter.embedding.engine.plugins.FlutterPlugin.FlutterPluginBinding): void;
								public onDetachedFromEngine(param0: io.flutter.embedding.engine.plugins.FlutterPlugin.FlutterPluginBinding): void;
								public onDetachedFromActivityForConfigChanges(): void;
								public onReattachedToActivityForConfigChanges(param0: io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module shim {
						export class ShimRegistrar implements io.flutter.plugin.common.PluginRegistry.Registrar, io.flutter.embedding.engine.plugins.FlutterPlugin, io.flutter.embedding.engine.plugins.activity.ActivityAware {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.shim.ShimRegistrar>;
							public publish(param0: any): io.flutter.plugin.common.PluginRegistry.Registrar;
							public context(): globalAndroid.content.Context;
							public onDetachedFromActivity(): void;
							public platformViewRegistry(): io.flutter.plugin.platform.PlatformViewRegistry;
							public addActivityResultListener(param0: io.flutter.plugin.common.PluginRegistry.ActivityResultListener): io.flutter.plugin.common.PluginRegistry.Registrar;
							public onReattachedToActivityForConfigChanges(param0: io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding): void;
							public addRequestPermissionsResultListener(param0: io.flutter.plugin.common.PluginRegistry.RequestPermissionsResultListener): io.flutter.plugin.common.PluginRegistry.Registrar;
							public textures(): io.flutter.view.TextureRegistry;
							public lookupKeyForAsset(param0: string, param1: string): string;
							public activeContext(): globalAndroid.content.Context;
							public onDetachedFromActivityForConfigChanges(): void;
							public onDetachedFromEngine(param0: io.flutter.embedding.engine.plugins.FlutterPlugin.FlutterPluginBinding): void;
							public lookupKeyForAsset(param0: string): string;
							public onAttachedToActivity(param0: io.flutter.embedding.engine.plugins.activity.ActivityPluginBinding): void;
							public activity(): globalAndroid.app.Activity;
							public addNewIntentListener(param0: io.flutter.plugin.common.PluginRegistry.NewIntentListener): io.flutter.plugin.common.PluginRegistry.Registrar;
							public onAttachedToEngine(param0: io.flutter.embedding.engine.plugins.FlutterPlugin.FlutterPluginBinding): void;
							public constructor(param0: string, param1: java.util.Map<string, any>);
							public addViewDestroyListener(param0: io.flutter.plugin.common.PluginRegistry.ViewDestroyListener): io.flutter.plugin.common.PluginRegistry.Registrar;
							public messenger(): io.flutter.plugin.common.BinaryMessenger;
							public view(): io.flutter.view.FlutterView;
							public addUserLeaveHintListener(param0: io.flutter.plugin.common.PluginRegistry.UserLeaveHintListener): io.flutter.plugin.common.PluginRegistry.Registrar;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module plugins {
					export module util {
						export class GeneratedPluginRegister {
							public static class: java.lang.Class<io.flutter.embedding.engine.plugins.util.GeneratedPluginRegister>;
							public constructor();
							public static registerGeneratedPlugins(param0: io.flutter.embedding.engine.FlutterEngine): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module renderer {
					export class FlutterRenderer extends io.flutter.view.TextureRegistry {
						public static class: java.lang.Class<io.flutter.embedding.engine.renderer.FlutterRenderer>;
						public removeIsDisplayingFlutterUiListener(param0: io.flutter.embedding.engine.renderer.FlutterUiDisplayListener): void;
						public dispatchPointerDataPacket(param0: java.nio.ByteBuffer, param1: number): void;
						public setViewportMetrics(param0: io.flutter.embedding.engine.renderer.FlutterRenderer.ViewportMetrics): void;
						public startRenderingToSurface(param0: globalAndroid.view.Surface, param1: boolean): void;
						public isSoftwareRenderingEnabled(): boolean;
						public dispatchSemanticsAction(param0: number, param1: number, param2: java.nio.ByteBuffer, param3: number): void;
						public addIsDisplayingFlutterUiListener(param0: io.flutter.embedding.engine.renderer.FlutterUiDisplayListener): void;
						public swapSurface(param0: globalAndroid.view.Surface): void;
						public onTrimMemory(param0: number): void;
						public stopRenderingToSurface(): void;
						public getBitmap(): globalAndroid.graphics.Bitmap;
						public setSemanticsEnabled(param0: boolean): void;
						public constructor(param0: io.flutter.embedding.engine.FlutterJNI);
						public registerSurfaceTexture(param0: globalAndroid.graphics.SurfaceTexture): io.flutter.view.TextureRegistry.SurfaceTextureEntry;
						public setAccessibilityFeatures(param0: number): void;
						public createSurfaceTexture(): io.flutter.view.TextureRegistry.SurfaceTextureEntry;
						public isDisplayingFlutterUi(): boolean;
						public surfaceChanged(param0: number, param1: number): void;
					}
					export module FlutterRenderer {
						export class DisplayFeature {
							public static class: java.lang.Class<io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeature>;
							public bounds: globalAndroid.graphics.Rect;
							public type: io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureType;
							public state: io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureState;
							public constructor(param0: globalAndroid.graphics.Rect, param1: io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureType, param2: io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureState);
							public constructor(param0: globalAndroid.graphics.Rect, param1: io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureType);
						}
						export class DisplayFeatureState {
							public static class: java.lang.Class<io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureState>;
							public static UNKNOWN: io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureState;
							public static POSTURE_FLAT: io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureState;
							public static POSTURE_HALF_OPENED: io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureState;
							public encodedValue: number;
							public static valueOf(param0: string): io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureState;
							public static values(): androidNative.Array<io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureState>;
						}
						export class DisplayFeatureType {
							public static class: java.lang.Class<io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureType>;
							public static UNKNOWN: io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureType;
							public static FOLD: io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureType;
							public static HINGE: io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureType;
							public static CUTOUT: io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureType;
							public encodedValue: number;
							public static valueOf(param0: string): io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureType;
							public static values(): androidNative.Array<io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeatureType>;
						}
						export class SurfaceTextureFinalizerRunnable {
							public static class: java.lang.Class<io.flutter.embedding.engine.renderer.FlutterRenderer.SurfaceTextureFinalizerRunnable>;
							public run(): void;
						}
						export class SurfaceTextureRegistryEntry implements io.flutter.view.TextureRegistry.SurfaceTextureEntry, io.flutter.view.TextureRegistry.OnTrimMemoryListener {
							public static class: java.lang.Class<io.flutter.embedding.engine.renderer.FlutterRenderer.SurfaceTextureRegistryEntry>;
							public id(): number;
							public setOnTrimMemoryListener(param0: io.flutter.view.TextureRegistry.OnTrimMemoryListener): void;
							public onTrimMemory(param0: number): void;
							public setOnFrameConsumedListener(param0: io.flutter.view.TextureRegistry.OnFrameConsumedListener): void;
							public textureWrapper(): io.flutter.embedding.engine.renderer.SurfaceTextureWrapper;
							public surfaceTexture(): globalAndroid.graphics.SurfaceTexture;
							public finalize(): void;
							public release(): void;
						}
						export class ViewportMetrics {
							public static class: java.lang.Class<io.flutter.embedding.engine.renderer.FlutterRenderer.ViewportMetrics>;
							public static unsetValue: number;
							public devicePixelRatio: number;
							public width: number;
							public height: number;
							public viewPaddingTop: number;
							public viewPaddingRight: number;
							public viewPaddingBottom: number;
							public viewPaddingLeft: number;
							public viewInsetTop: number;
							public viewInsetRight: number;
							public viewInsetBottom: number;
							public viewInsetLeft: number;
							public systemGestureInsetTop: number;
							public systemGestureInsetRight: number;
							public systemGestureInsetBottom: number;
							public systemGestureInsetLeft: number;
							public physicalTouchSlop: number;
							public displayFeatures: java.util.List<io.flutter.embedding.engine.renderer.FlutterRenderer.DisplayFeature>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module renderer {
					export class FlutterUiDisplayListener {
						public static class: java.lang.Class<io.flutter.embedding.engine.renderer.FlutterUiDisplayListener>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.engine.renderer.FlutterUiDisplayListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onFlutterUiDisplayed(): void; onFlutterUiNoLongerDisplayed(): void });
						public constructor();
						public onFlutterUiNoLongerDisplayed(): void;
						public onFlutterUiDisplayed(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module renderer {
					export class RenderSurface {
						public static class: java.lang.Class<io.flutter.embedding.engine.renderer.RenderSurface>;
						/**
						 * Constructs a new instance of the io.flutter.embedding.engine.renderer.RenderSurface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getAttachedRenderer(): io.flutter.embedding.engine.renderer.FlutterRenderer; attachToRenderer(param0: io.flutter.embedding.engine.renderer.FlutterRenderer): void; detachFromRenderer(): void; pause(): void });
						public constructor();
						public detachFromRenderer(): void;
						public pause(): void;
						public attachToRenderer(param0: io.flutter.embedding.engine.renderer.FlutterRenderer): void;
						public getAttachedRenderer(): io.flutter.embedding.engine.renderer.FlutterRenderer;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module renderer {
					export class SurfaceTextureWrapper {
						public static class: java.lang.Class<io.flutter.embedding.engine.renderer.SurfaceTextureWrapper>;
						public constructor(param0: globalAndroid.graphics.SurfaceTexture);
						public constructor(param0: globalAndroid.graphics.SurfaceTexture, param1: java.lang.Runnable);
						public updateTexImage(): void;
						public detachFromGLContext(): void;
						public attachToGLContext(param0: number): void;
						public release(): void;
						public getTransformMatrix(param0: androidNative.Array<number>): void;
						public surfaceTexture(): globalAndroid.graphics.SurfaceTexture;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module systemchannels {
					export class AccessibilityChannel {
						public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.AccessibilityChannel>;
						public channel: io.flutter.plugin.common.BasicMessageChannel<any>;
						public flutterJNI: io.flutter.embedding.engine.FlutterJNI;
						public onAndroidAccessibilityEnabled(): void;
						public dispatchSemanticsAction(param0: number, param1: io.flutter.view.AccessibilityBridge.Action, param2: any): void;
						public setAccessibilityFeatures(param0: number): void;
						public onAndroidAccessibilityDisabled(): void;
						public dispatchSemanticsAction(param0: number, param1: io.flutter.view.AccessibilityBridge.Action): void;
						public setAccessibilityMessageHandler(param0: io.flutter.embedding.engine.systemchannels.AccessibilityChannel.AccessibilityMessageHandler): void;
						public constructor(param0: io.flutter.embedding.engine.dart.DartExecutor, param1: io.flutter.embedding.engine.FlutterJNI);
					}
					export module AccessibilityChannel {
						export class AccessibilityMessageHandler extends io.flutter.embedding.engine.FlutterJNI.AccessibilityDelegate {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.AccessibilityChannel.AccessibilityMessageHandler>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.systemchannels.AccessibilityChannel$AccessibilityMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { announce(param0: string): void; onTap(param0: number): void; onLongPress(param0: number): void; onTooltip(param0: string): void; updateCustomAccessibilityActions(param0: java.nio.ByteBuffer, param1: androidNative.Array<string>): void; updateSemantics(param0: java.nio.ByteBuffer, param1: androidNative.Array<string>, param2: androidNative.Array<java.nio.ByteBuffer>): void });
							public constructor();
							public onLongPress(param0: number): void;
							public announce(param0: string): void;
							public onTap(param0: number): void;
							public onTooltip(param0: string): void;
							public updateSemantics(param0: java.nio.ByteBuffer, param1: androidNative.Array<string>, param2: androidNative.Array<java.nio.ByteBuffer>): void;
							public updateCustomAccessibilityActions(param0: java.nio.ByteBuffer, param1: androidNative.Array<string>): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module systemchannels {
					export class DeferredComponentChannel {
						public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.DeferredComponentChannel>;
						public constructor(param0: io.flutter.embedding.engine.dart.DartExecutor);
						public setDeferredComponentManager(param0: io.flutter.embedding.engine.deferredcomponents.DeferredComponentManager): void;
						public completeInstallSuccess(param0: string): void;
						public completeInstallError(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module systemchannels {
					export class KeyEventChannel {
						public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.KeyEventChannel>;
						public channel: io.flutter.plugin.common.BasicMessageChannel<any>;
						public sendFlutterKeyEvent(param0: io.flutter.embedding.engine.systemchannels.KeyEventChannel.FlutterKeyEvent, param1: boolean, param2: io.flutter.embedding.engine.systemchannels.KeyEventChannel.EventResponseHandler): void;
						public constructor(param0: io.flutter.plugin.common.BinaryMessenger);
					}
					export module KeyEventChannel {
						export class EventResponseHandler {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.KeyEventChannel.EventResponseHandler>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.systemchannels.KeyEventChannel$EventResponseHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onFrameworkResponse(param0: boolean): void });
							public constructor();
							public onFrameworkResponse(param0: boolean): void;
						}
						export class FlutterKeyEvent {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.KeyEventChannel.FlutterKeyEvent>;
							public event: globalAndroid.view.KeyEvent;
							public complexCharacter: java.lang.Character;
							public constructor(param0: globalAndroid.view.KeyEvent);
							public constructor(param0: globalAndroid.view.KeyEvent, param1: java.lang.Character);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module systemchannels {
					export class LifecycleChannel {
						public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.LifecycleChannel>;
						public channel: io.flutter.plugin.common.BasicMessageChannel<string>;
						public constructor(param0: io.flutter.embedding.engine.dart.DartExecutor);
						public appIsResumed(): void;
						public appIsInactive(): void;
						public appIsPaused(): void;
						public appIsDetached(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module systemchannels {
					export class LocalizationChannel {
						public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.LocalizationChannel>;
						public channel: io.flutter.plugin.common.MethodChannel;
						public handler: io.flutter.plugin.common.MethodChannel.MethodCallHandler;
						public constructor(param0: io.flutter.embedding.engine.dart.DartExecutor);
						public setLocalizationMessageHandler(param0: io.flutter.embedding.engine.systemchannels.LocalizationChannel.LocalizationMessageHandler): void;
						public sendLocales(param0: java.util.List<java.util.Locale>): void;
					}
					export module LocalizationChannel {
						export class LocalizationMessageHandler {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.LocalizationChannel.LocalizationMessageHandler>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.systemchannels.LocalizationChannel$LocalizationMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getStringResource(param0: string, param1: string): string });
							public constructor();
							public getStringResource(param0: string, param1: string): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module systemchannels {
					export class MouseCursorChannel {
						public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.MouseCursorChannel>;
						public channel: io.flutter.plugin.common.MethodChannel;
						public constructor(param0: io.flutter.embedding.engine.dart.DartExecutor);
						public setMethodHandler(param0: io.flutter.embedding.engine.systemchannels.MouseCursorChannel.MouseCursorMethodHandler): void;
						public synthesizeMethodCall(param0: io.flutter.plugin.common.MethodCall, param1: io.flutter.plugin.common.MethodChannel.Result): void;
					}
					export module MouseCursorChannel {
						export class MouseCursorMethodHandler {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.MouseCursorChannel.MouseCursorMethodHandler>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.systemchannels.MouseCursorChannel$MouseCursorMethodHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { activateSystemCursor(param0: string): void });
							public constructor();
							public activateSystemCursor(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module systemchannels {
					export class NavigationChannel {
						public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.NavigationChannel>;
						public channel: io.flutter.plugin.common.MethodChannel;
						public constructor(param0: io.flutter.embedding.engine.dart.DartExecutor);
						public pushRoute(param0: string): void;
						public popRoute(): void;
						public setInitialRoute(param0: string): void;
						public setMethodCallHandler(param0: io.flutter.plugin.common.MethodChannel.MethodCallHandler): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module systemchannels {
					export class PlatformChannel {
						public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformChannel>;
						public channel: io.flutter.plugin.common.MethodChannel;
						public constructor(param0: io.flutter.embedding.engine.dart.DartExecutor);
						public setPlatformMessageHandler(param0: io.flutter.embedding.engine.systemchannels.PlatformChannel.PlatformMessageHandler): void;
						public systemChromeChanged(param0: boolean): void;
					}
					export module PlatformChannel {
						export class AppSwitcherDescription {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformChannel.AppSwitcherDescription>;
							public color: number;
							public label: string;
							public constructor(param0: number, param1: string);
						}
						export class Brightness {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformChannel.Brightness>;
							public static LIGHT: io.flutter.embedding.engine.systemchannels.PlatformChannel.Brightness;
							public static DARK: io.flutter.embedding.engine.systemchannels.PlatformChannel.Brightness;
							public static valueOf(param0: string): io.flutter.embedding.engine.systemchannels.PlatformChannel.Brightness;
							public static values(): androidNative.Array<io.flutter.embedding.engine.systemchannels.PlatformChannel.Brightness>;
						}
						export class ClipboardContentFormat {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformChannel.ClipboardContentFormat>;
							public static PLAIN_TEXT: io.flutter.embedding.engine.systemchannels.PlatformChannel.ClipboardContentFormat;
							public static valueOf(param0: string): io.flutter.embedding.engine.systemchannels.PlatformChannel.ClipboardContentFormat;
							public static values(): androidNative.Array<io.flutter.embedding.engine.systemchannels.PlatformChannel.ClipboardContentFormat>;
						}
						export class DeviceOrientation {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformChannel.DeviceOrientation>;
							public static PORTRAIT_UP: io.flutter.embedding.engine.systemchannels.PlatformChannel.DeviceOrientation;
							public static PORTRAIT_DOWN: io.flutter.embedding.engine.systemchannels.PlatformChannel.DeviceOrientation;
							public static LANDSCAPE_LEFT: io.flutter.embedding.engine.systemchannels.PlatformChannel.DeviceOrientation;
							public static LANDSCAPE_RIGHT: io.flutter.embedding.engine.systemchannels.PlatformChannel.DeviceOrientation;
							public static values(): androidNative.Array<io.flutter.embedding.engine.systemchannels.PlatformChannel.DeviceOrientation>;
							public static valueOf(param0: string): io.flutter.embedding.engine.systemchannels.PlatformChannel.DeviceOrientation;
						}
						export class HapticFeedbackType {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformChannel.HapticFeedbackType>;
							public static STANDARD: io.flutter.embedding.engine.systemchannels.PlatformChannel.HapticFeedbackType;
							public static LIGHT_IMPACT: io.flutter.embedding.engine.systemchannels.PlatformChannel.HapticFeedbackType;
							public static MEDIUM_IMPACT: io.flutter.embedding.engine.systemchannels.PlatformChannel.HapticFeedbackType;
							public static HEAVY_IMPACT: io.flutter.embedding.engine.systemchannels.PlatformChannel.HapticFeedbackType;
							public static SELECTION_CLICK: io.flutter.embedding.engine.systemchannels.PlatformChannel.HapticFeedbackType;
							public static values(): androidNative.Array<io.flutter.embedding.engine.systemchannels.PlatformChannel.HapticFeedbackType>;
							public static valueOf(param0: string): io.flutter.embedding.engine.systemchannels.PlatformChannel.HapticFeedbackType;
						}
						export class PlatformMessageHandler {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformChannel.PlatformMessageHandler>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.systemchannels.PlatformChannel$PlatformMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								playSystemSound(param0: io.flutter.embedding.engine.systemchannels.PlatformChannel.SoundType): void;
								vibrateHapticFeedback(param0: io.flutter.embedding.engine.systemchannels.PlatformChannel.HapticFeedbackType): void;
								setPreferredOrientations(param0: number): void;
								setApplicationSwitcherDescription(param0: io.flutter.embedding.engine.systemchannels.PlatformChannel.AppSwitcherDescription): void;
								showSystemOverlays(param0: java.util.List<io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiOverlay>): void;
								showSystemUiMode(param0: io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiMode): void;
								setSystemUiChangeListener(): void;
								restoreSystemUiOverlays(): void;
								setSystemUiOverlayStyle(param0: io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemChromeStyle): void;
								popSystemNavigator(): void;
								getClipboardData(param0: io.flutter.embedding.engine.systemchannels.PlatformChannel.ClipboardContentFormat): string;
								setClipboardData(param0: string): void;
								clipboardHasStrings(): boolean;
							});
							public constructor();
							public playSystemSound(param0: io.flutter.embedding.engine.systemchannels.PlatformChannel.SoundType): void;
							public vibrateHapticFeedback(param0: io.flutter.embedding.engine.systemchannels.PlatformChannel.HapticFeedbackType): void;
							public setApplicationSwitcherDescription(param0: io.flutter.embedding.engine.systemchannels.PlatformChannel.AppSwitcherDescription): void;
							public popSystemNavigator(): void;
							public showSystemUiMode(param0: io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiMode): void;
							public restoreSystemUiOverlays(): void;
							public getClipboardData(param0: io.flutter.embedding.engine.systemchannels.PlatformChannel.ClipboardContentFormat): string;
							public setSystemUiChangeListener(): void;
							public setSystemUiOverlayStyle(param0: io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemChromeStyle): void;
							public showSystemOverlays(param0: java.util.List<io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiOverlay>): void;
							public clipboardHasStrings(): boolean;
							public setClipboardData(param0: string): void;
							public setPreferredOrientations(param0: number): void;
						}
						export class SoundType {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformChannel.SoundType>;
							public static CLICK: io.flutter.embedding.engine.systemchannels.PlatformChannel.SoundType;
							public static ALERT: io.flutter.embedding.engine.systemchannels.PlatformChannel.SoundType;
							public static valueOf(param0: string): io.flutter.embedding.engine.systemchannels.PlatformChannel.SoundType;
							public static values(): androidNative.Array<io.flutter.embedding.engine.systemchannels.PlatformChannel.SoundType>;
						}
						export class SystemChromeStyle {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemChromeStyle>;
							public statusBarColor: java.lang.Integer;
							public statusBarIconBrightness: io.flutter.embedding.engine.systemchannels.PlatformChannel.Brightness;
							public systemStatusBarContrastEnforced: java.lang.Boolean;
							public systemNavigationBarColor: java.lang.Integer;
							public systemNavigationBarIconBrightness: io.flutter.embedding.engine.systemchannels.PlatformChannel.Brightness;
							public systemNavigationBarDividerColor: java.lang.Integer;
							public systemNavigationBarContrastEnforced: java.lang.Boolean;
							public constructor(param0: java.lang.Integer, param1: io.flutter.embedding.engine.systemchannels.PlatformChannel.Brightness, param2: java.lang.Boolean, param3: java.lang.Integer, param4: io.flutter.embedding.engine.systemchannels.PlatformChannel.Brightness, param5: java.lang.Integer, param6: java.lang.Boolean);
						}
						export class SystemUiMode {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiMode>;
							public static LEAN_BACK: io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiMode;
							public static IMMERSIVE: io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiMode;
							public static IMMERSIVE_STICKY: io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiMode;
							public static EDGE_TO_EDGE: io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiMode;
							public static valueOf(param0: string): io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiMode;
							public static values(): androidNative.Array<io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiMode>;
						}
						export class SystemUiOverlay {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiOverlay>;
							public static TOP_OVERLAYS: io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiOverlay;
							public static BOTTOM_OVERLAYS: io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiOverlay;
							public static values(): androidNative.Array<io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiOverlay>;
							public static valueOf(param0: string): io.flutter.embedding.engine.systemchannels.PlatformChannel.SystemUiOverlay;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module systemchannels {
					export class PlatformViewsChannel {
						public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformViewsChannel>;
						public constructor(param0: io.flutter.embedding.engine.dart.DartExecutor);
						public invokeViewFocused(param0: number): void;
						public setPlatformViewsHandler(param0: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewsHandler): void;
					}
					export module PlatformViewsChannel {
						export class PlatformViewBufferResized {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewBufferResized>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.systemchannels.PlatformViewsChannel$PlatformViewBufferResized interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { run(param0: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewBufferSize): void });
							public constructor();
							public run(param0: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewBufferSize): void;
						}
						export class PlatformViewBufferSize {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewBufferSize>;
							public width: number;
							public height: number;
							public constructor(param0: number, param1: number);
						}
						export class PlatformViewCreationRequest {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewCreationRequest>;
							public viewId: number;
							public viewType: string;
							public logicalWidth: number;
							public logicalHeight: number;
							public logicalTop: number;
							public logicalLeft: number;
							public direction: number;
							public displayMode: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewCreationRequest.RequestedDisplayMode;
							public params: java.nio.ByteBuffer;
							public constructor(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewCreationRequest.RequestedDisplayMode, param8: java.nio.ByteBuffer);
							public constructor(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: java.nio.ByteBuffer);
						}
						export module PlatformViewCreationRequest {
							export class RequestedDisplayMode {
								public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewCreationRequest.RequestedDisplayMode>;
								public static TEXTURE_WITH_VIRTUAL_FALLBACK: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewCreationRequest.RequestedDisplayMode;
								public static TEXTURE_WITH_HYBRID_FALLBACK: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewCreationRequest.RequestedDisplayMode;
								public static HYBRID_ONLY: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewCreationRequest.RequestedDisplayMode;
								public static values(): androidNative.Array<io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewCreationRequest.RequestedDisplayMode>;
								public static valueOf(param0: string): io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewCreationRequest.RequestedDisplayMode;
							}
						}
						export class PlatformViewResizeRequest {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewResizeRequest>;
							public viewId: number;
							public newLogicalWidth: number;
							public newLogicalHeight: number;
							public constructor(param0: number, param1: number, param2: number);
						}
						export class PlatformViewTouch {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewTouch>;
							public viewId: number;
							public downTime: java.lang.Number;
							public eventTime: java.lang.Number;
							public action: number;
							public pointerCount: number;
							public rawPointerPropertiesList: any;
							public rawPointerCoords: any;
							public metaState: number;
							public buttonState: number;
							public xPrecision: number;
							public yPrecision: number;
							public deviceId: number;
							public edgeFlags: number;
							public source: number;
							public flags: number;
							public motionEventId: number;
							public constructor(param0: number, param1: java.lang.Number, param2: java.lang.Number, param3: number, param4: number, param5: any, param6: any, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number);
						}
						export class PlatformViewsHandler {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewsHandler>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.systemchannels.PlatformViewsChannel$PlatformViewsHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createForPlatformViewLayer(param0: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewCreationRequest): void;
								createForTextureLayer(param0: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewCreationRequest): number;
								dispose(param0: number): void;
								resize(param0: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewResizeRequest, param1: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewBufferResized): void;
								offset(param0: number, param1: number, param2: number): void;
								onTouch(param0: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewTouch): void;
								setDirection(param0: number, param1: number): void;
								clearFocus(param0: number): void;
								synchronizeToNativeViewHierarchy(param0: boolean): void;
							});
							public constructor();
							public static NON_TEXTURE_FALLBACK: number;
							public offset(param0: number, param1: number, param2: number): void;
							public setDirection(param0: number, param1: number): void;
							public onTouch(param0: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewTouch): void;
							public createForPlatformViewLayer(param0: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewCreationRequest): void;
							public dispose(param0: number): void;
							public createForTextureLayer(param0: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewCreationRequest): number;
							public resize(param0: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewResizeRequest, param1: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewBufferResized): void;
							public clearFocus(param0: number): void;
							public synchronizeToNativeViewHierarchy(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module systemchannels {
					export class RestorationChannel {
						public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.RestorationChannel>;
						public waitForRestorationData: boolean;
						public setRestorationData(param0: androidNative.Array<number>): void;
						public clearData(): void;
						public constructor(param0: io.flutter.embedding.engine.dart.DartExecutor, param1: boolean);
						public getRestorationData(): androidNative.Array<number>;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module systemchannels {
					export class SettingsChannel {
						public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.SettingsChannel>;
						public static CHANNEL_NAME: string;
						public channel: io.flutter.plugin.common.BasicMessageChannel<any>;
						public constructor(param0: io.flutter.embedding.engine.dart.DartExecutor);
						public startMessage(): io.flutter.embedding.engine.systemchannels.SettingsChannel.MessageBuilder;
					}
					export module SettingsChannel {
						export class MessageBuilder {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.SettingsChannel.MessageBuilder>;
							public setNativeSpellCheckServiceDefined(param0: boolean): io.flutter.embedding.engine.systemchannels.SettingsChannel.MessageBuilder;
							public setPlatformBrightness(param0: io.flutter.embedding.engine.systemchannels.SettingsChannel.PlatformBrightness): io.flutter.embedding.engine.systemchannels.SettingsChannel.MessageBuilder;
							public setBrieflyShowPassword(param0: boolean): io.flutter.embedding.engine.systemchannels.SettingsChannel.MessageBuilder;
							public setTextScaleFactor(param0: number): io.flutter.embedding.engine.systemchannels.SettingsChannel.MessageBuilder;
							public setUse24HourFormat(param0: boolean): io.flutter.embedding.engine.systemchannels.SettingsChannel.MessageBuilder;
							public send(): void;
						}
						export class PlatformBrightness {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.SettingsChannel.PlatformBrightness>;
							public static light: io.flutter.embedding.engine.systemchannels.SettingsChannel.PlatformBrightness;
							public static dark: io.flutter.embedding.engine.systemchannels.SettingsChannel.PlatformBrightness;
							public name: string;
							public static values(): androidNative.Array<io.flutter.embedding.engine.systemchannels.SettingsChannel.PlatformBrightness>;
							public static valueOf(param0: string): io.flutter.embedding.engine.systemchannels.SettingsChannel.PlatformBrightness;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module systemchannels {
					export class SpellCheckChannel {
						public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.SpellCheckChannel>;
						public channel: io.flutter.plugin.common.MethodChannel;
						public parsingMethodHandler: io.flutter.plugin.common.MethodChannel.MethodCallHandler;
						public constructor(param0: io.flutter.embedding.engine.dart.DartExecutor);
						public setSpellCheckMethodHandler(param0: io.flutter.embedding.engine.systemchannels.SpellCheckChannel.SpellCheckMethodHandler): void;
					}
					export module SpellCheckChannel {
						export class SpellCheckMethodHandler {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.SpellCheckChannel.SpellCheckMethodHandler>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.systemchannels.SpellCheckChannel$SpellCheckMethodHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { initiateSpellCheck(param0: string, param1: string, param2: io.flutter.plugin.common.MethodChannel.Result): void });
							public constructor();
							public initiateSpellCheck(param0: string, param1: string, param2: io.flutter.plugin.common.MethodChannel.Result): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module systemchannels {
					export class SystemChannel {
						public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.SystemChannel>;
						public channel: io.flutter.plugin.common.BasicMessageChannel<any>;
						public constructor(param0: io.flutter.embedding.engine.dart.DartExecutor);
						public sendMemoryPressureWarning(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module embedding {
			export module engine {
				export module systemchannels {
					export class TextInputChannel {
						public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.TextInputChannel>;
						public channel: io.flutter.plugin.common.MethodChannel;
						public constructor(param0: io.flutter.embedding.engine.dart.DartExecutor);
						public performPrivateCommand(param0: number, param1: string, param2: globalAndroid.os.Bundle): void;
						public requestExistingInputState(): void;
						public next(param0: number): void;
						public setTextInputMethodHandler(param0: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputMethodHandler): void;
						public updateEditingStateWithDeltas(param0: number, param1: java.util.ArrayList<io.flutter.plugin.editing.TextEditingDelta>): void;
						public updateEditingStateWithTag(param0: number, param1: java.util.HashMap<string, io.flutter.embedding.engine.systemchannels.TextInputChannel.TextEditState>): void;
						public updateEditingState(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number): void;
						public go(param0: number): void;
						public commitContent(param0: number, param1: java.util.Map<string, any>): void;
						public newline(param0: number): void;
						public send(param0: number): void;
						public unspecifiedAction(param0: number): void;
						public search(param0: number): void;
						public done(param0: number): void;
						public previous(param0: number): void;
					}
					export module TextInputChannel {
						export class Configuration {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.TextInputChannel.Configuration>;
							public obscureText: boolean;
							public autocorrect: boolean;
							public enableSuggestions: boolean;
							public enableIMEPersonalizedLearning: boolean;
							public enableDeltaModel: boolean;
							public textCapitalization: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextCapitalization;
							public inputType: io.flutter.embedding.engine.systemchannels.TextInputChannel.InputType;
							public inputAction: java.lang.Integer;
							public actionLabel: string;
							public autofill: io.flutter.embedding.engine.systemchannels.TextInputChannel.Configuration.Autofill;
							public contentCommitMimeTypes: androidNative.Array<string>;
							public fields: androidNative.Array<io.flutter.embedding.engine.systemchannels.TextInputChannel.Configuration>;
							public static fromJson(param0: org.json.JSONObject): io.flutter.embedding.engine.systemchannels.TextInputChannel.Configuration;
							public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextCapitalization, param6: io.flutter.embedding.engine.systemchannels.TextInputChannel.InputType, param7: java.lang.Integer, param8: string, param9: io.flutter.embedding.engine.systemchannels.TextInputChannel.Configuration.Autofill, param10: androidNative.Array<string>, param11: androidNative.Array<io.flutter.embedding.engine.systemchannels.TextInputChannel.Configuration>);
						}
						export module Configuration {
							export class Autofill {
								public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.TextInputChannel.Configuration.Autofill>;
								public uniqueIdentifier: string;
								public hints: androidNative.Array<string>;
								public editState: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextEditState;
								public hintText: string;
								public static fromJson(param0: org.json.JSONObject): io.flutter.embedding.engine.systemchannels.TextInputChannel.Configuration.Autofill;
								public constructor(param0: string, param1: androidNative.Array<string>, param2: string, param3: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextEditState);
							}
						}
						export class InputType {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.TextInputChannel.InputType>;
							public type: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType;
							public isSigned: boolean;
							public isDecimal: boolean;
							public constructor(param0: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType, param1: boolean, param2: boolean);
							public static fromJson(param0: org.json.JSONObject): io.flutter.embedding.engine.systemchannels.TextInputChannel.InputType;
						}
						export class TextCapitalization {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.TextInputChannel.TextCapitalization>;
							public static CHARACTERS: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextCapitalization;
							public static WORDS: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextCapitalization;
							public static SENTENCES: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextCapitalization;
							public static NONE: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextCapitalization;
							public static valueOf(param0: string): io.flutter.embedding.engine.systemchannels.TextInputChannel.TextCapitalization;
							public static values(): androidNative.Array<io.flutter.embedding.engine.systemchannels.TextInputChannel.TextCapitalization>;
						}
						export class TextEditState {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.TextInputChannel.TextEditState>;
							public text: string;
							public selectionStart: number;
							public selectionEnd: number;
							public composingStart: number;
							public composingEnd: number;
							public constructor(param0: string, param1: number, param2: number, param3: number, param4: number);
							public hasSelection(): boolean;
							public static fromJson(param0: org.json.JSONObject): io.flutter.embedding.engine.systemchannels.TextInputChannel.TextEditState;
							public hasComposing(): boolean;
						}
						export class TextInputMethodHandler {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputMethodHandler>;
							/**
							 * Constructs a new instance of the io.flutter.embedding.engine.systemchannels.TextInputChannel$TextInputMethodHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								show(): void;
								hide(): void;
								requestAutofill(): void;
								finishAutofillContext(param0: boolean): void;
								setClient(param0: number, param1: io.flutter.embedding.engine.systemchannels.TextInputChannel.Configuration): void;
								setPlatformViewClient(param0: number, param1: boolean): void;
								setEditableSizeAndTransform(param0: number, param1: number, param2: androidNative.Array<number>): void;
								setEditingState(param0: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextEditState): void;
								clearClient(): void;
								sendAppPrivateCommand(param0: string, param1: globalAndroid.os.Bundle): void;
							});
							public constructor();
							public setPlatformViewClient(param0: number, param1: boolean): void;
							public setEditingState(param0: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextEditState): void;
							public finishAutofillContext(param0: boolean): void;
							public setClient(param0: number, param1: io.flutter.embedding.engine.systemchannels.TextInputChannel.Configuration): void;
							public show(): void;
							public hide(): void;
							public requestAutofill(): void;
							public sendAppPrivateCommand(param0: string, param1: globalAndroid.os.Bundle): void;
							public setEditableSizeAndTransform(param0: number, param1: number, param2: androidNative.Array<number>): void;
							public clearClient(): void;
						}
						export class TextInputType {
							public static class: java.lang.Class<io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType>;
							public static TEXT: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType;
							public static DATETIME: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType;
							public static NAME: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType;
							public static POSTAL_ADDRESS: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType;
							public static NUMBER: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType;
							public static PHONE: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType;
							public static MULTILINE: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType;
							public static EMAIL_ADDRESS: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType;
							public static URL: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType;
							public static VISIBLE_PASSWORD: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType;
							public static NONE: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType;
							public static values(): androidNative.Array<io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType>;
							public static valueOf(param0: string): io.flutter.embedding.engine.systemchannels.TextInputChannel.TextInputType;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class ActivityLifecycleListener {
					public static class: java.lang.Class<io.flutter.plugin.common.ActivityLifecycleListener>;
					/**
					 * Constructs a new instance of the io.flutter.plugin.common.ActivityLifecycleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onPostResume(): void });
					public constructor();
					public onPostResume(): void;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class BasicMessageChannel<T> extends java.lang.Object {
					public static class: java.lang.Class<io.flutter.plugin.common.BasicMessageChannel<any>>;
					public static CHANNEL_BUFFERS_CHANNEL: string;
					public send(param0: T, param1: io.flutter.plugin.common.BasicMessageChannel.Reply<T>): void;
					public resizeChannelBuffer(param0: number): void;
					public constructor(param0: io.flutter.plugin.common.BinaryMessenger, param1: string, param2: io.flutter.plugin.common.MessageCodec<T>, param3: io.flutter.plugin.common.BinaryMessenger.TaskQueue);
					public constructor(param0: io.flutter.plugin.common.BinaryMessenger, param1: string, param2: io.flutter.plugin.common.MessageCodec<T>);
					public send(param0: T): void;
					public setMessageHandler(param0: io.flutter.plugin.common.BasicMessageChannel.MessageHandler<T>): void;
				}
				export module BasicMessageChannel {
					export class IncomingMessageHandler extends io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler {
						public static class: java.lang.Class<io.flutter.plugin.common.BasicMessageChannel.IncomingMessageHandler>;
						public onMessage(param0: java.nio.ByteBuffer, param1: io.flutter.plugin.common.BinaryMessenger.BinaryReply): void;
					}
					export class IncomingReplyHandler extends io.flutter.plugin.common.BinaryMessenger.BinaryReply {
						public static class: java.lang.Class<io.flutter.plugin.common.BasicMessageChannel.IncomingReplyHandler>;
						public reply(param0: java.nio.ByteBuffer): void;
					}
					export class MessageHandler<T> extends java.lang.Object {
						public static class: java.lang.Class<io.flutter.plugin.common.BasicMessageChannel.MessageHandler<any>>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.BasicMessageChannel$MessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMessage(param0: T, param1: io.flutter.plugin.common.BasicMessageChannel.Reply<T>): void });
						public constructor();
						public onMessage(param0: T, param1: io.flutter.plugin.common.BasicMessageChannel.Reply<T>): void;
					}
					export class Reply<T> extends java.lang.Object {
						public static class: java.lang.Class<io.flutter.plugin.common.BasicMessageChannel.Reply<any>>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.BasicMessageChannel$Reply interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { reply(param0: T): void });
						public constructor();
						public reply(param0: T): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class BinaryCodec extends io.flutter.plugin.common.MessageCodec<java.nio.ByteBuffer> {
					public static class: java.lang.Class<io.flutter.plugin.common.BinaryCodec>;
					public static INSTANCE: io.flutter.plugin.common.BinaryCodec;
					public static INSTANCE_DIRECT: io.flutter.plugin.common.BinaryCodec;
					public encodeMessage(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public encodeMessage(param0: any): java.nio.ByteBuffer;
					public decodeMessage(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public decodeMessage(param0: java.nio.ByteBuffer): any;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class BinaryMessenger {
					public static class: java.lang.Class<io.flutter.plugin.common.BinaryMessenger>;
					/**
					 * Constructs a new instance of the io.flutter.plugin.common.BinaryMessenger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						makeBackgroundTaskQueue(): io.flutter.plugin.common.BinaryMessenger.TaskQueue;
						makeBackgroundTaskQueue(param0: io.flutter.plugin.common.BinaryMessenger.TaskQueueOptions): io.flutter.plugin.common.BinaryMessenger.TaskQueue;
						send(param0: string, param1: java.nio.ByteBuffer): void;
						send(param0: string, param1: java.nio.ByteBuffer, param2: io.flutter.plugin.common.BinaryMessenger.BinaryReply): void;
						setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler): void;
						setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler, param2: io.flutter.plugin.common.BinaryMessenger.TaskQueue): void;
						enableBufferingIncomingMessages(): void;
						disableBufferingIncomingMessages(): void;
					});
					public constructor();
					public disableBufferingIncomingMessages(): void;
					public setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler): void;
					public makeBackgroundTaskQueue(param0: io.flutter.plugin.common.BinaryMessenger.TaskQueueOptions): io.flutter.plugin.common.BinaryMessenger.TaskQueue;
					public makeBackgroundTaskQueue(): io.flutter.plugin.common.BinaryMessenger.TaskQueue;
					public send(param0: string, param1: java.nio.ByteBuffer): void;
					public setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler, param2: io.flutter.plugin.common.BinaryMessenger.TaskQueue): void;
					public send(param0: string, param1: java.nio.ByteBuffer, param2: io.flutter.plugin.common.BinaryMessenger.BinaryReply): void;
					public enableBufferingIncomingMessages(): void;
				}
				export module BinaryMessenger {
					export class BinaryMessageHandler {
						public static class: java.lang.Class<io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.BinaryMessenger$BinaryMessageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMessage(param0: java.nio.ByteBuffer, param1: io.flutter.plugin.common.BinaryMessenger.BinaryReply): void });
						public constructor();
						public onMessage(param0: java.nio.ByteBuffer, param1: io.flutter.plugin.common.BinaryMessenger.BinaryReply): void;
					}
					export class BinaryReply {
						public static class: java.lang.Class<io.flutter.plugin.common.BinaryMessenger.BinaryReply>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.BinaryMessenger$BinaryReply interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { reply(param0: java.nio.ByteBuffer): void });
						public constructor();
						public reply(param0: java.nio.ByteBuffer): void;
					}
					export class TaskQueue {
						public static class: java.lang.Class<io.flutter.plugin.common.BinaryMessenger.TaskQueue>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.BinaryMessenger$TaskQueue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
					export class TaskQueueOptions {
						public static class: java.lang.Class<io.flutter.plugin.common.BinaryMessenger.TaskQueueOptions>;
						public getIsSerial(): boolean;
						public constructor();
						public setIsSerial(param0: boolean): io.flutter.plugin.common.BinaryMessenger.TaskQueueOptions;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class ErrorLogResult extends io.flutter.plugin.common.MethodChannel.Result {
					public static class: java.lang.Class<io.flutter.plugin.common.ErrorLogResult>;
					public constructor(param0: string);
					public constructor(param0: string, param1: number);
					public error(param0: string, param1: string, param2: any): void;
					public success(param0: any): void;
					public notImplemented(): void;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class EventChannel {
					public static class: java.lang.Class<io.flutter.plugin.common.EventChannel>;
					public setStreamHandler(param0: io.flutter.plugin.common.EventChannel.StreamHandler): void;
					public constructor(param0: io.flutter.plugin.common.BinaryMessenger, param1: string, param2: io.flutter.plugin.common.MethodCodec);
					public constructor(param0: io.flutter.plugin.common.BinaryMessenger, param1: string, param2: io.flutter.plugin.common.MethodCodec, param3: io.flutter.plugin.common.BinaryMessenger.TaskQueue);
					public constructor(param0: io.flutter.plugin.common.BinaryMessenger, param1: string);
				}
				export module EventChannel {
					export class EventSink {
						public static class: java.lang.Class<io.flutter.plugin.common.EventChannel.EventSink>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.EventChannel$EventSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { success(param0: any): void; error(param0: string, param1: string, param2: any): void; endOfStream(): void });
						public constructor();
						public endOfStream(): void;
						public error(param0: string, param1: string, param2: any): void;
						public success(param0: any): void;
					}
					export class IncomingStreamRequestHandler extends io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler {
						public static class: java.lang.Class<io.flutter.plugin.common.EventChannel.IncomingStreamRequestHandler>;
						public onMessage(param0: java.nio.ByteBuffer, param1: io.flutter.plugin.common.BinaryMessenger.BinaryReply): void;
					}
					export module IncomingStreamRequestHandler {
						export class EventSinkImplementation extends io.flutter.plugin.common.EventChannel.EventSink {
							public static class: java.lang.Class<io.flutter.plugin.common.EventChannel.IncomingStreamRequestHandler.EventSinkImplementation>;
							public endOfStream(): void;
							public success(param0: any): void;
							public error(param0: string, param1: string, param2: any): void;
						}
					}
					export class StreamHandler {
						public static class: java.lang.Class<io.flutter.plugin.common.EventChannel.StreamHandler>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.EventChannel$StreamHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onListen(param0: any, param1: io.flutter.plugin.common.EventChannel.EventSink): void; onCancel(param0: any): void });
						public constructor();
						public onListen(param0: any, param1: io.flutter.plugin.common.EventChannel.EventSink): void;
						public onCancel(param0: any): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class FlutterException {
					public static class: java.lang.Class<io.flutter.plugin.common.FlutterException>;
					public code: string;
					public details: any;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class JSONMessageCodec extends io.flutter.plugin.common.MessageCodec<any> {
					public static class: java.lang.Class<io.flutter.plugin.common.JSONMessageCodec>;
					public static INSTANCE: io.flutter.plugin.common.JSONMessageCodec;
					public encodeMessage(param0: any): java.nio.ByteBuffer;
					public decodeMessage(param0: java.nio.ByteBuffer): any;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class JSONMethodCodec extends io.flutter.plugin.common.MethodCodec {
					public static class: java.lang.Class<io.flutter.plugin.common.JSONMethodCodec>;
					public static INSTANCE: io.flutter.plugin.common.JSONMethodCodec;
					public decodeMethodCall(param0: java.nio.ByteBuffer): io.flutter.plugin.common.MethodCall;
					public encodeSuccessEnvelope(param0: any): java.nio.ByteBuffer;
					public encodeErrorEnvelopeWithStacktrace(param0: string, param1: string, param2: any, param3: string): java.nio.ByteBuffer;
					public decodeEnvelope(param0: java.nio.ByteBuffer): any;
					public encodeMethodCall(param0: io.flutter.plugin.common.MethodCall): java.nio.ByteBuffer;
					public encodeErrorEnvelope(param0: string, param1: string, param2: any): java.nio.ByteBuffer;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class JSONUtil {
					public static class: java.lang.Class<io.flutter.plugin.common.JSONUtil>;
					public static unwrap(param0: any): any;
					public static wrap(param0: any): any;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class MessageCodec<T> extends java.lang.Object {
					public static class: java.lang.Class<io.flutter.plugin.common.MessageCodec<any>>;
					/**
					 * Constructs a new instance of the io.flutter.plugin.common.MessageCodec<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { encodeMessage(param0: T): java.nio.ByteBuffer; decodeMessage(param0: java.nio.ByteBuffer): T });
					public constructor();
					public encodeMessage(param0: T): java.nio.ByteBuffer;
					public decodeMessage(param0: java.nio.ByteBuffer): T;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class MethodCall {
					public static class: java.lang.Class<io.flutter.plugin.common.MethodCall>;
					public method: string;
					public constructor(param0: string, param1: any);
					public argument(param0: string): any;
					public arguments(): any;
					public hasArgument(param0: string): boolean;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class MethodChannel {
					public static class: java.lang.Class<io.flutter.plugin.common.MethodChannel>;
					public invokeMethod(param0: string, param1: any): void;
					public constructor(param0: io.flutter.plugin.common.BinaryMessenger, param1: string, param2: io.flutter.plugin.common.MethodCodec);
					public constructor(param0: io.flutter.plugin.common.BinaryMessenger, param1: string, param2: io.flutter.plugin.common.MethodCodec, param3: io.flutter.plugin.common.BinaryMessenger.TaskQueue);
					public resizeChannelBuffer(param0: number): void;
					public setMethodCallHandler(param0: io.flutter.plugin.common.MethodChannel.MethodCallHandler): void;
					public constructor(param0: io.flutter.plugin.common.BinaryMessenger, param1: string);
					public invokeMethod(param0: string, param1: any, param2: io.flutter.plugin.common.MethodChannel.Result): void;
				}
				export module MethodChannel {
					export class IncomingMethodCallHandler extends io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler {
						public static class: java.lang.Class<io.flutter.plugin.common.MethodChannel.IncomingMethodCallHandler>;
						public onMessage(param0: java.nio.ByteBuffer, param1: io.flutter.plugin.common.BinaryMessenger.BinaryReply): void;
					}
					export class IncomingResultHandler extends io.flutter.plugin.common.BinaryMessenger.BinaryReply {
						public static class: java.lang.Class<io.flutter.plugin.common.MethodChannel.IncomingResultHandler>;
						public reply(param0: java.nio.ByteBuffer): void;
					}
					export class MethodCallHandler {
						public static class: java.lang.Class<io.flutter.plugin.common.MethodChannel.MethodCallHandler>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.MethodChannel$MethodCallHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMethodCall(param0: io.flutter.plugin.common.MethodCall, param1: io.flutter.plugin.common.MethodChannel.Result): void });
						public constructor();
						public onMethodCall(param0: io.flutter.plugin.common.MethodCall, param1: io.flutter.plugin.common.MethodChannel.Result): void;
					}
					export class Result {
						public static class: java.lang.Class<io.flutter.plugin.common.MethodChannel.Result>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.MethodChannel$Result interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { success(param0: any): void; error(param0: string, param1: string, param2: any): void; notImplemented(): void });
						public constructor();
						public error(param0: string, param1: string, param2: any): void;
						public notImplemented(): void;
						public success(param0: any): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class MethodCodec {
					public static class: java.lang.Class<io.flutter.plugin.common.MethodCodec>;
					/**
					 * Constructs a new instance of the io.flutter.plugin.common.MethodCodec interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { encodeMethodCall(param0: io.flutter.plugin.common.MethodCall): java.nio.ByteBuffer; decodeMethodCall(param0: java.nio.ByteBuffer): io.flutter.plugin.common.MethodCall; encodeSuccessEnvelope(param0: any): java.nio.ByteBuffer; encodeErrorEnvelope(param0: string, param1: string, param2: any): java.nio.ByteBuffer; encodeErrorEnvelopeWithStacktrace(param0: string, param1: string, param2: any, param3: string): java.nio.ByteBuffer; decodeEnvelope(param0: java.nio.ByteBuffer): any });
					public constructor();
					public decodeMethodCall(param0: java.nio.ByteBuffer): io.flutter.plugin.common.MethodCall;
					public encodeSuccessEnvelope(param0: any): java.nio.ByteBuffer;
					public encodeErrorEnvelopeWithStacktrace(param0: string, param1: string, param2: any, param3: string): java.nio.ByteBuffer;
					public decodeEnvelope(param0: java.nio.ByteBuffer): any;
					public encodeMethodCall(param0: io.flutter.plugin.common.MethodCall): java.nio.ByteBuffer;
					public encodeErrorEnvelope(param0: string, param1: string, param2: any): java.nio.ByteBuffer;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class PluginRegistry {
					public static class: java.lang.Class<io.flutter.plugin.common.PluginRegistry>;
					/**
					 * Constructs a new instance of the io.flutter.plugin.common.PluginRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { registrarFor(param0: string): io.flutter.plugin.common.PluginRegistry.Registrar; hasPlugin(param0: string): boolean; valuePublishedByPlugin(param0: string): any });
					public constructor();
					/** @deprecated */
					public hasPlugin(param0: string): boolean;
					/** @deprecated */
					public valuePublishedByPlugin(param0: string): any;
					/** @deprecated */
					public registrarFor(param0: string): io.flutter.plugin.common.PluginRegistry.Registrar;
				}
				export module PluginRegistry {
					export class ActivityResultListener {
						public static class: java.lang.Class<io.flutter.plugin.common.PluginRegistry.ActivityResultListener>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.PluginRegistry$ActivityResultListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean });
						public constructor();
						public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
					}
					export class NewIntentListener {
						public static class: java.lang.Class<io.flutter.plugin.common.PluginRegistry.NewIntentListener>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.PluginRegistry$NewIntentListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onNewIntent(param0: globalAndroid.content.Intent): boolean });
						public constructor();
						public onNewIntent(param0: globalAndroid.content.Intent): boolean;
					}
					export class PluginRegistrantCallback {
						public static class: java.lang.Class<io.flutter.plugin.common.PluginRegistry.PluginRegistrantCallback>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.PluginRegistry$PluginRegistrantCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { registerWith(param0: io.flutter.plugin.common.PluginRegistry): void });
						public constructor();
						public registerWith(param0: io.flutter.plugin.common.PluginRegistry): void;
					}
					export class Registrar {
						public static class: java.lang.Class<io.flutter.plugin.common.PluginRegistry.Registrar>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.PluginRegistry$Registrar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							activity(): globalAndroid.app.Activity;
							context(): globalAndroid.content.Context;
							activeContext(): globalAndroid.content.Context;
							messenger(): io.flutter.plugin.common.BinaryMessenger;
							textures(): io.flutter.view.TextureRegistry;
							platformViewRegistry(): io.flutter.plugin.platform.PlatformViewRegistry;
							view(): io.flutter.view.FlutterView;
							lookupKeyForAsset(param0: string): string;
							lookupKeyForAsset(param0: string, param1: string): string;
							publish(param0: any): io.flutter.plugin.common.PluginRegistry.Registrar;
							addRequestPermissionsResultListener(param0: io.flutter.plugin.common.PluginRegistry.RequestPermissionsResultListener): io.flutter.plugin.common.PluginRegistry.Registrar;
							addActivityResultListener(param0: io.flutter.plugin.common.PluginRegistry.ActivityResultListener): io.flutter.plugin.common.PluginRegistry.Registrar;
							addNewIntentListener(param0: io.flutter.plugin.common.PluginRegistry.NewIntentListener): io.flutter.plugin.common.PluginRegistry.Registrar;
							addUserLeaveHintListener(param0: io.flutter.plugin.common.PluginRegistry.UserLeaveHintListener): io.flutter.plugin.common.PluginRegistry.Registrar;
							addViewDestroyListener(param0: io.flutter.plugin.common.PluginRegistry.ViewDestroyListener): io.flutter.plugin.common.PluginRegistry.Registrar;
						});
						public constructor();
						public lookupKeyForAsset(param0: string): string;
						public addNewIntentListener(param0: io.flutter.plugin.common.PluginRegistry.NewIntentListener): io.flutter.plugin.common.PluginRegistry.Registrar;
						public messenger(): io.flutter.plugin.common.BinaryMessenger;
						public activity(): globalAndroid.app.Activity;
						public addActivityResultListener(param0: io.flutter.plugin.common.PluginRegistry.ActivityResultListener): io.flutter.plugin.common.PluginRegistry.Registrar;
						public addUserLeaveHintListener(param0: io.flutter.plugin.common.PluginRegistry.UserLeaveHintListener): io.flutter.plugin.common.PluginRegistry.Registrar;
						public addRequestPermissionsResultListener(param0: io.flutter.plugin.common.PluginRegistry.RequestPermissionsResultListener): io.flutter.plugin.common.PluginRegistry.Registrar;
						public addViewDestroyListener(param0: io.flutter.plugin.common.PluginRegistry.ViewDestroyListener): io.flutter.plugin.common.PluginRegistry.Registrar;
						public activeContext(): globalAndroid.content.Context;
						public context(): globalAndroid.content.Context;
						public view(): io.flutter.view.FlutterView;
						public lookupKeyForAsset(param0: string, param1: string): string;
						public platformViewRegistry(): io.flutter.plugin.platform.PlatformViewRegistry;
						public textures(): io.flutter.view.TextureRegistry;
						public publish(param0: any): io.flutter.plugin.common.PluginRegistry.Registrar;
					}
					export class RequestPermissionsResultListener {
						public static class: java.lang.Class<io.flutter.plugin.common.PluginRegistry.RequestPermissionsResultListener>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.PluginRegistry$RequestPermissionsResultListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): boolean });
						public constructor();
						public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): boolean;
					}
					export class UserLeaveHintListener {
						public static class: java.lang.Class<io.flutter.plugin.common.PluginRegistry.UserLeaveHintListener>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.PluginRegistry$UserLeaveHintListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onUserLeaveHint(): void });
						public constructor();
						public onUserLeaveHint(): void;
					}
					export class ViewDestroyListener {
						public static class: java.lang.Class<io.flutter.plugin.common.PluginRegistry.ViewDestroyListener>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.common.PluginRegistry$ViewDestroyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onViewDestroy(param0: io.flutter.view.FlutterNativeView): boolean });
						public constructor();
						public onViewDestroy(param0: io.flutter.view.FlutterNativeView): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class StandardMessageCodec extends io.flutter.plugin.common.MessageCodec<any> {
					public static class: java.lang.Class<io.flutter.plugin.common.StandardMessageCodec>;
					public static INSTANCE: io.flutter.plugin.common.StandardMessageCodec;
					public static readSize(param0: java.nio.ByteBuffer): number;
					public readValueOfType(param0: number, param1: java.nio.ByteBuffer): any;
					public static writeLong(param0: java.io.ByteArrayOutputStream, param1: number): void;
					public readValue(param0: java.nio.ByteBuffer): any;
					public static writeInt(param0: java.io.ByteArrayOutputStream, param1: number): void;
					public static writeDouble(param0: java.io.ByteArrayOutputStream, param1: number): void;
					public static writeAlignment(param0: java.io.ByteArrayOutputStream, param1: number): void;
					public writeValue(param0: java.io.ByteArrayOutputStream, param1: any): void;
					public static readAlignment(param0: java.nio.ByteBuffer, param1: number): void;
					public encodeMessage(param0: any): java.nio.ByteBuffer;
					public static writeFloat(param0: java.io.ByteArrayOutputStream, param1: number): void;
					public static readBytes(param0: java.nio.ByteBuffer): androidNative.Array<number>;
					public constructor();
					public static writeSize(param0: java.io.ByteArrayOutputStream, param1: number): void;
					public static writeBytes(param0: java.io.ByteArrayOutputStream, param1: androidNative.Array<number>): void;
					public static writeChar(param0: java.io.ByteArrayOutputStream, param1: number): void;
					public decodeMessage(param0: java.nio.ByteBuffer): any;
				}
				export module StandardMessageCodec {
					export class ExposedByteArrayOutputStream {
						public static class: java.lang.Class<io.flutter.plugin.common.StandardMessageCodec.ExposedByteArrayOutputStream>;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class StandardMethodCodec extends io.flutter.plugin.common.MethodCodec {
					public static class: java.lang.Class<io.flutter.plugin.common.StandardMethodCodec>;
					public static INSTANCE: io.flutter.plugin.common.StandardMethodCodec;
					public decodeMethodCall(param0: java.nio.ByteBuffer): io.flutter.plugin.common.MethodCall;
					public encodeSuccessEnvelope(param0: any): java.nio.ByteBuffer;
					public constructor(param0: io.flutter.plugin.common.StandardMessageCodec);
					public encodeErrorEnvelopeWithStacktrace(param0: string, param1: string, param2: any, param3: string): java.nio.ByteBuffer;
					public decodeEnvelope(param0: java.nio.ByteBuffer): any;
					public encodeMethodCall(param0: io.flutter.plugin.common.MethodCall): java.nio.ByteBuffer;
					public encodeErrorEnvelope(param0: string, param1: string, param2: any): java.nio.ByteBuffer;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module common {
				export class StringCodec extends io.flutter.plugin.common.MessageCodec<string> {
					public static class: java.lang.Class<io.flutter.plugin.common.StringCodec>;
					public static INSTANCE: io.flutter.plugin.common.StringCodec;
					public encodeMessage(param0: any): java.nio.ByteBuffer;
					public decodeMessage(param0: java.nio.ByteBuffer): string;
					public encodeMessage(param0: string): java.nio.ByteBuffer;
					public decodeMessage(param0: java.nio.ByteBuffer): any;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module editing {
				export class FlutterTextUtils {
					public static class: java.lang.Class<io.flutter.plugin.editing.FlutterTextUtils>;
					public static LINE_FEED: number;
					public static CARRIAGE_RETURN: number;
					public static COMBINING_ENCLOSING_KEYCAP: number;
					public static CANCEL_TAG: number;
					public static ZERO_WIDTH_JOINER: number;
					public constructor(param0: io.flutter.embedding.engine.FlutterJNI);
					public getOffsetAfter(param0: string, param1: number): number;
					public isEmojiModifierBase(param0: number): boolean;
					public isTagSpecChar(param0: number): boolean;
					public getOffsetBefore(param0: string, param1: number): number;
					public isVariationSelector(param0: number): boolean;
					public isRegionalIndicatorSymbol(param0: number): boolean;
					public isEmoji(param0: number): boolean;
					public isEmojiModifier(param0: number): boolean;
					public isKeycapBase(param0: number): boolean;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module editing {
				export class ImeSyncDeferringInsetsCallback {
					public static class: java.lang.Class<io.flutter.plugin.editing.ImeSyncDeferringInsetsCallback>;
				}
				export module ImeSyncDeferringInsetsCallback {
					export class AnimationCallback {
						public static class: java.lang.Class<io.flutter.plugin.editing.ImeSyncDeferringInsetsCallback.AnimationCallback>;
						public onProgress(param0: globalAndroid.view.WindowInsets, param1: java.util.List<globalAndroid.view.WindowInsetsAnimation>): globalAndroid.view.WindowInsets;
						public onEnd(param0: globalAndroid.view.WindowInsetsAnimation): void;
						public onPrepare(param0: globalAndroid.view.WindowInsetsAnimation): void;
					}
					export class InsetsListener {
						public static class: java.lang.Class<io.flutter.plugin.editing.ImeSyncDeferringInsetsCallback.InsetsListener>;
						public onApplyWindowInsets(param0: globalAndroid.view.View, param1: globalAndroid.view.WindowInsets): globalAndroid.view.WindowInsets;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module editing {
				export class InputConnectionAdaptor implements io.flutter.plugin.editing.ListenableEditingState.EditingStateWatcher {
					public static class: java.lang.Class<io.flutter.plugin.editing.InputConnectionAdaptor>;
					public handleKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
					public performEditorAction(param0: number): boolean;
					public commitText(param0: string, param1: number): boolean;
					public sendKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
					public deleteSurroundingText(param0: number, param1: number): boolean;
					public deleteSurroundingTextInCodePoints(param0: number, param1: number): boolean;
					public clearMetaKeyStates(param0: number): boolean;
					public closeConnection(): void;
					public requestCursorUpdates(param0: number): boolean;
					public getEditable(): globalAndroid.text.Editable;
					public getExtractedText(param0: globalAndroid.view.inputmethod.ExtractedTextRequest, param1: number): globalAndroid.view.inputmethod.ExtractedText;
					public performPrivateCommand(param0: string, param1: globalAndroid.os.Bundle): boolean;
					public commitContent(param0: globalAndroid.view.inputmethod.InputContentInfo, param1: number, param2: globalAndroid.os.Bundle): boolean;
					public didChangeEditingState(param0: boolean, param1: boolean, param2: boolean): void;
					public setComposingRegion(param0: number, param1: number): boolean;
					public constructor(param0: globalAndroid.view.View, param1: number, param2: io.flutter.embedding.engine.systemchannels.TextInputChannel, param3: io.flutter.plugin.editing.InputConnectionAdaptor.KeyboardDelegate, param4: io.flutter.plugin.editing.ListenableEditingState, param5: globalAndroid.view.inputmethod.EditorInfo, param6: io.flutter.embedding.engine.FlutterJNI);
					public finishComposingText(): boolean;
					public endBatchEdit(): boolean;
					public constructor(param0: globalAndroid.view.View, param1: number, param2: io.flutter.embedding.engine.systemchannels.TextInputChannel, param3: io.flutter.plugin.editing.InputConnectionAdaptor.KeyboardDelegate, param4: io.flutter.plugin.editing.ListenableEditingState, param5: globalAndroid.view.inputmethod.EditorInfo);
					public beginBatchEdit(): boolean;
					public setComposingText(param0: string, param1: number): boolean;
					public performContextMenuAction(param0: number): boolean;
					public setSelection(param0: number, param1: number): boolean;
				}
				export module InputConnectionAdaptor {
					export class KeyboardDelegate {
						public static class: java.lang.Class<io.flutter.plugin.editing.InputConnectionAdaptor.KeyboardDelegate>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.editing.InputConnectionAdaptor$KeyboardDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { handleEvent(param0: globalAndroid.view.KeyEvent): boolean });
						public constructor();
						public handleEvent(param0: globalAndroid.view.KeyEvent): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module editing {
				export class ListenableEditingState {
					public static class: java.lang.Class<io.flutter.plugin.editing.ListenableEditingState>;
					public setSpan(param0: any, param1: number, param2: number, param3: number): void;
					public extractBatchTextEditingDeltas(): java.util.ArrayList<io.flutter.plugin.editing.TextEditingDelta>;
					public setComposingRange(param0: number, param1: number): void;
					public getComposingStart(): number;
					public endBatchEdit(): void;
					public replace(param0: number, param1: number, param2: string, param3: number, param4: number): globalAndroid.text.SpannableStringBuilder;
					public addEditingStateListener(param0: io.flutter.plugin.editing.ListenableEditingState.EditingStateWatcher): void;
					public getSelectionStart(): number;
					public setEditingState(param0: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextEditState): void;
					public constructor(param0: io.flutter.embedding.engine.systemchannels.TextInputChannel.TextEditState, param1: globalAndroid.view.View);
					public beginBatchEdit(): void;
					public removeEditingStateListener(param0: io.flutter.plugin.editing.ListenableEditingState.EditingStateWatcher): void;
					public toString(): string;
					public getSelectionEnd(): number;
					public clearBatchDeltas(): void;
					public getComposingEnd(): number;
				}
				export module ListenableEditingState {
					export class EditingStateWatcher {
						public static class: java.lang.Class<io.flutter.plugin.editing.ListenableEditingState.EditingStateWatcher>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.editing.ListenableEditingState$EditingStateWatcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { didChangeEditingState(param0: boolean, param1: boolean, param2: boolean): void });
						public constructor();
						public didChangeEditingState(param0: boolean, param1: boolean, param2: boolean): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module editing {
				export class SpellCheckPlugin extends io.flutter.embedding.engine.systemchannels.SpellCheckChannel.SpellCheckMethodHandler {
					public static class: java.lang.Class<io.flutter.plugin.editing.SpellCheckPlugin>;
					public static START_INDEX_KEY: string;
					public static END_INDEX_KEY: string;
					public static SUGGESTIONS_KEY: string;
					public destroy(): void;
					public constructor(param0: globalAndroid.view.textservice.TextServicesManager, param1: io.flutter.embedding.engine.systemchannels.SpellCheckChannel);
					public initiateSpellCheck(param0: string, param1: string, param2: io.flutter.plugin.common.MethodChannel.Result): void;
					public onGetSuggestions(param0: androidNative.Array<globalAndroid.view.textservice.SuggestionsInfo>): void;
					public performSpellCheck(param0: string, param1: string): void;
					public onGetSentenceSuggestions(param0: androidNative.Array<globalAndroid.view.textservice.SentenceSuggestionsInfo>): void;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module editing {
				export class TextEditingDelta {
					public static class: java.lang.Class<io.flutter.plugin.editing.TextEditingDelta>;
					public getNewSelectionStart(): number;
					public getNewComposingEnd(): number;
					public getDeltaText(): string;
					public constructor(param0: string, param1: number, param2: number, param3: string, param4: number, param5: number, param6: number, param7: number);
					public getNewSelectionEnd(): number;
					public toJSON(): org.json.JSONObject;
					public getDeltaEnd(): number;
					public getNewComposingStart(): number;
					public constructor(param0: string, param1: number, param2: number, param3: number, param4: number);
					public getOldText(): string;
					public getDeltaStart(): number;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module editing {
				export class TextInputPlugin extends io.flutter.plugin.editing.ListenableEditingState.EditingStateWatcher {
					public static class: java.lang.Class<io.flutter.plugin.editing.TextInputPlugin>;
					public getInputMethodManager(): globalAndroid.view.inputmethod.InputMethodManager;
					public unlockPlatformViewInputConnection(): void;
					public createInputConnection(param0: globalAndroid.view.View, param1: io.flutter.embedding.android.KeyboardManager, param2: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
					public handleKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
					public autofill(param0: globalAndroid.util.SparseArray<globalAndroid.view.autofill.AutofillValue>): void;
					public lockPlatformViewInputConnection(): void;
					public clearPlatformViewClient(param0: number): void;
					public sendTextInputAppPrivateCommand(param0: string, param1: globalAndroid.os.Bundle): void;
					public didChangeEditingState(param0: boolean, param1: boolean, param2: boolean): void;
					public destroy(): void;
					public getLastInputConnection(): globalAndroid.view.inputmethod.InputConnection;
					public onProvideAutofillVirtualStructure(param0: any, param1: number): void;
					public constructor(param0: globalAndroid.view.View, param1: io.flutter.embedding.engine.systemchannels.TextInputChannel, param2: io.flutter.plugin.platform.PlatformViewsController);
				}
				export module TextInputPlugin {
					export class InputTarget {
						public static class: java.lang.Class<io.flutter.plugin.editing.TextInputPlugin.InputTarget>;
						public constructor(param0: io.flutter.plugin.editing.TextInputPlugin.InputTarget.Type, param1: number);
					}
					export module InputTarget {
						export class Type {
							public static class: java.lang.Class<io.flutter.plugin.editing.TextInputPlugin.InputTarget.Type>;
							public static NO_TARGET: io.flutter.plugin.editing.TextInputPlugin.InputTarget.Type;
							public static FRAMEWORK_CLIENT: io.flutter.plugin.editing.TextInputPlugin.InputTarget.Type;
							public static VIRTUAL_DISPLAY_PLATFORM_VIEW: io.flutter.plugin.editing.TextInputPlugin.InputTarget.Type;
							public static PHYSICAL_DISPLAY_PLATFORM_VIEW: io.flutter.plugin.editing.TextInputPlugin.InputTarget.Type;
							public static values(): androidNative.Array<io.flutter.plugin.editing.TextInputPlugin.InputTarget.Type>;
							public static valueOf(param0: string): io.flutter.plugin.editing.TextInputPlugin.InputTarget.Type;
						}
					}
					export class MinMax {
						public static class: java.lang.Class<io.flutter.plugin.editing.TextInputPlugin.MinMax>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.editing.TextInputPlugin$MinMax interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { inspect(param0: number, param1: number): void });
						public constructor();
						public inspect(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module localization {
				export class LocalizationPlugin {
					public static class: java.lang.Class<io.flutter.plugin.localization.LocalizationPlugin>;
					public resolveNativeLocale(param0: java.util.List<java.util.Locale>): java.util.Locale;
					public constructor(param0: globalAndroid.content.Context, param1: io.flutter.embedding.engine.systemchannels.LocalizationChannel);
					public sendLocalesToFlutter(param0: globalAndroid.content.res.Configuration): void;
					public static localeFromString(param0: string): java.util.Locale;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module mouse {
				export class MouseCursorPlugin {
					public static class: java.lang.Class<io.flutter.plugin.mouse.MouseCursorPlugin>;
					public destroy(): void;
					public constructor(param0: io.flutter.plugin.mouse.MouseCursorPlugin.MouseCursorViewDelegate, param1: io.flutter.embedding.engine.systemchannels.MouseCursorChannel);
				}
				export module MouseCursorPlugin {
					export class MouseCursorViewDelegate {
						public static class: java.lang.Class<io.flutter.plugin.mouse.MouseCursorPlugin.MouseCursorViewDelegate>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.mouse.MouseCursorPlugin$MouseCursorViewDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getSystemPointerIcon(param0: number): any; setPointerIcon(param0: any): void });
						public constructor();
						public getSystemPointerIcon(param0: number): any;
						public setPointerIcon(param0: any): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module platform {
				export class AccessibilityEventsDelegate {
					public static class: java.lang.Class<io.flutter.plugin.platform.AccessibilityEventsDelegate>;
					public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public onAccessibilityHoverEvent(param0: globalAndroid.view.MotionEvent, param1: boolean): boolean;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module platform {
				export class PlatformOverlayView extends io.flutter.embedding.android.FlutterImageView {
					public static class: java.lang.Class<io.flutter.plugin.platform.PlatformOverlayView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: io.flutter.plugin.platform.AccessibilityEventsDelegate);
					public pause(): void;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: io.flutter.embedding.android.FlutterImageView.SurfaceKind);
					public getAttachedRenderer(): io.flutter.embedding.engine.renderer.FlutterRenderer;
					public attachToRenderer(param0: io.flutter.embedding.engine.renderer.FlutterRenderer): void;
					public detachFromRenderer(): void;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module platform {
				export class PlatformPlugin {
					public static class: java.lang.Class<io.flutter.plugin.platform.PlatformPlugin>;
					public static DEFAULT_SYSTEM_UI: number;
					public constructor(param0: globalAndroid.app.Activity, param1: io.flutter.embedding.engine.systemchannels.PlatformChannel, param2: io.flutter.plugin.platform.PlatformPlugin.PlatformPluginDelegate);
					public destroy(): void;
					public constructor(param0: globalAndroid.app.Activity, param1: io.flutter.embedding.engine.systemchannels.PlatformChannel);
					public updateSystemUiOverlays(): void;
				}
				export module PlatformPlugin {
					export class PlatformPluginDelegate {
						public static class: java.lang.Class<io.flutter.plugin.platform.PlatformPlugin.PlatformPluginDelegate>;
						/**
						 * Constructs a new instance of the io.flutter.plugin.platform.PlatformPlugin$PlatformPluginDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { popSystemNavigator(): boolean });
						public constructor();
						public popSystemNavigator(): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module platform {
				export class PlatformView {
					public static class: java.lang.Class<io.flutter.plugin.platform.PlatformView>;
					/**
					 * Constructs a new instance of the io.flutter.plugin.platform.PlatformView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getView(): globalAndroid.view.View; onFlutterViewAttached(param0: globalAndroid.view.View): void; onFlutterViewDetached(): void; dispose(): void; onInputConnectionLocked(): void; onInputConnectionUnlocked(): void });
					public constructor();
					public getView(): globalAndroid.view.View;
					public onFlutterViewDetached(): void;
					public onFlutterViewAttached(param0: globalAndroid.view.View): void;
					public onInputConnectionLocked(): void;
					public dispose(): void;
					public onInputConnectionUnlocked(): void;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module platform {
				export abstract class PlatformViewFactory {
					public static class: java.lang.Class<io.flutter.plugin.platform.PlatformViewFactory>;
					public getCreateArgsCodec(): io.flutter.plugin.common.MessageCodec<any>;
					public constructor(param0: io.flutter.plugin.common.MessageCodec<any>);
					public create(param0: globalAndroid.content.Context, param1: number, param2: any): io.flutter.plugin.platform.PlatformView;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module platform {
				export class PlatformViewRegistry {
					public static class: java.lang.Class<io.flutter.plugin.platform.PlatformViewRegistry>;
					/**
					 * Constructs a new instance of the io.flutter.plugin.platform.PlatformViewRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { registerViewFactory(param0: string, param1: io.flutter.plugin.platform.PlatformViewFactory): boolean });
					public constructor();
					public registerViewFactory(param0: string, param1: io.flutter.plugin.platform.PlatformViewFactory): boolean;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module platform {
				export class PlatformViewRegistryImpl extends io.flutter.plugin.platform.PlatformViewRegistry {
					public static class: java.lang.Class<io.flutter.plugin.platform.PlatformViewRegistryImpl>;
					public registerViewFactory(param0: string, param1: io.flutter.plugin.platform.PlatformViewFactory): boolean;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module platform {
				export class PlatformViewWrapper {
					public static class: java.lang.Class<io.flutter.plugin.platform.PlatformViewWrapper>;
					public setBufferSize(param0: number, param1: number): void;
					public setLayoutParams(param0: globalAndroid.widget.FrameLayout.LayoutParams): void;
					public setOnDescendantFocusChangeListener(param0: globalAndroid.view.View.OnFocusChangeListener): void;
					public unsetOnDescendantFocusChangeListener(): void;
					public release(): void;
					public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
					public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public createSurface(param0: globalAndroid.graphics.SurfaceTexture): globalAndroid.view.Surface;
					public constructor(param0: globalAndroid.content.Context);
					public getBufferHeight(): number;
					public getTexture(): globalAndroid.graphics.SurfaceTexture;
					public getBufferWidth(): number;
					public invalidateChildInParent(param0: androidNative.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
					public setTouchProcessor(param0: io.flutter.embedding.android.AndroidTouchProcessor): void;
					public setTexture(param0: globalAndroid.graphics.SurfaceTexture): void;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: io.flutter.view.TextureRegistry.SurfaceTextureEntry);
					public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module platform {
				export class PlatformViewsAccessibilityDelegate {
					public static class: java.lang.Class<io.flutter.plugin.platform.PlatformViewsAccessibilityDelegate>;
					/**
					 * Constructs a new instance of the io.flutter.plugin.platform.PlatformViewsAccessibilityDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getPlatformViewById(param0: number): globalAndroid.view.View; usesVirtualDisplay(param0: number): boolean; attachAccessibilityBridge(param0: io.flutter.view.AccessibilityBridge): void; detachAccessibilityBridge(): void });
					public constructor();
					public detachAccessibilityBridge(): void;
					public getPlatformViewById(param0: number): globalAndroid.view.View;
					public usesVirtualDisplay(param0: number): boolean;
					public attachAccessibilityBridge(param0: io.flutter.view.AccessibilityBridge): void;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module platform {
				export class PlatformViewsController extends io.flutter.plugin.platform.PlatformViewsAccessibilityDelegate {
					public static class: java.lang.Class<io.flutter.plugin.platform.PlatformViewsController>;
					public createOverlaySurface(param0: io.flutter.plugin.platform.PlatformOverlayView): io.flutter.embedding.engine.FlutterOverlaySurface;
					public checkInputConnectionProxy(param0: globalAndroid.view.View): boolean;
					public onEndFrame(): void;
					public detachFromView(): void;
					public attachToView(param0: io.flutter.embedding.android.FlutterView): void;
					public getRegistry(): io.flutter.plugin.platform.PlatformViewRegistry;
					public destroyOverlaySurfaces(): void;
					public onBeginFrame(): void;
					public onAttachedToJNI(): void;
					public constructor();
					public getPlatformViewById(param0: number): globalAndroid.view.View;
					public createOverlaySurface(): io.flutter.embedding.engine.FlutterOverlaySurface;
					public detach(): void;
					public detachAccessibilityBridge(): void;
					public attachTextInputPlugin(param0: io.flutter.plugin.editing.TextInputPlugin): void;
					public onDisplayPlatformView(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: io.flutter.embedding.engine.mutatorsstack.FlutterMutatorsStack): void;
					public attach(param0: globalAndroid.content.Context, param1: io.flutter.view.TextureRegistry, param2: io.flutter.embedding.engine.dart.DartExecutor): void;
					public detachTextInputPlugin(): void;
					public toMotionEvent(param0: number, param1: io.flutter.embedding.engine.systemchannels.PlatformViewsChannel.PlatformViewTouch, param2: boolean): globalAndroid.view.MotionEvent;
					public attachToFlutterRenderer(param0: io.flutter.embedding.engine.renderer.FlutterRenderer): void;
					public onPreEngineRestart(): void;
					public onDetachedFromJNI(): void;
					public onDisplayOverlaySurface(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public setSoftwareRendering(param0: boolean): void;
					public attachAccessibilityBridge(param0: io.flutter.view.AccessibilityBridge): void;
					public usesVirtualDisplay(param0: number): boolean;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module platform {
				export class SingleViewPresentation {
					public static class: java.lang.Class<io.flutter.plugin.platform.SingleViewPresentation>;
					public getView(): io.flutter.plugin.platform.PlatformView;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public detachState(): io.flutter.plugin.platform.SingleViewPresentation.PresentationState;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.Display, param2: io.flutter.plugin.platform.PlatformView, param3: io.flutter.plugin.platform.AccessibilityEventsDelegate, param4: number, param5: globalAndroid.view.View.OnFocusChangeListener);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.Display, param2: io.flutter.plugin.platform.AccessibilityEventsDelegate, param3: io.flutter.plugin.platform.SingleViewPresentation.PresentationState, param4: globalAndroid.view.View.OnFocusChangeListener, param5: boolean);
				}
				export module SingleViewPresentation {
					export class AccessibilityDelegatingFrameLayout {
						public static class: java.lang.Class<io.flutter.plugin.platform.SingleViewPresentation.AccessibilityDelegatingFrameLayout>;
						public constructor(param0: globalAndroid.content.Context, param1: io.flutter.plugin.platform.AccessibilityEventsDelegate, param2: globalAndroid.view.View);
						public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					}
					export class FakeWindowViewGroup {
						public static class: java.lang.Class<io.flutter.plugin.platform.SingleViewPresentation.FakeWindowViewGroup>;
						public constructor(param0: globalAndroid.content.Context);
						public onMeasure(param0: number, param1: number): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					}
					export class ImmContext {
						public static class: java.lang.Class<io.flutter.plugin.platform.SingleViewPresentation.ImmContext>;
						public createDisplayContext(param0: globalAndroid.view.Display): globalAndroid.content.Context;
						public getSystemService(param0: string): any;
					}
					export class PresentationContext {
						public static class: java.lang.Class<io.flutter.plugin.platform.SingleViewPresentation.PresentationContext>;
						public getSystemService(param0: string): any;
					}
					export class PresentationState {
						public static class: java.lang.Class<io.flutter.plugin.platform.SingleViewPresentation.PresentationState>;
					}
					export class WindowManagerHandler {
						public static class: java.lang.Class<io.flutter.plugin.platform.SingleViewPresentation.WindowManagerHandler>;
						public invoke(param0: any, param1: java.lang.reflect.Method, param2: androidNative.Array<any>): any;
						public getWindowManager(): globalAndroid.view.WindowManager;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module plugin {
			export module platform {
				export class VirtualDisplayController {
					public static class: java.lang.Class<io.flutter.plugin.platform.VirtualDisplayController>;
					public getBufferHeight(): number;
					public getView(): globalAndroid.view.View;
					public resize(param0: number, param1: number, param2: java.lang.Runnable): void;
					public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): void;
					public getBufferWidth(): number;
					public static create(param0: globalAndroid.content.Context, param1: io.flutter.plugin.platform.AccessibilityEventsDelegate, param2: io.flutter.plugin.platform.PlatformView, param3: io.flutter.view.TextureRegistry.SurfaceTextureEntry, param4: number, param5: number, param6: number, param7: any, param8: globalAndroid.view.View.OnFocusChangeListener): io.flutter.plugin.platform.VirtualDisplayController;
					public dispose(): void;
				}
				export module VirtualDisplayController {
					export class OneTimeOnDrawListener {
						public static class: java.lang.Class<io.flutter.plugin.platform.VirtualDisplayController.OneTimeOnDrawListener>;
						public onDraw(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module util {
			export class HandlerCompat {
				public static class: java.lang.Class<io.flutter.util.HandlerCompat>;
				public static createAsyncHandler(param0: globalAndroid.os.Looper): globalAndroid.os.Handler;
				public constructor();
			}
		}
	}
}

declare module io {
	export module flutter {
		export module util {
			export class PathUtils {
				public static class: java.lang.Class<io.flutter.util.PathUtils>;
				public static getCacheDirectory(param0: globalAndroid.content.Context): string;
				public static getDataDirectory(param0: globalAndroid.content.Context): string;
				public static getFilesDir(param0: globalAndroid.content.Context): string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module flutter {
		export module util {
			export class Preconditions {
				public static class: java.lang.Class<io.flutter.util.Preconditions>;
				public static checkState(param0: boolean, param1: any): void;
				public static checkState(param0: boolean): void;
				public static checkNotNull(param0: any): any;
			}
		}
	}
}

declare module io {
	export module flutter {
		export module util {
			export class Predicate<T> extends java.lang.Object {
				public static class: java.lang.Class<io.flutter.util.Predicate<any>>;
				/**
				 * Constructs a new instance of the io.flutter.util.Predicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { test(param0: T): boolean });
				public constructor();
				public test(param0: T): boolean;
			}
		}
	}
}

declare module io {
	export module flutter {
		export module util {
			export class TraceSection {
				public static class: java.lang.Class<io.flutter.util.TraceSection>;
				public static endAsyncSection(param0: string, param1: number): void;
				public static begin(param0: string): void;
				public static beginAsyncSection(param0: string, param1: number): void;
				public static end(): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module flutter {
		export module util {
			export class ViewUtils {
				public static class: java.lang.Class<io.flutter.util.ViewUtils>;
				public static getActivity(param0: globalAndroid.content.Context): globalAndroid.app.Activity;
				public static hasChildViewOfType(param0: globalAndroid.view.View, param1: androidNative.Array<java.lang.Class<any>>): boolean;
				public static childHasFocus(param0: globalAndroid.view.View): boolean;
				public static generateViewId(param0: number): number;
				public static traverseHierarchy(param0: globalAndroid.view.View, param1: io.flutter.util.ViewUtils.ViewVisitor): boolean;
				public constructor();
			}
			export module ViewUtils {
				export class ViewVisitor {
					public static class: java.lang.Class<io.flutter.util.ViewUtils.ViewVisitor>;
					/**
					 * Constructs a new instance of the io.flutter.util.ViewUtils$ViewVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { run(param0: globalAndroid.view.View): boolean });
					public constructor();
					public run(param0: globalAndroid.view.View): boolean;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module view {
			export class AccessibilityBridge {
				public static class: java.lang.Class<io.flutter.view.AccessibilityBridge>;
				public release(): void;
				public isAccessibilityEnabled(): boolean;
				public createAccessibilityNodeInfo(param0: number): globalAndroid.view.accessibility.AccessibilityNodeInfo;
				public getHoveredObjectId(): number;
				public performAction(param0: number, param1: number, param2: globalAndroid.os.Bundle): boolean;
				public onAccessibilityHoverEvent(param0: globalAndroid.view.MotionEvent, param1: boolean): boolean;
				public getAccessibleNavigation(): boolean;
				public externalViewRequestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public isTouchExplorationEnabled(): boolean;
				public setOnAccessibilityChangeListener(param0: io.flutter.view.AccessibilityBridge.OnAccessibilityChangeListener): void;
				public constructor(param0: globalAndroid.view.View, param1: io.flutter.embedding.engine.systemchannels.AccessibilityChannel, param2: globalAndroid.view.accessibility.AccessibilityManager, param3: globalAndroid.content.ContentResolver, param4: io.flutter.plugin.platform.PlatformViewsAccessibilityDelegate);
				public findFocus(param0: number): globalAndroid.view.accessibility.AccessibilityNodeInfo;
				public constructor(param0: globalAndroid.view.View, param1: io.flutter.embedding.engine.systemchannels.AccessibilityChannel, param2: globalAndroid.view.accessibility.AccessibilityManager, param3: globalAndroid.content.ContentResolver, param4: io.flutter.view.AccessibilityViewEmbedder, param5: io.flutter.plugin.platform.PlatformViewsAccessibilityDelegate);
				public reset(): void;
				public onAccessibilityHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public obtainAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: number): globalAndroid.view.accessibility.AccessibilityNodeInfo;
			}
			export module AccessibilityBridge {
				export class AccessibilityFeature {
					public static class: java.lang.Class<io.flutter.view.AccessibilityBridge.AccessibilityFeature>;
					public static ACCESSIBLE_NAVIGATION: io.flutter.view.AccessibilityBridge.AccessibilityFeature;
					public static INVERT_COLORS: io.flutter.view.AccessibilityBridge.AccessibilityFeature;
					public static DISABLE_ANIMATIONS: io.flutter.view.AccessibilityBridge.AccessibilityFeature;
					public static BOLD_TEXT: io.flutter.view.AccessibilityBridge.AccessibilityFeature;
					public static REDUCE_MOTION: io.flutter.view.AccessibilityBridge.AccessibilityFeature;
					public static HIGH_CONTRAST: io.flutter.view.AccessibilityBridge.AccessibilityFeature;
					public static ON_OFF_SWITCH_LABELS: io.flutter.view.AccessibilityBridge.AccessibilityFeature;
					public static values(): androidNative.Array<io.flutter.view.AccessibilityBridge.AccessibilityFeature>;
					public static valueOf(param0: string): io.flutter.view.AccessibilityBridge.AccessibilityFeature;
				}
				export class Action {
					public static class: java.lang.Class<io.flutter.view.AccessibilityBridge.Action>;
					public static TAP: io.flutter.view.AccessibilityBridge.Action;
					public static LONG_PRESS: io.flutter.view.AccessibilityBridge.Action;
					public static SCROLL_LEFT: io.flutter.view.AccessibilityBridge.Action;
					public static SCROLL_RIGHT: io.flutter.view.AccessibilityBridge.Action;
					public static SCROLL_UP: io.flutter.view.AccessibilityBridge.Action;
					public static SCROLL_DOWN: io.flutter.view.AccessibilityBridge.Action;
					public static INCREASE: io.flutter.view.AccessibilityBridge.Action;
					public static DECREASE: io.flutter.view.AccessibilityBridge.Action;
					public static SHOW_ON_SCREEN: io.flutter.view.AccessibilityBridge.Action;
					public static MOVE_CURSOR_FORWARD_BY_CHARACTER: io.flutter.view.AccessibilityBridge.Action;
					public static MOVE_CURSOR_BACKWARD_BY_CHARACTER: io.flutter.view.AccessibilityBridge.Action;
					public static SET_SELECTION: io.flutter.view.AccessibilityBridge.Action;
					public static COPY: io.flutter.view.AccessibilityBridge.Action;
					public static CUT: io.flutter.view.AccessibilityBridge.Action;
					public static PASTE: io.flutter.view.AccessibilityBridge.Action;
					public static DID_GAIN_ACCESSIBILITY_FOCUS: io.flutter.view.AccessibilityBridge.Action;
					public static DID_LOSE_ACCESSIBILITY_FOCUS: io.flutter.view.AccessibilityBridge.Action;
					public static CUSTOM_ACTION: io.flutter.view.AccessibilityBridge.Action;
					public static DISMISS: io.flutter.view.AccessibilityBridge.Action;
					public static MOVE_CURSOR_FORWARD_BY_WORD: io.flutter.view.AccessibilityBridge.Action;
					public static MOVE_CURSOR_BACKWARD_BY_WORD: io.flutter.view.AccessibilityBridge.Action;
					public static SET_TEXT: io.flutter.view.AccessibilityBridge.Action;
					public value: number;
					public static values(): androidNative.Array<io.flutter.view.AccessibilityBridge.Action>;
					public static valueOf(param0: string): io.flutter.view.AccessibilityBridge.Action;
				}
				export class CustomAccessibilityAction {
					public static class: java.lang.Class<io.flutter.view.AccessibilityBridge.CustomAccessibilityAction>;
				}
				export class Flag {
					public static class: java.lang.Class<io.flutter.view.AccessibilityBridge.Flag>;
					public static HAS_CHECKED_STATE: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_CHECKED: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_SELECTED: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_BUTTON: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_TEXT_FIELD: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_FOCUSED: io.flutter.view.AccessibilityBridge.Flag;
					public static HAS_ENABLED_STATE: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_ENABLED: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_IN_MUTUALLY_EXCLUSIVE_GROUP: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_HEADER: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_OBSCURED: io.flutter.view.AccessibilityBridge.Flag;
					public static SCOPES_ROUTE: io.flutter.view.AccessibilityBridge.Flag;
					public static NAMES_ROUTE: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_HIDDEN: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_IMAGE: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_LIVE_REGION: io.flutter.view.AccessibilityBridge.Flag;
					public static HAS_TOGGLED_STATE: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_TOGGLED: io.flutter.view.AccessibilityBridge.Flag;
					public static HAS_IMPLICIT_SCROLLING: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_MULTILINE: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_READ_ONLY: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_FOCUSABLE: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_LINK: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_SLIDER: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_KEYBOARD_KEY: io.flutter.view.AccessibilityBridge.Flag;
					public static IS_CHECK_STATE_MIXED: io.flutter.view.AccessibilityBridge.Flag;
					public static valueOf(param0: string): io.flutter.view.AccessibilityBridge.Flag;
					public static values(): androidNative.Array<io.flutter.view.AccessibilityBridge.Flag>;
				}
				export class LocaleStringAttribute extends io.flutter.view.AccessibilityBridge.StringAttribute {
					public static class: java.lang.Class<io.flutter.view.AccessibilityBridge.LocaleStringAttribute>;
				}
				export class OnAccessibilityChangeListener {
					public static class: java.lang.Class<io.flutter.view.AccessibilityBridge.OnAccessibilityChangeListener>;
					/**
					 * Constructs a new instance of the io.flutter.view.AccessibilityBridge$OnAccessibilityChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onAccessibilityChanged(param0: boolean, param1: boolean): void });
					public constructor();
					public onAccessibilityChanged(param0: boolean, param1: boolean): void;
				}
				export class SemanticsNode {
					public static class: java.lang.Class<io.flutter.view.AccessibilityBridge.SemanticsNode>;
				}
				export class SpellOutStringAttribute extends io.flutter.view.AccessibilityBridge.StringAttribute {
					public static class: java.lang.Class<io.flutter.view.AccessibilityBridge.SpellOutStringAttribute>;
				}
				export class StringAttribute {
					public static class: java.lang.Class<io.flutter.view.AccessibilityBridge.StringAttribute>;
				}
				export class StringAttributeType {
					public static class: java.lang.Class<io.flutter.view.AccessibilityBridge.StringAttributeType>;
					public static SPELLOUT: io.flutter.view.AccessibilityBridge.StringAttributeType;
					public static LOCALE: io.flutter.view.AccessibilityBridge.StringAttributeType;
					public static values(): androidNative.Array<io.flutter.view.AccessibilityBridge.StringAttributeType>;
					public static valueOf(param0: string): io.flutter.view.AccessibilityBridge.StringAttributeType;
				}
				export class TextDirection {
					public static class: java.lang.Class<io.flutter.view.AccessibilityBridge.TextDirection>;
					public static UNKNOWN: io.flutter.view.AccessibilityBridge.TextDirection;
					public static LTR: io.flutter.view.AccessibilityBridge.TextDirection;
					public static RTL: io.flutter.view.AccessibilityBridge.TextDirection;
					public static valueOf(param0: string): io.flutter.view.AccessibilityBridge.TextDirection;
					public static values(): androidNative.Array<io.flutter.view.AccessibilityBridge.TextDirection>;
					public static fromInt(param0: number): io.flutter.view.AccessibilityBridge.TextDirection;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module view {
			export class AccessibilityViewEmbedder {
				public static class: java.lang.Class<io.flutter.view.AccessibilityViewEmbedder>;
				public onAccessibilityHoverEvent(param0: number, param1: globalAndroid.view.MotionEvent): boolean;
				public platformViewOfNode(param0: number): globalAndroid.view.View;
				public getRootNode(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.graphics.Rect): globalAndroid.view.accessibility.AccessibilityNodeInfo;
				public createAccessibilityNodeInfo(param0: number): globalAndroid.view.accessibility.AccessibilityNodeInfo;
				public performAction(param0: number, param1: number, param2: globalAndroid.os.Bundle): boolean;
				public getRecordFlutterId(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityRecord): java.lang.Integer;
				public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
			}
			export module AccessibilityViewEmbedder {
				export class ReflectionAccessors {
					public static class: java.lang.Class<io.flutter.view.AccessibilityViewEmbedder.ReflectionAccessors>;
				}
				export class ViewAndId {
					public static class: java.lang.Class<io.flutter.view.AccessibilityViewEmbedder.ViewAndId>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module view {
			export class FlutterCallbackInformation {
				public static class: java.lang.Class<io.flutter.view.FlutterCallbackInformation>;
				public callbackName: string;
				public callbackClassName: string;
				public callbackLibraryPath: string;
				public static lookupCallbackInformation(param0: number): io.flutter.view.FlutterCallbackInformation;
			}
		}
	}
}

declare module io {
	export module flutter {
		export module view {
			export class FlutterMain {
				public static class: java.lang.Class<io.flutter.view.FlutterMain>;
				public static findAppBundlePath(): string;
				public static ensureInitializationCompleteAsync(param0: globalAndroid.content.Context, param1: androidNative.Array<string>, param2: globalAndroid.os.Handler, param3: java.lang.Runnable): void;
				public static getLookupKeyForAsset(param0: string): string;
				public static ensureInitializationComplete(param0: globalAndroid.content.Context, param1: androidNative.Array<string>): void;
				public static getLookupKeyForAsset(param0: string, param1: string): string;
				public static startInitialization(param0: globalAndroid.content.Context, param1: io.flutter.view.FlutterMain.Settings): void;
				public static startInitialization(param0: globalAndroid.content.Context): void;
				/** @deprecated */
				public static findAppBundlePath(param0: globalAndroid.content.Context): string;
				public constructor();
			}
			export module FlutterMain {
				export class Settings {
					public static class: java.lang.Class<io.flutter.view.FlutterMain.Settings>;
					public constructor();
					public getLogTag(): string;
					public setLogTag(param0: string): void;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module view {
			export class FlutterNativeView extends io.flutter.plugin.common.BinaryMessenger {
				public static class: java.lang.Class<io.flutter.view.FlutterNativeView>;
				public runFromBundle(param0: io.flutter.view.FlutterRunArguments): void;
				public makeBackgroundTaskQueue(param0: io.flutter.plugin.common.BinaryMessenger.TaskQueueOptions): io.flutter.plugin.common.BinaryMessenger.TaskQueue;
				public getPluginRegistry(): io.flutter.app.FlutterPluginRegistry;
				public enableBufferingIncomingMessages(): void;
				public isApplicationRunning(): boolean;
				public static getObservatoryUri(): string;
				public send(param0: string, param1: java.nio.ByteBuffer, param2: io.flutter.plugin.common.BinaryMessenger.BinaryReply): void;
				public setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler, param2: io.flutter.plugin.common.BinaryMessenger.TaskQueue): void;
				public disableBufferingIncomingMessages(): void;
				public assertAttached(): void;
				public destroy(): void;
				public isAttached(): boolean;
				public setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler): void;
				public constructor(param0: globalAndroid.content.Context);
				public attachViewAndActivity(param0: io.flutter.view.FlutterView, param1: globalAndroid.app.Activity): void;
				public detachFromFlutterView(): void;
				public makeBackgroundTaskQueue(): io.flutter.plugin.common.BinaryMessenger.TaskQueue;
				public send(param0: string, param1: java.nio.ByteBuffer): void;
				public constructor(param0: globalAndroid.content.Context, param1: boolean);
				public getDartExecutor(): io.flutter.embedding.engine.dart.DartExecutor;
			}
			export module FlutterNativeView {
				export class EngineLifecycleListenerImpl extends io.flutter.embedding.engine.FlutterEngine.EngineLifecycleListener {
					public static class: java.lang.Class<io.flutter.view.FlutterNativeView.EngineLifecycleListenerImpl>;
					public onEngineWillDestroy(): void;
					public onPreEngineRestart(): void;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module view {
			export class FlutterRunArguments {
				public static class: java.lang.Class<io.flutter.view.FlutterRunArguments>;
				public bundlePath: string;
				public entrypoint: string;
				public libraryPath: string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module flutter {
		export module view {
			export class FlutterView implements io.flutter.plugin.common.BinaryMessenger, io.flutter.view.TextureRegistry, io.flutter.plugin.mouse.MouseCursorPlugin.MouseCursorViewDelegate, io.flutter.embedding.android.KeyboardManager.ViewDelegate {
				public static class: java.lang.Class<io.flutter.view.FlutterView>;
				public runFromBundle(param0: io.flutter.view.FlutterRunArguments): void;
				public checkInputConnectionProxy(param0: globalAndroid.view.View): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: io.flutter.view.FlutterNativeView);
				public getPluginRegistry(): io.flutter.app.FlutterPluginRegistry;
				public autofill(param0: globalAndroid.util.SparseArray<globalAndroid.view.autofill.AutofillValue>): void;
				public onApplyWindowInsets(param0: globalAndroid.view.WindowInsets): globalAndroid.view.WindowInsets;
				public onGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onTextInputKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public getAccessibilityNodeProvider(): globalAndroid.view.accessibility.AccessibilityNodeProvider;
				public setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler, param2: io.flutter.plugin.common.BinaryMessenger.TaskQueue): void;
				public pushRoute(param0: string): void;
				public onFirstFrame(): void;
				public getSystemPointerIcon(param0: number): any;
				public addActivityLifecycleListener(param0: io.flutter.plugin.common.ActivityLifecycleListener): void;
				public onProvideAutofillVirtualStructure(param0: any, param1: number): void;
				public onTrimMemory(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getFlutterNativeView(): io.flutter.view.FlutterNativeView;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public setPointerIcon(param0: any): void;
				public getBitmap(): globalAndroid.graphics.Bitmap;
				public disableBufferingIncomingMessages(): void;
				public onMemoryPressure(): void;
				public setInitialRoute(param0: string): void;
				public onStart(): void;
				public onPostResume(): void;
				public addFirstFrameListener(param0: io.flutter.view.FlutterView.FirstFrameListener): void;
				public onDetachedFromWindow(): void;
				public send(param0: string, param1: java.nio.ByteBuffer): void;
				public getDartExecutor(): io.flutter.embedding.engine.dart.DartExecutor;
				public makeBackgroundTaskQueue(param0: io.flutter.plugin.common.BinaryMessenger.TaskQueueOptions): io.flutter.plugin.common.BinaryMessenger.TaskQueue;
				public enableBufferingIncomingMessages(): void;
				public onPause(): void;
				public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public detach(): io.flutter.view.FlutterNativeView;
				public send(param0: string, param1: java.nio.ByteBuffer, param2: io.flutter.plugin.common.BinaryMessenger.BinaryReply): void;
				public getLookupKeyForAsset(param0: string): string;
				public destroy(): void;
				public constructor(param0: globalAndroid.content.Context);
				public getLookupKeyForAsset(param0: string, param1: string): string;
				public onStop(): void;
				public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public fitSystemWindows(param0: globalAndroid.graphics.Rect): boolean;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public getBinaryMessenger(): io.flutter.plugin.common.BinaryMessenger;
				public registerSurfaceTexture(param0: globalAndroid.graphics.SurfaceTexture): io.flutter.view.TextureRegistry.SurfaceTextureEntry;
				public createSurfaceTexture(): io.flutter.view.TextureRegistry.SurfaceTextureEntry;
				public removeFirstFrameListener(param0: io.flutter.view.FlutterView.FirstFrameListener): void;
				public hasRenderedFirstFrame(): boolean;
				public setMessageHandler(param0: string, param1: io.flutter.plugin.common.BinaryMessenger.BinaryMessageHandler): void;
				public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				public makeBackgroundTaskQueue(): io.flutter.plugin.common.BinaryMessenger.TaskQueue;
				public popRoute(): void;
				public redispatch(param0: globalAndroid.view.KeyEvent): void;
				public onAttachedToWindow(): void;
				public disableTransparentBackground(): void;
			}
			export module FlutterView {
				export class FirstFrameListener {
					public static class: java.lang.Class<io.flutter.view.FlutterView.FirstFrameListener>;
					/**
					 * Constructs a new instance of the io.flutter.view.FlutterView$FirstFrameListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onFirstFrame(): void });
					public constructor();
					public onFirstFrame(): void;
				}
				export class Provider {
					public static class: java.lang.Class<io.flutter.view.FlutterView.Provider>;
					/**
					 * Constructs a new instance of the io.flutter.view.FlutterView$Provider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getFlutterView(): io.flutter.view.FlutterView });
					public constructor();
					public getFlutterView(): io.flutter.view.FlutterView;
				}
				export class SurfaceTextureRegistryEntry extends io.flutter.view.TextureRegistry.SurfaceTextureEntry {
					public static class: java.lang.Class<io.flutter.view.FlutterView.SurfaceTextureRegistryEntry>;
					public textureWrapper(): io.flutter.embedding.engine.renderer.SurfaceTextureWrapper;
					public id(): number;
					public surfaceTexture(): globalAndroid.graphics.SurfaceTexture;
					public setOnFrameConsumedListener(param0: io.flutter.view.TextureRegistry.OnFrameConsumedListener): void;
					public setOnTrimMemoryListener(param0: io.flutter.view.TextureRegistry.OnTrimMemoryListener): void;
					public release(): void;
				}
				export class ViewportMetrics {
					public static class: java.lang.Class<io.flutter.view.FlutterView.ViewportMetrics>;
				}
				export class ZeroSides {
					public static class: java.lang.Class<io.flutter.view.FlutterView.ZeroSides>;
					public static NONE: io.flutter.view.FlutterView.ZeroSides;
					public static LEFT: io.flutter.view.FlutterView.ZeroSides;
					public static RIGHT: io.flutter.view.FlutterView.ZeroSides;
					public static BOTH: io.flutter.view.FlutterView.ZeroSides;
					public static values(): androidNative.Array<io.flutter.view.FlutterView.ZeroSides>;
					public static valueOf(param0: string): io.flutter.view.FlutterView.ZeroSides;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module view {
			export class TextureRegistry {
				public static class: java.lang.Class<io.flutter.view.TextureRegistry>;
				/**
				 * Constructs a new instance of the io.flutter.view.TextureRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { createSurfaceTexture(): io.flutter.view.TextureRegistry.SurfaceTextureEntry; registerSurfaceTexture(param0: globalAndroid.graphics.SurfaceTexture): io.flutter.view.TextureRegistry.SurfaceTextureEntry; onTrimMemory(param0: number): void });
				public constructor();
				public registerSurfaceTexture(param0: globalAndroid.graphics.SurfaceTexture): io.flutter.view.TextureRegistry.SurfaceTextureEntry;
				public createSurfaceTexture(): io.flutter.view.TextureRegistry.SurfaceTextureEntry;
				public onTrimMemory(param0: number): void;
			}
			export module TextureRegistry {
				export class OnFrameConsumedListener {
					public static class: java.lang.Class<io.flutter.view.TextureRegistry.OnFrameConsumedListener>;
					/**
					 * Constructs a new instance of the io.flutter.view.TextureRegistry$OnFrameConsumedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onFrameConsumed(): void });
					public constructor();
					public onFrameConsumed(): void;
				}
				export class OnTrimMemoryListener {
					public static class: java.lang.Class<io.flutter.view.TextureRegistry.OnTrimMemoryListener>;
					/**
					 * Constructs a new instance of the io.flutter.view.TextureRegistry$OnTrimMemoryListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onTrimMemory(param0: number): void });
					public constructor();
					public onTrimMemory(param0: number): void;
				}
				export class SurfaceTextureEntry {
					public static class: java.lang.Class<io.flutter.view.TextureRegistry.SurfaceTextureEntry>;
					/**
					 * Constructs a new instance of the io.flutter.view.TextureRegistry$SurfaceTextureEntry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { surfaceTexture(): globalAndroid.graphics.SurfaceTexture; id(): number; release(): void; setOnFrameConsumedListener(param0: io.flutter.view.TextureRegistry.OnFrameConsumedListener): void; setOnTrimMemoryListener(param0: io.flutter.view.TextureRegistry.OnTrimMemoryListener): void });
					public constructor();
					public id(): number;
					public surfaceTexture(): globalAndroid.graphics.SurfaceTexture;
					public setOnFrameConsumedListener(param0: io.flutter.view.TextureRegistry.OnFrameConsumedListener): void;
					public setOnTrimMemoryListener(param0: io.flutter.view.TextureRegistry.OnTrimMemoryListener): void;
					public release(): void;
				}
			}
		}
	}
}

declare module io {
	export module flutter {
		export module view {
			export class VsyncWaiter {
				public static class: java.lang.Class<io.flutter.view.VsyncWaiter>;
				public static getInstance(param0: number, param1: io.flutter.embedding.engine.FlutterJNI): io.flutter.view.VsyncWaiter;
				public static getInstance(param0: globalAndroid.hardware.display.DisplayManager, param1: io.flutter.embedding.engine.FlutterJNI): io.flutter.view.VsyncWaiter;
				public static reset(): void;
				public init(): void;
			}
			export module VsyncWaiter {
				export class DisplayListener {
					public static class: java.lang.Class<io.flutter.view.VsyncWaiter.DisplayListener>;
					public onDisplayRemoved(param0: number): void;
					public onDisplayAdded(param0: number): void;
					public onDisplayChanged(param0: number): void;
				}
				export class FrameCallback {
					public static class: java.lang.Class<io.flutter.view.VsyncWaiter.FrameCallback>;
					public doFrame(param0: number): void;
				}
			}
		}
	}
}

//Generics information:
//io.flutter.embedding.android.ExclusiveAppComponent:1
//io.flutter.plugin.common.BasicMessageChannel:1
//io.flutter.plugin.common.BasicMessageChannel.MessageHandler:1
//io.flutter.plugin.common.BasicMessageChannel.Reply:1
//io.flutter.plugin.common.MessageCodec:1
//io.flutter.util.Predicate:1
