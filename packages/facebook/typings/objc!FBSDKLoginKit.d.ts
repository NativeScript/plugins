declare class FBSDKCodeVerifier extends NSObject {
	static alloc(): FBSDKCodeVerifier; // inherited from NSObject

	static new(): FBSDKCodeVerifier; // inherited from NSObject

	readonly challenge: string;

	readonly value: string;

	constructor(o: { string: string });

	initWithString(string: string): this;
}

declare const enum FBSDKDefaultAudience {
	Friends = 0,

	OnlyMe = 1,

	Everyone = 2,
}

declare class FBSDKDeviceLoginCodeInfo extends NSObject {
	static alloc(): FBSDKDeviceLoginCodeInfo; // inherited from NSObject

	static new(): FBSDKDeviceLoginCodeInfo; // inherited from NSObject

	readonly expirationDate: Date;

	readonly identifier: string;

	readonly loginCode: string;

	readonly pollingInterval: number;

	readonly verificationURL: NSURL;

	constructor(o: { identifier: string; loginCode: string; verificationURL: NSURL; expirationDate: Date; pollingInterval: number });

	initWithIdentifierLoginCodeVerificationURLExpirationDatePollingInterval(identifier: string, loginCode: string, verificationURL: NSURL, expirationDate: Date, pollingInterval: number): this;
}

declare const enum FBSDKDeviceLoginError {
	ExcessivePolling = 1349172,

	AuthorizationDeclined = 1349173,

	AuthorizationPending = 1349174,

	CodeExpired = 1349152,
}

declare class FBSDKDeviceLoginManager extends NSObject implements NSNetServiceDelegate {
	static alloc(): FBSDKDeviceLoginManager; // inherited from NSObject

	static new(): FBSDKDeviceLoginManager; // inherited from NSObject

	delegate: FBSDKDeviceLoginManagerDelegate;

	readonly permissions: NSArray<string>;

	redirectURL: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { permissions: NSArray<string> | string[]; enableSmartLogin: boolean });

	cancel(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithPermissionsEnableSmartLogin(permissions: NSArray<string> | string[], enableSmartLogin: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	netServiceDidAcceptConnectionWithInputStreamOutputStream(sender: NSNetService, inputStream: NSInputStream, outputStream: NSOutputStream): void;

	netServiceDidNotPublish(sender: NSNetService, errorDict: NSDictionary<string, number>): void;

	netServiceDidNotResolve(sender: NSNetService, errorDict: NSDictionary<string, number>): void;

	netServiceDidPublish(sender: NSNetService): void;

	netServiceDidResolveAddress(sender: NSNetService): void;

	netServiceDidStop(sender: NSNetService): void;

	netServiceDidUpdateTXTRecordData(sender: NSNetService, data: NSData): void;

	netServiceWillPublish(sender: NSNetService): void;

	netServiceWillResolve(sender: NSNetService): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	start(): void;
}

interface FBSDKDeviceLoginManagerDelegate {
	deviceLoginManagerCompletedWithResultError(loginManager: FBSDKDeviceLoginManager, result: FBSDKDeviceLoginManagerResult, error: NSError): void;

	deviceLoginManagerStartedWithCodeInfo(loginManager: FBSDKDeviceLoginManager, codeInfo: FBSDKDeviceLoginCodeInfo): void;
}
declare var FBSDKDeviceLoginManagerDelegate: {
	prototype: FBSDKDeviceLoginManagerDelegate;
};

declare class FBSDKDeviceLoginManagerResult extends NSObject {
	static alloc(): FBSDKDeviceLoginManagerResult; // inherited from NSObject

	static new(): FBSDKDeviceLoginManagerResult; // inherited from NSObject

	readonly accessToken: FBSDKAccessToken;

	readonly isCancelled: boolean;

	constructor(o: { token: FBSDKAccessToken; isCancelled: boolean });

	initWithTokenIsCancelled(token: FBSDKAccessToken, cancelled: boolean): this;
}

declare class FBSDKDevicePoller extends NSObject {
	static alloc(): FBSDKDevicePoller; // inherited from NSObject

	static new(): FBSDKDevicePoller; // inherited from NSObject

	scheduleWithIntervalBlock(interval: number, block: () => void): void;
}

declare class FBSDKDeviceRequestsHelper extends NSObject {
	static alloc(): FBSDKDeviceRequestsHelper; // inherited from NSObject

	static cleanUpAdvertisementServiceFor(delegate: NSNetServiceDelegate): void;

	static getDeviceInfo(): string;

	static isDelegateForAdvertisementService(delegate: NSNetServiceDelegate, service: NSNetService): boolean;

	static new(): FBSDKDeviceRequestsHelper; // inherited from NSObject

	static startAdvertisementServiceWithLoginCodeDelegate(loginCode: string, delegate: NSNetServiceDelegate): boolean;
}

declare var FBSDKLoginAuthTypeReauthorize: string;

declare var FBSDKLoginAuthTypeRerequest: string;

declare class FBSDKLoginButton extends FBSDKButton {
	static alloc(): FBSDKLoginButton; // inherited from NSObject

	static appearance(): FBSDKLoginButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKLoginButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKLoginButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKLoginButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKLoginButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKLoginButton; // inherited from UIAppearance

	static buttonWithConfigurationPrimaryAction(configuration: UIButtonConfiguration, primaryAction: UIAction): FBSDKLoginButton; // inherited from UIButton

	static buttonWithType(buttonType: UIButtonType): FBSDKLoginButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): FBSDKLoginButton; // inherited from UIButton

	static new(): FBSDKLoginButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): FBSDKLoginButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): FBSDKLoginButton; // inherited from UIButton

	authType: string;

	codeVerifier: FBSDKCodeVerifier;

	defaultAudience: FBSDKDefaultAudience;

	delegate: FBSDKLoginButtonDelegate;

	loginTracking: FBSDKLoginTracking;

	messengerPageId: string;

	nonce: string;

	permissions: NSArray<string>;

	tooltipBehavior: FBSDKLoginButtonTooltipBehavior;

	tooltipColorStyle: FBSDKTooltipColorStyle;
}

