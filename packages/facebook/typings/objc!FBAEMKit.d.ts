declare class FBAEMAdvertiserMultiEntryRule extends NSObject implements FBAEMAdvertiserRuleMatching, NSCopying, NSSecureCoding {
	static alloc(): FBAEMAdvertiserMultiEntryRule; // inherited from NSObject

	static new(): FBAEMAdvertiserMultiEntryRule; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { operator: FBAEMAdvertiserRuleOperator; rules: NSArray<FBAEMAdvertiserRuleMatching> | FBAEMAdvertiserRuleMatching[] });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithOperatorRules(operator_: FBAEMAdvertiserRuleOperator, rules: NSArray<FBAEMAdvertiserRuleMatching> | FBAEMAdvertiserRuleMatching[]): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMatchedEventParameters(eventParams: NSDictionary<string, any>): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class FBAEMAdvertiserRuleFactory extends NSObject implements FBAEMAdvertiserRuleProviding {
	static alloc(): FBAEMAdvertiserRuleFactory; // inherited from NSObject

	static new(): FBAEMAdvertiserRuleFactory; // inherited from NSObject

	createRuleWithDict(dictionary: NSDictionary<string, any>): FBAEMAdvertiserRuleMatching;

	createRuleWithJson(json: string): FBAEMAdvertiserRuleMatching;
}

interface FBAEMAdvertiserRuleMatching extends NSObjectProtocol {
	isMatchedEventParameters(eventParams: NSDictionary<string, any>): boolean;
}
declare var FBAEMAdvertiserRuleMatching: {
	prototype: FBAEMAdvertiserRuleMatching;
};

declare const enum FBAEMAdvertiserRuleOperator {
	Unknown = 0,

	And = 1,

	Or = 2,

	Not = 3,

	Contains = 4,

	NotContains = 5,

	StartsWith = 6,

	CaseInsensitiveContains = 7,

	CaseInsensitiveNotContains = 8,

	CaseInsensitiveStartsWith = 9,

	RegexMatch = 10,

	Equal = 11,

	NotEqual = 12,

	LessThan = 13,

	LessThanOrEqual = 14,

	GreaterThan = 15,

	GreaterThanOrEqual = 16,

	CaseInsensitiveIsAny = 17,

	CaseInsensitiveIsNotAny = 18,

	IsAny = 19,

	IsNotAny = 20,
}

interface FBAEMAdvertiserRuleProviding {
	createRuleWithDict(dictionary: NSDictionary<string, any>): FBAEMAdvertiserRuleMatching;

	createRuleWithJson(json: string): FBAEMAdvertiserRuleMatching;
}
declare var FBAEMAdvertiserRuleProviding: {
	prototype: FBAEMAdvertiserRuleProviding;
};

declare class FBAEMAdvertiserSingleEntryRule extends NSObject implements FBAEMAdvertiserRuleMatching, NSCopying, NSSecureCoding {
	static alloc(): FBAEMAdvertiserSingleEntryRule; // inherited from NSObject

	static new(): FBAEMAdvertiserSingleEntryRule; // inherited from NSObject

	static setSupportsSecureCoding(value: boolean): void;

	readonly arrayCondition: NSArray<string>;

	readonly linguisticCondition: string;

	readonly operator_: FBAEMAdvertiserRuleOperator;

	readonly paramKey: string;

	static supportsSecureCoding: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { operator: FBAEMAdvertiserRuleOperator; paramKey: string; linguisticCondition: string; numericalCondition: number; arrayCondition: NSArray<string> | string[] });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithOperatorParamKeyLinguisticConditionNumericalConditionArrayCondition(operator_: FBAEMAdvertiserRuleOperator, paramKey: string, linguisticCondition: string, numericalCondition: number, arrayCondition: NSArray<string> | string[]): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMatchedEventParameters(eventParams: NSDictionary<string, any>): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class FBAEMConfiguration extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): FBAEMConfiguration; // inherited from NSObject

	static configureWithRuleProvider(ruleProvider: FBAEMAdvertiserRuleProviding): void;

	static new(): FBAEMConfiguration; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	readonly businessID: string;

	readonly conversionValueRules: NSArray<FBAEMRule>;

	readonly currencySet: NSSet<string>;

	readonly cutoffTime: number;

	readonly defaultCurrency: string;

	readonly eventSet: NSSet<string>;

	readonly matchingRule: FBAEMAdvertiserRuleMatching;

	readonly mode: string;

	readonly validFrom: number;

	static readonly ruleProvider: FBAEMAdvertiserRuleProviding;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { JSON: NSDictionary<string, any> });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithJSON(dict: NSDictionary<string, any>): this;

	isSameBusinessID(businessID: string): boolean;

	isSameValidFromBusinessID(validFrom: number, businessID: string): boolean;
}

