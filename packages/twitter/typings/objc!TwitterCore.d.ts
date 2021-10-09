
declare const enum TWTRAPIErrorCode {

	CouldNotAuthenticate = 32,

	PageNotExist = 34,

	NotAuthorizedForEndpoint = 37,

	InvalidParameter = 44,

	AccountSuspended = 64,

	APIVersionRetired = 68,

	RateLimitExceeded = 88,

	InvalidOrExpiredToken = 89,

	SSLInvalid = 92,

	OverCapacity = 130,

	InternalError = 131,

	CouldNotAuthenticateTimestampOutOfRange = 135,

	AlreadyFavorited = 139,

	CannotFollowOverLimit = 161,

	NotAuthorizedToSeeStatus = 179,

	OverDailyStatusUpdateLimit = 185,

	StatusIsDuplicate = 187,

	BadAuthenticationData = 215,

	RequestIsAutomated = 226,

	UserMustVerifyLogin = 231,

	ChallengeCodeInvalid = 236,

	BadGuestToken = 239,

	LoginRateExceeded = 245,

	EndpointRetired = 251,

	ApplicationCannotPerformWriteAction = 261,

	CannotMuteSelf = 271,

	CannotMuteSpecifiedUser = 272,

	DeviceRegisterRateExceeded = 299,

	DeviceCarrierNotSupported = 286,

	AlreadyRetweeted = 327,

	TooManyRequests = 429
}

declare var TWTRAPIErrorDomain: string;

declare class TWTRAuthConfig extends NSObject {

	static alloc(): TWTRAuthConfig; // inherited from NSObject

	static new(): TWTRAuthConfig; // inherited from NSObject

	readonly consumerKey: string;

	readonly consumerSecret: string;

	constructor(o: { consumerKey: string; consumerSecret: string; });

	initWithConsumerKeyConsumerSecret(consumerKey: string, consumerSecret: string): this;
}

interface TWTRAuthSession extends TWTRBaseSession {

	authToken: string;

	authTokenSecret: string;

	userID: string;
}
declare var TWTRAuthSession: {

	prototype: TWTRAuthSession;
};

interface TWTRBaseSession extends NSCoding, NSObjectProtocol {
}
declare var TWTRBaseSession: {

	prototype: TWTRBaseSession;
};

interface TWTRCoreOAuthSigning extends NSObjectProtocol {

	OAuthEchoHeadersForRequestMethodURLStringParametersError(method: string, URLString: string, parameters: NSDictionary<any, any>): NSDictionary<any, any>;

	OAuthEchoHeadersToVerifyCredentials(): NSDictionary<any, any>;
}
declare var TWTRCoreOAuthSigning: {

	prototype: TWTRCoreOAuthSigning;
};

declare const enum TWTRErrorCode {

	Unknown = -1,

	NoAuthentication = 0,

	NotInitialized = 1,

	UserDeclinedPermission = 2,

	UserHasNoEmailAddress = 3,

	InvalidResourceID = 4,

	InvalidURL = 5,

	MismatchedJSONType = 6,

	KeychainSerializationFailure = 7,

	DiskSerializationError = 8,

	WebViewError = 9,

	MissingParameter = 10
}

declare var TWTRErrorDomain: string;

declare class TWTRGuestSession extends NSObject implements TWTRBaseSession {

	static alloc(): TWTRGuestSession; // inherited from NSObject

	static new(): TWTRGuestSession; // inherited from NSObject

	readonly accessToken: string;

	readonly guestToken: string;