interface FBSDKLoginButtonDelegate extends NSObjectProtocol {
	loginButtonDidCompleteWithResultError(loginButton: FBSDKLoginButton, result: FBSDKLoginManagerLoginResult, error: NSError): void;

	loginButtonDidLogOut(loginButton: FBSDKLoginButton): void;

	loginButtonWillLogin?(loginButton: FBSDKLoginButton): boolean;
}
declare var FBSDKLoginButtonDelegate: {
	prototype: FBSDKLoginButtonDelegate;
};

declare const enum FBSDKLoginButtonTooltipBehavior {
	Automatic = 0,

	ForceDisplay = 1,

	Disable = 2,
}

declare class FBSDKLoginCompleterFactory extends NSObject {
	static alloc(): FBSDKLoginCompleterFactory; // inherited from NSObject

	static new(): FBSDKLoginCompleterFactory; // inherited from NSObject

	createLoginCompleterWithUrlParametersAppID(parameters: NSDictionary<string, any>, appID: string): FBSDKLoginCompleting;
}

interface FBSDKLoginCompleting {
	completeLoginWithHandler(handler: (p1: FBSDKLoginCompletionParameters) => void): void;

	completeLoginWithNonceCodeVerifierHandler(nonce: string, codeVerifier: string, handler: (p1: FBSDKLoginCompletionParameters) => void): void;
}
declare var FBSDKLoginCompleting: {
	prototype: FBSDKLoginCompleting;
};

declare class FBSDKLoginCompletionParameters extends NSObject {
	static alloc(): FBSDKLoginCompletionParameters; // inherited from NSObject

	static new(): FBSDKLoginCompletionParameters; // inherited from NSObject

	accessTokenString: string;

	appID: string;

	authenticationToken: FBSDKAuthenticationToken;

	authenticationTokenString: string;

	challenge: string;

	code: string;

	dataAccessExpirationDate: Date;

	declinedPermissions: NSSet<FBSDKPermission>;

	error: NSError;

	expirationDate: Date;

	expiredPermissions: NSSet<FBSDKPermission>;

	graphDomain: string;

	nonceString: string;

	permissions: NSSet<FBSDKPermission>;

	profile: FBSDKProfile;

	userID: string;
}

declare class FBSDKLoginConfiguration extends NSObject {
	static alloc(): FBSDKLoginConfiguration; // inherited from NSObject

	static new(): FBSDKLoginConfiguration; // inherited from NSObject

