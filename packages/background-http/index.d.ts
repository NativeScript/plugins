import { EventData } from '@nativescript/core';

export function init();

/**
 * Get or create a background download/upload session by id.
 * @param id The session id.
 */
export function session(id: string): Session;

/**
 * Provides error information for error notifications.
 */
export interface ErrorEventData extends EventData {
	/**
	 * Provides the underlying error. The value is platform specific.
	 */
	error: any /*NSError | java.lang.Exception*/;
	/** HTTP response code if response object is present, otherwise -1 */
	responseCode: number;

	// The response from server
	response: any; // net.gotev.uploadservice.ServerResponse
}

/**
 * Provides the current and total bytes of long running transfer tasks.
 */
export interface ProgressEventData extends EventData {
	/**
	 * The bytes transfered so far.
	 */
	currentBytes: number;

	/**
	 * The expected bytes to transfer.
	 */
	totalBytes: number;
}

/**
 * Provides the server response.
 */
export interface ResultEventData extends EventData {
	/**
	 * The string response of the server.
	 */
	data: string;
	/** HTTP response code if response object is present, otherwise -1 */
	responseCode: number;
}

export interface CompleteEventData extends EventData {
	/** HTTP response code if response object is present, otherwise -1 */
	responseCode: number;
	/** Currently available for Android only */
	response?: any; // net.gotev.uploadservice.ServerResponse
}

/**
 * Encapsulates some information for background http transfers.
 */
export interface Task {
	/**
	 * Get the description of the task, that was provided during the task creation.
	 */
	description: string;

	/**
	 * Gets the current count of uploaded bytes. (read-only)
	 */
	upload: number;

	/**
	 * Gets the expected total count of bytes to upload. (read-only)
	 */
	totalUpload: number;

	/**
	 * Gets the status of the background upload task.
	 * Possible states: "panding" | "uploading" | "error" | "complete".
	 * (read-only)
	 */
	status: string;

	/**
	 * Cancel the Upload Task.
	 */
	cancel(): void;
	/**
	 * Subscribe for a general event.
	 * @param event The name of the event to subscribe for.
	 * @param handler The handler called when the event occure.
	 * @event
	 */
	on(event: string, handler: (e: EventData) => void): void;

	/**
	 * Subscribe for error notifications.
	 * @param event
	 * @param handler A handler that will receive the error details
	 * @event
	 */
	on(event: 'error', handler: (e: ErrorEventData) => void): void;

	/**
	 * Subscribe for progress notifications.
	 * @param event
	 * @param handler A handler that will receive a progress event with the current and expected total bytes
	 * @event
	 */
	on(event: 'progress', handler: (e: ProgressEventData) => void): void;

	/**
	 * Upon successful upload provides the server response.
	 * @param event
	 * @param handler A handler that will receive the response event.
	 * @event
	 */
	on(event: 'responded', handler: (e: ResultEventData) => void): void;

	/**
	 * Subscribe for the success notification.
	 * @param event
	 * @param handler A function that will be called with general event data upon successful completion
	 * @event
	 */
	on(event: 'complete', handler: (e: CompleteEventData) => void): void;
}

/**
 * Groups background http tasks in sessions, used to initiate background transfers.
 */
export interface Session {
	/**
	 * Initiate a new background file upload task.
	 * @param fileUri A file path to upload.
	 * @param options Options for the upload, sets uri, headers, task description etc.
	 */
	uploadFile(fileUri: string, options: Request): Task;
	multipartUpload(params: Array<any>, options: Request): Task;
}

/**
 * Encapsulates the information required to initiate new background transfers.
 */
export interface Request {
	/**
	 * Gets or sets the request url.
	 */
	url: string;

	/**
	 * Gets or set the HTTP method.
	 * By default 'GET' will be used.
	 */
	method?: string;

	/**
	 * Specify additional HTTP headers.
	 */
	headers?: {};

	/**
	 * Use this to help you identify the task.
	 * Sets the task's description property.
	 * You can store serialized JSON object.
	 */
	description: string;

	/**
	 * iOS only. Sets NSMutableURLRequest.timeoutInterval value in seconds (s)
	 */
	timeout?: number;

	/**
	 * Use utf8 encode in requests
	 */
	utf8?: boolean;

	/*
	 * Use this to set the on progress title shown in the Android notifications center.
	 */

	androidNotificationOnProgressTitle?: string;

	/*
	 * Use this to set the on progress message shown in the Android notifications center.
	 */

	androidNotificationOnProgressMessage?: string;

	/*
	 * Use this to set the on complete title shown in the Android notifications center.
	 */

	androidNotificationOnCompleteTitle?: string;

	/*
	 * Use this to set the on complete message shown in the Android notifications center.
	 */

	androidNotificationOnCompleteMessage?: string;

	/*
	 * Use this to set the on error title shown in the Android notifications center.
	 */

	androidNotificationOnErrorTitle?: string;

	/*
	 * Use this to set the on error message shown in the Android notifications center.
	 */

	androidNotificationOnErrorMessage?: string;

	/*
	 * Use this to set the on cancelled title shown in the Android notifications center.
	 */

	androidNotificationOnCancelledTitle?: string;

	/*
	 * Use this to set the on cancelled message shown in the Android notifications center.
	 */

	androidNotificationOnCancelledMessage?: string;

	/*
	 * Use this to set if files should be deleted automatically after upload
	 */
	androidAutoDeleteAfterUpload?: boolean;

	/*
	 * Use this to set the maximum retry count. The default retry count is 0
	 * https://github.com/gotev/android-upload-service/wiki/Recipes#backoff
	 */
	androidMaxRetries?: number;

	/*
	 * Use this to set if notifications should be cleared automatically upon upload completion
	 */
	androidAutoClearNotification?: boolean;

	/*
	 * Use this to set if a ringtone should be played upon upload completion
	 */
	androidRingToneEnabled?: boolean;

	/*
	 * Use this to set the channel ID for the notifications
	 */
	androidNotificationChannelID?: string;
}
