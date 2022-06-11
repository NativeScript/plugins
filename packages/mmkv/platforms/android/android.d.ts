declare module com {
	export module tencent {
		export module mmkv {
			export class BuildConfig {
				public static class: java.lang.Class<com.tencent.mmkv.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tencent {
		export module mmkv {
			export class MMKV {
				public static class: java.lang.Class<com.tencent.mmkv.MMKV>;
				public static SINGLE_PROCESS_MODE: number;
				public static MULTI_PROCESS_MODE: number;
				public sync(): void;
				public static unregisterHandler(): void;
				public unlock(): void;
				public putLong(param0: string, param1: number): globalAndroid.content.SharedPreferences.Editor;
				public static backedUpMMKVWithID(param0: string, param1: number, param2: string, param3: string): com.tencent.mmkv.MMKV;
				public decodeDouble(param0: string, param1: number): number;
				public static onExit(): void;
				public decodeDouble(param0: string): number;
				public getString(param0: string, param1: string): string;
				public decodeStringSet(param0: string, param1: java.util.Set<string>): java.util.Set<string>;
				public putFloat(param0: string, param1: number): globalAndroid.content.SharedPreferences.Editor;
				public allKeys(): androidNative.Array<string>;
				public static mmkvWithID(param0: string, param1: number, param2: string, param3: string): com.tencent.mmkv.MMKV;
				public tryLock(): boolean;
				public putBytes(param0: string, param1: androidNative.Array<number>): globalAndroid.content.SharedPreferences.Editor;
				public static registerHandler(param0: com.tencent.mmkv.MMKVHandler): void;
				public static initialize(param0: globalAndroid.content.Context, param1: string, param2: com.tencent.mmkv.MMKVLogLevel): string;
				public static backupAllToDirectory(param0: string): number;
				/** @deprecated */
				public static initialize(param0: string, param1: com.tencent.mmkv.MMKV.LibLoader, param2: com.tencent.mmkv.MMKVLogLevel): string;
				public mmapID(): string;
				public static mmkvWithID(param0: string, param1: number, param2: string): com.tencent.mmkv.MMKV;
				public static initialize(param0: globalAndroid.content.Context, param1: com.tencent.mmkv.MMKV.LibLoader, param2: com.tencent.mmkv.MMKVLogLevel): string;
				public cryptKey(): string;
				public getBoolean(param0: string, param1: boolean): boolean;
				public static initialize(param0: globalAndroid.content.Context, param1: com.tencent.mmkv.MMKVLogLevel): string;
				public getBytes(param0: string, param1: androidNative.Array<number>): androidNative.Array<number>;
				public getLong(param0: string, param1: number): number;
				public decodeFloat(param0: string): number;
				public getValueSize(param0: string): number;
				/** @deprecated */
				public static initialize(param0: string, param1: com.tencent.mmkv.MMKV.LibLoader): string;
				public actualSize(): number;
				public clearAll(): void;
				public decodeInt(param0: string, param1: number): number;
				public reKey(param0: string): boolean;
				public clear(): globalAndroid.content.SharedPreferences.Editor;
				public encode(param0: string, param1: string): boolean;
				public containsKey(param0: string): boolean;
				public decodeInt(param0: string): number;
				public decodeStringSet(param0: string): java.util.Set<string>;
				public static pageSize(): number;
				public importFromSharedPreferences(param0: globalAndroid.content.SharedPreferences): number;
				public getValueActualSize(param0: string): number;
				public static getRootDir(): string;
				public putStringSet(param0: string, param1: java.util.Set<string>): globalAndroid.content.SharedPreferences.Editor;
				public contains(param0: string): boolean;
				public decodeString(param0: string): string;
				public static createNativeBuffer(param0: number): com.tencent.mmkv.NativeBuffer;
				public writeValueToNativeBuffer(param0: string, param1: com.tencent.mmkv.NativeBuffer): number;
				/** @deprecated */
				public commit(): boolean;
				public static mmkvWithID(param0: string): com.tencent.mmkv.MMKV;
				public checkReSetCryptKey(param0: string): void;
				public static backupOneToDirectory(param0: string, param1: string, param2: string): boolean;
				public static isFileValid(param0: string): boolean;
				public getAll(): java.util.Map<string, any>;
				public static mmkvWithAshmemID(param0: globalAndroid.content.Context, param1: string, param2: number, param3: number, param4: string): com.tencent.mmkv.MMKV;
				public unregisterOnSharedPreferenceChangeListener(param0: globalAndroid.content.SharedPreferences.OnSharedPreferenceChangeListener): void;
				public static defaultMMKV(): com.tencent.mmkv.MMKV;
				/** @deprecated */
				public apply(): void;
				public clearMemoryCache(): void;
				public static mmkvWithAshmemFD(param0: string, param1: number, param2: number, param3: string): com.tencent.mmkv.MMKV;
				public static isFileValid(param0: string, param1: string): boolean;
				public static initialize(param0: globalAndroid.content.Context, param1: string, param2: com.tencent.mmkv.MMKV.LibLoader): string;
				public static setLogLevel(param0: com.tencent.mmkv.MMKVLogLevel): void;
				public remove(param0: string): globalAndroid.content.SharedPreferences.Editor;
				public static initialize(param0: globalAndroid.content.Context, param1: string, param2: com.tencent.mmkv.MMKV.LibLoader, param3: com.tencent.mmkv.MMKVLogLevel): string;
				public decodeFloat(param0: string, param1: number): number;
				public decodeString(param0: string, param1: string): string;
				public count(): number;
				public checkContentChangedByOuterProcess(): void;
				public encode(param0: string, param1: boolean): boolean;
				public static initialize(param0: globalAndroid.content.Context): string;
				public decodeStringSet(param0: string, param1: java.util.Set<string>, param2: java.lang.Class<any>): java.util.Set<string>;
				public static version(): string;
				public encode(param0: string, param1: globalAndroid.os.Parcelable): boolean;
				public static defaultMMKV(param0: number, param1: string): com.tencent.mmkv.MMKV;
				public ashmemFD(): number;
				public putString(param0: string, param1: string): globalAndroid.content.SharedPreferences.Editor;
				public getFloat(param0: string, param1: number): number;
				public static initialize(param0: globalAndroid.content.Context, param1: com.tencent.mmkv.MMKV.LibLoader): string;
				public decodeBool(param0: string, param1: boolean): boolean;
				public totalSize(): number;
				public decodeBool(param0: string): boolean;
				public close(): void;
				public decodeBytes(param0: string, param1: androidNative.Array<number>): androidNative.Array<number>;
				public static registerContentChangeNotify(param0: com.tencent.mmkv.MMKVContentChangeNotification): void;
				public getInt(param0: string, param1: number): number;
				public encode(param0: string, param1: number): boolean;
				public ashmemMetaFD(): number;
				public static initialize(param0: globalAndroid.content.Context, param1: string): string;
				public encode(param0: string, param1: java.util.Set<string>): boolean;
				public edit(): globalAndroid.content.SharedPreferences.Editor;
				public static unregisterContentChangeNotify(): void;
				public encode(param0: string, param1: androidNative.Array<number>): boolean;
				/** @deprecated */
				public static initialize(param0: string): string;
				public trim(): void;
				public removeValuesForKeys(param0: androidNative.Array<string>): void;
				public decodeParcelable(param0: string, param1: java.lang.Class<any>, param2: globalAndroid.os.Parcelable): globalAndroid.os.Parcelable;
				public lock(): void;
				public static restoreAllFromDirectory(param0: string): number;
				public putBoolean(param0: string, param1: boolean): globalAndroid.content.SharedPreferences.Editor;
				public decodeLong(param0: string, param1: number): number;
				public static mmkvWithID(param0: string, param1: number): com.tencent.mmkv.MMKV;
				public static mmkvWithID(param0: string, param1: string): com.tencent.mmkv.MMKV;
				public removeValueForKey(param0: string): void;
				public static destroyNativeBuffer(param0: com.tencent.mmkv.NativeBuffer): void;
				public static enableProcessModeChecker(): void;
				public registerOnSharedPreferenceChangeListener(param0: globalAndroid.content.SharedPreferences.OnSharedPreferenceChangeListener): void;
				public decodeParcelable(param0: string, param1: java.lang.Class<any>): globalAndroid.os.Parcelable;
				public decodeLong(param0: string): number;
				public getStringSet(param0: string, param1: java.util.Set<string>): java.util.Set<string>;
				public async(): void;
				public static disableProcessModeChecker(): void;
				public putInt(param0: string, param1: number): globalAndroid.content.SharedPreferences.Editor;
				public decodeBytes(param0: string): androidNative.Array<number>;
				/** @deprecated */
				public static initialize(param0: string, param1: com.tencent.mmkv.MMKVLogLevel): string;
				public static restoreOneMMKVFromDirectory(param0: string, param1: string, param2: string): boolean;
			}
			export module MMKV {
				export class LibLoader {
					public static class: java.lang.Class<com.tencent.mmkv.MMKV.LibLoader>;
					/**
					 * Constructs a new instance of the com.tencent.mmkv.MMKV$LibLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { loadLibrary(param0: string): void });
					public constructor();
					public loadLibrary(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module mmkv {
			export class MMKVContentChangeNotification {
				public static class: java.lang.Class<com.tencent.mmkv.MMKVContentChangeNotification>;
				/**
				 * Constructs a new instance of the com.tencent.mmkv.MMKVContentChangeNotification interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onContentChangedByOuterProcess(param0: string): void });
				public constructor();
				public onContentChangedByOuterProcess(param0: string): void;
			}
		}
	}
}

declare module com {
	export module tencent {
		export module mmkv {
			export class MMKVContentProvider {
				public static class: java.lang.Class<com.tencent.mmkv.MMKVContentProvider>;
				public static KEY: string;
				public static KEY_SIZE: string;
				public static KEY_MODE: string;
				public static KEY_CRYPT: string;
				public static FUNCTION_NAME: string;
				public static getProcessNameByPID(param0: globalAndroid.content.Context, param1: number): string;
				public getType(param0: globalAndroid.net.Uri): string;
				public static contentUri(param0: globalAndroid.content.Context): globalAndroid.net.Uri;
				public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
				public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
				public call(param0: string, param1: string, param2: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
				public delete(param0: globalAndroid.net.Uri, param1: string, param2: androidNative.Array<string>): number;
				public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string): globalAndroid.database.Cursor;
				public onCreate(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tencent {
		export module mmkv {
			export class MMKVHandler {
				public static class: java.lang.Class<com.tencent.mmkv.MMKVHandler>;
				/**
				 * Constructs a new instance of the com.tencent.mmkv.MMKVHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onMMKVCRCCheckFail(param0: string): com.tencent.mmkv.MMKVRecoverStrategic; onMMKVFileLengthError(param0: string): com.tencent.mmkv.MMKVRecoverStrategic; wantLogRedirecting(): boolean; mmkvLog(param0: com.tencent.mmkv.MMKVLogLevel, param1: string, param2: number, param3: string, param4: string): void });
				public constructor();
				public wantLogRedirecting(): boolean;
				public mmkvLog(param0: com.tencent.mmkv.MMKVLogLevel, param1: string, param2: number, param3: string, param4: string): void;
				public onMMKVFileLengthError(param0: string): com.tencent.mmkv.MMKVRecoverStrategic;
				public onMMKVCRCCheckFail(param0: string): com.tencent.mmkv.MMKVRecoverStrategic;
			}
		}
	}
}

declare module com {
	export module tencent {
		export module mmkv {
			export class MMKVLogLevel {
				public static class: java.lang.Class<com.tencent.mmkv.MMKVLogLevel>;
				public static LevelDebug: com.tencent.mmkv.MMKVLogLevel;
				public static LevelInfo: com.tencent.mmkv.MMKVLogLevel;
				public static LevelWarning: com.tencent.mmkv.MMKVLogLevel;
				public static LevelError: com.tencent.mmkv.MMKVLogLevel;
				public static LevelNone: com.tencent.mmkv.MMKVLogLevel;
				public static valueOf(param0: string): com.tencent.mmkv.MMKVLogLevel;
				public static values(): androidNative.Array<com.tencent.mmkv.MMKVLogLevel>;
			}
		}
	}
}

declare module com {
	export module tencent {
		export module mmkv {
			export class MMKVRecoverStrategic {
				public static class: java.lang.Class<com.tencent.mmkv.MMKVRecoverStrategic>;
				public static OnErrorDiscard: com.tencent.mmkv.MMKVRecoverStrategic;
				public static OnErrorRecover: com.tencent.mmkv.MMKVRecoverStrategic;
				public static valueOf(param0: string): com.tencent.mmkv.MMKVRecoverStrategic;
				public static values(): androidNative.Array<com.tencent.mmkv.MMKVRecoverStrategic>;
			}
		}
	}
}

declare module com {
	export module tencent {
		export module mmkv {
			export class NativeBuffer {
				public static class: java.lang.Class<com.tencent.mmkv.NativeBuffer>;
				public pointer: number;
				public size: number;
				public constructor(param0: number, param1: number);
			}
		}
	}
}

declare module com {
	export module tencent {
		export module mmkv {
			export class ParcelableMMKV {
				public static class: java.lang.Class<com.tencent.mmkv.ParcelableMMKV>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.tencent.mmkv.ParcelableMMKV>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public toMMKV(): com.tencent.mmkv.MMKV;
				public describeContents(): number;
				public constructor(param0: com.tencent.mmkv.MMKV);
			}
		}
	}
}

//Generics information:
