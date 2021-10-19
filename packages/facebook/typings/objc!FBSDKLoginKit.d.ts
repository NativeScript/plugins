
declare const enum FBSDKDefaultAudience {

	Friends = 0,

	OnlyMe = 1,

	Everyone = 2
}

declare class FBSDKDeviceLoginCodeInfo extends NSObject {

	static alloc(): FBSDKDeviceLoginCodeInfo; // inherited from NSObject

	static new(): FBSDKDeviceLoginCodeInfo; // inherited from NSObject

	readonly expirationDate: Date;

	readonly identifier: string;

	readonly loginCode: string;

	readonly pollingInterval: number;

	readonly verificationURL: NSURL;
}

declare const enum FBSDKDeviceLoginError {

	ExcessivePolling = 1349172,

	AuthorizationDeclined = 1349173,

	AuthorizationPending = 1349174,

	CodeExpired = 1349152
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

	readonly  // inherited from NSObjectProtocol

	constructor(o: { permissions: NSArray<string> | string[]; enableSmartLogin: boolean; });

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

interface FBSDKDeviceLoginManagerDelegate extends NSObjectProtocol {

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

	readonly cancelled: boolean;
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

	Disable = 2
}

declare class FBSDKLoginConfiguration extends NSObject {

	static alloc(): FBSDKLoginConfiguration; // inherited from NSObject

	static authTypeForString(rawValue: string): string;

	static new(): FBSDKLoginConfiguration; // inherited from NSObject

	readonly authType: string;

	readonly messengerPageId: string;

	readonly nonce: string;

	readonly tracking: FBSDKLoginTracking;

	constructor(o: { permissions: NSArray<string> | string[]; tracking: FBSDKLoginTracking; });

	constructor(o: { permissions: NSArray<string> | string[]; tracking: FBSDKLoginTracking; messengerPageId: string; });

	constructor(o: { permissions: NSArray<string> | string[]; tracking: FBSDKLoginTracking; messengerPageId: string; authType: string; });

	constructor(o: { permissions: NSArray<string> | string[]; tracking: FBSDKLoginTracking; nonce: string; });

	constructor(o: { permissions: NSArray<string> | string[]; tracking: FBSDKLoginTracking; nonce: string; messengerPageId: string; });

	constructor(o: { permissions: NSArray<string> | string[]; tracking: FBSDKLoginTracking; nonce: string; messengerPageId: string; authType: string; });

	constructor(o: { tracking: FBSDKLoginTracking; });

	initWithPermissionsTracking(permissions: NSArray<string> | string[], tracking: FBSDKLoginTracking): this;

	initWithPermissionsTrackingMessengerPageId(permissions: NSArray<string> | string[], tracking: FBSDKLoginTracking, messengerPageId: string): this;

	initWithPermissionsTrackingMessengerPageIdAuthType(permissions: NSArray<string> | string[], tracking: FBSDKLoginTracking, messengerPageId: string, authType: string): this;

	initWithPermissionsTrackingNonce(permissions: NSArray<string> | string[], tracking: FBSDKLoginTracking, nonce: string): this;

	initWithPermissionsTrackingNonceMessengerPageId(permissions: NSArray<string> | string[], tracking: FBSDKLoginTracking, nonce: string, messengerPageId: string): this;

	initWithPermissionsTrackingNonceMessengerPageIdAuthType(permissions: NSArray<string> | string[], tracking: FBSDKLoginTracking, nonce: string, messengerPageId: string, authType: string): this;

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

	MissingAccessToken = 310
}

declare var FBSDKLoginErrorDomain: string;

declare class FBSDKLoginManager extends NSObject {

	static alloc(): FBSDKLoginManager; // inherited from NSObject

	static new(): FBSDKLoginManager; // inherited from NSObject

	defaultAudience: FBSDKDefaultAudience;

	logInFromViewControllerConfigurationCompletion(viewController: UIViewController, configuration: FBSDKLoginConfiguration, completion: (p1: FBSDKLoginManagerLoginResult, p2: NSError) => void): void;

	logInWithPermissionsFromViewControllerHandler(permissions: NSArray<string> | string[], fromViewController: UIViewController, handler: (p1: FBSDKLoginManagerLoginResult, p2: NSError) => void): void;

	logInWithURLHandler(url: NSURL, handler: (p1: FBSDKLoginManagerLoginResult, p2: NSError) => void): void;

	logOut(): void;

	reauthorizeDataAccessHandler(fromViewController: UIViewController, handler: (p1: FBSDKLoginManagerLoginResult, p2: NSError) => void): void;
}

declare class FBSDKLoginManagerLoginResult extends NSObject {

	static alloc(): FBSDKLoginManagerLoginResult; // inherited from NSObject

	static new(): FBSDKLoginManagerLoginResult; // inherited from NSObject

	authenticationToken: FBSDKAuthenticationToken;

	declinedPermissions: NSSet<string>;

	grantedPermissions: NSSet<string>;

	readonly isCancelled: boolean;

	token: FBSDKAccessToken;

	constructor(o: { token: FBSDKAccessToken; authenticationToken: FBSDKAuthenticationToken; isCancelled: boolean; grantedPermissions: NSSet<string>; declinedPermissions: NSSet<string>; });

	initWithTokenAuthenticationTokenIsCancelledGrantedPermissionsDeclinedPermissions(token: FBSDKAccessToken, authenticationToken: FBSDKAuthenticationToken, isCancelled: boolean, grantedPermissions: NSSet<string>, declinedPermissions: NSSet<string>): this;
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
}

interface FBSDKLoginTooltipViewDelegate extends NSObjectProtocol {

	loginTooltipViewShouldAppear?(view: FBSDKLoginTooltipView, appIsEligible: boolean): boolean;

	loginTooltipViewWillAppear?(view: FBSDKLoginTooltipView): void;

	loginTooltipViewWillNotAppear?(view: FBSDKLoginTooltipView): void;
}
declare var FBSDKLoginTooltipViewDelegate: {

	prototype: FBSDKLoginTooltipViewDelegate;
};

declare const enum FBSDKLoginTracking {

	Enabled = 0,

	Limited = 1
}

declare class FBSDKReferralCode extends NSObject {

	static alloc(): FBSDKReferralCode; // inherited from NSObject

	static initWithString(string: string): FBSDKReferralCode;

	static new(): FBSDKReferralCode; // inherited from NSObject

	value: string;
}

declare class FBSDKReferralManager extends NSObject {

	static alloc(): FBSDKReferralManager; // inherited from NSObject

	static new(): FBSDKReferralManager; // inherited from NSObject

	constructor(o: { viewController: UIViewController; });

	initWithViewController(viewController: UIViewController): this;

	startReferralWithCompletionHandler(handler: (p1: FBSDKReferralManagerResult, p2: NSError) => void): void;
}

declare class FBSDKReferralManagerResult extends NSObject {

	static alloc(): FBSDKReferralManagerResult; // inherited from NSObject

	static new(): FBSDKReferralManagerResult; // inherited from NSObject

	readonly isCancelled: boolean;

	referralCodes: NSArray<FBSDKReferralCode>;

	constructor(o: { referralCodes: NSArray<FBSDKReferralCode> | FBSDKReferralCode[]; isCancelled: boolean; });

	initWithReferralCodesIsCancelled(referralCodes: NSArray<FBSDKReferralCode> | FBSDKReferralCode[], isCancelled: boolean): this;
}

declare const enum FBSDKTooltipColorStyle {

	FriendlyBlue = 0,

	NeutralGray = 1
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

	constructor(o: { tagline: string; message: string; colorStyle: FBSDKTooltipColorStyle; });

	dismiss(): void;

	initWithTaglineMessageColorStyle(tagline: string, message: string, colorStyle: FBSDKTooltipColorStyle): this;

	presentFromView(anchorView: UIView): void;

	presentInViewWithArrowPositionDirection(view: UIView, arrowPosition: CGPoint, arrowDirection: FBSDKTooltipViewArrowDirection): void;
}

declare const enum FBSDKTooltipViewArrowDirection {

	Down = 0,

	Up = 1
}
