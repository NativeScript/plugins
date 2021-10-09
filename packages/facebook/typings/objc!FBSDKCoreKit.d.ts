
declare class FBSDKAccessToken extends NSObject implements NSCopying, NSObjectProtocol, NSSecureCoding {

	static alloc(): FBSDKAccessToken; // inherited from NSObject

	static new(): FBSDKAccessToken; // inherited from NSObject

	static refreshCurrentAccessToken(completionHandler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void): void;

	static refreshCurrentAccessTokenWithCompletion(completion: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void): void;

	readonly appID: string;

	readonly dataAccessExpirationDate: Date;

	readonly dataAccessExpired: boolean;

	readonly declinedPermissions: NSSet<string>;

	readonly expirationDate: Date;

	readonly expired: boolean;

	readonly expiredPermissions: NSSet<string>;

	readonly graphDomain: string;

	readonly permissions: NSSet<string>;

	readonly refreshDate: Date;

	readonly tokenString: string;

	readonly userID: string;

	static currentAccessToken: FBSDKAccessToken;

	static readonly currentAccessTokenIsActive: boolean;

	static tokenCache: FBSDKTokenCaching;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { tokenString: string; permissions: NSArray<string> | string[]; declinedPermissions: NSArray<string> | string[]; expiredPermissions: NSArray<string> | string[]; appID: string; userID: string; expirationDate: Date; refreshDate: Date; dataAccessExpirationDate: Date; });

	constructor(o: { tokenString: string; permissions: NSArray<string> | string[]; declinedPermissions: NSArray<string> | string[]; expiredPermissions: NSArray<string> | string[]; appID: string; userID: string; expirationDate: Date; refreshDate: Date; dataAccessExpirationDate: Date; graphDomain: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	hasGranted(permission: string): boolean;

	initWithCoder(coder: NSCoder): this;

	initWithTokenStringPermissionsDeclinedPermissionsExpiredPermissionsAppIDUserIDExpirationDateRefreshDateDataAccessExpirationDate(tokenString: string, permissions: NSArray<string> | string[], declinedPermissions: NSArray<string> | string[], expiredPermissions: NSArray<string> | string[], appID: string, userID: string, expirationDate: Date, refreshDate: Date, dataAccessExpirationDate: Date): this;

	initWithTokenStringPermissionsDeclinedPermissionsExpiredPermissionsAppIDUserIDExpirationDateRefreshDateDataAccessExpirationDateGraphDomain(tokenString: string, permissions: NSArray<string> | string[], declinedPermissions: NSArray<string> | string[], expiredPermissions: NSArray<string> | string[], appID: string, userID: string, expirationDate: Date, refreshDate: Date, dataAccessExpirationDate: Date, graphDomain: string): this;

	isEqual(object: any): boolean;

	isEqualToAccessToken(token: FBSDKAccessToken): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var FBSDKAccessTokenChangeNewKey: string;

declare var FBSDKAccessTokenChangeOldKey: string;

declare var FBSDKAccessTokenDidChangeNotification: string;

declare var FBSDKAccessTokenDidChangeUserIDKey: string;

declare var FBSDKAccessTokenDidExpireKey: string;

interface FBSDKAccessTokenProviding {
}
declare var FBSDKAccessTokenProviding: {

	prototype: FBSDKAccessTokenProviding;
};

interface FBSDKAccessTokenSetting {
}
declare var FBSDKAccessTokenSetting: {

	prototype: FBSDKAccessTokenSetting;
};

declare const enum FBSDKAdvertisingTrackingStatus {

	Allowed = 0,

	Disallowed = 1,

	Unspecified = 2
}

interface FBSDKAppAvailabilityChecker {

	isMessengerAppInstalled: boolean;
}
declare var FBSDKAppAvailabilityChecker: {

	prototype: FBSDKAppAvailabilityChecker;
};

declare var FBSDKAppEventCity: string;

declare var FBSDKAppEventCountry: string;

declare var FBSDKAppEventDateOfBirth: string;

declare var FBSDKAppEventEmail: string;

declare var FBSDKAppEventExternalId: string;

declare var FBSDKAppEventFirstName: string;

declare var FBSDKAppEventGender: string;

declare var FBSDKAppEventLastName: string;

declare var FBSDKAppEventNameAchievedLevel: string;

declare var FBSDKAppEventNameAdClick: string;

declare var FBSDKAppEventNameAdImpression: string;

declare var FBSDKAppEventNameAddedPaymentInfo: string;

declare var FBSDKAppEventNameAddedToCart: string;

declare var FBSDKAppEventNameAddedToWishlist: string;

declare var FBSDKAppEventNameCompletedRegistration: string;

declare var FBSDKAppEventNameCompletedTutorial: string;

declare var FBSDKAppEventNameContact: string;

declare var FBSDKAppEventNameCustomizeProduct: string;

declare var FBSDKAppEventNameDonate: string;

declare var FBSDKAppEventNameFindLocation: string;

declare var FBSDKAppEventNameInitiatedCheckout: string;

declare var FBSDKAppEventNamePurchased: string;

declare var FBSDKAppEventNameRated: string;

declare var FBSDKAppEventNameSchedule: string;

declare var FBSDKAppEventNameSearched: string;

declare var FBSDKAppEventNameSpentCredits: string;

declare var FBSDKAppEventNameStartTrial: string;

declare var FBSDKAppEventNameSubmitApplication: string;

declare var FBSDKAppEventNameSubscribe: string;

declare var FBSDKAppEventNameUnlockedAchievement: string;

declare var FBSDKAppEventNameViewedContent: string;

declare var FBSDKAppEventParameterNameAdType: string;

declare var FBSDKAppEventParameterNameContent: string;

declare var FBSDKAppEventParameterNameContentID: string;

declare var FBSDKAppEventParameterNameContentType: string;

declare var FBSDKAppEventParameterNameCurrency: string;

declare var FBSDKAppEventParameterNameDescription: string;

declare var FBSDKAppEventParameterNameLevel: string;

declare var FBSDKAppEventParameterNameMaxRatingValue: string;

declare var FBSDKAppEventParameterNameNumItems: string;

declare var FBSDKAppEventParameterNameOrderID: string;

declare var FBSDKAppEventParameterNamePaymentInfoAvailable: string;

declare var FBSDKAppEventParameterNameRegistrationMethod: string;

declare var FBSDKAppEventParameterNameSearchString: string;

declare var FBSDKAppEventParameterNameSuccess: string;

declare var FBSDKAppEventParameterProductAppLinkAndroidAppName: string;

declare var FBSDKAppEventParameterProductAppLinkAndroidPackage: string;

declare var FBSDKAppEventParameterProductAppLinkAndroidUrl: string;

declare var FBSDKAppEventParameterProductAppLinkIOSAppName: string;

declare var FBSDKAppEventParameterProductAppLinkIOSAppStoreID: string;

declare var FBSDKAppEventParameterProductAppLinkIOSUrl: string;

declare var FBSDKAppEventParameterProductAppLinkIPadAppName: string;

declare var FBSDKAppEventParameterProductAppLinkIPadAppStoreID: string;

declare var FBSDKAppEventParameterProductAppLinkIPadUrl: string;

declare var FBSDKAppEventParameterProductAppLinkIPhoneAppName: string;

declare var FBSDKAppEventParameterProductAppLinkIPhoneAppStoreID: string;

declare var FBSDKAppEventParameterProductAppLinkIPhoneUrl: string;

declare var FBSDKAppEventParameterProductAppLinkWindowsPhoneAppID: string;

declare var FBSDKAppEventParameterProductAppLinkWindowsPhoneAppName: string;

declare var FBSDKAppEventParameterProductAppLinkWindowsPhoneUrl: string;

declare var FBSDKAppEventParameterProductCategory: string;

declare var FBSDKAppEventParameterProductCustomLabel0: string;

declare var FBSDKAppEventParameterProductCustomLabel1: string;

declare var FBSDKAppEventParameterProductCustomLabel2: string;

declare var FBSDKAppEventParameterProductCustomLabel3: string;

declare var FBSDKAppEventParameterProductCustomLabel4: string;

declare var FBSDKAppEventParameterValueNo: string;

declare var FBSDKAppEventParameterValueYes: string;

declare var FBSDKAppEventPhone: string;

declare var FBSDKAppEventState: string;

declare var FBSDKAppEventZip: string;

declare class FBSDKAppEvents extends NSObject {

	static activateApp(): void;

	static alloc(): FBSDKAppEvents; // inherited from NSObject

	static augmentHybridWKWebView(webView: WKWebView): void;

	static clearUserData(): void;

	static clearUserDataForType(type: string): void;

	static clearUserID(): void;

	static flush(): void;

	static getUserData(): string;

	static logEvent(eventName: string): void;

	static logEventParameters(eventName: string, parameters: NSDictionary<string, any>): void;

	static logEventValueToSum(eventName: string, valueToSum: number): void;

	static logEventValueToSumParameters(eventName: string, valueToSum: number, parameters: NSDictionary<string, any>): void;

	static logEventValueToSumParametersAccessToken(eventName: string, valueToSum: number, parameters: NSDictionary<string, any>, accessToken: FBSDKAccessToken): void;

	static logInternalEventParametersIsImplicitlyLogged(eventName: string, parameters: NSDictionary<any, any>, isImplicitlyLogged: boolean): void;

	static logInternalEventParametersIsImplicitlyLoggedAccessToken(eventName: string, parameters: NSDictionary<any, any>, isImplicitlyLogged: boolean, accessToken: FBSDKAccessToken): void;

	static logProductItemAvailabilityConditionDescriptionImageLinkLinkTitlePriceAmountCurrencyGtinMpnBrandParameters(itemID: string, availability: FBSDKProductAvailability, condition: FBSDKProductCondition, description: string, imageLink: string, link: string, title: string, priceAmount: number, currency: string, gtin: string, mpn: string, brand: string, parameters: NSDictionary<string, any>): void;

	static logPurchaseCurrency(purchaseAmount: number, currency: string): void;

	static logPurchaseCurrencyParameters(purchaseAmount: number, currency: string, parameters: NSDictionary<string, any>): void;

	static logPurchaseCurrencyParametersAccessToken(purchaseAmount: number, currency: string, parameters: NSDictionary<string, any>, accessToken: FBSDKAccessToken): void;

	static logPushNotificationOpen(payload: NSDictionary<any, any>): void;

	static logPushNotificationOpenAction(payload: NSDictionary<any, any>, action: string): void;

	static new(): FBSDKAppEvents; // inherited from NSObject

	static requestForCustomAudienceThirdPartyIDWithAccessToken(accessToken: FBSDKAccessToken): FBSDKGraphRequest;

	static sendEventBindingsToUnity(): void;

	static setIsUnityInit(isUnityInit: boolean): void;

	static setPushNotificationsDeviceToken(deviceToken: NSData): void;

	static setPushNotificationsDeviceTokenString(deviceTokenString: string): void;

	static setUserDataForType(data: string, type: string): void;

	static setUserEmailFirstNameLastNamePhoneDateOfBirthGenderCityStateZipCountry(email: string, firstName: string, lastName: string, phone: string, dateOfBirth: string, gender: string, city: string, state: string, zip: string, country: string): void;

	static readonly anonymousID: string;

	static flushBehavior: FBSDKAppEventsFlushBehavior;

	static loggingOverrideAppID: string;

	static readonly singleton: FBSDKAppEvents;

	static userID: string;

	activateApp(): void;
}

declare const enum FBSDKAppEventsFlushBehavior {

	Auto = 0,

	ExplicitOnly = 1
}

declare var FBSDKAppEventsLoggingResultNotification: string;

declare var FBSDKAppEventsOverrideAppIDBundleKey: string;

declare class FBSDKAppLink extends NSObject {

	static alloc(): FBSDKAppLink; // inherited from NSObject

	static appLinkWithSourceURLTargetsWebURL(sourceURL: NSURL, targets: NSArray<FBSDKAppLinkTarget> | FBSDKAppLinkTarget[], webURL: NSURL): FBSDKAppLink;

	static new(): FBSDKAppLink; // inherited from NSObject

	readonly sourceURL: NSURL;

	readonly targets: NSArray<FBSDKAppLinkTarget>;

	readonly webURL: NSURL;
}

declare var FBSDKAppLinkNavigateBackToReferrerEventName: string;

declare var FBSDKAppLinkNavigateInEventName: string;

declare var FBSDKAppLinkNavigateOutEventName: string;

declare class FBSDKAppLinkNavigation extends NSObject {

	static alloc(): FBSDKAppLinkNavigation; // inherited from NSObject

	static callbackAppLinkDataForAppWithNameUrl(appName: string, url: string): NSDictionary<string, NSDictionary<string, string>>;

	static navigateToAppLinkError(link: FBSDKAppLink): FBSDKAppLinkNavigationType;

	static navigateToURLHandler(destination: NSURL, handler: (p1: FBSDKAppLinkNavigationType, p2: NSError) => void): void;

	static navigateToURLResolverHandler(destination: NSURL, resolver: FBSDKAppLinkResolving, handler: (p1: FBSDKAppLinkNavigationType, p2: NSError) => void): void;

	static navigationTypeForLink(link: FBSDKAppLink): FBSDKAppLinkNavigationType;

	static navigationWithAppLinkExtrasAppLinkData(appLink: FBSDKAppLink, extras: NSDictionary<string, any>, appLinkData: NSDictionary<string, any>): FBSDKAppLinkNavigation;

	static new(): FBSDKAppLinkNavigation; // inherited from NSObject

	static resolveAppLinkHandler(destination: NSURL, handler: (p1: FBSDKAppLink, p2: NSError) => void): void;

	static resolveAppLinkResolverHandler(destination: NSURL, resolver: FBSDKAppLinkResolving, handler: (p1: FBSDKAppLink, p2: NSError) => void): void;

	readonly appLink: FBSDKAppLink;

	readonly appLinkData: NSDictionary<string, any>;

	readonly extras: NSDictionary<string, any>;

	readonly navigationType: FBSDKAppLinkNavigationType;

	static defaultResolver: FBSDKAppLinkResolving;

	navigate(): FBSDKAppLinkNavigationType;
}

declare const enum FBSDKAppLinkNavigationType {

	Failure = 0,

	Browser = 1,

	App = 2
}

declare var FBSDKAppLinkParseEventName: string;

declare class FBSDKAppLinkResolver extends NSObject implements FBSDKAppLinkResolving {

	static alloc(): FBSDKAppLinkResolver; // inherited from NSObject

	static new(): FBSDKAppLinkResolver; // inherited from NSObject

	static resolver(): FBSDKAppLinkResolver;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	appLinkFromURLHandler(url: NSURL, handler: (p1: FBSDKAppLink, p2: NSError) => void): void;

	appLinksFromURLsHandler(urls: NSArray<NSURL> | NSURL[], handler: (p1: NSDictionary<NSURL, FBSDKAppLink>, p2: NSError) => void): void;

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

declare class FBSDKAppLinkResolverRequestBuilder extends NSObject {

	static alloc(): FBSDKAppLinkResolverRequestBuilder; // inherited from NSObject

	static new(): FBSDKAppLinkResolverRequestBuilder; // inherited from NSObject

	getIdiomSpecificField(): string;

	requestForURLs(urls: NSArray<NSURL> | NSURL[]): FBSDKGraphRequest;
}

interface FBSDKAppLinkResolving extends NSObjectProtocol {

	appLinkFromURLHandler(url: NSURL, handler: (p1: FBSDKAppLink, p2: NSError) => void): void;
}
declare var FBSDKAppLinkResolving: {

	prototype: FBSDKAppLinkResolving;
};

declare class FBSDKAppLinkTarget extends NSObject {

	static alloc(): FBSDKAppLinkTarget; // inherited from NSObject

	static appLinkTargetWithURLAppStoreIdAppName(url: NSURL, appStoreId: string, appName: string): FBSDKAppLinkTarget;

	static new(): FBSDKAppLinkTarget; // inherited from NSObject

	readonly URL: NSURL;

	readonly appName: string;

	readonly appStoreId: string;
}

declare class FBSDKAppLinkUtility extends NSObject {

	static alloc(): FBSDKAppLinkUtility; // inherited from NSObject

	static appInvitePromotionCodeFromURL(url: NSURL): string;

	static fetchDeferredAppLink(handler: (p1: NSURL, p2: NSError) => void): void;

	static isMatchURLScheme(scheme: string): boolean;

	static new(): FBSDKAppLinkUtility; // inherited from NSObject
}

declare var FBSDKAppLinkVersion: string;

declare class FBSDKApplicationDelegate extends NSObject {

	static alloc(): FBSDKApplicationDelegate; // inherited from NSObject

	static new(): FBSDKApplicationDelegate; // inherited from NSObject

	static readonly sharedInstance: FBSDKApplicationDelegate;

	addObserver(observer: FBSDKApplicationObserving): void;

	applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

	applicationOpenURLOptions(application: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

	initializeSDK(): void;

	removeObserver(observer: FBSDKApplicationObserving): void;
}

interface FBSDKApplicationObserving extends NSObjectProtocol {

	applicationDidBecomeActive?(application: UIApplication): void;

	applicationDidEnterBackground?(application: UIApplication): void;

	applicationDidFinishLaunchingWithOptions?(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

	applicationOpenURLSourceApplicationAnnotation?(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

	applicationWillResignActive?(application: UIApplication): void;
}
declare var FBSDKApplicationObserving: {

	prototype: FBSDKApplicationObserving;
};

declare class FBSDKAuthenticationToken extends NSObject implements NSCopying, NSObjectProtocol, NSSecureCoding {

	static alloc(): FBSDKAuthenticationToken; // inherited from NSObject

	static new(): FBSDKAuthenticationToken; // inherited from NSObject

	readonly graphDomain: string;

	readonly nonce: string;

	readonly tokenString: string;

	static currentAuthenticationToken: FBSDKAuthenticationToken;

	static tokenCache: FBSDKTokenCaching;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	claims(): FBSDKAuthenticationTokenClaims;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

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

declare class FBSDKAuthenticationTokenClaims extends NSObject {

	static alloc(): FBSDKAuthenticationTokenClaims; // inherited from NSObject

	static new(): FBSDKAuthenticationTokenClaims; // inherited from NSObject

	readonly aud: string;

	readonly email: string;

	readonly exp: number;

	readonly familyName: string;

	readonly givenName: string;

	readonly iat: number;

	readonly iss: string;

	readonly jti: string;

	readonly middleName: string;

	readonly name: string;

	readonly nonce: string;

	readonly picture: string;

	readonly sub: string;

	readonly userAgeRange: NSDictionary<string, number>;

	readonly userBirthday: string;

	readonly userFriends: NSArray<string>;

	readonly userGender: string;

	readonly userHometown: NSDictionary<string, string>;

	readonly userLink: string;

	readonly userLocation: NSDictionary<string, string>;
}

declare class FBSDKBridgeAPI extends NSObject implements FBSDKBridgeAPIRequestOpening, FBSDKURLOpener {

	static alloc(): FBSDKBridgeAPI; // inherited from NSObject

	static new(): FBSDKBridgeAPI; // inherited from NSObject

	readonly active: boolean;

	static readonly sharedInstance: FBSDKBridgeAPI;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { processInfo: any; logger: FBSDKLogger; urlOpener: any; bridgeAPIResponseFactory: any; frameworkLoader: any; appURLSchemeProvider: any; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithProcessInfoLoggerUrlOpenerBridgeAPIResponseFactoryFrameworkLoaderAppURLSchemeProvider(processInfo: any, logger: FBSDKLogger, urlOpener: any, bridgeAPIResponseFactory: any, frameworkLoader: any, appURLSchemeProvider: any): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	openBridgeAPIRequestUseSafariViewControllerFromViewControllerCompletionBlock(request: NSObject, useSafariViewController: boolean, fromViewController: UIViewController, completionBlock: (p1: FBSDKBridgeAPIResponse) => void): void;

	openURLSenderHandler(url: NSURL, sender: FBSDKURLOpening, handler: (p1: boolean, p2: NSError) => void): void;

	openURLWithSafariViewControllerSenderFromViewControllerHandler(url: NSURL, sender: FBSDKURLOpening, fromViewController: UIViewController, handler: (p1: boolean, p2: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sessionCompletionHandler(): (p1: NSURL, p2: NSError) => void;
}

declare var FBSDKBridgeAPIAppIDKey: string;

interface FBSDKBridgeAPIProtocol extends NSObjectProtocol {

	requestURLWithActionIDSchemeMethodNameMethodVersionParametersError(actionID: string, scheme: string, methodName: string, methodVersion: string, parameters: NSDictionary<any, any>): NSURL;

	responseParametersForActionIDQueryParametersCancelledError(actionID: string, queryParameters: NSDictionary<any, any>, cancelledRef: interop.Pointer | interop.Reference<boolean>): NSDictionary<any, any>;
}
declare var FBSDKBridgeAPIProtocol: {

	prototype: FBSDKBridgeAPIProtocol;
};

declare const enum FBSDKBridgeAPIProtocolType {

	Native = 0,

	Web = 1
}

declare class FBSDKBridgeAPIRequest extends NSObject implements FBSDKBridgeAPIRequestProtocol, NSCopying, NSObjectProtocol {

	static alloc(): FBSDKBridgeAPIRequest; // inherited from NSObject

	static bridgeAPIRequestWithProtocolTypeSchemeMethodNameMethodVersionParametersUserInfo(protocolType: FBSDKBridgeAPIProtocolType, scheme: string, methodName: string, methodVersion: string, parameters: NSDictionary<any, any>, userInfo: NSDictionary<any, any>): FBSDKBridgeAPIRequest;

	static new(): FBSDKBridgeAPIRequest; // inherited from NSObject

	readonly methodVersion: string;

	readonly parameters: NSDictionary<any, any>;

	readonly userInfo: NSDictionary<any, any>;

	readonly actionID: string; // inherited from FBSDKBridgeAPIRequestProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly methodName: string; // inherited from FBSDKBridgeAPIRequestProtocol

	readonly protocol: FBSDKBridgeAPIProtocol; // inherited from FBSDKBridgeAPIRequestProtocol

	readonly protocolType: FBSDKBridgeAPIProtocolType; // inherited from FBSDKBridgeAPIRequestProtocol

	readonly scheme: string; // inherited from FBSDKBridgeAPIRequestProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	requestURL(): NSURL;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface FBSDKBridgeAPIRequestOpening extends NSObjectProtocol {

	openBridgeAPIRequestUseSafariViewControllerFromViewControllerCompletionBlock(request: NSObject, useSafariViewController: boolean, fromViewController: UIViewController, completionBlock: (p1: FBSDKBridgeAPIResponse) => void): void;
}
declare var FBSDKBridgeAPIRequestOpening: {

	prototype: FBSDKBridgeAPIRequestOpening;
};

interface FBSDKBridgeAPIRequestProtocol extends NSCopying, NSObjectProtocol {

	actionID: string;

	methodName: string;

	protocol: FBSDKBridgeAPIProtocol;

	protocolType: FBSDKBridgeAPIProtocolType;

	scheme: string;

	requestURL(): NSURL;
}
declare var FBSDKBridgeAPIRequestProtocol: {

	prototype: FBSDKBridgeAPIRequestProtocol;
};

declare class FBSDKBridgeAPIResponse extends NSObject implements NSCopying, NSObjectProtocol {

	static alloc(): FBSDKBridgeAPIResponse; // inherited from NSObject

	static bridgeAPIResponseCancelledWithRequest(request: NSObject): FBSDKBridgeAPIResponse;

	static bridgeAPIResponseWithRequestError(request: NSObject, error: NSError): FBSDKBridgeAPIResponse;

	static bridgeAPIResponseWithRequestResponseURLSourceApplicationError(request: NSObject, responseURL: NSURL, sourceApplication: string): FBSDKBridgeAPIResponse;

	static new(): FBSDKBridgeAPIResponse; // inherited from NSObject

	readonly cancelled: boolean;

	readonly error: NSError;

	readonly request: NSObject;

	readonly responseParameters: NSDictionary<any, any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

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

declare var FBSDKBridgeAPISchemeSuffixKey: string;

declare var FBSDKBridgeAPIVersionKey: string;

declare class FBSDKButton extends FBSDKImpressionTrackingButton {

	static alloc(): FBSDKButton; // inherited from NSObject

	static appearance(): FBSDKButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): FBSDKButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): FBSDKButton; // inherited from UIButton

	static new(): FBSDKButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): FBSDKButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): FBSDKButton; // inherited from UIButton

	readonly implicitlyDisabled: boolean;

	checkImplicitlyDisabled(): void;

	configureWithIconTitleBackgroundColorHighlightedColor(icon: FBSDKIcon, title: string, backgroundColor: UIColor, highlightedColor: UIColor): void;

	configureWithIconTitleBackgroundColorHighlightedColorSelectedTitleSelectedIconSelectedColorSelectedHighlightedColor(icon: FBSDKIcon, title: string, backgroundColor: UIColor, highlightedColor: UIColor, selectedTitle: string, selectedIcon: FBSDKIcon, selectedColor: UIColor, selectedHighlightedColor: UIColor): void;

	defaultBackgroundColor(): UIColor;
}

interface FBSDKButtonImpressionTracking extends NSObjectProtocol {

	analyticsParameters: NSDictionary<string, any>;

	impressionTrackingEventName: string;

	impressionTrackingIdentifier: string;
}
declare var FBSDKButtonImpressionTracking: {

	prototype: FBSDKButtonImpressionTracking;
};

declare const enum FBSDKCoreError {

	ErrorReserved = 0,

	ErrorEncryption = 1,

	ErrorInvalidArgument = 2,

	ErrorUnknown = 3,

	ErrorNetwork = 4,

	ErrorAppEventsFlush = 5,

	ErrorGraphRequestNonTextMimeTypeReturned = 6,

	ErrorGraphRequestProtocolMismatch = 7,

	ErrorGraphRequestGraphAPI = 8,

	ErrorDialogUnavailable = 9,

	ErrorAccessTokenRequired = 10,

	ErrorAppVersionUnsupported = 11,

	ErrorBrowserUnavailable = 12,

	ErrorBridgeAPIInterruption = 13,

	ErrorBridgeAPIResponse = 14
}

declare var FBSDKCoreKitVersionNumber: number;

declare var FBSDKCoreKitVersionString: interop.Reference<number>;

declare var FBSDKDialogConfigurationNameLike: string;

declare var FBSDKDialogConfigurationNameMessage: string;

declare var FBSDKDialogConfigurationNameShare: string;

declare class FBSDKError extends NSObject {

	static alloc(): FBSDKError; // inherited from NSObject

	static errorWithCodeMessage(code: number, message: string): NSError;

	static errorWithCodeMessageUnderlyingError(code: number, message: string, underlyingError: NSError): NSError;

	static errorWithDomainCodeMessage(domain: string, code: number, message: string): NSError;

	static errorWithDomainCodeMessageUnderlyingError(domain: string, code: number, message: string, underlyingError: NSError): NSError;

	static errorWithDomainCodeUserInfoMessageUnderlyingError(domain: string, code: number, userInfo: NSDictionary<string, any>, message: string, underlyingError: NSError): NSError;

	static invalidArgumentErrorWithDomainNameValueMessage(domain: string, name: string, value: any, message: string): NSError;

	static invalidArgumentErrorWithDomainNameValueMessageUnderlyingError(domain: string, name: string, value: any, message: string, underlyingError: NSError): NSError;

	static invalidArgumentErrorWithNameValueMessage(name: string, value: any, message: string): NSError;

	static isNetworkError(error: NSError): boolean;

	static new(): FBSDKError; // inherited from NSObject

	static requiredArgumentErrorWithDomainNameMessage(domain: string, name: string, message: string): NSError;

	static unknownErrorWithMessage(message: string): NSError;
}

declare var FBSDKErrorArgumentCollectionKey: string;

declare var FBSDKErrorArgumentNameKey: string;

declare var FBSDKErrorArgumentValueKey: string;

declare var FBSDKErrorDeveloperMessageKey: string;

declare var FBSDKErrorDomain: string;

declare var FBSDKErrorLocalizedDescriptionKey: string;

declare var FBSDKErrorLocalizedTitleKey: string;

interface FBSDKErrorRecoveryAttempting extends NSObjectProtocol {

	attemptRecoveryFromErrorOptionIndexCompletionHandler(error: NSError, recoveryOptionIndex: number, completionHandler: (p1: boolean) => void): void;
}
declare var FBSDKErrorRecoveryAttempting: {

	prototype: FBSDKErrorRecoveryAttempting;
};

declare const enum FBSDKFeature {

	None = 0,

	Core = 16777216,

	AppEvents = 16842752,

	CodelessEvents = 16843008,

	RestrictiveDataFiltering = 16843264,

	AAM = 16843520,

	PrivacyProtection = 16843776,

	SuggestedEvents = 16843777,

	IntelligentIntegrity = 16843778,

	ModelRequest = 16843779,

	EventDeactivation = 16844032,

	SKAdNetwork = 16844288,

	SKAdNetworkConversionValue = 16844289,

	ATELogging = 16844544,

	AEM = 16844800,

	Instrument = 16908288,

	CrashReport = 16908544,

	CrashShield = 16908545,

	ErrorReport = 16908800,

	Login = 33554432,

	Share = 50331648,

	GamingServices = 67108864
}

interface FBSDKFeatureChecking {

	checkFeatureCompletionBlock(feature: FBSDKFeature, completionBlock: (p1: boolean) => void): void;

	isEnabled(feature: FBSDKFeature): boolean;
}
declare var FBSDKFeatureChecking: {

	prototype: FBSDKFeatureChecking;
};

declare class FBSDKGraphErrorRecoveryProcessor extends NSObject {

	static alloc(): FBSDKGraphErrorRecoveryProcessor; // inherited from NSObject

	static new(): FBSDKGraphErrorRecoveryProcessor; // inherited from NSObject

	constructor(o: { accessTokenString: string; });

	initWithAccessTokenString(accessTokenString: string): this;

	processErrorRequestDelegate(error: NSError, request: FBSDKGraphRequestProtocol, delegate: FBSDKGraphErrorRecoveryProcessorDelegate): boolean;
}

interface FBSDKGraphErrorRecoveryProcessorDelegate extends NSObjectProtocol {

	processorDidAttemptRecoveryDidRecoverError(processor: FBSDKGraphErrorRecoveryProcessor, didRecover: boolean, error: NSError): void;

	processorWillProcessErrorError?(processor: FBSDKGraphErrorRecoveryProcessor, error: NSError): boolean;
}
declare var FBSDKGraphErrorRecoveryProcessorDelegate: {

	prototype: FBSDKGraphErrorRecoveryProcessorDelegate;
};

declare class FBSDKGraphRequest extends NSObject implements FBSDKGraphRequestProtocol {

	static alloc(): FBSDKGraphRequest; // inherited from NSObject

	static new(): FBSDKGraphRequest; // inherited from NSObject

	readonly HTTPMethod: string; // inherited from FBSDKGraphRequestProtocol

	readonly flags: FBSDKGraphRequestFlags; // inherited from FBSDKGraphRequestProtocol

	graphErrorRecoveryDisabled: boolean; // inherited from FBSDKGraphRequestProtocol

	readonly graphPath: string; // inherited from FBSDKGraphRequestProtocol

	readonly hasAttachments: boolean; // inherited from FBSDKGraphRequestProtocol

	parameters: NSDictionary<string, any>; // inherited from FBSDKGraphRequestProtocol

	readonly tokenString: string; // inherited from FBSDKGraphRequestProtocol

	readonly version: string; // inherited from FBSDKGraphRequestProtocol

	constructor(o: { graphPath: string; });

	constructor(o: { graphPath: string; HTTPMethod: string; });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; flags: FBSDKGraphRequestFlags; });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; HTTPMethod: string; });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; tokenString: string; version: string; HTTPMethod: string; });

	formattedDescription(): string;

	initWithGraphPath(graphPath: string): this;

	initWithGraphPathHTTPMethod(graphPath: string, method: string): this;

	initWithGraphPathParameters(graphPath: string, parameters: NSDictionary<string, any>): this;

	initWithGraphPathParametersFlags(graphPath: string, parameters: NSDictionary<string, any>, requestFlags: FBSDKGraphRequestFlags): this;

	initWithGraphPathParametersHTTPMethod(graphPath: string, parameters: NSDictionary<string, any>, method: string): this;

	initWithGraphPathParametersTokenStringVersionHTTPMethod(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, version: string, method: string): this;

	setGraphErrorRecoveryDisabled(disable: boolean): void;

	startWithCompletion(completion: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void): FBSDKGraphRequestConnecting;

	startWithCompletionHandler(handler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void): FBSDKGraphRequestConnecting;
}

interface FBSDKGraphRequestConnecting {

	delegate: FBSDKGraphRequestConnectionDelegate;

	timeout: number;

	addRequestCompletion(request: FBSDKGraphRequestProtocol, handler: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void): void;

	cancel(): void;

	start(): void;
}
declare var FBSDKGraphRequestConnecting: {

	prototype: FBSDKGraphRequestConnecting;
};

declare class FBSDKGraphRequestConnection extends NSObject implements FBSDKGraphRequestConnecting {

	static alloc(): FBSDKGraphRequestConnection; // inherited from NSObject

	static new(): FBSDKGraphRequestConnection; // inherited from NSObject

	delegateQueue: NSOperationQueue;

	readonly urlResponse: NSHTTPURLResponse;

	static defaultConnectionTimeout: number;

	delegate: FBSDKGraphRequestConnectionDelegate; // inherited from FBSDKGraphRequestConnecting

	timeout: number; // inherited from FBSDKGraphRequestConnecting

	addRequestBatchEntryNameCompletionHandler(request: FBSDKGraphRequestProtocol, name: string, handler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void): void;

	addRequestBatchParametersCompletionHandler(request: FBSDKGraphRequestProtocol, batchParameters: NSDictionary<string, any>, handler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void): void;

	addRequestCompletion(request: FBSDKGraphRequestProtocol, handler: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void): void;

	addRequestCompletionHandler(request: FBSDKGraphRequestProtocol, handler: (p1: FBSDKGraphRequestConnection, p2: any, p3: NSError) => void): void;

	addRequestNameCompletion(request: FBSDKGraphRequestProtocol, name: string, completion: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void): void;

	addRequestParametersCompletion(request: FBSDKGraphRequestProtocol, parameters: NSDictionary<string, any>, completion: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void): void;

	cancel(): void;

	overrideGraphAPIVersion(version: string): void;

	start(): void;
}

interface FBSDKGraphRequestConnectionDelegate extends NSObjectProtocol {

	requestConnectionDidFailWithError?(connection: FBSDKGraphRequestConnecting, error: NSError): void;

	requestConnectionDidFinishLoading?(connection: FBSDKGraphRequestConnecting): void;

	requestConnectionDidSendBodyDataTotalBytesWrittenTotalBytesExpectedToWrite?(connection: FBSDKGraphRequestConnecting, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;

	requestConnectionWillBeginLoading?(connection: FBSDKGraphRequestConnecting): void;
}
declare var FBSDKGraphRequestConnectionDelegate: {

	prototype: FBSDKGraphRequestConnectionDelegate;
};

declare class FBSDKGraphRequestConnectionFactory extends NSObject implements FBSDKGraphRequestConnectionProviding {

	static alloc(): FBSDKGraphRequestConnectionFactory; // inherited from NSObject

	static new(): FBSDKGraphRequestConnectionFactory; // inherited from NSObject

	createGraphRequestConnection(): FBSDKGraphRequestConnecting;
}

interface FBSDKGraphRequestConnectionProviding {

	createGraphRequestConnection(): FBSDKGraphRequestConnecting;
}
declare var FBSDKGraphRequestConnectionProviding: {

	prototype: FBSDKGraphRequestConnectionProviding;
};

declare class FBSDKGraphRequestDataAttachment extends NSObject {

	static alloc(): FBSDKGraphRequestDataAttachment; // inherited from NSObject

	static new(): FBSDKGraphRequestDataAttachment; // inherited from NSObject

	readonly contentType: string;

	readonly data: NSData;

	readonly filename: string;

	constructor(o: { data: NSData; filename: string; contentType: string; });

	initWithDataFilenameContentType(data: NSData, filename: string, contentType: string): this;
}

declare const enum FBSDKGraphRequestError {

	Other = 0,

	Transient = 1,

	Recoverable = 2
}

declare var FBSDKGraphRequestErrorGraphErrorCodeKey: string;

declare var FBSDKGraphRequestErrorGraphErrorSubcodeKey: string;

declare var FBSDKGraphRequestErrorHTTPStatusCodeKey: string;

declare var FBSDKGraphRequestErrorKey: string;

declare var FBSDKGraphRequestErrorParsedJSONResponseKey: string;

declare class FBSDKGraphRequestFactory extends NSObject implements FBSDKGraphRequestProviding {

	static alloc(): FBSDKGraphRequestFactory; // inherited from NSObject

	static new(): FBSDKGraphRequestFactory; // inherited from NSObject

	createGraphRequestWithGraphPath(graphPath: string): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParameters(graphPath: string, parameters: NSDictionary<string, any>): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersFlags(graphPath: string, parameters: NSDictionary<any, any>, flags: FBSDKGraphRequestFlags): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersHTTPMethod(graphPath: string, parameters: NSDictionary<string, any>, method: string): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringHTTPMethodFlags(graphPath: string, parameters: NSDictionary<any, any>, tokenString: string, method: string, flags: FBSDKGraphRequestFlags): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringVersionHTTPMethod(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, version: string, method: string): FBSDKGraphRequestProtocol;
}

declare const enum FBSDKGraphRequestFlags {

	None = 0,

	SkipClientToken = 2,

	DoNotInvalidateTokenOnError = 4,

	DisableErrorRecovery = 8
}

interface FBSDKGraphRequestProtocol {

	HTTPMethod: string;

	flags: FBSDKGraphRequestFlags;

	graphErrorRecoveryDisabled: boolean;

	graphPath: string;

	hasAttachments: boolean;

	parameters: NSDictionary<string, any>;

	tokenString: string;

	version: string;

	formattedDescription(): string;

	startWithCompletion(completion: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void): FBSDKGraphRequestConnecting;
}
declare var FBSDKGraphRequestProtocol: {

	prototype: FBSDKGraphRequestProtocol;
};

interface FBSDKGraphRequestProviding {

	createGraphRequestWithGraphPath(graphPath: string): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParameters(graphPath: string, parameters: NSDictionary<string, any>): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersFlags(graphPath: string, parameters: NSDictionary<any, any>, flags: FBSDKGraphRequestFlags): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersHTTPMethod(graphPath: string, parameters: NSDictionary<string, any>, method: string): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringHTTPMethodFlags(graphPath: string, parameters: NSDictionary<any, any>, tokenString: string, method: string, flags: FBSDKGraphRequestFlags): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringVersionHTTPMethod(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, version: string, method: string): FBSDKGraphRequestProtocol;
}
declare var FBSDKGraphRequestProviding: {

	prototype: FBSDKGraphRequestProviding;
};

declare var FBSDKHTTPMethodDELETE: string;

declare var FBSDKHTTPMethodGET: string;

declare var FBSDKHTTPMethodPOST: string;

declare class FBSDKIcon extends NSObject {

	static alloc(): FBSDKIcon; // inherited from NSObject

	static new(): FBSDKIcon; // inherited from NSObject

	pathWithSize(size: CGSize): any;
}

declare class FBSDKImpressionTrackingButton extends UIButton {

	static alloc(): FBSDKImpressionTrackingButton; // inherited from NSObject

	static appearance(): FBSDKImpressionTrackingButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKImpressionTrackingButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKImpressionTrackingButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKImpressionTrackingButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKImpressionTrackingButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKImpressionTrackingButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): FBSDKImpressionTrackingButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): FBSDKImpressionTrackingButton; // inherited from UIButton

	static new(): FBSDKImpressionTrackingButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): FBSDKImpressionTrackingButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): FBSDKImpressionTrackingButton; // inherited from UIButton
}

