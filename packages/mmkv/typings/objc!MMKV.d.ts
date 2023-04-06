declare class MMKV extends NSObject {
	static alloc(): MMKV; // inherited from NSObject

	static backupAllMultiProcessToDirectory(dstDir: string): number;

	static backupAllToDirectory(rootPath: string, dstDir: string): number;

	static backupMultiProcessMMKVToDirectory(mmapID: string, dstDir: string): boolean;

	static backupOneMMKVRootPathToDirectory(mmapID: string, rootPath: string, dstDir: string): boolean;

	static defaultMMKV(): MMKV;

	static defaultMMKVWithCryptKey(cryptKey: NSData): MMKV;

	static disableAutoCleanUp(): void;

	static enableAutoCleanUp(maxIdleMinutes: number): void;

	static initializeMMKV(rootDir: string): string;

	static initializeMMKVGroupDirLogLevel(rootDir: string, groupDir: string, logLevel: MMKVLogLevel): string;

	static initializeMMKVLogLevel(rootDir: string, logLevel: MMKVLogLevel): string;

	static isFileValid(mmapID: string): boolean;

	static isFileValidRootPath(mmapID: string, path: string): boolean;

	static mmkvBasePath(): string;

	static mmkvWithID(mmapID: string): MMKV;

	static mmkvWithIDCryptKey(mmapID: string, cryptKey: NSData): MMKV;

	static mmkvWithIDCryptKeyMode(mmapID: string, cryptKey: NSData, mode: MMKVMode): MMKV;

	static mmkvWithIDCryptKeyRelativePath(mmapID: string, cryptKey: NSData, relativePath: string): MMKV;

	static mmkvWithIDCryptKeyRootPath(mmapID: string, cryptKey: NSData, rootPath: string): MMKV;

	static mmkvWithIDMode(mmapID: string, mode: MMKVMode): MMKV;

	static mmkvWithIDRelativePath(mmapID: string, relativePath: string): MMKV;

	static mmkvWithIDRootPath(mmapID: string, rootPath: string): MMKV;

	static new(): MMKV; // inherited from NSObject

	static onAppTerminate(): void;

	static pageSize(): number;

	static registerHandler(handler: MMKVHandler): void;

	static restoreAllFromDirectory(rootPath: string, srcDir: string): number;

	static restoreAllMultiProcessFromDirectory(srcDir: string): number;

	static restoreMultiProcessMMKVFromDirectory(mmapID: string, srcDir: string): boolean;

	static restoreOneMMKVRootPathFromDirectory(mmapID: string, rootPath: string, srcDir: string): boolean;

	static setLogLevel(logLevel: MMKVLogLevel): void;

	static setMMKVBasePath(basePath: string): void;

	static unregiserHandler(): void;

	actualSize(): number;

	allKeys(): NSArray<any>;

	async(): void;

	checkContentChanged(): void;

	checkReSetCryptKey(cryptKey: NSData): void;

	clearAll(): void;

	clearMemoryCache(): void;

	close(): void;

	containsKey(key: string): boolean;

	count(): number;

	cryptKey(): NSData;

	enumerateKeys(block: (p1: string, p2: interop.Pointer | interop.Reference<boolean>) => void): void;

	getBoolForKey(key: string): boolean;

	getBoolForKeyDefaultValue(key: string, defaultValue: boolean): boolean;

	getBoolForKeyDefaultValueHasValue(key: string, defaultValue: boolean, hasValue: interop.Pointer | interop.Reference<boolean>): boolean;

	getDataForKey(key: string): NSData;

	getDataForKeyDefaultValue(key: string, defaultValue: NSData): NSData;

	getDataForKeyDefaultValueHasValue(key: string, defaultValue: NSData, hasValue: interop.Pointer | interop.Reference<boolean>): NSData;

	getDateForKey(key: string): Date;

	getDateForKeyDefaultValue(key: string, defaultValue: Date): Date;

	getDateForKeyDefaultValueHasValue(key: string, defaultValue: Date, hasValue: interop.Pointer | interop.Reference<boolean>): Date;

	getDoubleForKey(key: string): number;

	getDoubleForKeyDefaultValue(key: string, defaultValue: number): number;

	getDoubleForKeyDefaultValueHasValue(key: string, defaultValue: number, hasValue: interop.Pointer | interop.Reference<boolean>): number;

	getFloatForKey(key: string): number;

	getFloatForKeyDefaultValue(key: string, defaultValue: number): number;

	getFloatForKeyDefaultValueHasValue(key: string, defaultValue: number, hasValue: interop.Pointer | interop.Reference<boolean>): number;

	getInt32ForKey(key: string): number;

	getInt32ForKeyDefaultValue(key: string, defaultValue: number): number;

	getInt32ForKeyDefaultValueHasValue(key: string, defaultValue: number, hasValue: interop.Pointer | interop.Reference<boolean>): number;

	getInt64ForKey(key: string): number;

	getInt64ForKeyDefaultValue(key: string, defaultValue: number): number;

	getInt64ForKeyDefaultValueHasValue(key: string, defaultValue: number, hasValue: interop.Pointer | interop.Reference<boolean>): number;

	getObjectOfClassForKey(cls: typeof NSObject, key: string): any;

	getStringForKey(key: string): string;

	getStringForKeyDefaultValue(key: string, defaultValue: string): string;

	getStringForKeyDefaultValueHasValue(key: string, defaultValue: string, hasValue: interop.Pointer | interop.Reference<boolean>): string;

	getUInt32ForKey(key: string): number;

	getUInt32ForKeyDefaultValue(key: string, defaultValue: number): number;

	getUInt32ForKeyDefaultValueHasValue(key: string, defaultValue: number, hasValue: interop.Pointer | interop.Reference<boolean>): number;

	getUInt64ForKey(key: string): number;

	getUInt64ForKeyDefaultValue(key: string, defaultValue: number): number;

	getUInt64ForKeyDefaultValueHasValue(key: string, defaultValue: number, hasValue: interop.Pointer | interop.Reference<boolean>): number;

	getValueSizeForKeyActualSize(key: string, actualSize: boolean): number;

	migrateFromUserDefaults(userDaults: NSUserDefaults): number;

	mmapID(): string;

	reKey(newKey: NSData): boolean;

	removeValueForKey(key: string): void;

	removeValuesForKeys(arrKeys: NSArray<string> | string[]): void;

	setBoolForKey(value: boolean, key: string): boolean;

	setDataForKey(value: NSData, key: string): boolean;

	setDateForKey(value: Date, key: string): boolean;

	setDoubleForKey(value: number, key: string): boolean;

	setFloatForKey(value: number, key: string): boolean;

	setInt32ForKey(value: number, key: string): boolean;

	setInt64ForKey(value: number, key: string): boolean;

	setObjectForKey(object: NSObject, key: string): boolean;

	setStringForKey(value: string, key: string): boolean;

	setUInt32ForKey(value: number, key: string): boolean;

	setUInt64ForKey(value: number, key: string): boolean;

	sync(): void;

	totalSize(): number;

	trim(): void;

	writeValueForKeyToBuffer(key: string, buffer: NSMutableData): number;
}

interface MMKVHandler extends NSObjectProtocol {
	mmkvLogWithLevelFileLineFuncMessage?(level: MMKVLogLevel, file: string | interop.Pointer | interop.Reference<any>, line: number, funcname: string | interop.Pointer | interop.Reference<any>, message: string): void;

	onMMKVCRCCheckFail?(mmapID: string): MMKVRecoverStrategic;

	onMMKVContentChange?(mmapID: string): void;

	onMMKVFileLengthError?(mmapID: string): MMKVRecoverStrategic;
}
declare var MMKVHandler: {
	prototype: MMKVHandler;
};

declare const enum MMKVLogLevel {
	Debug = 0,

	Info = 1,

	Warning = 2,

	Error = 3,

	None = 4,
}

declare const enum MMKVMode {
	SingleProcess = 1,

	MultiProcess = 2,
}

declare const enum MMKVRecoverStrategic {
	OnErrorDiscard = 0,

	OnErrorRecover = 1,
}

declare var MMKVVersionNumber: number;

declare var MMKVVersionString: interop.Reference<number>;
