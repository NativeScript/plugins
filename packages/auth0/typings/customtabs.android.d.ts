declare module androidx {
	export module browser {
		export module customtabs {
			export class ICustomTabsCallback {
				public static class: java.lang.Class<androidx.browser.customtabs.ICustomTabsCallback>;
				/**
				 * Constructs a new instance of the androidx.browser.customtabs.ICustomTabsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onNavigationEvent(param0: number, param1: android.os.Bundle): void; extraCallback(param0: string, param1: android.os.Bundle): void; onMessageChannelReady(param0: android.os.Bundle): void; onPostMessage(param0: string, param1: android.os.Bundle): void; onRelationshipValidationResult(param0: number, param1: android.net.Uri, param2: boolean, param3: android.os.Bundle): void });
				public constructor();
				public onRelationshipValidationResult(param0: number, param1: android.net.Uri, param2: boolean, param3: android.os.Bundle): void;
				public onNavigationEvent(param0: number, param1: android.os.Bundle): void;
				public extraCallback(param0: string, param1: android.os.Bundle): void;
				public onMessageChannelReady(param0: android.os.Bundle): void;
				public onPostMessage(param0: string, param1: android.os.Bundle): void;
			}
			export module ICustomTabsCallback {
				export abstract class Stub implements androidx.browser.customtabs.ICustomTabsCallback {
					public static class: java.lang.Class<androidx.browser.customtabs.ICustomTabsCallback.Stub>;
					public onRelationshipValidationResult(param0: number, param1: android.net.Uri, param2: boolean, param3: android.os.Bundle): void;
					public constructor();
					public onPostMessage(param0: string, param1: android.os.Bundle): void;
					public onTransact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
					public static asInterface(param0: android.os.IBinder): androidx.browser.customtabs.ICustomTabsCallback;
					public onNavigationEvent(param0: number, param1: android.os.Bundle): void;
					public extraCallback(param0: string, param1: android.os.Bundle): void;
					public asBinder(): android.os.IBinder;
					public onMessageChannelReady(param0: android.os.Bundle): void;
				}
				export module Stub {
					export class Proxy extends androidx.browser.customtabs.ICustomTabsCallback {
						public static class: java.lang.Class<androidx.browser.customtabs.ICustomTabsCallback.Stub.Proxy>;
						public getInterfaceDescriptor(): string;
						public onNavigationEvent(param0: number, param1: android.os.Bundle): void;
						public extraCallback(param0: string, param1: android.os.Bundle): void;
						public asBinder(): android.os.IBinder;
						public onMessageChannelReady(param0: android.os.Bundle): void;
						public onPostMessage(param0: string, param1: android.os.Bundle): void;
						public onRelationshipValidationResult(param0: number, param1: android.net.Uri, param2: boolean, param3: android.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module customtabs {
			export class ICustomTabsService {
				public static class: java.lang.Class<androidx.browser.customtabs.ICustomTabsService>;
				/**
				 * Constructs a new instance of the androidx.browser.customtabs.ICustomTabsService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					warmup(param0: number): boolean;
					newSession(param0: androidx.browser.customtabs.ICustomTabsCallback): boolean;
					mayLaunchUrl(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.net.Uri, param2: android.os.Bundle, param3: java.util.List<android.os.Bundle>): boolean;
					extraCommand(param0: string, param1: android.os.Bundle): android.os.Bundle;
					updateVisuals(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.os.Bundle): boolean;
					requestPostMessageChannel(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.net.Uri): boolean;
					postMessage(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: string, param2: android.os.Bundle): number;
					validateRelationship(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: number, param2: android.net.Uri, param3: android.os.Bundle): boolean;
				});
				public constructor();
				public warmup(param0: number): boolean;
				public validateRelationship(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: number, param2: android.net.Uri, param3: android.os.Bundle): boolean;
				public extraCommand(param0: string, param1: android.os.Bundle): android.os.Bundle;
				public newSession(param0: androidx.browser.customtabs.ICustomTabsCallback): boolean;
				public requestPostMessageChannel(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.net.Uri): boolean;
				public postMessage(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: string, param2: android.os.Bundle): number;
				public updateVisuals(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.os.Bundle): boolean;
				public mayLaunchUrl(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.net.Uri, param2: android.os.Bundle, param3: java.util.List<android.os.Bundle>): boolean;
			}
			export module ICustomTabsService {
				export abstract class Stub implements androidx.browser.customtabs.ICustomTabsService {
					public static class: java.lang.Class<androidx.browser.customtabs.ICustomTabsService.Stub>;
					public newSession(param0: androidx.browser.customtabs.ICustomTabsCallback): boolean;
					public mayLaunchUrl(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.net.Uri, param2: android.os.Bundle, param3: java.util.List<android.os.Bundle>): boolean;
					public validateRelationship(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: number, param2: android.net.Uri, param3: android.os.Bundle): boolean;
					public constructor();
					public static asInterface(param0: android.os.IBinder): androidx.browser.customtabs.ICustomTabsService;
					public requestPostMessageChannel(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.net.Uri): boolean;
					public postMessage(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: string, param2: android.os.Bundle): number;
					public updateVisuals(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.os.Bundle): boolean;
					public onTransact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
					public warmup(param0: number): boolean;
					public extraCommand(param0: string, param1: android.os.Bundle): android.os.Bundle;
					public asBinder(): android.os.IBinder;
				}
				export module Stub {
					export class Proxy extends androidx.browser.customtabs.ICustomTabsService {
						public static class: java.lang.Class<androidx.browser.customtabs.ICustomTabsService.Stub.Proxy>;
						public updateVisuals(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.os.Bundle): boolean;
						public getInterfaceDescriptor(): string;
						public newSession(param0: androidx.browser.customtabs.ICustomTabsCallback): boolean;
						public mayLaunchUrl(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.net.Uri, param2: android.os.Bundle, param3: java.util.List<android.os.Bundle>): boolean;
						public requestPostMessageChannel(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.net.Uri): boolean;
						public asBinder(): android.os.IBinder;
						public validateRelationship(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: number, param2: android.net.Uri, param3: android.os.Bundle): boolean;
						public warmup(param0: number): boolean;
						public postMessage(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: string, param2: android.os.Bundle): number;
						public extraCommand(param0: string, param1: android.os.Bundle): android.os.Bundle;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module customtabs {
			export class IPostMessageService {
				public static class: java.lang.Class<androidx.browser.customtabs.IPostMessageService>;
				/**
				 * Constructs a new instance of the androidx.browser.customtabs.IPostMessageService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onMessageChannelReady(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.os.Bundle): void; onPostMessage(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: string, param2: android.os.Bundle): void });
				public constructor();
				public onPostMessage(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: string, param2: android.os.Bundle): void;
				public onMessageChannelReady(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.os.Bundle): void;
			}
			export module IPostMessageService {
				export abstract class Stub implements androidx.browser.customtabs.IPostMessageService {
					public static class: java.lang.Class<androidx.browser.customtabs.IPostMessageService.Stub>;
					public onMessageChannelReady(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.os.Bundle): void;
					public onPostMessage(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: string, param2: android.os.Bundle): void;
					public constructor();
					public onTransact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
					public asBinder(): android.os.IBinder;
					public static asInterface(param0: android.os.IBinder): androidx.browser.customtabs.IPostMessageService;
				}
				export module Stub {
					export class Proxy extends androidx.browser.customtabs.IPostMessageService {
						public static class: java.lang.Class<androidx.browser.customtabs.IPostMessageService.Stub.Proxy>;
						public getInterfaceDescriptor(): string;
						public onMessageChannelReady(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: android.os.Bundle): void;
						public onPostMessage(param0: androidx.browser.customtabs.ICustomTabsCallback, param1: string, param2: android.os.Bundle): void;
						public asBinder(): android.os.IBinder;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module browseractions {
			export class BrowserActionItem {
				public static class: java.lang.Class<androidx.browser.browseractions.BrowserActionItem>;
				public getIconId(): number;
				public constructor(param0: string, param1: globalAndroid.app.PendingIntent);
				public getAction(): globalAndroid.app.PendingIntent;
				public constructor(param0: string, param1: globalAndroid.app.PendingIntent, param2: number);
				public getTitle(): string;
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module browseractions {
			export class BrowserActionsFallbackMenuAdapter {
				public static class: java.lang.Class<androidx.browser.browseractions.BrowserActionsFallbackMenuAdapter>;
				public getItemId(param0: number): number;
				public getCount(): number;
				public getItem(param0: number): any;
				public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
			}
			export module BrowserActionsFallbackMenuAdapter {
				export class ViewHolderItem {
					public static class: java.lang.Class<androidx.browser.browseractions.BrowserActionsFallbackMenuAdapter.ViewHolderItem>;
				}
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module browseractions {
			export class BrowserActionsFallbackMenuDialog {
				public static class: java.lang.Class<androidx.browser.browseractions.BrowserActionsFallbackMenuDialog>;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public dismiss(): void;
				public show(): void;
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module browseractions {
			export class BrowserActionsFallbackMenuUi {
				public static class: java.lang.Class<androidx.browser.browseractions.BrowserActionsFallbackMenuUi>;
				public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
				public displayMenu(): void;
			}
			export module BrowserActionsFallbackMenuUi {
				export class BrowserActionsFallMenuUiListener {
					public static class: java.lang.Class<androidx.browser.browseractions.BrowserActionsFallbackMenuUi.BrowserActionsFallMenuUiListener>;
					/**
					 * Constructs a new instance of the androidx.browser.browseractions.BrowserActionsFallbackMenuUi$BrowserActionsFallMenuUiListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onMenuShown(param0: globalAndroid.view.View): void });
					public constructor();
					public onMenuShown(param0: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module browseractions {
			export class BrowserActionsFallbackMenuView {
				public static class: java.lang.Class<androidx.browser.browseractions.BrowserActionsFallbackMenuView>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onMeasure(param0: number, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module browseractions {
			export class BrowserActionsIntent {
				public static class: java.lang.Class<androidx.browser.browseractions.BrowserActionsIntent>;
				public static EXTRA_APP_ID: string;
				public static ACTION_BROWSER_ACTIONS_OPEN: string;
				public static KEY_ICON_ID: string;
				public static KEY_TITLE: string;
				public static KEY_ACTION: string;
				public static EXTRA_TYPE: string;
				public static EXTRA_MENU_ITEMS: string;
				public static EXTRA_SELECTED_ACTION_PENDING_INTENT: string;
				public static MAX_CUSTOM_ITEMS: number;
				public static URL_TYPE_NONE: number;
				public static URL_TYPE_IMAGE: number;
				public static URL_TYPE_VIDEO: number;
				public static URL_TYPE_AUDIO: number;
				public static URL_TYPE_FILE: number;
				public static URL_TYPE_PLUGIN: number;
				public static ITEM_INVALID_ITEM: number;
				public static ITEM_OPEN_IN_NEW_TAB: number;
				public static ITEM_OPEN_IN_INCOGNITO: number;
				public static ITEM_DOWNLOAD: number;
				public static ITEM_COPY: number;
				public static ITEM_SHARE: number;
				public static openBrowserAction(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri, param2: number, param3: java.util.ArrayList<androidx.browser.browseractions.BrowserActionItem>, param4: globalAndroid.app.PendingIntent): void;
				public getIntent(): globalAndroid.content.Intent;
				public static openBrowserAction(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): void;
				public static launchIntent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				public static parseBrowserActionItems(param0: java.util.ArrayList<globalAndroid.os.Bundle>): java.util.List<androidx.browser.browseractions.BrowserActionItem>;
				public static getCreatorPackageName(param0: globalAndroid.content.Intent): string;
			}
			export module BrowserActionsIntent {
				export class BrowserActionsFallDialogListener {
					public static class: java.lang.Class<androidx.browser.browseractions.BrowserActionsIntent.BrowserActionsFallDialogListener>;
					/**
					 * Constructs a new instance of the androidx.browser.browseractions.BrowserActionsIntent$BrowserActionsFallDialogListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onDialogShown(): void });
					public constructor();
					public onDialogShown(): void;
				}
				export class BrowserActionsItemId {
					public static class: java.lang.Class<androidx.browser.browseractions.BrowserActionsIntent.BrowserActionsItemId>;
					/**
					 * Constructs a new instance of the androidx.browser.browseractions.BrowserActionsIntent$BrowserActionsItemId interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
				export class BrowserActionsUrlType {
					public static class: java.lang.Class<androidx.browser.browseractions.BrowserActionsIntent.BrowserActionsUrlType>;
					/**
					 * Constructs a new instance of the androidx.browser.browseractions.BrowserActionsIntent$BrowserActionsUrlType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
				export class Builder {
					public static class: java.lang.Class<androidx.browser.browseractions.BrowserActionsIntent.Builder>;
					public setOnItemSelectedAction(param0: globalAndroid.app.PendingIntent): androidx.browser.browseractions.BrowserActionsIntent.Builder;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri);
					public setUrlType(param0: number): androidx.browser.browseractions.BrowserActionsIntent.Builder;
					public setCustomItems(param0: androidNative.Array<androidx.browser.browseractions.BrowserActionItem>): androidx.browser.browseractions.BrowserActionsIntent.Builder;
					public build(): androidx.browser.browseractions.BrowserActionsIntent;
					public setCustomItems(param0: java.util.ArrayList<androidx.browser.browseractions.BrowserActionItem>): androidx.browser.browseractions.BrowserActionsIntent.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module customtabs {
			export class CustomTabsCallback {
				public static class: java.lang.Class<androidx.browser.customtabs.CustomTabsCallback>;
				public static NAVIGATION_STARTED: number;
				public static NAVIGATION_FINISHED: number;
				public static NAVIGATION_FAILED: number;
				public static NAVIGATION_ABORTED: number;
				public static TAB_SHOWN: number;
				public static TAB_HIDDEN: number;
				public onNavigationEvent(param0: number, param1: globalAndroid.os.Bundle): void;
				public extraCallback(param0: string, param1: globalAndroid.os.Bundle): void;
				public onPostMessage(param0: string, param1: globalAndroid.os.Bundle): void;
				public onRelationshipValidationResult(param0: number, param1: globalAndroid.net.Uri, param2: boolean, param3: globalAndroid.os.Bundle): void;
				public constructor();
				public onMessageChannelReady(param0: globalAndroid.os.Bundle): void;
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module customtabs {
			export class CustomTabsClient {
				public static class: java.lang.Class<androidx.browser.customtabs.CustomTabsClient>;
				public warmup(param0: number): boolean;
				public newSession(param0: androidx.browser.customtabs.CustomTabsCallback): androidx.browser.customtabs.CustomTabsSession;
				public static connectAndInitialize(param0: globalAndroid.content.Context, param1: string): boolean;
				public static bindCustomTabsService(param0: globalAndroid.content.Context, param1: string, param2: androidx.browser.customtabs.CustomTabsServiceConnection): boolean;
				public extraCommand(param0: string, param1: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
				public static getPackageName(param0: globalAndroid.content.Context, param1: java.util.List<string>, param2: boolean): string;
				public static getPackageName(param0: globalAndroid.content.Context, param1: java.util.List<string>): string;
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module customtabs {
			export class CustomTabsIntent {
				public static class: java.lang.Class<androidx.browser.customtabs.CustomTabsIntent>;
				public static EXTRA_SESSION: string;
				public static EXTRA_TOOLBAR_COLOR: string;
				public static EXTRA_ENABLE_URLBAR_HIDING: string;
				public static EXTRA_CLOSE_BUTTON_ICON: string;
				public static EXTRA_TITLE_VISIBILITY_STATE: string;
				public static NO_TITLE: number;
				public static SHOW_PAGE_TITLE: number;
				public static EXTRA_ACTION_BUTTON_BUNDLE: string;
				public static EXTRA_TOOLBAR_ITEMS: string;
				public static EXTRA_SECONDARY_TOOLBAR_COLOR: string;
				public static KEY_ICON: string;
				public static KEY_DESCRIPTION: string;
				public static KEY_PENDING_INTENT: string;
				public static EXTRA_TINT_ACTION_BUTTON: string;
				public static EXTRA_MENU_ITEMS: string;
				public static KEY_MENU_ITEM_TITLE: string;
				public static EXTRA_EXIT_ANIMATION_BUNDLE: string;
				public static EXTRA_DEFAULT_SHARE_MENU_ITEM: string;
				public static EXTRA_REMOTEVIEWS: string;
				public static EXTRA_REMOTEVIEWS_VIEW_IDS: string;
				public static EXTRA_REMOTEVIEWS_PENDINGINTENT: string;
				public static EXTRA_REMOTEVIEWS_CLICKED_ID: string;
				public static EXTRA_ENABLE_INSTANT_APPS: string;
				public static KEY_ID: string;
				public static TOOLBAR_ACTION_BUTTON_ID: number;
				public intent: globalAndroid.content.Intent;
				public startAnimationBundle: globalAndroid.os.Bundle;
				public static getMaxToolbarItems(): number;
				public static setAlwaysUseBrowserUI(param0: globalAndroid.content.Intent): globalAndroid.content.Intent;
				public static shouldAlwaysUseBrowserUI(param0: globalAndroid.content.Intent): boolean;
				public launchUrl(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): void;
			}
			export module CustomTabsIntent {
				export class Builder {
					public static class: java.lang.Class<androidx.browser.customtabs.CustomTabsIntent.Builder>;
					public setToolbarColor(param0: number): androidx.browser.customtabs.CustomTabsIntent.Builder;
					public setCloseButtonIcon(param0: globalAndroid.graphics.Bitmap): androidx.browser.customtabs.CustomTabsIntent.Builder;
					public setStartAnimations(param0: globalAndroid.content.Context, param1: number, param2: number): androidx.browser.customtabs.CustomTabsIntent.Builder;
					public setActionButton(param0: globalAndroid.graphics.Bitmap, param1: string, param2: globalAndroid.app.PendingIntent, param3: boolean): androidx.browser.customtabs.CustomTabsIntent.Builder;
					public setActionButton(param0: globalAndroid.graphics.Bitmap, param1: string, param2: globalAndroid.app.PendingIntent): androidx.browser.customtabs.CustomTabsIntent.Builder;
					/** @deprecated */
					public addToolbarItem(param0: number, param1: globalAndroid.graphics.Bitmap, param2: string, param3: globalAndroid.app.PendingIntent): androidx.browser.customtabs.CustomTabsIntent.Builder;
					public setSecondaryToolbarViews(param0: globalAndroid.widget.RemoteViews, param1: androidNative.Array<number>, param2: globalAndroid.app.PendingIntent): androidx.browser.customtabs.CustomTabsIntent.Builder;
					public build(): androidx.browser.customtabs.CustomTabsIntent;
					public enableUrlBarHiding(): androidx.browser.customtabs.CustomTabsIntent.Builder;
					public addDefaultShareMenuItem(): androidx.browser.customtabs.CustomTabsIntent.Builder;
					public setExitAnimations(param0: globalAndroid.content.Context, param1: number, param2: number): androidx.browser.customtabs.CustomTabsIntent.Builder;
					public constructor();
					public constructor(param0: androidx.browser.customtabs.CustomTabsSession);
					public setShowTitle(param0: boolean): androidx.browser.customtabs.CustomTabsIntent.Builder;
					public addMenuItem(param0: string, param1: globalAndroid.app.PendingIntent): androidx.browser.customtabs.CustomTabsIntent.Builder;
					public setInstantAppsEnabled(param0: boolean): androidx.browser.customtabs.CustomTabsIntent.Builder;
					public setSecondaryToolbarColor(param0: number): androidx.browser.customtabs.CustomTabsIntent.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module customtabs {
			export abstract class CustomTabsService {
				public static class: java.lang.Class<androidx.browser.customtabs.CustomTabsService>;
				public static ACTION_CUSTOM_TABS_CONNECTION: string;
				public static KEY_URL: string;
				public static RESULT_SUCCESS: number;
				public static RESULT_FAILURE_DISALLOWED: number;
				public static RESULT_FAILURE_REMOTE_ERROR: number;
				public static RESULT_FAILURE_MESSAGING_ERROR: number;
				public static RELATION_USE_AS_ORIGIN: number;
				public static RELATION_HANDLE_ALL_URLS: number;
				public cleanUpSession(param0: androidx.browser.customtabs.CustomTabsSessionToken): boolean;
				public warmup(param0: number): boolean;
				public mayLaunchUrl(param0: androidx.browser.customtabs.CustomTabsSessionToken, param1: globalAndroid.net.Uri, param2: globalAndroid.os.Bundle, param3: java.util.List<globalAndroid.os.Bundle>): boolean;
				public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
				public newSession(param0: androidx.browser.customtabs.CustomTabsSessionToken): boolean;
				public validateRelationship(param0: androidx.browser.customtabs.CustomTabsSessionToken, param1: number, param2: globalAndroid.net.Uri, param3: globalAndroid.os.Bundle): boolean;
				public updateVisuals(param0: androidx.browser.customtabs.CustomTabsSessionToken, param1: globalAndroid.os.Bundle): boolean;
				public requestPostMessageChannel(param0: androidx.browser.customtabs.CustomTabsSessionToken, param1: globalAndroid.net.Uri): boolean;
				public extraCommand(param0: string, param1: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
				public postMessage(param0: androidx.browser.customtabs.CustomTabsSessionToken, param1: string, param2: globalAndroid.os.Bundle): number;
				public constructor();
			}
			export module CustomTabsService {
				export class Relation {
					public static class: java.lang.Class<androidx.browser.customtabs.CustomTabsService.Relation>;
					/**
					 * Constructs a new instance of the androidx.browser.customtabs.CustomTabsService$Relation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
				export class Result {
					public static class: java.lang.Class<androidx.browser.customtabs.CustomTabsService.Result>;
					/**
					 * Constructs a new instance of the androidx.browser.customtabs.CustomTabsService$Result interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module customtabs {
			export abstract class CustomTabsServiceConnection extends android.content.ServiceConnection {
				public static class: java.lang.Class<androidx.browser.customtabs.CustomTabsServiceConnection>;
				public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
				public onCustomTabsServiceConnected(param0: globalAndroid.content.ComponentName, param1: androidx.browser.customtabs.CustomTabsClient): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module customtabs {
			export class CustomTabsSession {
				public static class: java.lang.Class<androidx.browser.customtabs.CustomTabsSession>;
				public mayLaunchUrl(param0: globalAndroid.net.Uri, param1: globalAndroid.os.Bundle, param2: java.util.List<globalAndroid.os.Bundle>): boolean;
				public setActionButton(param0: globalAndroid.graphics.Bitmap, param1: string): boolean;
				public validateRelationship(param0: number, param1: globalAndroid.net.Uri, param2: globalAndroid.os.Bundle): boolean;
				/** @deprecated */
				public setToolbarItem(param0: number, param1: globalAndroid.graphics.Bitmap, param2: string): boolean;
				public static createMockSessionForTesting(param0: globalAndroid.content.ComponentName): androidx.browser.customtabs.CustomTabsSession;
				public setSecondaryToolbarViews(param0: globalAndroid.widget.RemoteViews, param1: androidNative.Array<number>, param2: globalAndroid.app.PendingIntent): boolean;
				public requestPostMessageChannel(param0: globalAndroid.net.Uri): boolean;
				public postMessage(param0: string, param1: globalAndroid.os.Bundle): number;
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module customtabs {
			export class CustomTabsSessionToken {
				public static class: java.lang.Class<androidx.browser.customtabs.CustomTabsSessionToken>;
				public static getSessionTokenFromIntent(param0: globalAndroid.content.Intent): androidx.browser.customtabs.CustomTabsSessionToken;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public isAssociatedWith(param0: androidx.browser.customtabs.CustomTabsSession): boolean;
				public static createMockSessionTokenForTesting(): androidx.browser.customtabs.CustomTabsSessionToken;
				public getCallback(): androidx.browser.customtabs.CustomTabsCallback;
			}
			export module CustomTabsSessionToken {
				export class MockCallback extends androidx.browser.customtabs.ICustomTabsCallback.Stub {
					public static class: java.lang.Class<androidx.browser.customtabs.CustomTabsSessionToken.MockCallback>;
					public onPostMessage(param0: string, param1: globalAndroid.os.Bundle): void;
					public onMessageChannelReady(param0: globalAndroid.os.Bundle): void;
					public extraCallback(param0: string, param1: globalAndroid.os.Bundle): void;
					public onNavigationEvent(param0: number, param1: globalAndroid.os.Bundle): void;
					public onRelationshipValidationResult(param0: number, param1: globalAndroid.net.Uri, param2: boolean, param3: globalAndroid.os.Bundle): void;
					public asBinder(): globalAndroid.os.IBinder;
				}
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module customtabs {
			export class PostMessageService {
				public static class: java.lang.Class<androidx.browser.customtabs.PostMessageService>;
				public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module customtabs {
			export abstract class PostMessageServiceConnection {
				public static class: java.lang.Class<androidx.browser.customtabs.PostMessageServiceConnection>;
				public postMessage(param0: string, param1: globalAndroid.os.Bundle): boolean;
				public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
				public unbindFromContext(param0: globalAndroid.content.Context): void;
				public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
				public bindSessionToPostMessageService(param0: globalAndroid.content.Context, param1: string): boolean;
				public onPostMessageServiceConnected(): void;
				public notifyMessageChannelReady(param0: globalAndroid.os.Bundle): boolean;
				public onPostMessageServiceDisconnected(): void;
				public constructor(param0: androidx.browser.customtabs.CustomTabsSessionToken);
			}
		}
	}
}

declare module androidx {
	export module browser {
		export module customtabs {
			export class TrustedWebUtils {
				public static class: java.lang.Class<androidx.browser.customtabs.TrustedWebUtils>;
				public static EXTRA_LAUNCH_AS_TRUSTED_WEB_ACTIVITY: string;
				public static launchAsTrustedWebActivity(param0: globalAndroid.content.Context, param1: androidx.browser.customtabs.CustomTabsIntent, param2: globalAndroid.net.Uri): void;
			}
		}
	}
}