	readonly authType: string;

	readonly codeVerifier: FBSDKCodeVerifier;

	readonly messengerPageId: string;

	readonly nonce: string;

	readonly requestedPermissions: NSSet<FBSDKPermission>;

	readonly tracking: FBSDKLoginTracking;

	constructor(o: { permissions: NSArray<string> | string[]; tracking: FBSDKLoginTracking });

	constructor(o: { permissions: NSArray<string> | string[]; tracking: FBSDKLoginTracking; messengerPageId: string });

	constructor(o: { permissions: NSArray<string> | string[]; tracking: FBSDKLoginTracking; messengerPageId: string; authType: string });

	constructor(o: { permissions: NSArray<string> | string[]; tracking: FBSDKLoginTracking; nonce: string });

	constructor(o: { permissions: NSArray<string> | string[]; tracking: FBSDKLoginTracking; nonce: string; messengerPageId: string });

	constructor(o: { permissions: NSArray<string> | string[]; tracking: FBSDKLoginTracking; nonce: string; messengerPageId: string; authType: string });

	constructor(o: { permissions: NSArray<string> | string[]; tracking: FBSDKLoginTracking; nonce: string; messengerPageId: string; authType: string; codeVerifier: FBSDKCodeVerifier });

	constructor(o: { tracking: FBSDKLoginTracking });

	initWithPermissionsTracking(permissions: NSArray<string> | string[], tracking: FBSDKLoginTracking): this;

	initWithPermissionsTrackingMessengerPageId(permissions: NSArray<string> | string[], tracking: FBSDKLoginTracking, messengerPageId: string): this;

	initWithPermissionsTrackingMessengerPageIdAuthType(permissions: NSArray<string> | string[], tracking: FBSDKLoginTracking, messengerPageId: string, authType: string): this;

	initWithPermissionsTrackingNonce(permissions: NSArray<string> | string[], tracking: FBSDKLoginTracking, nonce: string): this;

	initWithPermissionsTrackingNonceMessengerPageId(permissions: NSArray<string> | string[], tracking: FBSDKLoginTracking, nonce: string, messengerPageId: string): this;

	initWithPermissionsTrackingNonceMessengerPageIdAuthType(permissions: NSArray<string> | string[], tracking: FBSDKLoginTracking, nonce: string, messengerPageId: string, authType: string): this;

	initWithPermissionsTrackingNonceMessengerPageIdAuthTypeCodeVerifier(permissions: NSArray<string> | string[], tracking: FBSDKLoginTracking, nonce: string, messengerPageId: string, authType: string, codeVerifier: FBSDKCodeVerifier): this;

	initWithTracking(tracking: FBSDKLoginTracking): this;
}

declare const enum FBSDKLoginError {
	Reserved = 300,

	Unknown = 301,

	PasswordChanged = 302,

	UserCheckpointed = 303,

	UserMismatch = 304,

	UnconfirmedUser = 305,

	SystemAccountAppDisabled = 306,

	SystemAccountUnavailable = 307,

	BadChallengeString = 308,

	InvalidIDToken = 309,

	MissingAccessToken = 310,
}

declare var FBSDKLoginErrorDomain: string;

declare class FBSDKLoginManager extends NSObject implements FBSDKURLOpening {
	static alloc(): FBSDKLoginManager; // inherited from NSObject

	static new(): FBSDKLoginManager; // inherited from NSObject

