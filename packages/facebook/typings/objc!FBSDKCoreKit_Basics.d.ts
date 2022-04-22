declare class FBSDKBase64 extends NSObject {
	static alloc(): FBSDKBase64; // inherited from NSObject

	static base64FromBase64Url(base64Url: string): string;

	static decodeAsData(string: string): NSData;

	static decodeAsString(string: string): string;

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

	clearCrashReportFiles(): void;

	disable(): void;
}

interface FBSDKCrashHandlerProtocol {
	addObserver(observer: FBSDKCrashObserving): void;

	clearCrashReportFiles(): void;
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

interface FBSDKDataPersisting {
	dataForKey(defaultName: string): NSData;

	integerForKey(defaultName: string): number;

	objectForKey(defaultName: string): any;

	removeObjectForKey(defaultName: string): void;

	setIntegerForKey(value: number, defaultName: string): void;

	setObjectForKey(value: any, defaultName: string): void;

	stringForKey(defaultName: string): string;
}
declare var FBSDKDataPersisting: {
	prototype: FBSDKDataPersisting;
};

interface FBSDKFileDataExtracting {}
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
	bundleIdentifier: string;

	infoDictionary: NSDictionary<string, any>;

	objectForInfoDictionaryKey(key: string): any;
}
declare var FBSDKInfoDictionaryProviding: {
	prototype: FBSDKInfoDictionaryProviding;
};

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

	static alloc(): FBSDKTypeUtility; // inherited from NSObject

	static arrayAddObject(array: NSMutableArray<any>, object: any): void;

	static arrayObjectAtIndex(array: NSArray<any> | any[], index: number): any;

	static arrayValue(object: any): NSArray<any>;

	static boolValue(object: any): boolean;

	static coercedToStringValue(object: any): string;

	static coercedToURLValue(object: any): NSURL;

	static dataWithJSONObjectOptionsError(obj: any, opt: NSJSONWritingOptions): NSData;

	static dictionaryEnumerateKeysAndObjectsUsingBlock(dictionary: NSDictionary<string, any>, block: (p1: any, p2: any, p3: interop.Pointer | interop.Reference<boolean>) => void): void;

	static dictionaryObjectForKeyOfType(dictionary: NSDictionary<string, any>, key: string, type: typeof NSObject): any;

	static dictionarySetObjectForKey(dictionary: NSMutableDictionary<any, any>, object: any, key: any): void;

	static dictionaryValue(object: any): NSDictionary<string, any>;

	static doubleValue(object: any): number;

	static integerValue(object: any): number;

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

	constructor(o: { delegate: NSURLSessionDataDelegate; delegateQueue: NSOperationQueue });

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

	constructor(o: { request: NSURLRequest; fromSession: FBSDKSessionProviding; completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void });

	cancel(): void;

	initWithRequestFromSessionCompletionHandler(request: NSURLRequest, session: FBSDKSessionProviding, handler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): this;

	start(): void;
}

declare function fb_dispatch_on_default_thread(block: () => void): void;

declare function fb_dispatch_on_main_thread(block: () => void): void;
