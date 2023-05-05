declare class GIDConfiguration extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): GIDConfiguration; // inherited from NSObject

	static new(): GIDConfiguration; // inherited from NSObject

	readonly clientID: string;

	readonly hostedDomain: string;

	readonly openIDRealm: string;

	readonly serverClientID: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { clientID: string });

	constructor(o: { clientID: string; serverClientID: string });

	constructor(o: { clientID: string; serverClientID: string; hostedDomain: string; openIDRealm: string });

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithClientID(clientID: string): this;

	initWithClientIDServerClientID(clientID: string, serverClientID: string): this;

	initWithClientIDServerClientIDHostedDomainOpenIDRealm(clientID: string, serverClientID: string, hostedDomain: string, openIDRealm: string): this;

	initWithCoder(coder: NSCoder): this;
}

declare class GIDGoogleUser extends NSObject implements NSSecureCoding {
	static alloc(): GIDGoogleUser; // inherited from NSObject

	static new(): GIDGoogleUser; // inherited from NSObject

	readonly accessToken: GIDToken;

	readonly configuration: GIDConfiguration;

	readonly fetcherAuthorizer: GTMFetcherAuthorizationProtocol;

	readonly grantedScopes: NSArray<string>;

	readonly idToken: GIDToken;

	readonly profile: GIDProfileData;

	readonly refreshToken: GIDToken;

	readonly userID: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	addScopesPresentingViewControllerCompletion(scopes: NSArray<string> | string[], presentingViewController: UIViewController, completion: (p1: GIDSignInResult, p2: NSError) => void): void;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	refreshTokensIfNeededWithCompletion(completion: (p1: GIDGoogleUser, p2: NSError) => void): void;
}

declare class GIDProfileData extends NSObject implements NSCopying, NSSecureCoding {
	static alloc(): GIDProfileData; // inherited from NSObject

	static new(): GIDProfileData; // inherited from NSObject

	readonly email: string;

	readonly familyName: string;

	readonly givenName: string;

	readonly hasImage: boolean;

	readonly name: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	imageURLWithDimension(dimension: number): NSURL;

	initWithCoder(coder: NSCoder): this;
}

declare class GIDSignIn extends NSObject {
	static alloc(): GIDSignIn; // inherited from NSObject

	static new(): GIDSignIn; // inherited from NSObject

	configuration: GIDConfiguration;

	readonly currentUser: GIDGoogleUser;

	static readonly sharedInstance: GIDSignIn;

	disconnectWithCompletion(completion: (p1: NSError) => void): void;

	handleURL(url: NSURL): boolean;

	hasPreviousSignIn(): boolean;

	restorePreviousSignInWithCompletion(completion: (p1: GIDGoogleUser, p2: NSError) => void): void;

	signInWithPresentingViewControllerCompletion(presentingViewController: UIViewController, completion: (p1: GIDSignInResult, p2: NSError) => void): void;

	signInWithPresentingViewControllerHintAdditionalScopesCompletion(presentingViewController: UIViewController, hint: string, additionalScopes: NSArray<string> | string[], completion: (p1: GIDSignInResult, p2: NSError) => void): void;

	signInWithPresentingViewControllerHintCompletion(presentingViewController: UIViewController, hint: string, completion: (p1: GIDSignInResult, p2: NSError) => void): void;

	signOut(): void;
}

declare class GIDSignInButton extends UIControl {
	static alloc(): GIDSignInButton; // inherited from NSObject

	static appearance(): GIDSignInButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GIDSignInButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GIDSignInButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): GIDSignInButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GIDSignInButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): GIDSignInButton; // inherited from UIAppearance

	static new(): GIDSignInButton; // inherited from NSObject

	colorScheme: GIDSignInButtonColorScheme;

	style: GIDSignInButtonStyle;
}

declare const enum GIDSignInButtonColorScheme {
	kGIDSignInButtonColorSchemeDark = 0,

	kGIDSignInButtonColorSchemeLight = 1,
}

declare const enum GIDSignInButtonStyle {
	kGIDSignInButtonStyleStandard = 0,

	kGIDSignInButtonStyleWide = 1,

	kGIDSignInButtonStyleIconOnly = 2,
}

declare const enum GIDSignInErrorCode {
	kGIDSignInErrorCodeUnknown = -1,

	kGIDSignInErrorCodeKeychain = -2,

	kGIDSignInErrorCodeHasNoAuthInKeychain = -4,

	kGIDSignInErrorCodeCanceled = -5,

	kGIDSignInErrorCodeEMM = -6,

	kGIDSignInErrorCodeScopesAlreadyGranted = -8,

	kGIDSignInErrorCodeMismatchWithCurrentUser = -9,
}

declare class GIDSignInResult extends NSObject {
	static alloc(): GIDSignInResult; // inherited from NSObject

	static new(): GIDSignInResult; // inherited from NSObject

	readonly serverAuthCode: string;

	readonly user: GIDGoogleUser;
}

declare class GIDToken extends NSObject implements NSSecureCoding {
	static alloc(): GIDToken; // inherited from NSObject

	static new(): GIDToken; // inherited from NSObject

	readonly expirationDate: Date;

	readonly tokenString: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	isEqualToToken(otherToken: GIDToken): boolean;
}

declare var GoogleSignInVersionNumber: number;

declare var GoogleSignInVersionString: interop.Reference<number>;

declare var kGIDSignInErrorDomain: string;