declare class FBSDKInternalUtility extends NSObject implements FBSDKAppAvailabilityChecker, FBSDKInternalUtilityProtocol {

	static alloc(): FBSDKInternalUtility; // inherited from NSObject

	static new(): FBSDKInternalUtility; // inherited from NSObject

	readonly bundleForStrings: NSBundle;

	readonly isMSQRDPlayerAppInstalled: boolean;

	static readonly sharedUtility: FBSDKInternalUtility;

	readonly isFacebookAppInstalled: boolean; // inherited from FBSDKInternalUtilityProtocol

	readonly isMessengerAppInstalled: boolean; // inherited from FBSDKAppAvailabilityChecker

	URLWithSchemeHostPathQueryParametersError(scheme: string, host: string, path: string, queryParameters: NSDictionary<any, any>): NSURL;

	appURLWithHostPathQueryParametersError(host: string, path: string, queryParameters: NSDictionary<string, string>): NSURL;

	checkRegisteredCanOpenURLScheme(urlScheme: string): void;

	extractPermissionsFromResponseGrantedPermissionsDeclinedPermissionsExpiredPermissions(responseObject: NSDictionary<any, any>, grantedPermissions: NSMutableSet<any>, declinedPermissions: NSMutableSet<any>, expiredPermissions: NSMutableSet<any>): void;

