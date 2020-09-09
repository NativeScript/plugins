import { Observable, Application, knownFolders } from "@nativescript/core";
import * as common from "./index";

type Context = android.content.Context;
type ServerResponse = net.gotev.uploadservice.ServerResponse;
type UploadInfo = net.gotev.uploadservice.UploadInfo;
type UploadServiceBroadcastReceiver = net.gotev.uploadservice.UploadServiceBroadcastReceiver;

/* A snapshot-friendly, lazy-loaded class for ProgressReceiver BEGIN */
let ProgressReceiver: any;

function onProgressReceiverProgress(context: Context, uploadInfo: UploadInfo) {
    const uploadId = uploadInfo.getUploadId();
    const task = Task.fromId(uploadId);
    const totalBytes = uploadInfo.getTotalBytes();
    const currentBytes = uploadInfo.getUploadedBytes();
    task.setTotalUpload(totalBytes);
    task.setUpload(currentBytes);
    task.setStatus("uploading");
    task.notify(<common.ProgressEventData>{
        eventName: "progress",
        object: task,
        currentBytes: currentBytes,
        totalBytes: totalBytes
    });
}

function onProgressReceiverCancelled(context: Context, uploadInfo: UploadInfo) {
    const uploadId = uploadInfo.getUploadId();
    const task = Task.fromId(uploadId);
    task.setStatus("cancelled");
    task.notify({ eventName: "cancelled", object: task });
}

function onProgressReceiverError(context: Context, uploadInfo: UploadInfo, response: ServerResponse, error: java.lang.Exception) {
    const uploadId = uploadInfo.getUploadId();
    const task = Task.fromId(uploadId);
    task.setStatus("error");
    task.notify(<common.ErrorEventData>{
        eventName: "error",
        object: task,
        error,
        responseCode: response && typeof response.getHttpCode === 'function' ? response.getHttpCode() : -1,
        response
    });
}

function onProgressReceiverCompleted(context: Context, uploadInfo: UploadInfo, response: ServerResponse) {
    const uploadId = uploadInfo.getUploadId();
    const task = Task.fromId(uploadId);

    let totalUpload = uploadInfo.getTotalBytes();
    if (!totalUpload || !isFinite(totalUpload) || totalUpload <= 0) {
        totalUpload = 1;
    }
    task.setUpload(totalUpload);
    task.setTotalUpload(totalUpload);
    task.setStatus("complete");

    task.notify(<common.ProgressEventData>{
        eventName: "progress",
        object: task,
        currentBytes: totalUpload,
        totalBytes: totalUpload
    });
    task.notify(<common.ResultEventData>{
        eventName: "responded",
        object: task,
        data: response.getBodyAsString(),
        responseCode: response && typeof response.getHttpCode === 'function' ? response.getHttpCode() : -1
    });
    task.notify(<common.CompleteEventData>{
        eventName: "complete",
        object: task,
        responseCode: response && typeof response.getHttpCode === 'function' ? response.getHttpCode() : -1,
        response
    });
}

function initializeProgressReceiver() {
    if (ProgressReceiver) {
        return;
    }

    const zonedOnProgress = global.zonedCallback(onProgressReceiverProgress);
    const zonedOnCancelled = global.zonedCallback(onProgressReceiverCancelled);
    const zonedOnError = global.zonedCallback(onProgressReceiverError);
    const zonedOnCompleted = global.zonedCallback(onProgressReceiverCompleted);

    const temp: Partial<UploadServiceBroadcastReceiver> = {
        onProgress(context: Context, uploadInfo: UploadInfo) {
            zonedOnProgress(context, uploadInfo);
        },

        onCancelled(context: Context, uploadInfo: UploadInfo) {
            zonedOnCancelled(context, uploadInfo);
        },

        onError(context: Context, uploadInfo: UploadInfo, response: ServerResponse, error: java.lang.Exception) {
            zonedOnError(context, uploadInfo, response, error);
        },

        onCompleted(context: Context, uploadInfo: UploadInfo, serverResponse: ServerResponse) {
            zonedOnCompleted(context, uploadInfo, serverResponse);
        }
    };

    const ProgressReceiverImpl = (<any>net.gotev.uploadservice.UploadServiceBroadcastReceiver).extend(temp);

    ProgressReceiver = ProgressReceiverImpl as any;
}
/* ProgressReceiver END */

let hasNamespace = false;
function ensureUploadServiceNamespace() {
    if (!hasNamespace) {
        net.gotev.uploadservice.UploadService.NAMESPACE = Application.android.packageName;
        hasNamespace = true;
    }
}

let receiver: any;
function ensureReceiver() {
    if (!receiver) {
        const context = Application.android.context;
        initializeProgressReceiver();
        receiver = new ProgressReceiver();
        receiver.register(context);
    }
}

export function session(id: string) {
    // TODO: Cache.
    return new Session(id);
}

class ObservableBase extends Observable {
    protected notifyPropertyChanged(propertyName: string, value: any): void {
        this.notify({ object: this, eventName: Observable.propertyChangeEvent, propertyName: propertyName, value: value });
    }
}

class Session {
    private _id: string;

    constructor(id: string) {
        this._id = id;
    }

    public uploadFile(fileUri: string, options: common.Request): Task {
        return Task.create(this, fileUri, options);
    }

    public multipartUpload(params: Array<any>, options: common.Request): Task {
        return Task.createMultiPart(this, params, options);
    }

    get id(): string {
        return this._id;
    }
}

class Task extends ObservableBase {
    private static taskCount = 0;
    private static cache = {};

    private _session;
    private _id;

    private _upload: number;
    private _totalUpload: number;
    private _status: string;
    private _description: string;

    static create(session: Session, file: string, options: common.Request): Task {
        ensureUploadServiceNamespace();
        ensureReceiver();
        const taskId = session.id + "{" + ++Task.taskCount + "}";
        const request = getBinaryRequest(taskId, options, file);

        const task = Task.initTask(taskId, session, options);
        request.startUpload();

        Task.cache[task._id] = task;

        return task;
    }

    static createMultiPart(session: Session, params: Array<any>, options: common.Request): Task {
        ensureUploadServiceNamespace();
        ensureReceiver();
        const taskId = session.id + "{" + ++Task.taskCount + "}";
        const request = getMultipartRequest(taskId, options, params);
        const task = Task.initTask(taskId, session, options);

        request.startUpload();
        Task.cache[task._id] = task;
        return task;
    }

    private static initTask(taskId: string, session: Session, options: common.Request) {
        const task = new Task();
        task._session = session;
        task._id = taskId;

        task.setDescription(options.description);
        task.setUpload(0);
        task.setTotalUpload(1);
        task.setStatus("pending");

        return task;
    }

    static fromId(id: string): Task {
        return Task.cache[id];
    }

    get upload(): number {
        return this._upload;
    }

    get totalUpload(): number {
        return this._totalUpload;
    }

    get status(): string {
        return this._status;
    }

    get description(): string {
        return this._description;
    }

    get session(): Session {
        return this._session;
    }

    setTotalUpload(value: number) {
        this._totalUpload = value;
        this.notifyPropertyChanged("totalUpload", value);
    }

    setUpload(value: number) {
        this._upload = value;
        this.notifyPropertyChanged("upload", value);
    }

    setStatus(value: string) {
        this._status = value;
        this.notifyPropertyChanged("status", value);
    }

    setDescription(value: string) {
        this._description = value;
        this.notifyPropertyChanged("description", value);
    }
    cancel(): void {
        (<any>net).gotev.uploadservice.UploadService.stopUpload(this._id);
    }
}

function getBinaryRequest(taskId: string, options: common.Request, file: string) {
    const request = new net.gotev.uploadservice.BinaryUploadRequest(Application.android.context, taskId, options.url);

    request.setFileToUpload(file);
    setRequestOptions(request, options);

    return request;
}

function getMultipartRequest(taskId: string, options: common.Request, params: any[]) {
    const request = new net.gotev.uploadservice.MultipartUploadRequest(Application.android.context, taskId, options.url);

    for (let i = 0; i < params.length; i++) {
        const curParam = params[i];
        if (typeof curParam.name === 'undefined') {
            throw new Error("You must have a `name` value");
        }

        if (typeof curParam.filename === 'undefined') {
            request.addParameter(curParam.name.toString(), curParam.value.toString());
            continue;
        }

        let fileName = curParam.filename;
        if (fileName.startsWith("~/")) {
            fileName = fileName.replace("~/", knownFolders.currentApp().path + "/");
        }
        const destFileName = curParam.destFilename || fileName.substring(fileName.lastIndexOf('/') + 1, fileName.length);
        request.addFileToUpload(fileName, curParam.name, destFileName, curParam.mimeType);
    }

    const utf8 = options.utf8;

    if (utf8) {
        request.setUtf8Charset();
    }
    setRequestOptions(request, options);

    return request;
}

function setRequestOptions(request: any, options: common.Request) {
    const displayNotificationProgress = typeof options.androidDisplayNotificationProgress === "boolean" ? options.androidDisplayNotificationProgress : true;

    if (displayNotificationProgress) {
        const uploadNotificationConfig = new net.gotev.uploadservice.UploadNotificationConfig();
        const notificationTitle = typeof options.androidNotificationTitle === "string" ? options.androidNotificationTitle : 'File Upload';

        uploadNotificationConfig.setTitleForAllStatuses(notificationTitle);

        if (typeof options.androidRingToneEnabled === "boolean") {
            uploadNotificationConfig.setRingToneEnabled(new java.lang.Boolean(options.androidRingToneEnabled));
        }

        if (typeof options.androidAutoClearNotification === "boolean") {
            uploadNotificationConfig.getCompleted().autoClear = options.androidAutoClearNotification;
            uploadNotificationConfig.getCancelled().autoClear = options.androidAutoClearNotification;
            uploadNotificationConfig.getError().autoClear = options.androidAutoClearNotification;
        }

        if (typeof options.androidNotificationChannelID === "string" && options.androidNotificationChannelID) {
            uploadNotificationConfig.setNotificationChannelId(options.androidNotificationChannelID);
        }

        request.setNotificationConfig(uploadNotificationConfig);
    }
    const autoDeleteAfterUpload = typeof options.androidAutoDeleteAfterUpload === "boolean" ? options.androidAutoDeleteAfterUpload : false;
    if (autoDeleteAfterUpload) {
        request.setAutoDeleteFilesAfterSuccessfulUpload(true);
    }
    const maxRetryCount = typeof options.androidMaxRetries === "number" ? options.androidMaxRetries : undefined;
    if (maxRetryCount) {
        request.setMaxRetries(maxRetryCount);
    }
    const headers = options.headers;
    if (headers) {
        for (const header in headers) {
            const value = headers[header];
            if (value !== null && value !== void 0) {
                request.addHeader(header, value.toString());
            }
        }
    }

    request.setMethod(options.method ? options.method : "GET");
}
