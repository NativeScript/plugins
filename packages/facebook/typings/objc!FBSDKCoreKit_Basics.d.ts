
declare var FBSDKAppEventCity: string;

declare var FBSDKAppEventCountry: string;

declare var FBSDKAppEventDateOfBirth: string;

declare var FBSDKAppEventEmail: string;

declare var FBSDKAppEventExternalId: string;

declare var FBSDKAppEventFirstName: string;

declare var FBSDKAppEventGender: string;

declare var FBSDKAppEventLastName: string;

declare var FBSDKAppEventPhone: string;

declare var FBSDKAppEventState: string;

declare var FBSDKAppEventZip: string;

declare class FBSDKBase64 extends NSObject {

	static alloc(): FBSDKBase64; // inherited from NSObject

	static base64FromBase64Url(base64Url: string): string;

	static decodeAsData(string: string): NSData;

	static decodeAsString(string: string): string;

	static encodeData(data: NSData): string;

	static encodeString(string: string): string;

	static new(): FBSDKBase64; // inherited from NSObject
}

declare class FBSDKBasicUtility extends NSObject {

	static JSONStringForObjectErrorInvalidObjectHandler(object: any, errorRef: interop.Pointer | interop.Reference<NSError>, invalidObjectHandler: (p1: any, p2: interop.Pointer | interop.Reference<boolean>) => any): string;

	static SHA256Hash(input: NSObject): string;

	static URLDecode(value: string): string;

	static URLEncode(value: string): string;

	static alloc(): FBSDKBasicUtility; // inherited from NSObject

	static anonymousID(): string;

	static convertRequestValue(value: any): any;

	static dictionarySetJSONStringForObjectForKeyError(dictionary: NSMutableDictionary<any, any>, object: any, key: any): boolean;

	static dictionaryWithQueryString(queryString: string): NSDictionary<string, string>;

	static gzip(data: NSData): NSData;

	static new(): FBSDKBasicUtility; // inherited from NSObject

	static objectForJSONStringError(string: string): any;

	static persistenceFilePath(filename: string): string;

	static queryStringWithDictionaryErrorInvalidObjectHandler(dictionary: NSDictionary<string, any>, errorRef: interop.Pointer | interop.Reference<NSError>, invalidObjectHandler: (p1: any, p2: interop.Pointer | interop.Reference<boolean>) => any): string;
}

declare var FBSDKCoreKit_BasicsVersionNumber: number;

declare var FBSDKCoreKit_BasicsVersionString: interop.Reference<number>;

declare class FBSDKCrashHandler extends NSObject implements FBSDKCrashHandlerProtocol {

	static addObserver(observer: FBSDKCrashObserving): void;

	static alloc(): FBSDKCrashHandler; // inherited from NSObject

	static clearCrashReportFiles(): void;

	static disable(): void;

	static getFBSDKVersion(): string;

	static new(): FBSDKCrashHandler; // inherited from NSObject

	static removeObserver(observer: FBSDKCrashObserving): void;

	static readonly shared: FBSDKCrashHandler;

	addObserver(observer: FBSDKCrashObserving): void;

	disable(): void;
}

interface FBSDKCrashHandlerProtocol {

	addObserver(observer: FBSDKCrashObserving): void;
}
declare var FBSDKCrashHandlerProtocol: {

	prototype: FBSDKCrashHandlerProtocol;
};

interface FBSDKCrashObserving {

	frameworks: NSArray<string>;

	prefixes: NSArray<string>;

	didReceiveCrashLogs(crashLogs: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[]): void;
}
declare var FBSDKCrashObserving: {

	prototype: FBSDKCrashObserving;
};

declare function FBSDKCreateJSONFromString(string: string, errorRef: interop.Pointer | interop.Reference<NSError>): FBSDKJSONValue;

interface FBSDKFileDataExtracting {
}
declare var FBSDKFileDataExtracting: {

	prototype: FBSDKFileDataExtracting;

	dataWithContentsOfFileOptionsError(path: string, readOptionsMask: NSDataReadingOptions): NSData;
};