	facebookURLWithHostPrefixPathQueryParametersError(hostPrefix: string, path: string, queryParameters: NSDictionary<string, string>): NSURL;

	findWindow(): UIWindow;

	isBrowserURL(URL: NSURL): boolean;

	isRegisteredCanOpenURLScheme(urlScheme: string): boolean;

	isRegisteredURLScheme(urlScheme: string): boolean;

	objectIsEqualToObject(object: any, other: any): boolean;

	parametersFromFBURL(url: NSURL): NSDictionary<any, any>;

	registerTransientObject(object: any): void;

	topMostViewController(): UIViewController;

	unregisterTransientObject(object: any): void;

	validateAppID(): void;

	validateRequiredClientAccessToken(): string;

	validateURLSchemes(): void;

	viewControllerForView(view: UIView): UIViewController;
}

interface FBSDKInternalUtilityProtocol {

	isFacebookAppInstalled: boolean;

	URLWithSchemeHostPathQueryParametersError(scheme: string, host: string, path: string, queryParameters: NSDictionary<any, any>): NSURL;

	checkRegisteredCanOpenURLScheme(urlScheme: string): void;

	registerTransientObject(object: any): void;

	unregisterTransientObject(object: any): void;
}
declare var FBSDKInternalUtilityProtocol: {

	prototype: FBSDKInternalUtilityProtocol;
};

