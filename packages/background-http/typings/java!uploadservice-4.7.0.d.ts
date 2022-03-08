declare module net {
	export module gotev {
		export module uploadservice {
			export class BuildConfig {
				public static class: java.lang.Class<net.gotev.uploadservice.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export class CreateUploadRequest extends net.gotev.uploadservice.UploadRequest<net.gotev.uploadservice.CreateUploadRequest> {
				public static class: java.lang.Class<net.gotev.uploadservice.CreateUploadRequest>;
				public static Companion: net.gotev.uploadservice.CreateUploadRequest.Companion;
				public getAdditionalParameters(): net.gotev.uploadservice.persistence.PersistableData;
				public static fromJson(param0: globalAndroid.content.Context, param1: string): net.gotev.uploadservice.CreateUploadRequest;
				public toPersistableData(): net.gotev.uploadservice.persistence.PersistableData;
				public static fromPersistableData(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.persistence.PersistableData): net.gotev.uploadservice.CreateUploadRequest;
				public getTaskClass(): java.lang.Class<any>;
				public static fromParcel(param0: globalAndroid.content.Context, param1: globalAndroid.os.Parcel): net.gotev.uploadservice.CreateUploadRequest;
			}
			export module CreateUploadRequest {
				export class Companion {
					public static class: java.lang.Class<net.gotev.uploadservice.CreateUploadRequest.Companion>;
					public fromPersistableData(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.persistence.PersistableData): net.gotev.uploadservice.CreateUploadRequest;
					public fromParcel(param0: globalAndroid.content.Context, param1: globalAndroid.os.Parcel): net.gotev.uploadservice.CreateUploadRequest;
					public fromJson(param0: globalAndroid.content.Context, param1: string): net.gotev.uploadservice.CreateUploadRequest;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export abstract class HttpUploadRequest<B>  extends net.gotev.uploadservice.UploadRequest<any> {
				public static class: java.lang.Class<net.gotev.uploadservice.HttpUploadRequest<any>>;
				public addHeader(param0: string, param1: string): any;
				public getAdditionalParameters(): net.gotev.uploadservice.persistence.PersistableData;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public setBasicAuth(param0: string, param1: string): any;
				public toPersistableData(): net.gotev.uploadservice.persistence.PersistableData;
				public addArrayParameter(param0: string, param1: java.util.List<string>): any;
				public getHttpParams(): net.gotev.uploadservice.data.HttpUploadTaskParameters;
				public addParameter(param0: string, param1: string): any;
				public setUsesFixedLengthStreamingMode(param0: boolean): any;
				public addArrayParameter(param0: string, param1: androidNative.Array<string>): any;
				public setBearerAuth(param0: string): any;
				public setMethod(param0: string): any;
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export abstract class HttpUploadTask extends net.gotev.uploadservice.UploadTask implements net.gotev.uploadservice.network.HttpRequest.RequestBodyDelegate, net.gotev.uploadservice.network.BodyWriter.OnStreamWriteListener {
				public static class: java.lang.Class<net.gotev.uploadservice.HttpUploadTask>;
				public onWriteRequestBody(param0: net.gotev.uploadservice.network.BodyWriter): void;
				public onBytesWritten(param0: number): void;
				public upload(param0: net.gotev.uploadservice.network.HttpStack): void;
				public getHttpParams(): net.gotev.uploadservice.data.HttpUploadTaskParameters;
				public getBodyLength(): number;
				public shouldContinueWriting(): boolean;
				public constructor();
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export abstract class UploadRequest<B>  extends net.gotev.uploadservice.persistence.Persistable {
				public static class: java.lang.Class<net.gotev.uploadservice.UploadRequest<any>>;
				public setAutoDeleteFilesAfterSuccessfulUpload(param0: boolean): any;
				public getNotificationConfig(): kotlin.jvm.functions.Function2<globalAndroid.content.Context,string,net.gotev.uploadservice.data.UploadNotificationConfig>;
				public setNotificationConfig(param0: kotlin.jvm.functions.Function2<any,any,net.gotev.uploadservice.data.UploadNotificationConfig>): any;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public getContext(): globalAndroid.content.Context;
				public subscribe(param0: net.gotev.uploadservice.observer.request.RequestObserver): void;
				public getAutoDeleteSuccessfullyUploadedFiles(): boolean;
				public setServerUrl(param0: string): void;
				public getTaskClass(): java.lang.Class<any>;
				public subscribe(param0: globalAndroid.content.Context, param1: androidx.lifecycle.LifecycleOwner, param2: net.gotev.uploadservice.observer.request.RequestObserverDelegate): net.gotev.uploadservice.observer.request.RequestObserver;
				public getMaxRetries(): number;
				public setNotificationConfig(param0: kotlin.jvm.functions.Function2<any,any,net.gotev.uploadservice.data.UploadNotificationConfig>): void;
				public getAdditionalParameters(): net.gotev.uploadservice.persistence.PersistableData;
				public getServerUrl(): string;
				public setMaxRetries(param0: number): any;
				public startUpload(): string;
				public self(): any;
				public toPersistableData(): net.gotev.uploadservice.persistence.PersistableData;
				public setAutoDeleteSuccessfullyUploadedFiles(param0: boolean): void;
				public setMaxRetries(param0: number): void;
				public setUploadID(param0: string): any;
				public getFiles(): java.util.ArrayList<net.gotev.uploadservice.data.UploadFile>;
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export class UploadService {
				public static class: java.lang.Class<net.gotev.uploadservice.UploadService>;
				public static Companion: net.gotev.uploadservice.UploadService.Companion;
				public taskCompleted(param0: string): void;
				public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
				public static stop(param0: globalAndroid.content.Context): boolean;
				public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
				public static stopAllUploads(): void;
				public onCreate(): void;
				public static getTaskList(): java.util.List<string>;
				public holdForegroundNotification(param0: string, param1: globalAndroid.app.Notification): boolean;
				public onDestroy(): void;
				public static stopUpload(param0: string): void;
				public static stop(param0: globalAndroid.content.Context, param1: boolean): boolean;
				public constructor();
			}
			export module UploadService {
				export class Companion {
					public static class: java.lang.Class<net.gotev.uploadservice.UploadService.Companion>;
					public stopAllUploads(): void;
					public stop(param0: globalAndroid.content.Context): boolean;
					public getTaskList(): java.util.List<string>;
					public getTAG$uploadservice_release(): string;
					public stop(param0: globalAndroid.content.Context, param1: boolean): boolean;
					public stopUpload(param0: string): void;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export class UploadServiceConfig {
				public static class: java.lang.Class<net.gotev.uploadservice.UploadServiceConfig>;
				public static defaultUserAgent: string;
				public static INSTANCE: net.gotev.uploadservice.UploadServiceConfig;
				public static getRetryPolicy(): net.gotev.uploadservice.data.RetryPolicyConfig;
				public static setThreadPool(param0: java.util.concurrent.AbstractExecutorService): void;
				public static getThreadPool(): java.util.concurrent.AbstractExecutorService;
				public static setNotificationConfigFactory(param0: kotlin.jvm.functions.Function2<any,any,net.gotev.uploadservice.data.UploadNotificationConfig>): void;
				public static initialize(param0: globalAndroid.app.Application, param1: string, param2: boolean): void;
				public static getPlaceholdersProcessor(): net.gotev.uploadservice.placeholders.PlaceholdersProcessor;
				public static getBroadcastStatusAction(): string;
				public static setUploadProgressNotificationIntervalMillis(param0: number): void;
				public static getBroadcastStatusIntentFilter(): globalAndroid.content.IntentFilter;
				public static getNotificationConfigFactory(): kotlin.jvm.functions.Function2<globalAndroid.content.Context,string,net.gotev.uploadservice.data.UploadNotificationConfig>;
				public static setPlaceholdersProcessor(param0: net.gotev.uploadservice.placeholders.PlaceholdersProcessor): void;
				public static setForegroundService(param0: boolean): void;
				public static getSchemeHandler(param0: string): net.gotev.uploadservice.schemehandlers.SchemeHandler;
				public static getNotificationActionsObserverFactory(): kotlin.jvm.functions.Function1<net.gotev.uploadservice.UploadService,net.gotev.uploadservice.observer.request.NotificationActionsObserver>;
				public static setBufferSizeBytes(param0: number): void;
				public static setIdleTimeoutSeconds(param0: number): void;
				public static getBufferSizeBytes(): number;
				public static isForegroundService(): boolean;
				public static getIdleTimeoutSeconds(): number;
				public static addSchemeHandler(param0: string, param1: java.lang.Class<any>): void;
				public toString(): string;
				public static getBroadcastNotificationActionIntentFilter(): globalAndroid.content.IntentFilter;
				public static setRetryPolicy(param0: net.gotev.uploadservice.data.RetryPolicyConfig): void;
				public static getBroadcastNotificationAction(): string;
				public static setNotificationActionsObserverFactory(param0: kotlin.jvm.functions.Function1<any,any>): void;
				public static getNotificationHandlerFactory(): kotlin.jvm.functions.Function1<net.gotev.uploadservice.UploadService,net.gotev.uploadservice.observer.task.UploadTaskObserver>;
				public static getHttpStack(): net.gotev.uploadservice.network.HttpStack;
				public static getUploadProgressNotificationIntervalMillis(): number;
				public static setNotificationHandlerFactory(param0: kotlin.jvm.functions.Function1<any,any>): void;
				public static getNamespace(): string;
				public static getUploadAction(): string;
				public static setHttpStack(param0: net.gotev.uploadservice.network.HttpStack): void;
				public static getDefaultNotificationChannel(): string;
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export abstract class UploadTask {
				public static class: java.lang.Class<net.gotev.uploadservice.UploadTask>;
				public context: globalAndroid.content.Context;
				public params: net.gotev.uploadservice.data.UploadTaskParameters;
				public notificationConfig: net.gotev.uploadservice.data.UploadNotificationConfig;
				public static Companion: net.gotev.uploadservice.UploadTask.Companion;
				public setShouldContinue(param0: boolean): void;
				public getShouldContinue(): boolean;
				public setAllFilesHaveBeenSuccessfullyUploaded(param0: boolean): void;
				public setNotificationId(param0: number): void;
				public getContext(): globalAndroid.content.Context;
				public getNotificationId(): number;
				public getTotalBytes(): number;
				public setContext(param0: globalAndroid.content.Context): void;
				public setTotalBytes(param0: number): void;
				public onProgress(param0: number): void;
				public getSuccessfullyUploadedFiles(): java.util.List<net.gotev.uploadservice.data.UploadFile>;
				public constructor();
				public run(): void;
				public getParams(): net.gotev.uploadservice.data.UploadTaskParameters;
				public setNotificationConfig(param0: net.gotev.uploadservice.data.UploadNotificationConfig): void;
				public upload(param0: net.gotev.uploadservice.network.HttpStack): void;
				public performInitialization(): void;
				public init(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.data.UploadTaskParameters, param2: net.gotev.uploadservice.data.UploadNotificationConfig, param3: number, param4: androidNative.Array<net.gotev.uploadservice.observer.task.UploadTaskObserver>): void;
				public cancel(): void;
				public setParams(param0: net.gotev.uploadservice.data.UploadTaskParameters): void;
				public getNotificationConfig(): net.gotev.uploadservice.data.UploadNotificationConfig;
				public onResponseReceived(param0: net.gotev.uploadservice.network.ServerResponse): void;
				public resetUploadedBytes(): void;
			}
			export module UploadTask {
				export class Companion {
					public static class: java.lang.Class<net.gotev.uploadservice.UploadTask.Companion>;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module data {
				export class BroadcastData {
					public static class: java.lang.Class<net.gotev.uploadservice.data.BroadcastData>;
					public static Companion: net.gotev.uploadservice.data.BroadcastData.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.BroadcastData>;
					public toIntent(): globalAndroid.content.Intent;
					public describeContents(): number;
					public component3(): net.gotev.uploadservice.network.ServerResponse;
					public constructor(param0: net.gotev.uploadservice.data.UploadStatus, param1: net.gotev.uploadservice.data.UploadInfo, param2: net.gotev.uploadservice.network.ServerResponse, param3: java.lang.Throwable);
					public getStatus(): net.gotev.uploadservice.data.UploadStatus;
					public copy(param0: net.gotev.uploadservice.data.UploadStatus, param1: net.gotev.uploadservice.data.UploadInfo, param2: net.gotev.uploadservice.network.ServerResponse, param3: java.lang.Throwable): net.gotev.uploadservice.data.BroadcastData;
					public getException(): java.lang.Throwable;
					public component2(): net.gotev.uploadservice.data.UploadInfo;
					public equals(param0: any): boolean;
					public constructor(param0: net.gotev.uploadservice.data.UploadStatus, param1: net.gotev.uploadservice.data.UploadInfo);
					public toString(): string;
					public constructor(param0: net.gotev.uploadservice.data.UploadStatus, param1: net.gotev.uploadservice.data.UploadInfo, param2: net.gotev.uploadservice.network.ServerResponse);
					public component1(): net.gotev.uploadservice.data.UploadStatus;
					public component4(): java.lang.Throwable;
					public getServerResponse(): net.gotev.uploadservice.network.ServerResponse;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public getUploadInfo(): net.gotev.uploadservice.data.UploadInfo;
				}
				export module BroadcastData {
					export class Companion {
						public static class: java.lang.Class<net.gotev.uploadservice.data.BroadcastData.Companion>;
						public fromIntent(param0: globalAndroid.content.Intent): net.gotev.uploadservice.data.BroadcastData;
					}
					export class Creator extends globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.BroadcastData> {
						public static class: java.lang.Class<net.gotev.uploadservice.data.BroadcastData.Creator>;
						public constructor();
						public createFromParcel(param0: globalAndroid.os.Parcel): net.gotev.uploadservice.data.BroadcastData;
						public newArray(param0: number): androidNative.Array<net.gotev.uploadservice.data.BroadcastData>;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module data {
				export class HttpUploadTaskParameters extends net.gotev.uploadservice.persistence.Persistable {
					public static class: java.lang.Class<net.gotev.uploadservice.data.HttpUploadTaskParameters>;
					public static Companion: net.gotev.uploadservice.data.HttpUploadTaskParameters.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.HttpUploadTaskParameters>;
					public getUsesFixedLengthStreamingMode(): boolean;
					public describeContents(): number;
					public getRequestHeaders(): java.util.ArrayList<net.gotev.uploadservice.data.NameValue>;
					public setUsesFixedLengthStreamingMode(param0: boolean): void;
					public constructor(param0: string, param1: boolean, param2: java.util.ArrayList<net.gotev.uploadservice.data.NameValue>, param3: java.util.ArrayList<net.gotev.uploadservice.data.NameValue>);
					public equals(param0: any): boolean;
					public copy(param0: string, param1: boolean, param2: java.util.ArrayList<net.gotev.uploadservice.data.NameValue>, param3: java.util.ArrayList<net.gotev.uploadservice.data.NameValue>): net.gotev.uploadservice.data.HttpUploadTaskParameters;
					public toString(): string;
					public component1(): string;
					public constructor();
					public setMethod(param0: string): void;
					public getRequestParameters(): java.util.ArrayList<net.gotev.uploadservice.data.NameValue>;
					public toPersistableData(): net.gotev.uploadservice.persistence.PersistableData;
					public component4(): java.util.ArrayList<net.gotev.uploadservice.data.NameValue>;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public component3(): java.util.ArrayList<net.gotev.uploadservice.data.NameValue>;
					public hashCode(): number;
					public getMethod(): string;
					public component2(): boolean;
				}
				export module HttpUploadTaskParameters {
					export class Companion extends net.gotev.uploadservice.persistence.Persistable.Creator<net.gotev.uploadservice.data.HttpUploadTaskParameters> {
						public static class: java.lang.Class<net.gotev.uploadservice.data.HttpUploadTaskParameters.Companion>;
						public createFromPersistableData(param0: net.gotev.uploadservice.persistence.PersistableData): any;
						public createFromPersistableData(param0: net.gotev.uploadservice.persistence.PersistableData): net.gotev.uploadservice.data.HttpUploadTaskParameters;
					}
					export module Companion {
						export class CodingKeys {
							public static class: java.lang.Class<net.gotev.uploadservice.data.HttpUploadTaskParameters.Companion.CodingKeys>;
							public static method: string;
							public static fixedLength: string;
							public static headers: string;
							public static parameters: string;
							public static INSTANCE: net.gotev.uploadservice.data.HttpUploadTaskParameters.Companion.CodingKeys;
						}
					}
					export class Creator extends globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.HttpUploadTaskParameters> {
						public static class: java.lang.Class<net.gotev.uploadservice.data.HttpUploadTaskParameters.Creator>;
						public createFromParcel(param0: globalAndroid.os.Parcel): net.gotev.uploadservice.data.HttpUploadTaskParameters;
						public constructor();
						public newArray(param0: number): androidNative.Array<net.gotev.uploadservice.data.HttpUploadTaskParameters>;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module data {
				export class NameValue extends net.gotev.uploadservice.persistence.Persistable {
					public static class: java.lang.Class<net.gotev.uploadservice.data.NameValue>;
					public static Companion: net.gotev.uploadservice.data.NameValue.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.NameValue>;
					public component2(): string;
					public describeContents(): number;
					public constructor(param0: string, param1: string);
					public equals(param0: any): boolean;
					public getValue(): string;
					public toString(): string;
					public component1(): string;
					public copy(param0: string, param1: string): net.gotev.uploadservice.data.NameValue;
					public getName(): string;
					public toPersistableData(): net.gotev.uploadservice.persistence.PersistableData;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public validateAsHeader(): net.gotev.uploadservice.data.NameValue;
				}
				export module NameValue {
					export class Companion extends net.gotev.uploadservice.persistence.Persistable.Creator<net.gotev.uploadservice.data.NameValue> {
						public static class: java.lang.Class<net.gotev.uploadservice.data.NameValue.Companion>;
						public createFromPersistableData(param0: net.gotev.uploadservice.persistence.PersistableData): any;
						public createFromPersistableData(param0: net.gotev.uploadservice.persistence.PersistableData): net.gotev.uploadservice.data.NameValue;
					}
					export module Companion {
						export class CodingKeys {
							public static class: java.lang.Class<net.gotev.uploadservice.data.NameValue.Companion.CodingKeys>;
							public static name: string;
							public static value: string;
							public static INSTANCE: net.gotev.uploadservice.data.NameValue.Companion.CodingKeys;
						}
					}
					export class Creator extends globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.NameValue> {
						public static class: java.lang.Class<net.gotev.uploadservice.data.NameValue.Creator>;
						public constructor();
						public createFromParcel(param0: globalAndroid.os.Parcel): net.gotev.uploadservice.data.NameValue;
						public newArray(param0: number): androidNative.Array<net.gotev.uploadservice.data.NameValue>;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module data {
				export class RetryPolicyConfig {
					public static class: java.lang.Class<net.gotev.uploadservice.data.RetryPolicyConfig>;
					public getInitialWaitTimeSeconds(): number;
					public component3(): number;
					public getMaxWaitTimeSeconds(): number;
					public getMultiplier(): number;
					public constructor(param0: number, param1: number, param2: number, param3: number);
					public equals(param0: any): boolean;
					public toString(): string;
					public copy(param0: number, param1: number, param2: number, param3: number): net.gotev.uploadservice.data.RetryPolicyConfig;
					public component4(): number;
					public component1(): number;
					public getDefaultMaxRetries(): number;
					public component2(): number;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module data {
				export class UploadElapsedTime {
					public static class: java.lang.Class<net.gotev.uploadservice.data.UploadElapsedTime>;
					public getMinutes(): number;
					public equals(param0: any): boolean;
					public getTotalSeconds(): number;
					public toString(): string;
					public copy(param0: number, param1: number): net.gotev.uploadservice.data.UploadElapsedTime;
					public component1(): number;
					public component2(): number;
					public hashCode(): number;
					public getSeconds(): number;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module data {
				export class UploadFile extends net.gotev.uploadservice.persistence.Persistable {
					public static class: java.lang.Class<net.gotev.uploadservice.data.UploadFile>;
					public static Companion: net.gotev.uploadservice.data.UploadFile.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.UploadFile>;
					public copy(param0: string, param1: java.util.LinkedHashMap<string,string>): net.gotev.uploadservice.data.UploadFile;
					public constructor(param0: string);
					public describeContents(): number;
					public getHandler(): net.gotev.uploadservice.schemehandlers.SchemeHandler;
					public getSuccessfullyUploaded(): boolean;
					public getPath(): string;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public setSuccessfullyUploaded(param0: boolean): void;
					public toPersistableData(): net.gotev.uploadservice.persistence.PersistableData;
					public getProperties(): java.util.LinkedHashMap<string,string>;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public component2(): java.util.LinkedHashMap<string,string>;
					public constructor(param0: string, param1: java.util.LinkedHashMap<string,string>);
				}
				export module UploadFile {
					export class Companion extends net.gotev.uploadservice.persistence.Persistable.Creator<net.gotev.uploadservice.data.UploadFile> {
						public static class: java.lang.Class<net.gotev.uploadservice.data.UploadFile.Companion>;
						public createFromPersistableData(param0: net.gotev.uploadservice.persistence.PersistableData): any;
						public createFromPersistableData(param0: net.gotev.uploadservice.persistence.PersistableData): net.gotev.uploadservice.data.UploadFile;
					}
					export module Companion {
						export class CodingKeys {
							public static class: java.lang.Class<net.gotev.uploadservice.data.UploadFile.Companion.CodingKeys>;
							public static path: string;
							public static properties: string;
							public static INSTANCE: net.gotev.uploadservice.data.UploadFile.Companion.CodingKeys;
						}
					}
					export class Creator extends globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.UploadFile> {
						public static class: java.lang.Class<net.gotev.uploadservice.data.UploadFile.Creator>;
						public constructor();
						public createFromParcel(param0: globalAndroid.os.Parcel): net.gotev.uploadservice.data.UploadFile;
						public newArray(param0: number): androidNative.Array<net.gotev.uploadservice.data.UploadFile>;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module data {
				export class UploadInfo {
					public static class: java.lang.Class<net.gotev.uploadservice.data.UploadInfo>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.UploadInfo>;
					public constructor(param0: string);
					public component3(): number;
					public getTotalBytes(): number;
					public constructor(param0: string, param1: number, param2: number, param3: number);
					public getProgressPercent(): number;
					public constructor(param0: string, param1: number, param2: number, param3: number, param4: number, param5: java.util.ArrayList<net.gotev.uploadservice.data.UploadFile>);
					public toString(): string;
					public getNumberOfRetries(): number;
					public component4(): number;
					public getSuccessfullyUploadedFiles(): number;
					public getStartTime(): number;
					public constructor(param0: string, param1: number);
					public hashCode(): number;
					public constructor(param0: string, param1: number, param2: number);
					public component5(): number;
					public getUploadRate(): net.gotev.uploadservice.data.UploadRate;
					public copy(param0: string, param1: number, param2: number, param3: number, param4: number, param5: java.util.ArrayList<net.gotev.uploadservice.data.UploadFile>): net.gotev.uploadservice.data.UploadInfo;
					public describeContents(): number;
					public constructor(param0: string, param1: number, param2: number, param3: number, param4: number);
					public component6(): java.util.ArrayList<net.gotev.uploadservice.data.UploadFile>;
					public getUploadedBytes(): number;
					public equals(param0: any): boolean;
					public component1(): string;
					public getFiles(): java.util.ArrayList<net.gotev.uploadservice.data.UploadFile>;
					public component2(): number;
					public getUploadId(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getElapsedTime(): net.gotev.uploadservice.data.UploadElapsedTime;
				}
				export module UploadInfo {
					export class Creator extends globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.UploadInfo> {
						public static class: java.lang.Class<net.gotev.uploadservice.data.UploadInfo.Creator>;
						public constructor();
						public newArray(param0: number): androidNative.Array<net.gotev.uploadservice.data.UploadInfo>;
						public createFromParcel(param0: globalAndroid.os.Parcel): net.gotev.uploadservice.data.UploadInfo;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module data {
				export class UploadNotificationAction {
					public static class: java.lang.Class<net.gotev.uploadservice.data.UploadNotificationAction>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.UploadNotificationAction>;
					public getTitle(): string;
					public getIcon(): number;
					public component2(): string;
					public describeContents(): number;
					public component3(): globalAndroid.app.PendingIntent;
					public equals(param0: any): boolean;
					public asAction(): androidx.core.app.NotificationCompat.Action;
					public toString(): string;
					public copy(param0: number, param1: string, param2: globalAndroid.app.PendingIntent): net.gotev.uploadservice.data.UploadNotificationAction;
					public constructor(param0: number, param1: string, param2: globalAndroid.app.PendingIntent);
					public component1(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public getIntent(): globalAndroid.app.PendingIntent;
				}
				export module UploadNotificationAction {
					export class Creator extends globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.UploadNotificationAction> {
						public static class: java.lang.Class<net.gotev.uploadservice.data.UploadNotificationAction.Creator>;
						public newArray(param0: number): androidNative.Array<net.gotev.uploadservice.data.UploadNotificationAction>;
						public createFromParcel(param0: globalAndroid.os.Parcel): net.gotev.uploadservice.data.UploadNotificationAction;
						public constructor();
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module data {
				export class UploadNotificationConfig {
					public static class: java.lang.Class<net.gotev.uploadservice.data.UploadNotificationConfig>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.UploadNotificationConfig>;
					public isRingToneEnabled(): boolean;
					public getProgress(): net.gotev.uploadservice.data.UploadNotificationStatusConfig;
					public getSuccess(): net.gotev.uploadservice.data.UploadNotificationStatusConfig;
					public getError(): net.gotev.uploadservice.data.UploadNotificationStatusConfig;
					public describeContents(): number;
					public constructor(param0: string, param1: boolean, param2: net.gotev.uploadservice.data.UploadNotificationStatusConfig, param3: net.gotev.uploadservice.data.UploadNotificationStatusConfig, param4: net.gotev.uploadservice.data.UploadNotificationStatusConfig, param5: net.gotev.uploadservice.data.UploadNotificationStatusConfig);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getCancelled(): net.gotev.uploadservice.data.UploadNotificationStatusConfig;
					public getNotificationChannelId(): string;
				}
				export module UploadNotificationConfig {
					export class Creator extends globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.UploadNotificationConfig> {
						public static class: java.lang.Class<net.gotev.uploadservice.data.UploadNotificationConfig.Creator>;
						public constructor();
						public createFromParcel(param0: globalAndroid.os.Parcel): net.gotev.uploadservice.data.UploadNotificationConfig;
						public newArray(param0: number): androidNative.Array<net.gotev.uploadservice.data.UploadNotificationConfig>;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module data {
				export class UploadNotificationStatusConfig {
					public static class: java.lang.Class<net.gotev.uploadservice.data.UploadNotificationStatusConfig>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.UploadNotificationStatusConfig>;
					public getTitle(): string;
					public component2(): string;
					public component3(): number;
					public constructor(param0: string, param1: string, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap, param5: globalAndroid.app.PendingIntent, param6: java.util.ArrayList<net.gotev.uploadservice.data.UploadNotificationAction>);
					public copy(param0: string, param1: string, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap, param5: globalAndroid.app.PendingIntent, param6: java.util.ArrayList<net.gotev.uploadservice.data.UploadNotificationAction>, param7: boolean, param8: boolean, param9: globalAndroid.app.PendingIntent): net.gotev.uploadservice.data.UploadNotificationStatusConfig;
					public component6(): globalAndroid.app.PendingIntent;
					public getOnDismissed(): globalAndroid.app.PendingIntent;
					public constructor(param0: string, param1: string);
					public toString(): string;
					public getIconResourceID(): number;
					public constructor(param0: string, param1: string, param2: number);
					public component4(): number;
					public component7(): java.util.ArrayList<net.gotev.uploadservice.data.UploadNotificationAction>;
					public component8(): boolean;
					public constructor(param0: string, param1: string, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap);
					public component9(): boolean;
					public hashCode(): number;
					public getClickIntent(): globalAndroid.app.PendingIntent;
					public getIconColorResourceID(): number;
					public getClearOnAction(): boolean;
					public constructor(param0: string, param1: string, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap, param5: globalAndroid.app.PendingIntent, param6: java.util.ArrayList<net.gotev.uploadservice.data.UploadNotificationAction>, param7: boolean, param8: boolean, param9: globalAndroid.app.PendingIntent);
					public describeContents(): number;
					public constructor(param0: string, param1: string, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap, param5: globalAndroid.app.PendingIntent);
					public getAutoClear(): boolean;
					public getActions(): java.util.ArrayList<net.gotev.uploadservice.data.UploadNotificationAction>;
					public equals(param0: any): boolean;
					public getLargeIcon(): globalAndroid.graphics.Bitmap;
					public constructor(param0: string, param1: string, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap, param5: globalAndroid.app.PendingIntent, param6: java.util.ArrayList<net.gotev.uploadservice.data.UploadNotificationAction>, param7: boolean, param8: boolean);
					public component1(): string;
					public constructor(param0: string, param1: string, param2: number, param3: number);
					public constructor(param0: string, param1: string, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap, param5: globalAndroid.app.PendingIntent, param6: java.util.ArrayList<net.gotev.uploadservice.data.UploadNotificationAction>, param7: boolean);
					public getClickIntent(param0: globalAndroid.content.Context): globalAndroid.app.PendingIntent;
					public getMessage(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public component5(): globalAndroid.graphics.Bitmap;
					public component10(): globalAndroid.app.PendingIntent;
				}
				export module UploadNotificationStatusConfig {
					export class Creator extends globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.UploadNotificationStatusConfig> {
						public static class: java.lang.Class<net.gotev.uploadservice.data.UploadNotificationStatusConfig.Creator>;
						public constructor();
						public createFromParcel(param0: globalAndroid.os.Parcel): net.gotev.uploadservice.data.UploadNotificationStatusConfig;
						public newArray(param0: number): androidNative.Array<net.gotev.uploadservice.data.UploadNotificationStatusConfig>;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module data {
				export class UploadRate {
					public static class: java.lang.Class<net.gotev.uploadservice.data.UploadRate>;
					public equals(param0: any): boolean;
					public constructor(param0: number, param1: net.gotev.uploadservice.data.UploadRate.UploadRateUnit);
					public component2(): net.gotev.uploadservice.data.UploadRate.UploadRateUnit;
					public toString(): string;
					public constructor();
					public getValue(): number;
					public component1(): number;
					public hashCode(): number;
					public getUnit(): net.gotev.uploadservice.data.UploadRate.UploadRateUnit;
					public copy(param0: number, param1: net.gotev.uploadservice.data.UploadRate.UploadRateUnit): net.gotev.uploadservice.data.UploadRate;
				}
				export module UploadRate {
					export class UploadRateUnit {
						public static class: java.lang.Class<net.gotev.uploadservice.data.UploadRate.UploadRateUnit>;
						public static BitPerSecond: net.gotev.uploadservice.data.UploadRate.UploadRateUnit;
						public static KilobitPerSecond: net.gotev.uploadservice.data.UploadRate.UploadRateUnit;
						public static MegabitPerSecond: net.gotev.uploadservice.data.UploadRate.UploadRateUnit;
						public static valueOf(param0: string): net.gotev.uploadservice.data.UploadRate.UploadRateUnit;
						public static values(): androidNative.Array<net.gotev.uploadservice.data.UploadRate.UploadRateUnit>;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module data {
				export class UploadStatus {
					public static class: java.lang.Class<net.gotev.uploadservice.data.UploadStatus>;
					public static InProgress: net.gotev.uploadservice.data.UploadStatus;
					public static Success: net.gotev.uploadservice.data.UploadStatus;
					public static Error: net.gotev.uploadservice.data.UploadStatus;
					public static Completed: net.gotev.uploadservice.data.UploadStatus;
					public static values(): androidNative.Array<net.gotev.uploadservice.data.UploadStatus>;
					public static valueOf(param0: string): net.gotev.uploadservice.data.UploadStatus;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module data {
				export class UploadTaskParameters extends net.gotev.uploadservice.persistence.Persistable {
					public static class: java.lang.Class<net.gotev.uploadservice.data.UploadTaskParameters>;
					public static Companion: net.gotev.uploadservice.data.UploadTaskParameters.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.UploadTaskParameters>;
					public getAutoDeleteSuccessfullyUploadedFiles(): boolean;
					public getMaxRetries(): number;
					public getId(): string;
					public constructor(param0: string, param1: string, param2: string, param3: number, param4: boolean, param5: java.util.ArrayList<net.gotev.uploadservice.data.UploadFile>, param6: net.gotev.uploadservice.persistence.PersistableData);
					public component2(): string;
					public describeContents(): number;
					public component3(): string;
					public component5(): boolean;
					public component6(): java.util.ArrayList<net.gotev.uploadservice.data.UploadFile>;
					public copy(param0: string, param1: string, param2: string, param3: number, param4: boolean, param5: java.util.ArrayList<net.gotev.uploadservice.data.UploadFile>, param6: net.gotev.uploadservice.persistence.PersistableData): net.gotev.uploadservice.data.UploadTaskParameters;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public getFiles(): java.util.ArrayList<net.gotev.uploadservice.data.UploadFile>;
					public component4(): number;
					public getAdditionalParameters(): net.gotev.uploadservice.persistence.PersistableData;
					public toPersistableData(): net.gotev.uploadservice.persistence.PersistableData;
					public getTaskClass(): string;
					public getServerUrl(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public component7(): net.gotev.uploadservice.persistence.PersistableData;
					public hashCode(): number;
				}
				export module UploadTaskParameters {
					export class Companion extends net.gotev.uploadservice.persistence.Persistable.Creator<net.gotev.uploadservice.data.UploadTaskParameters> {
						public static class: java.lang.Class<net.gotev.uploadservice.data.UploadTaskParameters.Companion>;
						public createFromPersistableData(param0: net.gotev.uploadservice.persistence.PersistableData): any;
						public createFromPersistableData(param0: net.gotev.uploadservice.persistence.PersistableData): net.gotev.uploadservice.data.UploadTaskParameters;
					}
					export module Companion {
						export class CodingKeys {
							public static class: java.lang.Class<net.gotev.uploadservice.data.UploadTaskParameters.Companion.CodingKeys>;
							public static taskClass: string;
							public static id: string;
							public static serverUrl: string;
							public static maxRetries: string;
							public static autoDeleteFiles: string;
							public static files: string;
							public static params: string;
							public static INSTANCE: net.gotev.uploadservice.data.UploadTaskParameters.Companion.CodingKeys;
						}
					}
					export class Creator extends globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.data.UploadTaskParameters> {
						public static class: java.lang.Class<net.gotev.uploadservice.data.UploadTaskParameters.Creator>;
						public constructor();
						public newArray(param0: number): androidNative.Array<net.gotev.uploadservice.data.UploadTaskParameters>;
						public createFromParcel(param0: globalAndroid.os.Parcel): net.gotev.uploadservice.data.UploadTaskParameters;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module exceptions {
				export class UploadError {
					public static class: java.lang.Class<net.gotev.uploadservice.exceptions.UploadError>;
					public getServerResponse(): net.gotev.uploadservice.network.ServerResponse;
					public constructor(param0: net.gotev.uploadservice.network.ServerResponse);
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module exceptions {
				export class UserCancelledUploadException {
					public static class: java.lang.Class<net.gotev.uploadservice.exceptions.UserCancelledUploadException>;
					public constructor();
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module extensions {
				export class CollectionsExtensionsKt {
					public static class: java.lang.Class<net.gotev.uploadservice.extensions.CollectionsExtensionsKt>;
					public static addHeader(param0: java.util.ArrayList<net.gotev.uploadservice.data.NameValue>, param1: string, param2: string): void;
					public static setOrRemove(param0: java.util.LinkedHashMap<string,string>, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module extensions {
				export class ContextExtensionsKt {
					public static class: java.lang.Class<net.gotev.uploadservice.extensions.ContextExtensionsKt>;
					public static getUploadTaskCreationParameters(param0: globalAndroid.content.Intent): net.gotev.uploadservice.extensions.UploadTaskCreationParameters;
					public static startNewUpload(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.data.UploadTaskParameters, param2: net.gotev.uploadservice.data.UploadNotificationConfig): string;
					public static getUploadIdToCancel(param0: globalAndroid.content.Intent): string;
					public static getUploadTask(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.extensions.UploadTaskCreationParameters, param2: number, param3: androidNative.Array<net.gotev.uploadservice.observer.task.UploadTaskObserver>): net.gotev.uploadservice.UploadTask;
					public static getCancelUploadIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.app.PendingIntent;
					public static getNotificationActionIntent(param0: globalAndroid.content.Context, param1: string, param2: string): globalAndroid.app.PendingIntent;
					public static flagsCompat(param0: number): number;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module extensions {
				export class NotificationManagerExtensionsKt {
					public static class: java.lang.Class<net.gotev.uploadservice.extensions.NotificationManagerExtensionsKt>;
					public static validateNotificationChannel(param0: globalAndroid.app.NotificationManager, param1: string): void;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module extensions {
				export class StringExtensionsKt {
					public static class: java.lang.Class<net.gotev.uploadservice.extensions.StringExtensionsKt>;
					public static APPLICATION_OCTET_STREAM: string;
					public static VIDEO_MP4: string;
					public static autoDetectMimeType(param0: string): string;
					public static getAsciiBytes(param0: string): androidNative.Array<number>;
					public static isValidHttpUrl(param0: string): boolean;
					public static getUtf8Bytes(param0: string): androidNative.Array<number>;
					public static isASCII(param0: string): boolean;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module extensions {
				export class UploadTaskCreationParameters {
					public static class: java.lang.Class<net.gotev.uploadservice.extensions.UploadTaskCreationParameters>;
					public getParams(): net.gotev.uploadservice.data.UploadTaskParameters;
					public equals(param0: any): boolean;
					public getNotificationConfig(): net.gotev.uploadservice.data.UploadNotificationConfig;
					public constructor(param0: net.gotev.uploadservice.data.UploadTaskParameters, param1: net.gotev.uploadservice.data.UploadNotificationConfig);
					public component2(): net.gotev.uploadservice.data.UploadNotificationConfig;
					public copy(param0: net.gotev.uploadservice.data.UploadTaskParameters, param1: net.gotev.uploadservice.data.UploadNotificationConfig): net.gotev.uploadservice.extensions.UploadTaskCreationParameters;
					public toString(): string;
					public component1(): net.gotev.uploadservice.data.UploadTaskParameters;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module extensions {
				export class WakeLockExtensionsKt {
					public static class: java.lang.Class<net.gotev.uploadservice.extensions.WakeLockExtensionsKt>;
					public static acquirePartialWakeLock(param0: globalAndroid.content.Context, param1: globalAndroid.os.PowerManager.WakeLock, param2: string): globalAndroid.os.PowerManager.WakeLock;
					public static safeRelease(param0: globalAndroid.os.PowerManager.WakeLock): void;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module logger {
				export class DefaultLoggerDelegate extends net.gotev.uploadservice.logger.UploadServiceLogger.Delegate {
					public static class: java.lang.Class<net.gotev.uploadservice.logger.DefaultLoggerDelegate>;
					public static Companion: net.gotev.uploadservice.logger.DefaultLoggerDelegate.Companion;
					public debug(param0: string, param1: string, param2: string): void;
					public constructor();
					public error(param0: string, param1: string, param2: string, param3: java.lang.Throwable): void;
					public info(param0: string, param1: string, param2: string): void;
				}
				export module DefaultLoggerDelegate {
					export class Companion {
						public static class: java.lang.Class<net.gotev.uploadservice.logger.DefaultLoggerDelegate.Companion>;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module logger {
				export class UploadServiceLogger {
					public static class: java.lang.Class<net.gotev.uploadservice.logger.UploadServiceLogger>;
					public static NA: string;
					public static INSTANCE: net.gotev.uploadservice.logger.UploadServiceLogger;
					public static setLogLevel(param0: net.gotev.uploadservice.logger.UploadServiceLogger.LogLevel): void;
					public static debug(param0: string, param1: string, param2: kotlin.jvm.functions.Function0<string>): void;
					public static setDelegate(param0: net.gotev.uploadservice.logger.UploadServiceLogger.Delegate): void;
					public static error(param0: string, param1: string, param2: java.lang.Throwable, param3: kotlin.jvm.functions.Function0<string>): void;
					public static error(param0: string, param1: string, param2: kotlin.jvm.functions.Function0<string>): void;
					public static setDevelopmentMode(param0: boolean): void;
					public static info(param0: string, param1: string, param2: kotlin.jvm.functions.Function0<string>): void;
				}
				export module UploadServiceLogger {
					export class Delegate {
						public static class: java.lang.Class<net.gotev.uploadservice.logger.UploadServiceLogger.Delegate>;
						/**
						 * Constructs a new instance of the net.gotev.uploadservice.logger.UploadServiceLogger$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							error(param0: string, param1: string, param2: string, param3: java.lang.Throwable): void;
							debug(param0: string, param1: string, param2: string): void;
							info(param0: string, param1: string, param2: string): void;
						});
						public constructor();
						public error(param0: string, param1: string, param2: string, param3: java.lang.Throwable): void;
						public info(param0: string, param1: string, param2: string): void;
						public debug(param0: string, param1: string, param2: string): void;
					}
					export class LogLevel {
						public static class: java.lang.Class<net.gotev.uploadservice.logger.UploadServiceLogger.LogLevel>;
						public static Debug: net.gotev.uploadservice.logger.UploadServiceLogger.LogLevel;
						public static Info: net.gotev.uploadservice.logger.UploadServiceLogger.LogLevel;
						public static Error: net.gotev.uploadservice.logger.UploadServiceLogger.LogLevel;
						public static Off: net.gotev.uploadservice.logger.UploadServiceLogger.LogLevel;
						public static valueOf(param0: string): net.gotev.uploadservice.logger.UploadServiceLogger.LogLevel;
						public static values(): androidNative.Array<net.gotev.uploadservice.logger.UploadServiceLogger.LogLevel>;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module network {
				export abstract class BodyWriter {
					public static class: java.lang.Class<net.gotev.uploadservice.network.BodyWriter>;
					public constructor(param0: net.gotev.uploadservice.network.BodyWriter.OnStreamWriteListener);
					public internalWrite(param0: androidNative.Array<number>, param1: number): void;
					public write(param0: androidNative.Array<number>): void;
					public write(param0: androidNative.Array<number>, param1: number): void;
					public flush(): void;
					public writeStream(param0: java.io.InputStream): void;
					public internalWrite(param0: androidNative.Array<number>): void;
				}
				export module BodyWriter {
					export class OnStreamWriteListener {
						public static class: java.lang.Class<net.gotev.uploadservice.network.BodyWriter.OnStreamWriteListener>;
						/**
						 * Constructs a new instance of the net.gotev.uploadservice.network.BodyWriter$OnStreamWriteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							shouldContinueWriting(): boolean;
							onBytesWritten(param0: number): void;
						});
						public constructor();
						public onBytesWritten(param0: number): void;
						public shouldContinueWriting(): boolean;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module network {
				export class HttpRequest {
					public static class: java.lang.Class<net.gotev.uploadservice.network.HttpRequest>;
					/**
					 * Constructs a new instance of the net.gotev.uploadservice.network.HttpRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setHeaders(param0: java.util.List<net.gotev.uploadservice.data.NameValue>): net.gotev.uploadservice.network.HttpRequest;
						setTotalBodyBytes(param0: number, param1: boolean): net.gotev.uploadservice.network.HttpRequest;
						getResponse(param0: net.gotev.uploadservice.network.HttpRequest.RequestBodyDelegate, param1: net.gotev.uploadservice.network.BodyWriter.OnStreamWriteListener): net.gotev.uploadservice.network.ServerResponse;
					});
					public constructor();
					public setTotalBodyBytes(param0: number, param1: boolean): net.gotev.uploadservice.network.HttpRequest;
					public getResponse(param0: net.gotev.uploadservice.network.HttpRequest.RequestBodyDelegate, param1: net.gotev.uploadservice.network.BodyWriter.OnStreamWriteListener): net.gotev.uploadservice.network.ServerResponse;
					public setHeaders(param0: java.util.List<net.gotev.uploadservice.data.NameValue>): net.gotev.uploadservice.network.HttpRequest;
				}
				export module HttpRequest {
					export class RequestBodyDelegate {
						public static class: java.lang.Class<net.gotev.uploadservice.network.HttpRequest.RequestBodyDelegate>;
						/**
						 * Constructs a new instance of the net.gotev.uploadservice.network.HttpRequest$RequestBodyDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onWriteRequestBody(param0: net.gotev.uploadservice.network.BodyWriter): void;
						});
						public constructor();
						public onWriteRequestBody(param0: net.gotev.uploadservice.network.BodyWriter): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module network {
				export class HttpStack {
					public static class: java.lang.Class<net.gotev.uploadservice.network.HttpStack>;
					/**
					 * Constructs a new instance of the net.gotev.uploadservice.network.HttpStack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						newRequest(param0: string, param1: string, param2: string): net.gotev.uploadservice.network.HttpRequest;
					});
					public constructor();
					public newRequest(param0: string, param1: string, param2: string): net.gotev.uploadservice.network.HttpRequest;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module network {
				export class ServerResponse {
					public static class: java.lang.Class<net.gotev.uploadservice.network.ServerResponse>;
					public static Companion: net.gotev.uploadservice.network.ServerResponse.Companion;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.network.ServerResponse>;
					public component3(): java.util.LinkedHashMap<string,string>;
					public copy(param0: number, param1: androidNative.Array<number>, param2: java.util.LinkedHashMap<string,string>): net.gotev.uploadservice.network.ServerResponse;
					public describeContents(): number;
					public component2(): androidNative.Array<number>;
					public getHeaders(): java.util.LinkedHashMap<string,string>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getBodyString(): string;
					public getBody(): androidNative.Array<number>;
					public isSuccessful(): boolean;
					public component1(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public getCode(): number;
					public constructor(param0: number, param1: androidNative.Array<number>, param2: java.util.LinkedHashMap<string,string>);
				}
				export module ServerResponse {
					export class Companion {
						public static class: java.lang.Class<net.gotev.uploadservice.network.ServerResponse.Companion>;
						public successfulEmpty(): net.gotev.uploadservice.network.ServerResponse;
					}
					export class Creator extends globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.network.ServerResponse> {
						public static class: java.lang.Class<net.gotev.uploadservice.network.ServerResponse.Creator>;
						public constructor();
						public newArray(param0: number): androidNative.Array<net.gotev.uploadservice.network.ServerResponse>;
						public createFromParcel(param0: globalAndroid.os.Parcel): net.gotev.uploadservice.network.ServerResponse;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module network {
				export module hurl {
					export class HurlBodyWriter extends net.gotev.uploadservice.network.BodyWriter {
						public static class: java.lang.Class<net.gotev.uploadservice.network.hurl.HurlBodyWriter>;
						public internalWrite(param0: androidNative.Array<number>): void;
						public constructor(param0: java.io.OutputStream, param1: net.gotev.uploadservice.network.BodyWriter.OnStreamWriteListener);
						public close(): void;
						public internalWrite(param0: androidNative.Array<number>, param1: number): void;
						public flush(): void;
						public constructor(param0: net.gotev.uploadservice.network.BodyWriter.OnStreamWriteListener);
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module network {
				export module hurl {
					export class HurlStack extends net.gotev.uploadservice.network.HttpStack {
						public static class: java.lang.Class<net.gotev.uploadservice.network.hurl.HurlStack>;
						public constructor();
						public newRequest(param0: string, param1: string, param2: string): net.gotev.uploadservice.network.HttpRequest;
						public constructor(param0: string, param1: boolean, param2: boolean);
						public constructor(param0: string, param1: boolean, param2: boolean, param3: number);
						public constructor(param0: string, param1: boolean, param2: boolean, param3: number, param4: number);
						public constructor(param0: string, param1: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module network {
				export module hurl {
					export class HurlStackRequest extends net.gotev.uploadservice.network.HttpRequest {
						public static class: java.lang.Class<net.gotev.uploadservice.network.hurl.HurlStackRequest>;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: boolean, param5: boolean, param6: number, param7: number);
						public setTotalBodyBytes(param0: number, param1: boolean): net.gotev.uploadservice.network.HttpRequest;
						public getResponse(param0: net.gotev.uploadservice.network.HttpRequest.RequestBodyDelegate, param1: net.gotev.uploadservice.network.BodyWriter.OnStreamWriteListener): net.gotev.uploadservice.network.ServerResponse;
						public close(): void;
						public setHeaders(param0: java.util.List<net.gotev.uploadservice.data.NameValue>): net.gotev.uploadservice.network.HttpRequest;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module observer {
				export module request {
					export class BaseRequestObserver {
						public static class: java.lang.Class<net.gotev.uploadservice.observer.request.BaseRequestObserver>;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						public unregister(): void;
						public getDelegate$uploadservice_release(): net.gotev.uploadservice.observer.request.RequestObserverDelegate;
						public getShouldAcceptEventsFrom$uploadservice_release(): kotlin.jvm.functions.Function1<net.gotev.uploadservice.data.UploadInfo,java.lang.Boolean>;
						public register(): void;
						public setShouldAcceptEventsFrom$uploadservice_release(param0: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): void;
						public constructor(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.observer.request.RequestObserverDelegate, param2: kotlin.jvm.functions.Function1<any,java.lang.Boolean>);
					}
					export module BaseRequestObserver {
						export class WhenMappings {
							public static class: java.lang.Class<net.gotev.uploadservice.observer.request.BaseRequestObserver.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module observer {
				export module request {
					export class GlobalRequestObserver extends net.gotev.uploadservice.observer.request.BaseRequestObserver {
						public static class: java.lang.Class<net.gotev.uploadservice.observer.request.GlobalRequestObserver>;
						public constructor(param0: globalAndroid.app.Application, param1: net.gotev.uploadservice.observer.request.RequestObserverDelegate, param2: kotlin.jvm.functions.Function1<any,java.lang.Boolean>);
						public constructor(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.observer.request.RequestObserverDelegate, param2: kotlin.jvm.functions.Function1<any,java.lang.Boolean>);
						public constructor(param0: globalAndroid.app.Application, param1: net.gotev.uploadservice.observer.request.RequestObserverDelegate);
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module observer {
				export module request {
					export class NotificationActionsObserver {
						public static class: java.lang.Class<net.gotev.uploadservice.observer.request.NotificationActionsObserver>;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						public unregister(): void;
						public constructor(param0: globalAndroid.content.Context);
						public register(): void;
						public onActionIntent(param0: globalAndroid.content.Intent): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module observer {
				export module request {
					export class RequestObserver extends net.gotev.uploadservice.observer.request.BaseRequestObserver {
						public static class: java.lang.Class<net.gotev.uploadservice.observer.request.RequestObserver>;
						public unregister(): void;
						public subscribe(param0: net.gotev.uploadservice.UploadRequest<any>): void;
						public register(): void;
						public constructor(param0: globalAndroid.content.Context, param1: androidx.lifecycle.LifecycleOwner, param2: net.gotev.uploadservice.observer.request.RequestObserverDelegate, param3: kotlin.jvm.functions.Function1<any,java.lang.Boolean>);
						public constructor(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.observer.request.RequestObserverDelegate, param2: kotlin.jvm.functions.Function1<any,java.lang.Boolean>);
						public constructor(param0: globalAndroid.content.Context, param1: androidx.lifecycle.LifecycleOwner, param2: net.gotev.uploadservice.observer.request.RequestObserverDelegate);
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module observer {
				export module request {
					export class RequestObserverDelegate {
						public static class: java.lang.Class<net.gotev.uploadservice.observer.request.RequestObserverDelegate>;
						/**
						 * Constructs a new instance of the net.gotev.uploadservice.observer.request.RequestObserverDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onProgress(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.data.UploadInfo): void;
							onSuccess(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.data.UploadInfo, param2: net.gotev.uploadservice.network.ServerResponse): void;
							onError(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.data.UploadInfo, param2: java.lang.Throwable): void;
							onCompleted(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.data.UploadInfo): void;
							onCompletedWhileNotObserving(): void;
						});
						public constructor();
						public onCompleted(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.data.UploadInfo): void;
						public onProgress(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.data.UploadInfo): void;
						public onError(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.data.UploadInfo, param2: java.lang.Throwable): void;
						public onSuccess(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.data.UploadInfo, param2: net.gotev.uploadservice.network.ServerResponse): void;
						public onCompletedWhileNotObserving(): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module observer {
				export module request {
					export class RequestObserver_LifecycleAdapter {
						public static class: java.lang.Class<net.gotev.uploadservice.observer.request.RequestObserver_LifecycleAdapter>;
						public callMethods(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event, param2: boolean, param3: androidx.lifecycle.MethodCallsLogger): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module observer {
				export module task {
					export abstract class AbstractSingleNotificationHandler extends net.gotev.uploadservice.observer.task.UploadTaskObserver {
						public static class: java.lang.Class<net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler>;
						public constructor(param0: net.gotev.uploadservice.UploadService);
						public onProgress(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
						public onError(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig, param3: java.lang.Throwable): void;
						public updateNotification(param0: globalAndroid.app.NotificationManager, param1: androidx.core.app.NotificationCompat.Builder, param2: java.util.Map<string,net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskData>): androidx.core.app.NotificationCompat.Builder;
						public onSuccess(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig, param3: net.gotev.uploadservice.network.ServerResponse): void;
						public onCompleted(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
						public removeTask(param0: string): void;
						public onStart(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
					}
					export module AbstractSingleNotificationHandler {
						export class TaskData {
							public static class: java.lang.Class<net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskData>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskData>;
							public constructor(param0: net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskStatus, param1: net.gotev.uploadservice.data.UploadInfo, param2: net.gotev.uploadservice.data.UploadNotificationStatusConfig);
							public component3(): net.gotev.uploadservice.data.UploadNotificationStatusConfig;
							public hashCode(): number;
							public component2(): net.gotev.uploadservice.data.UploadInfo;
							public toString(): string;
							public copy(param0: net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskStatus, param1: net.gotev.uploadservice.data.UploadInfo, param2: net.gotev.uploadservice.data.UploadNotificationStatusConfig): net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskData;
							public getConfig(): net.gotev.uploadservice.data.UploadNotificationStatusConfig;
							public getStatus(): net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskStatus;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public getInfo(): net.gotev.uploadservice.data.UploadInfo;
							public component1(): net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskStatus;
							public equals(param0: any): boolean;
						}
						export module TaskData {
							export class Creator extends globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskData> {
								public static class: java.lang.Class<net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskData.Creator>;
								public createFromParcel(param0: globalAndroid.os.Parcel): net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskData;
								public newArray(param0: number): androidNative.Array<net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskData>;
								public constructor();
							}
						}
						export class TaskStatus {
							public static class: java.lang.Class<net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskStatus>;
							public static InProgress: net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskStatus;
							public static Succeeded: net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskStatus;
							public static Failed: net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskStatus;
							public static Cancelled: net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskStatus;
							public static values(): androidNative.Array<net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskStatus>;
							public static valueOf(param0: string): net.gotev.uploadservice.observer.task.AbstractSingleNotificationHandler.TaskStatus;
						}
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module observer {
				export module task {
					export class BroadcastEmitter extends net.gotev.uploadservice.observer.task.UploadTaskObserver {
						public static class: java.lang.Class<net.gotev.uploadservice.observer.task.BroadcastEmitter>;
						public onProgress(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
						public onError(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig, param3: java.lang.Throwable): void;
						public constructor(param0: globalAndroid.content.Context);
						public onSuccess(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig, param3: net.gotev.uploadservice.network.ServerResponse): void;
						public onCompleted(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
						public onStart(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module observer {
				export module task {
					export class NotificationHandler extends net.gotev.uploadservice.observer.task.UploadTaskObserver {
						public static class: java.lang.Class<net.gotev.uploadservice.observer.task.NotificationHandler>;
						public constructor(param0: net.gotev.uploadservice.UploadService);
						public onProgress(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
						public onError(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig, param3: java.lang.Throwable): void;
						public onSuccess(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig, param3: net.gotev.uploadservice.network.ServerResponse): void;
						public onCompleted(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
						public onStart(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module observer {
				export module task {
					export class TaskCompletionNotifier extends net.gotev.uploadservice.observer.task.UploadTaskObserver {
						public static class: java.lang.Class<net.gotev.uploadservice.observer.task.TaskCompletionNotifier>;
						public constructor(param0: net.gotev.uploadservice.UploadService);
						public onProgress(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
						public onError(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig, param3: java.lang.Throwable): void;
						public onSuccess(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig, param3: net.gotev.uploadservice.network.ServerResponse): void;
						public onCompleted(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
						public onStart(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module observer {
				export module task {
					export class UploadTaskObserver {
						public static class: java.lang.Class<net.gotev.uploadservice.observer.task.UploadTaskObserver>;
						/**
						 * Constructs a new instance of the net.gotev.uploadservice.observer.task.UploadTaskObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onStart(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
							onProgress(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
							onSuccess(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig, param3: net.gotev.uploadservice.network.ServerResponse): void;
							onError(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig, param3: java.lang.Throwable): void;
							onCompleted(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
						});
						public constructor();
						public onProgress(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
						public onError(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig, param3: java.lang.Throwable): void;
						public onSuccess(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig, param3: net.gotev.uploadservice.network.ServerResponse): void;
						public onCompleted(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
						public onStart(param0: net.gotev.uploadservice.data.UploadInfo, param1: number, param2: net.gotev.uploadservice.data.UploadNotificationConfig): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module persistence {
				export class Persistable {
					public static class: java.lang.Class<net.gotev.uploadservice.persistence.Persistable>;
					/**
					 * Constructs a new instance of the net.gotev.uploadservice.persistence.Persistable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						toPersistableData(): net.gotev.uploadservice.persistence.PersistableData;
					});
					public constructor();
					public toPersistableData(): net.gotev.uploadservice.persistence.PersistableData;
				}
				export module Persistable {
					export class Creator<T>  extends java.lang.Object {
						public static class: java.lang.Class<net.gotev.uploadservice.persistence.Persistable.Creator<any>>;
						/**
						 * Constructs a new instance of the net.gotev.uploadservice.persistence.Persistable$Creator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createFromPersistableData(param0: net.gotev.uploadservice.persistence.PersistableData): T;
						});
						public constructor();
						public createFromPersistableData(param0: net.gotev.uploadservice.persistence.PersistableData): T;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module persistence {
				export class PersistableData {
					public static class: java.lang.Class<net.gotev.uploadservice.persistence.PersistableData>;
					public static CREATOR: net.gotev.uploadservice.persistence.PersistableData.CREATOR;
					public putString(param0: string, param1: string): void;
					public toJson(): string;
					public getArrayData(param0: string): java.util.List<net.gotev.uploadservice.persistence.PersistableData>;
					public getInt(param0: string): number;
					public getData(param0: string): net.gotev.uploadservice.persistence.PersistableData;
					public describeContents(): number;
					public toBundle(): globalAndroid.os.Bundle;
					public getString(param0: string): string;
					public putDouble(param0: string, param1: number): void;
					public putInt(param0: string, param1: number): void;
					public getData(): java.util.HashMap<string,any>;
					public equals(param0: any): boolean;
					public getBoolean(param0: string): boolean;
					public constructor();
					public getDouble(param0: string): number;
					public putBoolean(param0: string, param1: boolean): void;
					public putLong(param0: string, param1: number): void;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public getLong(param0: string): number;
					public static fromJson(param0: string): net.gotev.uploadservice.persistence.PersistableData;
					public putData(param0: string, param1: net.gotev.uploadservice.persistence.PersistableData): void;
					public putArrayData(param0: string, param1: java.util.List<any>): void;
				}
				export module PersistableData {
					export class CREATOR extends globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.persistence.PersistableData> {
						public static class: java.lang.Class<net.gotev.uploadservice.persistence.PersistableData.CREATOR>;
						public fromJson(param0: string): net.gotev.uploadservice.persistence.PersistableData;
						public createFromParcel(param0: globalAndroid.os.Parcel): net.gotev.uploadservice.persistence.PersistableData;
						public newArray(param0: number): androidNative.Array<net.gotev.uploadservice.persistence.PersistableData>;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module placeholders {
				export class DefaultPlaceholdersProcessor extends net.gotev.uploadservice.placeholders.PlaceholdersProcessor {
					public static class: java.lang.Class<net.gotev.uploadservice.placeholders.DefaultPlaceholdersProcessor>;
					public uploadElapsedTime(param0: net.gotev.uploadservice.data.UploadElapsedTime): string;
					public uploadedFiles(param0: number): string;
					public constructor();
					public totalFiles(param0: number): string;
					public uploadProgress(param0: number): string;
					public remainingFiles(param0: number): string;
					public uploadRate(param0: net.gotev.uploadservice.data.UploadRate): string;
					public processPlaceholders(param0: string, param1: net.gotev.uploadservice.data.UploadInfo): string;
				}
				export module DefaultPlaceholdersProcessor {
					export class WhenMappings {
						public static class: java.lang.Class<net.gotev.uploadservice.placeholders.DefaultPlaceholdersProcessor.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module placeholders {
				export class Placeholder {
					public static class: java.lang.Class<net.gotev.uploadservice.placeholders.Placeholder>;
					public static ElapsedTime: net.gotev.uploadservice.placeholders.Placeholder;
					public static UploadRate: net.gotev.uploadservice.placeholders.Placeholder;
					public static Progress: net.gotev.uploadservice.placeholders.Placeholder;
					public static UploadedFiles: net.gotev.uploadservice.placeholders.Placeholder;
					public static RemainingFiles: net.gotev.uploadservice.placeholders.Placeholder;
					public static TotalFiles: net.gotev.uploadservice.placeholders.Placeholder;
					public toString(): string;
					public getValue(): string;
					public static values(): androidNative.Array<net.gotev.uploadservice.placeholders.Placeholder>;
					public static valueOf(param0: string): net.gotev.uploadservice.placeholders.Placeholder;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module placeholders {
				export class PlaceholdersProcessor {
					public static class: java.lang.Class<net.gotev.uploadservice.placeholders.PlaceholdersProcessor>;
					/**
					 * Constructs a new instance of the net.gotev.uploadservice.placeholders.PlaceholdersProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						processPlaceholders(param0: string, param1: net.gotev.uploadservice.data.UploadInfo): string;
					});
					public constructor();
					public processPlaceholders(param0: string, param1: net.gotev.uploadservice.data.UploadInfo): string;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module protocols {
				export module binary {
					export class BinaryUploadRequest extends net.gotev.uploadservice.HttpUploadRequest<net.gotev.uploadservice.protocols.binary.BinaryUploadRequest> {
						public static class: java.lang.Class<net.gotev.uploadservice.protocols.binary.BinaryUploadRequest>;
						public addArrayParameter(param0: string, param1: java.util.List<string>): any;
						public toPersistableData(): net.gotev.uploadservice.persistence.PersistableData;
						public addParameter(param0: string, param1: string): any;
						public startUpload(): string;
						public addArrayParameter(param0: string, param1: androidNative.Array<string>): any;
						public addArrayParameter(param0: string, param1: androidNative.Array<string>): net.gotev.uploadservice.protocols.binary.BinaryUploadRequest;
						public addArrayParameter(param0: string, param1: java.util.List<string>): net.gotev.uploadservice.protocols.binary.BinaryUploadRequest;
						public setFileToUpload(param0: string): net.gotev.uploadservice.protocols.binary.BinaryUploadRequest;
						public addParameter(param0: string, param1: string): net.gotev.uploadservice.protocols.binary.BinaryUploadRequest;
						public constructor(param0: globalAndroid.content.Context, param1: string);
						public getTaskClass(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module protocols {
				export module binary {
					export class BinaryUploadTask extends net.gotev.uploadservice.HttpUploadTask {
						public static class: java.lang.Class<net.gotev.uploadservice.protocols.binary.BinaryUploadTask>;
						public constructor();
						public onBytesWritten(param0: number): void;
						public getBodyLength(): number;
						public onWriteRequestBody(param0: net.gotev.uploadservice.network.BodyWriter): void;
						public shouldContinueWriting(): boolean;
						public performInitialization(): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module protocols {
				export module multipart {
					export class MultipartUploadRequest extends net.gotev.uploadservice.HttpUploadRequest<net.gotev.uploadservice.protocols.multipart.MultipartUploadRequest> {
						public static class: java.lang.Class<net.gotev.uploadservice.protocols.multipart.MultipartUploadRequest>;
						public toPersistableData(): net.gotev.uploadservice.persistence.PersistableData;
						public addFileToUpload(param0: string, param1: string, param2: string): net.gotev.uploadservice.protocols.multipart.MultipartUploadRequest;
						public addFileToUpload(param0: string, param1: string): net.gotev.uploadservice.protocols.multipart.MultipartUploadRequest;
						public addFileToUpload(param0: string, param1: string, param2: string, param3: string): net.gotev.uploadservice.protocols.multipart.MultipartUploadRequest;
						public constructor(param0: globalAndroid.content.Context, param1: string);
						public getTaskClass(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module protocols {
				export module multipart {
					export class MultipartUploadTask extends net.gotev.uploadservice.HttpUploadTask {
						public static class: java.lang.Class<net.gotev.uploadservice.protocols.multipart.MultipartUploadTask>;
						public static Companion: net.gotev.uploadservice.protocols.multipart.MultipartUploadTask.Companion;
						public constructor();
						public onBytesWritten(param0: number): void;
						public getBodyLength(): number;
						public onWriteRequestBody(param0: net.gotev.uploadservice.network.BodyWriter): void;
						public shouldContinueWriting(): boolean;
						public performInitialization(): void;
					}
					export module MultipartUploadTask {
						export class Companion {
							public static class: java.lang.Class<net.gotev.uploadservice.protocols.multipart.MultipartUploadTask.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module protocols {
				export module multipart {
					export class UploadFileExtensionsKt {
						public static class: java.lang.Class<net.gotev.uploadservice.protocols.multipart.UploadFileExtensionsKt>;
						public static getContentType(param0: net.gotev.uploadservice.data.UploadFile): string;
						public static setParameterName(param0: net.gotev.uploadservice.data.UploadFile, param1: string): void;
						public static setRemoteFileName(param0: net.gotev.uploadservice.data.UploadFile, param1: string): void;
						public static setContentType(param0: net.gotev.uploadservice.data.UploadFile, param1: string): void;
						public static getParameterName(param0: net.gotev.uploadservice.data.UploadFile): string;
						public static getRemoteFileName(param0: net.gotev.uploadservice.data.UploadFile): string;
					}
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module schemehandlers {
				export class ContentResolverSchemeHandler extends net.gotev.uploadservice.schemehandlers.SchemeHandler {
					public static class: java.lang.Class<net.gotev.uploadservice.schemehandlers.ContentResolverSchemeHandler>;
					public init(param0: string): void;
					public constructor();
					public size(param0: globalAndroid.content.Context): number;
					public stream(param0: globalAndroid.content.Context): java.io.InputStream;
					public delete(param0: globalAndroid.content.Context): boolean;
					public name(param0: globalAndroid.content.Context): string;
					public contentType(param0: globalAndroid.content.Context): string;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module schemehandlers {
				export class FileSchemeHandler extends net.gotev.uploadservice.schemehandlers.SchemeHandler {
					public static class: java.lang.Class<net.gotev.uploadservice.schemehandlers.FileSchemeHandler>;
					public stream(param0: globalAndroid.content.Context): java.io.FileInputStream;
					public init(param0: string): void;
					public constructor();
					public size(param0: globalAndroid.content.Context): number;
					public delete(param0: globalAndroid.content.Context): boolean;
					public stream(param0: globalAndroid.content.Context): java.io.InputStream;
					public name(param0: globalAndroid.content.Context): string;
					public contentType(param0: globalAndroid.content.Context): string;
				}
			}
		}
	}
}

declare module net {
	export module gotev {
		export module uploadservice {
			export module schemehandlers {
				export class SchemeHandler {
					public static class: java.lang.Class<net.gotev.uploadservice.schemehandlers.SchemeHandler>;
					/**
					 * Constructs a new instance of the net.gotev.uploadservice.schemehandlers.SchemeHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						init(param0: string): void;
						size(param0: globalAndroid.content.Context): number;
						stream(param0: globalAndroid.content.Context): java.io.InputStream;
						contentType(param0: globalAndroid.content.Context): string;
						name(param0: globalAndroid.content.Context): string;
						delete(param0: globalAndroid.content.Context): boolean;
					});
					public constructor();
					public init(param0: string): void;
					public size(param0: globalAndroid.content.Context): number;
					public stream(param0: globalAndroid.content.Context): java.io.InputStream;
					public delete(param0: globalAndroid.content.Context): boolean;
					public name(param0: globalAndroid.content.Context): string;
					public contentType(param0: globalAndroid.content.Context): string;
				}
			}
		}
	}
}

//Generics information:
//net.gotev.uploadservice.HttpUploadRequest:1
//net.gotev.uploadservice.UploadRequest:1
//net.gotev.uploadservice.persistence.Persistable.Creator:1

