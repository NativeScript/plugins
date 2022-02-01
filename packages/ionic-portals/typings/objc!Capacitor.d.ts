
declare class CAPApplicationDelegateProxy extends NSObject implements UIApplicationDelegate {

	static alloc(): CAPApplicationDelegateProxy; // inherited from NSObject

	static new(): CAPApplicationDelegateProxy; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	window: UIWindow; // inherited from UIApplicationDelegate

	readonly  // inherited from NSObjectProtocol

	applicationConfigurationForConnectingSceneSessionOptions(application: UIApplication, connectingSceneSession: UISceneSession, options: UISceneConnectionOptions): UISceneConfiguration;

	applicationContinueUserActivityRestorationHandler(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<UIUserActivityRestoring>) => void): boolean;

	applicationDidBecomeActive(application: UIApplication): void;

	applicationDidChangeStatusBarFrame(application: UIApplication, oldStatusBarFrame: CGRect): void;

	applicationDidChangeStatusBarOrientation(application: UIApplication, oldStatusBarOrientation: UIInterfaceOrientation): void;

	applicationDidDecodeRestorableStateWithCoder(application: UIApplication, coder: NSCoder): void;

	applicationDidDiscardSceneSessions(application: UIApplication, sceneSessions: NSSet<UISceneSession>): void;

	applicationDidEnterBackground(application: UIApplication): void;

	applicationDidFailToContinueUserActivityWithTypeError(application: UIApplication, userActivityType: string, error: NSError): void;

	applicationDidFailToRegisterForRemoteNotificationsWithError(application: UIApplication, error: NSError): void;

	applicationDidFinishLaunching(application: UIApplication): void;

	applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

	applicationDidReceiveLocalNotification(application: UIApplication, notification: UILocalNotification): void;

	applicationDidReceiveMemoryWarning(application: UIApplication): void;

	applicationDidReceiveRemoteNotification(application: UIApplication, userInfo: NSDictionary<any, any>): void;

	applicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void;

	applicationDidRegisterUserNotificationSettings(application: UIApplication, notificationSettings: UIUserNotificationSettings): void;

	applicationDidUpdateUserActivity(application: UIApplication, userActivity: NSUserActivity): void;

	applicationHandleActionWithIdentifierForLocalNotificationCompletionHandler(application: UIApplication, identifier: string, notification: UILocalNotification, completionHandler: () => void): void;

	applicationHandleActionWithIdentifierForLocalNotificationWithResponseInfoCompletionHandler(application: UIApplication, identifier: string, notification: UILocalNotification, responseInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	applicationHandleActionWithIdentifierForRemoteNotificationCompletionHandler(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	applicationHandleActionWithIdentifierForRemoteNotificationWithResponseInfoCompletionHandler(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, responseInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	applicationHandleEventsForBackgroundURLSessionCompletionHandler(application: UIApplication, identifier: string, completionHandler: () => void): void;

	applicationHandleIntentCompletionHandler(application: UIApplication, intent: INIntent, completionHandler: (p1: INIntentResponse) => void): void;

	applicationHandleOpenURL(application: UIApplication, url: NSURL): boolean;

	applicationHandleWatchKitExtensionRequestReply(application: UIApplication, userInfo: NSDictionary<any, any>, reply: (p1: NSDictionary<any, any>) => void): void;

	applicationHandlerForIntent(application: UIApplication, intent: INIntent): any;

	applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

	applicationPerformActionForShortcutItemCompletionHandler(application: UIApplication, shortcutItem: UIApplicationShortcutItem, completionHandler: (p1: boolean) => void): void;

	applicationPerformFetchWithCompletionHandler(application: UIApplication, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	applicationProtectedDataDidBecomeAvailable(application: UIApplication): void;

	applicationProtectedDataWillBecomeUnavailable(application: UIApplication): void;

	applicationShouldAllowExtensionPointIdentifier(application: UIApplication, extensionPointIdentifier: string): boolean;

	applicationShouldAutomaticallyLocalizeKeyCommands(application: UIApplication): boolean;

	applicationShouldRequestHealthAuthorization(application: UIApplication): void;

	applicationShouldRestoreApplicationState(application: UIApplication, coder: NSCoder): boolean;

	applicationShouldRestoreSecureApplicationState(application: UIApplication, coder: NSCoder): boolean;

	applicationShouldSaveApplicationState(application: UIApplication, coder: NSCoder): boolean;

	applicationShouldSaveSecureApplicationState(application: UIApplication, coder: NSCoder): boolean;

	applicationSignificantTimeChange(application: UIApplication): void;

	applicationSupportedInterfaceOrientationsForWindow(application: UIApplication, window: UIWindow): UIInterfaceOrientationMask;

	applicationUserDidAcceptCloudKitShareWithMetadata(application: UIApplication, cloudKitShareMetadata: CKShareMetadata): void;

	applicationViewControllerWithRestorationIdentifierPathCoder(application: UIApplication, identifierComponents: NSArray<string> | string[], coder: NSCoder): UIViewController;

	applicationWillChangeStatusBarFrame(application: UIApplication, newStatusBarFrame: CGRect): void;

	applicationWillChangeStatusBarOrientationDuration(application: UIApplication, newStatusBarOrientation: UIInterfaceOrientation, duration: number): void;

	applicationWillContinueUserActivityWithType(application: UIApplication, userActivityType: string): boolean;

	applicationWillEncodeRestorableStateWithCoder(application: UIApplication, coder: NSCoder): void;

	applicationWillEnterForeground(application: UIApplication): void;

	applicationWillFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

	applicationWillResignActive(application: UIApplication): void;

	applicationWillTerminate(application: UIApplication): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class CAPBridge extends NSObject {

	static alloc(): CAPBridge; // inherited from NSObject

	static new(): CAPBridge; // inherited from NSObject

	static readonly statusBarTappedNotification: NSNotification;
}

interface CAPBridgeProtocol extends NSObjectProtocol {

	config: CAPInstanceConfiguration;

	isDevEnvironment: boolean;

	isSimEnvironment: boolean;

	notificationRouter: CAPNotificationRouter;

	statusBarAnimation: UIStatusBarAnimation;

	statusBarStyle: UIStatusBarStyle;

	statusBarVisible: boolean;

	userInterfaceStyle: UIUserInterfaceStyle;

	viewController: UIViewController;

	webView: WKWebView;

	dismissVCWithAnimatedCompletion(flag: boolean, completion: () => void): void;

	evalWithJs(js: string): void;

	evalWithPluginJs(plugin: CAPPlugin, js: string): void;

	getLocalUrl(): string;

	getSavedCall(callbackId: string): CAPPluginCall;

	getStatusBarStyle(): UIStatusBarStyle;

	getStatusBarVisible(): boolean;

	getUserInterfaceStyle(): UIUserInterfaceStyle;

	getWebView(): WKWebView;

	isDevMode(): boolean;

	isSimulator(): boolean;

	localURLFromWebURL(webURL: NSURL): NSURL;

	pluginWithName(withName: string): CAPPlugin;

	portablePathFromLocalURL(localURL: NSURL): NSURL;

	presentVCAnimatedCompletion(viewControllerToPresent: UIViewController, flag: boolean, completion: () => void): void;

	releaseCall(call: CAPPluginCall): void;

	releaseCallWithCallbackId(callbackId: string): void;

	releaseCallWithID(withID: string): void;

	saveCall(call: CAPPluginCall): void;

	savedCallWithID(withID: string): CAPPluginCall;

	showAlertWithTitleMessageButtonTitle(title: string, message: string, buttonTitle: string): void;

	triggerDocumentJSEventWithEventName(eventName: string): void;

	triggerDocumentJSEventWithEventNameData(eventName: string, data: string): void;

	triggerJSEventWithEventNameTarget(eventName: string, target: string): void;

	triggerJSEventWithEventNameTargetData(eventName: string, target: string, data: string): void;

	triggerWindowJSEventWithEventName(eventName: string): void;

	triggerWindowJSEventWithEventNameData(eventName: string, data: string): void;
}
declare var CAPBridgeProtocol: {

	prototype: CAPBridgeProtocol;
};

declare class CAPBridgeViewController extends UIViewController {

	static alloc(): CAPBridgeViewController; // inherited from NSObject

	static new(): CAPBridgeViewController; // inherited from NSObject

	supportedOrientations: NSArray<number>;

	getServerBasePath(): string;

	setServerBasePathWithPath(path: string): void;
}

interface CAPBridgedPlugin extends NSObjectProtocol {
}
declare var CAPBridgedPlugin: {

	prototype: CAPBridgedPlugin;

	getMethod(methodName: string): CAPPluginMethod;

	jsName(): string;

	pluginId(): string;

	pluginMethods(): NSArray<any>;
};

declare class CAPConsolePlugin extends CAPPlugin {

	static alloc(): CAPConsolePlugin; // inherited from NSObject

	static new(): CAPConsolePlugin; // inherited from NSObject

	log(call: CAPPluginCall): void;
}

declare class CAPFileManager extends NSObject {

	static alloc(): CAPFileManager; // inherited from NSObject

	static new(): CAPFileManager; // inherited from NSObject
}

declare class CAPInstanceConfiguration extends NSObject {

	static alloc(): CAPInstanceConfiguration; // inherited from NSObject

	static new(): CAPInstanceConfiguration; // inherited from NSObject

	readonly allowLinkPreviews: boolean;

	readonly allowedNavigationHostnames: NSArray<string>;

	readonly appLocation: NSURL;

	readonly appStartPath: string;

	readonly appendedUserAgentString: string;

	readonly backgroundColor: UIColor;

	readonly contentInsetAdjustmentBehavior: UIScrollViewContentInsetAdjustmentBehavior;

	readonly cordovaDeployDisabled: boolean;

	readonly handleApplicationNotifications: boolean;

	readonly legacyConfig: NSDictionary<any, any>;

	readonly limitsNavigationsToAppBoundDomains: boolean;

	readonly localURL: NSURL;

	readonly loggingEnabled: boolean;

	readonly overridenUserAgentString: string;

	readonly pluginConfigurations: NSDictionary<any, any>;

	readonly scrollingEnabled: boolean;

	readonly serverURL: NSURL;

	constructor(o: { descriptor: CAPInstanceDescriptor; isDebug: boolean; });

	getPluginConfigValue(pluginId: string, configKey: string): any;

	getString(key: string): string;

	getValue(key: string): any;

	initWithDescriptorIsDebug(descriptor: CAPInstanceDescriptor, debug: boolean): this;

	shouldAllowNavigationTo(host: string): boolean;

	updatingAppLocation(location: NSURL): this;
}

declare class CAPInstanceDescriptor extends NSObject {

	static alloc(): CAPInstanceDescriptor; // inherited from NSObject

	static new(): CAPInstanceDescriptor; // inherited from NSObject

	allowLinkPreviews: boolean;

	allowedNavigationHostnames: NSArray<string>;

	appLocation: NSURL;

	appStartPath: string;

	appendedUserAgentString: string;

	backgroundColor: UIColor;

	contentInsetAdjustmentBehavior: UIScrollViewContentInsetAdjustmentBehavior;

	cordovaConfiguration: CDVConfigParser;

	readonly cordovaDeployDisabled: boolean;

	handleApplicationNotifications: boolean;

	readonly instanceType: CAPInstanceType;

	legacyConfig: NSDictionary<any, any>;

	limitsNavigationsToAppBoundDomains: boolean;

	loggingBehavior: CAPInstanceLoggingBehavior;

	overridenUserAgentString: string;

	pluginConfigurations: NSDictionary<any, any>;

	scrollingEnabled: boolean;

	serverURL: string;

	urlHostname: string;

	urlScheme: string;

	warnings: CAPInstanceWarning;

	constructor(o: { asDefault: void; });

	constructor(o: { atLocation: NSURL; configuration: NSURL; cordovaConfiguration: NSURL; });

	initAsDefault(): this;

	initAtLocationConfigurationCordovaConfiguration(appURL: NSURL, configURL: NSURL, cordovaURL: NSURL): this;

	normalize(): void;
}

declare var CAPInstanceDescriptorDefaultHostname: string;

declare var CAPInstanceDescriptorDefaultScheme: string;

declare const enum CAPInstanceLoggingBehavior {

	None = 1,

	Debug = 2,

	Production = 4
}

declare const enum CAPInstanceType {

	Fixed = 0,

	Variable = 1
}

declare const enum CAPInstanceWarning {

	MissingAppDir = 1,

	MissingFile = 2,

	InvalidFile = 4,

	MissingCordovaFile = 8,

	InvalidCordovaFile = 16
}

interface CAPNotificationHandlerProtocol {

	didReceiveWithResponse(response: UNNotificationResponse): void;

	willPresentWithNotification(notification: UNNotification): UNNotificationPresentationOptions;
}
declare var CAPNotificationHandlerProtocol: {

	prototype: CAPNotificationHandlerProtocol;
};

declare class CAPNotificationRouter extends NSObject implements UNUserNotificationCenterDelegate {

	static alloc(): CAPNotificationRouter; // inherited from NSObject

	static new(): CAPNotificationRouter; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;

	userNotificationCenterOpenSettingsForNotification(center: UNUserNotificationCenter, notification: UNNotification): void;

	userNotificationCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void;
}

declare const enum CAPNotifications {

	URLOpen = 0,

	UniversalLinkOpen = 1,

	ContinueActivity = 2,

	DidRegisterForRemoteNotificationsWithDeviceToken = 3,

	DidFailToRegisterForRemoteNotificationsWithError = 4,

	DecidePolicyForNavigationAction = 5
}

declare class CAPPlugin extends NSObject {

	static alloc(): CAPPlugin; // inherited from NSObject

	static new(): CAPPlugin; // inherited from NSObject

	bridge: CAPBridgeProtocol;

	eventListeners: NSMutableDictionary<string, NSMutableArray<CAPPluginCall>>;

	pluginId: string;

	pluginName: string;

	retainedEventArguments: NSMutableDictionary<string, any>;

	shouldStringifyDatesInCalls: boolean;

	webView: WKWebView;

	constructor(o: { bridge: CAPBridgeProtocol; pluginId: string; pluginName: string; });

	addEventListenerListener(eventName: string, listener: CAPPluginCall): void;

	addListener(call: CAPPluginCall): void;

	checkPermissions(call: CAPPluginCall): void;

	getBoolFieldDefaultValue(call: CAPPluginCall, field: string, defaultValue: boolean): boolean;

	getConfigValue(key: string): any;

	getId(): string;

	getListeners(eventName: string): NSArray<CAPPluginCall>;

	getStringFieldDefaultValue(call: CAPPluginCall, field: string, defaultValue: string): string;

	hasListeners(eventName: string): boolean;

	initWithBridgePluginIdPluginName(bridge: CAPBridgeProtocol, pluginId: string, pluginName: string): this;

	load(): void;

	notifyListenersData(eventName: string, data: NSDictionary<string, any>): void;

	notifyListenersDataRetainUntilConsumed(eventName: string, data: NSDictionary<string, any>, retain: boolean): void;

	removeAllListeners(call: CAPPluginCall): void;

	removeEventListenerListener(eventName: string, listener: CAPPluginCall): void;

	removeListener(call: CAPPluginCall): void;

	requestPermissions(call: CAPPluginCall): void;

	setCenteredPopover(vc: UIViewController): void;

	shouldOverrideLoad(navigationAction: WKNavigationAction): number;

	supportsPopover(): boolean;
}

declare class CAPPluginCall extends NSObject {

	static alloc(): CAPPluginCall; // inherited from NSObject

	static new(): CAPPluginCall; // inherited from NSObject

	static setJsDateFormatter(value: NSISO8601DateFormatter): void;

	callbackId: string;

	readonly dictionaryRepresentation: NSDictionary<any, any>;

	errorHandler: (p1: CAPPluginCallError) => void;

	isSaved: boolean;

	keepAlive: boolean;

	options: NSDictionary<any, any>;

	successHandler: (p1: CAPPluginCallResult, p2: CAPPluginCall) => void;

	static jsDateFormatter: NSISO8601DateFormatter;

	constructor(o: { callbackId: string; options: NSDictionary<any, any>; success: (p1: CAPPluginCallResult, p2: CAPPluginCall) => void; error: (p1: CAPPluginCallError) => void; });

	error(message: string, error: NSError, data: NSDictionary<string, any>): void;

	hasOption(key: string): boolean;

	initWithCallbackIdOptionsSuccessError(callbackId: string, options: NSDictionary<any, any>, success: (p1: CAPPluginCallResult, p2: CAPPluginCall) => void, error: (p1: CAPPluginCallError) => void): this;

	reject(message: string, code: string, error: NSError, data: NSDictionary<string, any>): void;

	resolve(): void;

	save(): void;

	success(): void;

	unavailable(): void;

	unimplemented(): void;
}

declare class CAPPluginCallError extends NSObject {

	static alloc(): CAPPluginCallError; // inherited from NSObject

	static new(): CAPPluginCallError; // inherited from NSObject

	readonly code: string;

	readonly data: NSDictionary<string, any>;

	readonly error: NSError;

	readonly message: string;

	constructor(o: { code: string; error: string; data: NSError; });

	initCodeErrorData(message: string, code: string, error: NSError, data: NSDictionary<string, any>): this;
}

declare class CAPPluginCallResult extends NSObject {

	static alloc(): CAPPluginCallResult; // inherited from NSObject

	static new(): CAPPluginCallResult; // inherited from NSObject

	readonly data: NSDictionary<string, any>;

	constructor();

	init(data: NSDictionary<string, any>): this;
}

declare class CAPPluginMethod extends NSObject {

	static alloc(): CAPPluginMethod; // inherited from NSObject

	static new(): CAPPluginMethod; // inherited from NSObject

	name: string;

	returnType: string;

	selector: string;

	constructor(o: { name: string; returnType: string; });

	initWithNameReturnType(name: string, returnType: string): this;
}

declare class CAPPluginMethodArgument extends NSObject {

	static alloc(): CAPPluginMethodArgument; // inherited from NSObject

	static new(): CAPPluginMethodArgument; // inherited from NSObject

	name: string;

	nullability: CAPPluginMethodArgumentNullability;

	constructor(o: { name: string; nullability: CAPPluginMethodArgumentNullability; type: string; });

	initWithNameNullabilityType(name: string, nullability: CAPPluginMethodArgumentNullability, type: string): this;
}

declare const enum CAPPluginMethodArgumentNullability {

	NotNullable = 0,

	Nullable = 1
}

declare class CAPWebView extends UIView {

	static alloc(): CAPWebView; // inherited from NSObject

	static appearance(): CAPWebView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CAPWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CAPWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CAPWebView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CAPWebView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CAPWebView; // inherited from UIAppearance

	static new(): CAPWebView; // inherited from NSObject
}

declare class CAPWebViewPlugin extends CAPPlugin {

	static alloc(): CAPWebViewPlugin; // inherited from NSObject

	static new(): CAPWebViewPlugin; // inherited from NSObject
}

declare var CapacitorVersionNumber: number;

declare var CapacitorVersionString: interop.Reference<number>;
