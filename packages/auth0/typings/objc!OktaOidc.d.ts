declare var OKTApplicationTypeNative: string;

declare var OKTApplicationTypeParam: string;

declare class OKTAuthState extends NSObject implements NSSecureCoding {
	static alloc(): OKTAuthState; // inherited from NSObject

	static authStateByPresentingAuthorizationRequestDelegateValidatorCallback(authorizationRequest: OKTAuthorizationRequest, delegate: OktaNetworkRequestCustomizationDelegate, validator: OKTTokenValidator, callback: (p1: OKTAuthState, p2: NSError) => void): OKTExternalUserAgentSession;

	static authStateByPresentingAuthorizationRequestExternalUserAgentDelegateValidatorCallback(authorizationRequest: OKTAuthorizationRequest, externalUserAgent: OKTExternalUserAgent, delegate: OktaNetworkRequestCustomizationDelegate, validator: OKTTokenValidator, callback: (p1: OKTAuthState, p2: NSError) => void): OKTExternalUserAgentSession;

	static authStateByPresentingAuthorizationRequestPresentingViewControllerDelegateValidatorCallback(authorizationRequest: OKTAuthorizationRequest, presentingViewController: UIViewController, delegate: OktaNetworkRequestCustomizationDelegate, validator: OKTTokenValidator, callback: (p1: OKTAuthState, p2: NSError) => void): OKTExternalUserAgentSession;

	static new(): OKTAuthState; // inherited from NSObject

	readonly authorizationError: NSError;

	delegate: OktaNetworkRequestCustomizationDelegate;

	errorDelegate: OKTAuthStateErrorDelegate;

	readonly isAuthorized: boolean;

	readonly lastAuthorizationResponse: OKTAuthorizationResponse;

	readonly lastRegistrationResponse: OKTRegistrationResponse;

	readonly lastTokenResponse: OKTTokenResponse;

	readonly refreshToken: string;

	readonly scope: string;

	stateChangeDelegate: OKTAuthStateChangeDelegate;

	validator: OKTTokenValidator;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { authorizationResponse: OKTAuthorizationResponse });

	constructor(o: { authorizationResponse: OKTAuthorizationResponse; tokenResponse: OKTTokenResponse });

	constructor(o: { authorizationResponse: OKTAuthorizationResponse; tokenResponse: OKTTokenResponse; registrationResponse: OKTRegistrationResponse; delegate: OktaNetworkRequestCustomizationDelegate; validator: OKTTokenValidator });

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { registrationResponse: OKTRegistrationResponse });

	encodeWithCoder(coder: NSCoder): void;

	initWithAuthorizationResponse(authorizationResponse: OKTAuthorizationResponse): this;

	initWithAuthorizationResponseTokenResponse(authorizationResponse: OKTAuthorizationResponse, tokenResponse: OKTTokenResponse): this;

	initWithAuthorizationResponseTokenResponseRegistrationResponseDelegateValidator(authorizationResponse: OKTAuthorizationResponse, tokenResponse: OKTTokenResponse, registrationResponse: OKTRegistrationResponse, delegate: OktaNetworkRequestCustomizationDelegate, validator: OKTTokenValidator): this;

	initWithCoder(coder: NSCoder): this;

	initWithRegistrationResponse(registrationResponse: OKTRegistrationResponse): this;

	performActionWithFreshTokens(action: (p1: string, p2: string, p3: NSError) => void): void;

	performActionWithFreshTokensAdditionalRefreshParameters(action: (p1: string, p2: string, p3: NSError) => void, additionalParameters: NSDictionary<string, string>): void;

	performActionWithFreshTokensAdditionalRefreshParametersDispatchQueue(action: (p1: string, p2: string, p3: NSError) => void, additionalParameters: NSDictionary<string, string>, dispatchQueue: NSObject): void;

	setNeedsTokenRefresh(): void;

	tokenRefreshRequest(): OKTTokenRequest;

	tokenRefreshRequestWithAdditionalParameters(additionalParameters: NSDictionary<string, string>): OKTTokenRequest;

	updateWithAuthorizationError(authorizationError: NSError): void;

	updateWithAuthorizationResponseError(authorizationResponse: OKTAuthorizationResponse, error: NSError): void;

	updateWithRegistrationResponse(registrationResponse: OKTRegistrationResponse): void;

	updateWithTokenResponseError(tokenResponse: OKTTokenResponse, error: NSError): void;
}

interface OKTAuthStateChangeDelegate extends NSObjectProtocol {
	didChangeState(state: OKTAuthState): void;
}
declare var OKTAuthStateChangeDelegate: {
	prototype: OKTAuthStateChangeDelegate;
};

interface OKTAuthStateErrorDelegate extends NSObjectProtocol {
	authStateDidEncounterAuthorizationError(state: OKTAuthState, error: NSError): void;

	authStateDidEncounterTransientError?(state: OKTAuthState, error: NSError): void;
}
declare var OKTAuthStateErrorDelegate: {
	prototype: OKTAuthStateErrorDelegate;
};

declare class OKTAuthorizationRequest extends NSObject implements NSCopying, NSSecureCoding, OKTExternalUserAgentRequest {
	static alloc(): OKTAuthorizationRequest; // inherited from NSObject

	static codeChallengeS256ForVerifier(codeVerifier: string): string;

	static generateCodeVerifier(): string;

	static generateState(): string;

