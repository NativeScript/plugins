declare module io {
	export module ionic {
		export module portals {
			export class BuildConfig {
				public static class: java.lang.Class<io.ionic.portals.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module ionic {
		export module portals {
			export class Portal {
				public static class: java.lang.Class<io.ionic.portals.Portal>;
				public setInitialContext$IonicPortals_release(param0: any): void;
				public setStartDir(param0: string): void;
				public addPlugins(param0: java.util.List<any>): void;
				public getLiveUpdateOnAppLoad(): boolean;
				public setInitialContext(param0: string): void;
				public setLiveUpdateOnAppLoad(param0: boolean): void;
				public getLiveUpdateConfig(): io.ionic.liveupdates.LiveUpdate;
				public getName(): string;
				public setInitialContext(param0: java.util.Map<string, any>): void;
				public setPortalFragmentType(param0: java.lang.Class<any>): void;
				public constructor(param0: string);
				public getInitialContext(): any;
				public addPlugin(param0: java.lang.Class<any>): void;
				public getStartDir(): string;
				public setLiveUpdateConfig(param0: io.ionic.liveupdates.LiveUpdate): void;
				public getPlugins$IonicPortals_release(): java.util.ArrayList<java.lang.Class<any>>;
				public getPortalFragmentType(): java.lang.Class<any>;
			}
		}
	}
}

declare module io {
	export module ionic {
		export module portals {
			export class PortalBuilder {
				public static class: java.lang.Class<io.ionic.portals.PortalBuilder>;
				public setStartDir(param0: string): io.ionic.portals.PortalBuilder;
				public addPlugin(param0: java.lang.Class<any>): io.ionic.portals.PortalBuilder;
				public create(): io.ionic.portals.Portal;
				public setLiveUpdateConfig(param0: globalAndroid.content.Context, param1: io.ionic.liveupdates.LiveUpdate, param2: boolean): io.ionic.portals.PortalBuilder;
				public setInitialContext(param0: any): io.ionic.portals.PortalBuilder;
				public setPortalFragmentType(param0: java.lang.Class<any>): io.ionic.portals.PortalBuilder;
				public constructor(param0: string, param1: kotlin.jvm.functions.Function1<any, kotlin.Unit>);
				public getName(): string;
				public setPlugins(param0: java.util.List<java.lang.Class<any>>): io.ionic.portals.PortalBuilder;
				public constructor(param0: string);
				public setLiveUpdateConfig(param0: globalAndroid.content.Context, param1: io.ionic.liveupdates.LiveUpdate): io.ionic.portals.PortalBuilder;
			}
		}
	}
}

declare module io {
	export module ionic {
		export module portals {
			export class PortalFragment {
				public static class: java.lang.Class<io.ionic.portals.PortalFragment>;
				public constructor(param0: io.ionic.portals.Portal);
				public getPORTAL_NAME(): string;
				public linkMessageReceivers(param0: any): void;
				public onResume(): void;
				public setPortal(param0: io.ionic.portals.Portal): void;
				public getLiveUpdateFiles(): java.io.File;
				public onPause(): void;
				public reload(): void;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public setLiveUpdateFiles(param0: java.io.File): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public addWebViewListener(param0: com.getcapacitor.WebViewListener): void;
				public getPortal(): io.ionic.portals.Portal;
				public constructor();
				public addPlugin(param0: java.lang.Class<any>): void;
				public getBridge(): com.getcapacitor.Bridge;
				public onDestroy(): void;
				public setConfig(param0: com.getcapacitor.CapConfig): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
			}
		}
	}
}

declare module io {
	export module ionic {
		export module portals {
			export class PortalManager {
				public static class: java.lang.Class<io.ionic.portals.PortalManager>;
				public static INSTANCE: io.ionic.portals.PortalManager;
				public static getPortal(param0: string): io.ionic.portals.Portal;
				public static isRegistered(): boolean;
				public isRegisteredError$IonicPortals_release(): boolean;
				public static size(): number;
				public static register(param0: string): void;
				public static addPortal(param0: io.ionic.portals.Portal): void;
				public static newPortal(param0: string): io.ionic.portals.PortalBuilder;
			}
		}
	}
}

declare module io {
	export module ionic {
		export module portals {
			export class PortalMethod {
				public static class: java.lang.Class<io.ionic.portals.PortalMethod>;
				/**
				 * Constructs a new instance of the io.ionic.portals.PortalMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { topic(): string });
				public constructor();
				public topic(): string;
			}
		}
	}
}

declare module io {
	export module ionic {
		export module portals {
			export class PortalView {
				public static class: java.lang.Class<io.ionic.portals.PortalView>;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public setPortalId(param0: string): void;
				public onApplyWindowInsets(param0: globalAndroid.view.WindowInsets): globalAndroid.view.WindowInsets;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public loadPortal(param0: androidx.fragment.app.FragmentManager, param1: globalAndroid.util.AttributeSet): void;
				public removeView(param0: globalAndroid.view.View): void;
				public getViewId(): string;
				public removeAllViewsInLayout(): void;
				public getPortalFragment(): io.ionic.portals.PortalFragment;
				public removeViewAt(param0: number): void;
				public setDrawDisappearingViewsLast(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context);
				public removeViews(param0: number, param1: number): void;
				public getPortalId(): string;
				public setTag(param0: string): void;
				public removeViewsInLayout(param0: number, param1: number): void;
				public setViewId(param0: string): void;
				public setLayoutTransition(param0: globalAndroid.animation.LayoutTransition): void;
				public removeDetachedView(param0: globalAndroid.view.View, param1: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public removeViewInLayout(param0: globalAndroid.view.View): void;
				public getTag(): string;
				public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
				public startViewTransition(param0: globalAndroid.view.View): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
				public loadPortal(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): void;
				public drawChild(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.view.View, param2: number): boolean;
				public endViewTransition(param0: globalAndroid.view.View): void;
			}
		}
	}
}

declare module io {
	export module ionic {
		export module portals {
			export class PortalsPlugin {
				public static class: java.lang.Class<io.ionic.portals.PortalsPlugin>;
				public static Companion: io.ionic.portals.PortalsPlugin.Companion;
				public static subscribe(param0: string, param1: kotlin.jvm.functions.Function1<any, kotlin.Unit>): number;
				public subscribeNative(param0: com.getcapacitor.PluginCall): void;
				public static publish(param0: string, param1: any): void;
				public static getSubscriptionRef(): number;
				public static setSubscriptionRef(param0: number): void;
				public static unsubscribe(param0: string, param1: number): void;
				public publishNative(param0: com.getcapacitor.PluginCall): void;
				public unsubscribeNative(param0: com.getcapacitor.PluginCall): void;
				public static setSubscriptions(param0: java.util.Map<string, java.util.Map<java.lang.Integer, kotlin.jvm.functions.Function1<io.ionic.portals.SubscriptionResult, kotlin.Unit>>>): void;
				public constructor();
				public static getSubscriptions(): java.util.Map<string, java.util.Map<java.lang.Integer, kotlin.jvm.functions.Function1<io.ionic.portals.SubscriptionResult, kotlin.Unit>>>;
			}
			export module PortalsPlugin {
				export class Companion {
					public static class: java.lang.Class<io.ionic.portals.PortalsPlugin.Companion>;
					public setSubscriptions(param0: java.util.Map<string, java.util.Map<java.lang.Integer, kotlin.jvm.functions.Function1<io.ionic.portals.SubscriptionResult, kotlin.Unit>>>): void;
					public unsubscribe(param0: string, param1: number): void;
					public getSubscriptionRef(): number;
					public subscribe(param0: string, param1: kotlin.jvm.functions.Function1<any, kotlin.Unit>): number;
					public publish(param0: string, param1: any): void;
					public setSubscriptionRef(param0: number): void;
					public getSubscriptions(): java.util.Map<string, java.util.Map<java.lang.Integer, kotlin.jvm.functions.Function1<io.ionic.portals.SubscriptionResult, kotlin.Unit>>>;
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module portals {
			export class PortalsPluginKt {
				public static class: java.lang.Class<io.ionic.portals.PortalsPluginKt>;
				public static toMap(param0: org.json.JSONObject): java.util.Map<string, any>;
			}
		}
	}
}

declare module io {
	export module ionic {
		export module portals {
			export class SubscriptionResult {
				public static class: java.lang.Class<io.ionic.portals.SubscriptionResult>;
				public toJSObject(): com.getcapacitor.JSObject;
				public component3(): number;
				public component1(): string;
				public copy(param0: string, param1: any, param2: number): io.ionic.portals.SubscriptionResult;
				public getTopic(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
				public constructor(param0: string, param1: any, param2: number);
				public getSubscriptionRef(): number;
				public component2(): any;
				public getData(): any;
			}
		}
	}
}

declare module io {
	export module ionic {
		export module portals {
			export class Test {
				public static class: java.lang.Class<io.ionic.portals.Test>;
				public static Companion: io.ionic.portals.Test.Companion;
				public constructor();
			}
			export module Test {
				export class Companion {
					public static class: java.lang.Class<io.ionic.portals.Test.Companion>;
					public helloWorld(): void;
				}
			}
		}
	}
}

//Generics information:
