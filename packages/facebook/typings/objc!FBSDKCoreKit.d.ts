declare class CoreUIApplication extends NSObject {
	static alloc(): CoreUIApplication; // inherited from NSObject

	static new(): CoreUIApplication; // inherited from NSObject

	static readonly shared: FBSDKInternalURLOpener;
}

declare var DefaultKeychainServicePrefix: string;

declare var FBLink_NSNotificationCenter_NotificationPosting: interop.Pointer | interop.Reference<any>;

declare var FBLink_NSProcessInfo_MacCatalystDetermining: interop.Pointer | interop.Reference<any>;

declare var FBLink_NSProcessInfo_OperatingSystemVersionComparing: interop.Pointer | interop.Reference<any>;

declare var FBLink_UIPasteboard_FBSDKPasteboard: interop.Pointer | interop.Reference<any>;

declare var FBLinkable_NSNotificationCenter_NotificationPosting: number;

declare var FBLinkable_NSProcessInfo_MacCatalystDetermining: number;

declare var FBLinkable_NSProcessInfo_OperatingSystemVersionComparing: number;

declare var FBLinkable_UIPasteboard_FBSDKPasteboard: number;

declare class FBSDKAEMManager extends NSObject implements FBSDKAutoSetup {
	static alloc(): FBSDKAEMManager; // inherited from NSObject

	static new(): FBSDKAEMManager; // inherited from NSObject

	static readonly shared: FBSDKAEMManager;

	configureWithSwizzlerAemReporterEventLoggerCrashHandlerFeatureCheckerAppEventsUtility(swizzler: typeof NSObject, aemReporter: typeof NSObject, eventLogger: FBSDKEventLogging, crashHandler: FBSDKCrashHandlerProtocol, featureChecker: FBSDKFeatureDisabling, appEventsUtility: FBSDKAppEventsUtilityProtocol): void;

	enableAutoSetup(proxyEnabled: boolean): void;

	logAutoSetupStatusSource(optin: boolean, source: string): void;
}

interface FBSDKAEMReporter {}
declare var FBSDKAEMReporter: {
	prototype: FBSDKAEMReporter;

	enable(): void;

	handle(url: NSURL): void;

	recordAndUpdateEventCurrencyValueParameters(event: string, currency: string, value: number, parameters: NSDictionary<string, any>): void;

	setAdvertiserRuleMatchInServerEnabled(isEnabled: boolean): void;

	setCatalogMatchingEnabled(isEnabled: boolean): void;

	setConversionFilteringEnabled(isEnabled: boolean): void;
};

interface FBSDKATEPublisherCreating {
	createPublisherWithAppID(appID: string): any;
}
declare var FBSDKATEPublisherCreating: {
	prototype: FBSDKATEPublisherCreating;
};

declare class FBSDKATEPublisherFactory extends NSObject implements FBSDKATEPublisherCreating {
	static alloc(): FBSDKATEPublisherFactory; // inherited from NSObject

	static new(): FBSDKATEPublisherFactory; // inherited from NSObject

	dataStore: FBSDKDataPersisting;

	deviceInformationProvider: FBSDKDeviceInformationProviding;

	graphRequestFactory: FBSDKGraphRequestFactoryProtocol;

	settings: FBSDKSettingsProtocol;

	constructor(o: { dataStore: FBSDKDataPersisting; graphRequestFactory: FBSDKGraphRequestFactoryProtocol; settings: FBSDKSettingsProtocol; deviceInformationProvider: FBSDKDeviceInformationProviding });

	createPublisherWithAppID(appID: string): any;

	initWithDataStoreGraphRequestFactorySettingsDeviceInformationProvider(dataStore: FBSDKDataPersisting, graphRequestFactory: FBSDKGraphRequestFactoryProtocol, settings: FBSDKSettingsProtocol, deviceInformationProvider: FBSDKDeviceInformationProviding): this;
}

declare class FBSDKAccessToken extends NSObject implements FBSDKAccessTokenProviding, FBSDKTokenStringProviding, NSCopying, NSObjectProtocol, NSSecureCoding {
	static alloc(): FBSDKAccessToken; // inherited from NSObject

	static configureWithTokenCacheGraphRequestConnectionFactoryGraphRequestPiggybackManagerErrorFactory(tokenCache: FBSDKTokenCaching, graphRequestConnectionFactory: FBSDKGraphRequestConnectionFactoryProtocol, graphRequestPiggybackManager: FBSDKGraphRequestPiggybackManaging, errorFactory: FBSDKErrorCreating): void;

	static new(): FBSDKAccessToken; // inherited from NSObject

	static refreshCurrentAccessTokenWithCompletion(completion: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void): void;

	readonly appID: string;

	readonly dataAccessExpirationDate: Date;

	readonly dataAccessExpired: boolean;

	readonly declinedPermissions: NSSet<string>;

	readonly expirationDate: Date;

	readonly expired: boolean;

	readonly expiredPermissions: NSSet<string>;

	readonly permissions: NSSet<string>;

	readonly refreshDate: Date;

	readonly tokenString: string;

	readonly userID: string;

	static readonly currentAccessTokenIsActive: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	static currentAccessToken: FBSDKAccessToken; // inherited from FBSDKAccessTokenProviding

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	static tokenCache: FBSDKTokenCaching; // inherited from FBSDKAccessTokenProviding

	static readonly tokenString: string; // inherited from FBSDKTokenStringProviding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { tokenString: string; permissions: NSArray<string> | string[]; declinedPermissions: NSArray<string> | string[]; expiredPermissions: NSArray<string> | string[]; appID: string; userID: string; expirationDate: Date; refreshDate: Date; dataAccessExpirationDate: Date });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	hasGranted(permission: string): boolean;

	initWithCoder(coder: NSCoder): this;

	initWithTokenStringPermissionsDeclinedPermissionsExpiredPermissionsAppIDUserIDExpirationDateRefreshDateDataAccessExpirationDate(tokenString: string, permissions: NSArray<string> | string[], declinedPermissions: NSArray<string> | string[], expiredPermissions: NSArray<string> | string[], appID: string, userID: string, expirationDate: Date, refreshDate: Date, dataAccessExpirationDate: Date): this;

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

interface FBSDKAccessTokenProviding {}
declare var FBSDKAccessTokenProviding: {
	prototype: FBSDKAccessTokenProviding;
};

interface FBSDKAdvertiserIDProviding {
	advertiserID: string;
}
declare var FBSDKAdvertiserIDProviding: {
	prototype: FBSDKAdvertiserIDProviding;
};

declare const enum FBSDKAdvertisingTrackingStatus {
	Allowed = 0,

	Disallowed = 1,

	Unspecified = 2,
}

interface FBSDKAppAvailabilityChecker {
	isFacebookAppInstalled: boolean;

	isMessengerAppInstalled: boolean;
}
declare var FBSDKAppAvailabilityChecker: {
	prototype: FBSDKAppAvailabilityChecker;
};

declare var FBSDKAppEventCity: string;

declare var FBSDKAppEventCountry: string;

declare var FBSDKAppEventDateOfBirth: string;

interface FBSDKAppEventDropDetermining {
	shouldDropAppEvents: boolean;
}
declare var FBSDKAppEventDropDetermining: {
	prototype: FBSDKAppEventDropDetermining;
};

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

declare var FBSDKAppEventNameBackgroundStatusAvailable: string;

declare var FBSDKAppEventNameBackgroundStatusDenied: string;

declare var FBSDKAppEventNameBackgroundStatusRestricted: string;

declare var FBSDKAppEventNameCompletedRegistration: string;

declare var FBSDKAppEventNameCompletedTutorial: string;

declare var FBSDKAppEventNameContact: string;

declare var FBSDKAppEventNameCustomizeProduct: string;

declare var FBSDKAppEventNameDonate: string;

declare var FBSDKAppEventNameFindLocation: string;

declare var FBSDKAppEventNameInitializeSDK: string;

declare var FBSDKAppEventNameInitiatedCheckout: string;

declare var FBSDKAppEventNamePurchaseFailed: string;

declare var FBSDKAppEventNamePurchaseRestored: string;

declare var FBSDKAppEventNamePurchased: string;

declare var FBSDKAppEventNameRated: string;

declare var FBSDKAppEventNameSDKSettingsChanged: string;

declare var FBSDKAppEventNameSchedule: string;

declare var FBSDKAppEventNameSearched: string;

declare var FBSDKAppEventNameSpentCredits: string;

declare var FBSDKAppEventNameStartTrial: string;

declare var FBSDKAppEventNameSubmitApplication: string;

declare var FBSDKAppEventNameSubscribe: string;

declare var FBSDKAppEventNameSubscribeFailed: string;

declare var FBSDKAppEventNameSubscribeInitiatedCheckout: string;

declare var FBSDKAppEventNameSubscribeRestore: string;

declare var FBSDKAppEventNameUnlockedAchievement: string;

declare var FBSDKAppEventNameViewedContent: string;

declare var FBSDKAppEventParameterNameAdType: string;

declare var FBSDKAppEventParameterNameConsumablesInPurchaseHistory: string;

declare var FBSDKAppEventParameterNameContent: string;

declare var FBSDKAppEventParameterNameContentID: string;

declare var FBSDKAppEventParameterNameContentType: string;

declare var FBSDKAppEventParameterNameCurrency: string;

declare var FBSDKAppEventParameterNameDescription: string;

declare var FBSDKAppEventParameterNameEventName: string;

declare var FBSDKAppEventParameterNameHasFreeTrial: string;

declare var FBSDKAppEventParameterNameIAPClientLibraryVersion: string;

declare var FBSDKAppEventParameterNameIAPReceiptData: string;

declare var FBSDKAppEventParameterNameIAPSDKLibraryVersions: string;

declare var FBSDKAppEventParameterNameImplicitlyLoggedPurchase: string;

declare var FBSDKAppEventParameterNameInAppPurchaseType: string;

declare var FBSDKAppEventParameterNameIsStartTrial: string;

declare var FBSDKAppEventParameterNameLevel: string;

declare var FBSDKAppEventParameterNameLogTime: string;

declare var FBSDKAppEventParameterNameMaxRatingValue: string;

declare var FBSDKAppEventParameterNameNumItems: string;

declare var FBSDKAppEventParameterNameOrderID: string;

declare var FBSDKAppEventParameterNameOriginalTransactionDate: string;

declare var FBSDKAppEventParameterNameOriginalTransactionID: string;

declare var FBSDKAppEventParameterNamePaymentInfoAvailable: string;

declare var FBSDKAppEventParameterNameProductClassification: string;

declare var FBSDKAppEventParameterNameProductTitle: string;

declare var FBSDKAppEventParameterNameRegistrationMethod: string;

declare var FBSDKAppEventParameterNameSearchString: string;

declare var FBSDKAppEventParameterNameSubscriptionPeriod: string;

declare var FBSDKAppEventParameterNameSuccess: string;

declare var FBSDKAppEventParameterNameTransactionDate: string;

declare var FBSDKAppEventParameterNameTransactionID: string;

declare var FBSDKAppEventParameterNameTrialPeriod: string;

declare var FBSDKAppEventParameterNameTrialPrice: string;

declare var FBSDKAppEventParameterNameValidationResult: string;

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

interface FBSDKAppEventParametersExtracting {
	activityParametersDictionaryForEventShouldAccessAdvertisingIDUserIDUserData(eventCategory: string, shouldAccessAdvertisingID: boolean, userID: string, userData: string): NSMutableDictionary<string, string>;
}
declare var FBSDKAppEventParametersExtracting: {
	prototype: FBSDKAppEventParametersExtracting;
};

declare var FBSDKAppEventPhone: string;

declare var FBSDKAppEventState: string;

declare var FBSDKAppEventZip: string;

declare class FBSDKAppEvents extends NSObject implements FBSDKAppEventsConfiguring, FBSDKApplicationActivating, FBSDKApplicationLifecycleObserving, FBSDKApplicationStateSetting, FBSDKEventLogging, FBSDKSourceApplicationTracking, FBSDKUserIDProviding {
	static alloc(): FBSDKAppEvents; // inherited from NSObject

	static new(): FBSDKAppEvents; // inherited from NSObject

	readonly anonymousID: string;

	flushBehavior: FBSDKAppEventsFlushBehavior;

	loggingOverrideAppID: string;

	static readonly shared: FBSDKAppEvents;

	userID: string; // inherited from FBSDKUserIDProviding

	activateApp(): void;

	augmentHybridWebView(webView: WKWebView): void;

	clearUserData(): void;

	clearUserDataForType(type: string): void;

	configureNonTVComponentsWithOnDeviceMLModelManagerMetadataIndexerSkAdNetworkReporterSkAdNetworkReporterV2CodelessIndexerSwizzlerAemReporter(modelManager: FBSDKEventProcessing, metadataIndexer: FBSDKMetadataIndexing, skAdNetworkReporter: FBSDKAppEventsReporter, skAdNetworkReporterV2: FBSDKAppEventsReporter, codelessIndexer: typeof NSObject, swizzler: typeof NSObject, aemReporter: typeof NSObject): void;

	configureWithGateKeeperManagerAppEventsConfigurationProviderServerConfigurationProviderGraphRequestFactoryFeatureCheckerPrimaryDataStoreLoggerSettingsPaymentObserverTimeSpentRecorderAppEventsStateStoreEventDeactivationParameterProcessorRestrictiveDataFilterParameterProcessorAtePublisherFactoryAppEventsStateProviderAdvertiserIDProviderUserDataStoreAppEventsUtilityInternalUtilityCapiReporterProtectedModeManagerBannedParamsManagerStdParamEnforcementManagerMacaRuleMatchingManagerBlocklistEventsManagerRedactedEventsManagerSensitiveParamsManagerTransactionObserverFailedTransactionLoggingFactoryIapDedupeProcessorIapTransactionCache(
		gateKeeperManager: typeof NSObject,
		appEventsConfigurationProvider: FBSDKAppEventsConfigurationProviding,
		serverConfigurationProvider: FBSDKServerConfigurationProviding,
		graphRequestFactory: FBSDKGraphRequestFactoryProtocol,
		featureChecker: FBSDKFeatureChecking,
		primaryDataStore: FBSDKDataPersisting,
		logger: typeof NSObject,
		settings: FBSDKSettingsProtocol,
		paymentObserver: FBSDKPaymentObserving,
		timeSpentRecorder: any,
		appEventsStateStore: FBSDKAppEventsStatePersisting,
		eventDeactivationParameterProcessor: FBSDKAppEventsParameterProcessing,
		restrictiveDataFilterParameterProcessor: FBSDKAppEventsParameterProcessing,
		atePublisherFactory: FBSDKATEPublisherCreating,
		appEventsStateProvider: FBSDKAppEventsStateProviding,
		advertiserIDProvider: FBSDKAdvertiserIDProviding,
		userDataStore: FBSDKUserDataPersisting,
		appEventsUtility: any,
		internalUtility: FBSDKInternalUtilityProtocol,
		capiReporter: FBSDKCAPIReporter,
		protectedModeManager: FBSDKAppEventsParameterProcessing,
		bannedParamsManager: FBSDKMACARuleMatching,
		stdParamEnforcementManager: FBSDKMACARuleMatching,
		macaRuleMatchingManager: FBSDKMACARuleMatching,
		blocklistEventsManager: FBSDKEventsProcessing,
		redactedEventsManager: FBSDKEventsProcessing,
		sensitiveParamsManager: FBSDKAppEventsParameterProcessing,
		transactionObserver: FBSDKTransactionObserving,
		failedTransactionLoggingFactory: FBSDKIAPFailedTransactionLoggingCreating,
		iapDedupeProcessor: FBSDKIAPDedupeProcessing,
		iapTransactionCache: FBSDKIAPTransactionCaching
	): void;

	doLogEventValueToSumParametersIsImplicitlyLoggedAccessTokenOperationalParameters(eventName: string, valueToSum: number, parameters: NSDictionary<string, any>, isImplicitlyLogged: boolean, accessToken: FBSDKAccessToken, operationalParameters: NSDictionary<string, NSDictionary<string, any>>): void;

	flush(): void;

	flushForReason(flushReason: FBSDKAppEventsFlushReason): void;

	getUserData(): string;

	logEvent(eventName: string): void;

	logEventParameters(eventName: string, parameters: NSDictionary<string, any>): void;

	logEventValueToSum(eventName: string, valueToSum: number): void;

	logEventValueToSumParameters(eventName: string, valueToSum: number, parameters: NSDictionary<string, any>): void;

	logEventValueToSumParametersAccessToken(eventName: string, valueToSum: number, parameters: NSDictionary<string, any>, accessToken: FBSDKAccessToken): void;

	/**
	 * @since 15.0
	 */
	logFailedStoreKit2Purchase(productID: string): void;

	logInternalEventIsImplicitlyLogged(eventName: string, isImplicitlyLogged: boolean): void;

	logInternalEventParametersIsImplicitlyLogged(eventName: string, parameters: NSDictionary<string, any>, isImplicitlyLogged: boolean): void;

	logInternalEventParametersIsImplicitlyLoggedAccessToken(eventName: string, parameters: NSDictionary<string, any>, isImplicitlyLogged: boolean, accessToken: FBSDKAccessToken): void;

	logInternalEventValueToSumIsImplicitlyLogged(eventName: string, valueToSum: number, isImplicitlyLogged: boolean): void;

	logProductItemAvailabilityConditionDescriptionImageLinkLinkTitlePriceAmountCurrencyGtinMpnBrandParameters(itemID: string, availability: FBSDKProductAvailability, condition: FBSDKProductCondition, description: string, imageLink: string, link: string, title: string, priceAmount: number, currency: string, gtin: string, mpn: string, brand: string, parameters: NSDictionary<string, any>): void;

	logPurchaseCurrency(purchaseAmount: number, currency: string): void;

	logPurchaseCurrencyParameters(purchaseAmount: number, currency: string, parameters: NSDictionary<string, any>): void;

	logPurchaseCurrencyParametersAccessToken(purchaseAmount: number, currency: string, parameters: NSDictionary<string, any>, accessToken: FBSDKAccessToken): void;

	logPushNotificationOpen(payload: NSDictionary<string, any>): void;

	logPushNotificationOpenAction(payload: NSDictionary<string, any>, action: string): void;

	registerAutoResetSourceApplication(): void;

	requestForCustomAudienceThirdPartyIDWithAccessToken(accessToken: FBSDKAccessToken): FBSDKGraphRequest;

	sendEventBindingsToUnity(): void;

	setApplicationState(state: UIApplicationState): void;

	setIsUnityInitialized(isUnityInitialized: boolean): void;

	setPushNotificationsDeviceToken(deviceToken: NSData): void;

	setPushNotificationsDeviceTokenString(deviceTokenString: string): void;

	setSourceApplicationIsFromAppLink(sourceApplication: string, isFromAppLink: boolean): void;

	setSourceApplicationOpenURL(sourceApplication: string, url: NSURL): void;

	setUserDataForType(data: string, type: string): void;

	setUserEmailFirstNameLastNamePhoneDateOfBirthGenderCityStateZipCountry(email: string, firstName: string, lastName: string, phone: string, dateOfBirth: string, gender: string, city: string, state: string, zip: string, country: string): void;

	startObservingApplicationLifecycleNotifications(): void;
}

declare class FBSDKAppEventsCAPIManager extends NSObject implements FBSDKCAPIReporter {
	static alloc(): FBSDKAppEventsCAPIManager; // inherited from NSObject

	static new(): FBSDKAppEventsCAPIManager; // inherited from NSObject

	static readonly shared: FBSDKAppEventsCAPIManager;

	configureWithFactorySettings(factory: FBSDKGraphRequestFactoryProtocol, settings: FBSDKSettingsProtocol): void;

	enable(): void;

	recordEvent(parameters: NSDictionary<string, any>): void;
}

declare class FBSDKAppEventsConfiguration extends NSObject implements FBSDKAppEventsConfigurationProtocol, NSCopying, NSObjectProtocol, NSSecureCoding {
	static alloc(): FBSDKAppEventsConfiguration; // inherited from NSObject

	static defaultConfiguration(): FBSDKAppEventsConfiguration;

	static new(): FBSDKAppEventsConfiguration; // inherited from NSObject

	readonly advertiserIDCollectionEnabled: boolean; // inherited from FBSDKAppEventsConfigurationProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly defaultATEStatus: FBSDKAdvertisingTrackingStatus; // inherited from FBSDKAppEventsConfigurationProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly eventCollectionEnabled: boolean; // inherited from FBSDKAppEventsConfigurationProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly iapManualAndAutoLogDedupWindow: number; // inherited from FBSDKAppEventsConfigurationProtocol

	readonly iapObservationTime: number; // inherited from FBSDKAppEventsConfigurationProtocol

	readonly iapProdDedupConfiguration: NSDictionary<string, NSArray<string>>; // inherited from FBSDKAppEventsConfigurationProtocol

	readonly iapTestDedupConfiguration: NSDictionary<string, NSArray<string>>; // inherited from FBSDKAppEventsConfigurationProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { JSON: NSDictionary<string, any> }); // inherited from FBSDKAppEventsConfigurationProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithJSON(dict: NSDictionary<string, any>): this;

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

declare class FBSDKAppEventsConfigurationManager extends NSObject implements FBSDKAppEventsConfigurationProviding {
	static alloc(): FBSDKAppEventsConfigurationManager; // inherited from NSObject

	static new(): FBSDKAppEventsConfigurationManager; // inherited from NSObject

	static readonly shared: FBSDKAppEventsConfigurationManager;

	readonly cachedAppEventsConfiguration: FBSDKAppEventsConfigurationProtocol; // inherited from FBSDKAppEventsConfigurationProviding

	configureWithStoreSettingsGraphRequestFactoryGraphRequestConnectionFactory(store: FBSDKDataPersisting, settings: FBSDKSettingsProtocol, graphRequestFactory: FBSDKGraphRequestFactoryProtocol, graphRequestConnectionFactory: FBSDKGraphRequestConnectionFactoryProtocol): void;

	loadAppEventsConfigurationWithBlock(block: () => void): void;
}

interface FBSDKAppEventsConfigurationProtocol {
	advertiserIDCollectionEnabled: boolean;

	defaultATEStatus: FBSDKAdvertisingTrackingStatus;

	eventCollectionEnabled: boolean;

	iapManualAndAutoLogDedupWindow: number;

	iapObservationTime: number;

	iapProdDedupConfiguration: NSDictionary<string, NSArray<string>>;

	iapTestDedupConfiguration: NSDictionary<string, NSArray<string>>;

	initWithJSON?(dict: NSDictionary<string, any>): FBSDKAppEventsConfigurationProtocol;
}
declare var FBSDKAppEventsConfigurationProtocol: {
	prototype: FBSDKAppEventsConfigurationProtocol;

	defaultConfiguration(): FBSDKAppEventsConfigurationProtocol;
};

interface FBSDKAppEventsConfigurationProviding {
	cachedAppEventsConfiguration: FBSDKAppEventsConfigurationProtocol;

	loadAppEventsConfigurationWithBlock(block: () => void): void;
}
declare var FBSDKAppEventsConfigurationProviding: {
	prototype: FBSDKAppEventsConfigurationProviding;
};

interface FBSDKAppEventsConfiguring {
	configureNonTVComponentsWithOnDeviceMLModelManagerMetadataIndexerSkAdNetworkReporterSkAdNetworkReporterV2CodelessIndexerSwizzlerAemReporter(modelManager: FBSDKEventProcessing, metadataIndexer: FBSDKMetadataIndexing, skAdNetworkReporter: FBSDKAppEventsReporter, skAdNetworkReporterV2: FBSDKAppEventsReporter, codelessIndexer: typeof NSObject, swizzler: typeof NSObject, aemReporter: typeof NSObject): void;

	configureWithGateKeeperManagerAppEventsConfigurationProviderServerConfigurationProviderGraphRequestFactoryFeatureCheckerPrimaryDataStoreLoggerSettingsPaymentObserverTimeSpentRecorderAppEventsStateStoreEventDeactivationParameterProcessorRestrictiveDataFilterParameterProcessorAtePublisherFactoryAppEventsStateProviderAdvertiserIDProviderUserDataStoreAppEventsUtilityInternalUtilityCapiReporterProtectedModeManagerBannedParamsManagerStdParamEnforcementManagerMacaRuleMatchingManagerBlocklistEventsManagerRedactedEventsManagerSensitiveParamsManagerTransactionObserverFailedTransactionLoggingFactoryIapDedupeProcessorIapTransactionCache(
		gateKeeperManager: typeof NSObject,
		appEventsConfigurationProvider: FBSDKAppEventsConfigurationProviding,
		serverConfigurationProvider: FBSDKServerConfigurationProviding,
		graphRequestFactory: FBSDKGraphRequestFactoryProtocol,
		featureChecker: FBSDKFeatureChecking,
		primaryDataStore: FBSDKDataPersisting,
		logger: typeof NSObject,
		settings: FBSDKSettingsProtocol,
		paymentObserver: FBSDKPaymentObserving,
		timeSpentRecorder: any,
		appEventsStateStore: FBSDKAppEventsStatePersisting,
		eventDeactivationParameterProcessor: FBSDKAppEventsParameterProcessing,
		restrictiveDataFilterParameterProcessor: FBSDKAppEventsParameterProcessing,
		atePublisherFactory: FBSDKATEPublisherCreating,
		appEventsStateProvider: FBSDKAppEventsStateProviding,
		advertiserIDProvider: FBSDKAdvertiserIDProviding,
		userDataStore: FBSDKUserDataPersisting,
		appEventsUtility: any,
		internalUtility: FBSDKInternalUtilityProtocol,
		capiReporter: FBSDKCAPIReporter,
		protectedModeManager: FBSDKAppEventsParameterProcessing,
		bannedParamsManager: FBSDKMACARuleMatching,
		stdParamEnforcementManager: FBSDKMACARuleMatching,
		macaRuleMatchingManager: FBSDKMACARuleMatching,
		blocklistEventsManager: FBSDKEventsProcessing,
		redactedEventsManager: FBSDKEventsProcessing,
		sensitiveParamsManager: FBSDKAppEventsParameterProcessing,
		transactionObserver: FBSDKTransactionObserving,
		failedTransactionLoggingFactory: FBSDKIAPFailedTransactionLoggingCreating,
		iapDedupeProcessor: FBSDKIAPDedupeProcessing,
		iapTransactionCache: FBSDKIAPTransactionCaching
	): void;
}
declare var FBSDKAppEventsConfiguring: {
	prototype: FBSDKAppEventsConfiguring;
};

declare class FBSDKAppEventsDeviceInfo extends NSObject implements FBSDKDeviceInformationProviding {
	static alloc(): FBSDKAppEventsDeviceInfo; // inherited from NSObject

	static new(): FBSDKAppEventsDeviceInfo; // inherited from NSObject

	readonly settings: FBSDKSettingsProtocol;

	static readonly shared: FBSDKAppEventsDeviceInfo;

	bundleIdentifier: string; // inherited from FBSDKDeviceInformationProviding

	carrierName: string; // inherited from FBSDKDeviceInformationProviding

	coreCount: number; // inherited from FBSDKDeviceInformationProviding

	density: number; // inherited from FBSDKDeviceInformationProviding

	readonly encodedDeviceInfo: string; // inherited from FBSDKDeviceInformationProviding

	height: number; // inherited from FBSDKDeviceInformationProviding

	language: string; // inherited from FBSDKDeviceInformationProviding

	longVersion: string; // inherited from FBSDKDeviceInformationProviding

	machine: string; // inherited from FBSDKDeviceInformationProviding

	shortVersion: string; // inherited from FBSDKDeviceInformationProviding

	readonly storageKey: string; // inherited from FBSDKDeviceInformationProviding

	sysVersion: string; // inherited from FBSDKDeviceInformationProviding

	timeZoneAbbrev: string; // inherited from FBSDKDeviceInformationProviding

	timeZoneName: string; // inherited from FBSDKDeviceInformationProviding

	width: number; // inherited from FBSDKDeviceInformationProviding

	configureWithSettings(settings: FBSDKSettingsProtocol): void;

	resetDependencies(): void;
}

declare const enum FBSDKAppEventsFlushBehavior {
	Auto = 0,

	ExplicitOnly = 1,
}

declare const enum FBSDKAppEventsFlushReason {
	Explicit = 0,

	Timer = 1,

	SessionChange = 2,

	PersistedEvents = 3,

	EventThreshold = 4,

	EagerlyFlushingEvent = 5,
}

declare var FBSDKAppEventsLoggingResultNotification: string;

declare var FBSDKAppEventsOverrideAppIDBundleKey: string;

interface FBSDKAppEventsParameterProcessing {
	enable(): void;

	processParametersEventName(parameters: NSDictionary<string, any>, eventName: string): NSDictionary<string, any>;
}
declare var FBSDKAppEventsParameterProcessing: {
	prototype: FBSDKAppEventsParameterProcessing;
};

interface FBSDKAppEventsReporter {
	enable(): void;

	recordAndUpdateEventCurrencyValueParameters(event: string, currency: string, value: number, parameters: NSDictionary<string, any>): void;
}
declare var FBSDKAppEventsReporter: {
	prototype: FBSDKAppEventsReporter;
};

declare class FBSDKAppEventsState extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): FBSDKAppEventsState; // inherited from NSObject

	static new(): FBSDKAppEventsState; // inherited from NSObject

	readonly allEventsImplicit: boolean;

	readonly appID: string;

	readonly events: NSArray<NSDictionary<string, any>>;

	readonly numSkipped: number;

	readonly tokenString: string;

	static eventProcessors: NSArray<FBSDKEventsProcessing>;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { token: string; appID: string });

	JSONStringForEventsAndOperationalParametersIncludingImplicitEvents(includeImplicitEvents: boolean): NSDictionary<string, string>;

	addEventIsImplicitWithOperationalParameters(eventDictionary: NSDictionary<string, any>, isImplicit: boolean, operationalParameters: NSDictionary<string, NSDictionary<string, any>>): void;

	addEventsFromAppEventState(appEventsState: FBSDKAppEventsState): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	extractReceiptData(): string;

	initWithCoder(coder: NSCoder): this;

	initWithTokenAppID(tokenString: string, appID: string): this;

	isCompatibleWithAppEventsState(appEventsState: FBSDKAppEventsState): boolean;

	isCompatibleWithTokenStringAppID(tokenString: string, appID: string): boolean;
}

declare class FBSDKAppEventsStateManager extends NSObject implements FBSDKAppEventsStatePersisting {
	static alloc(): FBSDKAppEventsStateManager; // inherited from NSObject

	static new(): FBSDKAppEventsStateManager; // inherited from NSObject

	static readonly shared: FBSDKAppEventsStateManager;

	clearPersistedAppEventsStates(): void;

	persistAppEventsData(appEventsState: FBSDKAppEventsState): void;

	retrievePersistedAppEventsStates(): NSArray<any>;
}

interface FBSDKAppEventsStatePersisting {
	clearPersistedAppEventsStates(): void;

	persistAppEventsData(appEventsState: FBSDKAppEventsState): void;

	retrievePersistedAppEventsStates(): NSArray<any>;
}
declare var FBSDKAppEventsStatePersisting: {
	prototype: FBSDKAppEventsStatePersisting;
};

interface FBSDKAppEventsStateProviding {
	createStateWithTokenAppID(tokenString: string, appID: string): FBSDKAppEventsState;
}
declare var FBSDKAppEventsStateProviding: {
	prototype: FBSDKAppEventsStateProviding;
};

declare class FBSDKAppEventsUtility extends NSObject implements FBSDKAdvertiserIDProviding, FBSDKAppEventDropDetermining, FBSDKAppEventParametersExtracting, FBSDKAppEventsUtilityProtocol, FBSDKLoggingNotifying {
	static alloc(): FBSDKAppEventsUtility; // inherited from NSObject

	static new(): FBSDKAppEventsUtility; // inherited from NSObject

	appEventsConfigurationProvider: FBSDKAppEventsConfigurationProviding;

	dataStore: FBSDKDataPersisting;

	deviceInformationProvider: FBSDKDeviceInformationProviding;

	errorFactory: FBSDKErrorCreating;

	internalUtility: FBSDKInternalUtilityProtocol;

	readonly isDebugBuild: boolean;

	settings: FBSDKSettingsProtocol;

	static shared: FBSDKAppEventsUtility;

	readonly advertiserID: string; // inherited from FBSDKAdvertiserIDProviding

	readonly shouldDropAppEvents: boolean; // inherited from FBSDKAppEventDropDetermining

	readonly unixTimeNow: number; // inherited from FBSDKAppEventsUtilityProtocol

	activityParametersDictionaryForEventShouldAccessAdvertisingIDUserIDUserData(eventCategory: string, shouldAccessAdvertisingID: boolean, userID: string, userData: string): NSMutableDictionary<string, string>;

	configureWithAppEventsConfigurationProviderDeviceInformationProviderSettingsInternalUtilityErrorFactoryDataStore(appEventsConfigurationProvider: FBSDKAppEventsConfigurationProviding, deviceInformationProvider: FBSDKDeviceInformationProviding, settings: FBSDKSettingsProtocol, internalUtility: FBSDKInternalUtilityProtocol, errorFactory: FBSDKErrorCreating, dataStore: FBSDKDataPersisting): void;

	convertToUnixTime(date: Date): number;

	ensureOnMainThreadClassName(methodName: string, className: string): void;

	flushReasonToString(flushReason: FBSDKAppEventsFlushReason): string;

	getCampaignIDs(): string;

	isSensitiveUserData(text: string): boolean;

	isStandardEvent(event: string): boolean;

	logAndNotify(message: string): void;

	logAndNotifyAllowLogAsDeveloperError(message: string, allowLogAsDeveloperError: boolean): void;

	reset(): void;

	saveCampaignIDs(url: NSURL): void;

	tokenStringToUseForLoggingOverrideAppID(token: FBSDKAccessToken, loggingOverrideAppID: string): string;

	validateIdentifier(identifier: string): boolean;
}

interface FBSDKAppEventsUtilityProtocol {
	unixTimeNow: number;

	convertToUnixTime(date: Date): number;

	ensureOnMainThreadClassName(methodName: string, className: string): void;

	flushReasonToString(flushReason: FBSDKAppEventsFlushReason): string;

	getCampaignIDs(): string;

	saveCampaignIDs(url: NSURL): void;

	tokenStringToUseForLoggingOverrideAppID(token: FBSDKAccessToken, loggingOverrideAppID: string): string;

	validateIdentifier(identifier: string): boolean;
}
declare var FBSDKAppEventsUtilityProtocol: {
	prototype: FBSDKAppEventsUtilityProtocol;
};

declare class FBSDKAppLink extends NSObject implements FBSDKAppLinkProtocol {
	static alloc(): FBSDKAppLink; // inherited from NSObject

	static appLinkWithSourceURLTargetsWebURL(sourceURL: NSURL, targets: NSArray<FBSDKAppLinkTargetProtocol> | FBSDKAppLinkTargetProtocol[], webURL: NSURL): FBSDKAppLinkProtocol;

	static new(): FBSDKAppLink; // inherited from NSObject

	backToReferrer: boolean;

	readonly sourceURL: NSURL; // inherited from FBSDKAppLinkProtocol

	readonly targets: NSArray<FBSDKAppLinkTargetProtocol>; // inherited from FBSDKAppLinkProtocol

	readonly webURL: NSURL; // inherited from FBSDKAppLinkProtocol

	constructor(o: { sourceURL: NSURL; targets: NSArray<FBSDKAppLinkTargetProtocol> | FBSDKAppLinkTargetProtocol[]; webURL: NSURL });

	constructor(o: { sourceURL: NSURL; targets: NSArray<FBSDKAppLinkTargetProtocol> | FBSDKAppLinkTargetProtocol[]; webURL: NSURL; isBackToReferrer: boolean });

	initWithSourceURLTargetsWebURL(sourceURL: NSURL, targets: NSArray<FBSDKAppLinkTargetProtocol> | FBSDKAppLinkTargetProtocol[], webURL: NSURL): this;

	initWithSourceURLTargetsWebURLIsBackToReferrer(sourceURL: NSURL, targets: NSArray<FBSDKAppLinkTargetProtocol> | FBSDKAppLinkTargetProtocol[], webURL: NSURL, isBackToReferrer: boolean): this;
}

interface FBSDKAppLinkCreating {
	createAppLinkWithSourceURLTargetsWebURLIsBackToReferrer(sourceURL: NSURL, targets: NSArray<FBSDKAppLinkTargetProtocol> | FBSDKAppLinkTargetProtocol[], webURL: NSURL, isBackToReferrer: boolean): FBSDKAppLinkProtocol;
}
declare var FBSDKAppLinkCreating: {
	prototype: FBSDKAppLinkCreating;
};

declare var FBSDKAppLinkDataParameterName: string;

interface FBSDKAppLinkEventPosting {
	postNotificationForEventNameArgs(name: string, args: NSDictionary<string, any>): void;
}
declare var FBSDKAppLinkEventPosting: {
	prototype: FBSDKAppLinkEventPosting;
};

declare var FBSDKAppLinkExtrasKeyName: string;

declare var FBSDKAppLinkNavigateBackToReferrerEventName: string;

declare var FBSDKAppLinkNavigateInEventName: string;

declare var FBSDKAppLinkNavigateOutEventName: string;

declare class FBSDKAppLinkNavigation extends NSObject {
	static alloc(): FBSDKAppLinkNavigation; // inherited from NSObject

	static callbackAppLinkDataForAppWithNameUrl(appName: string, url: string): NSDictionary<string, NSDictionary<string, string>>;

	static navigateToAppLinkHandler(appLink: FBSDKAppLink, handler: (p1: FBSDKAppLinkNavigationType, p2: NSError) => void): void;

	static navigateToURLHandler(destination: NSURL, handler: (p1: FBSDKAppLinkNavigationType, p2: NSError) => void): void;

	static navigateToURLResolverHandler(destination: NSURL, resolver: FBSDKAppLinkResolving, handler: (p1: FBSDKAppLinkNavigationType, p2: NSError) => void): void;

	static navigationTypeForLink(appLink: FBSDKAppLink): FBSDKAppLinkNavigationType;

	static navigationWithAppLinkExtrasAppLinkDataSettings(appLink: FBSDKAppLink, extras: NSDictionary<string, any>, appLinkData: NSDictionary<string, any>, settings: FBSDKSettingsProtocol): FBSDKAppLinkNavigation;

	static new(): FBSDKAppLinkNavigation; // inherited from NSObject

	static resolveAppLinkHandler(destination: NSURL, handler: (p1: FBSDKAppLink, p2: NSError) => void): void;

	static resolveAppLinkResolverHandler(destination: NSURL, resolver: FBSDKAppLinkResolving, handler: (p1: FBSDKAppLink, p2: NSError) => void): void;

	static setDefaultResolver(newValue: FBSDKAppLinkResolving): void;

	readonly appLink: FBSDKAppLink;

	readonly appLinkData: NSDictionary<string, any>;

	readonly extras: NSDictionary<string, any>;

	readonly navigationType: FBSDKAppLinkNavigationType;

	static defaultResolver: FBSDKAppLinkResolving;

	constructor(o: { appLink: FBSDKAppLink; extras: NSDictionary<string, any>; appLinkData: NSDictionary<string, any> });

	constructor(o: { appLink: FBSDKAppLink; extras: NSDictionary<string, any>; appLinkData: NSDictionary<string, any>; settings: FBSDKSettingsProtocol });

	initWithAppLinkExtrasAppLinkData(appLink: FBSDKAppLink, extras: NSDictionary<string, any>, appLinkData: NSDictionary<string, any>): this;

	initWithAppLinkExtrasAppLinkDataSettings(appLink: FBSDKAppLink, extras: NSDictionary<string, any>, appLinkData: NSDictionary<string, any>, settings: FBSDKSettingsProtocol): this;

	navigate(handler: (p1: FBSDKAppLinkNavigationType, p2: NSError) => void): void;
}

declare const enum FBSDKAppLinkNavigationType {
	Failure = 0,

	Browser = 1,

	App = 2,
}

declare var FBSDKAppLinkParseEventName: string;

interface FBSDKAppLinkProtocol {
	backToReferrer: boolean;

	sourceURL: NSURL;

	targets: NSArray<FBSDKAppLinkTargetProtocol>;

	webURL: NSURL;
}
declare var FBSDKAppLinkProtocol: {
	prototype: FBSDKAppLinkProtocol;
};

declare var FBSDKAppLinkRefererAppLink: string;

declare var FBSDKAppLinkRefererAppName: string;

declare var FBSDKAppLinkRefererUrl: string;

declare class FBSDKAppLinkResolver extends NSObject implements FBSDKAppLinkResolving {
	static alloc(): FBSDKAppLinkResolver; // inherited from NSObject

	static new(): FBSDKAppLinkResolver; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	appLinkFromURLHandler(url: NSURL, handler: (p1: FBSDKAppLink, p2: NSError) => void): void;

	appLinksFromHandler(urls: NSArray<NSURL> | NSURL[], handler: (p1: NSDictionary<NSURL, FBSDKAppLink>, p2: NSError) => void): void;

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

interface FBSDKAppLinkResolverRequestBuilding {
	getIdiomSpecificField(): string;

	requestForURLs(urls: NSArray<NSURL> | NSURL[]): FBSDKGraphRequestProtocol;
}
declare var FBSDKAppLinkResolverRequestBuilding: {
	prototype: FBSDKAppLinkResolverRequestBuilding;
};

interface FBSDKAppLinkResolving extends NSObjectProtocol {
	appLinkFromURLHandler(url: NSURL, handler: (p1: FBSDKAppLink, p2: NSError) => void): void;
}
declare var FBSDKAppLinkResolving: {
	prototype: FBSDKAppLinkResolving;
};

declare class FBSDKAppLinkTarget extends NSObject implements FBSDKAppLinkTargetProtocol {
	static alloc(): FBSDKAppLinkTarget; // inherited from NSObject

	static appLinkTargetWithURLAppStoreIdAppName(url: NSURL, appStoreId: string, appName: string): FBSDKAppLinkTarget;

	static new(): FBSDKAppLinkTarget; // inherited from NSObject

	readonly URL: NSURL; // inherited from FBSDKAppLinkTargetProtocol

	readonly appName: string; // inherited from FBSDKAppLinkTargetProtocol

	readonly appStoreId: string; // inherited from FBSDKAppLinkTargetProtocol

	constructor(o: { URL: NSURL; appStoreId: string; appName: string });

	initWithURLAppStoreIdAppName(url: NSURL, appStoreId: string, appName: string): this;
}

interface FBSDKAppLinkTargetCreating {
	createAppLinkTargetWithURLAppStoreIdAppName(url: NSURL, appStoreId: string, appName: string): FBSDKAppLinkTargetProtocol;
}
declare var FBSDKAppLinkTargetCreating: {
	prototype: FBSDKAppLinkTargetCreating;
};

declare var FBSDKAppLinkTargetKeyName: string;

interface FBSDKAppLinkTargetProtocol {
	URL: NSURL;

	appName: string;

	appStoreId: string;
}
declare var FBSDKAppLinkTargetProtocol: {
	prototype: FBSDKAppLinkTargetProtocol;

	appLinkTargetWithURLAppStoreIdAppName(url: NSURL, appStoreId: string, appName: string): FBSDKAppLinkTargetProtocol;
};

interface FBSDKAppLinkURL {
	appLinkExtras: NSDictionary<string, any>;
}
declare var FBSDKAppLinkURL: {
	prototype: FBSDKAppLinkURL;
};

interface FBSDKAppLinkURLCreating {
	createAppLinkURLWithURL(url: NSURL): FBSDKAppLinkURL;
}
declare var FBSDKAppLinkURLCreating: {
	prototype: FBSDKAppLinkURLCreating;
};

declare var FBSDKAppLinkUserAgentKeyName: string;

declare class FBSDKAppLinkUtility extends NSObject {
	static alloc(): FBSDKAppLinkUtility; // inherited from NSObject

	static appInvitePromotionCodeFromURL(url: NSURL): string;

	static configureWithGraphRequestFactoryInfoDictionaryProviderSettingsAppEventsConfigurationProviderAdvertiserIDProviderAppEventsDropDeterminerAppEventParametersExtractorAppLinkURLFactoryUserIDProviderUserDataStore(
		graphRequestFactory: FBSDKGraphRequestFactoryProtocol,
		infoDictionaryProvider: FBSDKInfoDictionaryProviding,
		settings: FBSDKSettingsProtocol,
		appEventsConfigurationProvider: FBSDKAppEventsConfigurationProviding,
		advertiserIDProvider: FBSDKAdvertiserIDProviding,
		appEventsDropDeterminer: FBSDKAppEventDropDetermining,
		appEventParametersExtractor: FBSDKAppEventParametersExtracting,
		appLinkURLFactory: FBSDKAppLinkURLCreating,
		userIDProvider: FBSDKUserIDProviding,
		userDataStore: FBSDKUserDataPersisting
	): void;

	static fetchDeferredAppLink(handler: (p1: NSURL, p2: NSError) => void): void;

	static isMatchURLScheme(scheme: string): boolean;

	static new(): FBSDKAppLinkUtility; // inherited from NSObject
}

declare var FBSDKAppLinkVersion: string;

declare var FBSDKAppLinkVersionKeyName: string;

declare var FBSDKAppOperationalDataTypeIAPParameters: string;

interface FBSDKAppStoreReceiptProviding {
	appStoreReceiptURL: NSURL;
}
declare var FBSDKAppStoreReceiptProviding: {
	prototype: FBSDKAppStoreReceiptProviding;
};

interface FBSDKAppURLSchemeProviding {
	appURLScheme: string;

	validateURLSchemes(): void;
}
declare var FBSDKAppURLSchemeProviding: {
	prototype: FBSDKAppURLSchemeProviding;
};

interface FBSDKApplicationActivating {
	activateApp(): void;
}
declare var FBSDKApplicationActivating: {
	prototype: FBSDKApplicationActivating;
};

declare class FBSDKApplicationDelegate extends NSObject {
	static alloc(): FBSDKApplicationDelegate; // inherited from NSObject

	static new(): FBSDKApplicationDelegate; // inherited from NSObject

	static readonly sharedInstance: FBSDKApplicationDelegate;

	addObserver(observer: FBSDKApplicationObserving): void;

	applicationContinueUserActivity(application: UIApplication, userActivity: NSUserActivity): boolean;

	applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

	applicationOpenURLOptions(application: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

	initializeSDK(): void;

	removeObserver(observer: FBSDKApplicationObserving): void;
}

declare var FBSDKApplicationDidBecomeActiveNotification: string;

interface FBSDKApplicationLifecycleObserving {
	startObservingApplicationLifecycleNotifications(): void;
}
declare var FBSDKApplicationLifecycleObserving: {
	prototype: FBSDKApplicationLifecycleObserving;
};

interface FBSDKApplicationObserving {
	applicationDidBecomeActive?(application: UIApplication): void;

	applicationDidEnterBackground?(application: UIApplication): void;

	applicationDidFinishLaunchingWithOptions?(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

	applicationOpenURLSourceApplicationAnnotation?(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

	applicationWillResignActive?(application: UIApplication): void;
}
declare var FBSDKApplicationObserving: {
	prototype: FBSDKApplicationObserving;
};

interface FBSDKApplicationStateSetting {
	setApplicationState(state: UIApplicationState): void;
}
declare var FBSDKApplicationStateSetting: {
	prototype: FBSDKApplicationStateSetting;
};

declare class FBSDKAuthenticationStatusUtility extends NSObject {
	static alloc(): FBSDKAuthenticationStatusUtility; // inherited from NSObject

	static checkAuthenticationStatus(): void;

	static configureWithProfileSetterSessionDataTaskProviderAccessTokenWalletAuthenticationTokenWallet(profileSetter: typeof NSObject, sessionDataTaskProvider: FBSDKURLSessionProviding, accessTokenWallet: typeof NSObject, authenticationWallet: typeof NSObject): void;

	static new(): FBSDKAuthenticationStatusUtility; // inherited from NSObject

	static resetClassDependencies(): void;

	static accessTokenWallet: typeof NSObject;

	static authenticationTokenWallet: typeof NSObject;

	static profileSetter: typeof NSObject;

	static sessionDataTaskProvider: FBSDKURLSessionProviding;
}

declare class FBSDKAuthenticationToken extends NSObject implements FBSDKAuthenticationTokenProviding, NSCopying, NSObjectProtocol, NSSecureCoding {
	static alloc(): FBSDKAuthenticationToken; // inherited from NSObject

	static new(): FBSDKAuthenticationToken; // inherited from NSObject

	static resetCurrentAuthenticationTokenCache(): void;

	readonly graphDomain: string;

	readonly nonce: string;

	readonly tokenString: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	static currentAuthenticationToken: FBSDKAuthenticationToken; // inherited from FBSDKAuthenticationTokenProviding

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	static tokenCache: FBSDKTokenCaching; // inherited from FBSDKAuthenticationTokenProviding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { tokenString: string; nonce: string });

	constructor(o: { tokenString: string; nonce: string; graphDomain: string });

	claims(): FBSDKAuthenticationTokenClaims;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithTokenStringNonce(tokenString: string, nonce: string): this;

	initWithTokenStringNonceGraphDomain(tokenString: string, nonce: string, graphDomain: string): this;

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

	constructor(o: { encodedClaims: string; nonce: string });

	initWithEncodedClaimsNonce(encodedClaims: string, expectedNonce: string): this;
}

interface FBSDKAuthenticationTokenProviding {}
declare var FBSDKAuthenticationTokenProviding: {
	prototype: FBSDKAuthenticationTokenProviding;
};

interface FBSDKAutoSetup {
	configureWithSwizzlerAemReporterEventLoggerCrashHandlerFeatureCheckerAppEventsUtility(swizzler: typeof NSObject, aemReporter: typeof NSObject, eventLogger: FBSDKEventLogging, crashHandler: FBSDKCrashHandlerProtocol, featureChecker: FBSDKFeatureDisabling, appEventsUtility: FBSDKAppEventsUtilityProtocol): void;

	enableAutoSetup(proxyEnabled: boolean): void;

	logAutoSetupStatusSource(optin: boolean, source: string): void;
}
declare var FBSDKAutoSetup: {
	prototype: FBSDKAutoSetup;
};

declare var FBSDKBridgeAPIAppIDKey: string;

interface FBSDKBridgeAPIProtocol extends NSObjectProtocol {
	requestURLWithActionIDSchemeMethodNameParametersError(actionID: string, scheme: string, methodName: string, parameters: NSDictionary<string, any>): NSURL;

	responseParametersForActionIDQueryParametersCancelledError(actionID: string, queryParameters: NSDictionary<string, any>, cancelledRef: interop.Pointer | interop.Reference<boolean>): NSDictionary<string, any>;
}
declare var FBSDKBridgeAPIProtocol: {
	prototype: FBSDKBridgeAPIProtocol;
};

declare class FBSDKBridgeAPIProtocolNativeV1 extends NSObject implements FBSDKBridgeAPIProtocol {
	static alloc(): FBSDKBridgeAPIProtocolNativeV1; // inherited from NSObject

	static new(): FBSDKBridgeAPIProtocolNativeV1; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { appScheme: string });

	constructor(o: { appScheme: string; pasteboard: FBSDKPasteboard; dataLengthThreshold: number; includeAppIcon: boolean });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithAppScheme(appScheme: string): this;

	initWithAppSchemePasteboardDataLengthThresholdIncludeAppIcon(appScheme: string, pasteboard: FBSDKPasteboard, dataLengthThreshold: number, shouldIncludeAppIcon: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	requestURLWithActionIDSchemeMethodNameParametersError(actionID: string, scheme: string, methodName: string, parameters: NSDictionary<string, any>): NSURL;

	respondsToSelector(aSelector: string): boolean;

	responseParametersForActionIDQueryParametersCancelledError(actionID: string, queryParameters: NSDictionary<string, any>, cancelledRef: interop.Pointer | interop.Reference<boolean>): NSDictionary<string, any>;

	retainCount(): number;

	self(): this;
}

declare const enum FBSDKBridgeAPIProtocolType {
	Native = 0,

	Web = 1,
}

declare class FBSDKBridgeAPIRequest extends NSObject implements FBSDKBridgeAPIRequestProtocol, NSCopying {
	static alloc(): FBSDKBridgeAPIRequest; // inherited from NSObject

	static bridgeAPIRequestWithProtocolTypeSchemeMethodNameParametersUserInfo(protocolType: FBSDKBridgeAPIProtocolType, scheme: string, methodName: string, parameters: NSDictionary<string, any>, userInfo: NSDictionary<string, any>): FBSDKBridgeAPIRequest;

	static configureWithInternalURLOpenerInternalUtilitySettings(internalURLOpener: FBSDKInternalURLOpener, internalUtility: FBSDKInternalUtilityProtocol, settings: FBSDKSettingsProtocol): void;

	static new(): FBSDKBridgeAPIRequest; // inherited from NSObject

	readonly parameters: NSDictionary<string, any>;

	readonly userInfo: NSDictionary<string, any>;

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

	readonly; // inherited from NSObjectProtocol

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

interface FBSDKBridgeAPIRequestCreating {
	bridgeAPIRequestWithProtocolTypeSchemeMethodNameParametersUserInfo(protocolType: FBSDKBridgeAPIProtocolType, scheme: string, methodName: string, parameters: NSDictionary<string, any>, userInfo: NSDictionary<string, any>): FBSDKBridgeAPIRequestProtocol;
}
declare var FBSDKBridgeAPIRequestCreating: {
	prototype: FBSDKBridgeAPIRequestCreating;
};

declare class FBSDKBridgeAPIRequestFactory extends NSObject implements FBSDKBridgeAPIRequestCreating {
	static alloc(): FBSDKBridgeAPIRequestFactory; // inherited from NSObject

	static new(): FBSDKBridgeAPIRequestFactory; // inherited from NSObject

	bridgeAPIRequestWithProtocolTypeSchemeMethodNameParametersUserInfo(protocolType: FBSDKBridgeAPIProtocolType, scheme: string, methodName: string, parameters: NSDictionary<string, any>, userInfo: NSDictionary<string, any>): FBSDKBridgeAPIRequestProtocol;
}

interface FBSDKBridgeAPIRequestOpening {
	openBridgeAPIRequestUseSafariViewControllerFromViewControllerCompletionBlock(request: NSObject & FBSDKBridgeAPIRequestProtocol, useSafariViewController: boolean, fromViewController: UIViewController, completionBlock: (p1: FBSDKBridgeAPIResponse) => void): void;

	openURLSenderHandler(url: NSURL, sender: FBSDKURLOpening, handler: (p1: boolean, p2: NSError) => void): void;

	openURLWithSafariViewControllerSenderFromViewControllerHandler(url: NSURL, sender: FBSDKURLOpening, fromViewController: UIViewController, handler: (p1: boolean, p2: NSError) => void): void;
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

	static bridgeAPIResponseCancelledWithRequest(request: NSObject & FBSDKBridgeAPIRequestProtocol): FBSDKBridgeAPIResponse;

	static bridgeAPIResponseWithRequestError(request: NSObject & FBSDKBridgeAPIRequestProtocol, error: NSError): FBSDKBridgeAPIResponse;

	static bridgeAPIResponseWithRequestResponseURLSourceApplicationError(request: NSObject & FBSDKBridgeAPIRequestProtocol, responseURL: NSURL, sourceApplication: string): FBSDKBridgeAPIResponse;

	static new(): FBSDKBridgeAPIResponse; // inherited from NSObject

	readonly cancelled: boolean;

	readonly error: NSError;

	readonly request: NSObject & FBSDKBridgeAPIRequestProtocol;

	readonly responseParameters: NSDictionary<string, any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

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

declare class FBSDKButton extends FBSDKImpressionLoggingButton {
	static alloc(): FBSDKButton; // inherited from NSObject

	static appearance(): FBSDKButton; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKButton; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKButton; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): FBSDKButton; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKButton; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): FBSDKButton; // inherited from UIAppearance

	/**
	 * @since 15.0
	 */
	static buttonWithConfigurationPrimaryAction(configuration: UIButtonConfiguration, primaryAction: UIAction): FBSDKButton; // inherited from UIButton

	static buttonWithType(buttonType: UIButtonType): FBSDKButton; // inherited from UIButton

	/**
	 * @since 14.0
	 */
	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): FBSDKButton; // inherited from UIButton

	static configureWithApplicationActivationNotifierEventLoggerAccessTokenProvider(applicationActivationNotifier: any, eventLogger: FBSDKEventLogging, accessTokenProvider: typeof NSObject): void;

	static new(): FBSDKButton; // inherited from NSObject

	/**
	 * @since 13.0
	 */
	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): FBSDKButton; // inherited from UIButton

	/**
	 * @since 14.0
	 */
	static systemButtonWithPrimaryAction(primaryAction: UIAction): FBSDKButton; // inherited from UIButton

	readonly implicitlyDisabled: boolean;

	checkImplicitlyDisabled(): void;

	configureWithIconTitleBackgroundColorHighlightedColor(icon: FBSDKIcon, title: string, backgroundColor: UIColor, highlightedColor: UIColor): void;

	configureWithIconTitleBackgroundColorHighlightedColorSelectedTitleSelectedIconSelectedColorSelectedHighlightedColor(icon: FBSDKIcon, title: string, backgroundColor: UIColor, highlightedColor: UIColor, selectedTitle: string, selectedIcon: FBSDKIcon, selectedColor: UIColor, selectedHighlightedColor: UIColor): void;

	defaultBackgroundColor(): UIColor;

	logTapEventWithEventNameParameters(eventName: string, parameters: NSDictionary<string, any>): void;

	sizeThatFitsTitle(size: CGSize, title: string): CGSize;

	textSizeForTextFontConstrainedSizeLineBreakMode(text: string, font: UIFont, constrainedSize: CGSize, lineBreakMode: NSLineBreakMode): CGSize;
}

interface FBSDKButtonImpressionLogging extends NSObjectProtocol {
	analyticsParameters: NSDictionary<string, any>;

	impressionTrackingEventName: string;

	impressionTrackingIdentifier: string;
}
declare var FBSDKButtonImpressionLogging: {
	prototype: FBSDKButtonImpressionLogging;
};

interface FBSDKCAPIReporter {
	configureWithFactorySettings(factory: FBSDKGraphRequestFactoryProtocol, settings: FBSDKSettingsProtocol): void;

	enable(): void;

	recordEvent(parameters: NSDictionary<string, any>): void;
}
declare var FBSDKCAPIReporter: {
	prototype: FBSDKCAPIReporter;
};

declare var FBSDKCATransform3DIdentity: CATransform3D;

interface FBSDKClientTokenProviding {
	clientToken: string;
}
declare var FBSDKClientTokenProviding: {
	prototype: FBSDKClientTokenProviding;
};

declare class FBSDKCloseIcon extends NSObject {
	static alloc(): FBSDKCloseIcon; // inherited from NSObject

	static new(): FBSDKCloseIcon; // inherited from NSObject

	imageWithSize(size: CGSize): UIImage;
}

declare class FBSDKCodelessIndexer extends NSObject implements FBSDKCodelessIndexing {
	static alloc(): FBSDKCodelessIndexer; // inherited from NSObject

	static configureWithGraphRequestFactoryServerConfigurationProviderDataStoreGraphRequestConnectionFactorySwizzlerSettingsAdvertiserIDProvider(graphRequestFactory: FBSDKGraphRequestFactoryProtocol, serverConfigurationProvider: FBSDKServerConfigurationProviding, dataStore: FBSDKDataPersisting, graphRequestConnectionFactory: FBSDKGraphRequestConnectionFactoryProtocol, swizzler: typeof NSObject, settings: FBSDKSettingsProtocol, advertisingIDProvider: FBSDKAdvertiserIDProviding): void;

	static enable(): void;

	static new(): FBSDKCodelessIndexer; // inherited from NSObject

	static readonly extInfo: string;
}

interface FBSDKCodelessIndexing {}
declare var FBSDKCodelessIndexing: {
	prototype: FBSDKCodelessIndexing;

	enable(): void;
};

declare class FBSDKContainerViewController extends UIViewController {
	static alloc(): FBSDKContainerViewController; // inherited from NSObject

	static new(): FBSDKContainerViewController; // inherited from NSObject

	delegate: FBSDKContainerViewControllerDelegate;

	displayChildController(childController: UIViewController): void;
}

interface FBSDKContainerViewControllerDelegate extends NSObjectProtocol {
	viewControllerDidDisappearAnimated(viewController: FBSDKContainerViewController, animated: boolean): void;
}
declare var FBSDKContainerViewControllerDelegate: {
	prototype: FBSDKContainerViewControllerDelegate;
};

interface FBSDKConversionValueUpdating {}
declare var FBSDKConversionValueUpdating: {
	prototype: FBSDKConversionValueUpdating;

	updateCoarseConversionValue(coarseConversionValue: string): void;

	updateConversionValue(conversionValue: number): void;

	/**
	 * @since 16.1
	 */
	updatePostbackConversionValueCoarseValueCompletionHandler(fineValue: number, coarseValue: string, completion: (p1: NSError) => void): void;

	/**
	 * @since 16.1
	 */
	updatePostbackConversionValueCoarseValueLockWindowCompletionHandler(fineValue: number, coarseValue: string, lockWindow: boolean, completion: (p1: NSError) => void): void;

	/**
	 * @since 15.4
	 */
	updatePostbackConversionValueCompletionHandler(conversionValue: number, completion: (p1: NSError) => void): void;
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

	ErrorBridgeAPIResponse = 14,
}

declare class FBSDKCrashObserver extends NSObject implements FBSDKCrashObserving {
	static alloc(): FBSDKCrashObserver; // inherited from NSObject

	static new(): FBSDKCrashObserver; // inherited from NSObject

	frameworks: NSArray<string>; // inherited from FBSDKCrashObserving

	prefixes: NSArray<string>; // inherited from FBSDKCrashObserving

	constructor(o: { featureChecker: FBSDKFeatureChecking; graphRequestFactory: FBSDKGraphRequestFactoryProtocol; settings: FBSDKSettingsProtocol; crashHandler: FBSDKCrashHandlerProtocol });

	didReceiveCrashLogs(crashLogs: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[]): void;

	initWithFeatureCheckerGraphRequestFactorySettingsCrashHandler(featureChecker: FBSDKFeatureChecking, graphRequestFactory: FBSDKGraphRequestFactoryProtocol, settings: FBSDKSettingsProtocol, crashHandler: FBSDKCrashHandlerProtocol): this;
}

declare class FBSDKCrashShield extends NSObject {
	static alloc(): FBSDKCrashShield; // inherited from NSObject

	static analyze(crashLogs: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[]): void;

	static configureWithSettingsGraphRequestFactoryFeatureChecking(settings: FBSDKSettingsProtocol, graphRequestFactory: FBSDKGraphRequestFactoryProtocol, featureChecking: any): void;

	static new(): FBSDKCrashShield; // inherited from NSObject
}

declare var FBSDKDataProcessingOptionKeyCountry: string;

declare var FBSDKDataProcessingOptionKeyOptions: string;

declare var FBSDKDataProcessingOptionKeyState: string;

interface FBSDKDecodableErrorConfiguration extends NSObjectProtocol {
	initWithDictionary?(dictionary: NSDictionary<string, any>): FBSDKDecodableErrorConfiguration;

	updateWithArray(array: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[]): void;
}
declare var FBSDKDecodableErrorConfiguration: {
	prototype: FBSDKDecodableErrorConfiguration;
};

interface FBSDKDeviceInformationProviding {
	bundleIdentifier: string;

	carrierName: string;

	coreCount: number;

	density: number;

	encodedDeviceInfo: string;

	height: number;

	language: string;

	longVersion: string;

	machine: string;

	shortVersion: string;

	storageKey: string;

	sysVersion: string;

	timeZoneAbbrev: string;

	timeZoneName: string;

	width: number;
}
declare var FBSDKDeviceInformationProviding: {
	prototype: FBSDKDeviceInformationProviding;
};

declare class FBSDKDialogConfiguration extends NSObject implements NSCopying, NSObjectProtocol, NSSecureCoding {
	static alloc(): FBSDKDialogConfiguration; // inherited from NSObject

	static new(): FBSDKDialogConfiguration; // inherited from NSObject

	readonly URL: NSURL;

	readonly appVersions: NSArray<any>;

	readonly name: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { name: string; URL: NSURL; appVersions: NSArray<any> | any[] });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithNameURLAppVersions(name: string, URL: NSURL, appVersions: NSArray<any> | any[]): this;

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

declare class FBSDKDialogConfigurationMapBuilder extends NSObject implements FBSDKDialogConfigurationMapBuilding {
	static alloc(): FBSDKDialogConfigurationMapBuilder; // inherited from NSObject

	static new(): FBSDKDialogConfigurationMapBuilder; // inherited from NSObject

	buildDialogConfigurationMapWithRawConfigurations(rawConfigurations: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[]): NSDictionary<string, FBSDKDialogConfiguration>;
}

interface FBSDKDialogConfigurationMapBuilding {
	buildDialogConfigurationMapWithRawConfigurations(rawConfigurations: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[]): NSDictionary<string, FBSDKDialogConfiguration>;
}
declare var FBSDKDialogConfigurationMapBuilding: {
	prototype: FBSDKDialogConfigurationMapBuilding;
};

declare var FBSDKDialogConfigurationNameAppInvite: string;

declare var FBSDKDialogConfigurationNameGameRequest: string;

declare var FBSDKDialogConfigurationNameGroup: string;

declare var FBSDKDialogConfigurationNameLogin: string;

declare class FBSDKDomainConfiguration extends NSObject implements NSCopying, NSObjectProtocol, NSSecureCoding {
	static alloc(): FBSDKDomainConfiguration; // inherited from NSObject

	static new(): FBSDKDomainConfiguration; // inherited from NSObject

	static setDefaultDomainInfo(): void;

	readonly domainInfo: NSDictionary<string, NSDictionary<string, any>>;

	readonly timestamp: Date;

	readonly version: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { timestamp: Date; domainInfo: NSDictionary<string, NSDictionary<string, any>> });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithTimestampDomainInfo(timestamp: Date, domainInfo: NSDictionary<string, NSDictionary<string, any>>): this;

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

declare class FBSDKDomainConfigurationManager extends NSObject implements FBSDKDomainConfigurationProviding {
	static alloc(): FBSDKDomainConfigurationManager; // inherited from NSObject

	static new(): FBSDKDomainConfigurationManager; // inherited from NSObject

	static sharedInstance(): FBSDKDomainConfigurationManager;

	dataStore: FBSDKDataPersisting;

	graphRequestConnectionFactory: FBSDKGraphRequestConnectionFactoryProtocol;

	graphRequestFactory: FBSDKGraphRequestFactoryProtocol;

	settings: FBSDKSettingsProtocol;

	cachedDomainConfiguration(): FBSDKDomainConfiguration;

	configureWithSettingsDataStoreGraphRequestFactoryGraphRequestConnectionFactory(settings: FBSDKSettingsProtocol, dataStore: FBSDKDataPersisting, graphRequestFactory: FBSDKGraphRequestFactoryProtocol, graphRequestConnectionFactory: FBSDKGraphRequestConnectionFactoryProtocol): void;

	loadDomainConfigurationWithCompletionBlock(completionBlock: () => void): void;

	processInvalidDomainsIfNeeded(domainSet: NSSet<string>): void;
}

interface FBSDKDomainConfigurationProviding {
	cachedDomainConfiguration(): FBSDKDomainConfiguration;

	configureWithSettingsDataStoreGraphRequestFactoryGraphRequestConnectionFactory(settings: FBSDKSettingsProtocol, dataStore: FBSDKDataPersisting, graphRequestFactory: FBSDKGraphRequestFactoryProtocol, graphRequestConnectionFactory: FBSDKGraphRequestConnectionFactoryProtocol): void;

	loadDomainConfigurationWithCompletionBlock(completionBlock: () => void): void;

	processInvalidDomainsIfNeeded(domainSet: NSSet<string>): void;
}
declare var FBSDKDomainConfigurationProviding: {
	prototype: FBSDKDomainConfigurationProviding;
};

declare class FBSDKDomainHandler extends NSObject {
	static alloc(): FBSDKDomainHandler; // inherited from NSObject

	static getCleanedGraphPathFromRequest(request: FBSDKGraphRequestProtocol): string;

	static isAuthenticatedForGamingDomain(): boolean;

	static new(): FBSDKDomainHandler; // inherited from NSObject

	static sharedInstance(): FBSDKDomainHandler;

	configureWithGraphRequestFactorySettingsDataStoreGraphRequestFactoryGraphRequestConnectionFactory(domainConfigurationProvider: FBSDKDomainConfigurationProviding, settings: FBSDKSettingsProtocol, dataStore: FBSDKDataPersisting, graphRequestFactory: FBSDKGraphRequestFactoryProtocol, graphRequestConnectionFactory: FBSDKGraphRequestConnectionFactoryProtocol): void;

	getATTScopeEndpointForGraphPath(graphPath: string): string;

	getURLPrefixForBatchRequestIsAdvertiserTrackingEnabled(requestsMetaData: NSArray<FBSDKGraphRequestMetadata> | FBSDKGraphRequestMetadata[], isATTOptIn: boolean): string;

	getURLPrefixForSingleRequestIsAdvertiserTrackingEnabled(request: FBSDKGraphRequestProtocol, isATTOptIn: boolean): string;

	isDomainHandlingEnabled(): boolean;

	loadDomainConfigurationWithCompletionBlock(completionBlock: () => void): void;

	processInvalidDomainsIfNeeded(domainSet: NSSet<string>): void;
}

declare class FBSDKDynamicFrameworkLoaderProxy extends NSObject {
	static alloc(): FBSDKDynamicFrameworkLoaderProxy; // inherited from NSObject

	static loadkSecAttrAccessibleAfterFirstUnlockThisDeviceOnly(): any;

	static new(): FBSDKDynamicFrameworkLoaderProxy; // inherited from NSObject
}

declare var FBSDKErrorArgumentCollectionKey: string;

declare var FBSDKErrorArgumentNameKey: string;

declare var FBSDKErrorArgumentValueKey: string;

declare class FBSDKErrorConfiguration extends NSObject implements FBSDKDecodableErrorConfiguration, FBSDKErrorConfigurationProtocol, NSCopying, NSSecureCoding {
	static alloc(): FBSDKErrorConfiguration; // inherited from NSObject

	static new(): FBSDKErrorConfiguration; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { dictionary: NSDictionary<string, any> }); // inherited from FBSDKDecodableErrorConfiguration

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithDictionary(dictionary: NSDictionary<string, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	recoveryConfigurationForCodeSubcodeRequest(code: string, subcode: string, request: FBSDKGraphRequestProtocol): FBSDKErrorRecoveryConfiguration;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateWithArray(array: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[]): void;
}

interface FBSDKErrorConfigurationProtocol {
	recoveryConfigurationForCodeSubcodeRequest(code: string, subcode: string, request: FBSDKGraphRequestProtocol): FBSDKErrorRecoveryConfiguration;
}
declare var FBSDKErrorConfigurationProtocol: {
	prototype: FBSDKErrorConfigurationProtocol;
};

declare class FBSDKErrorConfigurationProvider extends NSObject implements FBSDKErrorConfigurationProviding {
	static alloc(): FBSDKErrorConfigurationProvider; // inherited from NSObject

	static new(): FBSDKErrorConfigurationProvider; // inherited from NSObject

	errorConfiguration(): FBSDKErrorConfigurationProtocol;
}

interface FBSDKErrorConfigurationProviding {
	errorConfiguration(): FBSDKErrorConfigurationProtocol;
}
declare var FBSDKErrorConfigurationProviding: {
	prototype: FBSDKErrorConfigurationProviding;
};

interface FBSDKErrorCreating {
	errorWithCodeUserInfoMessageUnderlyingError(code: number, userInfo: NSDictionary<string, any>, message: string, underlyingError: NSError): NSError;

	errorWithDomainCodeUserInfoMessageUnderlyingError(domain: string, code: number, userInfo: NSDictionary<string, any>, message: string, underlyingError: NSError): NSError;

	invalidArgumentErrorWithDomainNameValueMessageUnderlyingError(domain: string, name: string, value: any, message: string, underlyingError: NSError): NSError;

	invalidArgumentErrorWithNameValueMessageUnderlyingError(name: string, value: any, message: string, underlyingError: NSError): NSError;

	requiredArgumentErrorWithDomainNameMessageUnderlyingError(domain: string, name: string, message: string, underlyingError: NSError): NSError;

	requiredArgumentErrorWithNameMessageUnderlyingError(name: string, message: string, underlyingError: NSError): NSError;

	unknownErrorWithMessageUserInfo(message: string, userInfo: NSDictionary<string, any>): NSError;
}
declare var FBSDKErrorCreating: {
	prototype: FBSDKErrorCreating;
};

declare var FBSDKErrorDeveloperMessageKey: string;

declare var FBSDKErrorDomain: string;

declare class FBSDKErrorFactory extends NSObject implements FBSDKErrorCreating {
	static alloc(): FBSDKErrorFactory; // inherited from NSObject

	static new(): FBSDKErrorFactory; // inherited from NSObject

	errorWithCodeUserInfoMessageUnderlyingError(code: number, userInfo: NSDictionary<string, any>, message: string, underlyingError: NSError): NSError;

	errorWithDomainCodeUserInfoMessageUnderlyingError(domain: string, code: number, userInfo: NSDictionary<string, any>, message: string, underlyingError: NSError): NSError;

	invalidArgumentErrorWithDomainNameValueMessageUnderlyingError(domain: string, name: string, value: any, message: string, underlyingError: NSError): NSError;

	invalidArgumentErrorWithNameValueMessageUnderlyingError(name: string, value: any, message: string, underlyingError: NSError): NSError;

	requiredArgumentErrorWithDomainNameMessageUnderlyingError(domain: string, name: string, message: string, underlyingError: NSError): NSError;

	requiredArgumentErrorWithNameMessageUnderlyingError(name: string, message: string, underlyingError: NSError): NSError;

	unknownErrorWithMessageUserInfo(message: string, userInfo: NSDictionary<string, any>): NSError;
}

declare var FBSDKErrorLocalizedDescriptionKey: string;

declare var FBSDKErrorLocalizedTitleKey: string;

interface FBSDKErrorRecoveryAttempting {
	attemptRecoveryFromErrorCompletionHandler(error: NSError, completionHandler: (p1: boolean) => void): void;
}
declare var FBSDKErrorRecoveryAttempting: {
	prototype: FBSDKErrorRecoveryAttempting;
};

declare class FBSDKErrorRecoveryConfiguration extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): FBSDKErrorRecoveryConfiguration; // inherited from NSObject

	static new(): FBSDKErrorRecoveryConfiguration; // inherited from NSObject

	readonly errorCategory: FBSDKGraphRequestError;

	readonly localizedRecoveryDescription: string;

	readonly localizedRecoveryOptionDescriptions: NSArray<string>;

	readonly recoveryActionName: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { recoveryDescription: string; optionDescriptions: NSArray<string> | string[]; category: FBSDKGraphRequestError; recoveryActionName: string });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithRecoveryDescriptionOptionDescriptionsCategoryRecoveryActionName(description: string, optionDescriptions: NSArray<string> | string[], category: FBSDKGraphRequestError, recoveryActionName: string): this;
}

declare class FBSDKErrorReporter extends NSObject implements FBSDKErrorReporting {
	static alloc(): FBSDKErrorReporter; // inherited from NSObject

	static new(): FBSDKErrorReporter; // inherited from NSObject

	dataExtractor: typeof NSObject;

	readonly directoryPath: string;

	fileManager: FBSDKFileManaging;

	graphRequestFactory: FBSDKGraphRequestFactoryProtocol;

	isEnabled: boolean;

	settings: FBSDKSettingsProtocol;

	static readonly shared: FBSDKErrorReporter;

	constructor(o: { graphRequestFactory: FBSDKGraphRequestFactoryProtocol; fileManager: FBSDKFileManaging; settings: FBSDKSettingsProtocol; fileDataExtractor: typeof NSObject });

	enable(): void;

	initWithGraphRequestFactoryFileManagerSettingsFileDataExtractor(graphRequestFactory: FBSDKGraphRequestFactoryProtocol, fileManager: FBSDKFileManaging, settings: FBSDKSettingsProtocol, dataExtractor: typeof NSObject): this;

	saveErrorErrorDomainMessage(errorCode: number, errorDomain: string, message: string): void;
}

interface FBSDKErrorReporting {
	enable(): void;

	saveErrorErrorDomainMessage(errorCode: number, errorDomain: string, message: string): void;
}
declare var FBSDKErrorReporting: {
	prototype: FBSDKErrorReporting;
};

interface FBSDKEventLogging {
	flushBehavior: FBSDKAppEventsFlushBehavior;

	doLogEventValueToSumParametersIsImplicitlyLoggedAccessTokenOperationalParameters(eventName: string, valueToSum: number, parameters: NSDictionary<string, any>, isImplicitlyLogged: boolean, accessToken: FBSDKAccessToken, operationalParameters: NSDictionary<string, NSDictionary<string, any>>): void;

	flushForReason(flushReason: FBSDKAppEventsFlushReason): void;

	logEventParameters(eventName: string, parameters: NSDictionary<string, any>): void;

	logEventValueToSumParameters(eventName: string, valueToSum: number, parameters: NSDictionary<string, any>): void;

	logEventValueToSumParametersAccessToken(eventName: string, valueToSum: number, parameters: NSDictionary<string, any>, accessToken: FBSDKAccessToken): void;

	logInternalEventIsImplicitlyLogged(eventName: string, isImplicitlyLogged: boolean): void;

	logInternalEventParametersIsImplicitlyLogged(eventName: string, parameters: NSDictionary<string, any>, isImplicitlyLogged: boolean): void;

	logInternalEventParametersIsImplicitlyLoggedAccessToken(eventName: string, parameters: NSDictionary<string, any>, isImplicitlyLogged: boolean, accessToken: FBSDKAccessToken): void;

	logInternalEventValueToSumIsImplicitlyLogged(eventName: string, valueToSum: number, isImplicitlyLogged: boolean): void;
}
declare var FBSDKEventLogging: {
	prototype: FBSDKEventLogging;
};

interface FBSDKEventProcessing {
	enable(): void;

	processSuggestedEventsDenseData(textFeature: string, denseData: interop.Pointer | interop.Reference<number>): string;
}
declare var FBSDKEventProcessing: {
	prototype: FBSDKEventProcessing;
};

interface FBSDKEventsProcessing {
	enable(): void;

	processEvents(events: NSMutableArray<NSDictionary<string, any>>): void;
}
declare var FBSDKEventsProcessing: {
	prototype: FBSDKEventsProcessing;
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

	ProtectedMode = 16843780,

	MACARuleMatching = 16843781,

	BlocklistEvents = 16843782,

	FilterRedactedEvents = 16843783,

	FilterSensitiveParams = 16843784,

	StdParamEnforcement = 16843785,

	BannedParamFiltering = 16843786,

	EventDeactivation = 16844032,

	SKAdNetwork = 16844288,

	SKAdNetworkConversionValue = 16844289,

	SKAdNetworkV4 = 16844290,

	ATELogging = 16844544,

	AEM = 16844800,

	AEMConversionFiltering = 16844801,

	AEMCatalogMatching = 16844802,

	AEMAdvertiserRuleMatchInServer = 16844803,

	AEMAutoSetup = 16844804,

	AEMAutoSetupProxy = 16844805,

	AppEventsCloudbridge = 16845056,

	IAPLoggingSK2 = 16846848,

	IOSManualImplicitPurchaseDedupe = 16846849,

	Instrument = 16908288,

	CrashReport = 16908544,

	CrashShield = 16908545,

	ErrorReport = 16908800,

	Login = 33554432,

	Share = 50331648,

	GamingServices = 67108864,
}

interface FBSDKFeatureChecking {
	checkFeatureCompletionBlock(feature: FBSDKFeature, completionBlock: (p1: boolean) => void): void;

	isEnabled(feature: FBSDKFeature): boolean;
}
declare var FBSDKFeatureChecking: {
	prototype: FBSDKFeatureChecking;
};

interface FBSDKFeatureDisabling {
	disableFeature(feature: FBSDKFeature): void;
}
declare var FBSDKFeatureDisabling: {
	prototype: FBSDKFeatureDisabling;
};

interface FBSDKFeatureExtracting {}
declare var FBSDKFeatureExtracting: {
	prototype: FBSDKFeatureExtracting;

	getDenseFeatures(viewHierarchy: NSDictionary<string, any>): interop.Pointer | interop.Reference<number>;

	getTextFeatureWithScreenName(text: string, screenName: string): string;

	loadRulesForKey(useCaseKey: string): void;
};

declare class FBSDKFeatureExtractor extends NSObject implements FBSDKFeatureExtracting {
	static alloc(): FBSDKFeatureExtractor; // inherited from NSObject

	static configureWithRulesFromKeyProvider(rulesFromKeyProvider: FBSDKRulesFromKeyProvider): void;

	static getDenseFeatures(viewHierarchy: NSDictionary<string, any>): interop.Pointer | interop.Reference<number>;

	static getTextFeatureWithScreenName(text: string, screenName: string): string;

	static loadRulesForKey(useCaseKey: string): void;

	static new(): FBSDKFeatureExtractor; // inherited from NSObject

	static rulesFromKeyProvider: FBSDKRulesFromKeyProvider;
}

declare class FBSDKFeatureManager extends NSObject implements FBSDKFeatureChecking, FBSDKFeatureDisabling {
	static alloc(): FBSDKFeatureManager; // inherited from NSObject

	static new(): FBSDKFeatureManager; // inherited from NSObject

	static readonly shared: FBSDKFeatureManager;

	checkFeatureCompletionBlock(feature: FBSDKFeature, completionBlock: (p1: boolean) => void): void;

	disableFeature(feature: FBSDKFeature): void;

	isEnabled(feature: FBSDKFeature): boolean;
}

declare class FBSDKGateKeeperManager extends NSObject implements FBSDKGateKeeperManaging {
	static alloc(): FBSDKGateKeeperManager; // inherited from NSObject

	static boolForKeyDefaultValue(key: string, defaultValue: boolean): boolean;

	static configureWithSettingsGraphRequestFactoryGraphRequestConnectionFactoryStore(settings: FBSDKSettingsProtocol, graphRequestFactory: FBSDKGraphRequestFactoryProtocol, graphRequestConnectionFactory: FBSDKGraphRequestConnectionFactoryProtocol, store: FBSDKDataPersisting): void;

	static loadGateKeepers(completionBlock: (p1: NSError) => void): void;

	static new(): FBSDKGateKeeperManager; // inherited from NSObject
}

interface FBSDKGateKeeperManaging {}
declare var FBSDKGateKeeperManaging: {
	prototype: FBSDKGateKeeperManaging;

	boolForKeyDefaultValue(key: string, defaultValue: boolean): boolean;

	loadGateKeepers(completionBlock: (p1: NSError) => void): void;
};

declare class FBSDKGraphErrorRecoveryProcessor extends NSObject {
	static alloc(): FBSDKGraphErrorRecoveryProcessor; // inherited from NSObject

	static new(): FBSDKGraphErrorRecoveryProcessor; // inherited from NSObject

	constructor(o: { accessTokenString: string });

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

	static configureWithSettingsCurrentAccessTokenStringProviderGraphRequestConnectionFactory(settings: FBSDKSettingsProtocol, accessTokenProvider: typeof NSObject, _graphRequestConnectionFactory: FBSDKGraphRequestConnectionFactoryProtocol): void;

	static new(): FBSDKGraphRequest; // inherited from NSObject

	readonly HTTPMethod: string; // inherited from FBSDKGraphRequestProtocol

	readonly flags: FBSDKGraphRequestFlags; // inherited from FBSDKGraphRequestProtocol

	readonly forAppEvents: boolean; // inherited from FBSDKGraphRequestProtocol

	graphErrorRecoveryDisabled: boolean; // inherited from FBSDKGraphRequestProtocol

	readonly graphPath: string; // inherited from FBSDKGraphRequestProtocol

	readonly hasAttachments: boolean; // inherited from FBSDKGraphRequestProtocol

	parameters: NSDictionary<string, any>; // inherited from FBSDKGraphRequestProtocol

	readonly tokenString: string; // inherited from FBSDKGraphRequestProtocol

	readonly useAlternativeDefaultDomainPrefix: boolean; // inherited from FBSDKGraphRequestProtocol

	readonly version: string; // inherited from FBSDKGraphRequestProtocol

	constructor(o: { graphPath: string });

	constructor(o: { graphPath: string; HTTPMethod: string });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any> });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; flags: FBSDKGraphRequestFlags });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; flags: FBSDKGraphRequestFlags; useAlternativeDefaultDomainPrefix: boolean });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; HTTPMethod: string });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; HTTPMethod: string; useAlternativeDefaultDomainPrefix: boolean });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; tokenString: string; HTTPMethod: string; flags: FBSDKGraphRequestFlags });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; tokenString: string; HTTPMethod: string; flags: FBSDKGraphRequestFlags; forAppEvents: boolean });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; tokenString: string; HTTPMethod: string; flags: FBSDKGraphRequestFlags; forAppEvents: boolean; useAlternativeDefaultDomainPrefix: boolean });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; tokenString: string; HTTPMethod: string; flags: FBSDKGraphRequestFlags; useAlternativeDefaultDomainPrefix: boolean });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; tokenString: string; version: string; HTTPMethod: string });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; tokenString: string; version: string; HTTPMethod: string; forAppEvents: boolean });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; tokenString: string; version: string; HTTPMethod: string; forAppEvents: boolean; useAlternativeDefaultDomainPrefix: boolean });

	constructor(o: { graphPath: string; parameters: NSDictionary<string, any>; useAlternativeDefaultDomainPrefix: boolean });

	constructor(o: { graphPath: string; useAlternativeDefaultDomainPrefix: boolean });

	formattedDescription(): string;

	initWithGraphPath(graphPath: string): this;

	initWithGraphPathHTTPMethod(graphPath: string, method: string): this;

	initWithGraphPathParameters(graphPath: string, parameters: NSDictionary<string, any>): this;

	initWithGraphPathParametersFlags(graphPath: string, parameters: NSDictionary<string, any>, requestFlags: FBSDKGraphRequestFlags): this;

	initWithGraphPathParametersFlagsUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, requestFlags: FBSDKGraphRequestFlags, useAlternativeDefaultDomainPrefix: boolean): this;

	initWithGraphPathParametersHTTPMethod(graphPath: string, parameters: NSDictionary<string, any>, method: string): this;

	initWithGraphPathParametersHTTPMethodUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, method: string, useAlternativeDefaultDomainPrefix: boolean): this;

	initWithGraphPathParametersTokenStringHTTPMethodFlags(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, HTTPMethod: string, flags: FBSDKGraphRequestFlags): this;

	initWithGraphPathParametersTokenStringHTTPMethodFlagsForAppEvents(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, method: string, requestFlags: FBSDKGraphRequestFlags, forAppEvents: boolean): this;

	initWithGraphPathParametersTokenStringHTTPMethodFlagsForAppEventsUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, method: string, requestFlags: FBSDKGraphRequestFlags, forAppEvents: boolean, useAlternativeDefaultDomainPrefix: boolean): this;

	initWithGraphPathParametersTokenStringHTTPMethodFlagsUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, HTTPMethod: string, flags: FBSDKGraphRequestFlags, useAlternativeDefaultDomainPrefix: boolean): this;

	initWithGraphPathParametersTokenStringVersionHTTPMethod(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, version: string, method: string): this;

	initWithGraphPathParametersTokenStringVersionHTTPMethodForAppEvents(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, version: string, method: string, forAppEvents: boolean): this;

	initWithGraphPathParametersTokenStringVersionHTTPMethodForAppEventsUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, version: string, method: string, forAppEvents: boolean, useAlternativeDefaultDomainPrefix: boolean): this;

	initWithGraphPathParametersUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, useAlternativeDefaultDomainPrefix: boolean): this;

	initWithGraphPathUseAlternativeDefaultDomainPrefix(graphPath: string, useAlternativeDefaultDomainPrefix: boolean): this;

	setGraphErrorRecoveryDisabled(disable: boolean): void;

	startWithCompletion(completion: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void): FBSDKGraphRequestConnecting;
}

interface FBSDKGraphRequestConnecting {
	delegate: FBSDKGraphRequestConnectionDelegate;

	requests: NSMutableArray<FBSDKGraphRequestMetadata>;

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

	static configureWithURLSessionProxyFactoryErrorConfigurationProviderPiggybackManagerSettingsGraphRequestConnectionFactoryEventLoggerOperatingSystemVersionComparerMacCatalystDeterminatorAccessTokenProviderErrorFactoryAuthenticationTokenProvider(
		proxyFactory: FBSDKURLSessionProxyProviding,
		errorConfigurationProvider: FBSDKErrorConfigurationProviding,
		piggybackManager: FBSDKGraphRequestPiggybackManaging,
		settings: FBSDKSettingsProtocol,
		factory: FBSDKGraphRequestConnectionFactoryProtocol,
		eventLogger: FBSDKEventLogging,
		operatingSystemVersionComparer: FBSDKOperatingSystemVersionComparing,
		macCatalystDeterminator: FBSDKMacCatalystDetermining,
		accessTokenProvider: typeof NSObject,
		errorFactory: FBSDKErrorCreating,
		authenticationTokenProvider: typeof NSObject
	): void;

	static new(): FBSDKGraphRequestConnection; // inherited from NSObject

	static setCanMakeRequests(): void;

	static setDidFetchDomainConfiguration(): void;

	delegateQueue: NSOperationQueue;

	readonly urlResponse: NSHTTPURLResponse;

	static defaultConnectionTimeout: number;

	delegate: FBSDKGraphRequestConnectionDelegate; // inherited from FBSDKGraphRequestConnecting

	readonly requests: NSMutableArray<FBSDKGraphRequestMetadata>; // inherited from FBSDKGraphRequestConnecting

	timeout: number; // inherited from FBSDKGraphRequestConnecting

	addRequestCompletion(request: FBSDKGraphRequestProtocol, handler: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void): void;

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

declare class FBSDKGraphRequestConnectionFactory extends NSObject implements FBSDKGraphRequestConnectionFactoryProtocol {
	static alloc(): FBSDKGraphRequestConnectionFactory; // inherited from NSObject

	static new(): FBSDKGraphRequestConnectionFactory; // inherited from NSObject

	createGraphRequestConnection(): FBSDKGraphRequestConnecting;
}

interface FBSDKGraphRequestConnectionFactoryProtocol {
	createGraphRequestConnection(): FBSDKGraphRequestConnecting;
}
declare var FBSDKGraphRequestConnectionFactoryProtocol: {
	prototype: FBSDKGraphRequestConnectionFactoryProtocol;
};

declare class FBSDKGraphRequestDataAttachment extends NSObject {
	static alloc(): FBSDKGraphRequestDataAttachment; // inherited from NSObject

	static new(): FBSDKGraphRequestDataAttachment; // inherited from NSObject

	readonly contentType: string;

	readonly data: NSData;

	readonly filename: string;

	constructor(o: { data: NSData; filename: string; contentType: string });

	initWithDataFilenameContentType(data: NSData, filename: string, contentType: string): this;
}

declare const enum FBSDKGraphRequestError {
	Other = 0,

	Transient = 1,

	Recoverable = 2,
}

declare var FBSDKGraphRequestErrorGraphErrorCodeKey: string;

declare var FBSDKGraphRequestErrorGraphErrorSubcodeKey: string;

declare var FBSDKGraphRequestErrorHTTPStatusCodeKey: string;

declare var FBSDKGraphRequestErrorKey: string;

declare var FBSDKGraphRequestErrorParsedJSONResponseKey: string;

declare class FBSDKGraphRequestFactory extends NSObject implements FBSDKGraphRequestFactoryProtocol {
	static alloc(): FBSDKGraphRequestFactory; // inherited from NSObject

	static new(): FBSDKGraphRequestFactory; // inherited from NSObject

	createGraphRequestWithGraphPath(graphPath: string): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParameters(graphPath: string, parameters: NSDictionary<string, any>): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersFlags(graphPath: string, parameters: NSDictionary<string, any>, flags: FBSDKGraphRequestFlags): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersFlagsUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, flags: FBSDKGraphRequestFlags, useAlternativeDefaultDomainPrefix: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersHTTPMethod(graphPath: string, parameters: NSDictionary<string, any>, method: string): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersHTTPMethodUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, method: string, useAlternativeDefaultDomainPrefix: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringHTTPMethodFlags(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, method: string, flags: FBSDKGraphRequestFlags): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringHTTPMethodFlagsForAppEvents(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, method: string, flags: FBSDKGraphRequestFlags, forAppEvents: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringHTTPMethodFlagsForAppEventsUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, method: string, flags: FBSDKGraphRequestFlags, forAppEvents: boolean, useAlternativeDefaultDomainPrefix: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringHTTPMethodFlagsUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, method: string, flags: FBSDKGraphRequestFlags, useAlternativeDefaultDomainPrefix: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringVersionHTTPMethod(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, version: string, method: string): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringVersionHTTPMethodForAppEvents(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, version: string, method: string, forAppEvents: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringVersionHTTPMethodForAppEventsUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, version: string, method: string, forAppEvents: boolean, useAlternativeDefaultDomainPrefix: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, useAlternativeDefaultDomainPrefix: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathUseAlternativeDefaultDomainPrefix(graphPath: string, useAlternativeDefaultDomainPrefix: boolean): FBSDKGraphRequestProtocol;
}

interface FBSDKGraphRequestFactoryProtocol {
	createGraphRequestWithGraphPath(graphPath: string): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParameters(graphPath: string, parameters: NSDictionary<string, any>): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersFlags(graphPath: string, parameters: NSDictionary<string, any>, flags: FBSDKGraphRequestFlags): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersFlagsUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, flags: FBSDKGraphRequestFlags, useAlternativeDefaultDomainPrefix: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersHTTPMethod(graphPath: string, parameters: NSDictionary<string, any>, method: string): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersHTTPMethodUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, method: string, useAlternativeDefaultDomainPrefix: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringHTTPMethodFlags(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, method: string, flags: FBSDKGraphRequestFlags): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringHTTPMethodFlagsForAppEvents(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, method: string, flags: FBSDKGraphRequestFlags, forAppEvents: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringHTTPMethodFlagsForAppEventsUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, method: string, flags: FBSDKGraphRequestFlags, forAppEvents: boolean, useAlternativeDefaultDomainPrefix: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringHTTPMethodFlagsUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, method: string, flags: FBSDKGraphRequestFlags, useAlternativeDefaultDomainPrefix: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringVersionHTTPMethod(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, version: string, method: string): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringVersionHTTPMethodForAppEvents(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, version: string, method: string, forAppEvents: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersTokenStringVersionHTTPMethodForAppEventsUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, version: string, method: string, forAppEvents: boolean, useAlternativeDefaultDomainPrefix: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathParametersUseAlternativeDefaultDomainPrefix(graphPath: string, parameters: NSDictionary<string, any>, useAlternativeDefaultDomainPrefix: boolean): FBSDKGraphRequestProtocol;

	createGraphRequestWithGraphPathUseAlternativeDefaultDomainPrefix(graphPath: string, useAlternativeDefaultDomainPrefix: boolean): FBSDKGraphRequestProtocol;
}
declare var FBSDKGraphRequestFactoryProtocol: {
	prototype: FBSDKGraphRequestFactoryProtocol;
};

declare const enum FBSDKGraphRequestFlags {
	None = 0,

	SkipClientToken = 2,

	DoNotInvalidateTokenOnError = 4,

	DisableErrorRecovery = 8,
}

declare class FBSDKGraphRequestMetadata extends NSObject {
	static alloc(): FBSDKGraphRequestMetadata; // inherited from NSObject

	static new(): FBSDKGraphRequestMetadata; // inherited from NSObject

	batchParameters: NSDictionary<string, any>;

	completionHandler: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void;

	request: FBSDKGraphRequestProtocol;

	constructor(o: { request: FBSDKGraphRequestProtocol; completionHandler: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void; batchParameters: NSDictionary<string, any> });

	initWithRequestCompletionHandlerBatchParameters(request: FBSDKGraphRequestProtocol, handler: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void, batchParameters: NSDictionary<string, any>): this;

	invokeCompletionHandlerForConnectionWithResultsError(connection: FBSDKGraphRequestConnecting, results: any, error: NSError): void;
}

interface FBSDKGraphRequestPiggybackManaging {
	addPiggybackRequests(connection: FBSDKGraphRequestConnecting): void;

	addRefreshPiggybackPermissionHandler(connection: FBSDKGraphRequestConnecting, permissionHandler: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void): void;
}
declare var FBSDKGraphRequestPiggybackManaging: {
	prototype: FBSDKGraphRequestPiggybackManaging;
};

interface FBSDKGraphRequestProtocol {
	HTTPMethod: string;

	flags: FBSDKGraphRequestFlags;

	forAppEvents: boolean;

	graphErrorRecoveryDisabled: boolean;

	graphPath: string;

	hasAttachments: boolean;

	parameters: NSDictionary<string, any>;

	tokenString: string;

	useAlternativeDefaultDomainPrefix: boolean;

	version: string;

	formattedDescription(): string;

	startWithCompletion(completion: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void): FBSDKGraphRequestConnecting;
}
declare var FBSDKGraphRequestProtocol: {
	prototype: FBSDKGraphRequestProtocol;
};

declare class FBSDKGraphRequestQueue extends NSObject {
	static alloc(): FBSDKGraphRequestQueue; // inherited from NSObject

	static new(): FBSDKGraphRequestQueue; // inherited from NSObject

	static sharedInstance(): FBSDKGraphRequestQueue;

	configureWithGraphRequestConnectionFactory(graphRequestConnectionFactory: FBSDKGraphRequestConnectionFactoryProtocol): void;

	enqueueRequestCompletion(request: FBSDKGraphRequestProtocol, completion: (p1: FBSDKGraphRequestConnecting, p2: any, p3: NSError) => void): void;

	enqueueRequestMetadata(requestMetadata: FBSDKGraphRequestMetadata): void;

	enqueueRequests(requests: NSArray<FBSDKGraphRequestMetadata> | FBSDKGraphRequestMetadata[]): void;

	flush(): void;
}

declare var FBSDKHTTPMethodDELETE: string;

declare var FBSDKHTTPMethodGET: string;

declare var FBSDKHTTPMethodPOST: string;

declare class FBSDKHumanSilhouetteIcon extends FBSDKIcon {
	static alloc(): FBSDKHumanSilhouetteIcon; // inherited from NSObject

	static new(): FBSDKHumanSilhouetteIcon; // inherited from NSObject
}

interface FBSDKIAPDedupeProcessing {
	isEnabled: boolean;

	disable(): void;

	enable(): void;

	processImplicitEventValueToSumParametersAccessTokenOperationalParameters(eventName: string, valueToSum: number, parameters: NSDictionary<string, any>, accessToken: FBSDKAccessToken, operationalParameters: NSDictionary<string, NSDictionary<string, any>>): void;

	processManualEventValueToSumParametersAccessTokenOperationalParameters(eventName: string, valueToSum: number, parameters: NSDictionary<string, any>, accessToken: FBSDKAccessToken, operationalParameters: NSDictionary<string, NSDictionary<string, any>>): void;

	processSavedEvents(): void;

	saveNonProcessedEvents(): void;

	shouldDedupeEventValueToSumParameters(eventName: string, valueToSum: number, parameters: NSDictionary<string, any>): boolean;
}
declare var FBSDKIAPDedupeProcessing: {
	prototype: FBSDKIAPDedupeProcessing;
};

interface FBSDKIAPFailedTransactionLogging {
	/**
	 * @since 15
	 */
	logFailedStoreKit2Purchase(productID: string): void;
}
declare var FBSDKIAPFailedTransactionLogging: {
	prototype: FBSDKIAPFailedTransactionLogging;
};

interface FBSDKIAPFailedTransactionLoggingCreating {
	/**
	 * @since 15
	 */
	createIAPFailedTransactionLogging(): FBSDKIAPFailedTransactionLogging;
}
declare var FBSDKIAPFailedTransactionLoggingCreating: {
	prototype: FBSDKIAPFailedTransactionLoggingCreating;
};

interface FBSDKIAPTransactionCaching {
	hasRestoredPurchases: boolean;

	newCandidatesDate: Date;

	addTransactionEventNameProductID(transactionID: string, eventName: string, productID: string): void;

	containsEventNameProductID(transactionID: string, eventName: string, productID: string): boolean;

	containsProductID(transactionID: string, productID: string): boolean;

	removeTransactionEventNameProductID(transactionID: string, eventName: string, productID: string): void;

	trimIfNeeded(hasLowMemory: boolean): void;
}
declare var FBSDKIAPTransactionCaching: {
	prototype: FBSDKIAPTransactionCaching;
};

declare class FBSDKIcon extends NSObject {
	static alloc(): FBSDKIcon; // inherited from NSObject

	static new(): FBSDKIcon; // inherited from NSObject

	imageWithSize(size: CGSize): UIImage;

	imageWithSizeColor(size: CGSize, color: UIColor): UIImage;

	imageWithSizeScaleColor(size: CGSize, scale: number, color: UIColor): UIImage;

	pathWith(size: CGSize): any;
}

declare class FBSDKImpressionLoggerFactory extends NSObject implements FBSDKImpressionLoggerFactoryProtocol {
	static alloc(): FBSDKImpressionLoggerFactory; // inherited from NSObject

	static new(): FBSDKImpressionLoggerFactory; // inherited from NSObject

	readonly accessTokenWallet: typeof NSObject;

	readonly eventLogger: FBSDKEventLogging;

	readonly graphRequestFactory: FBSDKGraphRequestFactoryProtocol;

	readonly notificationCenter: FBSDKNotificationDelivering;

	constructor(o: { graphRequestFactory: FBSDKGraphRequestFactoryProtocol; eventLogger: FBSDKEventLogging; notificationCenter: FBSDKNotificationDelivering; accessTokenWallet: typeof NSObject });

	initWithGraphRequestFactoryEventLoggerNotificationCenterAccessTokenWallet(graphRequestFactory: FBSDKGraphRequestFactoryProtocol, eventLogger: FBSDKEventLogging, notificationCenter: FBSDKNotificationDelivering, accessTokenWallet: typeof NSObject): this;

	makeImpressionLoggerWithEventName(eventName: string): FBSDKImpressionLogging;
}

interface FBSDKImpressionLoggerFactoryProtocol {
	makeImpressionLoggerWithEventName(eventName: string): FBSDKImpressionLogging;
}
declare var FBSDKImpressionLoggerFactoryProtocol: {
	prototype: FBSDKImpressionLoggerFactoryProtocol;
};

interface FBSDKImpressionLogging {
	logImpressionWithIdentifierParameters(identifier: string, parameters: NSDictionary<string, any>): void;
}
declare var FBSDKImpressionLogging: {
	prototype: FBSDKImpressionLogging;
};

declare class FBSDKImpressionLoggingButton extends UIButton {
	static alloc(): FBSDKImpressionLoggingButton; // inherited from NSObject

	static appearance(): FBSDKImpressionLoggingButton; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKImpressionLoggingButton; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKImpressionLoggingButton; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): FBSDKImpressionLoggingButton; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKImpressionLoggingButton; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): FBSDKImpressionLoggingButton; // inherited from UIAppearance

	/**
	 * @since 15.0
	 */
	static buttonWithConfigurationPrimaryAction(configuration: UIButtonConfiguration, primaryAction: UIAction): FBSDKImpressionLoggingButton; // inherited from UIButton

	static buttonWithType(buttonType: UIButtonType): FBSDKImpressionLoggingButton; // inherited from UIButton

	/**
	 * @since 14.0
	 */
	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): FBSDKImpressionLoggingButton; // inherited from UIButton

	static configureWithImpressionLoggerFactory(impressionLoggerFactory: FBSDKImpressionLoggerFactoryProtocol): void;

	static new(): FBSDKImpressionLoggingButton; // inherited from NSObject

	/**
	 * @since 13.0
	 */
	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): FBSDKImpressionLoggingButton; // inherited from UIButton

	/**
	 * @since 14.0
	 */
	static systemButtonWithPrimaryAction(primaryAction: UIAction): FBSDKImpressionLoggingButton; // inherited from UIButton
}

declare class FBSDKInstrumentManager extends NSObject {
	static alloc(): FBSDKInstrumentManager; // inherited from NSObject

	static new(): FBSDKInstrumentManager; // inherited from NSObject

	static readonly shared: FBSDKInstrumentManager;

	configureWithFeatureCheckerSettingsCrashObserverErrorReporterCrashHandler(featureChecker: FBSDKFeatureChecking, settings: FBSDKSettingsProtocol, crashObserver: FBSDKCrashObserving, errorReporter: FBSDKErrorReporting, crashHandler: FBSDKCrashHandlerProtocol): void;

	enable(): void;
}

interface FBSDKIntegrityParametersProcessorProvider {
	integrityParametersProcessor: FBSDKAppEventsParameterProcessing;
}
declare var FBSDKIntegrityParametersProcessorProvider: {
	prototype: FBSDKIntegrityParametersProcessorProvider;
};

interface FBSDKIntegrityProcessing {
	processIntegrity(parameter: string): boolean;
}
declare var FBSDKIntegrityProcessing: {
	prototype: FBSDKIntegrityProcessing;
};

interface FBSDKInternalURLOpener {
	canOpenURL(url: NSURL): boolean;

	openURLOptionsCompletionHandler(url: NSURL, options: NSDictionary<string, any>, completion: (p1: boolean) => void): void;
}
declare var FBSDKInternalURLOpener: {
	prototype: FBSDKInternalURLOpener;
};

declare class FBSDKInternalUtility extends NSObject implements FBSDKAppAvailabilityChecker, FBSDKAppURLSchemeProviding, FBSDKInternalUtilityProtocol, FBSDKURLHosting, _FBSDKWindowFinding {
	static alloc(): FBSDKInternalUtility; // inherited from NSObject

	static new(): FBSDKInternalUtility; // inherited from NSObject

	static readonly sharedUtility: FBSDKInternalUtility;

	readonly appURLScheme: string; // inherited from FBSDKAppURLSchemeProviding

	readonly bundleForStrings: NSBundle; // inherited from FBSDKInternalUtilityProtocol

	readonly isFacebookAppInstalled: boolean; // inherited from FBSDKAppAvailabilityChecker

	readonly isMessengerAppInstalled: boolean; // inherited from FBSDKAppAvailabilityChecker

	readonly isUnity: boolean; // inherited from FBSDKInternalUtilityProtocol

	URLWithSchemeHostPathQueryParametersError(scheme: string, host: string, path: string, queryParameters: NSDictionary<string, string>): NSURL;

	appURLWithHostPathQueryParametersError(host: string, path: string, queryParameters: NSDictionary<string, string>): NSURL;

	checkRegisteredCanOpenURLScheme(urlScheme: string): void;

	configureWithInfoDictionaryProviderLoggerFactorySettingsErrorFactory(infoDictionaryProvider: FBSDKInfoDictionaryProviding, loggerFactory: __FBSDKLoggerCreating, settings: FBSDKSettingsProtocol, errorFactory: FBSDKErrorCreating): void;

	extendDictionaryWithDataProcessingOptions(parameters: NSMutableDictionary<string, string>): void;

	extractPermissionsFromResponseGrantedPermissionsDeclinedPermissionsExpiredPermissions(responseObject: NSDictionary<string, any>, grantedPermissions: NSMutableSet<string>, declinedPermissions: NSMutableSet<string>, expiredPermissions: NSMutableSet<string>): void;

	facebookURLWithHostPrefixPathQueryParametersError(hostPrefix: string, path: string, queryParameters: NSDictionary<string, string>): NSURL;

	findWindow(): UIWindow;

	hexadecimalStringFromData(data: NSData): string;

	isBrowserURL(URL: NSURL): boolean;

	isRegisteredCanOpenURLScheme(urlScheme: string): boolean;

	isRegisteredURLScheme(urlScheme: string): boolean;

	objectIsEqualToObject(object: any, other: any): boolean;

	parametersFromFBURL(url: NSURL): NSDictionary<string, any>;

	registerTransientObject(object: any): void;

	topMostViewController(): UIViewController;

	unregisterTransientObject(object: any): void;

	validateAppID(): void;

	validateDomainConfiguration(): void;

	validateFacebookReservedURLSchemes(): void;

	validateRequiredClientAccessToken(): string;

	validateURLSchemes(): void;

	viewControllerForView(view: UIView): UIViewController;
}

interface FBSDKInternalUtilityProtocol {
	bundleForStrings: NSBundle;

	isFacebookAppInstalled: boolean;

	isUnity: boolean;

	URLWithSchemeHostPathQueryParametersError(scheme: string, host: string, path: string, queryParameters: NSDictionary<string, string>): NSURL;

	appURLWithHostPathQueryParametersError(host: string, path: string, queryParameters: NSDictionary<string, string>): NSURL;

	checkRegisteredCanOpenURLScheme(urlScheme: string): void;

	extendDictionaryWithDataProcessingOptions(parameters: NSMutableDictionary<string, string>): void;

	extractPermissionsFromResponseGrantedPermissionsDeclinedPermissionsExpiredPermissions(responseObject: NSDictionary<string, any>, grantedPermissions: NSMutableSet<string>, declinedPermissions: NSMutableSet<string>, expiredPermissions: NSMutableSet<string>): void;

	facebookURLWithHostPrefixPathQueryParametersError(hostPrefix: string, path: string, queryParameters: NSDictionary<string, string>): NSURL;

	hexadecimalStringFromData(data: NSData): string;

	parametersFromFBURL(url: NSURL): NSDictionary<string, any>;

	registerTransientObject(object: any): void;

	topMostViewController(): UIViewController;

	unregisterTransientObject(object: any): void;

	validateAppID(): void;

	validateDomainConfiguration(): void;

	validateFacebookReservedURLSchemes(): void;

	validateRequiredClientAccessToken(): string;

	validateURLSchemes(): void;
}
declare var FBSDKInternalUtilityProtocol: {
	prototype: FBSDKInternalUtilityProtocol;
};

declare class FBSDKKeychainStore extends NSObject implements FBSDKKeychainStoreProtocol {
	static alloc(): FBSDKKeychainStore; // inherited from NSObject

	static new(): FBSDKKeychainStore; // inherited from NSObject

	readonly accessGroup: string;

	readonly service: string;

	constructor(o: { service: string; accessGroup: string });

	dataForKey(key: string): NSData;

	dictionaryForKey(key: string): NSDictionary<string, any>;

	initWithServiceAccessGroup(service: string, accessGroup: string): this;

	queryForKey(key: string): NSMutableDictionary<string, any>;

	setDataForKeyAccessibility(value: NSData, key: string, accessibility: any): boolean;

	setDictionaryForKeyAccessibility(value: NSDictionary<string, any>, key: string, accessibility: any): boolean;

	setStringForKeyAccessibility(value: string, key: string, accessibility: any): boolean;

	stringForKey(key: string): string;
}

interface FBSDKKeychainStoreProtocol {
	dictionaryForKey(key: string): NSDictionary<string, any>;

	setDictionaryForKeyAccessibility(value: NSDictionary<string, any>, key: string, accessibility: any): boolean;

	setStringForKeyAccessibility(value: string, key: string, accessibility: any): boolean;

	stringForKey(key: string): string;
}
declare var FBSDKKeychainStoreProtocol: {
	prototype: FBSDKKeychainStoreProtocol;
};

interface FBSDKKeychainStoreProviding {
	createKeychainStoreWithServiceAccessGroup(service: string, accessGroup: string): FBSDKKeychainStoreProtocol;
}
declare var FBSDKKeychainStoreProviding: {
	prototype: FBSDKKeychainStoreProviding;
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

	readonly; // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

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

declare class FBSDKLogger extends NSObject implements FBSDKLogging {
	static alloc(): FBSDKLogger; // inherited from NSObject

	static new(): FBSDKLogger; // inherited from NSObject

	static singleShotLogEntryLogEntry(loggingBehavior: string, logEntry: string): void;

	readonly contents: string; // inherited from FBSDKLogging

	readonly loggingBehavior: string; // inherited from FBSDKLogging

	constructor(o: { loggingBehavior: string }); // inherited from FBSDKLogging

	initWithLoggingBehavior(loggingBehavior: string): this;

	logEntry(logEntry: string): void;
}

declare class FBSDKLoggerFactory extends NSObject implements __FBSDKLoggerCreating {
	static alloc(): FBSDKLoggerFactory; // inherited from NSObject

	static new(): FBSDKLoggerFactory; // inherited from NSObject

	createLoggerWithLoggingBehavior(loggingBehavior: string): FBSDKLogging;
}

interface FBSDKLogging {
	contents: string;

	loggingBehavior: string;

	initWithLoggingBehavior?(loggingBehavior: string): FBSDKLogging;

	logEntry(logEntry: string): void;
}
declare var FBSDKLogging: {
	prototype: FBSDKLogging;

	singleShotLogEntryLogEntry(loggingBehavior: string, logEntry: string): void;
};

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

interface FBSDKLoggingNotifying {
	logAndNotify(message: string): void;

	logAndNotifyAllowLogAsDeveloperError(message: string, allowLogAsDeveloperError: boolean): void;
}
declare var FBSDKLoggingNotifying: {
	prototype: FBSDKLoggingNotifying;
};

declare class FBSDKLoginTooltip extends NSObject {
	static alloc(): FBSDKLoginTooltip; // inherited from NSObject

	static new(): FBSDKLoginTooltip; // inherited from NSObject

	readonly enabled: boolean;

	readonly text: string;

	constructor(o: { text: string; enabled: boolean });

	initWithTextEnabled(text: string, enabled: boolean): this;
}

declare class FBSDKLogo extends FBSDKIcon {
	static alloc(): FBSDKLogo; // inherited from NSObject

	static new(): FBSDKLogo; // inherited from NSObject
}

interface FBSDKMACARuleMatching {
	enable(): void;

	processParametersEvent(params: NSDictionary<any, any>, event: string): NSDictionary<any, any>;
}
declare var FBSDKMACARuleMatching: {
	prototype: FBSDKMACARuleMatching;
};

interface FBSDKMacCatalystDetermining {
	fb_isMacCatalystApp: boolean;
}
declare var FBSDKMacCatalystDetermining: {
	prototype: FBSDKMacCatalystDetermining;
};

declare class FBSDKMath extends NSObject {
	static alloc(): FBSDKMath; // inherited from NSObject

	static ceilForSize(value: CGSize): CGSize;

	static floorForSize(value: CGSize): CGSize;

	static hashWithInteger(value: number): number;

	static hashWithIntegerArrayCount(values: interop.Pointer | interop.Reference<number>, count: number): number;

	static new(): FBSDKMath; // inherited from NSObject
}

declare class FBSDKMeasurementEvent extends NSObject implements FBSDKAppLinkEventPosting {
	static alloc(): FBSDKMeasurementEvent; // inherited from NSObject

	static new(): FBSDKMeasurementEvent; // inherited from NSObject

	postNotificationForEventNameArgs(name: string, args: NSDictionary<string, any>): void;
}

declare class FBSDKMeasurementEventListener extends NSObject {
	static alloc(): FBSDKMeasurementEventListener; // inherited from NSObject

	static new(): FBSDKMeasurementEventListener; // inherited from NSObject

	constructor(o: { eventLogger: FBSDKEventLogging; sourceApplicationTracker: FBSDKSourceApplicationTracking });

	initWithEventLoggerSourceApplicationTracker(eventLogger: FBSDKEventLogging, sourceApplicationTracker: FBSDKSourceApplicationTracking): this;

	registerForAppLinkMeasurementEvents(): void;
}

declare var FBSDKMeasurementEventNotification: string;

declare class FBSDKMetadataIndexer extends NSObject implements FBSDKMetadataIndexing {
	static alloc(): FBSDKMetadataIndexer; // inherited from NSObject

	static new(): FBSDKMetadataIndexer; // inherited from NSObject

	constructor(o: { userDataStore: FBSDKUserDataPersisting; swizzler: typeof NSObject });

	enable(): void;

	initWithUserDataStoreSwizzler(userDataStore: FBSDKUserDataPersisting, swizzler: typeof NSObject): this;
}

interface FBSDKMetadataIndexing {
	enable(): void;
}
declare var FBSDKMetadataIndexing: {
	prototype: FBSDKMetadataIndexing;
};

declare class FBSDKModelManager extends NSObject implements FBSDKEventProcessing, FBSDKIntegrityParametersProcessorProvider, FBSDKIntegrityProcessing, FBSDKRulesFromKeyProvider {
	static alloc(): FBSDKModelManager; // inherited from NSObject

	static new(): FBSDKModelManager; // inherited from NSObject

	static readonly shared: FBSDKModelManager;

	integrityParametersProcessor: FBSDKAppEventsParameterProcessing; // inherited from FBSDKIntegrityParametersProcessorProvider

	configureWithFeatureCheckerGraphRequestFactoryFileManagerStoreGetAppIDDataExtractorGateKeeperManagerSuggestedEventsIndexerFeatureExtractor(featureChecker: FBSDKFeatureChecking, graphRequestFactory: FBSDKGraphRequestFactoryProtocol, fileManager: FBSDKFileManaging, store: FBSDKDataPersisting, getAppID: () => string, dataExtractor: typeof NSObject, gateKeeperManager: typeof NSObject, suggestedEventsIndexer: FBSDKSuggestedEventsIndexerProtocol, featureExtractor: typeof NSObject): void;

	enable(): void;

	getRulesForKey(useCase: string): NSDictionary<string, any>;

	getThresholdsForKey(useCase: string): NSArray<number>;

	getWeightsForKey(useCase: string): NSData;

	processIntegrity(parameter: string): boolean;

	processSuggestedEventsDenseData(textFeature: string, denseData: interop.Pointer | interop.Reference<number>): string;
}

interface FBSDKMutableCopying extends NSCopying, NSMutableCopying, NSObjectProtocol {
	mutableCopy(): any;
}
declare var FBSDKMutableCopying: {
	prototype: FBSDKMutableCopying;
};

declare class FBSDKNetworkErrorChecker extends NSObject implements FBSDKNetworkErrorChecking {
	static alloc(): FBSDKNetworkErrorChecker; // inherited from NSObject

	static new(): FBSDKNetworkErrorChecker; // inherited from NSObject

	isNetworkError(error: NSError): boolean;
}

interface FBSDKNetworkErrorChecking {
	isNetworkError(error: NSError): boolean;
}
declare var FBSDKNetworkErrorChecking: {
	prototype: FBSDKNetworkErrorChecking;
};

declare var FBSDKNonJSONResponseProperty: string;

interface FBSDKObjectDecoding extends NSObjectProtocol {
	decodeObjectOfClassForKey(aClass: typeof NSObject, key: string): any;

	decodeObjectOfClassesForKey(classes: NSSet<typeof NSObject>, key: string): any;
}
declare var FBSDKObjectDecoding: {
	prototype: FBSDKObjectDecoding;
};

interface FBSDKOperatingSystemVersionComparing {
	fb_isOperatingSystemAtLeastVersion(version: NSOperatingSystemVersion): boolean;
}
declare var FBSDKOperatingSystemVersionComparing: {
	prototype: FBSDKOperatingSystemVersionComparing;
};

interface FBSDKPasteboard {
	_isGeneralPasteboard: boolean;

	name: string;

	dataForPasteboardType(pasteboardType: string): NSData;

	setDataForPasteboardType(data: NSData, pasteboardType: string): void;
}
declare var FBSDKPasteboard: {
	prototype: FBSDKPasteboard;
};

declare class FBSDKPaymentObserver extends NSObject implements FBSDKPaymentObserving, SKPaymentTransactionObserver {
	static alloc(): FBSDKPaymentObserver; // inherited from NSObject

	static new(): FBSDKPaymentObserver; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { paymentQueue: SKPaymentQueue; paymentProductRequestorFactory: FBSDKPaymentProductRequestorCreating });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithPaymentQueuePaymentProductRequestorFactory(paymentQueue: SKPaymentQueue, paymentProductRequestorFactory: FBSDKPaymentProductRequestorCreating): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	/**
	 * @since 13.0
	 * @deprecated 18.0
	 */
	paymentQueueDidChangeStorefront(queue: SKPaymentQueue): void;

	/**
	 * @since 14.0
	 * @deprecated 18.0
	 */
	paymentQueueDidRevokeEntitlementsForProductIdentifiers(queue: SKPaymentQueue, productIdentifiers: NSArray<string> | string[]): void;

	paymentQueueRemovedTransactions(queue: SKPaymentQueue, transactions: NSArray<SKPaymentTransaction> | SKPaymentTransaction[]): void;

	/**
	 * @since 3.0
	 * @deprecated 18.0
	 */
	paymentQueueRestoreCompletedTransactionsFailedWithError(queue: SKPaymentQueue, error: NSError): void;

	/**
	 * @since 3.0
	 * @deprecated 18.0
	 */
	paymentQueueRestoreCompletedTransactionsFinished(queue: SKPaymentQueue): void;

	/**
	 * @since 11.0
	 * @deprecated 18.0
	 */
	paymentQueueShouldAddStorePaymentForProduct(queue: SKPaymentQueue, payment: SKPayment, product: SKProduct): boolean;

	/**
	 * @since 6.0
	 * @deprecated 16.0
	 */
	paymentQueueUpdatedDownloads(queue: SKPaymentQueue, downloads: NSArray<SKDownload> | SKDownload[]): void;

	paymentQueueUpdatedTransactions(queue: SKPaymentQueue, transactions: NSArray<SKPaymentTransaction> | SKPaymentTransaction[]): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startObservingTransactions(): void;

	stopObservingTransactions(): void;
}

interface FBSDKPaymentObserving {
	startObservingTransactions(): void;

	stopObservingTransactions(): void;
}
declare var FBSDKPaymentObserving: {
	prototype: FBSDKPaymentObserving;
};

declare class FBSDKPaymentProductRequestor extends NSObject implements SKProductsRequestDelegate {
	static alloc(): FBSDKPaymentProductRequestor; // inherited from NSObject

	static new(): FBSDKPaymentProductRequestor; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { transaction: SKPaymentTransaction; settings: FBSDKSettingsProtocol; eventLogger: FBSDKEventLogging; gateKeeperManager: typeof NSObject; store: FBSDKDataPersisting; loggerFactory: __FBSDKLoggerCreating; productsRequestFactory: FBSDKProductsRequestCreating; appStoreReceiptProvider: FBSDKAppStoreReceiptProviding });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithTransactionSettingsEventLoggerGateKeeperManagerStoreLoggerFactoryProductsRequestFactoryAppStoreReceiptProvider(transaction: SKPaymentTransaction, settings: FBSDKSettingsProtocol, eventLogger: FBSDKEventLogging, gateKeeperManager: typeof NSObject, store: FBSDKDataPersisting, loggerFactory: __FBSDKLoggerCreating, productRequestFactory: FBSDKProductsRequestCreating, receiptProvider: FBSDKAppStoreReceiptProviding): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	productsRequestDidReceiveResponse(request: SKProductsRequest, response: SKProductsResponse): void;

	requestDidFailWithError(request: SKRequest, error: NSError): void;

	requestDidFinish(request: SKRequest): void;

