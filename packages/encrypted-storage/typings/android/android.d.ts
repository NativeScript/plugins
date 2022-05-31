/// <reference path="android-declarations.d.ts"/>

declare module androidx {
	export module security {
		export module crypto {
			export class EncryptedFile {
				public static class: java.lang.Class<androidx.security.crypto.EncryptedFile>;
				public openFileInput(): java.io.FileInputStream;
				public openFileOutput(): java.io.FileOutputStream;
			}
			export module EncryptedFile {
				export class Builder {
					public static class: java.lang.Class<androidx.security.crypto.EncryptedFile.Builder>;
					public setKeysetPrefName(param0: string): androidx.security.crypto.EncryptedFile.Builder;
					public build(): androidx.security.crypto.EncryptedFile;
					public setKeysetAlias(param0: string): androidx.security.crypto.EncryptedFile.Builder;
					public constructor(param0: java.io.File, param1: globalAndroid.content.Context, param2: string, param3: androidx.security.crypto.EncryptedFile.FileEncryptionScheme);
				}
				export class EncryptedFileInputStream {
					public static class: java.lang.Class<androidx.security.crypto.EncryptedFile.EncryptedFileInputStream>;
					public available(): number;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public getChannel(): java.nio.channels.FileChannel;
					public reset(): void;
					public read(param0: native.Array<number>): number;
					public markSupported(): boolean;
					public skip(param0: number): number;
					public close(): void;
					public mark(param0: number): void;
				}
				export class EncryptedFileOutputStream {
					public static class: java.lang.Class<androidx.security.crypto.EncryptedFile.EncryptedFileOutputStream>;
					public write(param0: native.Array<number>, param1: number, param2: number): void;
					public getChannel(): java.nio.channels.FileChannel;
					public write(param0: native.Array<number>): void;
					public close(): void;
					public write(param0: number): void;
					public flush(): void;
				}
				export class FileEncryptionScheme {
					public static class: java.lang.Class<androidx.security.crypto.EncryptedFile.FileEncryptionScheme>;
					public static AES256_GCM_HKDF_4KB: androidx.security.crypto.EncryptedFile.FileEncryptionScheme;
					public static valueOf(param0: string): androidx.security.crypto.EncryptedFile.FileEncryptionScheme;
					public static values(): native.Array<androidx.security.crypto.EncryptedFile.FileEncryptionScheme>;
				}
			}
		}
	}
}

declare module androidx {
	export module security {
		export module crypto {
			export class EncryptedSharedPreferences {
				public static class: java.lang.Class<androidx.security.crypto.EncryptedSharedPreferences>;
				public getString(param0: string, param1: string): string;
				public static create(param0: string, param1: string, param2: globalAndroid.content.Context, param3: androidx.security.crypto.EncryptedSharedPreferences.PrefKeyEncryptionScheme, param4: androidx.security.crypto.EncryptedSharedPreferences.PrefValueEncryptionScheme): globalAndroid.content.SharedPreferences;
				public getLong(param0: string, param1: number): number;
				public contains(param0: string): boolean;
				public unregisterOnSharedPreferenceChangeListener(param0: globalAndroid.content.SharedPreferences.OnSharedPreferenceChangeListener): void;
				public getStringSet(param0: string, param1: java.util.Set<string>): java.util.Set<string>;
				public edit(): globalAndroid.content.SharedPreferences.Editor;
				public getBoolean(param0: string, param1: boolean): boolean;
				public getInt(param0: string, param1: number): number;
				public getAll(): java.util.Map<string, any>;
				public registerOnSharedPreferenceChangeListener(param0: globalAndroid.content.SharedPreferences.OnSharedPreferenceChangeListener): void;
				public getFloat(param0: string, param1: number): number;
			}
			export module EncryptedSharedPreferences {
				export class Editor {
					public static class: java.lang.Class<androidx.security.crypto.EncryptedSharedPreferences.Editor>;
					public putString(param0: string, param1: string): globalAndroid.content.SharedPreferences.Editor;
					public commit(): boolean;
					public putInt(param0: string, param1: number): globalAndroid.content.SharedPreferences.Editor;
					public putBoolean(param0: string, param1: boolean): globalAndroid.content.SharedPreferences.Editor;
					public putLong(param0: string, param1: number): globalAndroid.content.SharedPreferences.Editor;
					public remove(param0: string): globalAndroid.content.SharedPreferences.Editor;
					public putStringSet(param0: string, param1: java.util.Set<string>): globalAndroid.content.SharedPreferences.Editor;
					public putFloat(param0: string, param1: number): globalAndroid.content.SharedPreferences.Editor;
					public clear(): globalAndroid.content.SharedPreferences.Editor;
					public apply(): void;
				}
				export class EncryptedType {
					public static class: java.lang.Class<androidx.security.crypto.EncryptedSharedPreferences.EncryptedType>;
					public static STRING: androidx.security.crypto.EncryptedSharedPreferences.EncryptedType;
					public static STRING_SET: androidx.security.crypto.EncryptedSharedPreferences.EncryptedType;
					public static INT: androidx.security.crypto.EncryptedSharedPreferences.EncryptedType;
					public static LONG: androidx.security.crypto.EncryptedSharedPreferences.EncryptedType;
					public static FLOAT: androidx.security.crypto.EncryptedSharedPreferences.EncryptedType;
					public static BOOLEAN: androidx.security.crypto.EncryptedSharedPreferences.EncryptedType;
					public getId(): number;
					public static fromId(param0: number): androidx.security.crypto.EncryptedSharedPreferences.EncryptedType;
					public static values(): native.Array<androidx.security.crypto.EncryptedSharedPreferences.EncryptedType>;
					public static valueOf(param0: string): androidx.security.crypto.EncryptedSharedPreferences.EncryptedType;
				}
				export class PrefKeyEncryptionScheme {
					public static class: java.lang.Class<androidx.security.crypto.EncryptedSharedPreferences.PrefKeyEncryptionScheme>;
					public static AES256_SIV: androidx.security.crypto.EncryptedSharedPreferences.PrefKeyEncryptionScheme;
					public static values(): native.Array<androidx.security.crypto.EncryptedSharedPreferences.PrefKeyEncryptionScheme>;
					public static valueOf(param0: string): androidx.security.crypto.EncryptedSharedPreferences.PrefKeyEncryptionScheme;
				}
				export class PrefValueEncryptionScheme {
					public static class: java.lang.Class<androidx.security.crypto.EncryptedSharedPreferences.PrefValueEncryptionScheme>;
					public static AES256_GCM: androidx.security.crypto.EncryptedSharedPreferences.PrefValueEncryptionScheme;
					public static valueOf(param0: string): androidx.security.crypto.EncryptedSharedPreferences.PrefValueEncryptionScheme;
					public static values(): native.Array<androidx.security.crypto.EncryptedSharedPreferences.PrefValueEncryptionScheme>;
				}
			}
		}
	}
}

declare module androidx {
	export module security {
		export module crypto {
			export class MasterKeys {
				public static class: java.lang.Class<androidx.security.crypto.MasterKeys>;
				public static AES256_GCM_SPEC: globalAndroid.security.keystore.KeyGenParameterSpec;
				public static getOrCreate(param0: globalAndroid.security.keystore.KeyGenParameterSpec): string;
			}
		}
	}
}

//Generics information:
