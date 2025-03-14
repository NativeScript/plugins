# @nativescript/background-http

A plugin that allows you to make background HTTP uploads.

## Contents
* [Installation](#installation)
* [Use @nativescript/background-http](#use-nativescriptbackground-http)
    * [Handle upload task events](#handle-upload-task-events)
* [API](#api)
    * [init()](#init)
    * [session()](#session)
        * [uploadFile()](#uploadfile)
        * [multipartUpload()](#multipartupload)
    * [Upload request object](#upload-request-object) 
    * [Task object](#task-object)
        * [Task events](#task-events)
* [Test the plugin locally](#test-the-plugin-locally)
* [License](#license)

## Installation

```cli
npm install @nativescript/background-http
```

## Use @nativescript/background-http

To make background HTTP calls, follow these steps:

1. Initialize a background HTTP service

Call the `init()` function to initialize an HTTP service that runs in the background. Call the method early in your application, in the `main.ts` file, before the app starts.

```typescript
import { init } from '@nativescript/background-http';
init();
```

2. Upload files

    1. Create an upload session by calling the [session()](#session) function and passing it the session's unique identifier string, `image-upload` for example.

    ```JavaScript
    // file path and url
    var file = '/some/local/file/path/and/file/name.jpg';
    var url = 'https://some.remote.service.com/path';
    var name = file.substr(file.lastIndexOf('/') + 1);

    // upload configuration
    var bghttp = require('@nativescript/background-http');

    var session = bghttp.session('image-upload');
    var request = {
        url: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/octet-stream',
        },
        description: 'Uploading ' + name,
    };
    ```

    2. Upload files

    - To initiate a simple upload request, call the `session`'s `uploadFile()` method and pass it the file path and an [Upload request object](#upload-request-object):

    ```JavaScript
    var task = session.uploadFile(filePath, request);
    ```
    - To initiate a `multipart/form-data` upload request or to pass additional data, call the `multipartUpload()` method. All parameter values must be strings:

    ```js
    var params = [
    { name: "test", value: "value" },
    { name: "fileToUpload", filename: file, mimeType: "image/jpeg" }
    ];
    
    var task = session.multipartUpload(params, request);
    ```

For a successful upload, you should ensure the following are met:

- The file must be accessible from your app. This may require additional permissions (e.g. access documents and files on the device). 
- The URL must not be blocked by the OS. Android Pie or later devices require TLS (HTTPS) connection by default and will not upload to an insecure (HTTP) URL.

### Handle upload task events

Both `uploadFile()` and `multipartUpload()` initiate and return a [Task](#task-object) instance.

After the upload task is initiated, you can monitor its progress using the following events.

For more information about the events objects, see [Task events](#task-events).

```JavaScript
task.on("progress", progressHandler);
task.on("error", errorHandler);
task.on("responded", respondedHandler);
task.on("complete", completeHandler);
task.on("cancelled", cancelledHandler); // Android only
```

Each event handler receives a single parameter containing the event data.

```ts
function progressHandler(e: ProgressEventData) {

    alert("uploaded " + e.currentBytes + " / " + e.totalBytes);
}

// event arguments:
// task: Task
// responseCode: number
// error: java.lang.Exception (Android) / NSError (iOS)
// response: net.gotev.uploadservice.ServerResponse (Android) / NSHTTPURLResponse (iOS)
function errorHandler(e: ErrorEventData) {
    alert("received " + e.responseCode + " code.");
    var serverResponse = e.response;
}


// event arguments:
// task: Task
// responseCode: number
// data: string
function respondedHandler(e: ResultEventData) {
    alert("received " + e.responseCode + " code. Server sent: " + e.data);
}

// event arguments:
// task: Task
// responseCode: number
// response: net.gotev.uploadservice.ServerResponse (Android) / NSHTTPURLResponse (iOS)
function completeHandler(e: CompleteEventData) {
    alert("received " + e.responseCode + " code");
    var serverResponse = e.response;
}

// event arguments:
// task: Task
function cancelledHandler(e: EventData) {
    alert("upload cancelled");
}
```
## API

### init()
```ts
import { init } from '@nativescript/background-http';

init()
```
Initializes an HTTP background service.

---
### session()
```ts
import { session } from '@nativescript/background-http';
session: Session = session(id: string)
```
Gets or creates a background http session by id.

---
#### Session Object
The Session object has the following members:
- `uploadFile(fileUri: string, options: Request): Task`
- `multipartUpload(params: Array<any>, options: Request): Task`

Both methods initiate a new background file(s) upload task. `uploadFile()` is for a single file upload and `multipartUpload()` is for multiple files upload. `fileUri` is the path of the file to upload. The `options` parameter represents the [Request object](#upload-request-object).

### Upload Request Object

The request object parameter has the following properties:

| Name                                  | Type      | Description                                                                                                                                                                                     |
| ------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                   | `string`  | The request url (e.g.`https://some.remote.service.com/path`).                                                                                                                                   |
| `method`                                | `string`  | The request method (e.g. `POST`).                                                                                                                                                               |
| `headers`                               | `object`  | Used to specify additional headers.                                                                                                                                                             |
| `description`                           | `string`  | Used to help identify the upload task locally - not sent to the remote server.                                                                                                                  |
| `utf8`                                  | `boolean` | (Android only/multipart only) If true, sets the charset for the multipart request to UTF-8. Default is false.                                                                                   |
| `androidNotificationOnProgressTitle`    | `string`  | Use this to set the on progress title shown in the Android notifications center.                                                                                                                |
| `androidNotificationOnProgressMessage`  | `string`  | Use this to set the on progress message shown in the Android notifications center.                                                                                                              |
| `androidNotificationOnCompleteTitle`    | `string`  | Use this to set the on complete message shown in the Android notifications center.                                                                                                              |
| `androidNotificationOnCompleteMessage ` | `string`  | Use this to set the on error title shown in the Android notifications center.                                                                                                                   |
| `androidNotificationOnErrorTitle `      | `string`  | Use this to set the on error title shown in the Android notifications center.                                                                                                                   |
| `androidNotificationOnErrorMessage`     | `string`  | Use this to set the on error message shown in the Android notifications center.                                                                                                                 |
| `androidNotificationOnCancelledTitle`   | `string`  | Use this to set the on cancelled title shown in the Android notifications center.                                                                                                               |
| `androidNotificationOnCancelledMessage` | `string`  | Use this to set the on cancelled message shown in the Android notifications center.                                                                                                             |
| `androidAutoDeleteAfterUpload`          | `boolean` | (Android only) Used to set if files should be deleted automatically after upload.                                                                                                               |
| `androidMaxRetries`                     | `number`  | (Android only) Used to set the maximum retry count. The default retry count is 0. https://github.com/gotev/android-upload-service/wiki/Recipes#backoff                                          |
| `androidAutoClearNotification`          | `boolean` | (Android only) Used to set if notifications should be cleared automatically upon upload completion. Default is false. Please note that setting this to true will also disable the ringtones.    |
| `androidRingToneEnabled `               | `boolean` | (Android only) Used to set if a ringtone should be played upon upload completion. Default is true. Please note that this flag has no effect when `androidAutoClearNotification` is set to true. |
| `androidNotificationChannelID`          | `string`  | (Android only) Used to set the channel ID for the notifications.                                                                                                                                |

> **Note**: The Android Notification titles/messages can be constructed with one of the following placeholders which will be replaced by the system:
>  - `[upload_rate]`: replaced with the current upload rate/speed
>  - `[upload_progress]`: replaced with the current upload progress
>  - `[upload_elapsed_time]`: replaced with the elapsed time

### Task object

The task object has the following properties and methods, that can be used to get information about the upload:

| Name        | Type     | Description                                                                     |
| ----------- | -------- | ------------------------------------------------------------------------------- |
| `upload`      | `number` | Bytes uploaded.|
| `totalUpload` | `number` | Total number of bytes to upload.                                                |
| `status `     | `string` | One of the following: `error`, `uploading`, `complete`, `pending`, `cancelled`. |
| `description` | `string` | The description set in the request used to create the upload task.              |
| `cancel()`    | `void`   | Call this method to cancel an upload in progress.                               |
| `on()` |`void`| The method used to add task events handlers. |

### EventData
|Name | Type | Description|
|-----|------|------------|
| `eventName` | `string` | Event name. For example, `progress`. |
| `object` | `Task` | The task that triggered the event. |

All the task events extend the EventData interface.

### ProgressEventData
|Name | Type | Description|
|-----|------|------------|
|`currentBytes`| `number`| The bytes transfered so far.|
|`totalBytes`| `number`| The expected bytes to transfer.|

### ResultEventData
|Name | Type | Description|
|-----|------|------------|
|`data`| `string`| The string response from the server.|
| `responseCode` | `number` | HTTP response code if response object is present. `-1` otherwise. |

### CompleteEventData

|Name | Type | Description|
|-----|------|------------|
| `responseCode` | `number` | HTTP response code if response object is present. `-1` otherwise. |
| `response`| `net.gotev.uploadservice.ServerResponse` (Android)   \| `NSHTTPURLResponse`(iOS)| The response from server. |

### ErrorEventData

|Name | Type | Description|
|-----|------|------------|
| `error` |`NSError ` \| `java.lang.Exception`| Provides the underlying error. `NSError` for iOS or `java.lang.Exception` for Android. |
| `responseCode` | `number` | HTTP response code if response object is present. `-1` otherwise. |
| `response`| `net.gotev.uploadservice.ServerResponse` (Android)   \| `NSHTTPURLResponse`(iOS)| The response from server. |

## API

### init()
```ts
import { init } from '@nativescript/background-http';

init()
```
Initializes an HTTP background service.

---
### session()
```ts
import { session } from '@nativescript/background-http';

session: Session = session(id)
```
Gets or creates a background http session by id.

---
### uploadFile()

```ts
session.uploadFile(filePath,requestOptions)
```

A method of the `session` object that initiates a background [task](#task-object) to upload the specified file encoded as `application/x-www-form-urlencoded`.

| Parameter | Type | Description
|:----------|:-----|:-----------
| `filePath` | `string` | The path of the file to upload.
| `request`| [Request](#upload-request-object) | Provides the metadata for background request.

---
### multipartUpload()
```ts
session.multipartUpload()
```

A method of the `session` object that initiates a background [task](#task-object) to upload the specified file encoded as `multipart/form-data`.

### Upload request object

The request object parameter has the following properties:

| Name                                  | Type      | Description                                                                                                                                                                                     |
| ------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                   | `string`  | The request url (e.g.`https://some.remote.service.com/path`).                                                                                                                                   |
| `method`                                | `string`  | The request method (e.g. `POST`).                                                                                                                                                               |
| `headers`                               | `object`  | Used to specify additional headers.                                                                                                                                                             |
| `description`                           | `string`  | Used to help identify the upload task locally - not sent to the remote server.                                                                                                                  |
| `timeout` | `number` | (`iOS only`) Sets the request timeout in seconds (s). |
| `utf8`                                  | `boolean` | (`Android-only`, `multipartUpload()-only`) If true, sets the charset for the multipart request to UTF-8. Default is `false`.                                                                                   |
| `androidNotificationOnProgressTitle`    | `string`  | Use this to set the on progress title shown in the Android notifications center.                                                                                                                |
| `androidNotificationOnProgressMessage`  | `string`  | Use this to set the on progress message shown in the Android notifications center.                                                                                                              |
| `androidNotificationOnCompleteTitle`    | `string`  | Use this to set the on complete message shown in the Android notifications center.                                                                                                              |
| `androidNotificationOnCompleteMessage ` | `string`  | Use this to set the on complete message shown in the Android notifications center.                                                                  |
| `androidNotificationOnErrorTitle `      | `string`  | Use this to set the on error title shown in the Android notifications center.                                                                                                                   |
| `androidNotificationOnErrorMessage`     | `string`  | Use this to set the on error message shown in the Android notifications center.                                                                                                                 |
| `androidNotificationOnCancelledTitle`   | `string`  | Use this to set the on cancelled title shown in the Android notifications center.                                                                                                               |
| `androidNotificationOnCancelledMessage` | `string`  | Use this to set the on cancelled message shown in the Android notifications center.                                                                                                             |
| `androidAutoDeleteAfterUpload`          | `boolean` | (`Android-only`) Used to set if files should be deleted automatically after upload.                                                                                                               |
| `androidMaxRetries`                     | `number`  | (`Android-only`) Used to set the maximum retry count. The default retry count is 0. https://github.com/gotev/android-upload-service/wiki/Recipes#backoff                                          |
| `androidAutoClearNotification`          | `boolean` | (`Android-only`) Used to set if notifications should be cleared automatically upon upload completion. Default is false. Please note that setting this to true will also disable the ringtones.    |
| `androidRingToneEnabled `               | `boolean` | (`Android-only`) Used to set if a ringtone should be played upon upload completion. Default is true. Please note that this flag has no effect when `androidAutoClearNotification` is set to true. |
| `androidNotificationChannelID`          | `string`  | (`Android-only`) Used to set the channel ID for the notifications.                                                                                                                                |

> **Note**: The Android Notification titles/messages can be constructed with one of the following placeholders which will be replaced by the system:
>  - `[upload_rate]`: replaced with the current upload rate/speed
>  - `[upload_progress]`: replaced with the current upload progress
>  - `[upload_elapsed_time]`: replaced with the elapsed time

### Task object

The task object has the following properties and methods.

| Name        | Type     | Description                                                                     |
| ----------- | -------- | ------------------------------------------------------------------------------- |
| `upload`      | `number` | Bytes uploaded.|
| `totalUpload` | `number` | Total number of bytes to upload.                                                |
| `status `     | `string` | One of the following: `error`, `uploading`, `complete`, `pending`, `cancelled`. |
| `description` | `string` | The description set in the request used to create the upload task.              |
| `cancel()`    | `void`   | Call this method to cancel an upload in progress.                               |
| `on()` |`void`| The method used to add [Task events](#task-events) handlers.  |

### Task events

The following are events emitted for different progress states of a background task:

- **EventData**

|Name | Type | Description|
|-----|------|------------|
| `eventName` | `string` | Event name. For example, `progress`. |
| `object` | `Task` | The task that triggered the event. |

All the following task events extend the preceding EventData interface.

- **ProgressEventData**

|Name | Type | Description|
|-----|------|------------|
|`currentBytes`| `number`| The bytes transfered so far.|
|`totalBytes`| `number`| The expected bytes to transfer.|

- **ResultEventData**

|Name | Type | Description|
|-----|------|------------|
|`data`| `string`| The string response from the server.|
| `responseCode` | `number` | HTTP response code if response object is present. `-1` otherwise. |

- **CompleteEventData**

|Name | Type | Description|
|-----|------|------------|
| `responseCode` | `number` | HTTP response code if response object is present. `-1` otherwise. |
| `response`| `net.gotev.uploadservice.ServerResponse` (Android)   \| `NSHTTPURLResponse`(iOS)| The response from server. |

- **ErrorEventData**

|Name | Type | Description|
|-----|------|------------|
| `error` |`NSError ` \| `java.lang.Exception`| Provides the underlying error. `NSError` for iOS or `java.lang.Exception` for Android. |
| `responseCode` | `number` | HTTP response code if response object is present. `-1` otherwise. |
| `response`| `net.gotev.uploadservice.ServerResponse` (Android)   \| `NSHTTPURLResponse`(iOS)| The response from server. |

## Test the plugin locally

To test the plugin , you must have a server instance to accept the uploads. There are online services that can be used for small file uploads - e.g. `http://httpbin.org/post` However, these cannot be used for large files. The plugin repository comes with a simple server you can run locally. Here is how to start it:

```cli
cd demo-server
npm i
node server 8080
```

The above commands will start a server listening on port 8080. Remember to update the URL in your app to match the address/port where the server is running.

> **Note**: If you are using the iOS simulator then `http://localhost:8080` should be used to upload to the demo server. If you are using an Android emulator, `http://10.0.2.2:8080` should be used instead.

## License

Apache License Version 2.0