	resolveProducts(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface FBSDKPaymentProductRequestorCreating {
	createRequestorWithTransaction(transaction: SKPaymentTransaction): FBSDKPaymentProductRequestor;
}
declare var FBSDKPaymentProductRequestorCreating: {
	prototype: FBSDKPaymentProductRequestorCreating;
};

declare class FBSDKPaymentProductRequestorFactory extends NSObject implements FBSDKPaymentProductRequestorCreating {
	static alloc(): FBSDKPaymentProductRequestorFactory; // inherited from NSObject

	static new(): FBSDKPaymentProductRequestorFactory; // inherited from NSObject

	createRequestorWithTransaction(transaction: SKPaymentTransaction): FBSDKPaymentProductRequestor;
}

declare const enum FBSDKProductAvailability {
	InStock = 0,

	OutOfStock = 1,

	PreOrder = 2,

	AvailableForOrder = 3,

	Discontinued = 4,
}

declare const enum FBSDKProductCondition {
	New = 0,

	Refurbished = 1,

	Used = 2,
}

declare class FBSDKProductRequestFactory extends NSObject implements FBSDKProductsRequestCreating {
	static alloc(): FBSDKProductRequestFactory; // inherited from NSObject

	static new(): FBSDKProductRequestFactory; // inherited from NSObject

	createWithProductIdentifiers(identifiers: NSSet<string>): FBSDKProductsRequest;
}

interface FBSDKProductsRequest {
	delegate: SKProductsRequestDelegate;

	cancel(): void;

	start(): void;
}
declare var FBSDKProductsRequest: {
	prototype: FBSDKProductsRequest;
};

interface FBSDKProductsRequestCreating {
	createWithProductIdentifiers(identifiers: NSSet<string>): FBSDKProductsRequest;
}
declare var FBSDKProductsRequestCreating: {
	prototype: FBSDKProductsRequestCreating;
};

declare class FBSDKProfile extends NSObject implements FBSDKProfileProviding, NSSecureCoding {
	static alloc(): FBSDKProfile; // inherited from NSObject

	static currentProfile(): FBSDKProfile;

	static enableUpdatesOnAccessTokenChange(enabled: boolean): void;

	static fetchCachedProfile(): FBSDKProfile;

	static loadCurrentProfileWithCompletion(completion: (p1: FBSDKProfile, p2: NSError) => void): void;

	static new(): FBSDKProfile; // inherited from NSObject

	static setCurrentProfile(newValue: FBSDKProfile): void;

	static setIsUpdatedWithAccessTokenChange(value: boolean): void;

	static supportsSecureCoding(): boolean;

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

	readonly permissions: NSSet<string>;

	readonly refreshDate: Date;

	readonly userID: string;

	static isUpdatedWithAccessTokenChange: boolean;

	static currentProfile: FBSDKProfile; // inherited from FBSDKProfileProviding

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { userID: string; firstName: string; middleName: string; lastName: string; name: string; linkURL: NSURL; refreshDate: Date; imageURL: NSURL; email: string; friendIDs: NSArray<string> | string[]; birthday: Date; ageRange: FBSDKUserAgeRange; hometown: FBSDKLocation; location: FBSDKLocation; gender: string; isLimited: boolean; permissions: NSSet<string> });

	constructor(o: { userID: string; firstName: string; middleName: string; lastName: string; name: string; linkURL: NSURL; refreshDate: Date; imageURL: NSURL; email: string; friendIDs: NSArray<string> | string[]; birthday: Date; ageRange: FBSDKUserAgeRange; hometown: FBSDKLocation; location: FBSDKLocation; gender: string; permissions: NSSet<string> });

	constructor(o: { userID: string; firstName: string; middleName: string; lastName: string; name: string; linkURL: NSURL; refreshDate: Date; permissions: NSSet<string> });

	encodeWithCoder(coder: NSCoder): void;

	imageURLForPictureModeSize(pictureMode: FBSDKProfilePictureMode, size: CGSize): NSURL;

	initWithCoder(coder: NSCoder): this;

	initWithUserIDFirstNameMiddleNameLastNameNameLinkURLRefreshDateImageURLEmailFriendIDsBirthdayAgeRangeHometownLocationGenderIsLimitedPermissions(userID: string, firstName: string, middleName: string, lastName: string, name: string, linkURL: NSURL, refreshDate: Date, imageURL: NSURL, email: string, friendIDs: NSArray<string> | string[], birthday: Date, ageRange: FBSDKUserAgeRange, hometown: FBSDKLocation, location: FBSDKLocation, gender: string, isLimited: boolean, permissions: NSSet<string>): this;

	initWithUserIDFirstNameMiddleNameLastNameNameLinkURLRefreshDateImageURLEmailFriendIDsBirthdayAgeRangeHometownLocationGenderPermissions(userID: string, firstName: string, middleName: string, lastName: string, name: string, linkURL: NSURL, refreshDate: Date, imageURL: NSURL, email: string, friendIDs: NSArray<string> | string[], birthday: Date, ageRange: FBSDKUserAgeRange, hometown: FBSDKLocation, location: FBSDKLocation, gender: string, permissions: NSSet<string>): this;

	initWithUserIDFirstNameMiddleNameLastNameNameLinkURLRefreshDatePermissions(userID: string, firstName: string, middleName: string, lastName: string, name: string, linkURL: NSURL, refreshDate: Date, permissions: NSSet<string>): this;
}

declare var FBSDKProfileChangeNewKey: string;

declare var FBSDKProfileChangeOldKey: string;

declare var FBSDKProfileDidChangeNotification: string;

declare const enum FBSDKProfilePictureMode {
	Square = 0,

	Normal = 1,

	Album = 2,

	Small = 3,

	Large = 4,
}

declare class FBSDKProfilePictureView extends UIView {
	static alloc(): FBSDKProfilePictureView; // inherited from NSObject

	static appearance(): FBSDKProfilePictureView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKProfilePictureView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKProfilePictureView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): FBSDKProfilePictureView; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKProfilePictureView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): FBSDKProfilePictureView; // inherited from UIAppearance

	static new(): FBSDKProfilePictureView; // inherited from NSObject

	pictureMode: FBSDKProfilePictureMode;

	profileID: string;

	constructor(o: { profile: CGRect });

	initWithProfile(frame: CGRect, profile: FBSDKProfile): this;

	setNeedsImageUpdate(): void;
}

interface FBSDKProfileProviding {}
declare var FBSDKProfileProviding: {
	prototype: FBSDKProfileProviding;

	currentProfile(): FBSDKProfile;

	fetchCachedProfile(): FBSDKProfile;

	setCurrentProfile(newValue: FBSDKProfile): void;
};

declare class FBSDKProtectedModeManager extends NSObject implements FBSDKAppEventsParameterProcessing {
	static alloc(): FBSDKProtectedModeManager; // inherited from NSObject

	static isProtectedModeAppliedWithParameters(parameters: NSDictionary<string, any>): boolean;

	static new(): FBSDKProtectedModeManager; // inherited from NSObject

	enable(): void;

	processParametersEventName(parameters: NSDictionary<string, any>, eventName: string): NSDictionary<string, any>;
}

declare class FBSDKRestrictiveDataFilterManager extends NSObject implements FBSDKAppEventsParameterProcessing, FBSDKEventsProcessing {
	static alloc(): FBSDKRestrictiveDataFilterManager; // inherited from NSObject

	static new(): FBSDKRestrictiveDataFilterManager; // inherited from NSObject

	constructor(o: { serverConfigurationProvider: FBSDKServerConfigurationProviding });

	enable(): void;

	initWithServerConfigurationProvider(serverConfigurationProvider: FBSDKServerConfigurationProviding): this;

	processEvents(events: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[]): void;

	processParametersEventName(parameters: NSDictionary<string, any>, eventName: string): NSDictionary<string, any>;
}

declare class FBSDKRestrictiveEventFilter extends NSObject {
	static alloc(): FBSDKRestrictiveEventFilter; // inherited from NSObject

	static new(): FBSDKRestrictiveEventFilter; // inherited from NSObject

	readonly eventName: string;

	readonly restrictiveParameters: NSDictionary<string, any>;

	constructor(o: { eventName: string; restrictiveParameters: NSDictionary<string, any> });

	initWithEventNameRestrictiveParameters(eventName: string, restrictiveParameters: NSDictionary<string, any>): this;
}

interface FBSDKRulesFromKeyProvider {
	getRulesForKey(useCase: string): NSDictionary<string, any>;
}
declare var FBSDKRulesFromKeyProvider: {
	prototype: FBSDKRulesFromKeyProvider;
};

declare class FBSDKSKAdNetworkEvent extends NSObject {
	static alloc(): FBSDKSKAdNetworkEvent; // inherited from NSObject

	static new(): FBSDKSKAdNetworkEvent; // inherited from NSObject

	readonly eventName: string;

	values: NSDictionary<string, number>;

	constructor(o: { JSON: NSDictionary<string, any> });

	initWithJSON(json: NSDictionary<string, any>): this;
}

declare class FBSDKSKAdNetworkReporter extends NSObject implements FBSDKAppEventsReporter, FBSKAdNetworkReporting {
	static alloc(): FBSDKSKAdNetworkReporter; // inherited from NSObject

	static new(): FBSDKSKAdNetworkReporter; // inherited from NSObject

	conversionValueUpdater: typeof NSObject;

	dataStore: FBSDKDataPersisting;

	graphRequestFactory: FBSDKGraphRequestFactoryProtocol;

	constructor(o: { graphRequestFactory: FBSDKGraphRequestFactoryProtocol; dataStore: FBSDKDataPersisting; conversionValueUpdater: typeof NSObject });

	checkAndRevokeTimer(): void;

	enable(): void;

	initWithGraphRequestFactoryDataStoreConversionValueUpdater(graphRequestFactory: FBSDKGraphRequestFactoryProtocol, dataStore: FBSDKDataPersisting, conversionValueUpdater: typeof NSObject): this;

	isReportingEvent(event: string): boolean;

	recordAndUpdateEventCurrencyValue(event: string, currency: string, value: number): void;

	recordAndUpdateEventCurrencyValueParameters(event: string, currency: string, value: number, parameters: NSDictionary<string, any>): void;

	shouldCutoff(): boolean;
}

declare class FBSDKSKAdNetworkReporterV2 extends NSObject implements FBSDKAppEventsReporter, FBSKAdNetworkReporting {
	static alloc(): FBSDKSKAdNetworkReporterV2; // inherited from NSObject

	static new(): FBSDKSKAdNetworkReporterV2; // inherited from NSObject

	conversionValueUpdater: typeof NSObject;

	dataStore: FBSDKDataPersisting;

	graphRequestFactory: FBSDKGraphRequestFactoryProtocol;

	constructor(o: { graphRequestFactory: FBSDKGraphRequestFactoryProtocol; dataStore: FBSDKDataPersisting; conversionValueUpdater: typeof NSObject });

	checkAndRevokeTimer(): void;

	enable(): void;

	initWithGraphRequestFactoryDataStoreConversionValueUpdater(graphRequestFactory: FBSDKGraphRequestFactoryProtocol, dataStore: FBSDKDataPersisting, conversionValueUpdater: typeof NSObject): this;

	isReportingEvent(event: string): boolean;

	recordAndUpdateEventCurrencyValue(event: string, currency: string, value: number): void;

	recordAndUpdateEventCurrencyValueParameters(event: string, currency: string, value: number, parameters: NSDictionary<string, any>): void;

	shouldCutoff(): boolean;
}

declare class FBSDKServerConfiguration extends NSObject implements NSCopying, NSObjectProtocol, NSSecureCoding {
	static alloc(): FBSDKServerConfiguration; // inherited from NSObject

	static new(): FBSDKServerConfiguration; // inherited from NSObject

	readonly AAMRules: NSDictionary<string, any>;

	readonly advertisingIDEnabled: boolean;

	readonly appID: string;

	readonly appName: string;

	readonly codelessEventsEnabled: boolean;

	readonly defaultShareMode: string;

	readonly defaults: boolean;

	readonly errorConfiguration: FBSDKErrorConfiguration;

	readonly eventBindings: NSArray<NSDictionary<string, any>>;

	readonly implicitLoggingEnabled: boolean;

	readonly implicitPurchaseLoggingEnabled: boolean;

	readonly loggingToken: string;

	readonly loginTooltipEnabled: boolean;

	readonly loginTooltipText: string;

	readonly migratedAutoLogValues: NSDictionary<string, any>;

	readonly protectedModeRules: NSDictionary<string, any>;

	readonly restrictiveParams: NSDictionary<string, any>;

	sessionTimeoutInterval: number;

	readonly smartLoginBookmarkIconURL: NSURL;

	readonly smartLoginMenuIconURL: NSURL;

	readonly smartLoginOptions: FBSDKServerConfigurationSmartLoginOptions;

	readonly suggestedEventsSetting: NSDictionary<string, any>;

	readonly timestamp: Date;

	readonly uninstallTrackingEnabled: boolean;

	readonly updateMessage: string;

	readonly version: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: {
		appID: string;
		appName: string;
		loginTooltipEnabled: boolean;
		loginTooltipText: string;
		defaultShareMode: string;
		advertisingIDEnabled: boolean;
		implicitLoggingEnabled: boolean;
		implicitPurchaseLoggingEnabled: boolean;
		codelessEventsEnabled: boolean;
		uninstallTrackingEnabled: boolean;
		dialogConfigurations: NSDictionary<string, any>;
		dialogFlows: NSDictionary<string, any>;
		timestamp: Date;
		errorConfiguration: FBSDKErrorConfiguration;
		sessionTimeoutInterval: number;
		defaults: boolean;
		loggingToken: string;
		smartLoginOptions: FBSDKServerConfigurationSmartLoginOptions;
		smartLoginBookmarkIconURL: NSURL;
		smartLoginMenuIconURL: NSURL;
		updateMessage: string;
		eventBindings: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[];
		restrictiveParams: NSDictionary<string, any>;
		AAMRules: NSDictionary<string, any>;
		suggestedEventsSetting: NSDictionary<string, any>;
		protectedModeRules: NSDictionary<string, any>;
		migratedAutoLogValues: NSDictionary<string, any>;
	});

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	dialogConfigurationForDialogName(dialogName: string): FBSDKDialogConfiguration;

	encodeWithCoder(coder: NSCoder): void;

	initWithAppIDAppNameLoginTooltipEnabledLoginTooltipTextDefaultShareModeAdvertisingIDEnabledImplicitLoggingEnabledImplicitPurchaseLoggingEnabledCodelessEventsEnabledUninstallTrackingEnabledDialogConfigurationsDialogFlowsTimestampErrorConfigurationSessionTimeoutIntervalDefaultsLoggingTokenSmartLoginOptionsSmartLoginBookmarkIconURLSmartLoginMenuIconURLUpdateMessageEventBindingsRestrictiveParamsAAMRulesSuggestedEventsSettingProtectedModeRulesMigratedAutoLogValues(
		appID: string,
		appName: string,
		loginTooltipEnabled: boolean,
		loginTooltipText: string,
		defaultShareMode: string,
		advertisingIDEnabled: boolean,
		implicitLoggingEnabled: boolean,
		implicitPurchaseLoggingEnabled: boolean,
		codelessEventsEnabled: boolean,
		uninstallTrackingEnabled: boolean,
		dialogConfigurations: NSDictionary<string, any>,
		dialogFlows: NSDictionary<string, any>,
		timestamp: Date,
		errorConfiguration: FBSDKErrorConfiguration,
		sessionTimeoutInterval: number,
		defaults: boolean,
		loggingToken: string,
		smartLoginOptions: FBSDKServerConfigurationSmartLoginOptions,
		smartLoginBookmarkIconURL: NSURL,
		smartLoginMenuIconURL: NSURL,
		updateMessage: string,
		eventBindings: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[],
		restrictiveParams: NSDictionary<string, any>,
		AAMRules: NSDictionary<string, any>,
		suggestedEventsSetting: NSDictionary<string, any>,
		protectedModeRules: NSDictionary<string, any>,
		migratedAutoLogValues: NSDictionary<string, any>
	): this;

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

	useNativeDialogForDialogName(dialogName: string): boolean;

	useSafariViewControllerForDialogName(dialogName: string): boolean;
}

declare class FBSDKServerConfigurationManager extends NSObject implements FBSDKServerConfigurationProviding {
	static alloc(): FBSDKServerConfigurationManager; // inherited from NSObject

	static new(): FBSDKServerConfigurationManager; // inherited from NSObject

	dialogConfigurationMapBuilder: FBSDKDialogConfigurationMapBuilding;

	graphRequestConnectionFactory: FBSDKGraphRequestConnectionFactoryProtocol;

	graphRequestFactory: FBSDKGraphRequestFactoryProtocol;

	static readonly shared: FBSDKServerConfigurationManager;

	cachedServerConfiguration(): FBSDKServerConfiguration;

	clearCache(): void;

	configureWithGraphRequestFactoryGraphRequestConnectionFactoryDialogConfigurationMapBuilder(graphRequestFactory: FBSDKGraphRequestFactoryProtocol, graphRequestConnectionFactory: FBSDKGraphRequestConnectionFactoryProtocol, dialogConfigurationMapBuilder: FBSDKDialogConfigurationMapBuilding): void;

	loadServerConfigurationWithCompletionBlock(completionBlock: (p1: FBSDKServerConfiguration, p2: NSError) => void): void;

	processLoadRequestResponseErrorAppID(result: any, error: NSError, appID: string): void;

	requestToLoadServerConfiguration(appID: string): FBSDKGraphRequest;
}

interface FBSDKServerConfigurationProviding {
	cachedServerConfiguration(): FBSDKServerConfiguration;

	loadServerConfigurationWithCompletionBlock(completionBlock: (p1: FBSDKServerConfiguration, p2: NSError) => void): void;

	processLoadRequestResponseErrorAppID(result: any, error: NSError, appID: string): void;

	requestToLoadServerConfiguration(appID: string): FBSDKGraphRequest;
}
declare var FBSDKServerConfigurationProviding: {
	prototype: FBSDKServerConfigurationProviding;
};

declare const enum FBSDKServerConfigurationSmartLoginOptions {
	Unknown = 0,

	Enabled = 1,

	RequireConfirmation = 2,
}

declare var FBSDKServerConfigurationVersion: number;

declare class FBSDKSettings extends NSObject implements FBSDKClientTokenProviding, FBSDKSettingsLogging, FBSDKSettingsProtocol {
	static alloc(): FBSDKSettings; // inherited from NSObject

	static new(): FBSDKSettings; // inherited from NSObject

	JPEGCompressionQuality: number;

	advertisingTrackingStatus: FBSDKAdvertisingTrackingStatus;

	autoLogAppEventsEnabled: boolean;

	readonly defaultGraphAPIVersion: string;

	isAutoLogAppEventsEnabled: boolean;

	isSKAdNetworkReportEnabled: boolean;

	skAdNetworkReportEnabled: boolean;

	static readonly sharedSettings: FBSDKSettings;

	advertiserIDCollectionEnabled: boolean; // inherited from FBSDKSettingsProtocol

	advertiserTrackingEnabled: boolean; // inherited from FBSDKSettingsProtocol

	readonly advertiserTrackingEnabledTimestamp: Date; // inherited from FBSDKSettingsProtocol

	appID: string; // inherited from FBSDKSettingsProtocol

	appURLSchemeSuffix: string; // inherited from FBSDKSettingsProtocol

	readonly clientToken: string; // inherited from FBSDKClientTokenProviding

	codelessDebugLogEnabled: boolean; // inherited from FBSDKSettingsProtocol

	displayName: string; // inherited from FBSDKSettingsProtocol

	facebookDomainPart: string; // inherited from FBSDKSettingsProtocol

	readonly graphAPIDebugParamValue: string; // inherited from FBSDKSettingsProtocol

	readonly graphAPIDebugParameterValue: string; // inherited from FBSDKSettingsProtocol

	graphAPIVersion: string; // inherited from FBSDKSettingsProtocol

	readonly installTimestamp: Date; // inherited from FBSDKSettingsProtocol

	readonly isATETimeSufficientlyDelayed: boolean; // inherited from FBSDKSettingsProtocol

	isAdvertiserIDCollectionEnabled: boolean; // inherited from FBSDKSettingsProtocol

	isAdvertiserTrackingEnabled: boolean; // inherited from FBSDKSettingsProtocol

	isCodelessDebugLogEnabled: boolean; // inherited from FBSDKSettingsProtocol

	readonly isDataProcessingRestricted: boolean; // inherited from FBSDKSettingsProtocol

	isDomainErrorEnabled: boolean; // inherited from FBSDKSettingsProtocol

	isEventDataUsageLimited: boolean; // inherited from FBSDKSettingsProtocol

	isGraphErrorRecoveryEnabled: boolean; // inherited from FBSDKSettingsProtocol

	readonly isSetATETimeExceedsInstallTime: boolean; // inherited from FBSDKSettingsProtocol

	loggingBehaviors: NSSet<string>; // inherited from FBSDKSettingsProtocol

	readonly persistableDataProcessingOptions: NSDictionary<string, any>; // inherited from FBSDKSettingsProtocol

	readonly sdkVersion: string; // inherited from FBSDKSettingsProtocol

	shouldUseCachedValuesForExpensiveMetadata: boolean; // inherited from FBSDKSettingsProtocol

	shouldUseTokenOptimizations: boolean; // inherited from FBSDKSettingsProtocol

	userAgentSuffix: string; // inherited from FBSDKSettingsProtocol

	disableLoggingBehavior(loggingBehavior: string): void;

	enableLoggingBehavior(loggingBehavior: string): void;

	logIfSDKSettingsChanged(): void;

	logWarnings(): void;

	recordInstall(): void;

	setDataProcessingOptions(options: NSArray<string> | string[]): void;

	setDataProcessingOptionsCountryState(options: NSArray<string> | string[], country: number, state: number): void;
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
	advertiserIDCollectionEnabled: boolean;

	advertiserTrackingEnabled: boolean;

	advertiserTrackingEnabledTimestamp: Date;

	advertisingTrackingStatus: FBSDKAdvertisingTrackingStatus;

	appID: string;

	appURLSchemeSuffix: string;

	clientToken: string;

	codelessDebugLogEnabled: boolean;

	displayName: string;

	facebookDomainPart: string;

	graphAPIDebugParamValue: string;

	graphAPIDebugParameterValue: string;

	graphAPIVersion: string;

	installTimestamp: Date;

	isATETimeSufficientlyDelayed: boolean;

	isAdvertiserIDCollectionEnabled: boolean;

	isAdvertiserTrackingEnabled: boolean;

	isAutoLogAppEventsEnabled: boolean;

	isCodelessDebugLogEnabled: boolean;

