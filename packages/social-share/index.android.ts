import { Application, Device, File, Utils, ImageSource } from '@nativescript/core';
import type { ShareImageOptions } from '.';

let numberOfImagesCreated = 0;
const FileProviderPackageName = useAndroidX() ? global.androidx.core.content : (<any>android).support.v4.content;

function getIntent(type) {
	const intent = new android.content.Intent(android.content.Intent.ACTION_SEND);
	intent.setType(type);
	return intent;
}
function share(intent, subject) {
	subject = subject || 'How would you like to share this?';

	const shareIntent = android.content.Intent.createChooser(intent, subject);
	shareIntent.setFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
	(<android.content.Context>Utils.android.getApplicationContext()).startActivity(shareIntent);
}
function useAndroidX() {
	return global.androidx && global.androidx.appcompat;
}

const imageProperties: {
	[format: string]: () => {
		mimeType: string;
		compressFormat: android.graphics.Bitmap.CompressFormat;
		extension: string;
	};
} = {
	png: () => ({
		mimeType: 'image/png',
		compressFormat: android.graphics.Bitmap.CompressFormat.PNG,
		extension: 'png',
	}),
	jpg: () => ({
		mimeType: 'image/jpeg',
		compressFormat: android.graphics.Bitmap.CompressFormat.JPEG,
		extension: 'jpg',
	}),
};

export function shareImage(image: ImageSource, subjectOrOptions?: string | ShareImageOptions, caption?: string) {
	let subject: string;
	let fileFormat = 'jpg';
	if (typeof subjectOrOptions === 'string') {
		subject = subjectOrOptions;
	} else if (subjectOrOptions && typeof subjectOrOptions === 'object') {
		subject = subjectOrOptions.subject;
		caption = subjectOrOptions.caption;
		fileFormat = subjectOrOptions.fileFormat || fileFormat;
		if (!Object.hasOwnProperty.call(fileFormat)) {
			fileFormat = 'jpg';
		}
	}
	numberOfImagesCreated++;

	const properties = imageProperties[fileFormat]();

	const intent = getIntent(properties.mimeType);

	const stream = new java.io.ByteArrayOutputStream();
	const bitmap: android.graphics.Bitmap = image.android;
	bitmap.compress(properties.compressFormat, 100, stream);

	const imageFileName = `socialsharing${numberOfImagesCreated}.${properties.extension}`;
	const newFile = new java.io.File((<android.content.Context>Utils.android.getApplicationContext()).getExternalFilesDir(null), imageFileName);

	const fos = new java.io.FileOutputStream(newFile);
	fos.write(stream.toByteArray());

	fos.flush();
	fos.close();

	let shareableFileUri;
	const sdkVersionInt = parseInt(Device.sdkVersion);
	if (sdkVersionInt >= 21) {
		shareableFileUri = FileProviderPackageName.FileProvider.getUriForFile(<android.content.Context>Utils.android.getApplicationContext(), Application.android.nativeApp.getPackageName() + '.provider', newFile);
	} else {
		shareableFileUri = android.net.Uri.fromFile(newFile);
	}
	intent.putExtra(android.content.Intent.EXTRA_STREAM, shareableFileUri);

	if (typeof caption === 'string') {
		intent.putExtra(android.content.Intent.EXTRA_TEXT, caption);
	}

	share(intent, subject);
}

export function shareText(text, subject) {
	const intent = getIntent('text/plain');

	intent.putExtra(android.content.Intent.EXTRA_TEXT, text);
	share(intent, subject);
}

export function sharePdf(pdf: File, subject?: string, caption?: string) {
	const intent = getIntent('application/pdf');
	const fileName = pdf.name;
	const newFile = new java.io.File((<android.content.Context>Utils.android.getApplicationContext()).getExternalFilesDir(null), fileName);
	const bytes = pdf.readSync();
	const fos = new java.io.FileOutputStream(newFile);

	fos.write(bytes);
	fos.flush();
	fos.close();

	let shareableFileUri;
	const sdkVersionInt = parseInt(Device.sdkVersion);
	if (sdkVersionInt >= 21) {
		shareableFileUri = FileProviderPackageName.FileProvider.getUriForFile(<android.content.Context>Utils.android.getApplicationContext(), Application.android.nativeApp.getPackageName() + '.provider', newFile);
	} else {
		shareableFileUri = android.net.Uri.fromFile(newFile);
	}

	intent.putExtra(android.content.Intent.EXTRA_STREAM, shareableFileUri);

	if (typeof caption === 'string') {
		intent.putExtra(android.content.Intent.EXTRA_TEXT, caption);
	}

	share(intent, subject);
}

export function shareUrl(url, text, subject) {
	const intent = getIntent('text/plain');
	intent.putExtra(android.content.Intent.EXTRA_TEXT, url);
	intent.putExtra(android.content.Intent.EXTRA_SUBJECT, text);
	share(intent, subject);
}

export function shareViaTwitter(text?: string, url?: string): Promise<void> {
	return new Promise((resolve, reject) => {
		const activity = Application.android.foregroundActivity || Application.android.startActivity;
		try {
			// Check if the Twitter app is installed on the phone.
			if (!activity) {
				reject('No activity found.');
			} else {
				activity.getPackageManager().getPackageInfo('com.twitter.android', 0);
				const intent = new android.content.Intent(android.content.Intent.ACTION_SEND);
				intent.setClassName('com.twitter.android', 'com.twitter.android.composer.ComposerActivity');
				intent.setType('text/plain');
				let value = `${text || ''}`;
				if (url) {
					value = `${value} ${url}`;
				}
				intent.putExtra(android.content.Intent.EXTRA_TEXT, java.net.URLEncoder.encode(value, 'UTF-8'));
				activity.startActivity(intent);
				resolve();
			}
		} catch (ex) {
			// App not found fallback to browser ?
			if (!activity) {
				reject('No activity found.');
			} else {
				try {
					const browserIntent = new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(`https://twitter.com/intent/tweet?text=${text || ''}&url=${url || ''}`));
					activity.startActivity(browserIntent);
					resolve();
				} catch (e) {
					reject(e);
				}
			}
		}
	});
}

export function shareViaFacebook(text?: string, url?: string): Promise<void> {
	return new Promise((resolve, reject) => {
		try {
			const activity = Application.android.foregroundActivity || Application.android.startActivity;
			if (!activity) {
				reject('No activity found.');
			} else {
				if (typeof (<any>com).facebook === 'undefined' || typeof (<any>com).facebook.CallbackManager === 'undefined' || typeof (<any>com).facebook.share === 'undefined') {
					console.error('Please follow usage instructions to add facebook sdk.');
					reject();
					return;
				}
				const manager = (<any>com).facebook.CallbackManager.Factory.create();
				Application.android.off('activityResult');
				Application.android.on('activityResult', (args) => {
					manager.onActivityResult(args.requestCode, args.resultCode, args.intent);
				});
				const callback = new (<any>com).facebook.FacebookCallback({
					onSuccess(value) {
						manager.unregisterCallback(callback);
						resolve();
					},
					onError(error) {
						manager.unregisterCallback(callback);
						reject(error.getMessage());
					},
					onCancel() {
						manager.unregisterCallback(callback);
						reject('User cancelled');
					},
				});
				const dialog = new (<any>com).facebook.share.widget.ShareDialog(activity);
				dialog.registerCallback(manager, callback);
				const content = new (<any>com).facebook.share.model.ShareLinkContent.Builder();
				if (url) {
					content.setContentUrl(android.net.Uri.parse(url));
				}
				dialog.show(content.build());
			}
		} catch (e) {
			reject(e);
		}
	});
}