declare class FBSDKLocation extends NSObject implements NSCopying, NSObjectProtocol, NSSecureCoding {

	static alloc(): FBSDKLocation; // inherited from NSObject

	static locationFromDictionary(dictionary: NSDictionary<string, string>): FBSDKLocation;

	static new(): FBSDKLocation; // inherited from NSObject

	readonly id: string;

	readonly name: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

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

declare class FBSDKLogger extends NSObject {

	static alloc(): FBSDKLogger; // inherited from NSObject

	static new(): FBSDKLogger; // inherited from NSObject

	static singleShotLogEntryLogEntry(loggingBehavior: string, logEntry: string): void;
}

declare var FBSDKLoggingBehaviorAccessTokens: string;

declare var FBSDKLoggingBehaviorAppEvents: string;

declare var FBSDKLoggingBehaviorCacheErrors: string;

declare var FBSDKLoggingBehaviorDeveloperErrors: string;

declare var FBSDKLoggingBehaviorGraphAPIDebugInfo: string;

declare var FBSDKLoggingBehaviorGraphAPIDebugWarning: string;

declare var FBSDKLoggingBehaviorInformational: string;

declare var FBSDKLoggingBehaviorNetworkRequests: string;

declare var FBSDKLoggingBehaviorPerformanceCharacteristics: string;

declare var FBSDKLoggingBehaviorUIControlErrors: string;

declare class FBSDKMeasurementEvent extends NSObject {