	readonly probablyNeedsRefreshing: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { accessToken: string; guestToken: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { sessionDictionary: NSDictionary<any, any>; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	encodeWithCoder(coder: NSCoder): void;

	initWithAccessTokenGuestToken(accessToken: string, guestToken: string): this;

	initWithCoder(coder: NSCoder): this;

	initWithSessionDictionary(sessionDictionary: NSDictionary<any, any>): this;

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

interface TWTRGuestSessionStore extends NSObjectProtocol {

	fetchGuestSessionWithCompletion(completion: (p1: TWTRGuestSession, p2: NSError) => void): void;
}
declare var TWTRGuestSessionStore: {

	prototype: TWTRGuestSessionStore;
};

declare const enum TWTRLogInErrorCode {

	LogInErrorCodeUnknown = -1,

	LogInErrorCodeDenied = 0,

	LogInErrorCodeCancelled = 1,

	LogInErrorCodeNoAccounts = 2,

	LogInErrorCodeReverseAuthFailed = 3,

	LogInErrorCodeCannotRefreshSession = 4,

	LogInErrorCodeSessionNotFound = 5,

	LogInErrorCodeFailed = 6,

	LogInErrorCodeSystemAccountCredentialsInvalid = 7,

	LoginErrorNoTwitterApp = 8
}

declare var TWTRLogInErrorDomain: string;

declare var TWTROAuthEchoAuthorizationHeaderKey: string;

declare var TWTROAuthEchoRequestURLStringKey: string;

declare class TWTRSession extends NSObject implements TWTRAuthSession {

	static alloc(): TWTRSession; // inherited from NSObject

	static new(): TWTRSession; // inherited from NSObject

	readonly userName: string;

	readonly authToken: string; // inherited from TWTRAuthSession

	readonly authTokenSecret: string; // inherited from TWTRAuthSession

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly userID: string; // inherited from TWTRAuthSession

	readonly  // inherited from NSObjectProtocol

	constructor(o: { authToken: string; authTokenSecret: string; userName: string; userID: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { SSOResponse: NSDictionary<any, any>; });

	constructor(o: { sessionDictionary: NSDictionary<any, any>; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	encodeWithCoder(coder: NSCoder): void;

	initWithAuthTokenAuthTokenSecretUserNameUserID(authToken: string, authTokenSecret: string, userName: string, userID: string): this;

	initWithCoder(coder: NSCoder): this;

	initWithSSOResponse(authDictionary: NSDictionary<any, any>): this;

	initWithSessionDictionary(sessionDictionary: NSDictionary<any, any>): this;

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

interface TWTRSessionRefreshingStore extends NSObjectProtocol {

	isExpiredSessionError(session: any, error: NSError): boolean;

	isExpiredSessionResponse(session: any, response: NSHTTPURLResponse): boolean;

	refreshSessionClassSessionIDCompletion(sessionClass: typeof NSObject, sessionID: string, completion: (p1: any, p2: NSError) => void): void;
}
declare var TWTRSessionRefreshingStore: {

	prototype: TWTRSessionRefreshingStore;
};

declare class TWTRSessionStore extends NSObject implements TWTRSessionStoreProtocol {

	static alloc(): TWTRSessionStore; // inherited from NSObject

	static new(): TWTRSessionStore; // inherited from NSObject

	readonly authConfig: TWTRAuthConfig; // inherited from TWTRSessionStoreProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	existingUserSessions(): NSArray<any>;

	fetchGuestSessionWithCompletion(completion: (p1: TWTRGuestSession, p2: NSError) => void): void;

	hasLoggedInUsers(): boolean;

	isEqual(object: any): boolean;

	isExpiredSessionError(session: any, error: NSError): boolean;

	isExpiredSessionResponse(session: any, response: NSHTTPURLResponse): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isValidOauthToken(token: string): boolean;

	logOutUserID(userID: string): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	refreshSessionClassSessionIDCompletion(sessionClass: typeof NSObject, sessionID: string, completion: (p1: any, p2: NSError) => void): void;

	reloadSessionStore(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	saveOauthToken(token: string): void;

	saveSessionCompletion(session: TWTRAuthSession, completion: (p1: TWTRAuthSession, p2: NSError) => void): void;

	saveSessionWithAuthTokenAuthTokenSecretCompletion(authToken: string, authTokenSecret: string, completion: (p1: TWTRAuthSession, p2: NSError) => void): void;

	self(): this;

	session(): TWTRAuthSession;

	sessionForUserID(userID: string): TWTRAuthSession;
}

interface TWTRSessionStoreProtocol extends TWTRGuestSessionStore, TWTRSessionRefreshingStore, TWTRUserSessionStore {

	authConfig: TWTRAuthConfig;
}
declare var TWTRSessionStoreProtocol: {

	prototype: TWTRSessionStoreProtocol;
};

interface TWTRUserSessionStore extends NSObjectProtocol {

	existingUserSessions(): NSArray<any>;

	hasLoggedInUsers(): boolean;

	logOutUserID(userID: string): void;

	saveSessionCompletion(session: TWTRAuthSession, completion: (p1: TWTRAuthSession, p2: NSError) => void): void;

	saveSessionWithAuthTokenAuthTokenSecretCompletion(authToken: string, authTokenSecret: string, completion: (p1: TWTRAuthSession, p2: NSError) => void): void;

	session(): TWTRAuthSession;

	sessionForUserID(userID: string): TWTRAuthSession;
}
declare var TWTRUserSessionStore: {

	prototype: TWTRUserSessionStore;
};
