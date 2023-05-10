declare module io {
	export module ionic {
		export module liveupdates {
			export class AppState {
				public static class: java.lang.Class<io.ionic.liveupdates.AppState>;
				public static UNCHECKED: io.ionic.liveupdates.AppState;
				public static CHECKING: io.ionic.liveupdates.AppState;
				public static CHECKED: io.ionic.liveupdates.AppState;
				public static AVAILABLE: io.ionic.liveupdates.AppState;
				public static DOWNLOADING: io.ionic.liveupdates.AppState;
				public static DOWNLOADED: io.ionic.liveupdates.AppState;
				public static UNPACKING: io.ionic.liveupdates.AppState;
				public static UNPACKED: io.ionic.liveupdates.AppState;
				public static VERIFYING: io.ionic.liveupdates.AppState;
				public static VERIFIED: io.ionic.liveupdates.AppState;
				public static UPDATING: io.ionic.liveupdates.AppState;
				public static UPDATED: io.ionic.liveupdates.AppState;
				public static CANCELED: io.ionic.liveupdates.AppState;
				public static FAILED: io.ionic.liveupdates.AppState;
				public static valueOf(param0: string): io.ionic.liveupdates.AppState;
				public static values(): androidNative.Array<io.ionic.liveupdates.AppState>;
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export class AvailableUpdateState {
				public static class: java.lang.Class<io.ionic.liveupdates.AvailableUpdateState>;
				public static AVAILABLE: io.ionic.liveupdates.AvailableUpdateState;
				public static PENDING: io.ionic.liveupdates.AvailableUpdateState;
				public static READY: io.ionic.liveupdates.AvailableUpdateState;
				public static valueOf(param0: string): io.ionic.liveupdates.AvailableUpdateState;
				public static values(): androidNative.Array<io.ionic.liveupdates.AvailableUpdateState>;
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export class BuildConfig {
				public static class: java.lang.Class<io.ionic.liveupdates.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export class LiveUpdate {
				public static class: java.lang.Class<io.ionic.liveupdates.LiveUpdate>;
				public getUsesSecureLiveUpdates(): boolean;
				public constructor(param0: string, param1: string, param2: boolean);
				public getChannelName(): string;
				public getAppState(): io.ionic.liveupdates.AppState;
				public setAppState$live_updates_release(param0: io.ionic.liveupdates.AppState): void;
				public setAvailableUpdate$live_updates_release(param0: io.ionic.liveupdates.AvailableUpdateState): void;
				public getAppId(): string;
				public getAvailableUpdate(): io.ionic.liveupdates.AvailableUpdateState;
				public constructor(param0: string, param1: string);
				public constructor(param0: string);
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export class LiveUpdateManager {
				public static class: java.lang.Class<io.ionic.liveupdates.LiveUpdateManager>;
				public static INSTANCE: io.ionic.liveupdates.LiveUpdateManager;
				public static TAG: string;
				public getMaxVersions(): number;
				public static cleanVersions(param0: globalAndroid.content.Context): void;
				public static sync(param0: globalAndroid.content.Context, param1: androidNative.Array<string>, param2: boolean): void;
				public static downloadUpdate(param0: globalAndroid.content.Context, param1: string, param2: string, param3: io.ionic.liveupdates.network.DownloadCallback): void;
				public getLiveUpdatesDirectory$live_updates_release(param0: globalAndroid.content.Context): java.io.File;
				public static applyUpdate(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string): void;
				public setSecureLiveUpdatePEM(param0: string): void;
				public static reset(param0: globalAndroid.content.Context): void;
				public static verifyUpdate(param0: globalAndroid.content.Context, param1: string, param2: java.io.File): boolean;
				public static reset(param0: globalAndroid.content.Context, param1: boolean): void;
				public static getLastSync(param0: globalAndroid.content.Context): number;
				public getSecureLiveUpdatePEM(): string;
				public static cleanStaleVersions(param0: globalAndroid.content.Context, param1: string): void;
				public static extractUpdate(param0: string, param1: java.io.File): java.io.File;
				public getSnapshots$live_updates_release(param0: globalAndroid.content.Context): java.util.List<io.ionic.liveupdates.data.model.Snapshot>;
				public static sync(param0: globalAndroid.content.Context, param1: string, param2: io.ionic.liveupdates.network.SyncCallback): void;
				public static checkForUpdate(param0: globalAndroid.content.Context, param1: string): io.ionic.liveupdates.data.model.network.response.CheckResponse;
				public static sync(param0: globalAndroid.content.Context, param1: androidNative.Array<string>, param2: boolean, param3: io.ionic.liveupdates.network.SyncCallback): void;
				public static sync(param0: globalAndroid.content.Context, param1: androidNative.Array<string>): void;
				public setMaxVersions(param0: number): void;
				public static cancelSync(): void;
				public static addLiveUpdateInstance(param0: globalAndroid.content.Context, param1: io.ionic.liveupdates.LiveUpdate): void;
				public static downloadUpdate(param0: globalAndroid.content.Context, param1: string, param2: string): io.ionic.liveupdates.data.model.network.response.DownloadResponse;
				public static getLastSync(param0: globalAndroid.content.Context, param1: string): number;
				public static cancelSync(param0: string): void;
				public static sync(param0: globalAndroid.content.Context, param1: string): void;
				public static sync(param0: globalAndroid.content.Context): void;
				public static getLatestAppDirectory(param0: globalAndroid.content.Context, param1: string): java.io.File;
				public static cleanVersions(param0: globalAndroid.content.Context, param1: string): void;
				public static getApps(): java.util.Map<string, io.ionic.liveupdates.LiveUpdate>;
				public static sync(param0: globalAndroid.content.Context, param1: io.ionic.liveupdates.network.SyncCallback): void;
				public static initialize(param0: globalAndroid.content.Context): void;
				public static extractUpdate(param0: string, param1: java.io.File, param2: io.ionic.liveupdates.network.ExtractCallback): void;
				public static checkForUpdate(param0: globalAndroid.content.Context, param1: string, param2: io.ionic.liveupdates.network.CheckCallback): void;
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export class ZipUtility {
				public static class: java.lang.Class<io.ionic.liveupdates.ZipUtility>;
				public static INSTANCE: io.ionic.liveupdates.ZipUtility;
				public unzip(param0: java.io.File): java.io.File;
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export class DataManager {
					public static class: java.lang.Class<io.ionic.liveupdates.data.DataManager>;
					public static INSTANCE: io.ionic.liveupdates.data.DataManager;
					public addSnapshot(param0: globalAndroid.content.Context, param1: io.ionic.liveupdates.data.model.Snapshot): void;
					public getApps(param0: globalAndroid.content.Context): java.util.List<io.ionic.liveupdates.data.model.App>;
					public getCheckUpdateData(param0: globalAndroid.content.Context, param1: io.ionic.liveupdates.LiveUpdate): io.ionic.liveupdates.data.model.network.request.CheckRequest;
					public getSnapshots(param0: globalAndroid.content.Context, param1: string): java.util.List<io.ionic.liveupdates.data.model.Snapshot>;
					public getCurrentSnapshot(param0: globalAndroid.content.Context, param1: io.ionic.liveupdates.data.model.Channel): io.ionic.liveupdates.data.model.Snapshot;
					public deleteSnapshot(param0: globalAndroid.content.Context, param1: string): void;
					public getApp(param0: globalAndroid.content.Context, param1: string): io.ionic.liveupdates.data.model.App;
					public getLastSync(param0: globalAndroid.content.Context, param1: string): number;
					public initialize(param0: globalAndroid.content.Context): void;
					public getSnapshot(param0: globalAndroid.content.Context, param1: string): io.ionic.liveupdates.data.model.Snapshot;
					public reset(param0: globalAndroid.content.Context, param1: boolean): void;
					public updateLastSync(param0: globalAndroid.content.Context, param1: string): void;
					public saveApp(param0: globalAndroid.content.Context, param1: io.ionic.liveupdates.data.model.App): void;
					public getSnapshots(param0: globalAndroid.content.Context): java.util.List<io.ionic.liveupdates.data.model.Snapshot>;
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export class App {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.App>;
						public removeSnapshot(param0: string): void;
						public getChannel(param0: string): io.ionic.liveupdates.data.model.Channel;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public addChannel(param0: io.ionic.liveupdates.data.model.Channel): void;
						public getLastSync(): number;
						public toString(): string;
						public getCurrentSnapshot(param0: string): string;
						public copy(param0: string): io.ionic.liveupdates.data.model.App;
						public static write$Self(param0: io.ionic.liveupdates.data.model.App, param1: kotlinx.serialization.encoding.CompositeEncoder, param2: kotlinx.serialization.descriptors.SerialDescriptor): void;
						public getSnapshots(): java.util.List<string>;
						public getId(): string;
						public setLastSync(param0: number): void;
						public getChannels(): java.util.List<io.ionic.liveupdates.data.model.Channel>;
						public constructor(param0: string);
					}
					export module App {
						export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.ionic.liveupdates.data.model.App> {
							public static class: java.lang.Class<io.ionic.liveupdates.data.model.App.serializer>;
							public static INSTANCE: io.ionic.liveupdates.data.model.App.serializer;
							public serialize(param0: kotlinx.serialization.encoding.Encoder, param1: io.ionic.liveupdates.data.model.App): void;
							public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
							public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							public deserialize(param0: kotlinx.serialization.encoding.Decoder): io.ionic.liveupdates.data.model.App;
						}
					}
					export class Companion {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.App.Companion>;
						public serializer(): kotlinx.serialization.KSerializer<io.ionic.liveupdates.data.model.App>;
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export class Channel {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.Channel>;
						public getCurrentSnapshot(): string;
						public setCurrentSnapshot(param0: string): void;
						public static write$Self(param0: io.ionic.liveupdates.data.model.Channel, param1: kotlinx.serialization.encoding.CompositeEncoder, param2: kotlinx.serialization.descriptors.SerialDescriptor): void;
						public component1(): string;
						public copy(param0: string): io.ionic.liveupdates.data.model.Channel;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getId(): string;
						public toString(): string;
						public constructor(param0: string);
					}
					export module Channel {
						export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.ionic.liveupdates.data.model.Channel> {
							public static class: java.lang.Class<io.ionic.liveupdates.data.model.Channel.serializer>;
							public static INSTANCE: io.ionic.liveupdates.data.model.Channel.serializer;
							public deserialize(param0: kotlinx.serialization.encoding.Decoder): io.ionic.liveupdates.data.model.Channel;
							public serialize(param0: kotlinx.serialization.encoding.Encoder, param1: io.ionic.liveupdates.data.model.Channel): void;
							public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
							public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
						}
					}
					export class Companion {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.Channel.Companion>;
						public serializer(): kotlinx.serialization.KSerializer<io.ionic.liveupdates.data.model.Channel>;
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export class Device {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.Device>;
						public getSnapshot(): string;
						public getBuild(): string;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public getPlatform(): string;
						public setSnapshot(param0: string): void;
						public getBinary_version(): string;
						public component2(): string;
						public setBuild(param0: string): void;
						public constructor(param0: string, param1: string);
						public static write$Self(param0: io.ionic.liveupdates.data.model.Device, param1: kotlinx.serialization.encoding.CompositeEncoder, param2: kotlinx.serialization.descriptors.SerialDescriptor): void;
						public getDevice_id(): string;
						public getPlatform_version(): string;
						public copy(param0: string, param1: string): io.ionic.liveupdates.data.model.Device;
					}

					export module Device {
						export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.ionic.liveupdates.data.model.Device> {
							public static class: java.lang.Class<io.ionic.liveupdates.data.model.Device.serializer>;
							public static INSTANCE: io.ionic.liveupdates.data.model.Device.serializer;
							public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							public serialize(param0: kotlinx.serialization.encoding.Encoder, param1: io.ionic.liveupdates.data.model.Device): void;
							public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
							public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							public deserialize(param0: kotlinx.serialization.encoding.Decoder): io.ionic.liveupdates.data.model.Device;
						}
					}
					export class Companion {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.Device.Companion>;
						public serializer(): kotlinx.serialization.KSerializer<io.ionic.liveupdates.data.model.Device>;
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export class FailResult {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.FailResult>;
						public getLiveUpdate(): io.ionic.liveupdates.LiveUpdate;
						public getFailMsg(): string;
						public getFailStep(): io.ionic.liveupdates.data.model.FailStep;
						public constructor(param0: io.ionic.liveupdates.LiveUpdate, param1: io.ionic.liveupdates.data.model.FailStep, param2: string);
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export class FailStep {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.FailStep>;
						public static CHECK: io.ionic.liveupdates.data.model.FailStep;
						public static DOWNLOAD: io.ionic.liveupdates.data.model.FailStep;
						public static UNPACK: io.ionic.liveupdates.data.model.FailStep;
						public static VERIFY: io.ionic.liveupdates.data.model.FailStep;
						public static UPDATE: io.ionic.liveupdates.data.model.FailStep;
						public static CANCEL: io.ionic.liveupdates.data.model.FailStep;
						public static values(): androidNative.Array<io.ionic.liveupdates.data.model.FailStep>;
						public static valueOf(param0: string): io.ionic.liveupdates.data.model.FailStep;
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export class PayloadFile {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.PayloadFile>;
						public component2(): number;
						public getIntegrity(): string;
						public component3(): string;
						public copy(param0: string, param1: number, param2: string): io.ionic.liveupdates.data.model.PayloadFile;
						public getSize(): number;
						public static write$Self(param0: io.ionic.liveupdates.data.model.PayloadFile, param1: kotlinx.serialization.encoding.CompositeEncoder, param2: kotlinx.serialization.descriptors.SerialDescriptor): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getHref(): string;
						public constructor(param0: string, param1: number, param2: string);
						public toString(): string;
					}
					export module PayloadFile {
						export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.ionic.liveupdates.data.model.PayloadFile> {
							public static class: java.lang.Class<io.ionic.liveupdates.data.model.PayloadFile.serializer>;
							public static INSTANCE: io.ionic.liveupdates.data.model.PayloadFile.serializer;
							public serialize(param0: kotlinx.serialization.encoding.Encoder, param1: io.ionic.liveupdates.data.model.PayloadFile): void;
							public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
							public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							public deserialize(param0: kotlinx.serialization.encoding.Decoder): io.ionic.liveupdates.data.model.PayloadFile;
						}
					}
					export class Companion {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.PayloadFile.Companion>;
						public serializer(): kotlinx.serialization.KSerializer<io.ionic.liveupdates.data.model.PayloadFile>;
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export class SecureManifest {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.SecureManifest>;
						public component1(): java.util.List<io.ionic.liveupdates.data.model.Signature>;
						public getSignatures(): java.util.List<io.ionic.liveupdates.data.model.Signature>;
						public static write$Self(param0: io.ionic.liveupdates.data.model.SecureManifest, param1: kotlinx.serialization.encoding.CompositeEncoder, param2: kotlinx.serialization.descriptors.SerialDescriptor): void;
						public getPayload(): string;
						public component2(): string;
						public constructor(param0: java.util.List<io.ionic.liveupdates.data.model.Signature>, param1: string);
						public copy(param0: java.util.List<io.ionic.liveupdates.data.model.Signature>, param1: string): io.ionic.liveupdates.data.model.SecureManifest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getDecodedPayload(): java.util.List<io.ionic.liveupdates.data.model.PayloadFile>;
						public toString(): string;
					}

					export module SecureManifest {
						export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.ionic.liveupdates.data.model.SecureManifest> {
							public static class: java.lang.Class<io.ionic.liveupdates.data.model.SecureManifest.serializer>;
							public static INSTANCE: io.ionic.liveupdates.data.model.SecureManifest.serializer;
							public serialize(param0: kotlinx.serialization.encoding.Encoder, param1: io.ionic.liveupdates.data.model.SecureManifest): void;
							public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
							public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							public deserialize(param0: kotlinx.serialization.encoding.Decoder): io.ionic.liveupdates.data.model.SecureManifest;
						}
					}
					export class Companion {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.SecureManifest.Companion>;
						public serializer(): kotlinx.serialization.KSerializer<io.ionic.liveupdates.data.model.SecureManifest>;
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export class Signature {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.Signature>;
						public getProtected(): string;
						public static write$Self(param0: io.ionic.liveupdates.data.model.Signature, param1: kotlinx.serialization.encoding.CompositeEncoder, param2: kotlinx.serialization.descriptors.SerialDescriptor): void;
						public component2(): string;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getSignature(): string;
						public constructor(param0: string, param1: string);
						public copy(param0: string, param1: string): io.ionic.liveupdates.data.model.Signature;
						public toString(): string;
					}

					export module Signature {
						export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.ionic.liveupdates.data.model.Signature> {
							public static class: java.lang.Class<io.ionic.liveupdates.data.model.Signature.serializer>;
							public static INSTANCE: io.ionic.liveupdates.data.model.Signature.serializer;
							public serialize(param0: kotlinx.serialization.encoding.Encoder, param1: io.ionic.liveupdates.data.model.Signature): void;
							public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
							public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							public deserialize(param0: kotlinx.serialization.encoding.Decoder): io.ionic.liveupdates.data.model.Signature;
						}
					}
					export class Companion {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.Signature.Companion>;
						public serializer(): kotlinx.serialization.KSerializer<io.ionic.liveupdates.data.model.Signature>;
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export class Snapshot {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.Snapshot>;
						public component3(): string;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static write$Self(param0: io.ionic.liveupdates.data.model.Snapshot, param1: kotlinx.serialization.encoding.CompositeEncoder, param2: kotlinx.serialization.descriptors.SerialDescriptor): void;
						public getBinaryVersion(): string;
						public component4(): number;
						public toString(): string;
						public setLastUsed(param0: number): void;
						public component2(): string;
						public getLastUsed(): number;
						public getBuildId(): string;
						public getId(): string;
						public constructor(param0: string, param1: string, param2: string, param3: number);
						public copy(param0: string, param1: string, param2: string, param3: number): io.ionic.liveupdates.data.model.Snapshot;
						public setBinaryVersion(param0: string): void;
					}

					export module Snapshot {
						export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.ionic.liveupdates.data.model.Snapshot> {
							public static class: java.lang.Class<io.ionic.liveupdates.data.model.Snapshot.serializer>;
							public static INSTANCE: io.ionic.liveupdates.data.model.Snapshot.serializer;
							public deserialize(param0: kotlinx.serialization.encoding.Decoder): io.ionic.liveupdates.data.model.Snapshot;
							public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
							public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
							public serialize(param0: kotlinx.serialization.encoding.Encoder, param1: io.ionic.liveupdates.data.model.Snapshot): void;
						}
					}
					export class Companion {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.Snapshot.Companion>;
						public serializer(): kotlinx.serialization.KSerializer<io.ionic.liveupdates.data.model.Snapshot>;
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export class Source {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.Source>;
						public static CACHE: io.ionic.liveupdates.data.model.Source;
						public static DOWNLOAD: io.ionic.liveupdates.data.model.Source;
						public static values(): androidNative.Array<io.ionic.liveupdates.data.model.Source>;
						public static valueOf(param0: string): io.ionic.liveupdates.data.model.Source;
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export class SyncResult {
						public static class: java.lang.Class<io.ionic.liveupdates.data.model.SyncResult>;
						public getSource(): io.ionic.liveupdates.data.model.Source;
						public getSnapshot(): io.ionic.liveupdates.data.model.Snapshot;
						public getLiveUpdate(): io.ionic.liveupdates.LiveUpdate;
						public constructor(param0: io.ionic.liveupdates.LiveUpdate, param1: io.ionic.liveupdates.data.model.Snapshot, param2: io.ionic.liveupdates.data.model.Source, param3: boolean);
						public getLatestAppDirectoryChanged(): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export module network {
						export module request {
							export class CheckRequest {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.request.CheckRequest>;
								public setManifest(param0: boolean): void;
								public toString(): string;
								public setPlugin_version(param0: string): void;
								public getChannel_name(): string;
								public equals(param0: any): boolean;
								public component2(): string;
								public component4(): boolean;
								public is_portals(): boolean;
								public component1(): io.ionic.liveupdates.data.model.Device;
								public getApp_id(): string;
								public getPlugin_version(): string;
								public copy(param0: io.ionic.liveupdates.data.model.Device, param1: string, param2: string, param3: boolean): io.ionic.liveupdates.data.model.network.request.CheckRequest;
								public constructor(param0: io.ionic.liveupdates.data.model.Device, param1: string, param2: string, param3: boolean);
								public getDevice(): io.ionic.liveupdates.data.model.Device;
								public static write$Self(param0: io.ionic.liveupdates.data.model.network.request.CheckRequest, param1: kotlinx.serialization.encoding.CompositeEncoder, param2: kotlinx.serialization.descriptors.SerialDescriptor): void;
								public component3(): string;
								public hashCode(): number;
								public getManifest(): boolean;
							}

							export module CheckRequest {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.ionic.liveupdates.data.model.network.request.CheckRequest> {
									public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.request.CheckRequest.serializer>;
									public static INSTANCE: io.ionic.liveupdates.data.model.network.request.CheckRequest.serializer;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public deserialize(param0: kotlinx.serialization.encoding.Decoder): io.ionic.liveupdates.data.model.network.request.CheckRequest;
									public serialize(param0: kotlinx.serialization.encoding.Encoder, param1: io.ionic.liveupdates.data.model.network.request.CheckRequest): void;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.request.CheckRequest.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.ionic.liveupdates.data.model.network.request.CheckRequest>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export module network {
						export module response {
							export class CheckResponse {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.CheckResponse>;
								public toString(): string;
								public static write$Self(param0: io.ionic.liveupdates.data.model.network.response.CheckResponse, param1: kotlinx.serialization.encoding.CompositeEncoder, param2: kotlinx.serialization.descriptors.SerialDescriptor): void;
								public getSuccess(): io.ionic.liveupdates.data.model.network.response.SuccessResponse;
								public equals(param0: any): boolean;
								public component2(): io.ionic.liveupdates.data.model.network.response.ErrorResponse;
								public copy(param0: io.ionic.liveupdates.data.model.network.response.SuccessResponse, param1: io.ionic.liveupdates.data.model.network.response.ErrorResponse): io.ionic.liveupdates.data.model.network.response.CheckResponse;
								public component1(): io.ionic.liveupdates.data.model.network.response.SuccessResponse;
								public getError(): io.ionic.liveupdates.data.model.network.response.ErrorResponse;
								public constructor(param0: io.ionic.liveupdates.data.model.network.response.SuccessResponse, param1: io.ionic.liveupdates.data.model.network.response.ErrorResponse);
								public hashCode(): number;
							}

							export module CheckResponse {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.ionic.liveupdates.data.model.network.response.CheckResponse> {
									public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.CheckResponse.serializer>;
									public static INSTANCE: io.ionic.liveupdates.data.model.network.response.CheckResponse.serializer;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public deserialize(param0: kotlinx.serialization.encoding.Decoder): io.ionic.liveupdates.data.model.network.response.CheckResponse;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public serialize(param0: kotlinx.serialization.encoding.Encoder, param1: io.ionic.liveupdates.data.model.network.response.CheckResponse): void;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.CheckResponse.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.ionic.liveupdates.data.model.network.response.CheckResponse>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export module network {
						export module response {
							export class Data {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.Data>;
								public static write$Self(param0: io.ionic.liveupdates.data.model.network.response.Data, param1: kotlinx.serialization.encoding.CompositeEncoder, param2: kotlinx.serialization.descriptors.SerialDescriptor): void;
								public toString(): string;
								public getSnapshot(): string;
								public getAvailable(): boolean;
								public component2(): boolean;
								public component6(): boolean;
								public equals(param0: any): boolean;
								public getUrl(): string;
								public getCompatible(): boolean;
								public component4(): boolean;
								public component1(): string;
								public getBuild(): string;
								public getPartial(): boolean;
								public constructor(param0: string, param1: boolean, param2: string, param3: boolean, param4: string, param5: boolean, param6: boolean);
								public getIncompatibleUpdateAvailable(): boolean;
								public copy(param0: string, param1: boolean, param2: string, param3: boolean, param4: string, param5: boolean, param6: boolean): io.ionic.liveupdates.data.model.network.response.Data;
								public component5(): string;
								public component7(): boolean;
								public component3(): string;
								public hashCode(): number;
							}

							export module Data {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.ionic.liveupdates.data.model.network.response.Data> {
									public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.Data.serializer>;
									public static INSTANCE: io.ionic.liveupdates.data.model.network.response.Data.serializer;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public deserialize(param0: kotlinx.serialization.encoding.Decoder): io.ionic.liveupdates.data.model.network.response.Data;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public serialize(param0: kotlinx.serialization.encoding.Encoder, param1: io.ionic.liveupdates.data.model.network.response.Data): void;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.Data.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.ionic.liveupdates.data.model.network.response.Data>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export module network {
						export module response {
							export class Details {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.Details>;
								public component1(): string;
								public getError_type(): string;
								public toString(): string;
								public getErrors(): java.util.List<string>;
								public equals(param0: any): boolean;
								public constructor(param0: string, param1: string, param2: java.util.List<string>);
								public component3(): java.util.List<string>;
								public getParameter(): string;
								public copy(param0: string, param1: string, param2: java.util.List<string>): io.ionic.liveupdates.data.model.network.response.Details;
								public component2(): string;
								public hashCode(): number;
								public static write$Self(param0: io.ionic.liveupdates.data.model.network.response.Details, param1: kotlinx.serialization.encoding.CompositeEncoder, param2: kotlinx.serialization.descriptors.SerialDescriptor): void;
							}

							export module Details {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.ionic.liveupdates.data.model.network.response.Details> {
									public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.Details.serializer>;
									public static INSTANCE: io.ionic.liveupdates.data.model.network.response.Details.serializer;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public serialize(param0: kotlinx.serialization.encoding.Encoder, param1: io.ionic.liveupdates.data.model.network.response.Details): void;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public deserialize(param0: kotlinx.serialization.encoding.Decoder): io.ionic.liveupdates.data.model.network.response.Details;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.Details.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.ionic.liveupdates.data.model.network.response.Details>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export module network {
						export module response {
							export class DownloadResponse {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.DownloadResponse>;
								public constructor(param0: io.ionic.liveupdates.data.model.network.response.ErrorResponse, param1: java.io.File);
								public toString(): string;
								public copy(param0: io.ionic.liveupdates.data.model.network.response.ErrorResponse, param1: java.io.File): io.ionic.liveupdates.data.model.network.response.DownloadResponse;
								public setFile(param0: java.io.File): void;
								public setError(param0: io.ionic.liveupdates.data.model.network.response.ErrorResponse): void;
								public equals(param0: any): boolean;
								public getFile(): java.io.File;
								public component1(): io.ionic.liveupdates.data.model.network.response.ErrorResponse;
								public getError(): io.ionic.liveupdates.data.model.network.response.ErrorResponse;
								public component2(): java.io.File;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export module network {
						export module response {
							export class Error {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.Error>;
								public toString(): string;
								public getEvent_id(): string;
								public static write$Self(param0: io.ionic.liveupdates.data.model.network.response.Error, param1: kotlinx.serialization.encoding.CompositeEncoder, param2: kotlinx.serialization.descriptors.SerialDescriptor): void;
								public equals(param0: any): boolean;
								public getMessage(): string;
								public getLink(): string;
								public copy(param0: string, param1: string, param2: string, param3: java.util.List<io.ionic.liveupdates.data.model.network.response.Details>, param4: string): io.ionic.liveupdates.data.model.network.response.Error;
								public component2(): string;
								public constructor(param0: string, param1: string, param2: string, param3: java.util.List<io.ionic.liveupdates.data.model.network.response.Details>, param4: string);
								public component1(): string;
								public component4(): java.util.List<io.ionic.liveupdates.data.model.network.response.Details>;
								public getDetails(): java.util.List<io.ionic.liveupdates.data.model.network.response.Details>;
								public component5(): string;
								public component3(): string;
								public hashCode(): number;
								public getType(): string;
							}

							export module Error {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.ionic.liveupdates.data.model.network.response.Error> {
									public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.Error.serializer>;
									public static INSTANCE: io.ionic.liveupdates.data.model.network.response.Error.serializer;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public serialize(param0: kotlinx.serialization.encoding.Encoder, param1: io.ionic.liveupdates.data.model.network.response.Error): void;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public deserialize(param0: kotlinx.serialization.encoding.Decoder): io.ionic.liveupdates.data.model.network.response.Error;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.Error.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.ionic.liveupdates.data.model.network.response.Error>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export module network {
						export module response {
							export class ErrorResponse {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.ErrorResponse>;
								public getError(): io.ionic.liveupdates.data.model.network.response.Error;
								public toString(): string;
								public component1(): io.ionic.liveupdates.data.model.network.response.Error;
								public copy(param0: io.ionic.liveupdates.data.model.network.response.Error, param1: io.ionic.liveupdates.data.model.network.response.Meta): io.ionic.liveupdates.data.model.network.response.ErrorResponse;
								public getMeta(): io.ionic.liveupdates.data.model.network.response.Meta;
								public equals(param0: any): boolean;
								public constructor(param0: io.ionic.liveupdates.data.model.network.response.Error, param1: io.ionic.liveupdates.data.model.network.response.Meta);
								public component2(): io.ionic.liveupdates.data.model.network.response.Meta;
								public hashCode(): number;
								public static write$Self(param0: io.ionic.liveupdates.data.model.network.response.ErrorResponse, param1: kotlinx.serialization.encoding.CompositeEncoder, param2: kotlinx.serialization.descriptors.SerialDescriptor): void;
							}

							export module ErrorResponse {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.ionic.liveupdates.data.model.network.response.ErrorResponse> {
									public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.ErrorResponse.serializer>;
									public static INSTANCE: io.ionic.liveupdates.data.model.network.response.ErrorResponse.serializer;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public serialize(param0: kotlinx.serialization.encoding.Encoder, param1: io.ionic.liveupdates.data.model.network.response.ErrorResponse): void;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public deserialize(param0: kotlinx.serialization.encoding.Decoder): io.ionic.liveupdates.data.model.network.response.ErrorResponse;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.ErrorResponse.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.ionic.liveupdates.data.model.network.response.ErrorResponse>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export module network {
						export module response {
							export class Meta {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.Meta>;
								public component1(): string;
								public toString(): string;
								public static write$Self(param0: io.ionic.liveupdates.data.model.network.response.Meta, param1: kotlinx.serialization.encoding.CompositeEncoder, param2: kotlinx.serialization.descriptors.SerialDescriptor): void;
								public getStatus(): string;
								public equals(param0: any): boolean;
								public copy(param0: string, param1: string, param2: string): io.ionic.liveupdates.data.model.network.response.Meta;
								public constructor(param0: string, param1: string, param2: string);
								public getVersion(): string;
								public component2(): string;
								public component3(): string;
								public hashCode(): number;
								public getRequest_id(): string;
							}

							export module Meta {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.ionic.liveupdates.data.model.network.response.Meta> {
									public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.Meta.serializer>;
									public static INSTANCE: io.ionic.liveupdates.data.model.network.response.Meta.serializer;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public deserialize(param0: kotlinx.serialization.encoding.Decoder): io.ionic.liveupdates.data.model.network.response.Meta;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public serialize(param0: kotlinx.serialization.encoding.Encoder, param1: io.ionic.liveupdates.data.model.network.response.Meta): void;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.Meta.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.ionic.liveupdates.data.model.network.response.Meta>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module data {
				export module model {
					export module network {
						export module response {
							export class SuccessResponse {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.SuccessResponse>;
								public toString(): string;
								public static write$Self(param0: io.ionic.liveupdates.data.model.network.response.SuccessResponse, param1: kotlinx.serialization.encoding.CompositeEncoder, param2: kotlinx.serialization.descriptors.SerialDescriptor): void;
								public getMeta(): io.ionic.liveupdates.data.model.network.response.Meta;
								public equals(param0: any): boolean;
								public component2(): io.ionic.liveupdates.data.model.network.response.Meta;
								public getData(): io.ionic.liveupdates.data.model.network.response.Data;
								public constructor(param0: io.ionic.liveupdates.data.model.network.response.Data, param1: io.ionic.liveupdates.data.model.network.response.Meta);
								public copy(param0: io.ionic.liveupdates.data.model.network.response.Data, param1: io.ionic.liveupdates.data.model.network.response.Meta): io.ionic.liveupdates.data.model.network.response.SuccessResponse;
								public hashCode(): number;
								public component1(): io.ionic.liveupdates.data.model.network.response.Data;
							}

							export module SuccessResponse {
								export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<io.ionic.liveupdates.data.model.network.response.SuccessResponse> {
									public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.SuccessResponse.serializer>;
									public static INSTANCE: io.ionic.liveupdates.data.model.network.response.SuccessResponse.serializer;
									public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
									public deserialize(param0: kotlinx.serialization.encoding.Decoder): io.ionic.liveupdates.data.model.network.response.SuccessResponse;
									public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
									public serialize(param0: kotlinx.serialization.encoding.Encoder, param1: io.ionic.liveupdates.data.model.network.response.SuccessResponse): void;
								}
							}
							export class Companion {
								public static class: java.lang.Class<io.ionic.liveupdates.data.model.network.response.SuccessResponse.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<io.ionic.liveupdates.data.model.network.response.SuccessResponse>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module network {
				export class CheckCallback {
					public static class: java.lang.Class<io.ionic.liveupdates.network.CheckCallback>;
					/**
					 * Constructs a new instance of the io.ionic.liveupdates.network.CheckCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onComplete(param0: io.ionic.liveupdates.data.model.network.response.CheckResponse): void });
					public constructor();
					public onComplete(param0: io.ionic.liveupdates.data.model.network.response.CheckResponse): void;
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module network {
				export class Client {
					public static class: java.lang.Class<io.ionic.liveupdates.network.Client>;
					public static INSTANCE: io.ionic.liveupdates.network.Client;
					public checkForUpdate(param0: io.ionic.liveupdates.data.model.network.request.CheckRequest): io.ionic.liveupdates.data.model.network.response.CheckResponse;
					public downloadUpdate(param0: globalAndroid.content.Context, param1: string, param2: string): io.ionic.liveupdates.data.model.network.response.DownloadResponse;
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module network {
				export class DownloadCallback {
					public static class: java.lang.Class<io.ionic.liveupdates.network.DownloadCallback>;
					/**
					 * Constructs a new instance of the io.ionic.liveupdates.network.DownloadCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onComplete(param0: io.ionic.liveupdates.data.model.network.response.DownloadResponse): void });
					public constructor();
					public onComplete(param0: io.ionic.liveupdates.data.model.network.response.DownloadResponse): void;
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module network {
				export class ExtractCallback {
					public static class: java.lang.Class<io.ionic.liveupdates.network.ExtractCallback>;
					/**
					 * Constructs a new instance of the io.ionic.liveupdates.network.ExtractCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onComplete(param0: java.io.File): void });
					public constructor();
					public onComplete(param0: java.io.File): void;
				}
			}
		}
	}
}

declare module io {
	export module ionic {
		export module liveupdates {
			export module network {
				export class SyncCallback {
					public static class: java.lang.Class<io.ionic.liveupdates.network.SyncCallback>;
					/**
					 * Constructs a new instance of the io.ionic.liveupdates.network.SyncCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onAppComplete(param0: io.ionic.liveupdates.data.model.SyncResult): void; onAppComplete(param0: io.ionic.liveupdates.data.model.FailResult): void; onSyncComplete(): void });
					public constructor();
					public onAppComplete(param0: io.ionic.liveupdates.data.model.SyncResult): void;
					public onSyncComplete(): void;
					public onAppComplete(param0: io.ionic.liveupdates.data.model.FailResult): void;
				}
			}
		}
	}
}

//Generics information:
