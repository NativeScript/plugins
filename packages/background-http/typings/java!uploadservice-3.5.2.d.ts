/* tslint:disable */
declare module net {
    export module gotev {
        export module uploadservice {
            export class BinaryUploadRequest extends net.gotev.uploadservice.HttpUploadRequest<net.gotev.uploadservice.BinaryUploadRequest> {
                public static class: java.lang.Class<net.gotev.uploadservice.BinaryUploadRequest>;
                public addParameter(param0: string, param1: string): net.gotev.uploadservice.BinaryUploadRequest;
                public constructor(param0: globalAndroid.content.Context, param1: string);
                public addArrayParameter(param0: string, param1: native.Array<string>): any;
                public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
                public startUpload(): string;
                public addArrayParameter(param0: string, param1: native.Array<string>): net.gotev.uploadservice.BinaryUploadRequest;
                public addArrayParameter(param0: string, param1: java.util.List<string>): net.gotev.uploadservice.BinaryUploadRequest;
                public setFileToUpload(param0: string): net.gotev.uploadservice.BinaryUploadRequest;
                public getTaskClass(): java.lang.Class<any>;
                public addArrayParameter(param0: string, param1: java.util.List<string>): any;
                public addParameter(param0: string, param1: string): any;
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class BinaryUploadTask extends net.gotev.uploadservice.HttpUploadTask {
                public static class: java.lang.Class<net.gotev.uploadservice.BinaryUploadTask>;
                public onBodyReady(param0: net.gotev.uploadservice.http.BodyWriter): void;
                public run(): void;
                public onBytesWritten(param0: number): void;
                public onSuccessfulUpload(): void;
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
            export class BroadcastData extends java.lang.Object implements globalAndroid.os.Parcelable {
                public static class: java.lang.Class<net.gotev.uploadservice.BroadcastData>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.BroadcastData>;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public getException(): java.lang.Exception;
                public getUploadInfo(): net.gotev.uploadservice.UploadInfo;
                public getIntent(): globalAndroid.content.Intent;
                public setStatus(param0: net.gotev.uploadservice.BroadcastData.Status): net.gotev.uploadservice.BroadcastData;
                public describeContents(): number;
                public setUploadInfo(param0: net.gotev.uploadservice.UploadInfo): net.gotev.uploadservice.BroadcastData;
                public getServerResponse(): net.gotev.uploadservice.ServerResponse;
                public getStatus(): net.gotev.uploadservice.BroadcastData.Status;
                public setException(param0: java.lang.Exception): net.gotev.uploadservice.BroadcastData;
                public setServerResponse(param0: net.gotev.uploadservice.ServerResponse): net.gotev.uploadservice.BroadcastData;
                public constructor();
            }
            export module BroadcastData {
                export class Status {
                    public static class: java.lang.Class<net.gotev.uploadservice.BroadcastData.Status>;
                    public static IN_PROGRESS: net.gotev.uploadservice.BroadcastData.Status;
                    public static ERROR: net.gotev.uploadservice.BroadcastData.Status;
                    public static COMPLETED: net.gotev.uploadservice.BroadcastData.Status;
                    public static CANCELLED: net.gotev.uploadservice.BroadcastData.Status;
                    public static values(): native.Array<net.gotev.uploadservice.BroadcastData.Status>;
                    public static valueOf(param0: string): net.gotev.uploadservice.BroadcastData.Status;
                    public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                }
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class BuildConfig extends java.lang.Object {
                public static class: java.lang.Class<net.gotev.uploadservice.BuildConfig>;
                public static DEBUG: boolean;
                public static APPLICATION_ID: string;
                public static BUILD_TYPE: string;
                public static FLAVOR: string;
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
            export class ContentType extends java.lang.Object {
                public static class: java.lang.Class<net.gotev.uploadservice.ContentType>;
                public static APPLICATION_ENVOY: string;
                public static APPLICATION_FRACTALS: string;
                public static APPLICATION_FUTURESPLASH: string;
                public static APPLICATION_HTA: string;
                public static APPLICATION_INTERNET_PROPERTY_STREAM: string;
                public static APPLICATION_MAC_BINHEX40: string;
                public static APPLICATION_MS_WORD: string;
                public static APPLICATION_OCTET_STREAM: string;
                public static APPLICATION_ODA: string;
                public static APPLICATION_OLESCRIPT: string;
                public static APPLICATION_PDF: string;
                public static APPLICATION_PICS_RULES: string;
                public static APPLICATION_PKCS10: string;
                public static APPLICATION_PKIX_CRL: string;
                public static APPLICATION_POSTSCRIPT: string;
                public static APPLICATION_RTF: string;
                public static APPLICATION_SETPAY: string;
                public static APPLICATION_SETREG: string;
                public static APPLICATION_MS_EXCEL: string;
                public static APPLICATION_MS_OUTLOOK: string;
                public static APPLICATION_MS_PKICERTSTORE: string;
                public static APPLICATION_MS_PKISECCAT: string;
                public static APPLICATION_MS_PKISTL: string;
                public static APPLICATION_MS_POWERPOINT: string;
                public static APPLICATION_MS_PROJECT: string;
                public static APPLICATION_MS_WORKS: string;
                public static APPLICATION_WINHLP: string;
                public static APPLICATION_BCPIO: string;
                public static APPLICATION_CDF: string;
                public static APPLICATION_Z: string;
                public static APPLICATION_TGZ: string;
                public static APPLICATION_CPIO: string;
                public static APPLICATION_CSH: string;
                public static APPLICATION_DIRECTOR: string;
                public static APPLICATION_DVI: string;
                public static APPLICATION_GTAR: string;
                public static APPLICATION_GZIP: string;
                public static APPLICATION_HDF: string;
                public static APPLICATION_INTERNET_SIGNUP: string;
                public static APPLICATION_IPHONE: string;
                public static APPLICATION_JAVASCRIPT: string;
                public static APPLICATION_LATEX: string;
                public static APPLICATION_MS_ACCESS: string;
                public static APPLICATION_MS_CARD_FILE: string;
                public static APPLICATION_MS_CLIP: string;
                public static APPLICATION_MS_DOWNLOAD: string;
                public static APPLICATION_MS_MEDIAVIEW: string;
                public static APPLICATION_MS_METAFILE: string;
                public static APPLICATION_MS_MONEY: string;
                public static APPLICATION_MS_PUBLISHER: string;
                public static APPLICATION_MS_SCHEDULE: string;
                public static APPLICATION_MS_TERMINAL: string;
                public static APPLICATION_MS_WRITE: string;
                public static APPLICATION_NET_CDF: string;
                public static APPLICATION_PERFMON: string;
                public static APPLICATION_PKCS_12: string;
                public static APPLICATION_PKCS_7_CERTIFICATES: string;
                public static APPLICATION_PKCS_7_CERTREQRESP: string;
                public static APPLICATION_PKCS_7_MIME: string;
                public static APPLICATION_PKCS_7_SIGNATURE: string;
                public static APPLICATION_SH: string;
                public static APPLICATION_SHAR: string;
                public static APPLICATION_SHOCKWAVE_FLASH: string;
                public static APPLICATION_STUFFIT: string;
                public static APPLICATION_SV4CPIO: string;
                public static APPLICATION_SV4CRC: string;
                public static APPLICATION_TAR: string;
                public static APPLICATION_TCL: string;
                public static APPLICATION_TEX: string;
                public static APPLICATION_TEXINFO: string;
                public static APPLICATION_TROFF: string;
                public static APPLICATION_TROFF_MAN: string;
                public static APPLICATION_TROFF_ME: string;
                public static APPLICATION_TROFF_MS: string;
                public static APPLICATION_USTAR: string;
                public static APPLICATION_WAIS_SOURCE: string;
                public static APPLICATION_X509_CA_CERT: string;
                public static APPLICATION_PKO: string;
                public static APPLICATION_ZIP: string;
                public static APPLICATION_XML: string;
                public static AUDIO_BASIC: string;
                public static AUDIO_MID: string;
                public static AUDIO_MPEG: string;
                public static AUDIO_AIFF: string;
                public static AUDIO_M3U: string;
                public static AUDIO_REAL_AUDIO: string;
                public static AUDIO_WAV: string;
                public static IMAGE_BMP: string;
                public static IMAGE_COD: string;
                public static IMAGE_GIF: string;
                public static IMAGE_IEF: string;
                public static IMAGE_JPEG: string;
                public static IMAGE_PIPEG: string;
                public static IMAGE_SVG: string;
                public static IMAGE_TIFF: string;
                public static IMAGE_CMU_RASTER: string;
                public static IMAGE_CMX: string;
                public static IMAGE_ICO: string;
                public static IMAGE_PORTABLE_ANYMAP: string;
                public static IMAGE_PORTABLE_BITMAP: string;
                public static IMAGE_PORTABLE_GRAYMAP: string;
                public static IMAGE_PORTABLE_PIXMAP: string;
                public static IMAGE_XRGB: string;
                public static IMAGE_XBITMAP: string;
                public static IMAGE_XPIXMAP: string;
                public static IMAGE_XWINDOWDUMP: string;
                public static TEXT_CSS: string;
                public static TEXT_CSV: string;
                public static TEXT_H323: string;
                public static TEXT_HTML: string;
                public static TEXT_IULS: string;
                public static TEXT_PLAIN: string;
                public static TEXT_RICHTEXT: string;
                public static TEXT_SCRIPTLET: string;
                public static TEXT_TAB_SEPARATED_VALUES: string;
                public static TEXT_VIEWVIEW: string;
                public static TEXT_COMPONENT: string;
                public static TEXT_SETEXT: string;
                public static TEXT_VCARD: string;
                public static TEXT_XML: string;
                public static VIDEO_MPEG: string;
                public static VIDEO_MPEG4: string;
                public static VIDEO_QUICKTIME: string;
                public static VIDEO_LA_ASF: string;
                public static VIDEO_MS_ASF: string;
                public static VIDEO_AVI: string;
                public static VIDEO_MOVIE: string;
                public static autoDetect(param0: string): string;
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class DefaultLoggerDelegate extends java.lang.Object implements net.gotev.uploadservice.Logger.LoggerDelegate {
                public static class: java.lang.Class<net.gotev.uploadservice.DefaultLoggerDelegate>;
                public info(param0: string, param1: string): void;
                public debug(param0: string, param1: string): void;
                public error(param0: string, param1: string, param2: java.lang.Throwable): void;
                public error(param0: string, param1: string): void;
                public constructor();
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export abstract class HttpUploadRequest<B>  extends net.gotev.uploadservice.UploadRequest<any> {
                public static class: java.lang.Class<net.gotev.uploadservice.HttpUploadRequest<any>>;
                public httpParams: net.gotev.uploadservice.HttpUploadTaskParameters;
                public addHeader(param0: string, param1: string): any;
                public addArrayParameter(param0: string, param1: native.Array<string>): any;
                public setCustomUserAgent(param0: string): any;
                public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
                public setBasicAuth(param0: string, param1: string): any;
                public addArrayParameter(param0: string, param1: java.util.List<string>): any;
                public addParameter(param0: string, param1: string): any;
                public setUsesFixedLengthStreamingMode(param0: boolean): any;
                public initializeIntent(param0: globalAndroid.content.Intent): void;
                public setMethod(param0: string): any;
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export abstract class HttpUploadTask extends net.gotev.uploadservice.UploadTask implements net.gotev.uploadservice.http.HttpConnection.RequestBodyDelegate, net.gotev.uploadservice.http.BodyWriter.OnStreamWriteListener {
                public static class: java.lang.Class<net.gotev.uploadservice.HttpUploadTask>;
                public httpParams: net.gotev.uploadservice.HttpUploadTaskParameters;
                public onBodyReady(param0: net.gotev.uploadservice.http.BodyWriter): void;
                public init(param0: net.gotev.uploadservice.UploadService, param1: globalAndroid.content.Intent): void;
                public run(): void;
                public onBytesWritten(param0: number): void;
                public upload(): void;
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
            export class HttpUploadTaskParameters extends java.lang.Object implements globalAndroid.os.Parcelable {
                public static class: java.lang.Class<net.gotev.uploadservice.HttpUploadTaskParameters>;
                public static PARAM_HTTP_TASK_PARAMETERS: string;
                public customUserAgent: string;
                public method: string;
                public usesFixedLengthStreamingMode: boolean;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.HttpUploadTaskParameters>;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public getRequestParameters(): java.util.ArrayList<net.gotev.uploadservice.NameValue>;
                public isCustomUserAgentDefined(): boolean;
                public getRequestHeaders(): java.util.ArrayList<net.gotev.uploadservice.NameValue>;
                public describeContents(): number;
                public addHeader(param0: string, param1: string): net.gotev.uploadservice.HttpUploadTaskParameters;
                public addParameter(param0: string, param1: string): net.gotev.uploadservice.HttpUploadTaskParameters;
                public constructor();
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class Logger extends java.lang.Object {
                public static class: java.lang.Class<net.gotev.uploadservice.Logger>;
                public static resetLoggerDelegate(): void;
                public static setLoggerDelegate(param0: net.gotev.uploadservice.Logger.LoggerDelegate): void;
                public static debug(param0: string, param1: string): void;
                public static info(param0: string, param1: string): void;
                public static error(param0: string, param1: string, param2: java.lang.Throwable): void;
                public static setLogLevel(param0: net.gotev.uploadservice.Logger.LogLevel): void;
                public static error(param0: string, param1: string): void;
            }
            export module Logger {
                export class LogLevel {
                    public static class: java.lang.Class<net.gotev.uploadservice.Logger.LogLevel>;
                    public static DEBUG: net.gotev.uploadservice.Logger.LogLevel;
                    public static INFO: net.gotev.uploadservice.Logger.LogLevel;
                    public static ERROR: net.gotev.uploadservice.Logger.LogLevel;
                    public static OFF: net.gotev.uploadservice.Logger.LogLevel;
                    public static values(): native.Array<net.gotev.uploadservice.Logger.LogLevel>;
                    public static valueOf(param0: string): net.gotev.uploadservice.Logger.LogLevel;
                    public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                }
                export class LoggerDelegate extends java.lang.Object {
                    public static class: java.lang.Class<net.gotev.uploadservice.Logger.LoggerDelegate>;
                    /**
                     * Constructs a new instance of the net.gotev.uploadservice.Logger$LoggerDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        error(param0: string, param1: string): void;
                        error(param0: string, param1: string, param2: java.lang.Throwable): void;
                        debug(param0: string, param1: string): void;
                        info(param0: string, param1: string): void;
                    });
                    public constructor();
                    public info(param0: string, param1: string): void;
                    public error(param0: string, param1: string): void;
                    public debug(param0: string, param1: string): void;
                    public error(param0: string, param1: string, param2: java.lang.Throwable): void;
                }
                export class SingletonHolder extends java.lang.Object {
                    public static class: java.lang.Class<net.gotev.uploadservice.Logger.SingletonHolder>;
                }
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class MultipartUploadRequest extends net.gotev.uploadservice.HttpUploadRequest<net.gotev.uploadservice.MultipartUploadRequest> {
                public static class: java.lang.Class<net.gotev.uploadservice.MultipartUploadRequest>;
                public addFileToUpload(param0: string, param1: string): net.gotev.uploadservice.MultipartUploadRequest;
                public constructor(param0: globalAndroid.content.Context, param1: string);
                public addFileToUpload(param0: string, param1: string, param2: string, param3: string): net.gotev.uploadservice.MultipartUploadRequest;
                public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
                public addFileToUpload(param0: string, param1: string, param2: string): net.gotev.uploadservice.MultipartUploadRequest;
                public getTaskClass(): java.lang.Class<any>;
                public setUtf8Charset(): net.gotev.uploadservice.MultipartUploadRequest;
                public initializeIntent(param0: globalAndroid.content.Intent): void;
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class MultipartUploadTask extends net.gotev.uploadservice.HttpUploadTask {
                public static class: java.lang.Class<net.gotev.uploadservice.MultipartUploadTask>;
                public static PARAM_UTF8_CHARSET: string;
                public static PROPERTY_REMOTE_FILE_NAME: string;
                public static PROPERTY_CONTENT_TYPE: string;
                public static PROPERTY_PARAM_NAME: string;
                public onBodyReady(param0: net.gotev.uploadservice.http.BodyWriter): void;
                public init(param0: net.gotev.uploadservice.UploadService, param1: globalAndroid.content.Intent): void;
                public run(): void;
                public onBytesWritten(param0: number): void;
                public onSuccessfulUpload(): void;
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
            export class NameValue extends java.lang.Object implements globalAndroid.os.Parcelable {
                public static class: java.lang.Class<net.gotev.uploadservice.NameValue>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.NameValue>;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public static header(param0: string, param1: string): net.gotev.uploadservice.NameValue;
                public getValue(): string;
                public equals(param0: any): boolean;
                public describeContents(): number;
                public getName(): string;
                public constructor(param0: string, param1: string);
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class Placeholders extends java.lang.Object {
                public static class: java.lang.Class<net.gotev.uploadservice.Placeholders>;
                public static ELAPSED_TIME: string;
                public static UPLOAD_RATE: string;
                public static PROGRESS: string;
                public static UPLOADED_FILES: string;
                public static TOTAL_FILES: string;
                public static replace(param0: string, param1: net.gotev.uploadservice.UploadInfo): string;
                public constructor();
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class ServerResponse extends java.lang.Object implements globalAndroid.os.Parcelable {
                public static class: java.lang.Class<net.gotev.uploadservice.ServerResponse>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.ServerResponse>;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public constructor(param0: number, param1: native.Array<number>, param2: java.util.LinkedHashMap<string,string>);
                public getBodyAsString(): string;
                public getBody(): native.Array<number>;
                public describeContents(): number;
                public getHeaders(): java.util.LinkedHashMap<string,string>;
                public constructor(param0: globalAndroid.os.Parcel);
                public getHttpCode(): number;
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class UploadFile extends java.lang.Object implements globalAndroid.os.Parcelable {
                public static class: java.lang.Class<net.gotev.uploadservice.UploadFile>;
                public path: string;
                public handler: net.gotev.uploadservice.schemehandlers.SchemeHandler;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.UploadFile>;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public getProperty(param0: string, param1: string): string;
                public getStream(param0: globalAndroid.content.Context): java.io.InputStream;
                public getPath(): string;
                public constructor(param0: string);
                public getContentType(param0: globalAndroid.content.Context): string;
                public length(param0: globalAndroid.content.Context): number;
                public getProperty(param0: string): string;
                public hashCode(): number;
                public describeContents(): number;
                public equals(param0: any): boolean;
                public getName(param0: globalAndroid.content.Context): string;
                public setProperty(param0: string, param1: string): void;
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class UploadInfo extends java.lang.Object implements globalAndroid.os.Parcelable {
                public static class: java.lang.Class<net.gotev.uploadservice.UploadInfo>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.UploadInfo>;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public getElapsedTimeString(): string;
                public getUploadRate(): number;
                public getUploadedBytes(): number;
                public constructor(param0: string, param1: number, param2: number, param3: number, param4: number, param5: java.util.List<string>, param6: java.util.List<string>);
                public getProgressPercent(): number;
                public getTotalBytes(): number;
                public constructor(param0: string);
                public getUploadId(): string;
                public getStartTime(): number;
                public setNotificationID(param0: number): void;
                public getSuccessfullyUploadedFiles(): java.util.ArrayList<string>;
                public getNumberOfRetries(): number;
                public getElapsedTime(): number;
                public getUploadRateString(): string;
                public getFilesLeft(): java.util.ArrayList<string>;
                public describeContents(): number;
                public getNotificationID(): java.lang.Integer;
                public getTotalFiles(): number;
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class UploadNotificationAction extends java.lang.Object implements globalAndroid.os.Parcelable {
                public static class: java.lang.Class<net.gotev.uploadservice.UploadNotificationAction>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.UploadNotificationAction>;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public static from(param0: androidx.core.app.NotificationCompat.Action): net.gotev.uploadservice.UploadNotificationAction;
                public hashCode(): number;
                public describeContents(): number;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: string, param2: globalAndroid.app.PendingIntent);
                public constructor(param0: globalAndroid.os.Parcel);
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class UploadNotificationConfig extends java.lang.Object implements globalAndroid.os.Parcelable {
                public static class: java.lang.Class<net.gotev.uploadservice.UploadNotificationConfig>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.UploadNotificationConfig>;
                public setIconForAllStatuses(param0: number): net.gotev.uploadservice.UploadNotificationConfig;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public setClickIntentForAllStatuses(param0: globalAndroid.app.PendingIntent): net.gotev.uploadservice.UploadNotificationConfig;
                public getNotificationChannelId(): string;
                public getProgress(): net.gotev.uploadservice.UploadNotificationStatusConfig;
                public getError(): net.gotev.uploadservice.UploadNotificationStatusConfig;
                public addActionForAllStatuses(param0: net.gotev.uploadservice.UploadNotificationAction): net.gotev.uploadservice.UploadNotificationConfig;
                public setClearOnActionForAllStatuses(param0: boolean): net.gotev.uploadservice.UploadNotificationConfig;
                public isRingToneEnabled(): boolean;
                public setRingToneEnabled(param0: java.lang.Boolean): net.gotev.uploadservice.UploadNotificationConfig;
                public setTitleForAllStatuses(param0: string): net.gotev.uploadservice.UploadNotificationConfig;
                public getCancelled(): net.gotev.uploadservice.UploadNotificationStatusConfig;
                public setNotificationChannelId(param0: string): net.gotev.uploadservice.UploadNotificationConfig;
                public constructor(param0: globalAndroid.os.Parcel);
                public constructor();
                public getCompleted(): net.gotev.uploadservice.UploadNotificationStatusConfig;
                public setIconColorForAllStatuses(param0: number): net.gotev.uploadservice.UploadNotificationConfig;
                public setLargeIconForAllStatuses(param0: globalAndroid.graphics.Bitmap): net.gotev.uploadservice.UploadNotificationConfig;
                public describeContents(): number;
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class UploadNotificationStatusConfig extends java.lang.Object implements globalAndroid.os.Parcelable {
                public static class: java.lang.Class<net.gotev.uploadservice.UploadNotificationStatusConfig>;
                public title: string;
                public message: string;
                public autoClear: boolean;
                public iconResourceID: number;
                public largeIcon: globalAndroid.graphics.Bitmap;
                public iconColorResourceID: number;
                public clickIntent: globalAndroid.app.PendingIntent;
                public clearOnAction: boolean;
                public actions: java.util.ArrayList<net.gotev.uploadservice.UploadNotificationAction>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.UploadNotificationStatusConfig>;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public describeContents(): number;
                public constructor(param0: globalAndroid.os.Parcel);
                public constructor();
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export abstract class UploadRequest<B>  extends java.lang.Object {
                public static class: java.lang.Class<net.gotev.uploadservice.UploadRequest<any>>;
                public context: globalAndroid.content.Context;
                public params: net.gotev.uploadservice.UploadTaskParameters;
                public delegate: net.gotev.uploadservice.UploadStatusDelegate;
                public setNotificationConfig(param0: net.gotev.uploadservice.UploadNotificationConfig): B;
                public setDelegate(param0: net.gotev.uploadservice.UploadStatusDelegate): B;
                public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
                public setAutoDeleteFilesAfterSuccessfulUpload(param0: boolean): B;
                public startUpload(): string;
                public getTaskClass(): java.lang.Class<any>;
                public self(): B;
                public setMaxRetries(param0: number): B;
                public initializeIntent(param0: globalAndroid.content.Intent): void;
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class UploadService extends globalAndroid.app.Service {
                public static class: java.lang.Class<net.gotev.uploadservice.UploadService>;
                public static UPLOAD_POOL_SIZE: number;
                public static KEEP_ALIVE_TIME_IN_SECONDS: number;
                public static IDLE_TIMEOUT: number;
                public static EXECUTE_IN_FOREGROUND: boolean;
                public static NAMESPACE: string;
                public static HTTP_STACK: net.gotev.uploadservice.http.HttpStack;
                public static BUFFER_SIZE: number;
                public static INITIAL_RETRY_WAIT_TIME: number;
                public static BACKOFF_MULTIPLIER: number;
                public static MAX_RETRY_WAIT_TIME: number;
                public static UPLOAD_NOTIFICATION_BASE_ID: number;
                public static PROGRESS_REPORT_INTERVAL: number;
                public static PARAM_TASK_PARAMETERS: string;
                public static PARAM_TASK_CLASS: string;
                public static PARAM_BROADCAST_DATA: string;
                public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
                public static stop(param0: globalAndroid.content.Context, param1: boolean): boolean;
                public constructor();
                public taskCompleted(param0: string): void;
                public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
                public static stop(param0: globalAndroid.content.Context): boolean;
                public static stopAllUploads(): void;
                public constructor(param0: globalAndroid.content.Context);
                public static getActionBroadcast(): string;
                public onCreate(): void;
                public static getTaskList(): java.util.List<string>;
                public onDestroy(): void;
                public holdForegroundNotification(param0: string, param1: globalAndroid.app.Notification): boolean;
                public static getActionUpload(): string;
                public static setUploadStatusDelegate(param0: string, param1: net.gotev.uploadservice.UploadStatusDelegate): void;
                public static getUploadStatusDelegate(param0: string): net.gotev.uploadservice.UploadStatusDelegate;
                public onTrimMemory(param0: number): void;
                public static stopUpload(param0: string): void;
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class UploadServiceBroadcastReceiver extends globalAndroid.content.BroadcastReceiver implements net.gotev.uploadservice.UploadStatusDelegate {
                public static class: java.lang.Class<net.gotev.uploadservice.UploadServiceBroadcastReceiver>;
                public onError(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo, param2: net.gotev.uploadservice.ServerResponse, param3: java.lang.Exception): void;
                public onCompleted(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo, param2: net.gotev.uploadservice.ServerResponse): void;
                public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
                public register(param0: globalAndroid.content.Context): void;
                public onProgress(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo): void;
                public onCancelled(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo): void;
                public shouldAcceptEventFrom(param0: net.gotev.uploadservice.UploadInfo): boolean;
                public constructor();
                public unregister(param0: globalAndroid.content.Context): void;
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class UploadServiceSingleBroadcastReceiver extends net.gotev.uploadservice.UploadServiceBroadcastReceiver {
                public static class: java.lang.Class<net.gotev.uploadservice.UploadServiceSingleBroadcastReceiver>;
                public constructor(param0: net.gotev.uploadservice.UploadStatusDelegate);
                public setUploadID(param0: string): void;
                public onError(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo, param2: net.gotev.uploadservice.ServerResponse, param3: java.lang.Exception): void;
                public onCompleted(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo, param2: net.gotev.uploadservice.ServerResponse): void;
                public onProgress(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo): void;
                public onCancelled(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo): void;
                public shouldAcceptEventFrom(param0: net.gotev.uploadservice.UploadInfo): boolean;
                public constructor();
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class UploadStatusDelegate extends java.lang.Object {
                public static class: java.lang.Class<net.gotev.uploadservice.UploadStatusDelegate>;
                /**
                 * Constructs a new instance of the net.gotev.uploadservice.UploadStatusDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    onProgress(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo): void;
                    onError(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo, param2: net.gotev.uploadservice.ServerResponse, param3: java.lang.Exception): void;
                    onCompleted(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo, param2: net.gotev.uploadservice.ServerResponse): void;
                    onCancelled(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo): void;
                });
                public constructor();
                public onError(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo, param2: net.gotev.uploadservice.ServerResponse, param3: java.lang.Exception): void;
                public onCompleted(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo, param2: net.gotev.uploadservice.ServerResponse): void;
                public onProgress(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo): void;
                public onCancelled(param0: globalAndroid.content.Context, param1: net.gotev.uploadservice.UploadInfo): void;
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export abstract class UploadTask extends java.lang.Object implements java.lang.Runnable {
                public static class: java.lang.Class<net.gotev.uploadservice.UploadTask>;
                public static TASK_COMPLETED_SUCCESSFULLY: number;
                public static EMPTY_RESPONSE: native.Array<number>;
                public service: net.gotev.uploadservice.UploadService;
                public params: net.gotev.uploadservice.UploadTaskParameters;
                public shouldContinue: boolean;
                public totalBytes: number;
                public uploadedBytes: number;
                public broadcastProgress(param0: number, param1: number): void;
                public broadcastCompleted(param0: net.gotev.uploadservice.ServerResponse): void;
                public setLastProgressNotificationTime(param0: number): net.gotev.uploadservice.UploadTask;
                public addAllFilesToSuccessfullyUploadedFiles(): void;
                public constructor();
                public addSuccessfullyUploadedFile(param0: net.gotev.uploadservice.UploadFile): void;
                public init(param0: net.gotev.uploadservice.UploadService, param1: globalAndroid.content.Intent): void;
                public run(): void;
                public setNotificationId(param0: number): net.gotev.uploadservice.UploadTask;
                public onSuccessfulUpload(): void;
                public cancel(): void;
                public upload(): void;
                public broadcastCancelled(): void;
                public getSuccessfullyUploadedFiles(): java.util.List<string>;
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export class UploadTaskParameters extends java.lang.Object implements globalAndroid.os.Parcelable {
                public static class: java.lang.Class<net.gotev.uploadservice.UploadTaskParameters>;
                public id: string;
                public serverUrl: string;
                public autoDeleteSuccessfullyUploadedFiles: boolean;
                public notificationConfig: net.gotev.uploadservice.UploadNotificationConfig;
                public files: java.util.ArrayList<net.gotev.uploadservice.UploadFile>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<net.gotev.uploadservice.UploadTaskParameters>;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public setMaxRetries(param0: number): net.gotev.uploadservice.UploadTaskParameters;
                public describeContents(): number;
                public getMaxRetries(): number;
                public constructor();
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export module http {
                export abstract class BodyWriter extends java.lang.Object {
                    public static class: java.lang.Class<net.gotev.uploadservice.http.BodyWriter>;
                    public write(param0: native.Array<number>): void;
                    public constructor();
                    public writeStream(param0: java.io.InputStream, param1: net.gotev.uploadservice.http.BodyWriter.OnStreamWriteListener): void;
                    public flush(): void;
                    public write(param0: native.Array<number>, param1: number): void;
                }
                export module BodyWriter {
                    export class OnStreamWriteListener extends java.lang.Object {
                        public static class: java.lang.Class<net.gotev.uploadservice.http.BodyWriter.OnStreamWriteListener>;
                        /**
                         * Constructs a new instance of the net.gotev.uploadservice.http.BodyWriter$OnStreamWriteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
            export module http {
                export class HttpConnection extends java.lang.Object {
                    public static class: java.lang.Class<net.gotev.uploadservice.http.HttpConnection>;
                    /**
                     * Constructs a new instance of the net.gotev.uploadservice.http.HttpConnection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        setHeaders(param0: java.util.List<net.gotev.uploadservice.NameValue>): net.gotev.uploadservice.http.HttpConnection;
                        setTotalBodyBytes(param0: number, param1: boolean): net.gotev.uploadservice.http.HttpConnection;
                        getResponse(param0: net.gotev.uploadservice.http.HttpConnection.RequestBodyDelegate): net.gotev.uploadservice.ServerResponse;
                        close(): void;
                    });
                    public constructor();
                    public setTotalBodyBytes(param0: number, param1: boolean): net.gotev.uploadservice.http.HttpConnection;
                    public close(): void;
                    public setHeaders(param0: java.util.List<net.gotev.uploadservice.NameValue>): net.gotev.uploadservice.http.HttpConnection;
                    public getResponse(param0: net.gotev.uploadservice.http.HttpConnection.RequestBodyDelegate): net.gotev.uploadservice.ServerResponse;
                }
                export module HttpConnection {
                    export class RequestBodyDelegate extends java.lang.Object {
                        public static class: java.lang.Class<net.gotev.uploadservice.http.HttpConnection.RequestBodyDelegate>;
                        /**
                         * Constructs a new instance of the net.gotev.uploadservice.http.HttpConnection$RequestBodyDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onBodyReady(param0: net.gotev.uploadservice.http.BodyWriter): void;
                        });
                        public constructor();
                        public onBodyReady(param0: net.gotev.uploadservice.http.BodyWriter): void;
                    }
                }
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export module http {
                export class HttpStack extends java.lang.Object {
                    public static class: java.lang.Class<net.gotev.uploadservice.http.HttpStack>;
                    /**
                     * Constructs a new instance of the net.gotev.uploadservice.http.HttpStack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        createNewConnection(param0: string, param1: string): net.gotev.uploadservice.http.HttpConnection;
                    });
                    public constructor();
                    public createNewConnection(param0: string, param1: string): net.gotev.uploadservice.http.HttpConnection;
                }
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export module http {
                export module impl {
                    export class HurlBodyWriter extends net.gotev.uploadservice.http.BodyWriter {
                        public static class: java.lang.Class<net.gotev.uploadservice.http.impl.HurlBodyWriter>;
                        public constructor(param0: java.io.OutputStream);
                        public constructor();
                        public flush(): void;
                        public write(param0: native.Array<number>): void;
                        public write(param0: native.Array<number>, param1: number): void;
                    }
                }
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export module http {
                export module impl {
                    export class HurlStack extends java.lang.Object implements net.gotev.uploadservice.http.HttpStack {
                        public static class: java.lang.Class<net.gotev.uploadservice.http.impl.HurlStack>;
                        public constructor(param0: boolean, param1: boolean, param2: number, param3: number);
                        public constructor();
                        public createNewConnection(param0: string, param1: string): net.gotev.uploadservice.http.HttpConnection;
                    }
                }
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export module http {
                export module impl {
                    export class HurlStackConnection extends java.lang.Object implements net.gotev.uploadservice.http.HttpConnection {
                        public static class: java.lang.Class<net.gotev.uploadservice.http.impl.HurlStackConnection>;
                        public getResponse(param0: net.gotev.uploadservice.http.HttpConnection.RequestBodyDelegate): net.gotev.uploadservice.ServerResponse;
                        public close(): void;
                        public constructor(param0: string, param1: string, param2: boolean, param3: boolean, param4: number, param5: number);
                        public setHeaders(param0: java.util.List<net.gotev.uploadservice.NameValue>): net.gotev.uploadservice.http.HttpConnection;
                        public setTotalBodyBytes(param0: number, param1: boolean): net.gotev.uploadservice.http.HttpConnection;
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
                export class ContentSchemeHandler extends java.lang.Object implements net.gotev.uploadservice.schemehandlers.SchemeHandler {
                    public static class: java.lang.Class<net.gotev.uploadservice.schemehandlers.ContentSchemeHandler>;
                    public getContentType(param0: globalAndroid.content.Context): string;
                    public init(param0: string): void;
                    public getName(param0: globalAndroid.content.Context): string;
                    public getLength(param0: globalAndroid.content.Context): number;
                    public getInputStream(param0: globalAndroid.content.Context): java.io.InputStream;
                }
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export module schemehandlers {
                export class FileSchemeHandler extends java.lang.Object implements net.gotev.uploadservice.schemehandlers.SchemeHandler {
                    public static class: java.lang.Class<net.gotev.uploadservice.schemehandlers.FileSchemeHandler>;
                    public getContentType(param0: globalAndroid.content.Context): string;
                    public init(param0: string): void;
                    public getName(param0: globalAndroid.content.Context): string;
                    public getLength(param0: globalAndroid.content.Context): number;
                    public getInputStream(param0: globalAndroid.content.Context): java.io.InputStream;
                }
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export module schemehandlers {
                export class SchemeHandler extends java.lang.Object {
                    public static class: java.lang.Class<net.gotev.uploadservice.schemehandlers.SchemeHandler>;
                    /**
                     * Constructs a new instance of the net.gotev.uploadservice.schemehandlers.SchemeHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        init(param0: string): void;
                        getLength(param0: globalAndroid.content.Context): number;
                        getInputStream(param0: globalAndroid.content.Context): java.io.InputStream;
                        getContentType(param0: globalAndroid.content.Context): string;
                        getName(param0: globalAndroid.content.Context): string;
                    });
                    public constructor();
                    public getContentType(param0: globalAndroid.content.Context): string;
                    public init(param0: string): void;
                    public getName(param0: globalAndroid.content.Context): string;
                    public getLength(param0: globalAndroid.content.Context): number;
                    public getInputStream(param0: globalAndroid.content.Context): java.io.InputStream;
                }
            }
        }
    }
}

declare module net {
    export module gotev {
        export module uploadservice {
            export module schemehandlers {
                export class SchemeHandlerFactory extends java.lang.Object {
                    public static class: java.lang.Class<net.gotev.uploadservice.schemehandlers.SchemeHandlerFactory>;
                    public get(param0: string): net.gotev.uploadservice.schemehandlers.SchemeHandler;
                    public static getInstance(): net.gotev.uploadservice.schemehandlers.SchemeHandlerFactory;
                    public isSupported(param0: string): boolean;
                }
                export module SchemeHandlerFactory {
                    export class LazyHolder extends java.lang.Object {
                        public static class: java.lang.Class<net.gotev.uploadservice.schemehandlers.SchemeHandlerFactory.LazyHolder>;
                    }
                }
            }
        }
    }
}

//Generics information:
//net.gotev.uploadservice.HttpUploadRequest:1
//net.gotev.uploadservice.UploadRequest:1