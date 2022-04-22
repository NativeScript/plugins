declare module net {
	export module lingala {
		export module zip4j {
			export class ZipFile {
				public static class: java.lang.Class<net.lingala.zip4j.ZipFile>;
				public getSplitZipFiles(): java.util.List<java.io.File>;
				public isRunInThread(): boolean;
				public renameFiles(param0: java.util.Map<string, string>): void;
				public createSplitZipFileFromFolder(param0: java.io.File, param1: net.lingala.zip4j.model.ZipParameters, param2: boolean, param3: number): void;
				public addFile(param0: java.io.File): void;
				public extractFile(param0: net.lingala.zip4j.model.FileHeader, param1: string, param2: string): void;
				public getInputStream(param0: net.lingala.zip4j.model.FileHeader): net.lingala.zip4j.io.inputstream.ZipInputStream;
				public removeFile(param0: net.lingala.zip4j.model.FileHeader): void;
				public mergeSplitFiles(param0: java.io.File): void;
				public removeFiles(param0: java.util.List<string>): void;
				public getCharset(): java.nio.charset.Charset;
				public setPassword(param0: androidNative.Array<string>): void;
				public constructor(param0: string, param1: androidNative.Array<string>);
				public getComment(): string;
				public isSplitArchive(): boolean;
				public close(): void;
				public extractFile(param0: string, param1: string): void;
				public getExecutorService(): java.util.concurrent.ExecutorService;
				public getProgressMonitor(): net.lingala.zip4j.progress.ProgressMonitor;
				public setRunInThread(param0: boolean): void;
				public extractFile(param0: net.lingala.zip4j.model.FileHeader, param1: string, param2: net.lingala.zip4j.model.UnzipParameters): void;
				public toString(): string;
				public extractFile(param0: net.lingala.zip4j.model.FileHeader, param1: string): void;
				public createSplitZipFile(param0: java.util.List<java.io.File>, param1: net.lingala.zip4j.model.ZipParameters, param2: boolean, param3: number): void;
				public constructor(param0: java.io.File, param1: androidNative.Array<string>);
				public setThreadFactory(param0: java.util.concurrent.ThreadFactory): void;
				public extractFile(param0: net.lingala.zip4j.model.FileHeader, param1: string, param2: string, param3: net.lingala.zip4j.model.UnzipParameters): void;
				public removeFile(param0: string): void;
				public getBufferSize(): number;
				public renameFile(param0: net.lingala.zip4j.model.FileHeader, param1: string): void;
				public addFiles(param0: java.util.List<java.io.File>, param1: net.lingala.zip4j.model.ZipParameters): void;
				public extractFile(param0: string, param1: string, param2: string, param3: net.lingala.zip4j.model.UnzipParameters): void;
				public extractFile(param0: string, param1: string, param2: net.lingala.zip4j.model.UnzipParameters): void;
				public addFolder(param0: java.io.File, param1: net.lingala.zip4j.model.ZipParameters): void;
				public getFileHeaders(): java.util.List<net.lingala.zip4j.model.FileHeader>;
				public addFile(param0: java.io.File, param1: net.lingala.zip4j.model.ZipParameters): void;
				public addStream(param0: java.io.InputStream, param1: net.lingala.zip4j.model.ZipParameters): void;
				public getFileHeader(param0: string): net.lingala.zip4j.model.FileHeader;
				public setBufferSize(param0: number): void;
				public constructor(param0: string);
				public addFiles(param0: java.util.List<java.io.File>): void;
				public extractAll(param0: string, param1: net.lingala.zip4j.model.UnzipParameters): void;
				public setComment(param0: string): void;
				public constructor(param0: java.io.File);
				public isValidZipFile(): boolean;
				public addFile(param0: string): void;
				public addFolder(param0: java.io.File): void;
				public extractFile(param0: string, param1: string, param2: string): void;
				public addFile(param0: string, param1: net.lingala.zip4j.model.ZipParameters): void;
				public renameFile(param0: string, param1: string): void;
				public extractAll(param0: string): void;
				public getFile(): java.io.File;
				public setCharset(param0: java.nio.charset.Charset): void;
				public isEncrypted(): boolean;
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export class AESDecrypter extends net.lingala.zip4j.crypto.Decrypter {
					public static class: java.lang.Class<net.lingala.zip4j.crypto.AESDecrypter>;
					public getCalculatedAuthenticationBytes(): androidNative.Array<number>;
					public decryptData(param0: androidNative.Array<number>, param1: number, param2: number): number;
					public constructor(param0: net.lingala.zip4j.model.AESExtraDataRecord, param1: androidNative.Array<string>, param2: androidNative.Array<number>, param3: androidNative.Array<number>);
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export class AESEncrypter extends net.lingala.zip4j.crypto.Encrypter {
					public static class: java.lang.Class<net.lingala.zip4j.crypto.AESEncrypter>;
					public getSaltBytes(): androidNative.Array<number>;
					public constructor(param0: androidNative.Array<string>, param1: net.lingala.zip4j.model.enums.AesKeyStrength);
					public encryptData(param0: androidNative.Array<number>, param1: number, param2: number): number;
					public getDerivedPasswordVerifier(): androidNative.Array<number>;
					public encryptData(param0: androidNative.Array<number>): number;
					public getFinalMac(): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export class AesCipherUtil {
					public static class: java.lang.Class<net.lingala.zip4j.crypto.AesCipherUtil>;
					public static getMacBasedPRF(param0: androidNative.Array<number>, param1: net.lingala.zip4j.model.enums.AesKeyStrength): net.lingala.zip4j.crypto.PBKDF2.MacBasedPRF;
					public constructor();
					public static derivePasswordBasedKey(param0: androidNative.Array<number>, param1: androidNative.Array<string>, param2: net.lingala.zip4j.model.enums.AesKeyStrength): androidNative.Array<number>;
					public static derivePasswordVerifier(param0: androidNative.Array<number>, param1: net.lingala.zip4j.model.enums.AesKeyStrength): androidNative.Array<number>;
					public static prepareBuffAESIVBytes(param0: androidNative.Array<number>, param1: number): void;
					public static getAESEngine(param0: androidNative.Array<number>, param1: net.lingala.zip4j.model.enums.AesKeyStrength): net.lingala.zip4j.crypto.engine.AESEngine;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export class Decrypter {
					public static class: java.lang.Class<net.lingala.zip4j.crypto.Decrypter>;
					/**
					 * Constructs a new instance of the net.lingala.zip4j.crypto.Decrypter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { decryptData(param0: androidNative.Array<number>, param1: number, param2: number): number });
					public constructor();
					public decryptData(param0: androidNative.Array<number>, param1: number, param2: number): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export class Encrypter {
					public static class: java.lang.Class<net.lingala.zip4j.crypto.Encrypter>;
					/**
					 * Constructs a new instance of the net.lingala.zip4j.crypto.Encrypter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { encryptData(param0: androidNative.Array<number>): number; encryptData(param0: androidNative.Array<number>, param1: number, param2: number): number });
					public constructor();
					public encryptData(param0: androidNative.Array<number>, param1: number, param2: number): number;
					public encryptData(param0: androidNative.Array<number>): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module PBKDF2 {
					export class BinTools {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.PBKDF2.BinTools>;
						public static hex: string;
						public static hex2bin(param0: string): androidNative.Array<number>;
						public static hex2bin(param0: string): number;
						public static bin2hex(param0: androidNative.Array<number>): string;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module PBKDF2 {
					export class MacBasedPRF extends net.lingala.zip4j.crypto.PBKDF2.PRF {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.PBKDF2.MacBasedPRF>;
						public update(param0: androidNative.Array<number>): void;
						public doFinal(): androidNative.Array<number>;
						public init(param0: androidNative.Array<number>): void;
						public doFinal(param0: androidNative.Array<number>): androidNative.Array<number>;
						public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
						public constructor(param0: string);
						public getHLen(): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module PBKDF2 {
					export class PBKDF2Engine {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.PBKDF2.PBKDF2Engine>;
						public INT(param0: androidNative.Array<number>, param1: number, param2: number): void;
						public getPseudoRandomFunction(): net.lingala.zip4j.crypto.PBKDF2.PRF;
						public getParameters(): net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters;
						public verifyKey(param0: androidNative.Array<string>): boolean;
						public deriveKey(param0: androidNative.Array<string>): androidNative.Array<number>;
						public setParameters(param0: net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters): void;
						public deriveKey(param0: androidNative.Array<string>, param1: number): androidNative.Array<number>;
						public constructor(param0: net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters, param1: net.lingala.zip4j.crypto.PBKDF2.PRF);
						public constructor(param0: net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters);
						public setPseudoRandomFunction(param0: net.lingala.zip4j.crypto.PBKDF2.PRF): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module PBKDF2 {
					export class PBKDF2HexFormatter {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.PBKDF2.PBKDF2HexFormatter>;
						public toString(param0: net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters): string;
						public fromString(param0: net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters, param1: string): boolean;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module PBKDF2 {
					export class PBKDF2Parameters {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters>;
						public salt: androidNative.Array<number>;
						public iterationCount: number;
						public hashAlgorithm: string;
						public hashCharset: string;
						public derivedKey: androidNative.Array<number>;
						public setSalt(param0: androidNative.Array<number>): void;
						public constructor();
						public constructor(param0: string, param1: string, param2: androidNative.Array<number>, param3: number, param4: androidNative.Array<number>);
						public getIterationCount(): number;
						public setIterationCount(param0: number): void;
						public getHashCharset(): string;
						public getDerivedKey(): androidNative.Array<number>;
						public constructor(param0: string, param1: string, param2: androidNative.Array<number>, param3: number);
						public getHashAlgorithm(): string;
						public setHashAlgorithm(param0: string): void;
						public setHashCharset(param0: string): void;
						public getSalt(): androidNative.Array<number>;
						public setDerivedKey(param0: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module PBKDF2 {
					export class PRF {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.PBKDF2.PRF>;
						/**
						 * Constructs a new instance of the net.lingala.zip4j.crypto.PBKDF2.PRF interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { init(param0: androidNative.Array<number>): void; doFinal(param0: androidNative.Array<number>): androidNative.Array<number>; getHLen(): number });
						public constructor();
						public init(param0: androidNative.Array<number>): void;
						public doFinal(param0: androidNative.Array<number>): androidNative.Array<number>;
						public getHLen(): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export class StandardDecrypter extends net.lingala.zip4j.crypto.Decrypter {
					public static class: java.lang.Class<net.lingala.zip4j.crypto.StandardDecrypter>;
					public constructor(param0: androidNative.Array<string>, param1: number, param2: number, param3: androidNative.Array<number>);
					public decryptData(param0: androidNative.Array<number>, param1: number, param2: number): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export class StandardEncrypter extends net.lingala.zip4j.crypto.Encrypter {
					public static class: java.lang.Class<net.lingala.zip4j.crypto.StandardEncrypter>;
					public encryptByte(param0: number): number;
					public constructor(param0: androidNative.Array<string>, param1: number);
					public encryptData(param0: androidNative.Array<number>, param1: number, param2: number): number;
					public encryptData(param0: androidNative.Array<number>): number;
					public getHeaderBytes(): androidNative.Array<number>;
					public generateRandomBytes(): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module engine {
					export class AESEngine {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.engine.AESEngine>;
						public processBlock(param0: androidNative.Array<number>, param1: number, param2: androidNative.Array<number>, param3: number): number;
						public constructor(param0: androidNative.Array<number>);
						public processBlock(param0: androidNative.Array<number>, param1: androidNative.Array<number>): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module engine {
					export class ZipCryptoEngine {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.engine.ZipCryptoEngine>;
						public constructor();
						public updateKeys(param0: number): void;
						public initKeys(param0: androidNative.Array<string>): void;
						public decryptByte(): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module exception {
				export class ZipException {
					public static class: java.lang.Class<net.lingala.zip4j.exception.ZipException>;
					public constructor(param0: string);
					public constructor(param0: string, param1: java.lang.Throwable, param2: net.lingala.zip4j.exception.ZipException.Type);
					public constructor(param0: string, param1: java.lang.Exception);
					public getType(): net.lingala.zip4j.exception.ZipException.Type;
					public constructor(param0: java.lang.Exception);
					public constructor(param0: string, param1: net.lingala.zip4j.exception.ZipException.Type);
				}
				export module ZipException {
					export class Type {
						public static class: java.lang.Class<net.lingala.zip4j.exception.ZipException.Type>;
						public static WRONG_PASSWORD: net.lingala.zip4j.exception.ZipException.Type;
						public static TASK_CANCELLED_EXCEPTION: net.lingala.zip4j.exception.ZipException.Type;
						public static CHECKSUM_MISMATCH: net.lingala.zip4j.exception.ZipException.Type;
						public static UNKNOWN_COMPRESSION_METHOD: net.lingala.zip4j.exception.ZipException.Type;
						public static FILE_NOT_FOUND: net.lingala.zip4j.exception.ZipException.Type;
						public static UNSUPPORTED_ENCRYPTION: net.lingala.zip4j.exception.ZipException.Type;
						public static UNKNOWN: net.lingala.zip4j.exception.ZipException.Type;
						public static values(): androidNative.Array<net.lingala.zip4j.exception.ZipException.Type>;
						public static valueOf(param0: string): net.lingala.zip4j.exception.ZipException.Type;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module headers {
				export class FileHeaderFactory {
					public static class: java.lang.Class<net.lingala.zip4j.headers.FileHeaderFactory>;
					public generateFileHeader(param0: net.lingala.zip4j.model.ZipParameters, param1: boolean, param2: number, param3: java.nio.charset.Charset, param4: net.lingala.zip4j.util.RawIO): net.lingala.zip4j.model.FileHeader;
					public generateLocalFileHeader(param0: net.lingala.zip4j.model.FileHeader): net.lingala.zip4j.model.LocalFileHeader;
					public constructor();
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module headers {
				export class HeaderReader {
					public static class: java.lang.Class<net.lingala.zip4j.headers.HeaderReader>;
					public readDataDescriptor(param0: java.io.InputStream, param1: boolean): net.lingala.zip4j.model.DataDescriptor;
					public constructor();
					public readLocalFileHeader(param0: java.io.InputStream, param1: java.nio.charset.Charset): net.lingala.zip4j.model.LocalFileHeader;
					public readAllHeaders(param0: java.io.RandomAccessFile, param1: net.lingala.zip4j.model.Zip4jConfig): net.lingala.zip4j.model.ZipModel;
					public isDirectory(param0: androidNative.Array<number>, param1: string): boolean;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module headers {
				export class HeaderSignature {
					public static class: java.lang.Class<net.lingala.zip4j.headers.HeaderSignature>;
					public static LOCAL_FILE_HEADER: net.lingala.zip4j.headers.HeaderSignature;
					public static EXTRA_DATA_RECORD: net.lingala.zip4j.headers.HeaderSignature;
					public static CENTRAL_DIRECTORY: net.lingala.zip4j.headers.HeaderSignature;
					public static END_OF_CENTRAL_DIRECTORY: net.lingala.zip4j.headers.HeaderSignature;
					public static TEMPORARY_SPANNING_MARKER: net.lingala.zip4j.headers.HeaderSignature;
					public static DIGITAL_SIGNATURE: net.lingala.zip4j.headers.HeaderSignature;
					public static ARCEXTDATREC: net.lingala.zip4j.headers.HeaderSignature;
					public static SPLIT_ZIP: net.lingala.zip4j.headers.HeaderSignature;
					public static ZIP64_END_CENTRAL_DIRECTORY_LOCATOR: net.lingala.zip4j.headers.HeaderSignature;
					public static ZIP64_END_CENTRAL_DIRECTORY_RECORD: net.lingala.zip4j.headers.HeaderSignature;
					public static ZIP64_EXTRA_FIELD_SIGNATURE: net.lingala.zip4j.headers.HeaderSignature;
					public static AES_EXTRA_DATA_RECORD: net.lingala.zip4j.headers.HeaderSignature;
					public static values(): androidNative.Array<net.lingala.zip4j.headers.HeaderSignature>;
					public getValue(): number;
					public static valueOf(param0: string): net.lingala.zip4j.headers.HeaderSignature;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module headers {
				export class HeaderUtil {
					public static class: java.lang.Class<net.lingala.zip4j.headers.HeaderUtil>;
					public static getOffsetStartOfCentralDirectory(param0: net.lingala.zip4j.model.ZipModel): number;
					public constructor();
					public static getTotalUncompressedSizeOfAllFileHeaders(param0: java.util.List<net.lingala.zip4j.model.FileHeader>): number;
					public static getBytesFromString(param0: string, param1: java.nio.charset.Charset): androidNative.Array<number>;
					public static getFileHeader(param0: net.lingala.zip4j.model.ZipModel, param1: string): net.lingala.zip4j.model.FileHeader;
					public static decodeStringWithCharset(param0: androidNative.Array<number>, param1: boolean, param2: java.nio.charset.Charset): string;
					public static getFileHeadersUnderDirectory(param0: java.util.List<net.lingala.zip4j.model.FileHeader>, param1: string): java.util.List<net.lingala.zip4j.model.FileHeader>;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module headers {
				export class HeaderWriter {
					public static class: java.lang.Class<net.lingala.zip4j.headers.HeaderWriter>;
					public writeLocalFileHeader(param0: net.lingala.zip4j.model.ZipModel, param1: net.lingala.zip4j.model.LocalFileHeader, param2: java.io.OutputStream, param3: java.nio.charset.Charset): void;
					public constructor();
					public finalizeZipFileWithoutValidations(param0: net.lingala.zip4j.model.ZipModel, param1: java.io.OutputStream, param2: java.nio.charset.Charset): void;
					public updateLocalFileHeader(param0: net.lingala.zip4j.model.FileHeader, param1: net.lingala.zip4j.model.ZipModel, param2: net.lingala.zip4j.io.outputstream.SplitOutputStream): void;
					public finalizeZipFile(param0: net.lingala.zip4j.model.ZipModel, param1: java.io.OutputStream, param2: java.nio.charset.Charset): void;
					public writeExtendedLocalHeader(param0: net.lingala.zip4j.model.LocalFileHeader, param1: java.io.OutputStream): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module headers {
				export class VersionMadeBy {
					public static class: java.lang.Class<net.lingala.zip4j.headers.VersionMadeBy>;
					public static SPECIFICATION_VERSION: net.lingala.zip4j.headers.VersionMadeBy;
					public static WINDOWS: net.lingala.zip4j.headers.VersionMadeBy;
					public static UNIX: net.lingala.zip4j.headers.VersionMadeBy;
					public static values(): androidNative.Array<net.lingala.zip4j.headers.VersionMadeBy>;
					public static valueOf(param0: string): net.lingala.zip4j.headers.VersionMadeBy;
					public getCode(): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module headers {
				export class VersionNeededToExtract {
					public static class: java.lang.Class<net.lingala.zip4j.headers.VersionNeededToExtract>;
					public static DEFAULT: net.lingala.zip4j.headers.VersionNeededToExtract;
					public static DEFLATE_COMPRESSED: net.lingala.zip4j.headers.VersionNeededToExtract;
					public static ZIP_64_FORMAT: net.lingala.zip4j.headers.VersionNeededToExtract;
					public static AES_ENCRYPTED: net.lingala.zip4j.headers.VersionNeededToExtract;
					public static valueOf(param0: string): net.lingala.zip4j.headers.VersionNeededToExtract;
					public static values(): androidNative.Array<net.lingala.zip4j.headers.VersionNeededToExtract>;
					public getCode(): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class AesCipherInputStream extends net.lingala.zip4j.io.inputstream.CipherInputStream<net.lingala.zip4j.crypto.AESDecrypter> {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.AesCipherInputStream>;
						public read(param0: androidNative.Array<number>): number;
						public read(): number;
						public constructor(param0: net.lingala.zip4j.io.inputstream.ZipEntryInputStream, param1: net.lingala.zip4j.model.LocalFileHeader, param2: androidNative.Array<string>, param3: number);
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: androidNative.Array<string>): net.lingala.zip4j.crypto.AESDecrypter;
						public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: androidNative.Array<string>): any;
						public readStoredMac(param0: java.io.InputStream): androidNative.Array<number>;
						public endOfEntryReached(param0: java.io.InputStream): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export abstract class CipherInputStream<T> extends java.io.InputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.CipherInputStream<any>>;
						public read(param0: androidNative.Array<number>): number;
						public read(): number;
						public readRaw(param0: androidNative.Array<number>): number;
						public constructor(param0: net.lingala.zip4j.io.inputstream.ZipEntryInputStream, param1: net.lingala.zip4j.model.LocalFileHeader, param2: androidNative.Array<string>, param3: number);
						public close(): void;
						public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						public getNumberOfBytesReadForThisEntry(): number;
						public getLocalFileHeader(): net.lingala.zip4j.model.LocalFileHeader;
						public getDecrypter(): any;
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: androidNative.Array<string>): any;
						public getLastReadRawDataCache(): androidNative.Array<number>;
						public endOfEntryReached(param0: java.io.InputStream): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export abstract class DecompressedInputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.DecompressedInputStream>;
						public oneByteBuffer: androidNative.Array<number>;
						public read(param0: androidNative.Array<number>): number;
						public read(): number;
						public close(): void;
						public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						public constructor(param0: net.lingala.zip4j.io.inputstream.CipherInputStream<any>);
						public getLastReadRawDataCache(): androidNative.Array<number>;
						public endOfEntryReached(param0: java.io.InputStream): void;
						public pushBackInputStreamIfNecessary(param0: java.io.PushbackInputStream): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class InflaterInputStream extends net.lingala.zip4j.io.inputstream.DecompressedInputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.InflaterInputStream>;
						public read(param0: androidNative.Array<number>): number;
						public read(): number;
						public close(): void;
						public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						public constructor(param0: net.lingala.zip4j.io.inputstream.CipherInputStream<any>);
						public constructor(param0: net.lingala.zip4j.io.inputstream.CipherInputStream<any>, param1: number);
						public endOfEntryReached(param0: java.io.InputStream): void;
						public pushBackInputStreamIfNecessary(param0: java.io.PushbackInputStream): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class NoCipherInputStream extends net.lingala.zip4j.io.inputstream.CipherInputStream<any> {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.NoCipherInputStream>;
						public constructor(param0: net.lingala.zip4j.io.inputstream.ZipEntryInputStream, param1: net.lingala.zip4j.model.LocalFileHeader, param2: androidNative.Array<string>, param3: number);
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: androidNative.Array<string>): net.lingala.zip4j.crypto.Decrypter;
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: androidNative.Array<string>): any;
					}
					export module NoCipherInputStream {
						export class NoDecrypter extends net.lingala.zip4j.crypto.Decrypter {
							public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.NoCipherInputStream.NoDecrypter>;
							public decryptData(param0: androidNative.Array<number>, param1: number, param2: number): number;
						}
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class NumberedSplitInputStream extends net.lingala.zip4j.io.inputstream.SplitInputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.NumberedSplitInputStream>;
						public constructor(param0: java.io.File, param1: boolean, param2: number);
						public getNextSplitFile(param0: number): java.io.File;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class NumberedSplitRandomAccessFile {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.NumberedSplitRandomAccessFile>;
						public read(param0: androidNative.Array<number>): number;
						public read(): number;
						public length(): number;
						public write(param0: number): void;
						public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
						public openLastSplitFileForReading(): void;
						public constructor(param0: java.io.File, param1: string);
						public getFilePointer(): number;
						public seekInCurrentPart(param0: number): void;
						public constructor(param0: java.io.File, param1: string, param2: androidNative.Array<java.io.File>);
						public constructor(param0: string, param1: string);
						public seek(param0: number): void;
						public write(param0: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export abstract class SplitInputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.SplitInputStream>;
						public randomAccessFile: java.io.RandomAccessFile;
						public zipFile: java.io.File;
						public read(param0: androidNative.Array<number>): number;
						public openRandomAccessFileForIndex(param0: number): void;
						public read(): number;
						public prepareExtractionForFileHeader(param0: net.lingala.zip4j.model.FileHeader): void;
						public constructor(param0: java.io.File, param1: boolean, param2: number);
						public getNextSplitFile(param0: number): java.io.File;
						public close(): void;
						public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class StoreInputStream extends net.lingala.zip4j.io.inputstream.DecompressedInputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.StoreInputStream>;
						public constructor(param0: net.lingala.zip4j.io.inputstream.CipherInputStream<any>);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class ZipEntryInputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.ZipEntryInputStream>;
						public read(param0: androidNative.Array<number>): number;
						public read(): number;
						public readRawFully(param0: androidNative.Array<number>): number;
						public close(): void;
						public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						public constructor(param0: java.io.InputStream, param1: number);
						public getNumberOfBytesRead(): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class ZipInputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.ZipInputStream>;
						public read(param0: androidNative.Array<number>): number;
						public constructor(param0: java.io.InputStream, param1: net.lingala.zip4j.util.PasswordCallback, param2: net.lingala.zip4j.model.Zip4jConfig);
						public read(): number;
						public getNextEntry(): net.lingala.zip4j.model.LocalFileHeader;
						public constructor(param0: java.io.InputStream, param1: androidNative.Array<string>, param2: net.lingala.zip4j.model.Zip4jConfig);
						public close(): void;
						public constructor(param0: java.io.InputStream, param1: net.lingala.zip4j.util.PasswordCallback, param2: java.nio.charset.Charset);
						public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						public constructor(param0: java.io.InputStream, param1: androidNative.Array<string>, param2: java.nio.charset.Charset);
						public available(): number;
						public constructor(param0: java.io.InputStream, param1: androidNative.Array<string>);
						public setPassword(param0: androidNative.Array<string>): void;
						public constructor(param0: java.io.InputStream);
						public constructor(param0: java.io.InputStream, param1: java.nio.charset.Charset);
						public getNextEntry(param0: net.lingala.zip4j.model.FileHeader, param1: boolean): net.lingala.zip4j.model.LocalFileHeader;
						public constructor(param0: java.io.InputStream, param1: net.lingala.zip4j.util.PasswordCallback);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class ZipStandardCipherInputStream extends net.lingala.zip4j.io.inputstream.CipherInputStream<net.lingala.zip4j.crypto.StandardDecrypter> {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.ZipStandardCipherInputStream>;
						public constructor(param0: net.lingala.zip4j.io.inputstream.ZipEntryInputStream, param1: net.lingala.zip4j.model.LocalFileHeader, param2: androidNative.Array<string>, param3: number);
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: androidNative.Array<string>): net.lingala.zip4j.crypto.StandardDecrypter;
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: androidNative.Array<string>): any;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class ZipStandardSplitInputStream extends net.lingala.zip4j.io.inputstream.SplitInputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.ZipStandardSplitInputStream>;
						public constructor(param0: java.io.File, param1: boolean, param2: number);
						public getNextSplitFile(param0: number): java.io.File;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class AesCipherOutputStream extends net.lingala.zip4j.io.outputstream.CipherOutputStream<net.lingala.zip4j.crypto.AESEncrypter> {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.AesCipherOutputStream>;
						public constructor(param0: net.lingala.zip4j.io.outputstream.ZipEntryOutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: androidNative.Array<string>);
						public write(param0: number): void;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
						public closeEntry(): void;
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: androidNative.Array<string>): any;
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: androidNative.Array<string>): net.lingala.zip4j.crypto.AESEncrypter;
						public write(param0: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export abstract class CipherOutputStream<T> extends java.io.OutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.CipherOutputStream<any>>;
						public writeHeaders(param0: androidNative.Array<number>): void;
						public constructor(param0: net.lingala.zip4j.io.outputstream.ZipEntryOutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: androidNative.Array<string>);
						public close(): void;
						public write(param0: number): void;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
						public closeEntry(): void;
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: androidNative.Array<string>): any;
						public getNumberOfBytesWrittenForThisEntry(): number;
						public write(param0: androidNative.Array<number>): void;
						public getEncrypter(): any;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export abstract class CompressedOutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.CompressedOutputStream>;
						public getCompressedSize(): number;
						public constructor(param0: net.lingala.zip4j.io.outputstream.CipherOutputStream<any>);
						public close(): void;
						public write(param0: number): void;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
						public closeEntry(): void;
						public write(param0: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class CountingOutputStream implements net.lingala.zip4j.io.outputstream.OutputStreamWithSplitZipSupport {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.CountingOutputStream>;
						public constructor(param0: java.io.OutputStream);
						public getNumberOfBytesWritten(): number;
						public checkBuffSizeAndStartNextSplitFile(param0: number): boolean;
						public isSplitZipFile(): boolean;
						public close(): void;
						public write(param0: number): void;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
						public getOffsetForNextEntry(): number;
						public getCurrentSplitFileCounter(): number;
						public getSplitLength(): number;
						public getFilePointer(): number;
						public write(param0: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class DeflaterOutputStream extends net.lingala.zip4j.io.outputstream.CompressedOutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.DeflaterOutputStream>;
						public deflater: java.util.zip.Deflater;
						public constructor(param0: net.lingala.zip4j.io.outputstream.CipherOutputStream<any>, param1: net.lingala.zip4j.model.enums.CompressionLevel, param2: number);
						public constructor(param0: net.lingala.zip4j.io.outputstream.CipherOutputStream<any>);
						public write(param0: number): void;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
						public closeEntry(): void;
						public write(param0: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class NoCipherOutputStream extends net.lingala.zip4j.io.outputstream.CipherOutputStream<net.lingala.zip4j.io.outputstream.NoCipherOutputStream.NoEncrypter> {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.NoCipherOutputStream>;
						public constructor(param0: net.lingala.zip4j.io.outputstream.ZipEntryOutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: androidNative.Array<string>);
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: androidNative.Array<string>): any;
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: androidNative.Array<string>): net.lingala.zip4j.io.outputstream.NoCipherOutputStream.NoEncrypter;
					}
					export module NoCipherOutputStream {
						export class NoEncrypter extends net.lingala.zip4j.crypto.Encrypter {
							public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.NoCipherOutputStream.NoEncrypter>;
							public encryptData(param0: androidNative.Array<number>): number;
							public encryptData(param0: androidNative.Array<number>, param1: number, param2: number): number;
						}
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class OutputStreamWithSplitZipSupport {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.OutputStreamWithSplitZipSupport>;
						/**
						 * Constructs a new instance of the net.lingala.zip4j.io.outputstream.OutputStreamWithSplitZipSupport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getFilePointer(): number; getCurrentSplitFileCounter(): number });
						public constructor();
						public getCurrentSplitFileCounter(): number;
						public getFilePointer(): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class SplitOutputStream implements net.lingala.zip4j.io.outputstream.OutputStreamWithSplitZipSupport {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.SplitOutputStream>;
						public constructor(param0: java.io.File, param1: number);
						public skipBytes(param0: number): number;
						public constructor(param0: java.io.File);
						public close(): void;
						public write(param0: number): void;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
						public checkBufferSizeAndStartNextSplitFile(param0: number): boolean;
						public getCurrentSplitFileCounter(): number;
						public getSplitLength(): number;
						public getFilePointer(): number;
						public isSplitZipFile(): boolean;
						public seek(param0: number): void;
						public write(param0: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class StoreOutputStream extends net.lingala.zip4j.io.outputstream.CompressedOutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.StoreOutputStream>;
						public constructor(param0: net.lingala.zip4j.io.outputstream.CipherOutputStream<any>);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class ZipEntryOutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.ZipEntryOutputStream>;
						public constructor(param0: java.io.OutputStream);
						public close(): void;
						public write(param0: number): void;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
						public closeEntry(): void;
						public getNumberOfBytesWrittenForThisEntry(): number;
						public write(param0: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class ZipOutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.ZipOutputStream>;
						public constructor(param0: java.io.OutputStream);
						public constructor(param0: java.io.OutputStream, param1: androidNative.Array<string>, param2: java.nio.charset.Charset);
						public setComment(param0: string): void;
						public constructor(param0: java.io.OutputStream, param1: androidNative.Array<string>, param2: net.lingala.zip4j.model.Zip4jConfig, param3: net.lingala.zip4j.model.ZipModel);
						public close(): void;
						public putNextEntry(param0: net.lingala.zip4j.model.ZipParameters): void;
						public write(param0: number): void;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
						public closeEntry(): net.lingala.zip4j.model.FileHeader;
						public constructor(param0: java.io.OutputStream, param1: java.nio.charset.Charset);
						public constructor(param0: java.io.OutputStream, param1: androidNative.Array<string>);
						public write(param0: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class ZipStandardCipherOutputStream extends net.lingala.zip4j.io.outputstream.CipherOutputStream<net.lingala.zip4j.crypto.StandardEncrypter> {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.ZipStandardCipherOutputStream>;
						public constructor(param0: net.lingala.zip4j.io.outputstream.ZipEntryOutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: androidNative.Array<string>);
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: androidNative.Array<string>): net.lingala.zip4j.crypto.StandardEncrypter;
						public write(param0: number): void;
						public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: androidNative.Array<string>): any;
						public write(param0: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class AESExtraDataRecord extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.AESExtraDataRecord>;
					public getAesVersion(): net.lingala.zip4j.model.enums.AesVersion;
					public getAesKeyStrength(): net.lingala.zip4j.model.enums.AesKeyStrength;
					public setCompressionMethod(param0: net.lingala.zip4j.model.enums.CompressionMethod): void;
					public constructor();
					public setVendorID(param0: string): void;
					public setAesKeyStrength(param0: net.lingala.zip4j.model.enums.AesKeyStrength): void;
					public getCompressionMethod(): net.lingala.zip4j.model.enums.CompressionMethod;
					public setDataSize(param0: number): void;
					public setAesVersion(param0: net.lingala.zip4j.model.enums.AesVersion): void;
					public getDataSize(): number;
					public getVendorID(): string;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export abstract class AbstractFileHeader extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.AbstractFileHeader>;
					public getAesExtraDataRecord(): net.lingala.zip4j.model.AESExtraDataRecord;
					public getCrc(): number;
					public setFileNameLength(param0: number): void;
					public getFileNameLength(): number;
					public getUncompressedSize(): number;
					public getExtraDataRecords(): java.util.List<net.lingala.zip4j.model.ExtraDataRecord>;
					public setUncompressedSize(param0: number): void;
					public isDataDescriptorExists(): boolean;
					public getExtraFieldLength(): number;
					public constructor();
					public setDirectory(param0: boolean): void;
					public getLastModifiedTimeEpoch(): number;
					public setCrc(param0: number): void;
					public getCompressedSize(): number;
					public setDataDescriptorExists(param0: boolean): void;
					public setCompressionMethod(param0: net.lingala.zip4j.model.enums.CompressionMethod): void;
					public getVersionNeededToExtract(): number;
					public setExtraFieldLength(param0: number): void;
					public getFileName(): string;
					public setLastModifiedTime(param0: number): void;
					public isEncrypted(): boolean;
					public setGeneralPurposeFlag(param0: androidNative.Array<number>): void;
					public setEncrypted(param0: boolean): void;
					public getGeneralPurposeFlag(): androidNative.Array<number>;
					public isFileNameUTF8Encoded(): boolean;
					public setFileNameUTF8Encoded(param0: boolean): void;
					public setFileName(param0: string): void;
					public equals(param0: any): boolean;
					public getEncryptionMethod(): net.lingala.zip4j.model.enums.EncryptionMethod;
					public isDirectory(): boolean;
					public getLastModifiedTime(): number;
					public getZip64ExtendedInfo(): net.lingala.zip4j.model.Zip64ExtendedInfo;
					public setCompressedSize(param0: number): void;
					public setAesExtraDataRecord(param0: net.lingala.zip4j.model.AESExtraDataRecord): void;
					public setEncryptionMethod(param0: net.lingala.zip4j.model.enums.EncryptionMethod): void;
					public setVersionNeededToExtract(param0: number): void;
					public getCompressionMethod(): net.lingala.zip4j.model.enums.CompressionMethod;
					public setZip64ExtendedInfo(param0: net.lingala.zip4j.model.Zip64ExtendedInfo): void;
					public setExtraDataRecords(param0: java.util.List<net.lingala.zip4j.model.ExtraDataRecord>): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class ArchiveExtraDataRecord extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.ArchiveExtraDataRecord>;
					public setExtraFieldLength(param0: number): void;
					public getExtraFieldLength(): number;
					public constructor();
					public setExtraFieldData(param0: string): void;
					public getExtraFieldData(): string;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class CentralDirectory {
					public static class: java.lang.Class<net.lingala.zip4j.model.CentralDirectory>;
					public constructor();
					public setFileHeaders(param0: java.util.List<net.lingala.zip4j.model.FileHeader>): void;
					public getFileHeaders(): java.util.List<net.lingala.zip4j.model.FileHeader>;
					public setDigitalSignature(param0: net.lingala.zip4j.model.DigitalSignature): void;
					public getDigitalSignature(): net.lingala.zip4j.model.DigitalSignature;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class DataDescriptor extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.DataDescriptor>;
					public getCrc(): number;
					public constructor();
					public getUncompressedSize(): number;
					public setCrc(param0: number): void;
					public getCompressedSize(): number;
					public setCompressedSize(param0: number): void;
					public setUncompressedSize(param0: number): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class DigitalSignature extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.DigitalSignature>;
					public constructor();
					public setSignatureData(param0: string): void;
					public getSignatureData(): string;
					public setSizeOfData(param0: number): void;
					public getSizeOfData(): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class EndOfCentralDirectoryRecord extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.EndOfCentralDirectoryRecord>;
					public getNumberOfThisDiskStartOfCentralDir(): number;
					public setComment(param0: string): void;
					public getOffsetOfEndOfCentralDirectory(): number;
					public getSizeOfCentralDirectory(): number;
					public setSizeOfCentralDirectory(param0: number): void;
					public setTotalNumberOfEntriesInCentralDirectory(param0: number): void;
					public setNumberOfThisDisk(param0: number): void;
					public getTotalNumberOfEntriesInCentralDirectoryOnThisDisk(): number;
					public constructor();
					public setTotalNumberOfEntriesInCentralDirectoryOnThisDisk(param0: number): void;
					public setOffsetOfEndOfCentralDirectory(param0: number): void;
					public setNumberOfThisDiskStartOfCentralDir(param0: number): void;
					public getNumberOfThisDisk(): number;
					public getTotalNumberOfEntriesInCentralDirectory(): number;
					public getOffsetOfStartOfCentralDirectory(): number;
					public setOffsetOfStartOfCentralDirectory(param0: number): void;
					public getComment(): string;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class ExcludeFileFilter {
					public static class: java.lang.Class<net.lingala.zip4j.model.ExcludeFileFilter>;
					/**
					 * Constructs a new instance of the net.lingala.zip4j.model.ExcludeFileFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { isExcluded(param0: java.io.File): boolean });
					public constructor();
					public isExcluded(param0: java.io.File): boolean;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class ExtraDataRecord extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.ExtraDataRecord>;
					public constructor();
					public getData(): androidNative.Array<number>;
					public setData(param0: androidNative.Array<number>): void;
					public setHeader(param0: number): void;
					public setSizeOfData(param0: number): void;
					public getHeader(): number;
					public getSizeOfData(): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class FileHeader extends net.lingala.zip4j.model.AbstractFileHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.FileHeader>;
					public getExternalFileAttributes(): androidNative.Array<number>;
					public getFileCommentLength(): number;
					public setFileCommentLength(param0: number): void;
					public getDiskNumberStart(): number;
					public setDiskNumberStart(param0: number): void;
					public setExternalFileAttributes(param0: androidNative.Array<number>): void;
					public setOffsetLocalHeader(param0: number): void;
					public setFileComment(param0: string): void;
					public equals(param0: any): boolean;
					public getInternalFileAttributes(): androidNative.Array<number>;
					public getOffsetLocalHeader(): number;
					public toString(): string;
					public setVersionMadeBy(param0: number): void;
					public constructor();
					public getVersionMadeBy(): number;
					public setInternalFileAttributes(param0: androidNative.Array<number>): void;
					public hashCode(): number;
					public getFileComment(): string;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class LocalFileHeader extends net.lingala.zip4j.model.AbstractFileHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.LocalFileHeader>;
					public isWriteCompressedSizeInZip64ExtraRecord(): boolean;
					public getExtraField(): androidNative.Array<number>;
					public getOffsetStartOfData(): number;
					public setWriteCompressedSizeInZip64ExtraRecord(param0: boolean): void;
					public constructor();
					public setExtraField(param0: androidNative.Array<number>): void;
					public setOffsetStartOfData(param0: number): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class UnzipParameters {
					public static class: java.lang.Class<net.lingala.zip4j.model.UnzipParameters>;
					public setExtractSymbolicLinks(param0: boolean): void;
					public constructor();
					public isExtractSymbolicLinks(): boolean;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class Zip4jConfig {
					public static class: java.lang.Class<net.lingala.zip4j.model.Zip4jConfig>;
					public getCharset(): java.nio.charset.Charset;
					public getBufferSize(): number;
					public constructor(param0: java.nio.charset.Charset, param1: number);
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class Zip64EndOfCentralDirectoryLocator extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.Zip64EndOfCentralDirectoryLocator>;
					public setNumberOfDiskStartOfZip64EndOfCentralDirectoryRecord(param0: number): void;
					public getOffsetZip64EndOfCentralDirectoryRecord(): number;
					public constructor();
					public setOffsetZip64EndOfCentralDirectoryRecord(param0: number): void;
					public getNumberOfDiskStartOfZip64EndOfCentralDirectoryRecord(): number;
					public setTotalNumberOfDiscs(param0: number): void;
					public getTotalNumberOfDiscs(): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class Zip64EndOfCentralDirectoryRecord extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.Zip64EndOfCentralDirectoryRecord>;
					public getVersionNeededToExtract(): number;
					public getSizeOfCentralDirectory(): number;
					public setSizeOfZip64EndCentralDirectoryRecord(param0: number): void;
					public setSizeOfCentralDirectory(param0: number): void;
					public setExtensibleDataSector(param0: androidNative.Array<number>): void;
					public setTotalNumberOfEntriesInCentralDirectory(param0: number): void;
					public setNumberOfThisDisk(param0: number): void;
					public getTotalNumberOfEntriesInCentralDirectoryOnThisDisk(): number;
					public setVersionMadeBy(param0: number): void;
					public constructor();
					public getNumberOfThisDiskStartOfCentralDirectory(): number;
					public setTotalNumberOfEntriesInCentralDirectoryOnThisDisk(param0: number): void;
					public getOffsetStartCentralDirectoryWRTStartDiskNumber(): number;
					public getVersionMadeBy(): number;
					public setVersionNeededToExtract(param0: number): void;
					public getNumberOfThisDisk(): number;
					public getTotalNumberOfEntriesInCentralDirectory(): number;
					public setOffsetStartCentralDirectoryWRTStartDiskNumber(param0: number): void;
					public getExtensibleDataSector(): androidNative.Array<number>;
					public getSizeOfZip64EndCentralDirectoryRecord(): number;
					public setNumberOfThisDiskStartOfCentralDirectory(param0: number): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class Zip64ExtendedInfo extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.Zip64ExtendedInfo>;
					public getOffsetLocalHeader(): number;
					public setSize(param0: number): void;
					public constructor();
					public getUncompressedSize(): number;
					public getCompressedSize(): number;
					public setCompressedSize(param0: number): void;
					public getDiskNumberStart(): number;
					public getSize(): number;
					public setUncompressedSize(param0: number): void;
					public setDiskNumberStart(param0: number): void;
					public setOffsetLocalHeader(param0: number): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export abstract class ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.ZipHeader>;
					public getSignature(): net.lingala.zip4j.headers.HeaderSignature;
					public constructor();
					public setSignature(param0: net.lingala.zip4j.headers.HeaderSignature): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class ZipModel {
					public static class: java.lang.Class<net.lingala.zip4j.model.ZipModel>;
					public getZip64EndOfCentralDirectoryRecord(): net.lingala.zip4j.model.Zip64EndOfCentralDirectoryRecord;
					public getEnd(): number;
					public isZip64Format(): boolean;
					public setCentralDirectory(param0: net.lingala.zip4j.model.CentralDirectory): void;
					public getSplitLength(): number;
					public getStart(): number;
					public setNestedZipFile(param0: boolean): void;
					public getCentralDirectory(): net.lingala.zip4j.model.CentralDirectory;
					public isSplitArchive(): boolean;
					public clone(): any;
					public constructor();
					public getEndOfCentralDirectoryRecord(): net.lingala.zip4j.model.EndOfCentralDirectoryRecord;
					public getArchiveExtraDataRecord(): net.lingala.zip4j.model.ArchiveExtraDataRecord;
					public setZip64EndOfCentralDirectoryLocator(param0: net.lingala.zip4j.model.Zip64EndOfCentralDirectoryLocator): void;
					public setLocalFileHeaders(param0: java.util.List<net.lingala.zip4j.model.LocalFileHeader>): void;
					public setDataDescriptors(param0: java.util.List<net.lingala.zip4j.model.DataDescriptor>): void;
					public getLocalFileHeaders(): java.util.List<net.lingala.zip4j.model.LocalFileHeader>;
					public setEnd(param0: number): void;
					public getZip64EndOfCentralDirectoryLocator(): net.lingala.zip4j.model.Zip64EndOfCentralDirectoryLocator;
					public setSplitLength(param0: number): void;
					public setArchiveExtraDataRecord(param0: net.lingala.zip4j.model.ArchiveExtraDataRecord): void;
					public getZipFile(): java.io.File;
					public setZipFile(param0: java.io.File): void;
					public isNestedZipFile(): boolean;
					public setStart(param0: number): void;
					public setEndOfCentralDirectoryRecord(param0: net.lingala.zip4j.model.EndOfCentralDirectoryRecord): void;
					public setZip64Format(param0: boolean): void;
					public setSplitArchive(param0: boolean): void;
					public setZip64EndOfCentralDirectoryRecord(param0: net.lingala.zip4j.model.Zip64EndOfCentralDirectoryRecord): void;
					public getDataDescriptors(): java.util.List<net.lingala.zip4j.model.DataDescriptor>;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class ZipParameters {
					public static class: java.lang.Class<net.lingala.zip4j.model.ZipParameters>;
					public isWriteExtendedLocalFileHeader(): boolean;
					public isEncryptFiles(): boolean;
					public setSymbolicLinkAction(param0: net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction): void;
					public setDefaultFolderPath(param0: string): void;
					public setWriteExtendedLocalFileHeader(param0: boolean): void;
					public isReadHiddenFolders(): boolean;
					public constructor(param0: net.lingala.zip4j.model.ZipParameters);
					public setAesVersion(param0: net.lingala.zip4j.model.enums.AesVersion): void;
					public getLastModifiedFileTime(): number;
					public setFileComment(param0: string): void;
					public getSymbolicLinkAction(): net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction;
					public isUnixMode(): boolean;
					public getCompressionLevel(): net.lingala.zip4j.model.enums.CompressionLevel;
					public clone(): any;
					public getFileNameInZip(): string;
					public setLastModifiedFileTime(param0: number): void;
					public constructor();
					public setCompressionLevel(param0: net.lingala.zip4j.model.enums.CompressionLevel): void;
					public getDefaultFolderPath(): string;
					public getEntryCRC(): number;
					public getRootFolderNameInZip(): string;
					public setUnixMode(param0: boolean): void;
					public getFileComment(): string;
					public getAesVersion(): net.lingala.zip4j.model.enums.AesVersion;
					public setRootFolderNameInZip(param0: string): void;
					public setCompressionMethod(param0: net.lingala.zip4j.model.enums.CompressionMethod): void;
					public isReadHiddenFiles(): boolean;
					public setIncludeRootFolder(param0: boolean): void;
					public setOverrideExistingFilesInZip(param0: boolean): void;
					public setEncryptFiles(param0: boolean): void;
					public setEntryCRC(param0: number): void;
					public getAesKeyStrength(): net.lingala.zip4j.model.enums.AesKeyStrength;
					public getEncryptionMethod(): net.lingala.zip4j.model.enums.EncryptionMethod;
					public setFileNameInZip(param0: string): void;
					public getEntrySize(): number;
					public setEntrySize(param0: number): void;
					public setReadHiddenFiles(param0: boolean): void;
					public isIncludeRootFolder(): boolean;
					public setEncryptionMethod(param0: net.lingala.zip4j.model.enums.EncryptionMethod): void;
					public setAesKeyStrength(param0: net.lingala.zip4j.model.enums.AesKeyStrength): void;
					public getCompressionMethod(): net.lingala.zip4j.model.enums.CompressionMethod;
					public setReadHiddenFolders(param0: boolean): void;
					public getExcludeFileFilter(): net.lingala.zip4j.model.ExcludeFileFilter;
					public setExcludeFileFilter(param0: net.lingala.zip4j.model.ExcludeFileFilter): void;
					public isOverrideExistingFilesInZip(): boolean;
				}
				export module ZipParameters {
					export class SymbolicLinkAction {
						public static class: java.lang.Class<net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction>;
						public static INCLUDE_LINK_ONLY: net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction;
						public static INCLUDE_LINKED_FILE_ONLY: net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction;
						public static INCLUDE_LINK_AND_LINKED_FILE: net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction;
						public static values(): androidNative.Array<net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction>;
						public static valueOf(param0: string): net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export module enums {
					export class AesKeyStrength {
						public static class: java.lang.Class<net.lingala.zip4j.model.enums.AesKeyStrength>;
						public static KEY_STRENGTH_128: net.lingala.zip4j.model.enums.AesKeyStrength;
						public static KEY_STRENGTH_192: net.lingala.zip4j.model.enums.AesKeyStrength;
						public static KEY_STRENGTH_256: net.lingala.zip4j.model.enums.AesKeyStrength;
						public static getAesKeyStrengthFromRawCode(param0: number): net.lingala.zip4j.model.enums.AesKeyStrength;
						public getRawCode(): number;
						public getMacLength(): number;
						public getKeyLength(): number;
						public static values(): androidNative.Array<net.lingala.zip4j.model.enums.AesKeyStrength>;
						public static valueOf(param0: string): net.lingala.zip4j.model.enums.AesKeyStrength;
						public getSaltLength(): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export module enums {
					export class AesVersion {
						public static class: java.lang.Class<net.lingala.zip4j.model.enums.AesVersion>;
						public static ONE: net.lingala.zip4j.model.enums.AesVersion;
						public static TWO: net.lingala.zip4j.model.enums.AesVersion;
						public static valueOf(param0: string): net.lingala.zip4j.model.enums.AesVersion;
						public static getFromVersionNumber(param0: number): net.lingala.zip4j.model.enums.AesVersion;
						public getVersionNumber(): number;
						public static values(): androidNative.Array<net.lingala.zip4j.model.enums.AesVersion>;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export module enums {
					export class CompressionLevel {
						public static class: java.lang.Class<net.lingala.zip4j.model.enums.CompressionLevel>;
						public static NO_COMPRESSION: net.lingala.zip4j.model.enums.CompressionLevel;
						public static FASTEST: net.lingala.zip4j.model.enums.CompressionLevel;
						public static FASTER: net.lingala.zip4j.model.enums.CompressionLevel;
						public static FAST: net.lingala.zip4j.model.enums.CompressionLevel;
						public static MEDIUM_FAST: net.lingala.zip4j.model.enums.CompressionLevel;
						public static NORMAL: net.lingala.zip4j.model.enums.CompressionLevel;
						public static HIGHER: net.lingala.zip4j.model.enums.CompressionLevel;
						public static MAXIMUM: net.lingala.zip4j.model.enums.CompressionLevel;
						public static PRE_ULTRA: net.lingala.zip4j.model.enums.CompressionLevel;
						public static ULTRA: net.lingala.zip4j.model.enums.CompressionLevel;
						public getLevel(): number;
						public static valueOf(param0: string): net.lingala.zip4j.model.enums.CompressionLevel;
						public static values(): androidNative.Array<net.lingala.zip4j.model.enums.CompressionLevel>;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export module enums {
					export class CompressionMethod {
						public static class: java.lang.Class<net.lingala.zip4j.model.enums.CompressionMethod>;
						public static STORE: net.lingala.zip4j.model.enums.CompressionMethod;
						public static DEFLATE: net.lingala.zip4j.model.enums.CompressionMethod;
						public static AES_INTERNAL_ONLY: net.lingala.zip4j.model.enums.CompressionMethod;
						public static valueOf(param0: string): net.lingala.zip4j.model.enums.CompressionMethod;
						public getCode(): number;
						public static getCompressionMethodFromCode(param0: number): net.lingala.zip4j.model.enums.CompressionMethod;
						public static values(): androidNative.Array<net.lingala.zip4j.model.enums.CompressionMethod>;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export module enums {
					export class EncryptionMethod {
						public static class: java.lang.Class<net.lingala.zip4j.model.enums.EncryptionMethod>;
						public static NONE: net.lingala.zip4j.model.enums.EncryptionMethod;
						public static ZIP_STANDARD: net.lingala.zip4j.model.enums.EncryptionMethod;
						public static ZIP_STANDARD_VARIANT_STRONG: net.lingala.zip4j.model.enums.EncryptionMethod;
						public static AES: net.lingala.zip4j.model.enums.EncryptionMethod;
						public static values(): androidNative.Array<net.lingala.zip4j.model.enums.EncryptionMethod>;
						public static valueOf(param0: string): net.lingala.zip4j.model.enums.EncryptionMethod;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export module enums {
					export class RandomAccessFileMode {
						public static class: java.lang.Class<net.lingala.zip4j.model.enums.RandomAccessFileMode>;
						public static READ: net.lingala.zip4j.model.enums.RandomAccessFileMode;
						public static WRITE: net.lingala.zip4j.model.enums.RandomAccessFileMode;
						public static valueOf(param0: string): net.lingala.zip4j.model.enums.RandomAccessFileMode;
						public getValue(): string;
						public static values(): androidNative.Array<net.lingala.zip4j.model.enums.RandomAccessFileMode>;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module progress {
				export class ProgressMonitor {
					public static class: java.lang.Class<net.lingala.zip4j.progress.ProgressMonitor>;
					public setCancelAllTasks(param0: boolean): void;
					public getWorkCompleted(): number;
					public getTotalWork(): number;
					public getFileName(): string;
					public setException(param0: java.lang.Exception): void;
					public setPause(param0: boolean): void;
					public isPause(): boolean;
					public setTotalWork(param0: number): void;
					public endProgressMonitor(): void;
					public setCurrentTask(param0: net.lingala.zip4j.progress.ProgressMonitor.Task): void;
					public setFileName(param0: string): void;
					public getPercentDone(): number;
					public constructor();
					public getCurrentTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
					public getException(): java.lang.Exception;
					public fullReset(): void;
					public updateWorkCompleted(param0: number): void;
					public setState(param0: net.lingala.zip4j.progress.ProgressMonitor.State): void;
					public endProgressMonitor(param0: java.lang.Exception): void;
					public setPercentDone(param0: number): void;
					public setResult(param0: net.lingala.zip4j.progress.ProgressMonitor.Result): void;
					public getResult(): net.lingala.zip4j.progress.ProgressMonitor.Result;
					public isCancelAllTasks(): boolean;
					public getState(): net.lingala.zip4j.progress.ProgressMonitor.State;
				}
				export module ProgressMonitor {
					export class Result {
						public static class: java.lang.Class<net.lingala.zip4j.progress.ProgressMonitor.Result>;
						public static SUCCESS: net.lingala.zip4j.progress.ProgressMonitor.Result;
						public static WORK_IN_PROGRESS: net.lingala.zip4j.progress.ProgressMonitor.Result;
						public static ERROR: net.lingala.zip4j.progress.ProgressMonitor.Result;
						public static CANCELLED: net.lingala.zip4j.progress.ProgressMonitor.Result;
						public static values(): androidNative.Array<net.lingala.zip4j.progress.ProgressMonitor.Result>;
						public static valueOf(param0: string): net.lingala.zip4j.progress.ProgressMonitor.Result;
					}
					export class State {
						public static class: java.lang.Class<net.lingala.zip4j.progress.ProgressMonitor.State>;
						public static READY: net.lingala.zip4j.progress.ProgressMonitor.State;
						public static BUSY: net.lingala.zip4j.progress.ProgressMonitor.State;
						public static values(): androidNative.Array<net.lingala.zip4j.progress.ProgressMonitor.State>;
						public static valueOf(param0: string): net.lingala.zip4j.progress.ProgressMonitor.State;
					}
					export class Task {
						public static class: java.lang.Class<net.lingala.zip4j.progress.ProgressMonitor.Task>;
						public static NONE: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static ADD_ENTRY: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static REMOVE_ENTRY: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static CALCULATE_CRC: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static EXTRACT_ENTRY: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static MERGE_ZIP_FILES: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static SET_COMMENT: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static RENAME_FILE: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static valueOf(param0: string): net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static values(): androidNative.Array<net.lingala.zip4j.progress.ProgressMonitor.Task>;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export abstract class AbstractAddFileToZipTask<T> extends net.lingala.zip4j.tasks.AsyncZipTask<any> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AbstractAddFileToZipTask<any>>;
					public getZipModel(): net.lingala.zip4j.model.ZipModel;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export abstract class AbstractExtractFileTask<T> extends net.lingala.zip4j.tasks.AsyncZipTask<any> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AbstractExtractFileTask<any>>;
					public extractFile(param0: net.lingala.zip4j.io.inputstream.ZipInputStream, param1: net.lingala.zip4j.model.FileHeader, param2: string, param3: string, param4: net.lingala.zip4j.progress.ProgressMonitor, param5: androidNative.Array<number>): void;
					public constructor(param0: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public getZipModel(): net.lingala.zip4j.model.ZipModel;
					public constructor(param0: net.lingala.zip4j.model.ZipModel, param1: net.lingala.zip4j.model.UnzipParameters, param2: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export abstract class AbstractModifyFileTask<T> extends net.lingala.zip4j.tasks.AsyncZipTask<any> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AbstractModifyFileTask<any>>;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export abstract class AbstractZipTaskParameters {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AbstractZipTaskParameters>;
					public zip4jConfig: net.lingala.zip4j.model.Zip4jConfig;
					public constructor(param0: net.lingala.zip4j.model.Zip4jConfig);
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class AddFilesToZipTask extends net.lingala.zip4j.tasks.AbstractAddFileToZipTask<net.lingala.zip4j.tasks.AddFilesToZipTask.AddFilesToZipTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AddFilesToZipTask>;
					public executeTask(param0: net.lingala.zip4j.tasks.AddFilesToZipTask.AddFilesToZipTaskParameters, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public constructor(param0: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public calculateTotalWork(param0: any): number;
					public constructor(param0: net.lingala.zip4j.model.ZipModel, param1: androidNative.Array<string>, param2: net.lingala.zip4j.headers.HeaderWriter, param3: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.AddFilesToZipTask.AddFilesToZipTaskParameters): number;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module AddFilesToZipTask {
					export class AddFilesToZipTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.AddFilesToZipTask.AddFilesToZipTaskParameters>;
						public constructor(param0: java.util.List<java.io.File>, param1: net.lingala.zip4j.model.ZipParameters, param2: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(param0: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class AddFolderToZipTask extends net.lingala.zip4j.tasks.AbstractAddFileToZipTask<net.lingala.zip4j.tasks.AddFolderToZipTask.AddFolderToZipTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AddFolderToZipTask>;
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public constructor(param0: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public calculateTotalWork(param0: any): number;
					public constructor(param0: net.lingala.zip4j.model.ZipModel, param1: androidNative.Array<string>, param2: net.lingala.zip4j.headers.HeaderWriter, param3: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(param0: net.lingala.zip4j.tasks.AddFolderToZipTask.AddFolderToZipTaskParameters, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.AddFolderToZipTask.AddFolderToZipTaskParameters): number;
				}
				export module AddFolderToZipTask {
					export class AddFolderToZipTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.AddFolderToZipTask.AddFolderToZipTaskParameters>;
						public constructor(param0: java.io.File, param1: net.lingala.zip4j.model.ZipParameters, param2: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(param0: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class AddStreamToZipTask extends net.lingala.zip4j.tasks.AbstractAddFileToZipTask<net.lingala.zip4j.tasks.AddStreamToZipTask.AddStreamToZipTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AddStreamToZipTask>;
					public executeTask(param0: net.lingala.zip4j.tasks.AddStreamToZipTask.AddStreamToZipTaskParameters, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public constructor(param0: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public calculateTotalWork(param0: any): number;
					public constructor(param0: net.lingala.zip4j.model.ZipModel, param1: androidNative.Array<string>, param2: net.lingala.zip4j.headers.HeaderWriter, param3: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.AddStreamToZipTask.AddStreamToZipTaskParameters): number;
				}
				export module AddStreamToZipTask {
					export class AddStreamToZipTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.AddStreamToZipTask.AddStreamToZipTaskParameters>;
						public constructor(param0: java.io.InputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(param0: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export abstract class AsyncZipTask<T> extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AsyncZipTask<any>>;
					public executeTask(param0: T, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: T): number;
					public constructor(param0: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public verifyIfTaskIsCancelled(): void;
					public execute(param0: T): void;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module AsyncZipTask {
					export class AsyncTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters>;
						public constructor(param0: java.util.concurrent.ExecutorService, param1: boolean, param2: net.lingala.zip4j.progress.ProgressMonitor);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class ExtractAllFilesTask extends net.lingala.zip4j.tasks.AbstractExtractFileTask<net.lingala.zip4j.tasks.ExtractAllFilesTask.ExtractAllFilesTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.ExtractAllFilesTask>;
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.ExtractAllFilesTask.ExtractAllFilesTaskParameters): number;
					public executeTask(param0: net.lingala.zip4j.tasks.ExtractAllFilesTask.ExtractAllFilesTaskParameters, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public constructor(param0: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public calculateTotalWork(param0: any): number;
					public constructor(param0: net.lingala.zip4j.model.ZipModel, param1: androidNative.Array<string>, param2: net.lingala.zip4j.model.UnzipParameters, param3: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public constructor(param0: net.lingala.zip4j.model.ZipModel, param1: net.lingala.zip4j.model.UnzipParameters, param2: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
				}
				export module ExtractAllFilesTask {
					export class ExtractAllFilesTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.ExtractAllFilesTask.ExtractAllFilesTaskParameters>;
						public constructor(param0: string, param1: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(param0: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class ExtractFileTask extends net.lingala.zip4j.tasks.AbstractExtractFileTask<net.lingala.zip4j.tasks.ExtractFileTask.ExtractFileTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.ExtractFileTask>;
					public executeTask(param0: net.lingala.zip4j.tasks.ExtractFileTask.ExtractFileTaskParameters, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.ExtractFileTask.ExtractFileTaskParameters): number;
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public constructor(param0: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public calculateTotalWork(param0: any): number;
					public constructor(param0: net.lingala.zip4j.model.ZipModel, param1: androidNative.Array<string>, param2: net.lingala.zip4j.model.UnzipParameters, param3: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public constructor(param0: net.lingala.zip4j.model.ZipModel, param1: net.lingala.zip4j.model.UnzipParameters, param2: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
				}
				export module ExtractFileTask {
					export class ExtractFileTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.ExtractFileTask.ExtractFileTaskParameters>;
						public constructor(param0: string, param1: string, param2: string, param3: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(param0: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class MergeSplitZipFileTask extends net.lingala.zip4j.tasks.AsyncZipTask<net.lingala.zip4j.tasks.MergeSplitZipFileTask.MergeSplitZipFileTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.MergeSplitZipFileTask>;
					public executeTask(param0: net.lingala.zip4j.tasks.MergeSplitZipFileTask.MergeSplitZipFileTaskParameters, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public constructor(param0: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public constructor(param0: net.lingala.zip4j.model.ZipModel, param1: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public calculateTotalWork(param0: any): number;
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.MergeSplitZipFileTask.MergeSplitZipFileTaskParameters): number;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module MergeSplitZipFileTask {
					export class MergeSplitZipFileTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.MergeSplitZipFileTask.MergeSplitZipFileTaskParameters>;
						public constructor(param0: java.io.File, param1: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(param0: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class RemoveFilesFromZipTask extends net.lingala.zip4j.tasks.AbstractModifyFileTask<net.lingala.zip4j.tasks.RemoveFilesFromZipTask.RemoveFilesFromZipTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.RemoveFilesFromZipTask>;
					public constructor(param0: net.lingala.zip4j.model.ZipModel, param1: net.lingala.zip4j.headers.HeaderWriter, param2: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public executeTask(param0: net.lingala.zip4j.tasks.RemoveFilesFromZipTask.RemoveFilesFromZipTaskParameters, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.RemoveFilesFromZipTask.RemoveFilesFromZipTaskParameters): number;
					public constructor(param0: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public calculateTotalWork(param0: any): number;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module RemoveFilesFromZipTask {
					export class RemoveFilesFromZipTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.RemoveFilesFromZipTask.RemoveFilesFromZipTaskParameters>;
						public constructor(param0: java.util.List<string>, param1: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(param0: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class RenameFilesTask extends net.lingala.zip4j.tasks.AbstractModifyFileTask<net.lingala.zip4j.tasks.RenameFilesTask.RenameFilesTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.RenameFilesTask>;
					public constructor(param0: net.lingala.zip4j.model.ZipModel, param1: net.lingala.zip4j.headers.HeaderWriter, param2: net.lingala.zip4j.util.RawIO, param3: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public constructor(param0: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(param0: net.lingala.zip4j.tasks.RenameFilesTask.RenameFilesTaskParameters, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: any): number;
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.RenameFilesTask.RenameFilesTaskParameters): number;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module RenameFilesTask {
					export class RenameFilesTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.RenameFilesTask.RenameFilesTaskParameters>;
						public constructor(param0: java.util.Map<string, string>, param1: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(param0: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class SetCommentTask extends net.lingala.zip4j.tasks.AsyncZipTask<net.lingala.zip4j.tasks.SetCommentTask.SetCommentTaskTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.SetCommentTask>;
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public constructor(param0: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public constructor(param0: net.lingala.zip4j.model.ZipModel, param1: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public calculateTotalWork(param0: any): number;
					public executeTask(param0: net.lingala.zip4j.tasks.SetCommentTask.SetCommentTaskTaskParameters, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.SetCommentTask.SetCommentTaskTaskParameters): number;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module SetCommentTask {
					export class SetCommentTaskTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.SetCommentTask.SetCommentTaskTaskParameters>;
						public constructor(param0: string, param1: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(param0: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class BitUtils {
					public static class: java.lang.Class<net.lingala.zip4j.util.BitUtils>;
					public static unsetBit(param0: number, param1: number): number;
					public constructor();
					public static isBitSet(param0: number, param1: number): boolean;
					public static setBit(param0: number, param1: number): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class CrcUtil {
					public static class: java.lang.Class<net.lingala.zip4j.util.CrcUtil>;
					public static computeFileCrc(param0: java.io.File, param1: net.lingala.zip4j.progress.ProgressMonitor): number;
					public constructor();
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class FileUtils {
					public static class: java.lang.Class<net.lingala.zip4j.util.FileUtils>;
					public static DEFAULT_POSIX_FILE_ATTRIBUTES: androidNative.Array<number>;
					public static DEFAULT_POSIX_FOLDER_ATTRIBUTES: androidNative.Array<number>;
					public static getFileAttributes(param0: java.io.File): androidNative.Array<number>;
					public static isNumberedSplitFile(param0: java.io.File): boolean;
					public static getDefaultFileAttributes(param0: boolean): androidNative.Array<number>;
					public static setFileAttributes(param0: java.nio.file.Path, param1: androidNative.Array<number>): void;
					public static isWindows(): boolean;
					public static getZipFileNameWithoutExtension(param0: string): string;
					public static getFileExtension(param0: java.io.File): string;
					public static getFileNameWithoutExtension(param0: string): string;
					public static getFilesInDirectoryRecursive(param0: java.io.File, param1: boolean, param2: boolean): java.util.List<java.io.File>;
					public static assertFilesExist(param0: java.util.List<java.io.File>, param1: net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction): void;
					public static isZipEntryDirectory(param0: string): boolean;
					public static getAllSortedNumberedSplitFiles(param0: java.io.File): androidNative.Array<java.io.File>;
					public constructor();
					public static setFileLastModifiedTime(param0: java.nio.file.Path, param1: number): void;
					public static getSplitZipFiles(param0: net.lingala.zip4j.model.ZipModel): java.util.List<java.io.File>;
					public static getRelativeFileName(param0: java.io.File, param1: net.lingala.zip4j.model.ZipParameters): string;
					public static isMac(): boolean;
					public static setFileLastModifiedTimeWithoutNio(param0: java.io.File, param1: number): void;
					public static copyFile(param0: java.io.RandomAccessFile, param1: java.io.OutputStream, param2: number, param3: number, param4: net.lingala.zip4j.progress.ProgressMonitor, param5: number): void;
					public static getNextNumberedSplitFileCounterAsExtension(param0: number): string;
					public static isUnix(): boolean;
					public static getFilesInDirectoryRecursive(param0: java.io.File, param1: boolean, param2: boolean, param3: net.lingala.zip4j.model.ExcludeFileFilter): java.util.List<java.io.File>;
					public static isSymbolicLink(param0: java.io.File): boolean;
					public static readSymbolicLink(param0: java.io.File): string;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class InternalZipConstants {
					public static class: java.lang.Class<net.lingala.zip4j.util.InternalZipConstants>;
					public static ENDHDR: number;
					public static STD_DEC_HDR_SIZE: number;
					public static MAX_COMMENT_SIZE: number;
					public static AES_AUTH_LENGTH: number;
					public static AES_BLOCK_SIZE: number;
					public static AES_EXTRA_DATA_RECORD_SIZE: number;
					public static AES_MAC_ALGORITHM: string;
					public static AES_HASH_CHARSET: string;
					public static AES_HASH_ITERATIONS: number;
					public static AES_PASSWORD_VERIFIER_LENGTH: number;
					public static MIN_SPLIT_LENGTH: number;
					public static ZIP_64_SIZE_LIMIT: number;
					public static ZIP_64_NUMBER_OF_ENTRIES_LIMIT: number;
					public static BUFF_SIZE: number;
					public static MIN_BUFF_SIZE: number;
					public static UPDATE_LFH_CRC: number;
					public static UPDATE_LFH_COMP_SIZE: number;
					public static UPDATE_LFH_UNCOMP_SIZE: number;
					public static FILE_SEPARATOR: string;
					public static ZIP_FILE_SEPARATOR: string;
					public static MAX_ALLOWED_ZIP_COMMENT_LENGTH: number;
					public static ZIP_STANDARD_CHARSET_NAME: string;
					public static CHARSET_UTF_8: java.nio.charset.Charset;
					public static ZIP4J_DEFAULT_CHARSET: java.nio.charset.Charset;
					public static SEVEN_ZIP_SPLIT_FILE_EXTENSION_PATTERN: string;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class PasswordCallback {
					public static class: java.lang.Class<net.lingala.zip4j.util.PasswordCallback>;
					/**
					 * Constructs a new instance of the net.lingala.zip4j.util.PasswordCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getPassword(): androidNative.Array<string> });
					public constructor();
					public getPassword(): androidNative.Array<string>;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class RawIO {
					public static class: java.lang.Class<net.lingala.zip4j.util.RawIO>;
					public readShortLittleEndian(param0: androidNative.Array<number>, param1: number): number;
					public writeLongLittleEndian(param0: java.io.OutputStream, param1: number): void;
					public writeShortLittleEndian(param0: java.io.OutputStream, param1: number): void;
					public readIntLittleEndian(param0: androidNative.Array<number>): number;
					public readLongLittleEndian(param0: java.io.RandomAccessFile): number;
					public readIntLittleEndian(param0: androidNative.Array<number>, param1: number): number;
					public readLongLittleEndian(param0: java.io.RandomAccessFile, param1: number): number;
					public writeLongLittleEndian(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public readIntLittleEndian(param0: java.io.InputStream): number;
					public readLongLittleEndian(param0: androidNative.Array<number>, param1: number): number;
					public writeShortLittleEndian(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public readShortLittleEndian(param0: java.io.InputStream): number;
					public constructor();
					public readLongLittleEndian(param0: java.io.InputStream, param1: number): number;
					public readLongLittleEndian(param0: java.io.InputStream): number;
					public readShortLittleEndian(param0: java.io.RandomAccessFile): number;
					public writeIntLittleEndian(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public readIntLittleEndian(param0: java.io.RandomAccessFile): number;
					public writeIntLittleEndian(param0: java.io.OutputStream, param1: number): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class UnzipUtil {
					public static class: java.lang.Class<net.lingala.zip4j.util.UnzipUtil>;
					public constructor();
					public static createZipInputStream(param0: net.lingala.zip4j.model.ZipModel, param1: net.lingala.zip4j.model.FileHeader, param2: androidNative.Array<string>): net.lingala.zip4j.io.inputstream.ZipInputStream;
					public static applyFileAttributes(param0: net.lingala.zip4j.model.FileHeader, param1: java.io.File): void;
					public static createSplitInputStream(param0: net.lingala.zip4j.model.ZipModel): net.lingala.zip4j.io.inputstream.SplitInputStream;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class Zip4jUtil {
					public static class: java.lang.Class<net.lingala.zip4j.util.Zip4jUtil>;
					public static epochToExtendedDosTime(param0: number): number;
					public static readFully(param0: java.io.InputStream, param1: androidNative.Array<number>, param2: number, param3: number): number;
					public constructor();
					public static createDirectoryIfNotExists(param0: java.io.File): boolean;
					public static isStringNullOrEmpty(param0: string): boolean;
					public static convertCharArrayToByteArray(param0: androidNative.Array<string>): androidNative.Array<number>;
					public static isStringNotNullAndNotEmpty(param0: string): boolean;
					public static getCompressionMethod(param0: net.lingala.zip4j.model.AbstractFileHeader): net.lingala.zip4j.model.enums.CompressionMethod;
					public static readFully(param0: java.io.InputStream, param1: androidNative.Array<number>): number;
					public static dosToExtendedEpochTme(param0: number): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class ZipVersionUtils {
					public static class: java.lang.Class<net.lingala.zip4j.util.ZipVersionUtils>;
					public static determineVersionNeededToExtract(param0: net.lingala.zip4j.model.ZipParameters): net.lingala.zip4j.headers.VersionNeededToExtract;
					public constructor();
					public static determineVersionMadeBy(param0: net.lingala.zip4j.model.ZipParameters, param1: net.lingala.zip4j.util.RawIO): number;
				}
			}
		}
	}
}

//Generics information:
//net.lingala.zip4j.io.inputstream.CipherInputStream:1
//net.lingala.zip4j.io.outputstream.CipherOutputStream:1
//net.lingala.zip4j.tasks.AbstractAddFileToZipTask:1
//net.lingala.zip4j.tasks.AbstractExtractFileTask:1
//net.lingala.zip4j.tasks.AbstractModifyFileTask:1
//net.lingala.zip4j.tasks.AsyncZipTask:1