	static new(): OKTAuthorizationRequest; // inherited from NSObject

	readonly additionalParameters: NSDictionary<string, string>;

	readonly clientID: string;

	readonly clientSecret: string;

	readonly codeChallenge: string;

	readonly codeChallengeMethod: string;

	readonly codeVerifier: string;

	readonly configuration: OKTServiceConfiguration;

	readonly nonce: string;

	readonly redirectURL: NSURL;

	readonly responseType: string;

	readonly scope: string;

	readonly state: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { configuration: OKTServiceConfiguration; clientId: string; clientSecret: string; scope: string; redirectURL: NSURL; responseType: string; state: string; nonce: string; codeVerifier: string; codeChallenge: string; codeChallengeMethod: string; additionalParameters: NSDictionary<string, string> });

	constructor(o: { configuration: OKTServiceConfiguration; clientId: string; clientSecret: string; scopes: NSArray<string> | string[]; redirectURL: NSURL; responseType: string; additionalParameters: NSDictionary<string, string> });

	constructor(o: { configuration: OKTServiceConfiguration; clientId: string; scopes: NSArray<string> | string[]; redirectURL: NSURL; responseType: string; additionalParameters: NSDictionary<string, string> });

	authorizationRequestURL(): NSURL;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	externalUserAgentRequestURL(): NSURL;

	initWithCoder(coder: NSCoder): this;

	initWithConfigurationClientIdClientSecretScopeRedirectURLResponseTypeStateNonceCodeVerifierCodeChallengeCodeChallengeMethodAdditionalParameters(configuration: OKTServiceConfiguration, clientID: string, clientSecret: string, scope: string, redirectURL: NSURL, responseType: string, state: string, nonce: string, codeVerifier: string, codeChallenge: string, codeChallengeMethod: string, additionalParameters: NSDictionary<string, string>): this;

	initWithConfigurationClientIdClientSecretScopesRedirectURLResponseTypeAdditionalParameters(configuration: OKTServiceConfiguration, clientID: string, clientSecret: string, scopes: NSArray<string> | string[], redirectURL: NSURL, responseType: string, additionalParameters: NSDictionary<string, string>): this;

	initWithConfigurationClientIdScopesRedirectURLResponseTypeAdditionalParameters(configuration: OKTServiceConfiguration, clientID: string, scopes: NSArray<string> | string[], redirectURL: NSURL, responseType: string, additionalParameters: NSDictionary<string, string>): this;

	redirectScheme(): string;
}

declare class OKTAuthorizationResponse extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): OKTAuthorizationResponse; // inherited from NSObject

	static new(): OKTAuthorizationResponse; // inherited from NSObject

	readonly accessToken: string;

	readonly accessTokenExpirationDate: Date;

	readonly additionalParameters: NSDictionary<string, NSObject>;

	readonly authorizationCode: string;

	readonly idToken: string;

	readonly request: OKTAuthorizationRequest;

	readonly scope: string;

	readonly state: string;

	readonly tokenType: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { request: OKTAuthorizationRequest; parameters: NSDictionary<string, NSObject> });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithRequestParameters(request: OKTAuthorizationRequest, parameters: NSDictionary<string, NSObject>): this;

	tokenExchangeRequest(): OKTTokenRequest;

	tokenExchangeRequestWithAdditionalParameters(additionalParameters: NSDictionary<string, string>): OKTTokenRequest;
}

declare class OKTAuthorizationService extends NSObject {
	static alloc(): OKTAuthorizationService; // inherited from NSObject

	static discoverServiceConfigurationForDiscoveryURLCompletion(discoveryURL: NSURL, completion: (p1: OKTServiceConfiguration, p2: NSError) => void): void;

	static discoverServiceConfigurationForIssuerCompletion(issuerURL: NSURL, completion: (p1: OKTServiceConfiguration, p2: NSError) => void): void;

	static new(): OKTAuthorizationService; // inherited from NSObject

	static performRegistrationRequestDelegateCompletion(request: OKTRegistrationRequest, delegate: OktaNetworkRequestCustomizationDelegate, completion: (p1: OKTRegistrationResponse, p2: NSError) => void): void;

	static performTokenRequestDelegateCallback(request: OKTTokenRequest, delegate: OktaNetworkRequestCustomizationDelegate, callback: (p1: OKTTokenResponse, p2: NSError) => void): void;

	static performTokenRequestOriginalAuthorizationResponseDelegateValidatorCallback(request: OKTTokenRequest, authorizationResponse: OKTAuthorizationResponse, delegate: OktaNetworkRequestCustomizationDelegate, validator: OKTTokenValidator, callback: (p1: OKTTokenResponse, p2: NSError) => void): void;

	static presentAuthorizationRequestExternalUserAgentCallback(request: OKTAuthorizationRequest, externalUserAgent: OKTExternalUserAgent, callback: (p1: OKTAuthorizationResponse, p2: NSError) => void): OKTExternalUserAgentSession;

	static presentAuthorizationRequestPresentingViewControllerCallback(request: OKTAuthorizationRequest, presentingViewController: UIViewController, callback: (p1: OKTAuthorizationResponse, p2: NSError) => void): OKTExternalUserAgentSession;

	static presentEndSessionRequestExternalUserAgentCallback(request: OKTEndSessionRequest, externalUserAgent: OKTExternalUserAgent, callback: (p1: OKTEndSessionResponse, p2: NSError) => void): OKTExternalUserAgentSession;

	readonly configuration: OKTServiceConfiguration;
}

declare var OKTClientIDIssuedAtParam: string;

declare var OKTClientIDParam: string;

declare var OKTClientSecretExpirestAtParam: string;

declare var OKTClientSecretParam: string;

declare class OKTDefaultTokenValidator extends NSObject implements OKTTokenValidator {
	static alloc(): OKTDefaultTokenValidator; // inherited from NSObject

	static new(): OKTDefaultTokenValidator; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isDateExpiredToken(expiry: Date, tokenType: OKTTokenType): boolean;

	isEqual(object: any): boolean;

	isIssuedAtDateValidToken(issuedAt: Date, tokenType: OKTTokenType): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class OKTEndSessionRequest extends NSObject implements NSCopying, NSSecureCoding, OKTExternalUserAgentRequest {
	static alloc(): OKTEndSessionRequest; // inherited from NSObject

	static new(): OKTEndSessionRequest; // inherited from NSObject

	readonly additionalParameters: NSDictionary<string, string>;

	readonly configuration: OKTServiceConfiguration;

	readonly idTokenHint: string;

	readonly postLogoutRedirectURL: NSURL;

	readonly state: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { configuration: OKTServiceConfiguration; idTokenHint: string; postLogoutRedirectURL: NSURL; additionalParameters: NSDictionary<string, string> });

	constructor(o: { configuration: OKTServiceConfiguration; idTokenHint: string; postLogoutRedirectURL: NSURL; state: string; additionalParameters: NSDictionary<string, string> });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	endSessionRequestURL(): NSURL;

	externalUserAgentRequestURL(): NSURL;

	initWithCoder(coder: NSCoder): this;

	initWithConfigurationIdTokenHintPostLogoutRedirectURLAdditionalParameters(configuration: OKTServiceConfiguration, idTokenHint: string, postLogoutRedirectURL: NSURL, additionalParameters: NSDictionary<string, string>): this;

	initWithConfigurationIdTokenHintPostLogoutRedirectURLStateAdditionalParameters(configuration: OKTServiceConfiguration, idTokenHint: string, postLogoutRedirectURL: NSURL, state: string, additionalParameters: NSDictionary<string, string>): this;

	redirectScheme(): string;
}

declare class OKTEndSessionResponse extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): OKTEndSessionResponse; // inherited from NSObject

	static new(): OKTEndSessionResponse; // inherited from NSObject

	readonly additionalParameters: NSDictionary<string, NSObject>;

	readonly request: OKTEndSessionRequest;

	readonly state: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { request: OKTEndSessionRequest; parameters: NSDictionary<string, NSObject> });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithRequestParameters(request: OKTEndSessionRequest, parameters: NSDictionary<string, NSObject>): this;
}

declare const enum OKTErrorCode {
	InvalidDiscoveryDocument = -2,

	UserCanceledAuthorizationFlow = -3,

	ProgramCanceledAuthorizationFlow = -4,

	NetworkError = -5,

	ServerError = -6,

	JSONDeserializationError = -7,

	TokenResponseConstructionError = -8,

	SafariOpenError = -9,

	BrowserOpenError = -10,

	TokenRefreshError = -11,

	RegistrationResponseConstructionError = -12,

	JSONSerializationError = -13,

	IDTokenParsingError = -14,

	IDTokenFailedValidationError = -15,
}

declare const enum OKTErrorCodeOAuth {
	InvalidRequest = -2,

	UnauthorizedClient = -3,

	AccessDenied = -4,

	UnsupportedResponseType = -5,

	InvalidScope = -6,

	ServerError = -7,

	TemporarilyUnavailable = -8,

	InvalidClient = -9,

	InvalidGrant = -10,

	UnsupportedGrantType = -11,

	InvalidRedirectURI = -12,

	InvalidClientMetadata = -13,

	ClientError = -61439,

	Other = -61440,
}

declare const enum OKTErrorCodeOAuthAuthorization {
	InvalidRequest = -2,

	UnauthorizedClient = -3,

	AccessDenied = -4,

	UnsupportedResponseType = -5,

	AuthorizationInvalidScope = -6,

	ServerError = -7,

	TemporarilyUnavailable = -8,

	ClientError = -61439,

	Other = -61440,
}

declare const enum OKTErrorCodeOAuthRegistration {
	InvalidRequest = -2,

	InvalidRedirectURI = -12,

	InvalidClientMetadata = -13,

	ClientError = -61439,

	Other = -61440,
}

declare const enum OKTErrorCodeOAuthToken {
	InvalidRequest = -2,

	InvalidClient = -9,

	InvalidGrant = -10,

	UnauthorizedClient = -3,

	UnsupportedGrantType = -11,

	InvalidScope = -6,

	ClientError = -61439,

	Other = -61440,
}

declare class OKTErrorUtilities extends NSObject {
	static HTTPErrorWithHTTPResponseData(HTTPURLResponse: NSHTTPURLResponse, data: NSData): NSError;

	static OAuthErrorCodeFromString(errorCode: string): OKTErrorCodeOAuth;

	static OAuthErrorWithDomainOAuthResponseUnderlyingError(OAuthErrorDomain: string, errorResponse: NSDictionary<any, any>, underlyingError: NSError): NSError;

	static alloc(): OKTErrorUtilities; // inherited from NSObject

	static errorWithCodeUnderlyingErrorDescription(code: OKTErrorCode, underlyingError: NSError, description: string): NSError;

	static isOAuthErrorDomain(errorDomain: string): boolean;

	static new(): OKTErrorUtilities; // inherited from NSObject

	static raiseException(name: string): void;

	static raiseExceptionMessage(name: string, message: string): void;

	static resourceServerAuthorizationErrorWithCodeErrorResponseUnderlyingError(code: number, errorResponse: NSDictionary<any, any>, underlyingError: NSError): NSError;
}

interface OKTExternalUserAgent extends NSObjectProtocol {
	dismissExternalUserAgentAnimatedCompletion(animated: boolean, completion: () => void): void;

	presentExternalUserAgentRequestSession(request: OKTExternalUserAgentRequest, session: OKTExternalUserAgentSession): boolean;
}
declare var OKTExternalUserAgent: {
	prototype: OKTExternalUserAgent;
};

declare class OKTExternalUserAgentIOS extends NSObject implements OKTExternalUserAgent {
	static alloc(): OKTExternalUserAgentIOS; // inherited from NSObject

	static new(): OKTExternalUserAgentIOS; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { presentingViewController: UIViewController });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismissExternalUserAgentAnimatedCompletion(animated: boolean, completion: () => void): void;

	initWithPresentingViewController(presentingViewController: UIViewController): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentExternalUserAgentRequestSession(request: OKTExternalUserAgentRequest, session: OKTExternalUserAgentSession): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class OKTExternalUserAgentIOSCustomBrowser extends NSObject implements OKTExternalUserAgent {
	static CustomBrowserChrome(): OKTExternalUserAgentIOSCustomBrowser;

	static CustomBrowserFirefox(): OKTExternalUserAgentIOSCustomBrowser;

	static CustomBrowserOpera(): OKTExternalUserAgentIOSCustomBrowser;

	static CustomBrowserSafari(): OKTExternalUserAgentIOSCustomBrowser;

	static URLTransformationSchemeConcatPrefix(URLprefix: string): (p1: NSURL) => NSURL;

	static URLTransformationSchemeSubstitutionHTTPSHTTP(browserSchemeHTTPS: string, browserSchemeHTTP: string): (p1: NSURL) => NSURL;

	static alloc(): OKTExternalUserAgentIOSCustomBrowser; // inherited from NSObject

	static new(): OKTExternalUserAgentIOSCustomBrowser; // inherited from NSObject

	readonly URLTransformation: (p1: NSURL) => NSURL;

	readonly appStoreURL: NSURL;

	readonly canOpenURLScheme: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { URLTransformation: (p1: NSURL) => NSURL });

	constructor(o: { URLTransformation: (p1: NSURL) => NSURL; canOpenURLScheme: string; appStoreURL: NSURL });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismissExternalUserAgentAnimatedCompletion(animated: boolean, completion: () => void): void;

	initWithURLTransformation(URLTransformation: (p1: NSURL) => NSURL): this;

	initWithURLTransformationCanOpenURLSchemeAppStoreURL(URLTransformation: (p1: NSURL) => NSURL, canOpenURLScheme: string, appStoreURL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentExternalUserAgentRequestSession(request: OKTExternalUserAgentRequest, session: OKTExternalUserAgentSession): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class OKTExternalUserAgentNoSsoIOS extends NSObject implements OKTExternalUserAgent {
	static alloc(): OKTExternalUserAgentNoSsoIOS; // inherited from NSObject

	static new(): OKTExternalUserAgentNoSsoIOS; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { presentingViewController: UIViewController });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismissExternalUserAgentAnimatedCompletion(animated: boolean, completion: () => void): void;

	initWithPresentingViewController(presentingViewController: UIViewController): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentExternalUserAgentRequestSession(request: OKTExternalUserAgentRequest, session: OKTExternalUserAgentSession): boolean;

	presentationAnchorForWebAuthenticationSession(session: ASWebAuthenticationSession): UIWindow;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface OKTExternalUserAgentRequest {
	externalUserAgentRequestURL(): NSURL;

	redirectScheme(): string;
}
declare var OKTExternalUserAgentRequest: {
	prototype: OKTExternalUserAgentRequest;
};

interface OKTExternalUserAgentSession extends NSObjectProtocol {
	cancel(): void;

	cancelWithCompletion(completion: () => void): void;

	failExternalUserAgentFlowWithError(error: NSError): void;

	resumeExternalUserAgentFlowWithURL(URL: NSURL): boolean;
}
declare var OKTExternalUserAgentSession: {
	prototype: OKTExternalUserAgentSession;
};

declare class OKTFieldMapping extends NSObject {
	static JSONTypes(): NSSet<any>;

	static URLConversion(): (p1: NSObject) => any;

	static alloc(): OKTFieldMapping; // inherited from NSObject

	static dateEpochConversion(): (p1: NSObject) => any;

	static dateSinceNowConversion(): (p1: NSObject) => any;

	static decodeWithCoderMapInstance(aCoder: NSCoder, map: NSDictionary<string, OKTFieldMapping>, instance: any): void;

	static encodeWithCoderMapInstance(aCoder: NSCoder, map: NSDictionary<string, OKTFieldMapping>, instance: any): void;

	static new(): OKTFieldMapping; // inherited from NSObject

	static remainingParametersWithMapParametersInstance(map: NSDictionary<string, OKTFieldMapping>, parameters: NSDictionary<string, NSObject>, instance: any): NSDictionary<string, NSObject>;

	readonly conversion: (p1: NSObject) => any;

	readonly expectedType: typeof NSObject;

	readonly name: string;

	constructor(o: { name: string; type: typeof NSObject });

	constructor(o: { name: string; type: typeof NSObject; conversion: (p1: NSObject) => any });

	initWithNameType(name: string, type: typeof NSObject): this;

	initWithNameTypeConversion(name: string, type: typeof NSObject, conversion: (p1: NSObject) => any): this;
}

declare var OKTGeneralErrorDomain: string;

declare var OKTGrantTypeAuthorizationCode: string;

declare var OKTGrantTypeClientCredentials: string;

declare var OKTGrantTypePassword: string;

declare var OKTGrantTypeRefreshToken: string;

declare var OKTGrantTypesParam: string;

declare var OKTHTTPErrorDomain: string;

declare class OKTIDToken extends NSObject {
	static alloc(): OKTIDToken; // inherited from NSObject

	static new(): OKTIDToken; // inherited from NSObject

	readonly audience: NSArray<any>;

	readonly claims: NSDictionary<any, any>;

	readonly expiresAt: Date;

	readonly header: NSDictionary<any, any>;

	readonly issuedAt: Date;

	readonly issuer: NSURL;

	readonly nonce: string;

	readonly subject: string;

	constructor(o: { IDTokenString: string });

	initWithIDTokenString(idToken: string): this;
}

declare var OKTOAuthAuthorizationErrorDomain: string;

declare var OKTOAuthErrorFieldError: string;

declare var OKTOAuthErrorFieldErrorDescription: string;

declare var OKTOAuthErrorFieldErrorURI: string;

declare var OKTOAuthErrorResponseErrorKey: string;

declare var OKTOAuthExceptionInvalidAuthorizationFlow: string;

declare var OKTOAuthExceptionInvalidTokenRequestNullRedirectURL: string;

declare var OKTOAuthRegistrationErrorDomain: string;

declare var OKTOAuthTokenErrorDomain: string;

declare var OKTOAuthorizationRequestCodeChallengeMethodS256: string;

declare var OKTRedirectURIsParam: string;

declare var OKTRegistrationAccessTokenParam: string;

declare var OKTRegistrationClientURIParam: string;

declare class OKTRegistrationRequest extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): OKTRegistrationRequest; // inherited from NSObject

	static new(): OKTRegistrationRequest; // inherited from NSObject

	readonly additionalParameters: NSDictionary<string, string>;

	readonly applicationType: string;

	readonly configuration: OKTServiceConfiguration;

	readonly grantTypes: NSArray<string>;

	readonly initialAccessToken: string;

	readonly redirectURIs: NSArray<NSURL>;

	readonly responseTypes: NSArray<string>;

	readonly subjectType: string;

	readonly tokenEndpointAuthenticationMethod: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { configuration: OKTServiceConfiguration; redirectURIs: NSArray<NSURL> | NSURL[]; responseTypes: NSArray<string> | string[]; grantTypes: NSArray<string> | string[]; subjectType: string; tokenEndpointAuthMethod: string; additionalParameters: NSDictionary<string, string> });

	constructor(o: { configuration: OKTServiceConfiguration; redirectURIs: NSArray<NSURL> | NSURL[]; responseTypes: NSArray<string> | string[]; grantTypes: NSArray<string> | string[]; subjectType: string; tokenEndpointAuthMethod: string; initialAccessToken: string; additionalParameters: NSDictionary<string, string> });

	URLRequest(): NSURLRequest;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithConfigurationRedirectURIsResponseTypesGrantTypesSubjectTypeTokenEndpointAuthMethodAdditionalParameters(configuration: OKTServiceConfiguration, redirectURIs: NSArray<NSURL> | NSURL[], responseTypes: NSArray<string> | string[], grantTypes: NSArray<string> | string[], subjectType: string, tokenEndpointAuthMethod: string, additionalParameters: NSDictionary<string, string>): this;

	initWithConfigurationRedirectURIsResponseTypesGrantTypesSubjectTypeTokenEndpointAuthMethodInitialAccessTokenAdditionalParameters(configuration: OKTServiceConfiguration, redirectURIs: NSArray<NSURL> | NSURL[], responseTypes: NSArray<string> | string[], grantTypes: NSArray<string> | string[], subjectType: string, tokenEndpointAuthMethod: string, initialAccessToken: string, additionalParameters: NSDictionary<string, string>): this;
}