	static alloc(): FBSDKMeasurementEvent; // inherited from NSObject

	static new(): FBSDKMeasurementEvent; // inherited from NSObject
}

declare var FBSDKMeasurementEventArgsKey: string;

declare var FBSDKMeasurementEventNameKey: string;

declare var FBSDKMeasurementEventNotification: string;

interface FBSDKMutableCopying extends NSCopying, NSMutableCopying, NSObjectProtocol {

	mutableCopy(): any;
}
declare var FBSDKMutableCopying: {

	prototype: FBSDKMutableCopying;
};

declare var FBSDKNonJSONResponseProperty: string;

declare const enum FBSDKProductAvailability {

	InStock = 0,

	OutOfStock = 1,

	PreOrder = 2,

	AvailableForOrder = 3,

	Discontinued = 4
}

declare const enum FBSDKProductCondition {

	New = 0,

	Refurbished = 1,

	Used = 2
}

declare class FBSDKProfile extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): FBSDKProfile; // inherited from NSObject

	static enableUpdatesOnAccessTokenChange(enable: boolean): void;

	static loadCurrentProfileWithCompletion(completion: (p1: FBSDKProfile, p2: NSError) => void): void;

	static new(): FBSDKProfile; // inherited from NSObject

	readonly ageRange: FBSDKUserAgeRange;

	readonly birthday: Date;

	readonly email: string;

	readonly firstName: string;

	readonly friendIDs: NSArray<string>;

	readonly gender: string;

	readonly hometown: FBSDKLocation;

	readonly imageURL: NSURL;

	readonly lastName: string;

	readonly linkURL: NSURL;

	readonly location: FBSDKLocation;

	readonly middleName: string;

	readonly name: string;

	readonly refreshDate: Date;

	readonly userID: string;

	static currentProfile: FBSDKProfile;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { userID: string; firstName: string; middleName: string; lastName: string; name: string; linkURL: NSURL; refreshDate: Date; });

	constructor(o: { userID: string; firstName: string; middleName: string; lastName: string; name: string; linkURL: NSURL; refreshDate: Date; imageURL: NSURL; email: string; friendIDs: NSArray<string> | string[]; birthday: Date; ageRange: FBSDKUserAgeRange; hometown: FBSDKLocation; location: FBSDKLocation; gender: string; });

	constructor(o: { userID: string; firstName: string; middleName: string; lastName: string; name: string; linkURL: NSURL; refreshDate: Date; imageURL: NSURL; email: string; friendIDs: NSArray<string> | string[]; birthday: Date; ageRange: FBSDKUserAgeRange; hometown: FBSDKLocation; location: FBSDKLocation; gender: string; isLimited: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	imageURLForPictureModeSize(mode: FBSDKProfilePictureMode, size: CGSize): NSURL;

	initWithCoder(coder: NSCoder): this;

	initWithUserIDFirstNameMiddleNameLastNameNameLinkURLRefreshDate(userID: string, firstName: string, middleName: string, lastName: string, name: string, linkURL: NSURL, refreshDate: Date): this;

	initWithUserIDFirstNameMiddleNameLastNameNameLinkURLRefreshDateImageURLEmailFriendIDsBirthdayAgeRangeHometownLocationGender(userID: string, firstName: string, middleName: string, lastName: string, name: string, linkURL: NSURL, refreshDate: Date, imageURL: NSURL, email: string, friendIDs: NSArray<string> | string[], birthday: Date, ageRange: FBSDKUserAgeRange, hometown: FBSDKLocation, location: FBSDKLocation, gender: string): this;

	initWithUserIDFirstNameMiddleNameLastNameNameLinkURLRefreshDateImageURLEmailFriendIDsBirthdayAgeRangeHometownLocationGenderIsLimited(userID: string, firstName: string, middleName: string, lastName: string, name: string, linkURL: NSURL, refreshDate: Date, imageURL: NSURL, email: string, friendIDs: NSArray<string> | string[], birthday: Date, ageRange: FBSDKUserAgeRange, hometown: FBSDKLocation, location: FBSDKLocation, gender: string, isLimited: boolean): this;

	isEqualToProfile(profile: FBSDKProfile): boolean;
}

declare var FBSDKProfileChangeNewKey: string;

declare var FBSDKProfileChangeOldKey: string;

declare var FBSDKProfileDidChangeNotification: string;

declare const enum FBSDKProfilePictureMode {

	Square = 0,

	Normal = 1,

	Album = 2,

	Small = 3,

	Large = 4
}

declare class FBSDKProfilePictureView extends UIView {

	static alloc(): FBSDKProfilePictureView; // inherited from NSObject

	static appearance(): FBSDKProfilePictureView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKProfilePictureView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKProfilePictureView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKProfilePictureView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKProfilePictureView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKProfilePictureView; // inherited from UIAppearance

	static new(): FBSDKProfilePictureView; // inherited from NSObject

	pictureMode: FBSDKProfilePictureMode;

	profileID: string;

	constructor(o: { frame: CGRect; profile: FBSDKProfile; });

	constructor(o: { profile: FBSDKProfile; });

	initWithFrameProfile(frame: CGRect, profile: FBSDKProfile): this;

	initWithProfile(profile: FBSDKProfile): this;

	setNeedsImageUpdate(): void;
}

declare class FBSDKServerConfigurationProvider extends NSObject {

	static alloc(): FBSDKServerConfigurationProvider; // inherited from NSObject

	static cachedSmartLoginOptions(): number;

	static new(): FBSDKServerConfigurationProvider; // inherited from NSObject
}

declare class FBSDKSettings extends NSObject implements FBSDKSettingsProtocol {

	static alloc(): FBSDKSettings; // inherited from NSObject

	static disableLoggingBehavior(loggingBehavior: string): void;

	static enableLoggingBehavior(loggingBehavior: string): void;

	static isAdvertiserTrackingEnabled(): boolean;

	static new(): FBSDKSettings; // inherited from NSObject

	static setAdvertiserTrackingEnabled(advertiserTrackingEnabled: boolean): boolean;

	static setDataProcessingOptions(options: NSArray<string> | string[]): void;

	static setDataProcessingOptionsCountryState(options: NSArray<string> | string[], country: number, state: number): void;

	static JPEGCompressionQuality: number;

	static SKAdNetworkReportEnabled: boolean;

	static advertiserIDCollectionEnabled: boolean;

	static appURLSchemeSuffix: string;

	static autoLogAppEventsEnabled: boolean;

	static codelessDebugLogEnabled: boolean;

	static readonly defaultGraphAPIVersion: string;

	static displayName: string;

	static facebookDomainPart: string;

	static graphAPIVersion: string;

	static graphErrorRecoveryEnabled: boolean;

	static limitEventAndDataUsage: boolean;

	static readonly sharedSettings: FBSDKSettings;

	static shouldUseCachedValuesForExpensiveMetadata: boolean;

	readonly advertiserTrackingEnabledTimestamp: Date; // inherited from FBSDKSettingsProtocol

	readonly advertisingTrackingStatus: FBSDKAdvertisingTrackingStatus; // inherited from FBSDKSettingsProtocol

	appID: string; // inherited from FBSDKSettingsProtocol

	readonly graphAPIDebugParamValue: string; // inherited from FBSDKSettingsProtocol

	readonly graphAPIVersion: string; // inherited from FBSDKSettingsProtocol

	readonly installTimestamp: Date; // inherited from FBSDKSettingsProtocol

	readonly isAutoLogAppEventsEnabled: boolean; // inherited from FBSDKSettingsProtocol

	readonly isDataProcessingRestricted: boolean; // inherited from FBSDKSettingsProtocol

	readonly isGraphErrorRecoveryEnabled: boolean; // inherited from FBSDKSettingsProtocol

	readonly isSKAdNetworkReportEnabled: boolean; // inherited from FBSDKSettingsProtocol

	readonly isSetATETimeExceedsInstallTime: boolean; // inherited from FBSDKSettingsProtocol

	readonly loggingBehaviors: NSSet<string>; // inherited from FBSDKSettingsProtocol

	readonly shouldLimitEventAndDataUsage: boolean; // inherited from FBSDKSettingsProtocol

	shouldUseTokenOptimizations: boolean; // inherited from FBSDKSettingsProtocol

	static appID: string; // inherited from FBSDKSettingsProtocol

	static clientToken: string; // inherited from FBSDKSettingsProtocol

	static loggingBehaviors: NSSet<string>; // inherited from FBSDKSettingsProtocol

	static readonly sdkVersion: string; // inherited from FBSDKSettingsProtocol

	static userAgentSuffix: string; // inherited from FBSDKSettingsProtocol
}

interface FBSDKSettingsLogging {

	logIfSDKSettingsChanged(): void;

	logWarnings(): void;

	recordInstall(): void;
}
declare var FBSDKSettingsLogging: {

	prototype: FBSDKSettingsLogging;
};

interface FBSDKSettingsProtocol {

	advertiserTrackingEnabledTimestamp: Date;

	advertisingTrackingStatus: FBSDKAdvertisingTrackingStatus;

	appID: string;

	graphAPIDebugParamValue: string;

	graphAPIVersion: string;

	installTimestamp: Date;

	isAutoLogAppEventsEnabled: boolean;

	isDataProcessingRestricted: boolean;

	isGraphErrorRecoveryEnabled: boolean;

	isSKAdNetworkReportEnabled: boolean;

	isSetATETimeExceedsInstallTime: boolean;

	loggingBehaviors: NSSet<string>;

	shouldLimitEventAndDataUsage: boolean;

	shouldUseTokenOptimizations: boolean;
}
declare var FBSDKSettingsProtocol: {

	prototype: FBSDKSettingsProtocol;
};

declare class FBSDKShareDialogConfiguration extends NSObject {

	static alloc(): FBSDKShareDialogConfiguration; // inherited from NSObject

	static new(): FBSDKShareDialogConfiguration; // inherited from NSObject

	readonly defaultShareMode: string;

	shouldUseNativeDialogForDialogName(dialogName: string): boolean;

	shouldUseSafariViewControllerForDialogName(dialogName: string): boolean;
}

interface FBSDKTokenCaching extends NSObjectProtocol {

	accessToken: FBSDKAccessToken;

	authenticationToken: FBSDKAuthenticationToken;
}
declare var FBSDKTokenCaching: {

	prototype: FBSDKTokenCaching;
};

declare class FBSDKURL extends NSObject {

	static URLWithInboundURLSourceApplication(url: NSURL, sourceApplication: string): FBSDKURL;

	static URLWithURL(url: NSURL): FBSDKURL;

	static alloc(): FBSDKURL; // inherited from NSObject

	static new(): FBSDKURL; // inherited from NSObject

	readonly appLinkData: NSDictionary<string, any>;

	readonly appLinkExtras: NSDictionary<string, any>;

	readonly appLinkReferer: FBSDKAppLink;

	readonly inputQueryParameters: NSDictionary<string, any>;

	readonly inputURL: NSURL;

	readonly isAutoAppLink: boolean;

	readonly targetQueryParameters: NSDictionary<string, any>;

	readonly targetURL: NSURL;
}

interface FBSDKURLOpener {

	openURLSenderHandler(url: NSURL, sender: FBSDKURLOpening, handler: (p1: boolean, p2: NSError) => void): void;
}
declare var FBSDKURLOpener: {

	prototype: FBSDKURLOpener;
};

interface FBSDKURLOpening extends NSObjectProtocol {

	applicationDidBecomeActive(application: UIApplication): void;

	applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

	canOpenURLForApplicationSourceApplicationAnnotation(url: NSURL, application: UIApplication, sourceApplication: string, annotation: any): boolean;

	isAuthenticationURL(url: NSURL): boolean;

	shouldStopPropagationOfURL?(url: NSURL): boolean;
}
declare var FBSDKURLOpening: {

	prototype: FBSDKURLOpening;
};

declare class FBSDKUserAgeRange extends NSObject implements NSCopying, NSObjectProtocol, NSSecureCoding {

	static ageRangeFromDictionary(dictionary: NSDictionary<string, number>): FBSDKUserAgeRange;

	static alloc(): FBSDKUserAgeRange; // inherited from NSObject

	static new(): FBSDKUserAgeRange; // inherited from NSObject

	readonly max: number;

	readonly min: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

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

declare class FBSDKUtility extends NSObject {

	static SHA256Hash(input: NSObject): string;

	static URLDecode(value: string): string;

	static URLEncode(value: string): string;

	static alloc(): FBSDKUtility; // inherited from NSObject

	static dictionaryWithQueryString(queryString: string): NSDictionary<string, string>;

	static getGraphDomainFromToken(): string;

	static new(): FBSDKUtility; // inherited from NSObject

	static queryStringWithDictionaryError(dictionary: NSDictionary<string, any>): string;

	static startGCDTimerWithIntervalBlock(interval: number, block: () => void): NSObject;

	static stopGCDTimer(timer: NSObject): void;

	static unversionedFacebookURLWithHostPrefixPathQueryParametersError(hostPrefix: string, path: string, queryParameters: NSDictionary<any, any>): NSURL;
}

declare class FBSDKWebDialog extends NSObject {

	static alloc(): FBSDKWebDialog; // inherited from NSObject

	static createAndShowParametersFrameDelegateWindowFinder(name: string, parameters: NSDictionary<any, any>, frame: CGRect, delegate: FBSDKWebDialogDelegate, windowFinder: FBSDKWindowFinding): FBSDKWebDialog;

	static dialogWithNameDelegate(name: string, delegate: FBSDKWebDialogDelegate): FBSDKWebDialog;

	static new(): FBSDKWebDialog; // inherited from NSObject

	static showWithNameParametersDelegate(name: string, parameters: NSDictionary<any, any>, delegate: FBSDKWebDialogDelegate): FBSDKWebDialog;

	shouldDeferVisibility: boolean;

	windowFinder: FBSDKWindowFinding;
}

interface FBSDKWebDialogDelegate extends NSObjectProtocol {

	webDialogDidCancel(webDialog: FBSDKWebDialog): void;

	webDialogDidCompleteWithResults(webDialog: FBSDKWebDialog, results: NSDictionary<any, any>): void;

	webDialogDidFailWithError(webDialog: FBSDKWebDialog, error: NSError): void;
}
declare var FBSDKWebDialogDelegate: {

	prototype: FBSDKWebDialogDelegate;
};

declare class FBSDKWebDialogView extends UIView {

	static alloc(): FBSDKWebDialogView; // inherited from NSObject

	static appearance(): FBSDKWebDialogView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKWebDialogView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKWebDialogView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKWebDialogView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKWebDialogView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKWebDialogView; // inherited from UIAppearance

	static configureWithWebViewProviderUrlOpener(provider: any, urlOpener: any): void;

	static new(): FBSDKWebDialogView; // inherited from NSObject

	delegate: FBSDKWebDialogViewDelegate;

	loadURL(URL: NSURL): void;

	stopLoading(): void;
}

interface FBSDKWebDialogViewDelegate extends NSObjectProtocol {

	webDialogViewDidCancel(webDialogView: FBSDKWebDialogView): void;

	webDialogViewDidCompleteWithResults(webDialogView: FBSDKWebDialogView, results: NSDictionary<any, any>): void;

	webDialogViewDidFailWithError(webDialogView: FBSDKWebDialogView, error: NSError): void;

	webDialogViewDidFinishLoad(webDialogView: FBSDKWebDialogView): void;
}
declare var FBSDKWebDialogViewDelegate: {

	prototype: FBSDKWebDialogViewDelegate;
};

declare class FBSDKWebViewAppLinkResolver extends NSObject implements FBSDKAppLinkResolving {

	static alloc(): FBSDKWebViewAppLinkResolver; // inherited from NSObject

	static new(): FBSDKWebViewAppLinkResolver; // inherited from NSObject

	static readonly sharedInstance: FBSDKWebViewAppLinkResolver;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	appLinkFromURLHandler(url: NSURL, handler: (p1: FBSDKAppLink, p2: NSError) => void): void;

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

interface FBSDKWindowFinding {

	findWindow(): UIWindow;
}
declare var FBSDKWindowFinding: {

	prototype: FBSDKWindowFinding;
};

declare function fb_randomString(numberOfBytes: number): string;

declare function fbsdkdfl_SLComposeViewControllerClass(): typeof NSObject;

declare function fbsdkdfl_SLServiceTypeFacebook(): string;