interface FBSDKFileManaging {

	URLForDirectoryInDomainAppropriateForURLCreateError(directory: NSSearchPathDirectory, domain: NSSearchPathDomainMask, url: NSURL, shouldCreate: boolean): NSURL;

	contentsOfDirectoryAtPathError(path: string): NSArray<string>;

	createDirectoryAtPathWithIntermediateDirectoriesAttributesError(path: string, createIntermediates: boolean, attributes: NSDictionary<string, any>): boolean;

	fileExistsAtPath(path: string): boolean;

	removeItemAtPathError(path: string): boolean;
}
declare var FBSDKFileManaging: {

	prototype: FBSDKFileManaging;
};

interface FBSDKInfoDictionaryProviding {

	infoDictionary: NSDictionary<string, any>;

	objectForInfoDictionaryKey(key: string): any;
}
declare var FBSDKInfoDictionaryProviding: {

	prototype: FBSDKInfoDictionaryProviding;
};

declare class FBSDKJSONField extends NSObject {

	static alloc(): FBSDKJSONField; // inherited from NSObject

	static new(): FBSDKJSONField; // inherited from NSObject

	readonly rawObject: any;

	arrayOrNil(): NSArray<FBSDKJSONField>;

	dictionaryOrNil(): NSDictionary<string, FBSDKJSONField>;

	matchArrayDictionaryStringNumberNull(arrayMatcher: (p1: NSArray<FBSDKJSONField>) => void, dictionaryMatcher: (p1: NSDictionary<string, FBSDKJSONField>) => void, stringMatcher: (p1: string) => void, numberMatcher: (p1: number) => void, nullMatcher: () => void): void;

	nullOrNil(): NSNull;

	numberOrNil(): number;

	stringOrNil(): string;
}

declare class FBSDKJSONValue extends NSObject {

	static alloc(): FBSDKJSONValue; // inherited from NSObject

	static new(): FBSDKJSONValue; // inherited from NSObject

	readonly rawObject: any;

	constructor(o: { potentialJSONObject: any; });

	initWithPotentialJSONObject(obj: any): this;

	matchArrayDictionary(arrayMatcher: (p1: NSArray<FBSDKJSONField>) => void, dictMatcher: (p1: NSDictionary<string, FBSDKJSONField>) => void): void;

	matchArrayOrNil(): NSArray<FBSDKJSONField>;

	matchDictionaryOrNil(): NSDictionary<string, FBSDKJSONField>;

	unsafe_matchArrayOrNil(): NSArray<any>;

	unsafe_matchDictionaryOrNil(): NSDictionary<string, any>;
}

declare class FBSDKLibAnalyzer extends NSObject {

	static alloc(): FBSDKLibAnalyzer; // inherited from NSObject

	static getMethodsTableFrameworks(prefixes: NSArray<string> | string[], frameworks: NSArray<string> | string[]): NSDictionary<string, string>;

	static new(): FBSDKLibAnalyzer; // inherited from NSObject

	static symbolicateCallstackMethodMapping(callstack: NSArray<string> | string[], methodMapping: NSDictionary<string, any>): NSArray<string>;
}

interface FBSDKSessionDataTask extends NSObjectProtocol {

	state: NSURLSessionTaskState;

	cancel(): void;

	resume(): void;
}
declare var FBSDKSessionDataTask: {

	prototype: FBSDKSessionDataTask;
};

interface FBSDKSessionProviding extends NSObjectProtocol {

	dataTaskWithRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): FBSDKSessionDataTask;
}
declare var FBSDKSessionProviding: {

	prototype: FBSDKSessionProviding;
};

declare class FBSDKTypeUtility extends NSObject {

	static JSONObjectWithDataOptionsError(data: NSData, opt: NSJSONReadingOptions): any;

	static URLValue(object: any): NSURL;