declare class OKTRegistrationResponse extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): OKTRegistrationResponse; // inherited from NSObject

	static new(): OKTRegistrationResponse; // inherited from NSObject

	readonly additionalParameters: NSDictionary<string, NSObject>;

	readonly clientID: string;

	readonly clientIDIssuedAt: Date;

	readonly clientSecret: string;

	readonly clientSecretExpiresAt: Date;

	readonly registrationAccessToken: string;

	readonly registrationClientURI: NSURL;

	readonly request: OKTRegistrationRequest;

	readonly tokenEndpointAuthenticationMethod: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { request: OKTRegistrationRequest; parameters: NSDictionary<string, NSObject> });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithRequestParameters(request: OKTRegistrationRequest, parameters: NSDictionary<string, NSObject>): this;
}

declare var OKTResourceServerAuthorizationErrorDomain: string;

declare var OKTResponseTypeCode: string;

declare var OKTResponseTypeIDToken: string;

declare var OKTResponseTypeToken: string;

declare var OKTResponseTypesParam: string;

declare var OKTScopeAddress: string;

declare var OKTScopeEmail: string;

declare var OKTScopeOpenID: string;

declare var OKTScopePhone: string;

declare var OKTScopeProfile: string;

declare class OKTScopeUtilities extends NSObject {
	static alloc(): OKTScopeUtilities; // inherited from NSObject

