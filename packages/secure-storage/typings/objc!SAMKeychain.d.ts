declare class SAMKeychain extends NSObject {
	static accessibilityType(): any;

	static accountsForService(serviceName: string): NSArray<NSDictionary<string, any>>;

	static accountsForServiceError(serviceName: string): NSArray<NSDictionary<string, any>>;

	static allAccounts(): NSArray<NSDictionary<string, any>>;

	static alloc(): SAMKeychain; // inherited from NSObject

	static deletePasswordForServiceAccount(serviceName: string, account: string): boolean;

	static deletePasswordForServiceAccountError(serviceName: string, account: string): boolean;

	static new(): SAMKeychain; // inherited from NSObject

	static passwordDataForServiceAccount(serviceName: string, account: string): NSData;

	static passwordDataForServiceAccountError(serviceName: string, account: string): NSData;

	static passwordForServiceAccount(serviceName: string, account: string): string;

	static passwordForServiceAccountError(serviceName: string, account: string): string;

	static setAccessibilityType(accessibilityType: any): void;

	static setPasswordDataForServiceAccount(password: NSData, serviceName: string, account: string): boolean;

	static setPasswordDataForServiceAccountError(password: NSData, serviceName: string, account: string): boolean;

	static setPasswordForServiceAccount(password: string, serviceName: string, account: string): boolean;

	static setPasswordForServiceAccountError(password: string, serviceName: string, account: string): boolean;
}

declare const enum SAMKeychainErrorCode {
	BadArguments = -1001,
}

declare class SAMKeychainQuery extends NSObject {
	static alloc(): SAMKeychainQuery; // inherited from NSObject

	static isSynchronizationAvailable(): boolean;

	static new(): SAMKeychainQuery; // inherited from NSObject

	accessGroup: string;

	account: string;

	label: string;

	password: string;

	passwordData: NSData;

	passwordObject: NSCoding;

	service: string;

	synchronizationMode: SAMKeychainQuerySynchronizationMode;

	deleteItem(): boolean;

	fetch(): boolean;

	fetchAll(): NSArray<NSDictionary<string, any>>;

	save(): boolean;
}

declare const enum SAMKeychainQuerySynchronizationMode {
	Any = 0,

	No = 1,

	Yes = 2,
}

declare var SAMKeychainVersionNumber: number;

declare var SAMKeychainVersionString: interop.Reference<number>;

declare var kSAMKeychainAccountKey: string;

declare var kSAMKeychainClassKey: string;

declare var kSAMKeychainCreatedAtKey: string;

declare var kSAMKeychainDescriptionKey: string;

declare var kSAMKeychainErrorDomain: string;

declare var kSAMKeychainLabelKey: string;

declare var kSAMKeychainLastModifiedKey: string;

declare var kSAMKeychainWhereKey: string;