	static alloc(): FBSDKTypeUtility; // inherited from NSObject

	static arrayAddObject(array: NSMutableArray<any>, object: any): void;

	static arrayAddObjectAtIndex(array: NSMutableArray<any>, object: any, index: number): void;

	static arrayObjectAtIndex(array: NSArray<any> | any[], index: number): any;

	static arrayValue(object: any): NSArray<any>;

	static boolValue(object: any): boolean;

	static coercedToStringValue(object: any): string;

	static dataWithJSONObjectOptionsError(obj: any, opt: NSJSONWritingOptions): NSData;

	static dictionaryEnumerateKeysAndObjectsUsingBlock(dictionary: NSDictionary<any, any>, block: (p1: any, p2: any, p3: interop.Pointer | interop.Reference<boolean>) => void): void;

	static dictionaryObjectForKeyOfType(dictionary: NSDictionary<any, any>, key: string, type: typeof NSObject): any;

	static dictionarySetObjectForKey(dictionary: NSMutableDictionary<any, any>, object: any, key: any): void;

	static dictionaryValue(object: any): NSDictionary<any, any>;

	static integerValue(object: any): number;

	static isValidJSONObject(obj: any): boolean;

	static new(): FBSDKTypeUtility; // inherited from NSObject

	static numberValue(object: any): number;

	static objectValue(object: any): any;

	static stringValueOrNil(object: any): string;

	static timeIntervalValue(object: any): number;

	static unsignedIntegerValue(object: any): number;
}

declare class FBSDKURLSession extends NSObject {

	static alloc(): FBSDKURLSession; // inherited from NSObject

	static new(): FBSDKURLSession; // inherited from NSObject

	delegate: NSURLSessionDataDelegate;

	delegateQueue: NSOperationQueue;

	session: NSURLSession;

	constructor(o: { delegate: NSURLSessionDataDelegate; delegateQueue: NSOperationQueue; });

	executeURLRequestCompletionHandler(request: NSURLRequest, handler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): void;

	initWithDelegateDelegateQueue(delegate: NSURLSessionDataDelegate, delegateQueue: NSOperationQueue): this;

	invalidateAndCancel(): void;

	updateSessionWithBlock(block: () => void): void;

	valid(): boolean;
}

declare class FBSDKURLSessionTask extends NSObject {

	static alloc(): FBSDKURLSessionTask; // inherited from NSObject

	static new(): FBSDKURLSessionTask; // inherited from NSObject

	handler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void;

	loggerSerialNumber: number;

	readonly requestStartDate: Date;

	requestStartTime: number;

	readonly state: NSURLSessionTaskState;

	task: FBSDKSessionDataTask;

	constructor(o: { request: NSURLRequest; fromSession: FBSDKSessionProviding; completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void; });

	cancel(): void;

	initWithRequestFromSessionCompletionHandler(request: NSURLRequest, session: FBSDKSessionProviding, handler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): this;

	start(): void;
}

declare class FBSDKUserDataStore extends NSObject {

	static alloc(): FBSDKUserDataStore; // inherited from NSObject

	static clearUserData(): void;

	static clearUserDataForType(type: string): void;

	static getUserData(): string;

	static new(): FBSDKUserDataStore; // inherited from NSObject

	static setUserDataForType(data: string, type: string): void;

	static setUserEmailFirstNameLastNamePhoneDateOfBirthGenderCityStateZipCountryExternalId(email: string, firstName: string, lastName: string, phone: string, dateOfBirth: string, gender: string, city: string, state: string, zip: string, country: string, externalId: string): void;
}

declare function _FBSDKCastToClassOrNilUnsafeInternal(object: any, klass: typeof NSObject): any;

declare function _FBSDKCastToProtocolOrNilUnsafeInternal(object: any, protocol: any /* Protocol */): any;

declare function fb_dispatch_on_default_thread(block: () => void): void;

declare function fb_dispatch_on_main_thread(block: () => void): void;
