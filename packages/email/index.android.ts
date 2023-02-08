import { Application, File, Folder, Utils } from '@nativescript/core';

(function () {
	_cleanAttachmentFolder();
})();

let useAndroidX = function () {
	return global.androidx && global.androidx.appcompat;
};
const FileProviderPackageName = useAndroidX() ? global.androidx.core.content : (<any>global.android.support.v4).content;

const _determineAvailability = function () {
	const uri = android.net.Uri.fromParts('mailto', '', null);
	const intent = new android.content.Intent(android.content.Intent.ACTION_SEND, uri);
	intent.addCategory(android.content.Intent.CATEGORY_DEFAULT);
	const packageManager = Utils.android.getApplicationContext().getPackageManager();
	const nrOfMailApps = packageManager.queryIntentActivities(intent, 0).size();
	return nrOfMailApps > 0;
};

export function available() {
	return new Promise(function (resolve, reject) {
		try {
			resolve(_determineAvailability());
		} catch (ex) {
			console.log('Error in email.available: ' + ex);
			reject(ex);
		}
	});
}

export function compose(arg) {
	return new Promise(function (resolve, reject) {
		try {
			const mail = new android.content.Intent(android.content.Intent.ACTION_SENDTO);

			if (arg.body) {
				const htmlPattern = java.util.regex.Pattern.compile('.*\\<[^>]+>.*', java.util.regex.Pattern.DOTALL);
				if (htmlPattern.matcher(arg.body).matches()) {
					mail.putExtra(android.content.Intent.EXTRA_TEXT, android.text.Html.fromHtml(arg.body));
					mail.setType('text/html');
				} else {
					mail.putExtra(android.content.Intent.EXTRA_TEXT, arg.body);
					mail.setType('text/plain');
				}
			}

			if (arg.subject) {
				mail.putExtra(android.content.Intent.EXTRA_SUBJECT, arg.subject);
			}
			if (arg.to) {
				mail.putExtra(android.content.Intent.EXTRA_EMAIL, toStringArray(arg.to));
			}
			if (arg.cc) {
				mail.putExtra(android.content.Intent.EXTRA_CC, toStringArray(arg.cc));
			}
			if (arg.bcc) {
				mail.putExtra(android.content.Intent.EXTRA_BCC, toStringArray(arg.bcc));
			}

			if (arg.attachments) {
				const uris = new java.util.ArrayList();
				for (const a in arg.attachments) {
					const attachment = arg.attachments[a];
					const path = attachment.path;
					const fileName = attachment.fileName;
					const uri = _getContentUri(path, fileName, Application.android.context);

					if (!uri) {
						reject('File not found for path: ' + path);
						return;
					}
					uris.add(uri);
				}

				if (!uris.isEmpty()) {
					// required for Android 7+ (alternative is using a FileProvider (which is a better solution btw))
					const builder = new android.os.StrictMode.VmPolicy.Builder();
					android.os.StrictMode.setVmPolicy(builder.build());

					mail.setAction(android.content.Intent.ACTION_SEND_MULTIPLE);
					mail.setType('message/rfc822');
					mail.putParcelableArrayListExtra(android.content.Intent.EXTRA_STREAM, uris);
				}
			} else {
				mail.setData(android.net.Uri.parse('mailto:'));
			}

			mail.setFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);

			// we can wire up an intent receiver but it's always the same resultCode (0, canceled) anyway
			Application.android.context.startActivity(mail);
			resolve(true);
		} catch (ex) {
			console.log('Error in email.compose: ' + ex);
			reject(ex);
		}
	});
}

function _getUriForPath(path, fileName, ctx) {
	if (path.indexOf('file:///') === 0) {
		return _getUriForAbsolutePath(path);
	} else if (path.indexOf('file://') === 0) {
		return _getUriForAssetPath(path, fileName, ctx);
	} else if (path.indexOf('base64:') === 0) {
		return _getUriForBase64Content(path, fileName, ctx);
	} else {
		if (path.indexOf(ctx.getPackageName()) > -1) {
			return _getUriForAssetPath(path, fileName, ctx);
		} else {
			return _getUriForAbsolutePath(path);
		}
	}
}

function _getUriForAbsolutePath(path) {
	const absPath = path.replace('file://', '');
	const file = new java.io.File(absPath);
	if (!file.exists()) {
		console.log('File not found: ' + file.getAbsolutePath());
		return null;
	} else {
		return android.net.Uri.fromFile(file);
	}
}

function _getUriForAssetPath(path, fileName, ctx) {
	path = path.replace('file://', '/');
	if (!File.exists(path)) {
		console.log('File does not exist: ' + path);
		return null;
	}

	const localFile = File.fromPath(path);
	const localFileContents = localFile.readSync(function (e) {
		console.log('read file error:', e);
	});

	let cacheFileName = _writeBytesToFile(ctx, fileName, localFileContents);
	if (cacheFileName.indexOf('file://') === -1) {
		cacheFileName = 'file://' + cacheFileName;
	}
	return android.net.Uri.parse(cacheFileName);
}

function _getUriForBase64Content(path, fileName, ctx) {
	const resData = path.substring(path.indexOf('://') + 3);
	let bytes;
	try {
		bytes = android.util.Base64.decode(resData, 0);
	} catch (ex) {
		console.log('Invalid Base64 string: ' + resData);
		return android.net.Uri.EMPTY;
	}
	const cacheFileName = _writeBytesToFile(ctx, fileName, bytes);

	return android.net.Uri.parse(cacheFileName);
}

function _getContentUri(path, fileName, ctx) {
	const uri = _getUriForPath(path, fileName, ctx);
	const file = new java.io.File(uri.getPath());
	if (!file.exists()) {
		console.log('File not found: ' + file.getAbsolutePath());
		return null;
	} else {
		return FileProviderPackageName.FileProvider.getUriForFile(Application.android.context, Application.android.nativeApp.getPackageName() + '.provider', file);
	}
}

function _writeBytesToFile(ctx, fileName, contents) {
	const dir = ctx.getExternalCacheDir();

	if (dir === null) {
		console.log('Missing external cache dir');
		return null;
	}

	const storage = dir.toString() + '/emailcomposer';
	let cacheFileName = storage + '/' + fileName;

	const toFile = File.fromPath(cacheFileName);
	toFile.writeSync(contents, function (e) {
		console.log('write file error:', e);
	});

	if (cacheFileName.indexOf('file://') === -1) {
		cacheFileName = 'file://' + cacheFileName;
	}
	return cacheFileName;
}

function _cleanAttachmentFolder() {
	if (Application.android.context) {
		const dir = Application.android.context.getExternalCacheDir();

		if (dir === null) {
			console.log('Missing external cache dir');
			return;
		}

		const storage = dir.toString() + '/emailcomposer';
		const cacheFolder = Folder.fromPath(storage);
		cacheFolder.clear();
	}
}

const toStringArray = function (arg) {
	const arr = java.lang.reflect.Array.newInstance(java.lang.String.class, arg.length);
	for (let i = 0; i < arg.length; i++) {
		arr[i] = arg[i];
	}
	return arr;
};
