declare module net {
	export module lingala {
		export module zip4j {
			export class ZipFile {
				public static class: java.lang.Class<net.lingala.zip4j.ZipFile>;
				public addFiles(param0: java.util.List<java.io.File>, param1: net.lingala.zip4j.model.ZipParameters): void;
				public getSplitZipFiles(): java.util.List<java.io.File>;
				public isRunInThread(): boolean;
				public addFolder(param0: java.io.File, param1: net.lingala.zip4j.model.ZipParameters): void;
				public getFileHeaders(): java.util.List<net.lingala.zip4j.model.FileHeader>;
				public addFile(param0: java.io.File, param1: net.lingala.zip4j.model.ZipParameters): void;
				public createSplitZipFileFromFolder(param0: java.io.File, param1: net.lingala.zip4j.model.ZipParameters, param2: boolean, param3: number): void;
				public addStream(param0: java.io.InputStream, param1: net.lingala.zip4j.model.ZipParameters): void;
				public addFile(param0: java.io.File): void;
				public getFileHeader(param0: string): net.lingala.zip4j.model.FileHeader;
				public constructor(param0: string);
				public extractFile(param0: net.lingala.zip4j.model.FileHeader, param1: string, param2: string): void;
				public getInputStream(param0: net.lingala.zip4j.model.FileHeader): net.lingala.zip4j.io.inputstream.ZipInputStream;
				public removeFile(param0: net.lingala.zip4j.model.FileHeader): void;
				public mergeSplitFiles(param0: java.io.File): void;
				public setPassword(param0: native.Array<string>): void;
				public addFiles(param0: java.util.List<java.io.File>): void;
				public getCharset(): java.nio.charset.Charset;
				public getComment(): string;
				public setComment(param0: string): void;
				public isSplitArchive(): boolean;
				public extractFile(param0: string, param1: string): void;
				public constructor(param0: java.io.File);
				public isValidZipFile(): boolean;
				public addFile(param0: string): void;
				public addFolder(param0: java.io.File): void;
				public extractFile(param0: string, param1: string, param2: string): void;
				public getProgressMonitor(): net.lingala.zip4j.progress.ProgressMonitor;
				public setRunInThread(param0: boolean): void;
				public toString(): string;
				public extractFile(param0: net.lingala.zip4j.model.FileHeader, param1: string): void;
				public constructor(param0: string, param1: native.Array<string>);
				public createSplitZipFile(param0: java.util.List<java.io.File>, param1: net.lingala.zip4j.model.ZipParameters, param2: boolean, param3: number): void;
				public addFile(param0: string, param1: net.lingala.zip4j.model.ZipParameters): void;
				public extractAll(param0: string): void;
				public constructor(param0: java.io.File, param1: native.Array<string>);
				public removeFile(param0: string): void;
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
					public static PASSWORD_VERIFIER_LENGTH: number;
					public constructor(param0: net.lingala.zip4j.model.AESExtraDataRecord, param1: native.Array<string>, param2: native.Array<number>, param3: native.Array<number>);
					public decryptData(param0: native.Array<number>, param1: number, param2: number): number;
					public getCalculatedAuthenticationBytes(): native.Array<number>;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export class AESEncrpyter extends net.lingala.zip4j.crypto.Encrypter {
					public static class: java.lang.Class<net.lingala.zip4j.crypto.AESEncrpyter>;
					public getSaltBytes(): native.Array<number>;
					public getFinalMac(): native.Array<number>;
					public encryptData(param0: native.Array<number>, param1: number, param2: number): number;
					public encryptData(param0: native.Array<number>): number;
					public constructor(param0: native.Array<string>, param1: net.lingala.zip4j.model.enums.AesKeyStrength);
					public getDerivedPasswordVerifier(): native.Array<number>;
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
					public constructor();
					public static prepareBuffAESIVBytes(param0: native.Array<number>, param1: number): void;
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
					public constructor(implementation: {
						decryptData(param0: native.Array<number>, param1: number, param2: number): number;
					});
					public constructor();
					public decryptData(param0: native.Array<number>, param1: number, param2: number): number;
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
					public constructor(implementation: {
						encryptData(param0: native.Array<number>): number;
						encryptData(param0: native.Array<number>, param1: number, param2: number): number;
					});
					public constructor();
					public encryptData(param0: native.Array<number>, param1: number, param2: number): number;
					public encryptData(param0: native.Array<number>): number;
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
						public static hex2bin(param0: string): native.Array<number>;
						public static bin2hex(param0: native.Array<number>): string;
						public static hex2bin(param0: string): number;
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
						public init(param0: native.Array<number>): void;
						public update(param0: native.Array<number>): void;
						public doFinal(): native.Array<number>;
						public update(param0: native.Array<number>, param1: number, param2: number): void;
						public doFinal(param0: native.Array<number>): native.Array<number>;
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
						public getPseudoRandomFunction(): net.lingala.zip4j.crypto.PBKDF2.PRF;
						public INT(param0: native.Array<number>, param1: number, param2: number): void;
						public getParameters(): net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters;
						public setParameters(param0: net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters): void;
						public verifyKey(param0: native.Array<string>): boolean;
						public constructor(param0: net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters, param1: net.lingala.zip4j.crypto.PBKDF2.PRF);
						public deriveKey(param0: native.Array<string>): native.Array<number>;
						public deriveKey(param0: native.Array<string>, param1: number): native.Array<number>;
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
						public salt: native.Array<number>;
						public iterationCount: number;
						public hashAlgorithm: string;
						public hashCharset: string;
						public derivedKey: native.Array<number>;
						public constructor();
						public getIterationCount(): number;
						public constructor(param0: string, param1: string, param2: native.Array<number>, param3: number);
						public setIterationCount(param0: number): void;
						public getHashCharset(): string;
						public constructor(param0: string, param1: string, param2: native.Array<number>, param3: number, param4: native.Array<number>);
						public setSalt(param0: native.Array<number>): void;
						public setDerivedKey(param0: native.Array<number>): void;
						public getHashAlgorithm(): string;
						public setHashAlgorithm(param0: string): void;
						public setHashCharset(param0: string): void;
						public getDerivedKey(): native.Array<number>;
						public getSalt(): native.Array<number>;
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
						public constructor(implementation: {
							init(param0: native.Array<number>): void;
							doFinal(param0: native.Array<number>): native.Array<number>;
							getHLen(): number;
						});
						public constructor();
						public init(param0: native.Array<number>): void;
						public doFinal(param0: native.Array<number>): native.Array<number>;
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
					public decryptData(param0: native.Array<number>, param1: number, param2: number): number;
					public constructor(param0: native.Array<string>, param1: native.Array<number>, param2: native.Array<number>);
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
					public constructor(param0: native.Array<string>, param1: number);
					public getHeaderBytes(): native.Array<number>;
					public encryptData(param0: native.Array<number>, param1: number, param2: number): number;
					public encryptData(param0: native.Array<number>): number;
					public generateRandomBytes(param0: number): native.Array<number>;
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
						public constructor(param0: native.Array<number>);
						public processBlock(param0: native.Array<number>, param1: native.Array<number>): number;
						public processBlock(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): number;
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
						public initKeys(param0: native.Array<string>): void;
						public updateKeys(param0: number): void;
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
						public static UNKNOWN: net.lingala.zip4j.exception.ZipException.Type;
						public static valueOf(param0: string): net.lingala.zip4j.exception.ZipException.Type;
						public static values(): native.Array<net.lingala.zip4j.exception.ZipException.Type>;
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
					public generateLocalFileHeader(param0: net.lingala.zip4j.model.FileHeader): net.lingala.zip4j.model.LocalFileHeader;
					public constructor();
					public generateFileHeader(param0: net.lingala.zip4j.model.ZipParameters, param1: boolean, param2: number, param3: java.nio.charset.Charset): net.lingala.zip4j.model.FileHeader;
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
					public readAllHeaders(param0: java.io.RandomAccessFile, param1: java.nio.charset.Charset): net.lingala.zip4j.model.ZipModel;
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
					public static DIGITAL_SIGNATURE: net.lingala.zip4j.headers.HeaderSignature;
					public static ARCEXTDATREC: net.lingala.zip4j.headers.HeaderSignature;
					public static SPLIT_ZIP: net.lingala.zip4j.headers.HeaderSignature;
					public static ZIP64_END_CENTRAL_DIRECTORY_LOCATOR: net.lingala.zip4j.headers.HeaderSignature;
					public static ZIP64_END_CENTRAL_DIRECTORY_RECORD: net.lingala.zip4j.headers.HeaderSignature;
					public static ZIP64_EXTRA_FIELD_SIGNATURE: net.lingala.zip4j.headers.HeaderSignature;
					public static AES_EXTRA_DATA_RECORD: net.lingala.zip4j.headers.HeaderSignature;
					public static values(): native.Array<net.lingala.zip4j.headers.HeaderSignature>;
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
					public constructor();
					public static decodeStringWithCharset(param0: native.Array<number>, param1: boolean, param2: java.nio.charset.Charset): string;
					public static getIndexOfFileHeader(param0: net.lingala.zip4j.model.ZipModel, param1: net.lingala.zip4j.model.FileHeader): number;
					public static getFileHeader(param0: net.lingala.zip4j.model.ZipModel, param1: string): net.lingala.zip4j.model.FileHeader;
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
			export module io {
				export module inputstream {
					export class AesCipherInputStream extends net.lingala.zip4j.io.inputstream.CipherInputStream<net.lingala.zip4j.crypto.AESDecrypter> {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.AesCipherInputStream>;
						public read(): number;
						public constructor(param0: net.lingala.zip4j.io.inputstream.ZipEntryInputStream, param1: net.lingala.zip4j.model.LocalFileHeader, param2: native.Array<string>);
						public read(param0: native.Array<number>): number;
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: native.Array<string>): any;
						public readStoredMac(param0: java.io.InputStream): native.Array<number>;
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: native.Array<string>): net.lingala.zip4j.crypto.AESDecrypter;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
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
					export abstract class CipherInputStream<T>  extends java.io.InputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.CipherInputStream<any>>;
						public read(): number;
						public constructor(param0: net.lingala.zip4j.io.inputstream.ZipEntryInputStream, param1: net.lingala.zip4j.model.LocalFileHeader, param2: native.Array<string>);
						public read(param0: native.Array<number>): number;
						public close(): void;
						public getNumberOfBytesReadForThisEntry(): number;
						public readRaw(param0: native.Array<number>): number;
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: native.Array<string>): any;
						public getLocalFileHeader(): net.lingala.zip4j.model.LocalFileHeader;
						public getDecrypter(): any;
						public getLastReadRawDataCache(): native.Array<number>;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
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
						public oneByteBuffer: native.Array<number>;
						public read(): number;
						public read(param0: native.Array<number>): number;
						public close(): void;
						public constructor(param0: net.lingala.zip4j.io.inputstream.CipherInputStream<any>);
						public getLastReadRawDataCache(): native.Array<number>;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
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
						public read(): number;
						public read(param0: native.Array<number>): number;
						public constructor(param0: net.lingala.zip4j.io.inputstream.CipherInputStream<any>);
						public read(param0: native.Array<number>, param1: number, param2: number): number;
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
						public constructor(param0: net.lingala.zip4j.io.inputstream.ZipEntryInputStream, param1: net.lingala.zip4j.model.LocalFileHeader, param2: native.Array<string>);
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: native.Array<string>): any;
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: native.Array<string>): net.lingala.zip4j.crypto.Decrypter;
					}
					export module NoCipherInputStream {
						export class NoDecrypter extends net.lingala.zip4j.crypto.Decrypter {
							public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.NoCipherInputStream.NoDecrypter>;
							public decryptData(param0: native.Array<number>, param1: number, param2: number): number;
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
					export class SplitInputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.SplitInputStream>;
						public read(): number;
						public prepareExtractionForFileHeader(param0: net.lingala.zip4j.model.FileHeader): void;
						public constructor(param0: java.io.File, param1: boolean, param2: number);
						public read(param0: native.Array<number>): number;
						public close(): void;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
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
						public read(): number;
						public read(param0: native.Array<number>): number;
						public close(): void;
						public constructor(param0: java.io.InputStream, param1: number);
						public readRawFully(param0: native.Array<number>): number;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
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
						public read(): number;
						public getAvailableBytesInPushBackInputStream(): number;
						public getNextEntry(): net.lingala.zip4j.model.LocalFileHeader;
						public constructor(param0: java.io.InputStream);
						public constructor(param0: java.io.InputStream, param1: java.nio.charset.Charset);
						public getNextEntry(param0: net.lingala.zip4j.model.FileHeader): net.lingala.zip4j.model.LocalFileHeader;
						public read(param0: native.Array<number>): number;
						public close(): void;
						public constructor(param0: java.io.InputStream, param1: native.Array<string>);
						public constructor(param0: java.io.InputStream, param1: native.Array<string>, param2: java.nio.charset.Charset);
						public read(param0: native.Array<number>, param1: number, param2: number): number;
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
						public constructor(param0: net.lingala.zip4j.io.inputstream.ZipEntryInputStream, param1: net.lingala.zip4j.model.LocalFileHeader, param2: native.Array<string>);
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: native.Array<string>): any;
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: native.Array<string>): net.lingala.zip4j.crypto.StandardDecrypter;
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
					export class AesCipherOutputStream extends net.lingala.zip4j.io.outputstream.CipherOutputStream<net.lingala.zip4j.crypto.AESEncrpyter> {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.AesCipherOutputStream>;
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: native.Array<string>): net.lingala.zip4j.crypto.AESEncrpyter;
						public write(param0: number): void;
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public closeEntry(): void;
						public constructor(param0: net.lingala.zip4j.io.outputstream.ZipEntryOutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: native.Array<string>);
						public write(param0: native.Array<number>): void;
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: native.Array<string>): any;
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
					export abstract class CipherOutputStream<T>  extends java.io.OutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.CipherOutputStream<any>>;
						public writeHeaders(param0: native.Array<number>): void;
						public close(): void;
						public write(param0: number): void;
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public closeEntry(): void;
						public constructor(param0: net.lingala.zip4j.io.outputstream.ZipEntryOutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: native.Array<string>);
						public write(param0: native.Array<number>): void;
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: native.Array<string>): any;
						public getNumberOfBytesWrittenForThisEntry(): number;
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
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public closeEntry(): void;
						public write(param0: native.Array<number>): void;
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
					export class CountingOutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.CountingOutputStream>;
						public constructor(param0: java.io.OutputStream);
						public getNumberOfBytesWritten(): number;
						public checkBuffSizeAndStartNextSplitFile(param0: number): boolean;
						public isSplitZipFile(): boolean;
						public close(): void;
						public write(param0: number): void;
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public getOffsetForNextEntry(): number;
						public write(param0: native.Array<number>): void;
						public getCurrentSplitFileCounter(): number;
						public getSplitLength(): number;
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
					export class DeflaterOutputStream extends net.lingala.zip4j.io.outputstream.CompressedOutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.DeflaterOutputStream>;
						public deflater: java.util.zip.Deflater;
						public constructor(param0: net.lingala.zip4j.io.outputstream.CipherOutputStream<any>);
						public constructor(param0: net.lingala.zip4j.io.outputstream.CipherOutputStream<any>, param1: net.lingala.zip4j.model.enums.CompressionLevel);
						public write(param0: number): void;
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public closeEntry(): void;
						public write(param0: native.Array<number>): void;
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
						public constructor(param0: net.lingala.zip4j.io.outputstream.ZipEntryOutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: native.Array<string>);
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: native.Array<string>): any;
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: native.Array<string>): net.lingala.zip4j.io.outputstream.NoCipherOutputStream.NoEncrypter;
					}
					export module NoCipherOutputStream {
						export class NoEncrypter extends net.lingala.zip4j.crypto.Encrypter {
							public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.NoCipherOutputStream.NoEncrypter>;
							public encryptData(param0: native.Array<number>, param1: number, param2: number): number;
							public encryptData(param0: native.Array<number>): number;
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
					export class SplitOutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.SplitOutputStream>;
						public constructor(param0: java.io.File, param1: number);
						public skipBytes(param0: number): number;
						public constructor(param0: java.io.File);
						public close(): void;
						public write(param0: number): void;
						public checkBufferSizeAndStartNextSplitFile(param0: number): boolean;
						public getCurrentSplitFileCounter(): number;
						public getSplitLength(): number;
						public getFilePointer(): number;
						public isSplitZipFile(): boolean;
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public write(param0: native.Array<number>): void;
						public seek(param0: number): void;
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
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public closeEntry(): void;
						public write(param0: native.Array<number>): void;
						public getNumberOfBytesWrittenForThisEntry(): number;
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
						public close(): void;
						public putNextEntry(param0: net.lingala.zip4j.model.ZipParameters): void;
						public write(param0: number): void;
						public constructor(param0: java.io.OutputStream, param1: native.Array<string>, param2: java.nio.charset.Charset);
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public closeEntry(): net.lingala.zip4j.model.FileHeader;
						public constructor(param0: java.io.OutputStream, param1: java.nio.charset.Charset);
						public write(param0: native.Array<number>): void;
						public constructor(param0: java.io.OutputStream, param1: native.Array<string>, param2: java.nio.charset.Charset, param3: net.lingala.zip4j.model.ZipModel);
						public constructor(param0: java.io.OutputStream, param1: native.Array<string>);
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
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: native.Array<string>): net.lingala.zip4j.crypto.StandardEncrypter;
						public write(param0: number): void;
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public constructor(param0: net.lingala.zip4j.io.outputstream.ZipEntryOutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: native.Array<string>);
						public write(param0: native.Array<number>): void;
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: native.Array<string>): any;
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
					public setGeneralPurposeFlag(param0: native.Array<number>): void;
					public getAesExtraDataRecord(): net.lingala.zip4j.model.AESExtraDataRecord;
					public getCrc(): number;
					public setFileNameLength(param0: number): void;
					public getFileNameLength(): number;
					public getUncompressedSize(): number;
					public getCrcRawData(): native.Array<number>;
					public getExtraDataRecords(): java.util.List<net.lingala.zip4j.model.ExtraDataRecord>;
					public setUncompressedSize(param0: number): void;
					public isDataDescriptorExists(): boolean;
					public getExtraFieldLength(): number;
					public constructor();
					public setDirectory(param0: boolean): void;
					public setCrc(param0: number): void;
					public getCompressedSize(): number;
					public setDataDescriptorExists(param0: boolean): void;
					public setCompressionMethod(param0: net.lingala.zip4j.model.enums.CompressionMethod): void;
					public getVersionNeededToExtract(): number;
					public setExtraFieldLength(param0: number): void;
					public getFileName(): string;
					public setLastModifiedTime(param0: number): void;
					public isEncrypted(): boolean;
					public setEncrypted(param0: boolean): void;
					public isFileNameUTF8Encoded(): boolean;
					public setFileNameUTF8Encoded(param0: boolean): void;
					public setCrcRawData(param0: native.Array<number>): void;
					public setFileName(param0: string): void;
					public getEncryptionMethod(): net.lingala.zip4j.model.enums.EncryptionMethod;
					public isDirectory(): boolean;
					public getLastModifiedTime(): number;
					public getZip64ExtendedInfo(): net.lingala.zip4j.model.Zip64ExtendedInfo;
					public setCompressedSize(param0: number): void;
					public setAesExtraDataRecord(param0: net.lingala.zip4j.model.AESExtraDataRecord): void;
					public setEncryptionMethod(param0: net.lingala.zip4j.model.enums.EncryptionMethod): void;
					public setVersionNeededToExtract(param0: number): void;
					public getCompressionMethod(): net.lingala.zip4j.model.enums.CompressionMethod;
					public getGeneralPurposeFlag(): native.Array<number>;
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
					public getSizeOfCentralDirectory(): number;
					public setSizeOfCentralDirectory(param0: number): void;
					public setTotalNumberOfEntriesInCentralDirectory(param0: number): void;
					public setNumberOfThisDisk(param0: number): void;
					public getTotalNumberOfEntriesInCentralDirectoryOnThisDisk(): number;
					public constructor();
					public setTotalNumberOfEntriesInCentralDirectoryOnThisDisk(param0: number): void;
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
				export class ExtraDataRecord extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.ExtraDataRecord>;
					public constructor();
					public getData(): native.Array<number>;
					public setHeader(param0: number): void;
					public setSizeOfData(param0: number): void;
					public getHeader(): number;
					public getSizeOfData(): number;
					public setData(param0: native.Array<number>): void;
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
					public getFileCommentLength(): number;
					public setFileCommentLength(param0: number): void;
					public getExternalFileAttributes(): native.Array<number>;
					public getDiskNumberStart(): number;
					public setDiskNumberStart(param0: number): void;
					public setOffsetLocalHeader(param0: number): void;
					public setFileComment(param0: string): void;
					public getOffsetLocalHeader(): number;
					public setVersionMadeBy(param0: number): void;
					public constructor();
					public getInternalFileAttributes(): native.Array<number>;
					public getVersionMadeBy(): number;
					public setExternalFileAttributes(param0: native.Array<number>): void;
					public setInternalFileAttributes(param0: native.Array<number>): void;
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
					public setExtraField(param0: native.Array<number>): void;
					public getOffsetStartOfData(): number;
					public setWriteCompressedSizeInZip64ExtraRecord(param0: boolean): void;
					public constructor();
					public getExtraField(): native.Array<number>;
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
					public setExtensibleDataSector(param0: native.Array<number>): void;
					public setSizeOfZip64EndCentralDirectoryRecord(param0: number): void;
					public setSizeOfCentralDirectory(param0: number): void;
					public getExtensibleDataSector(): native.Array<number>;
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
					public setDefaultFolderPath(param0: string): void;
					public setWriteExtendedLocalFileHeader(param0: boolean): void;
					public isReadHiddenFolders(): boolean;
					public constructor(param0: net.lingala.zip4j.model.ZipParameters);
					public setAesVersion(param0: net.lingala.zip4j.model.enums.AesVersion): void;
					public getLastModifiedFileTime(): number;
					public getCompressionLevel(): net.lingala.zip4j.model.enums.CompressionLevel;
					public clone(): any;
					public getFileNameInZip(): string;
					public setLastModifiedFileTime(param0: number): void;
					public constructor();
					public setCompressionLevel(param0: net.lingala.zip4j.model.enums.CompressionLevel): void;
					public getDefaultFolderPath(): string;
					public getEntryCRC(): number;
					public getRootFolderNameInZip(): string;
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
					public isOverrideExistingFilesInZip(): boolean;
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
						public static values(): native.Array<net.lingala.zip4j.model.enums.AesKeyStrength>;
						public getRawCode(): number;
						public getMacLength(): number;
						public getKeyLength(): number;
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
						public static values(): native.Array<net.lingala.zip4j.model.enums.AesVersion>;
						public static valueOf(param0: string): net.lingala.zip4j.model.enums.AesVersion;
						public static getFromVersionNumber(param0: number): net.lingala.zip4j.model.enums.AesVersion;
						public getVersionNumber(): number;
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
						public static FASTEST: net.lingala.zip4j.model.enums.CompressionLevel;
						public static FAST: net.lingala.zip4j.model.enums.CompressionLevel;
						public static NORMAL: net.lingala.zip4j.model.enums.CompressionLevel;
						public static MAXIMUM: net.lingala.zip4j.model.enums.CompressionLevel;
						public getLevel(): number;
						public static values(): native.Array<net.lingala.zip4j.model.enums.CompressionLevel>;
						public static valueOf(param0: string): net.lingala.zip4j.model.enums.CompressionLevel;
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
						public static values(): native.Array<net.lingala.zip4j.model.enums.CompressionMethod>;
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
						public static valueOf(param0: string): net.lingala.zip4j.model.enums.EncryptionMethod;
						public static values(): native.Array<net.lingala.zip4j.model.enums.EncryptionMethod>;
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
						public static values(): native.Array<net.lingala.zip4j.model.enums.RandomAccessFileMode>;
						public static valueOf(param0: string): net.lingala.zip4j.model.enums.RandomAccessFileMode;
						public getValue(): string;
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
						public static values(): native.Array<net.lingala.zip4j.progress.ProgressMonitor.Result>;
						public static valueOf(param0: string): net.lingala.zip4j.progress.ProgressMonitor.Result;
					}
					export class State {
						public static class: java.lang.Class<net.lingala.zip4j.progress.ProgressMonitor.State>;
						public static READY: net.lingala.zip4j.progress.ProgressMonitor.State;
						public static BUSY: net.lingala.zip4j.progress.ProgressMonitor.State;
						public static values(): native.Array<net.lingala.zip4j.progress.ProgressMonitor.State>;
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
						public static valueOf(param0: string): net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static values(): native.Array<net.lingala.zip4j.progress.ProgressMonitor.Task>;
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
				export abstract class AbstractAddFileToZipTask<T>  extends net.lingala.zip4j.tasks.AsyncZipTask<any> {
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
				export abstract class AbstractExtractFileTask<T>  extends net.lingala.zip4j.tasks.AsyncZipTask<any> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AbstractExtractFileTask<any>>;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean);
					public extractFile(param0: net.lingala.zip4j.io.inputstream.ZipInputStream, param1: net.lingala.zip4j.model.FileHeader, param2: string, param3: string, param4: net.lingala.zip4j.progress.ProgressMonitor): void;
					public getZipModel(): net.lingala.zip4j.model.ZipModel;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean, param2: net.lingala.zip4j.model.ZipModel);
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
				export abstract class AbstractZipTaskParameters {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AbstractZipTaskParameters>;
					public charset: java.nio.charset.Charset;
					public constructor(param0: java.nio.charset.Charset);
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
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean, param2: net.lingala.zip4j.model.ZipModel, param3: native.Array<string>, param4: net.lingala.zip4j.headers.HeaderWriter);
					public calculateTotalWork(param0: any): number;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean);
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.AddFilesToZipTask.AddFilesToZipTaskParameters): number;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module AddFilesToZipTask {
					export class AddFilesToZipTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.AddFilesToZipTask.AddFilesToZipTaskParameters>;
						public constructor(param0: java.util.List<java.io.File>, param1: net.lingala.zip4j.model.ZipParameters, param2: java.nio.charset.Charset);
						public constructor(param0: java.nio.charset.Charset);
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
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean, param2: net.lingala.zip4j.model.ZipModel, param3: native.Array<string>, param4: net.lingala.zip4j.headers.HeaderWriter);
					public calculateTotalWork(param0: any): number;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean);
					public executeTask(param0: net.lingala.zip4j.tasks.AddFolderToZipTask.AddFolderToZipTaskParameters, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.AddFolderToZipTask.AddFolderToZipTaskParameters): number;
				}
				export module AddFolderToZipTask {
					export class AddFolderToZipTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.AddFolderToZipTask.AddFolderToZipTaskParameters>;
						public constructor(param0: java.io.File, param1: net.lingala.zip4j.model.ZipParameters, param2: java.nio.charset.Charset);
						public constructor(param0: java.nio.charset.Charset);
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
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean, param2: net.lingala.zip4j.model.ZipModel, param3: native.Array<string>, param4: net.lingala.zip4j.headers.HeaderWriter);
					public calculateTotalWork(param0: any): number;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean);
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.AddStreamToZipTask.AddStreamToZipTaskParameters): number;
				}
				export module AddStreamToZipTask {
					export class AddStreamToZipTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.AddStreamToZipTask.AddStreamToZipTaskParameters>;
						public constructor(param0: java.io.InputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: java.nio.charset.Charset);
						public constructor(param0: java.nio.charset.Charset);
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
				export abstract class AsyncZipTask<T>  extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AsyncZipTask<any>>;
					public executeTask(param0: T, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: T): number;
					public verifyIfTaskIsCancelled(): void;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean);
					public execute(param0: T): void;
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
				export class ExtractAllFilesTask extends net.lingala.zip4j.tasks.AbstractExtractFileTask<net.lingala.zip4j.tasks.ExtractAllFilesTask.ExtractAllFilesTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.ExtractAllFilesTask>;
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.ExtractAllFilesTask.ExtractAllFilesTaskParameters): number;
					public executeTask(param0: net.lingala.zip4j.tasks.ExtractAllFilesTask.ExtractAllFilesTaskParameters, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean, param2: net.lingala.zip4j.model.ZipModel, param3: native.Array<string>);
					public calculateTotalWork(param0: any): number;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean);
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean, param2: net.lingala.zip4j.model.ZipModel);
				}
				export module ExtractAllFilesTask {
					export class ExtractAllFilesTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.ExtractAllFilesTask.ExtractAllFilesTaskParameters>;
						public constructor(param0: string, param1: java.nio.charset.Charset);
						public constructor(param0: java.nio.charset.Charset);
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
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean, param2: net.lingala.zip4j.model.ZipModel, param3: native.Array<string>);
					public calculateTotalWork(param0: any): number;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean);
					public createZipInputStream(param0: net.lingala.zip4j.model.FileHeader, param1: java.nio.charset.Charset): net.lingala.zip4j.io.inputstream.ZipInputStream;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean, param2: net.lingala.zip4j.model.ZipModel);
				}
				export module ExtractFileTask {
					export class ExtractFileTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.ExtractFileTask.ExtractFileTaskParameters>;
						public constructor(param0: string, param1: net.lingala.zip4j.model.FileHeader, param2: string, param3: java.nio.charset.Charset);
						public constructor(param0: java.nio.charset.Charset);
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
					public calculateTotalWork(param0: any): number;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean);
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.MergeSplitZipFileTask.MergeSplitZipFileTaskParameters): number;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean, param2: net.lingala.zip4j.model.ZipModel);
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module MergeSplitZipFileTask {
					export class MergeSplitZipFileTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.MergeSplitZipFileTask.MergeSplitZipFileTaskParameters>;
						public constructor(param0: java.io.File, param1: java.nio.charset.Charset);
						public constructor(param0: java.nio.charset.Charset);
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
				export class RemoveEntryFromZipFileTask extends net.lingala.zip4j.tasks.AsyncZipTask<net.lingala.zip4j.tasks.RemoveEntryFromZipFileTask.RemoveEntryFromZipFileTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.RemoveEntryFromZipFileTask>;
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: any): number;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean);
					public executeTask(param0: net.lingala.zip4j.tasks.RemoveEntryFromZipFileTask.RemoveEntryFromZipFileTaskParameters, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.RemoveEntryFromZipFileTask.RemoveEntryFromZipFileTaskParameters): number;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean, param2: net.lingala.zip4j.model.ZipModel);
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module RemoveEntryFromZipFileTask {
					export class RemoveEntryFromZipFileTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.RemoveEntryFromZipFileTask.RemoveEntryFromZipFileTaskParameters>;
						public constructor(param0: net.lingala.zip4j.model.FileHeader, param1: java.nio.charset.Charset);
						public constructor(param0: java.nio.charset.Charset);
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
					public calculateTotalWork(param0: any): number;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean);
					public executeTask(param0: net.lingala.zip4j.tasks.SetCommentTask.SetCommentTaskTaskParameters, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public constructor(param0: net.lingala.zip4j.progress.ProgressMonitor, param1: boolean, param2: net.lingala.zip4j.model.ZipModel);
					public calculateTotalWork(param0: net.lingala.zip4j.tasks.SetCommentTask.SetCommentTaskTaskParameters): number;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module SetCommentTask {
					export class SetCommentTaskTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.SetCommentTask.SetCommentTaskTaskParameters>;
						public constructor(param0: string, param1: java.nio.charset.Charset);
						public constructor(param0: java.nio.charset.Charset);
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
					public static getFilesInDirectoryRecursive(param0: java.io.File, param1: boolean, param2: boolean): java.util.List<java.io.File>;
					public static isZipEntryDirectory(param0: string): boolean;
					public constructor();
					public static setFileLastModifiedTime(param0: any /*java.nio.file.Path*/, param1: number): void;
					public static getZipFileNameWithoutExtension(param0: string): string;
					public static getSplitZipFiles(param0: net.lingala.zip4j.model.ZipModel): java.util.List<java.io.File>;
					public static getFileAttributes(param0: java.io.File): native.Array<number>;
					public static assertFilesExist(param0: java.util.List<java.io.File>): void;
					public static setFileLastModifiedTimeWithoutNio(param0: java.io.File, param1: number): void;
					public static getRelativeFileName(param0: string, param1: string, param2: string): string;
					public static setFileAttributes(param0: any /*java.nio.file.Path*/, param1: native.Array<number>): void;
					public static copyFile(param0: java.io.RandomAccessFile, param1: java.io.OutputStream, param2: number, param3: number, param4: net.lingala.zip4j.progress.ProgressMonitor): void;
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
					public static AES_AUTH_LENGTH: number;
					public static AES_BLOCK_SIZE: number;
					public static MIN_SPLIT_LENGTH: number;
					public static ZIP_64_SIZE_LIMIT: number;
					public static ZIP_64_NUMBER_OF_ENTRIES_LIMIT: number;
					public static BUFF_SIZE: number;
					public static UPDATE_LFH_CRC: number;
					public static UPDATE_LFH_COMP_SIZE: number;
					public static UPDATE_LFH_UNCOMP_SIZE: number;
					public static ZIP_STANDARD_CHARSET: string;
					public static FILE_SEPARATOR: string;
					public static ZIP_FILE_SEPARATOR: string;
					public static MAX_ALLOWED_ZIP_COMMENT_LENGTH: number;
					public static CHARSET_UTF_8: java.nio.charset.Charset;
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
					public writeLongLittleEndian(param0: native.Array<number>, param1: number, param2: number): void;
					public writeLongLittleEndian(param0: java.io.OutputStream, param1: number): void;
					public writeShortLittleEndian(param0: java.io.OutputStream, param1: number): void;
					public readLongLittleEndian(param0: java.io.RandomAccessFile): number;
					public readLongLittleEndian(param0: java.io.RandomAccessFile, param1: number): number;
					public readIntLittleEndian(param0: java.io.InputStream): number;
					public writeShortLittleEndian(param0: native.Array<number>, param1: number, param2: number): void;
					public readLongLittleEndian(param0: native.Array<number>, param1: number): number;
					public readShortLittleEndian(param0: native.Array<number>, param1: number): number;
					public readShortLittleEndian(param0: java.io.InputStream): number;
					public readIntLittleEndian(param0: native.Array<number>, param1: number): number;
					public constructor();
					public readLongLittleEndian(param0: java.io.InputStream, param1: number): number;
					public readLongLittleEndian(param0: java.io.InputStream): number;
					public writeIntLittleEndian(param0: native.Array<number>, param1: number, param2: number): void;
					public readShortLittleEndian(param0: java.io.RandomAccessFile): number;
					public readIntLittleEndian(param0: java.io.RandomAccessFile): number;
					public readIntLittleEndian(param0: native.Array<number>): number;
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
					public static createZipInputStream(param0: net.lingala.zip4j.model.ZipModel, param1: net.lingala.zip4j.model.FileHeader, param2: native.Array<string>): net.lingala.zip4j.io.inputstream.ZipInputStream;
					public constructor();
					public static applyFileAttributes(param0: net.lingala.zip4j.model.FileHeader, param1: java.io.File): void;
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
					public constructor();
					public static createDirectoryIfNotExists(param0: java.io.File): boolean;
					public static javaToDosTime(param0: number): number;
					public static getCompressionMethod(param0: net.lingala.zip4j.model.LocalFileHeader): net.lingala.zip4j.model.enums.CompressionMethod;
					public static convertCharArrayToByteArray(param0: native.Array<string>): native.Array<number>;
					public static readFully(param0: java.io.InputStream, param1: native.Array<number>, param2: number, param3: number): number;
					public static isStringNotNullAndNotEmpty(param0: string): boolean;
					public static readFully(param0: java.io.InputStream, param1: native.Array<number>): number;
					public static dosToJavaTme(param0: number): number;
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
//net.lingala.zip4j.tasks.AsyncZipTask:1

