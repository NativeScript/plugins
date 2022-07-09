declare class FlutterAppDelegate extends UIResponder implements FlutterAppLifeCycleProvider, FlutterPluginRegistry, UIApplicationDelegate {
	static alloc(): FlutterAppDelegate; // inherited from NSObject

	static new(): FlutterAppDelegate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	window: UIWindow; // inherited from UIApplicationDelegate

	readonly; // inherited from NSObjectProtocol

	addApplicationLifeCycleDelegate(delegate: NSObject): void;

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

	hasPlugin(pluginKey: string): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registrarForPlugin(pluginKey: string): NSObject;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;

	userNotificationCenterOpenSettingsForNotification(center: UNUserNotificationCenter, notification: UNNotification): void;

	userNotificationCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void;

	valuePublishedByPlugin(pluginKey: string): NSObject;
}

interface FlutterAppLifeCycleProvider extends UNUserNotificationCenterDelegate {
	addApplicationLifeCycleDelegate(delegate: NSObject): void;
}
declare var FlutterAppLifeCycleProvider: {
	prototype: FlutterAppLifeCycleProvider;
};

interface FlutterApplicationLifeCycleDelegate extends UNUserNotificationCenterDelegate {
	applicationContinueUserActivityRestorationHandler?(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<any>) => void): boolean;

	applicationDidBecomeActive?(application: UIApplication): void;

	applicationDidEnterBackground?(application: UIApplication): void;

	applicationDidFailToRegisterForRemoteNotificationsWithError?(application: UIApplication, error: NSError): void;

	applicationDidFinishLaunchingWithOptions?(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean;

	applicationDidReceiveLocalNotification?(application: UIApplication, notification: UILocalNotification): void;

	applicationDidReceiveRemoteNotificationFetchCompletionHandler?(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): boolean;

	applicationDidRegisterForRemoteNotificationsWithDeviceToken?(application: UIApplication, deviceToken: NSData): void;

	applicationDidRegisterUserNotificationSettings?(application: UIApplication, notificationSettings: UIUserNotificationSettings): void;

	applicationHandleEventsForBackgroundURLSessionCompletionHandler?(application: UIApplication, identifier: string, completionHandler: () => void): boolean;

	applicationHandleOpenURL?(application: UIApplication, url: NSURL): boolean;

	applicationOpenURLOptions?(application: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	applicationOpenURLSourceApplicationAnnotation?(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

	applicationPerformActionForShortcutItemCompletionHandler?(application: UIApplication, shortcutItem: UIApplicationShortcutItem, completionHandler: (p1: boolean) => void): boolean;

	applicationPerformFetchWithCompletionHandler?(application: UIApplication, completionHandler: (p1: UIBackgroundFetchResult) => void): boolean;

	applicationWillEnterForeground?(application: UIApplication): void;

	applicationWillFinishLaunchingWithOptions?(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean;

	applicationWillResignActive?(application: UIApplication): void;

	applicationWillTerminate?(application: UIApplication): void;
}
declare var FlutterApplicationLifeCycleDelegate: {
	prototype: FlutterApplicationLifeCycleDelegate;
};

declare class FlutterBasicMessageChannel extends NSObject {
	static alloc(): FlutterBasicMessageChannel; // inherited from NSObject

	static messageChannelWithNameBinaryMessenger(name: string, messenger: NSObject): FlutterBasicMessageChannel;

	static messageChannelWithNameBinaryMessengerCodec(name: string, messenger: NSObject, codec: NSObject): FlutterBasicMessageChannel;

	static new(): FlutterBasicMessageChannel; // inherited from NSObject

	constructor(o: { name: string; binaryMessenger: NSObject; codec: NSObject });

	constructor(o: { name: string; binaryMessenger: NSObject; codec: NSObject; taskQueue: NSObject });

	initWithNameBinaryMessengerCodec(name: string, messenger: NSObject, codec: NSObject): this;

	initWithNameBinaryMessengerCodecTaskQueue(name: string, messenger: NSObject, codec: NSObject, taskQueue: NSObject): this;

	resizeChannelBuffer(newSize: number): void;

	sendMessage(message: any): void;

	sendMessageReply(message: any, callback: (p1: any) => void): void;

	setMessageHandler(handler: (p1: any, p2: (p1: any) => void) => void): void;
}

declare class FlutterBinaryCodec extends NSObject implements FlutterMessageCodec {
	static alloc(): FlutterBinaryCodec; // inherited from NSObject

	static new(): FlutterBinaryCodec; // inherited from NSObject

	static sharedInstance(): FlutterBinaryCodec;

	decode(message: NSData): any;

	encode(message: any): NSData;
}

interface FlutterBinaryMessenger extends NSObjectProtocol {
	cleanUpConnection(connection: number): void;

	makeBackgroundTaskQueue?(): NSObject;

	sendOnChannelMessage(channel: string, message: NSData): void;

	sendOnChannelMessageBinaryReply(channel: string, message: NSData, callback: (p1: NSData) => void): void;

	setMessageHandlerOnChannelBinaryMessageHandler(channel: string, handler: (p1: NSData, p2: (p1: NSData) => void) => void): number;

	setMessageHandlerOnChannelBinaryMessageHandlerTaskQueue?(channel: string, handler: (p1: NSData, p2: (p1: NSData) => void) => void, taskQueue: NSObject): number;
}
declare var FlutterBinaryMessenger: {
	prototype: FlutterBinaryMessenger;
};

declare class FlutterCallbackCache extends NSObject {
	static alloc(): FlutterCallbackCache; // inherited from NSObject

	static lookupCallbackInformation(handle: number): FlutterCallbackInformation;

	static new(): FlutterCallbackCache; // inherited from NSObject
}

declare class FlutterCallbackInformation extends NSObject {
	static alloc(): FlutterCallbackInformation; // inherited from NSObject

	static new(): FlutterCallbackInformation; // inherited from NSObject

	callbackClassName: string;

	callbackLibraryPath: string;

	callbackName: string;
}

declare class FlutterDartProject extends NSObject {
	static alloc(): FlutterDartProject; // inherited from NSObject

	static defaultBundleIdentifier(): string;

	static lookupKeyForAsset(asset: string): string;

	static lookupKeyForAssetFromBundle(asset: string, bundle: NSBundle): string;

	static lookupKeyForAssetFromPackage(asset: string, package: string): string;

	static lookupKeyForAssetFromPackageFromBundle(asset: string, package: string, bundle: NSBundle): string;

	static new(): FlutterDartProject; // inherited from NSObject

	constructor(o: { precompiledDartBundle: NSBundle });

	initWithPrecompiledDartBundle(bundle: NSBundle): this;
}

declare var FlutterDefaultDartEntrypoint: string;

declare var FlutterDefaultInitialRoute: string;

declare var FlutterEndOfEventStream: NSObject;

declare class FlutterEngine extends NSObject implements FlutterPluginRegistry, FlutterTextureRegistry {
	static alloc(): FlutterEngine; // inherited from NSObject

	static new(): FlutterEngine; // inherited from NSObject

	readonly binaryMessenger: NSObject;

	isGpuDisabled: boolean;

	readonly isolateId: string;

	readonly keyEventChannel: FlutterBasicMessageChannel;

	readonly lifecycleChannel: FlutterBasicMessageChannel;

	readonly localizationChannel: FlutterMethodChannel;

	readonly navigationChannel: FlutterMethodChannel;

	readonly observatoryUrl: NSURL;

	readonly platformChannel: FlutterMethodChannel;

	readonly restorationChannel: FlutterMethodChannel;

	readonly settingsChannel: FlutterBasicMessageChannel;

	readonly systemChannel: FlutterBasicMessageChannel;

	readonly textInputChannel: FlutterMethodChannel;

	viewController: FlutterViewController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { name: string });

	constructor(o: { name: string; project: FlutterDartProject });

	constructor(o: { name: string; project: FlutterDartProject; allowHeadlessExecution: boolean });

	constructor(o: { name: string; project: FlutterDartProject; allowHeadlessExecution: boolean; restorationEnabled: boolean });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	destroyContext(): void;

	ensureSemanticsEnabled(): void;

	hasPlugin(pluginKey: string): boolean;

	initWithName(labelPrefix: string): this;

	initWithNameProject(labelPrefix: string, project: FlutterDartProject): this;

	initWithNameProjectAllowHeadlessExecution(labelPrefix: string, project: FlutterDartProject, allowHeadlessExecution: boolean): this;

	initWithNameProjectAllowHeadlessExecutionRestorationEnabled(labelPrefix: string, project: FlutterDartProject, allowHeadlessExecution: boolean, restorationEnabled: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerTexture(texture: NSObject): number;

	registrarForPlugin(pluginKey: string): NSObject;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	run(): boolean;

	runWithEntrypoint(entrypoint: string): boolean;

	runWithEntrypointInitialRoute(entrypoint: string, initialRoute: string): boolean;

	runWithEntrypointLibraryURI(entrypoint: string, uri: string): boolean;

	runWithEntrypointLibraryURIInitialRoute(entrypoint: string, libraryURI: string, initialRoute: string): boolean;

	runWithEntrypointLibraryURIInitialRouteEntrypointArgs(entrypoint: string, libraryURI: string, initialRoute: string, entrypointArgs: NSArray<string> | string[]): boolean;

	self(): this;

	textureFrameAvailable(textureId: number): void;

	unregisterTexture(textureId: number): void;

	valuePublishedByPlugin(pluginKey: string): NSObject;
}

declare class FlutterEngineGroup extends NSObject {
	static alloc(): FlutterEngineGroup; // inherited from NSObject

	static new(): FlutterEngineGroup; // inherited from NSObject

	constructor(o: { name: string; project: FlutterDartProject });

	initWithNameProject(name: string, project: FlutterDartProject): this;

	makeEngineWithEntrypointLibraryURI(entrypoint: string, libraryURI: string): FlutterEngine;

	makeEngineWithEntrypointLibraryURIInitialRoute(entrypoint: string, libraryURI: string, initialRoute: string): FlutterEngine;

	makeEngineWithOptions(options: FlutterEngineGroupOptions): FlutterEngine;
}

declare class FlutterEngineGroupOptions extends NSObject {
	static alloc(): FlutterEngineGroupOptions; // inherited from NSObject

	static new(): FlutterEngineGroupOptions; // inherited from NSObject

	entrypoint: string;

	entrypointArgs: NSArray<string>;

	initialRoute: string;

	libraryURI: string;
}

declare class FlutterError extends NSObject {
	static alloc(): FlutterError; // inherited from NSObject

	static errorWithCodeMessageDetails(code: string, message: string, details: any): FlutterError;

	static new(): FlutterError; // inherited from NSObject

	readonly code: string;

	readonly details: any;

	readonly message: string;
}

declare class FlutterEventChannel extends NSObject {
	static alloc(): FlutterEventChannel; // inherited from NSObject

	static eventChannelWithNameBinaryMessenger(name: string, messenger: NSObject): FlutterEventChannel;

	static eventChannelWithNameBinaryMessengerCodec(name: string, messenger: NSObject, codec: NSObject): FlutterEventChannel;

	static new(): FlutterEventChannel; // inherited from NSObject

	constructor(o: { name: string; binaryMessenger: NSObject; codec: NSObject });

	constructor(o: { name: string; binaryMessenger: NSObject; codec: NSObject; taskQueue: NSObject });

	initWithNameBinaryMessengerCodec(name: string, messenger: NSObject, codec: NSObject): this;

	initWithNameBinaryMessengerCodecTaskQueue(name: string, messenger: NSObject, codec: NSObject, taskQueue: NSObject): this;

	setStreamHandler(handler: NSObject): void;
}

declare class FlutterHeadlessDartRunner extends FlutterEngine {
	static alloc(): FlutterHeadlessDartRunner; // inherited from NSObject

	static new(): FlutterHeadlessDartRunner; // inherited from NSObject
}

declare class FlutterJSONMessageCodec extends NSObject implements FlutterMessageCodec {
	static alloc(): FlutterJSONMessageCodec; // inherited from NSObject

	static new(): FlutterJSONMessageCodec; // inherited from NSObject

	static sharedInstance(): FlutterJSONMessageCodec;

	decode(message: NSData): any;

	encode(message: any): NSData;
}

declare class FlutterJSONMethodCodec extends NSObject implements FlutterMethodCodec {
	static alloc(): FlutterJSONMethodCodec; // inherited from NSObject

	static new(): FlutterJSONMethodCodec; // inherited from NSObject

	static sharedInstance(): FlutterJSONMethodCodec;

	decodeEnvelope(envelope: NSData): any;

	decodeMethodCall(methodCall: NSData): FlutterMethodCall;

	encodeErrorEnvelope(error: FlutterError): NSData;

	encodeMethodCall(methodCall: FlutterMethodCall): NSData;

	encodeSuccessEnvelope(result: any): NSData;
}

interface FlutterMessageCodec {
	decode(message: NSData): any;

	encode(message: any): NSData;
}
declare var FlutterMessageCodec: {
	prototype: FlutterMessageCodec;

	sharedInstance(): FlutterMessageCodec;
};

declare class FlutterMethodCall extends NSObject {
	static alloc(): FlutterMethodCall; // inherited from NSObject

	static methodCallWithMethodNameArguments(method: string, _arguments: any): FlutterMethodCall;

	static new(): FlutterMethodCall; // inherited from NSObject

	readonly arguments: any;

	readonly method: string;
}

declare class FlutterMethodChannel extends NSObject {
	static alloc(): FlutterMethodChannel; // inherited from NSObject

	static methodChannelWithNameBinaryMessenger(name: string, messenger: NSObject): FlutterMethodChannel;

	static methodChannelWithNameBinaryMessengerCodec(name: string, messenger: NSObject, codec: NSObject): FlutterMethodChannel;

	static new(): FlutterMethodChannel; // inherited from NSObject

	constructor(o: { name: string; binaryMessenger: NSObject; codec: NSObject });

	constructor(o: { name: string; binaryMessenger: NSObject; codec: NSObject; taskQueue: NSObject });

	initWithNameBinaryMessengerCodec(name: string, messenger: NSObject, codec: NSObject): this;

	initWithNameBinaryMessengerCodecTaskQueue(name: string, messenger: NSObject, codec: NSObject, taskQueue: NSObject): this;

	invokeMethodArguments(method: string, _arguments: any): void;

	invokeMethodArgumentsResult(method: string, _arguments: any, callback: (p1: any) => void): void;

	resizeChannelBuffer(newSize: number): void;

	setMethodCallHandler(handler: (p1: FlutterMethodCall, p2: (p1: any) => void) => void): void;
}

interface FlutterMethodCodec {
	decodeEnvelope(envelope: NSData): any;

	decodeMethodCall(methodCall: NSData): FlutterMethodCall;

	encodeErrorEnvelope(error: FlutterError): NSData;

	encodeMethodCall(methodCall: FlutterMethodCall): NSData;

	encodeSuccessEnvelope(result: any): NSData;
}
declare var FlutterMethodCodec: {
	prototype: FlutterMethodCodec;

	sharedInstance(): FlutterMethodCodec;
};

declare var FlutterMethodNotImplemented: NSObject;

interface FlutterPlatformView extends NSObjectProtocol {
	view(): UIView;
}
declare var FlutterPlatformView: {
	prototype: FlutterPlatformView;
};

interface FlutterPlatformViewFactory extends NSObjectProtocol {
	createArgsCodec?(): NSObject;

	createWithFrameViewIdentifierArguments(frame: CGRect, viewId: number, args: any): NSObject;
}
declare var FlutterPlatformViewFactory: {
	prototype: FlutterPlatformViewFactory;
};

declare const enum FlutterPlatformViewGestureRecognizersBlockingPolicy {
	Eager = 0,

	WaitUntilTouchesEnded = 1,
}

interface FlutterPlugin extends FlutterApplicationLifeCycleDelegate, NSObjectProtocol {
	detachFromEngineForRegistrar?(registrar: NSObject): void;

	handleMethodCallResult?(call: FlutterMethodCall, result: (p1: any) => void): void;
}
declare var FlutterPlugin: {
	prototype: FlutterPlugin;

	registerWithRegistrar(registrar: NSObject): void;

	setPluginRegistrantCallback?(callback: interop.FunctionReference<(p1: NSObject) => void>): void;
};

declare class FlutterPluginAppLifeCycleDelegate extends NSObject implements UNUserNotificationCenterDelegate {
	static alloc(): FlutterPluginAppLifeCycleDelegate; // inherited from NSObject

	static new(): FlutterPluginAppLifeCycleDelegate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	addDelegate(delegate: NSObject): void;

	applicationContinueUserActivityRestorationHandler(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<any>) => void): boolean;

	applicationDidFailToRegisterForRemoteNotificationsWithError(application: UIApplication, error: NSError): void;

	applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean;

	applicationDidReceiveLocalNotification(application: UIApplication, notification: UILocalNotification): void;

	applicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void;

	applicationDidRegisterUserNotificationSettings(application: UIApplication, notificationSettings: UIUserNotificationSettings): void;

	applicationHandleEventsForBackgroundURLSessionCompletionHandler(application: UIApplication, identifier: string, completionHandler: () => void): boolean;

	applicationHandleOpenURL(application: UIApplication, url: NSURL): boolean;

	applicationOpenURLOptions(application: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

	applicationPerformActionForShortcutItemCompletionHandler(application: UIApplication, shortcutItem: UIApplicationShortcutItem, completionHandler: (p1: boolean) => void): void;

	applicationPerformFetchWithCompletionHandler(application: UIApplication, completionHandler: (p1: UIBackgroundFetchResult) => void): boolean;

	applicationWillFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean;

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

interface FlutterPluginRegistrar extends NSObjectProtocol {
	addApplicationDelegate(delegate: NSObject): void;

	addMethodCallDelegateChannel(delegate: NSObject, channel: FlutterMethodChannel): void;

	lookupKeyForAsset(asset: string): string;

	lookupKeyForAssetFromPackage(asset: string, package: string): string;

	messenger(): NSObject;

	publish(value: NSObject): void;

	registerViewFactoryWithId(factory: NSObject, factoryId: string): void;

	registerViewFactoryWithIdGestureRecognizersBlockingPolicy(factory: NSObject, factoryId: string, gestureRecognizersBlockingPolicy: FlutterPlatformViewGestureRecognizersBlockingPolicy): void;

	textures(): NSObject;
}
declare var FlutterPluginRegistrar: {
	prototype: FlutterPluginRegistrar;
};

interface FlutterPluginRegistry extends NSObjectProtocol {
	hasPlugin(pluginKey: string): boolean;

	registrarForPlugin(pluginKey: string): NSObject;

	valuePublishedByPlugin(pluginKey: string): NSObject;
}
declare var FlutterPluginRegistry: {
	prototype: FlutterPluginRegistry;
};

declare var FlutterSemanticsUpdateNotification: string;

declare const enum FlutterStandardDataType {
	UInt8 = 0,

	Int32 = 1,

	Int64 = 2,

	Float32 = 3,

	Float64 = 4,
}

declare class FlutterStandardMessageCodec extends NSObject implements FlutterMessageCodec {
	static alloc(): FlutterStandardMessageCodec; // inherited from NSObject

	static codecWithReaderWriter(readerWriter: FlutterStandardReaderWriter): FlutterStandardMessageCodec;

	static new(): FlutterStandardMessageCodec; // inherited from NSObject

	static sharedInstance(): FlutterStandardMessageCodec;

	decode(message: NSData): any;

	encode(message: any): NSData;
}

declare class FlutterStandardMethodCodec extends NSObject implements FlutterMethodCodec {
	static alloc(): FlutterStandardMethodCodec; // inherited from NSObject

	static codecWithReaderWriter(readerWriter: FlutterStandardReaderWriter): FlutterStandardMethodCodec;

	static new(): FlutterStandardMethodCodec; // inherited from NSObject

	static sharedInstance(): FlutterStandardMethodCodec;

	decodeEnvelope(envelope: NSData): any;

	decodeMethodCall(methodCall: NSData): FlutterMethodCall;

	encodeErrorEnvelope(error: FlutterError): NSData;

	encodeMethodCall(methodCall: FlutterMethodCall): NSData;

	encodeSuccessEnvelope(result: any): NSData;
}

declare class FlutterStandardReader extends NSObject {
	static alloc(): FlutterStandardReader; // inherited from NSObject

	static new(): FlutterStandardReader; // inherited from NSObject

	constructor(o: { data: NSData });

	hasMore(): boolean;

	initWithData(data: NSData): this;

	readAlignment(alignment: number): void;

	readByte(): number;

	readBytesLength(destination: interop.Pointer | interop.Reference<any>, length: number): void;

	readData(length: number): NSData;

	readSize(): number;

	readUTF8(): string;

	readValue(): any;

	readValueOfType(type: number): any;
}

declare class FlutterStandardReaderWriter extends NSObject {
	static alloc(): FlutterStandardReaderWriter; // inherited from NSObject

	static new(): FlutterStandardReaderWriter; // inherited from NSObject

	readerWithData(data: NSData): FlutterStandardReader;

	writerWithData(data: NSMutableData): FlutterStandardWriter;
}

declare class FlutterStandardTypedData extends NSObject {
	static alloc(): FlutterStandardTypedData; // inherited from NSObject

	static new(): FlutterStandardTypedData; // inherited from NSObject

	static typedDataWithBytes(data: NSData): FlutterStandardTypedData;

	static typedDataWithFloat32(data: NSData): FlutterStandardTypedData;

	static typedDataWithFloat64(data: NSData): FlutterStandardTypedData;

	static typedDataWithInt32(data: NSData): FlutterStandardTypedData;

	static typedDataWithInt64(data: NSData): FlutterStandardTypedData;

	readonly data: NSData;

	readonly elementCount: number;

	readonly elementSize: number;

	readonly type: FlutterStandardDataType;
}

declare class FlutterStandardWriter extends NSObject {
	static alloc(): FlutterStandardWriter; // inherited from NSObject

	static new(): FlutterStandardWriter; // inherited from NSObject

	constructor(o: { data: NSMutableData });

	initWithData(data: NSMutableData): this;

	writeAlignment(alignment: number): void;

	writeByte(value: number): void;

	writeBytesLength(bytes: interop.Pointer | interop.Reference<any>, length: number): void;

	writeData(data: NSData): void;

	writeSize(size: number): void;

	writeUTF8(value: string): void;

	writeValue(value: any): void;
}

interface FlutterStreamHandler {
	onCancelWithArguments(_arguments: any): FlutterError;

	onListenWithArgumentsEventSink(_arguments: any, events: (p1: any) => void): FlutterError;
}
declare var FlutterStreamHandler: {
	prototype: FlutterStreamHandler;
};

declare class FlutterStringCodec extends NSObject implements FlutterMessageCodec {
	static alloc(): FlutterStringCodec; // inherited from NSObject

	static new(): FlutterStringCodec; // inherited from NSObject

	static sharedInstance(): FlutterStringCodec;

	decode(message: NSData): any;

	encode(message: any): NSData;
}

interface FlutterTexture extends NSObjectProtocol {
	copyPixelBuffer(): any;

	onTextureUnregistered?(texture: NSObject): void;
}
declare var FlutterTexture: {
	prototype: FlutterTexture;
};

interface FlutterTextureRegistry extends NSObjectProtocol {
	registerTexture(texture: NSObject): number;

	textureFrameAvailable(textureId: number): void;

	unregisterTexture(textureId: number): void;
}
declare var FlutterTextureRegistry: {
	prototype: FlutterTextureRegistry;
};

declare class FlutterViewController extends UIViewController implements FlutterPluginRegistry, FlutterTextureRegistry, UIGestureRecognizerDelegate {
	static alloc(): FlutterViewController; // inherited from NSObject

	static new(): FlutterViewController; // inherited from NSObject

	readonly binaryMessenger: NSObject;

	readonly displayingFlutterUI: boolean;

	readonly engine: FlutterEngine;

	readonly engineAllowHeadlessExecution: boolean;

	splashScreenView: UIView;

	viewOpaque: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { engine: FlutterEngine; nibName: string; bundle: NSBundle });

	constructor(o: { project: FlutterDartProject; initialRoute: string; nibName: string; bundle: NSBundle });

	constructor(o: { project: FlutterDartProject; nibName: string; bundle: NSBundle });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	hasPlugin(pluginKey: string): boolean;

	initWithEngineNibNameBundle(engine: FlutterEngine, nibName: string, nibBundle: NSBundle): this;

	initWithProjectInitialRouteNibNameBundle(project: FlutterDartProject, initialRoute: string, nibName: string, nibBundle: NSBundle): this;

	initWithProjectNibNameBundle(project: FlutterDartProject, nibName: string, nibBundle: NSBundle): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadDefaultSplashScreenView(): boolean;

	lookupKeyForAsset(asset: string): string;

	lookupKeyForAssetFromPackage(asset: string, package: string): string;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	pluginRegistry(): FlutterPluginRegistry;

	popRoute(): void;

	pushRoute(route: string): void;

	registerTexture(texture: NSObject): number;

	registrarForPlugin(pluginKey: string): NSObject;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setFlutterViewDidRenderCallback(callback: () => void): void;

	setInitialRoute(route: string): void;

	textureFrameAvailable(textureId: number): void;

	unregisterTexture(textureId: number): void;

	valuePublishedByPlugin(pluginKey: string): NSObject;
}