declare class FBAEMEvent extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): FBAEMEvent; // inherited from NSObject

	static new(): FBAEMEvent; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	readonly eventName: string;

	readonly values: NSDictionary<string, number>;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { JSON: NSDictionary<string, any> });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithJSON(dict: NSDictionary<string, any>): this;
}

declare class FBAEMInvocation extends NSObject implements NSSecureCoding {
	static alloc(): FBAEMInvocation; // inherited from NSObject

	static new(): FBAEMInvocation; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	readonly acsConfigurationID: string;

	readonly acsToken: string;

	readonly businessID: string;

	readonly campaignID: string;

	readonly catalogID: string;

	readonly configurationID: number;

	readonly conversionValue: number;

	hasStoreKitAdNetwork: boolean;

	isAggregated: boolean;

	isConversionFilteringEligible: boolean;

	readonly isTestMode: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { appLinkData: NSDictionary<any, any> });

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	attributeEventCurrencyValueParametersConfigurationsShouldUpdateCacheIsRuleMatchInServer(event: string, potentialValueCurrency: string, potentialValue: number, parameters: NSDictionary<string, any>, configurations: NSDictionary<string, NSArray<FBAEMConfiguration>>, shouldUpdateCache: boolean, isRuleMatchInServer: boolean): boolean;

	encodeWithCoder(coder: NSCoder): void;

	getHMACWithDelay(delay: number): string;

	initWithAppLinkData(appLinkData: NSDictionary<any, any>): this;

	initWithCoder(coder: NSCoder): this;

	isOptimizedEventConfigurations(event: string, configurations: NSDictionary<string, NSArray<FBAEMConfiguration>>): boolean;

	isOutOfWindowWithConfigurations(configurations: NSDictionary<string, NSArray<FBAEMConfiguration>>): boolean;

	updateConversionValueWithConfigurationsEventShouldBoostPriority(configurations: NSDictionary<string, NSArray<FBAEMConfiguration>>, event: string, shouldBoostPriority: boolean): boolean;
}

declare class FBAEMNetworker extends NSObject implements FBAEMNetworking, NSURLSessionDataDelegate {
	static alloc(): FBAEMNetworker; // inherited from NSObject

	static new(): FBAEMNetworker; // inherited from NSObject

	userAgentSuffix: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	URLSessionDataTaskDidBecomeDownloadTask(session: NSURLSession, dataTask: NSURLSessionDataTask, downloadTask: NSURLSessionDownloadTask): void;

	URLSessionDataTaskDidBecomeStreamTask(session: NSURLSession, dataTask: NSURLSessionDataTask, streamTask: NSURLSessionStreamTask): void;

	URLSessionDataTaskDidReceiveData(session: NSURLSession, dataTask: NSURLSessionDataTask, data: NSData): void;

	URLSessionDataTaskDidReceiveResponseCompletionHandler(session: NSURLSession, dataTask: NSURLSessionDataTask, response: NSURLResponse, completionHandler: (p1: NSURLSessionResponseDisposition) => void): void;

	URLSessionDataTaskWillCacheResponseCompletionHandler(session: NSURLSession, dataTask: NSURLSessionDataTask, proposedResponse: NSCachedURLResponse, completionHandler: (p1: NSCachedURLResponse) => void): void;

	URLSessionDidBecomeInvalidWithError(session: NSURLSession, error: NSError): void;

	URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession): void;

	URLSessionDidReceiveChallengeCompletionHandler(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionTaskDidCompleteWithError(session: NSURLSession, task: NSURLSessionTask, error: NSError): void;

	URLSessionTaskDidFinishCollectingMetrics(session: NSURLSession, task: NSURLSessionTask, metrics: NSURLSessionTaskMetrics): void;

	URLSessionTaskDidReceiveChallengeCompletionHandler(session: NSURLSession, task: NSURLSessionTask, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionTaskDidSendBodyDataTotalBytesSentTotalBytesExpectedToSend(session: NSURLSession, task: NSURLSessionTask, bytesSent: number, totalBytesSent: number, totalBytesExpectedToSend: number): void;

	URLSessionTaskIsWaitingForConnectivity(session: NSURLSession, task: NSURLSessionTask): void;

	URLSessionTaskNeedNewBodyStream(session: NSURLSession, task: NSURLSessionTask, completionHandler: (p1: NSInputStream) => void): void;

	URLSessionTaskWillBeginDelayedRequestCompletionHandler(session: NSURLSession, task: NSURLSessionTask, request: NSURLRequest, completionHandler: (p1: NSURLSessionDelayedRequestDisposition, p2: NSURLRequest) => void): void;

	URLSessionTaskWillPerformHTTPRedirectionNewRequestCompletionHandler(session: NSURLSession, task: NSURLSessionTask, response: NSHTTPURLResponse, request: NSURLRequest, completionHandler: (p1: NSURLRequest) => void): void;

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

	startGraphRequestWithGraphPathParametersTokenStringHTTPMethodCompletion(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, method: string, completion: (p1: any, p2: NSError) => void): void;
}

interface FBAEMNetworking {
	startGraphRequestWithGraphPathParametersTokenStringHTTPMethodCompletion(graphPath: string, parameters: NSDictionary<string, any>, tokenString: string, method: string, completion: (p1: any, p2: NSError) => void): void;
}
declare var FBAEMNetworking: {
	prototype: FBAEMNetworking;
};

declare class FBAEMReporter extends NSObject {
	static alloc(): FBAEMReporter; // inherited from NSObject

	static configureWithNetworkerAppIDReporter(networker: FBAEMNetworking, appID: string, reporter: FBSKAdNetworkReporting): void;

	static configureWithNetworkerAppIDReporterAnalyticsAppID(networker: FBAEMNetworking, appID: string, reporter: FBSKAdNetworkReporting, analyticsAppID: string): void;

	static enable(): void;

	static handleURL(url: NSURL): void;

	static new(): FBAEMReporter; // inherited from NSObject

	static recordAndUpdateEventCurrencyValueParameters(event: string, currency: string, value: number, parameters: NSDictionary<string, any>): void;

	static setAdvertiserRuleMatchInServerEnabled(enabled: boolean): void;

	static setCatalogMatchingEnabled(enabled: boolean): void;

	static setConversionFilteringEnabled(enabled: boolean): void;
}

declare class FBAEMRequestBody extends NSObject {
	static alloc(): FBAEMRequestBody; // inherited from NSObject

	static new(): FBAEMRequestBody; // inherited from NSObject

	readonly data: NSData;

	appendWithKeyFormValue(key: string, value: string): void;

	compressedData(): NSData;
}

declare class FBAEMRule extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): FBAEMRule; // inherited from NSObject

	static new(): FBAEMRule; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	readonly conversionValue: number;

	readonly events: NSArray<FBAEMEvent>;

	readonly priority: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { JSON: NSDictionary<string, any> });

	containsEvent(event: string): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithJSON(dict: NSDictionary<string, any>): this;

	isMatchedWithRecordedEventsRecordedValues(recordedEvents: NSSet<string>, recordedValues: NSDictionary<string, NSDictionary<string, any>>): boolean;
}

declare class FBAEMSettings extends NSObject {
	static alloc(): FBAEMSettings; // inherited from NSObject

	static appID(): string;

	static new(): FBAEMSettings; // inherited from NSObject
}

declare class FBAEMUtility extends NSObject {
	static alloc(): FBAEMUtility; // inherited from NSObject

	static new(): FBAEMUtility; // inherited from NSObject

	static readonly sharedUtility: FBAEMUtility;

	getBusinessIDsInOrder(invocations: NSArray<FBAEMInvocation> | FBAEMInvocation[]): NSArray<string>;

	getContent(parameters: NSDictionary<string, any>): string;

	getContentID(parameters: NSDictionary<string, any>): string;

	getInSegmentValueMatchingRule(parameters: NSDictionary<string, any>, matchingRule: FBAEMAdvertiserRuleMatching): number;

	getMatchedInvocationBusinessID(invocations: NSArray<FBAEMInvocation> | FBAEMInvocation[], businessID: string): FBAEMInvocation;
}

interface FBSKAdNetworkReporting {
	checkAndRevokeTimer(): void;

	isReportingEvent(event: string): boolean;

	shouldCutoff(): boolean;
}
declare var FBSKAdNetworkReporting: {
	prototype: FBSKAdNetworkReporting;
};
