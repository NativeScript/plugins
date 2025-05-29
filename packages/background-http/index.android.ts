import { Observable, Application, knownFolders, Utils } from '@nativescript/core';
import * as common from './index';

type Context = android.content.Context;
type ServerResponse = net.gotev.uploadservice.network.ServerResponse;
type UploadInfo = net.gotev.uploadservice.data.UploadInfo;
let didInit = false;
export function init() {
	if (didInit) {
		return;
	}
	initializeProgressReceiver();
	const callback = function (event) {
		const appContext: Context = Utils.android.getApplicationContext();
		const packageName = appContext.getPackageName();
		if (android.os.Build.VERSION.SDK_INT >= 26) {
			const channel = new android.app.NotificationChannel(packageName, `${packageName} Channel`, android.app.NotificationManager.IMPORTANCE_LOW);
			const manager = appContext.getSystemService(android.content.Context.NOTIFICATION_SERVICE) as android.app.NotificationManager;
			manager.createNotificationChannel(channel);
		}

		let isDebug = false;

		try {
			const BuildConfigClazz = java.lang.Class.forName(`${packageName}.BuildConfig`);
			const DEBUG = BuildConfigClazz.getDeclaredField('DEBUG');
			isDebug = Boolean(DEBUG.get(null));
		} catch (e) {}

		net.gotev.uploadservice.UploadServiceConfig.initialize(Utils.android.getApplication(), packageName, isDebug);

		new net.gotev.uploadservice.observer.request.GlobalRequestObserver(Utils.android.getApplication(), ProgressReceiver);
		didInit = true;
		Application.off('launch', callback);
	};
	Application.on('launch', callback);
}

/* A snapshot-friendly, lazy-loaded class for ProgressReceiver BEGIN */
let ProgressReceiver: any;

function onProgressReceiverProgress(context: Context, uploadInfo: UploadInfo) {
	const uploadId = uploadInfo.getUploadId();
	const task = Task.fromId(uploadId);
	const totalBytes = uploadInfo.getTotalBytes();
	const currentBytes = uploadInfo.getUploadedBytes();
	task.setTotalUpload(totalBytes);
	task.setUpload(currentBytes);
	task.setStatus('uploading');
	task.notify(<common.ProgressEventData>{
		eventName: 'progress',
		object: task,
		currentBytes: currentBytes,
		totalBytes: totalBytes,
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
	task.setStatus('complete');

	task.notify(<common.ProgressEventData>{
		eventName: 'progress',
		object: task,
		currentBytes: totalUpload,
		totalBytes: totalUpload,
	});
	task.notify(<common.ResultEventData>{
		eventName: 'responded',
		object: task,
		data: response.getBodyString(),
		responseCode: response && typeof response.getCode === 'function' ? response.getCode() : -1,
	});
	task.notify(<common.CompleteEventData>{
		eventName: 'complete',
		object: task,
		responseCode: response && typeof response.getCode === 'function' ? response.getCode() : -1,
		response,
	});
}

function onProgressReceiverCancelled(context: Context, uploadInfo: UploadInfo) {
	const uploadId = uploadInfo.getUploadId();
	const task = Task.fromId(uploadId);
	task.setStatus('cancelled');
	task.notify({ eventName: 'cancelled', object: task });
}

function onProgressReceiverError(context: Context, uploadInfo: UploadInfo, response: ServerResponse, error: java.lang.Exception) {
	const uploadId = uploadInfo.getUploadId();
	const task = Task.fromId(uploadId);
	task.setStatus('error');
	task.notify(<common.ErrorEventData>{
		eventName: 'error',
		object: task,
		error,
		responseCode: response && typeof response.getCode === 'function' ? response.getCode() : -1,
		response,
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

	ProgressReceiver = new net.gotev.uploadservice.observer.request.RequestObserverDelegate({
		onProgress(context: Context, uploadInfo: UploadInfo) {
			zonedOnProgress(context, uploadInfo);
		},

		onSuccess(context: Context, info: UploadInfo, response: ServerResponse): void {
			zonedOnCompleted(context, info, response);
		},

		onError(context: Context, uploadInfo: UploadInfo, error: java.lang.Exception) {
			if (error instanceof net.gotev.uploadservice.exceptions.UserCancelledUploadException) {
				zonedOnCancelled(context, uploadInfo);
			} else {
				zonedOnError(context, uploadInfo, null, error);
			}
		},

		onCompleted(context: Context, uploadInfo: UploadInfo) {},

		onCompletedWhileNotObserving(): void {},
	});
}
/* ProgressReceiver END */

function ensureReceiver() {
	initializeProgressReceiver();
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
		ensureReceiver();
		const taskId = session.id + '{' + ++Task.taskCount + '}';
		const request = getBinaryRequest(taskId, options, file);

		const task = Task.initTask(taskId, session, options);
		request.startUpload();

		Task.cache[task._id] = task;

		return task;
	}

	static createMultiPart(session: Session, params: Array<any>, options: common.Request): Task {
		ensureReceiver();
		const taskId = session.id + '{' + ++Task.taskCount + '}';
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
		task.setStatus('pending');

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
		this.notifyPropertyChanged('totalUpload', value);
	}

	setUpload(value: number) {
		this._upload = value;
		this.notifyPropertyChanged('upload', value);
	}

	setStatus(value: string) {
		this._status = value;
		this.notifyPropertyChanged('status', value);
	}

	setDescription(value: string) {
		this._description = value;
		this.notifyPropertyChanged('description', value);
	}
	cancel(): void {
		(<any>net).gotev.uploadservice.UploadService.stopUpload(this._id);
	}
}

function getBinaryRequest(taskId: string, options: common.Request, file: string) {
	const request = new net.gotev.uploadservice.protocols.binary.BinaryUploadRequest(Application.android.context, options.url);
	request.setUploadID(taskId);

	request.setFileToUpload(file);
	setRequestOptions(request, options);

	return request;
}

function getMultipartRequest(taskId: string, options: common.Request, params: any[]) {
	const request = new net.gotev.uploadservice.protocols.multipart.MultipartUploadRequest(Application.android.context, options.url);
	request.setUploadID(taskId);

	for (let i = 0; i < params.length; i++) {
		const curParam = params[i];
		if (typeof curParam.name === 'undefined') {
			throw new Error('You must have a `name` value');
		}

		if (typeof curParam.filename === 'undefined') {
			request.addParameter(curParam.name.toString(), curParam.value.toString());
			continue;
		}

		let fileName = curParam.filename;
		if (fileName.startsWith('~/')) {
			fileName = fileName.replace('~/', knownFolders.currentApp().path + '/');
		}
		const destFileName = curParam.destFilename || fileName.substring(fileName.lastIndexOf('/') + 1, fileName.length);
		request.addFileToUpload(fileName, curParam.name, destFileName, curParam.mimeType);
	}

	setRequestOptions(request, options);

	return request;
}

function setRequestOptions(request: net.gotev.uploadservice.HttpUploadRequest<any>, options: common.Request) {
	const config = new (<any>org).nativescript.plugins.background_http.NotificationConfig();

	if (typeof options.androidNotificationChannelID === 'string' && options.androidNotificationChannelID) {
		config.setNotificationChannelId(options.androidNotificationChannelID);
	}

	if (typeof options.androidRingToneEnabled === 'boolean') {
		config.setRingToneEnabled(options.androidRingToneEnabled);
	}

	if (typeof options.androidAutoClearNotification === 'boolean') {
		config.setAutoClearNotification(options.androidAutoClearNotification);
	}

	if (typeof options.androidNotificationOnProgressTitle === 'string') {
		config.setOnProgressTitle(options.androidNotificationOnProgressTitle);
	}

	if (typeof options.androidNotificationOnProgressMessage === 'string') {
		config.setOnProgressMessage(options.androidNotificationOnProgressMessage);
	}

	if (typeof options.androidNotificationOnCompleteTitle === 'string') {
		config.setOnCompleteTitle(options.androidNotificationOnCompleteTitle);
	}

	if (typeof options.androidNotificationOnCompleteMessage === 'string') {
		config.setOnCompleteMessage(options.androidNotificationOnCompleteMessage);
	}

	if (typeof options.androidNotificationOnErrorTitle === 'string') {
		config.setOnErrorTitle(options.androidNotificationOnErrorTitle);
	}

	if (typeof options.androidNotificationOnErrorMessage === 'string') {
		config.setOnErrorMessage(options.androidNotificationOnErrorMessage);
	}

	if (typeof options.androidNotificationOnCancelledTitle === 'string') {
		config.setOnCancelledTitle(options.androidNotificationOnCancelledTitle);
	}

	if (typeof options.androidNotificationOnCancelledMessage === 'string') {
		config.setOnCancelledMessage(options.androidNotificationOnCancelledMessage);
	}

	(<any>org).nativescript.plugins.background_http.NotificationConfig.setConfig(request, config);

	const autoDeleteAfterUpload = typeof options.androidAutoDeleteAfterUpload === 'boolean' ? options.androidAutoDeleteAfterUpload : false;
	if (autoDeleteAfterUpload) {
		request.setAutoDeleteFilesAfterSuccessfulUpload(true);
	}
	const maxRetryCount = typeof options.androidMaxRetries === 'number' ? options.androidMaxRetries : undefined;
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

	request.setMethod(options.method ? options.method : 'GET');
}