	static new(): OKTScopeUtilities; // inherited from NSObject

	static scopesArrayWithString(scopes: string): NSArray<string>;

	static scopesWithArray(scopes: NSArray<string> | string[]): string;
}

declare class OKTServiceConfiguration extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): OKTServiceConfiguration; // inherited from NSObject

	static new(): OKTServiceConfiguration; // inherited from NSObject

	readonly authorizationEndpoint: NSURL;

	readonly discoveryDocument: OKTServiceDiscovery;

	readonly endSessionEndpoint: NSURL;

	readonly issuer: NSURL;

	readonly registrationEndpoint: NSURL;

	readonly tokenEndpoint: NSURL;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { authorizationEndpoint: NSURL; tokenEndpoint: NSURL });

	constructor(o: { authorizationEndpoint: NSURL; tokenEndpoint: NSURL; issuer: NSURL });

	constructor(o: { authorizationEndpoint: NSURL; tokenEndpoint: NSURL; issuer: NSURL; registrationEndpoint: NSURL });

	constructor(o: { authorizationEndpoint: NSURL; tokenEndpoint: NSURL; issuer: NSURL; registrationEndpoint: NSURL; endSessionEndpoint: NSURL });

	constructor(o: { authorizationEndpoint: NSURL; tokenEndpoint: NSURL; registrationEndpoint: NSURL });

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { discoveryDocument: OKTServiceDiscovery });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithAuthorizationEndpointTokenEndpoint(authorizationEndpoint: NSURL, tokenEndpoint: NSURL): this;

	initWithAuthorizationEndpointTokenEndpointIssuer(authorizationEndpoint: NSURL, tokenEndpoint: NSURL, issuer: NSURL): this;

	initWithAuthorizationEndpointTokenEndpointIssuerRegistrationEndpoint(authorizationEndpoint: NSURL, tokenEndpoint: NSURL, issuer: NSURL, registrationEndpoint: NSURL): this;

	initWithAuthorizationEndpointTokenEndpointIssuerRegistrationEndpointEndSessionEndpoint(authorizationEndpoint: NSURL, tokenEndpoint: NSURL, issuer: NSURL, registrationEndpoint: NSURL, endSessionEndpoint: NSURL): this;

	initWithAuthorizationEndpointTokenEndpointRegistrationEndpoint(authorizationEndpoint: NSURL, tokenEndpoint: NSURL, registrationEndpoint: NSURL): this;

	initWithCoder(coder: NSCoder): this;

	initWithDiscoveryDocument(discoveryDocument: OKTServiceDiscovery): this;
}

declare class OKTServiceDiscovery extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): OKTServiceDiscovery; // inherited from NSObject

	static new(): OKTServiceDiscovery; // inherited from NSObject

	readonly IDTokenEncryptionAlgorithmValuesSupported: NSArray<string>;

	readonly IDTokenEncryptionEncodingValuesSupported: NSArray<string>;

	readonly IDTokenSigningAlgorithmValuesSupported: NSArray<string>;

	readonly OPPolicyURI: NSURL;

	readonly OPTosURI: NSURL;

	readonly UILocalesSupported: NSArray<string>;

	readonly acrValuesSupported: NSArray<string>;

	readonly authorizationEndpoint: NSURL;

	readonly claimTypesSupported: NSArray<string>;

	readonly claimsLocalesSupported: NSArray<string>;

	readonly claimsParameterSupported: boolean;

	readonly claimsSupported: NSArray<string>;

	readonly discoveryDictionary: NSDictionary<string, any>;

	readonly displayValuesSupported: NSArray<string>;

	readonly endSessionEndpoint: NSURL;

	readonly grantTypesSupported: NSArray<string>;

	readonly issuer: NSURL;

	readonly jwksURL: NSURL;

	readonly registrationEndpoint: NSURL;

	readonly requestObjectEncryptionAlgorithmValuesSupported: NSArray<string>;

	readonly requestObjectEncryptionEncodingValuesSupported: NSArray<string>;

	readonly requestObjectSigningAlgorithmValuesSupported: NSArray<string>;

	readonly requestParameterSupported: boolean;

	readonly requestURIParameterSupported: boolean;

	readonly requireRequestURIRegistration: boolean;

	readonly responseModesSupported: NSArray<string>;

	readonly responseTypesSupported: NSArray<string>;

	readonly scopesSupported: NSArray<string>;

	readonly serviceDocumentation: NSURL;

	readonly subjectTypesSupported: NSArray<string>;

	readonly tokenEndpoint: NSURL;

	readonly tokenEndpointAuthMethodsSupported: NSArray<string>;

	readonly tokenEndpointAuthSigningAlgorithmValuesSupported: NSArray<string>;

	readonly userinfoEncryptionAlgorithmValuesSupported: NSArray<string>;

	readonly userinfoEncryptionEncodingValuesSupported: NSArray<string>;

	readonly userinfoEndpoint: NSURL;

	readonly userinfoSigningAlgorithmValuesSupported: NSArray<string>;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { dictionary: NSDictionary<any, any> });

	constructor(o: { JSONData: NSData });

	constructor(o: { JSON: string });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithDictionaryError(serviceDiscoveryDictionary: NSDictionary<any, any>): this;

	initWithJSONDataError(serviceDiscoveryJSONData: NSData): this;

	initWithJSONError(serviceDiscoveryJSON: string): this;
}

