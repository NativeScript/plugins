declare class UMPConsentForm extends NSObject {
	static alloc(): UMPConsentForm; // inherited from NSObject

	static loadWithCompletionHandler(completionHandler: (p1: UMPConsentForm, p2: NSError) => void): void;

	static new(): UMPConsentForm; // inherited from NSObject

	presentFromViewControllerCompletionHandler(viewController: UIViewController, completionHandler: (p1: NSError) => void): void;
}

declare class UMPConsentInformation extends NSObject {
	static alloc(): UMPConsentInformation; // inherited from NSObject

	static new(): UMPConsentInformation; // inherited from NSObject

	readonly consentStatus: UMPConsentStatus;

	readonly formStatus: UMPFormStatus;

	static readonly sharedInstance: UMPConsentInformation;

	requestConsentInfoUpdateWithParametersCompletionHandler(parameters: UMPRequestParameters, handler: (p1: NSError) => void): void;

	reset(): void;
}

declare const enum UMPConsentStatus {
	Unknown = 0,

	Required = 1,

	NotRequired = 2,

	Obtained = 3,
}

declare const enum UMPDebugGeography {
	Disabled = 0,

	EEA = 1,

	NotEEA = 2,
}

declare class UMPDebugSettings extends NSObject implements NSCopying {
	static alloc(): UMPDebugSettings; // inherited from NSObject

	static new(): UMPDebugSettings; // inherited from NSObject

	geography: UMPDebugGeography;

	testDeviceIdentifiers: NSArray<string>;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare var UMPErrorDomain: string;

declare const enum UMPFormErrorCode {
	Internal = 5,

	AlreadyUsed = 6,

	Unavailable = 7,

	Timeout = 8,
}

declare const enum UMPFormStatus {
	Unknown = 0,

	Available = 1,

	Unavailable = 2,
}

declare const enum UMPRequestErrorCode {
	Internal = 1,

	InvalidAppID = 2,

	Network = 3,

	Misconfiguration = 4,
}

declare class UMPRequestParameters extends NSObject {
	static alloc(): UMPRequestParameters; // inherited from NSObject

	static new(): UMPRequestParameters; // inherited from NSObject

	debugSettings: UMPDebugSettings;

	tagForUnderAgeOfConsent: boolean;
}

declare var UMPVersionString: string;
