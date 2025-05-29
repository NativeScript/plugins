declare var FBLink_NSBundle_InfoDictionaryProviding: interop.Pointer | interop.Reference<any>;

declare var FBLink_NSData_FileDataExtracting: interop.Pointer | interop.Reference<any>;

declare var FBLink_NSFileManager_FileManaging: interop.Pointer | interop.Reference<any>;

declare var FBLink_NSNotificationCenter_NotificationDelivering: interop.Pointer | interop.Reference<any>;

declare var FBLink_NSURLSessionTask_NetworkTask: interop.Pointer | interop.Reference<any>;

declare var FBLink_NSURLSession_URLSessionProviding: interop.Pointer | interop.Reference<any>;

declare var FBLink_NSUserDefaults_DataPersisting: interop.Pointer | interop.Reference<any>;

declare var FBLinkable_NSBundle_InfoDictionaryProviding: number;

declare var FBLinkable_NSData_FileDataExtracting: number;

declare var FBLinkable_NSFileManager_FileManaging: number;

declare var FBLinkable_NSNotificationCenter_NotificationDelivering: number;

declare var FBLinkable_NSURLSessionTask_NetworkTask: number;

declare var FBLinkable_NSURLSession_URLSessionProviding: number;

declare var FBLinkable_NSUserDefaults_DataPersisting: number;

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

	saveException(exception: NSException): void;
}

interface FBSDKCrashHandlerProtocol {
	addObserver(observer: FBSDKCrashObserving): void;

	clearCrashReportFiles(): void;

	saveException(exception: NSException): void;
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
	fb_boolForKey(key: string): boolean;

	fb_dataForKey(key: string): NSData;

	fb_integerForKey(key: string): number;

	fb_objectForKey(key: string): any;

	fb_removeObjectForKey(key: string): void;

	fb_setBoolForKey(value: boolean, key: string): void;

	fb_setIntegerForKey(integer: number, key: string): void;

	fb_setObjectForKey(object: any, key: string): void;

	fb_stringForKey(key: string): string;
}
declare var FBSDKDataPersisting: {
	prototype: FBSDKDataPersisting;
};

interface FBSDKFileDataExtracting {}
declare var FBSDKFileDataExtracting: {
	prototype: FBSDKFileDataExtracting;

	fb_dataWithContentsOfFileOptionsError(path: string, readOptionsMask: NSDataReadingOptions): NSData;
};

interface FBSDKFileManaging {
	fb_contentsOfDirectoryAtPathError(path: string): NSArray<string>;

	fb_createDirectoryAtPathWithIntermediateDirectoriesAttributesError(path: string, createIntermediates: boolean, attributes: NSDictionary<string, any>): boolean;

	fb_fileExistsAtPath(path: string): boolean;

	fb_removeItemAtPathError(path: string): boolean;
}
declare var FBSDKFileManaging: {
	prototype: FBSDKFileManaging;
};

interface FBSDKInfoDictionaryProviding {
	fb_bundleIdentifier: string;

	fb_infoDictionary: NSDictionary<string, any>;

	fb_objectForInfoDictionaryKey(key: string): any;
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

interface FBSDKNetworkTask extends NSObjectProtocol {
	fb_state: NSURLSessionTaskState;

	fb_cancel(): void;

	fb_resume(): void;
}
declare var FBSDKNetworkTask: {
	prototype: FBSDKNetworkTask;
};

interface FBSDKNotificationDelivering {
	fb_addObserverForNameObjectQueueUsingBlock(name: string, obj: any, queue: NSOperationQueue, block: (p1: NSNotification) => void): NSObjectProtocol;

	fb_addObserverSelectorNameObject(observer: any, selector: string, name: string, object: any): void;

	fb_removeObserver(observer: any): void;
}
declare var FBSDKNotificationDelivering: {
	prototype: FBSDKNotificationDelivering;
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

interface FBSDKURLSessionProviding extends NSObjectProtocol {
	fb_dataTaskWithRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): FBSDKNetworkTask;
}
declare var FBSDKURLSessionProviding: {
	prototype: FBSDKURLSessionProviding;
};

declare class FBSDKURLSessionTask extends NSObject {
	static alloc(): FBSDKURLSessionTask; // inherited from NSObject

	static new(): FBSDKURLSessionTask; // inherited from NSObject

	handler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void;

	loggerSerialNumber: number;

	readonly requestStartDate: Date;

	requestStartTime: number;

	readonly state: NSURLSessionTaskState;

	task: FBSDKNetworkTask;

	constructor(o: { request: NSURLRequest; fromSession: FBSDKURLSessionProviding; completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void });

	cancel(): void;

	initWithRequestFromSessionCompletionHandler(request: NSURLRequest, session: FBSDKURLSessionProviding, handler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): this;

	start(): void;
}

declare function fb_dispatch_on_default_thread(block: () => void): void;

declare function fb_dispatch_on_main_thread(block: () => void): void;