declare var OKTSubjectTypeParam: string;

declare var OKTTokenEndpointAuthenticationMethodParam: string;

declare class OKTTokenRequest extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): OKTTokenRequest; // inherited from NSObject

	static new(): OKTTokenRequest; // inherited from NSObject

	readonly additionalParameters: NSDictionary<string, string>;

	readonly authorizationCode: string;

	readonly clientID: string;

	readonly clientSecret: string;

	readonly codeVerifier: string;

	readonly configuration: OKTServiceConfiguration;

	readonly grantType: string;

	readonly redirectURL: NSURL;

	readonly refreshToken: string;

	readonly scope: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { configuration: OKTServiceConfiguration; grantType: string; authorizationCode: string; redirectURL: NSURL; clientID: string; clientSecret: string; scope: string; refreshToken: string; codeVerifier: string; additionalParameters: NSDictionary<string, string> });

	constructor(o: { configuration: OKTServiceConfiguration; grantType: string; authorizationCode: string; redirectURL: NSURL; clientID: string; clientSecret: string; scopes: NSArray<string> | string[]; refreshToken: string; codeVerifier: string; additionalParameters: NSDictionary<string, string> });

	URLRequest(): NSURLRequest;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithConfigurationGrantTypeAuthorizationCodeRedirectURLClientIDClientSecretScopeRefreshTokenCodeVerifierAdditionalParameters(configuration: OKTServiceConfiguration, grantType: string, code: string, redirectURL: NSURL, clientID: string, clientSecret: string, scope: string, refreshToken: string, codeVerifier: string, additionalParameters: NSDictionary<string, string>): this;

	initWithConfigurationGrantTypeAuthorizationCodeRedirectURLClientIDClientSecretScopesRefreshTokenCodeVerifierAdditionalParameters(configuration: OKTServiceConfiguration, grantType: string, code: string, redirectURL: NSURL, clientID: string, clientSecret: string, scopes: NSArray<string> | string[], refreshToken: string, codeVerifier: string, additionalParameters: NSDictionary<string, string>): this;
}

declare class OKTTokenResponse extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): OKTTokenResponse; // inherited from NSObject

	static new(): OKTTokenResponse; // inherited from NSObject

	readonly accessToken: string;

	readonly accessTokenExpirationDate: Date;

	readonly additionalParameters: NSDictionary<string, NSObject>;

	readonly idToken: string;

	readonly refreshToken: string;

	readonly request: OKTTokenRequest;

	readonly scope: string;

	readonly tokenType: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	constructor(o: { request: OKTTokenRequest; parameters: NSDictionary<string, NSObject> });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithRequestParameters(request: OKTTokenRequest, parameters: NSDictionary<string, NSObject>): this;
}

declare const enum OKTTokenType {
	Id = 0,

	Access = 1,
}

declare class OKTTokenUtilities extends NSObject {
	static alloc(): OKTTokenUtilities; // inherited from NSObject

	static encodeBase64urlNoPadding(data: NSData): string;

	static formUrlEncode(inputString: string): string;

	static new(): OKTTokenUtilities; // inherited from NSObject

	static randomURLSafeStringWithSize(size: number): string;

	static redact(inputString: string): string;

	static sha256(inputString: string): NSData;
}

interface OKTTokenValidator extends NSObjectProtocol {
	isDateExpiredToken(expiry: Date, tokenType: OKTTokenType): boolean;

	isIssuedAtDateValidToken(issuedAt: Date, tokenType: OKTTokenType): boolean;
}
declare var OKTTokenValidator: {
	prototype: OKTTokenValidator;
};

declare class OKTURLQueryComponent extends NSObject {
	static URLParamValueAllowedCharacters(): NSMutableCharacterSet;

	static alloc(): OKTURLQueryComponent; // inherited from NSObject

	static new(): OKTURLQueryComponent; // inherited from NSObject

	readonly dictionaryValue: NSDictionary<string, NSObject>;

	readonly parameters: NSArray<string>;

	constructor(o: { URL: NSURL });

	URLByReplacingQueryInURL(URL: NSURL): NSURL;

	URLEncodedParameters(): string;

	addParameterValue(parameter: string, value: string): void;

	addParameters(parameters: NSDictionary<string, string>): void;

	initWithURL(URL: NSURL): this;

	valuesForParameter(parameter: string): NSArray<string>;
}

declare class OKTURLSessionProvider extends NSObject {
	static alloc(): OKTURLSessionProvider; // inherited from NSObject

	static new(): OKTURLSessionProvider; // inherited from NSObject

	static session(): NSURLSession;

	static setSession(session: NSURLSession): void;
}

interface OktaNetworkRequestCustomizationDelegate extends NSObjectProtocol {
	customizableURLRequest(request: NSURLRequest): NSURLRequest;

