# @nativescript/Email

## Contents
* [Intro](#intro)
* [Installation](#installation)
* [Use @nativescript/email](#use-nativescriptemail)
	* [Check for availability](#check-for-availability)
	* [Compose an email](#compose-an-email)
	* [Usage with Angular](#usage-with-angular)
* [API](#api)
	* [Functions](#functions)
	* [ComposeOptions](#composeoptions)
* [Known issues](#known-issues)

## Intro

A plugin to compose an e-mail, have the user edit the draft manually and send it.

> **Note:** This plugin depends on the default mail app. If you want a fallback to a third party client app like Gmail or Outlook, then check for availability, and if not available use a solution like [the Social Share plugin](https://github.com/tjvantoll/nativescript-social-share).

[npm-image]: https://img.shields.io/npm/v/nativescript-email.svg
[npm-url]: https://npmjs.org/package/nativescript-email
[downloads-image]: https://img.shields.io/npm/dm/nativescript-email.svg

[twitter-image]: https://img.shields.io/twitter/follow/eddyverbruggen.svg?style=social&label=Follow%20me
[twitter-url]: https://twitter.com/eddyverbruggen

## Installation

To install the plugin, run the following command in the root directory of your project:

```cli
npm install @nativescript/email
```

## Use @nativescript/email

### Check for availability

To check if the device has the Mail app installed, call the `available` method.

```ts
import { available() } from '@nativescript/email';

available().then((avail: boolean) => {
	console.log('Email available? ' + avail);
});
```
### Compose an email

To compose an email, use the `compose` method.

```js
import { compose } from '@nativescript/email';

// first create a File object
import { knownFolders } from '@nativescript/core';
var appPath = knownFolders.currentApp().path;
var logoPath = appPath + '/res/telerik-logo.png';

compose({
		subject: 'Yo',
		body: 'Hello <strong>dude</strong> :)',
		to: ['eddyverbruggen@gmail.com', 'to@person2.com'],
		cc: ['ccperson@somewhere.com'],
		bcc: ['eddy@combidesk.com', 'eddy@x-services.nl'],
		attachments: [
			{
				fileName: 'arrow1.png',
				path: 'base64://iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHGlET1QAAAACAAAAAAAAABQAAAAoAAAAFAAAABQAAAB5EsHiAAAAAEVJREFUSA1iYKAimDhxYjwIU9FIBgaQgZMmTfoPwlOmTJGniuHIhlLNxaOGwiNqNEypkwlGk9RokoIUfaM5ijo5Clh9AAAAAP//ksWFvgAAAEFJREFUY5g4cWL8pEmT/oMwiM1ATTBqONbQHA2W0WDBGgJYBUdTy2iwYA0BrILDI7VMmTJFHqv3yBUEBQsIg/QDAJNpcv6v+k1ZAAAAAElFTkSuQmCC',
				mimeType: 'image/png',
			},
			{
				fileName: 'telerik-logo.png',
				path: logoPath,
				mimeType: 'image/png',
			},
		],
	})
	.then(
		function () {
			console.log('Email composer closed');
		},
		function (err) {
			console.log('Error: ' + err);
		}
	);
```
## API
### Method(s)
| Name | Return Type | Description |
|------|------|-------------|
| `available()` | `Promise<boolean>`|  Checks for availability of a mail app.|
| `compose(options: ComposeOptions)` | `Promise<boolean>` | Composes and sends a [ComposeOptions](#composeoptions) email.|

### Usage with Angular

Check out [this tutorial (YouTube)](https://www.youtube.com/watch?v=fSnQb9-Gtdk) to learn how to use this plugin in a NativeScript-Angular app.

## API
### Functions
| Function | Return Type | Description |
|------|------|-------------|
| `available()` | `Promise<boolean>`|  Checks for availability of a mail app.|
| `compose(options: ComposeOptions)` | `Promise<boolean>` | Composes and sends a [ComposeOptions](#composeoptions) email.|

### ComposeOptions

| Name | Type | Description |
|------|------|-------------|
| `subject`| `string`| _Optional_: The subject of the email.|
| `body`| `string`| _Optional_: The body of the email. The plugin will automatically handle plain and html email content.|
| `body`| `string`| _Optional_: The body of the email. The plugin will automatically handle plain and html email content.|
| `to` | `string[]` |  _Optional_: An array of email addresses of the direct recipients. On Android only the first item in the array is used.|
| `cc` | `string[]` |  _Optional_: An array of email addresses of the `cc` recipients.|
| `bcc` | `string[]` |  _Optional_: An array of email addresses of the `bcc` recipients.|
| `attachments`| Array<[Attachment](#attachment)>| The files to be attached to the email.|
| `iosViewController` | `any` | _Optional_: (`iOS-only`) iOS View Controller to open `compose` from.|


#### Attachment

| Name | Type | Description |
|------|------|-------------|
| `fileName`| `string` | The name used for the attachment.<br>Example: fileName: 'Cute-Kitten.png'|
| `path` | `string` | The to the file to be attached. |
| `mimeType` | `string` | (`iOS-only`)Used to help the iOS device figure out how to send the file.Example:mimeType: 'image/png'|


## Known issues

- On iOS, you can't use the simulator to test the plugin because of an iOS limitation. To prevent a crash, this plugin returns `false` when `available` is invoked on the iOS simulator.

## License

Apache License Version 2.0