	defaultAudience: FBSDKDefaultAudience;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { defaultAudience: FBSDKDefaultAudience });

	applicationDidBecomeActive(application: UIApplication): void;

	applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

	canOpenURLForApplicationSourceApplicationAnnotation(url: NSURL, application: UIApplication, sourceApplication: string, annotation: any): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDefaultAudience(defaultAudience: FBSDKDefaultAudience): this;

	isAuthenticationURL(url: NSURL): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	logInFromViewControllerConfigurationCompletion(viewController: UIViewController, configuration: FBSDKLoginConfiguration, completion: (p1: FBSDKLoginManagerLoginResult, p2: NSError) => void): void;

	logInWithPermissionsFromViewControllerHandler(permissions: NSArray<string> | string[], viewController: UIViewController, handler: (p1: FBSDKLoginManagerLoginResult, p2: NSError) => void): void;

	logOut(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reauthorizeDataAccessHandler(viewController: UIViewController, handler: (p1: FBSDKLoginManagerLoginResult, p2: NSError) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldStopPropagationOfURL(url: NSURL): boolean;
}

declare class FBSDKLoginManagerLogger extends NSObject {
	static alloc(): FBSDKLoginManagerLogger; // inherited from NSObject

	static clientStateForAuthMethodAndExistingStateLogger(authMethod: string, existingState: NSDictionary<string, any>, logger: FBSDKLoginManagerLogger): string;

	static new(): FBSDKLoginManagerLogger; // inherited from NSObject

	constructor(o: { loggingToken: string; tracking: FBSDKLoginTracking });

	constructor(o: { parameters: NSDictionary<string, any>; tracking: FBSDKLoginTracking });

	endLoginWithResultError(result: FBSDKLoginManagerLoginResult, error: NSError): void;

	endSession(): void;

	initWithLoggingTokenTracking(loggingToken: string, tracking: FBSDKLoginTracking): this;

	initWithParametersTracking(parameters: NSDictionary<string, any>, tracking: FBSDKLoginTracking): this;

	postLoginHeartbeat(): void;

	startAuthMethod(authMethod: string): void;

	startSessionForLoginManager(loginManager: FBSDKLoginManager): void;

	willAttemptAppSwitchingBehaviorWithUrlScheme(urlScheme: string): void;
}

declare class FBSDKLoginManagerLoginResult extends NSObject {
	static alloc(): FBSDKLoginManagerLoginResult; // inherited from NSObject

	static new(): FBSDKLoginManagerLoginResult; // inherited from NSObject

	readonly authenticationToken: FBSDKAuthenticationToken;

	readonly declinedPermissions: NSSet<string>;

	readonly grantedPermissions: NSSet<string>;

	readonly isCancelled: boolean;

	readonly token: FBSDKAccessToken;

	constructor(o: { token: FBSDKAccessToken; authenticationToken: FBSDKAuthenticationToken; isCancelled: boolean; grantedPermissions: NSSet<string>; declinedPermissions: NSSet<string> });

	initWithTokenAuthenticationTokenIsCancelledGrantedPermissionsDeclinedPermissions(token: FBSDKAccessToken, authenticationToken: FBSDKAuthenticationToken, isCancelled: boolean, grantedPermissions: NSSet<string>, declinedPermissions: NSSet<string>): this;
}

declare const enum FBSDKLoginManagerState {
	Idle = 0,

	Start = 1,

	PerformingLogin = 2,
}

declare class FBSDKLoginRecoveryAttempter extends NSObject implements FBSDKErrorRecoveryAttempting {
	static alloc(): FBSDKLoginRecoveryAttempter; // inherited from NSObject

	static new(): FBSDKLoginRecoveryAttempter; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	attemptRecoveryFromErrorCompletionHandler(error: NSError, completionHandler: (p1: boolean) => void): void;

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

declare class FBSDKLoginTooltipView extends FBSDKTooltipView {
	static alloc(): FBSDKLoginTooltipView; // inherited from NSObject

	static appearance(): FBSDKLoginTooltipView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKLoginTooltipView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKLoginTooltipView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKLoginTooltipView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKLoginTooltipView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKLoginTooltipView; // inherited from UIAppearance

	static new(): FBSDKLoginTooltipView; // inherited from NSObject

	delegate: FBSDKLoginTooltipViewDelegate;

	forceDisplay: boolean;

	shouldForceDisplay: boolean;
}

interface FBSDKLoginTooltipViewDelegate {
	loginTooltipViewShouldAppear?(view: FBSDKLoginTooltipView, appIsEligible: boolean): boolean;

	loginTooltipViewWillAppear?(view: FBSDKLoginTooltipView): void;

	loginTooltipViewWillNotAppear?(view: FBSDKLoginTooltipView): void;
}
declare var FBSDKLoginTooltipViewDelegate: {
	prototype: FBSDKLoginTooltipViewDelegate;
};

declare const enum FBSDKLoginTracking {
	Enabled = 0,

	Limited = 1,
}

declare class FBSDKLoginUtility extends NSObject {
	static alloc(): FBSDKLoginUtility; // inherited from NSObject

	static new(): FBSDKLoginUtility; // inherited from NSObject

	static queryParamsFromLoginURL(url: NSURL): NSDictionary<string, any>;

	static stringForAudience(audience: FBSDKDefaultAudience): string;

	static userIDFromSignedRequest(signedRequest: string): string;
}

declare class FBSDKPermission extends NSObject {
	static alloc(): FBSDKPermission; // inherited from NSObject

	static new(): FBSDKPermission; // inherited from NSObject

	static permissionsFromRawPermissions(rawPermissions: NSSet<string>): NSSet<FBSDKPermission>;

	static rawPermissionsFromPermissions(permissions: NSSet<FBSDKPermission>): NSSet<string>;

	constructor(o: { string: string });

	initWithString(string: string): this;
}

declare class FBSDKProfileFactory extends NSObject {
	static alloc(): FBSDKProfileFactory; // inherited from NSObject

	static new(): FBSDKProfileFactory; // inherited from NSObject

	createProfileWithUserIDFirstNameMiddleNameLastNameNameLinkURLRefreshDateImageURLEmailFriendIDsBirthdayAgeRangeHometownLocationGenderIsLimited(userID: string, firstName: string, middleName: string, lastName: string, name: string, linkURL: NSURL, refreshDate: Date, imageURL: NSURL, email: string, friendIDs: NSArray<string> | string[], birthday: Date, ageRange: FBSDKUserAgeRange, hometown: FBSDKLocation, location: FBSDKLocation, gender: string, isLimited: boolean): FBSDKProfile;
}

declare const enum FBSDKTooltipColorStyle {
	FriendlyBlue = 0,

	NeutralGray = 1,
}

declare class FBSDKTooltipView extends UIView {
	static alloc(): FBSDKTooltipView; // inherited from NSObject

	static appearance(): FBSDKTooltipView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKTooltipView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKTooltipView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKTooltipView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKTooltipView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKTooltipView; // inherited from UIAppearance

	static new(): FBSDKTooltipView; // inherited from NSObject

	colorStyle: FBSDKTooltipColorStyle;

	displayDuration: number;

	message: string;

	tagline: string;

	constructor(o: { tagline: string; message: string; colorStyle: FBSDKTooltipColorStyle });

	dismiss(): void;

	initWithTaglineMessageColorStyle(tagline: string, message: string, colorStyle: FBSDKTooltipColorStyle): this;

	presentFromView(anchorView: UIView): void;

	presentInViewWithArrowPositionDirection(view: UIView, arrowPosition: CGPoint, direction: FBSDKTooltipViewArrowDirection): void;
}

declare const enum FBSDKTooltipViewArrowDirection {
	Down = 0,

	Up = 1,
}

interface _FBSDKLoginEventLogging {
	flushBehavior: FBSDKAppEventsFlushBehavior;

	flush(): void;

	logInternalEventParametersIsImplicitlyLogged(eventName: string, parameters: NSDictionary<string, any>, isImplicitlyLogged: boolean): void;
}
declare var _FBSDKLoginEventLogging: {
	prototype: _FBSDKLoginEventLogging;
};

interface _FBSDKServerConfigurationProviding {
	loadServerConfigurationWithCompletionBlock(completion: (p1: FBSDKLoginTooltip, p2: NSError) => void): void;
}
declare var _FBSDKServerConfigurationProviding: {
	prototype: _FBSDKServerConfigurationProviding;
};

interface _FBSDKUserInterfaceElementProviding {
	topMostViewController(): UIViewController;

	viewControllerForView(view: UIView): UIViewController;
}
declare var _FBSDKUserInterfaceElementProviding: {
	prototype: _FBSDKUserInterfaceElementProviding;
};

interface _FBSDKUserInterfaceStringProviding {
	bundleForStrings: NSBundle;
}
declare var _FBSDKUserInterfaceStringProviding: {
	prototype: _FBSDKUserInterfaceStringProviding;
};

declare class _LoginURLCompleter extends NSObject implements FBSDKLoginCompleting {
	static alloc(): _LoginURLCompleter; // inherited from NSObject

	static new(): _LoginURLCompleter; // inherited from NSObject

	completeLoginWithHandler(handler: (p1: FBSDKLoginCompletionParameters) => void): void;

	completeLoginWithNonceCodeVerifierHandler(nonce: string, codeVerifier: string, handler: (p1: FBSDKLoginCompletionParameters) => void): void;
}