	didReceiveResponse(response: NSURLResponse): void;
}
declare var OktaNetworkRequestCustomizationDelegate: {
	prototype: OktaNetworkRequestCustomizationDelegate;
};

declare class OktaOidc extends NSObject implements OktaOidcBrowserProtocolIOS {
	static alloc(): OktaOidc; // inherited from NSObject

	static new(): OktaOidc; // inherited from NSObject

	readonly configuration: OktaOidcConfig;

	constructor(o: { configuration: OktaOidcConfig });

	authenticateWithSessionTokenCallback(sessionToken: string, callback: (p1: OktaOidcStateManager, p2: NSError) => void): void;

	cancelBrowserSessionWithCompletion(completion: () => void): void;

	hasActiveBrowserSession(): boolean;

	initWithConfigurationError(configuration: OktaOidcConfig): this;

	signInWithBrowserFromAdditionalParametersCallback(presenter: UIViewController, additionalParameters: NSDictionary<string, string>, callback: (p1: OktaOidcStateManager, p2: NSError) => void): void;

	signInWithBrowserFromCallback(presenter: UIViewController, callback: (p1: OktaOidcStateManager, p2: NSError) => void): void;

	signOutOfOktaFromCallback(authStateManager: OktaOidcStateManager, presenter: UIViewController, callback: (p1: NSError) => void): void;
}

interface OktaOidcBrowserProtocolIOS {
	cancelBrowserSessionWithCompletion(completion: () => void): void;

	signInWithBrowserFromCallback(presenter: UIViewController, callback: (p1: OktaOidcStateManager, p2: NSError) => void): void;

	signOutOfOktaFromCallback(authStateManager: OktaOidcStateManager, presenter: UIViewController, callback: (p1: NSError) => void): void;
}
declare var OktaOidcBrowserProtocolIOS: {
	prototype: OktaOidcBrowserProtocolIOS;
};

declare class OktaOidcConfig extends NSObject {
	static alloc(): OktaOidcConfig; // inherited from NSObject

	static defaultAndReturnError(): OktaOidcConfig;

	static new(): OktaOidcConfig; // inherited from NSObject

	readonly additionalParams: NSDictionary<string, string>;

	readonly clientId: string;

	readonly issuer: string;

	readonly logoutRedirectUri: NSURL;

	noSSO: boolean;

	readonly redirectUri: NSURL;

	requestCustomizationDelegate: OktaNetworkRequestCustomizationDelegate;

	readonly scopes: string;

	tokenValidator: OKTTokenValidator;

	static readonly defaultPlistName: string;

	constructor(o: { fromPlist: string });

	constructor();

	initFromPlistError(plistName: string): this;

	initWithError(dict: NSDictionary<string, string>): this;
}

declare class OktaOidcKeychain extends NSObject {
	static alloc(): OktaOidcKeychain; // inherited from NSObject

	static new(): OktaOidcKeychain; // inherited from NSObject
}

declare class OktaOidcStateManager extends NSObject implements NSSecureCoding {
	static alloc(): OktaOidcStateManager; // inherited from NSObject

	static decodeJWTError(token: string): NSDictionary<string, any>;

	static new(): OktaOidcStateManager; // inherited from NSObject

	static readFromSecureStorage(): OktaOidcStateManager;

	static readFromSecureStorageFor(config: OktaOidcConfig): OktaOidcStateManager;

	static setSupportsSecureCoding(value: boolean): void;

	readonly accessToken: string;

	accessibility: string;

	authState: OKTAuthState;

	readonly idToken: string;

	readonly refreshToken: string;

	requestCustomizationDelegate: OktaNetworkRequestCustomizationDelegate;

	tokenValidator: OKTTokenValidator;

	static supportsSecureCoding: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { authState: OKTAuthState; accessibility: string });

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	clear(): void;

	encodeWithCoder(coder: NSCoder): void;

	getUser(callback: (p1: NSDictionary<string, any>, p2: NSError) => void): void;

	initWithAuthStateAccessibility(authState: OKTAuthState, accessibility: string): this;

	initWithCoder(coder: NSCoder): this;

	introspectWithTokenCallback(token: string, callback: (p1: NSDictionary<string, any>, p2: NSError) => void): void;

	removeFromSecureStorageAndReturnError(): boolean;

	renewWithCallback(callback: (p1: OktaOidcStateManager, p2: NSError) => void): void;

	revokeCallback(token: string, callback: (p1: boolean, p2: NSError) => void): void;

	validateTokenWithIdToken(idToken: string): NSError;

	writeToSecureStorage(): void;
}

declare class OktaOidcUtils extends NSObject {
	static alloc(): OktaOidcUtils; // inherited from NSObject

	static new(): OktaOidcUtils; // inherited from NSObject
}

declare var OktaOidcVersionNumber: number;

declare var OktaOidcVersionString: interop.Reference<number>;

declare class OktaUserAgent extends NSObject {
	static alloc(): OktaUserAgent; // inherited from NSObject

	static new(): OktaUserAgent; // inherited from NSObject

	static setUserAgentValue(value: string): void;

	static userAgentHeaderKey(): string;

	static userAgentHeaderValue(): string;

	static userAgentVersion(): string;
}

declare var gOKTURLQueryComponentForceIOS7Handling: boolean;

declare var kOKTAuthorizationSessionIATMaxSkew: number;