	isDataProcessingRestricted: boolean;

	isDomainErrorEnabled: boolean;

	isEventDataUsageLimited: boolean;

	isGraphErrorRecoveryEnabled: boolean;

	isSKAdNetworkReportEnabled: boolean;

	isSetATETimeExceedsInstallTime: boolean;

	loggingBehaviors: NSSet<string>;

	persistableDataProcessingOptions: NSDictionary<string, any>;

	sdkVersion: string;

	shouldUseCachedValuesForExpensiveMetadata: boolean;

	shouldUseTokenOptimizations: boolean;

	userAgentSuffix: string;

	setDataProcessingOptions(options: NSArray<string> | string[]): void;

	setDataProcessingOptionsCountryState(options: NSArray<string> | string[], country: number, state: number): void;
}
declare var FBSDKSettingsProtocol: {
	prototype: FBSDKSettingsProtocol;
};

declare class FBSDKShimGraphRequestInterceptor extends NSObject {
	static alloc(): FBSDKShimGraphRequestInterceptor; // inherited from NSObject

	static new(): FBSDKShimGraphRequestInterceptor; // inherited from NSObject

	static readonly shared: FBSDKShimGraphRequestInterceptor;

	executeWithRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): void;

	shouldInterceptRequest(request: NSURLRequest): boolean;
}

interface FBSDKSourceApplicationTracking {
	registerAutoResetSourceApplication(): void;

	setSourceApplicationIsFromAppLink(sourceApplication: string, isFromAppLink: boolean): void;

	setSourceApplicationOpenURL(sourceApplication: string, url: NSURL): void;
}
declare var FBSDKSourceApplicationTracking: {
	prototype: FBSDKSourceApplicationTracking;
};

declare class FBSDKSuggestedEventsIndexer extends NSObject implements FBSDKSuggestedEventsIndexerProtocol {
	static alloc(): FBSDKSuggestedEventsIndexer; // inherited from NSObject

	static new(): FBSDKSuggestedEventsIndexer; // inherited from NSObject

	constructor(o: { graphRequestFactory: FBSDKGraphRequestFactoryProtocol; serverConfigurationProvider: FBSDKServerConfigurationProviding; swizzler: typeof NSObject; settings: FBSDKSettingsProtocol; eventLogger: FBSDKEventLogging; featureExtractor: typeof NSObject; eventProcessor: FBSDKEventProcessing });

	enable(): void;

	initWithGraphRequestFactoryServerConfigurationProviderSwizzlerSettingsEventLoggerFeatureExtractorEventProcessor(graphRequestFactory: FBSDKGraphRequestFactoryProtocol, serverConfigurationProvider: FBSDKServerConfigurationProviding, swizzler: typeof NSObject, settings: FBSDKSettingsProtocol, eventLogger: FBSDKEventLogging, featureExtractor: typeof NSObject, eventProcessor: FBSDKEventProcessing): this;
}

interface FBSDKSuggestedEventsIndexerProtocol {
	enable(): void;
}
declare var FBSDKSuggestedEventsIndexerProtocol: {
	prototype: FBSDKSuggestedEventsIndexerProtocol;
};

declare class FBSDKSwizzler extends NSObject implements FBSDKSwizzling {
	static alloc(): FBSDKSwizzler; // inherited from NSObject

	static new(): FBSDKSwizzler; // inherited from NSObject

	static printSwizzles(): void;

	static swizzleSelectorOnClassWithBlockNamed(aSelector: string, aClass: typeof NSObject, block: () => void, aName: string): void;

	static unswizzleSelectorOnClassNamed(aSelector: string, aClass: typeof NSObject, aName: string): void;
}

interface FBSDKSwizzling {}
declare var FBSDKSwizzling: {
	prototype: FBSDKSwizzling;

	swizzleSelectorOnClassWithBlockNamed(aSelector: string, aClass: typeof NSObject, block: () => void, aName: string): void;
};

declare class FBSDKTimeSpentData extends NSObject implements FBSDKSourceApplicationTracking, FBSDKTimeSpentRecording {
	static alloc(): FBSDKTimeSpentData; // inherited from NSObject

	static new(): FBSDKTimeSpentData; // inherited from NSObject

	constructor(o: { eventLogger: FBSDKEventLogging; serverConfigurationProvider: FBSDKServerConfigurationProviding });

	initWithEventLoggerServerConfigurationProvider(eventLogger: FBSDKEventLogging, serverConfigurationProvider: FBSDKServerConfigurationProviding): this;

	registerAutoResetSourceApplication(): void;

	restore(calledFromActivateApp: boolean): void;

	setSourceApplicationIsFromAppLink(sourceApplication: string, isFromAppLink: boolean): void;

	setSourceApplicationOpenURL(sourceApplication: string, url: NSURL): void;

	suspend(): void;
}

interface FBSDKTimeSpentRecording {
	restore(calledFromActivateApp: boolean): void;

	suspend(): void;
}
declare var FBSDKTimeSpentRecording: {
	prototype: FBSDKTimeSpentRecording;
};

interface FBSDKTokenCaching {
	accessToken: FBSDKAccessToken;

	authenticationToken: FBSDKAuthenticationToken;
}
declare var FBSDKTokenCaching: {
	prototype: FBSDKTokenCaching;
};

interface FBSDKTokenStringProviding {}
declare var FBSDKTokenStringProviding: {
	prototype: FBSDKTokenStringProviding;
};

interface FBSDKTransactionObserving {
	startObserving(): void;

	stopObserving(): void;
}
declare var FBSDKTransactionObserving: {
	prototype: FBSDKTransactionObserving;
};

declare class FBSDKTransformer extends NSObject {
	static alloc(): FBSDKTransformer; // inherited from NSObject

	static new(): FBSDKTransformer; // inherited from NSObject

	CATransform3DConcatB(a: CATransform3D, b: CATransform3D): CATransform3D;

	CATransform3DMakeScaleSySz(sx: number, sy: number, sz: number): CATransform3D;

	CATransform3DMakeTranslationTyTz(tx: number, ty: number, tz: number): CATransform3D;
}

declare class FBSDKTransformerGraphRequestFactory extends NSObject {
	static alloc(): FBSDKTransformerGraphRequestFactory; // inherited from NSObject

	static new(): FBSDKTransformerGraphRequestFactory; // inherited from NSObject

	static readonly shared: FBSDKTransformerGraphRequestFactory;

	callCapiGatewayAPIWithUserAgent(parameters: NSDictionary<string, any>, userAgent: string): void;

	configureWithDatasetIDUrlAccessKey(datasetID: string, url: string, accessKey: string): void;
}

declare class FBSDKURL extends NSObject implements FBSDKAppLinkURL {
	static URLWithInboundURLSourceApplication(url: NSURL, sourceApplication: string): FBSDKURL;

	static URLWithURL(url: NSURL): FBSDKURL;

	static alloc(): FBSDKURL; // inherited from NSObject

	static configureWithSettingsAppLinkFactoryAppLinkTargetFactoryAppLinkEventPoster(settings: FBSDKSettingsProtocol, appLinkFactory: FBSDKAppLinkCreating, appLinkTargetFactory: FBSDKAppLinkTargetCreating, appLinkEventPoster: FBSDKAppLinkEventPosting): void;

	static new(): FBSDKURL; // inherited from NSObject

	readonly appLinkData: NSDictionary<string, any>;

	readonly appLinkReferer: FBSDKAppLinkProtocol;

	readonly inputQueryParameters: NSDictionary<string, any>;

	readonly inputURL: NSURL;

	readonly isAutoAppLink: boolean;

	readonly targetQueryParameters: NSDictionary<string, any>;

	readonly targetURL: NSURL;

	readonly appLinkExtras: NSDictionary<string, any>; // inherited from FBSDKAppLinkURL
}

interface FBSDKURLHosting {
	appURLWithHostPathQueryParametersError(host: string, path: string, queryParameters: NSDictionary<string, string>): NSURL;

	facebookURLWithHostPrefixPathQueryParametersError(hostPrefix: string, path: string, queryParameters: NSDictionary<string, string>): NSURL;
}
declare var FBSDKURLHosting: {
	prototype: FBSDKURLHosting;
};

interface FBSDKURLOpener {
	openURLSenderHandler(url: NSURL, sender: FBSDKURLOpening, handler: (p1: boolean, p2: NSError) => void): void;

	openURLWithSafariViewControllerSenderFromViewControllerHandler(url: NSURL, sender: FBSDKURLOpening, fromViewController: UIViewController, handler: (p1: boolean, p2: NSError) => void): void;
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

	makeOpener?(): FBSDKURLOpening;
};

declare var FBSDKURLSchemeFacebookAPI: string;

declare var FBSDKURLSchemeHTTP: string;

declare var FBSDKURLSchemeHTTPS: string;

declare var FBSDKURLSchemeMessengerApp: string;

declare var FBSDKURLSchemeWeb: string;

declare class FBSDKURLSessionProxyFactory extends NSObject implements FBSDKURLSessionProxyProviding {
	static alloc(): FBSDKURLSessionProxyFactory; // inherited from NSObject

	static new(): FBSDKURLSessionProxyFactory; // inherited from NSObject

	createSessionProxyWithDelegateQueue(delegate: NSURLSessionDataDelegate, queue: NSOperationQueue): FBSDKURLSessionProxying;
}

interface FBSDKURLSessionProxyProviding {
	createSessionProxyWithDelegateQueue(delegate: NSURLSessionDataDelegate, queue: NSOperationQueue): FBSDKURLSessionProxying;
}
declare var FBSDKURLSessionProxyProviding: {
	prototype: FBSDKURLSessionProxyProviding;
};

interface FBSDKURLSessionProxying {
	delegateQueue: NSOperationQueue;

	executeURLRequestCompletionHandler(request: NSURLRequest, handler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): void;

	invalidateAndCancel(): void;
}
declare var FBSDKURLSessionProxying: {
	prototype: FBSDKURLSessionProxying;
};

declare class FBSDKUnarchiverProvider extends NSObject implements FBSDKUnarchiverProviding {
	static alloc(): FBSDKUnarchiverProvider; // inherited from NSObject

	static createInsecureUnarchiverFor(data: NSData): FBSDKObjectDecoding;

	static createSecureUnarchiverFor(data: NSData): FBSDKObjectDecoding;

	static new(): FBSDKUnarchiverProvider; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

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

interface FBSDKUnarchiverProviding extends NSObjectProtocol {}
declare var FBSDKUnarchiverProviding: {
	prototype: FBSDKUnarchiverProviding;

	createInsecureUnarchiverFor(data: NSData): FBSDKObjectDecoding;

	createSecureUnarchiverFor(data: NSData): FBSDKObjectDecoding;
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

	readonly; // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

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

interface FBSDKUserDataPersisting {
	clearUserData(): void;

	clearUserDataForType(type: string): void;

	getInternalHashedDataForType(type: string): string;

	getUserData(): string;

	setEnabledRules(rules: NSArray<string> | string[]): void;

	setInternalHashDataForType(hashData: string, type: string): void;

	setUserDataForType(data: string, type: string): void;

	setUserEmailFirstNameLastNamePhoneDateOfBirthGenderCityStateZipCountryExternalId(email: string, firstName: string, lastName: string, phone: string, dateOfBirth: string, gender: string, city: string, state: string, zip: string, country: string, externalId: string): void;
}
declare var FBSDKUserDataPersisting: {
	prototype: FBSDKUserDataPersisting;
};

declare class FBSDKUserDataStore extends NSObject implements FBSDKUserDataPersisting {
	static alloc(): FBSDKUserDataStore; // inherited from NSObject

	static new(): FBSDKUserDataStore; // inherited from NSObject

	clearUserData(): void;

	clearUserDataForType(type: string): void;

	getInternalHashedDataForType(type: string): string;

	getUserData(): string;

	setEnabledRules(rules: NSArray<string> | string[]): void;

	setInternalHashDataForType(hashData: string, type: string): void;

	setUserDataForType(data: string, type: string): void;

	setUserEmailFirstNameLastNamePhoneDateOfBirthGenderCityStateZipCountryExternalId(email: string, firstName: string, lastName: string, phone: string, dateOfBirth: string, gender: string, city: string, state: string, zip: string, country: string, externalId: string): void;
}

interface FBSDKUserIDProviding {
	userID: string;
}
declare var FBSDKUserIDProviding: {
	prototype: FBSDKUserIDProviding;
};

declare class FBSDKUtility extends NSObject {
	static SHA256Hash(input: NSObject): string;

	static URLDecode(value: string): string;

	static URLEncode(value: string): string;

	static alloc(): FBSDKUtility; // inherited from NSObject

	static dictionaryWithQueryString(queryString: string): NSDictionary<string, string>;

	static getGraphDomainFromToken(): string;

	static new(): FBSDKUtility; // inherited from NSObject

	static queryStringWithDictionaryError(dictionary: NSDictionary<string, any>): string;

	static startGCDTimerWithIntervalBlock(interval: number, block: () => void): NSObject & OS_dispatch_source;

	static stopGCDTimer(timer: NSObject & OS_dispatch_source): void;

	static unversionedFacebookURLWithHostPrefixPathQueryParametersError(hostPrefix: string, path: string, queryParameters: NSDictionary<string, any>): NSURL;
}

declare class FBSDKViewImpressionLogger extends NSObject implements FBSDKImpressionLogging {
	static alloc(): FBSDKViewImpressionLogger; // inherited from NSObject

	static new(): FBSDKViewImpressionLogger; // inherited from NSObject

	static retrieveLoggerWith(eventName: string): FBSDKViewImpressionLogger;

	constructor(o: { eventName: string });

	initWithEventName(eventName: string): this;

	logImpressionWithIdentifierParameters(identifier: string, parameters: NSDictionary<string, any>): void;
}

declare class FBSDKWebDialog extends NSObject implements FBSDKWebDialogViewDelegate {
	static alloc(): FBSDKWebDialog; // inherited from NSObject

	static new(): FBSDKWebDialog; // inherited from NSObject

	delegate: FBSDKWebDialogDelegate;

	shouldDeferVisibility: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { name: string });

	constructor(o: { name: string; parameters: NSDictionary<string, string>; webViewFrame: CGRect; path: string });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithName(name: string): this;

	initWithNameParametersWebViewFramePath(name: string, parameters: NSDictionary<string, string>, webViewFrame: CGRect, path: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	show(): void;

	webDialogViewDidCancel(webDialogView: FBSDKWebDialogView): void;

	webDialogViewDidCompleteWithResults(webDialogView: FBSDKWebDialogView, results: NSDictionary<string, any>): void;

	webDialogViewDidFailWithError(webDialogView: FBSDKWebDialogView, error: NSError): void;

	webDialogViewDidFinishLoad(webDialogView: FBSDKWebDialogView): void;
}

interface FBSDKWebDialogDelegate {
	webDialogDidCancel(webDialog: FBSDKWebDialog): void;

	webDialogDidCompleteWithResults(webDialog: FBSDKWebDialog, results: NSDictionary<string, any>): void;

	webDialogDidFailWithError(webDialog: FBSDKWebDialog, error: NSError): void;
}
declare var FBSDKWebDialogDelegate: {
	prototype: FBSDKWebDialogDelegate;
};

declare class FBSDKWebDialogView extends UIView {
	static alloc(): FBSDKWebDialogView; // inherited from NSObject

	static appearance(): FBSDKWebDialogView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKWebDialogView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKWebDialogView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): FBSDKWebDialogView; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKWebDialogView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): FBSDKWebDialogView; // inherited from UIAppearance

	static configureWithWebViewProviderUrlOpenerErrorFactory(webViewProvider: FBSDKWebViewProviding, urlOpener: FBSDKInternalURLOpener, errorFactory: FBSDKErrorCreating): void;

	static new(): FBSDKWebDialogView; // inherited from NSObject

	delegate: FBSDKWebDialogViewDelegate;

	loadURL(URL: NSURL): void;

	stopLoading(): void;
}

interface FBSDKWebDialogViewDelegate extends NSObjectProtocol {
	webDialogViewDidCancel(webDialogView: FBSDKWebDialogView): void;

	webDialogViewDidCompleteWithResults(webDialogView: FBSDKWebDialogView, results: NSDictionary<string, any>): void;

	webDialogViewDidFailWithError(webDialogView: FBSDKWebDialogView, error: NSError): void;

	webDialogViewDidFinishLoad(webDialogView: FBSDKWebDialogView): void;
}
declare var FBSDKWebDialogViewDelegate: {
	prototype: FBSDKWebDialogViewDelegate;
};

interface FBSDKWebView {
	bounds: CGRect;

	frame: CGRect;

	navigationDelegate: WKNavigationDelegate;

	loadRequest(request: NSURLRequest): WKNavigation;

	stopLoading(): void;
}
declare var FBSDKWebView: {
	prototype: FBSDKWebView;
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

	readonly; // inherited from NSObjectProtocol

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

declare class FBSDKWebViewFactory extends NSObject implements FBSDKWebViewProviding {
	static alloc(): FBSDKWebViewFactory; // inherited from NSObject

	static new(): FBSDKWebViewFactory; // inherited from NSObject

	createWebViewWithFrame(frame: CGRect): FBSDKWebView;
}

interface FBSDKWebViewProviding {
	createWebViewWithFrame(frame: CGRect): FBSDKWebView;
}
declare var FBSDKWebViewProviding: {
	prototype: FBSDKWebViewProviding;
};

declare class ServerConfigurationProvider extends NSObject {
	static alloc(): ServerConfigurationProvider; // inherited from NSObject

	static new(): ServerConfigurationProvider; // inherited from NSObject
}

declare class _BridgeAPI extends NSObject implements ASWebAuthenticationPresentationContextProviding, FBSDKApplicationObserving, FBSDKBridgeAPIRequestOpening, FBSDKContainerViewControllerDelegate, FBSDKURLOpener, SFSafariViewControllerDelegate {
	static alloc(): _BridgeAPI; // inherited from NSObject

	static new(): _BridgeAPI; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	applicationDidBecomeActive(application: UIApplication): void;

	applicationDidEnterBackground(application: UIApplication): void;

	applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

	applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

	applicationWillResignActive(application: UIApplication): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	openBridgeAPIRequestUseSafariViewControllerFromViewControllerCompletionBlock(request: FBSDKBridgeAPIRequestProtocol, useSafariViewController: boolean, fromViewController: UIViewController, completionBlock: (p1: FBSDKBridgeAPIResponse) => void): void;

	openURLSenderHandler(url: NSURL, sender: FBSDKURLOpening, handler: (p1: boolean, p2: NSError) => void): void;

	openURLWithSafariViewControllerSenderFromViewControllerHandler(url: NSURL, sender: FBSDKURLOpening, fromViewController: UIViewController, handler: (p1: boolean, p2: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentationAnchorForWebAuthenticationSession(session: ASWebAuthenticationSession): UIWindow;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	safariViewControllerActivityItemsForURLTitle(controller: SFSafariViewController, URL: NSURL, title: string): NSArray<UIActivity>;

	safariViewControllerDidCompleteInitialLoad(controller: SFSafariViewController, didLoadSuccessfully: boolean): void;

	safariViewControllerDidFinish(controller: SFSafariViewController): void;

	/**
	 * @since 11.0
	 */
	safariViewControllerExcludedActivityTypesForURLTitle(controller: SFSafariViewController, URL: NSURL, title: string): NSArray<string>;

	/**
	 * @since 11.0
	 */
	safariViewControllerInitialLoadDidRedirectToURL(controller: SFSafariViewController, URL: NSURL): void;

	/**
	 * @since 14.0
	 */
	safariViewControllerWillOpenInBrowser(controller: SFSafariViewController): void;

	self(): this;

	viewControllerDidDisappearAnimated(viewController: FBSDKContainerViewController, animated: boolean): void;
}

declare class _FBSDKAccessTokenExpirer extends NSObject implements _FBSDKAccessTokenExpiring {
	static alloc(): _FBSDKAccessTokenExpirer; // inherited from NSObject

	static new(): _FBSDKAccessTokenExpirer; // inherited from NSObject

	constructor(o: { notificationCenter: any });

	initWithNotificationCenter(notificationCenter: any): this;
}

interface _FBSDKAccessTokenExpiring {}
declare var _FBSDKAccessTokenExpiring: {
	prototype: _FBSDKAccessTokenExpiring;
};

interface _FBSDKNotificationPosting {
	fb_postNotificationNameObjectUserInfo(name: string, object: any, userInfo: NSDictionary<string, any>): void;
}
declare var _FBSDKNotificationPosting: {
	prototype: _FBSDKNotificationPosting;
};

interface _FBSDKWindowFinding {
	findWindow(): UIWindow;
}
declare var _FBSDKWindowFinding: {
	prototype: _FBSDKWindowFinding;
};

interface __FBSDKLoggerCreating {
	createLoggerWithLoggingBehavior(loggingBehavior: string): FBSDKLogging;
}
declare var __FBSDKLoggerCreating: {
	prototype: __FBSDKLoggerCreating;
};

declare function fb_randomString(numberOfBytes: number): string;
