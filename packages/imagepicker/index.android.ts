import { ImageAsset, Application, AndroidApplication, Utils } from '@nativescript/core';
import * as permissions from 'nativescript-permissions';

import { ImagePickerMediaType, Options } from './common';
export * from './common';

class UriHelper {
	public static _calculateFileUri(uri: android.net.Uri) {
		let DocumentsContract = (<any>android.provider).DocumentsContract;
		let isKitKat = android.os.Build.VERSION.SDK_INT >= 19; // android.os.Build.VERSION_CODES.KITKAT

		if (isKitKat && DocumentsContract.isDocumentUri(Application.android.context, uri)) {
			let docId, id, type;
			let contentUri: android.net.Uri = null;

			// ExternalStorageProvider
			if (UriHelper.isExternalStorageDocument(uri)) {
				docId = DocumentsContract.getDocumentId(uri);
				id = docId.split(':')[1];
				type = docId.split(':')[0];

				if ('primary' === type.toLowerCase()) {
					return android.os.Environment.getExternalStorageDirectory() + '/' + id;
				} else {
					if (android.os.Build.VERSION.SDK_INT > 23) {
						(this.getContentResolver() as any).takePersistableUriPermission(uri, android.content.Intent.FLAG_GRANT_READ_URI_PERMISSION | android.content.Intent.FLAG_GRANT_WRITE_URI_PERMISSION);
						const externalMediaDirs = Application.android.context.getExternalMediaDirs();
						if (externalMediaDirs.length > 1) {
							let filePath = externalMediaDirs[1].getAbsolutePath();
							filePath = filePath.substring(0, filePath.indexOf('Android')) + id;
							return filePath;
						}
					}
				}
			}
			// DownloadsProvider
			else if (UriHelper.isDownloadsDocument(uri)) {
				return UriHelper.getDataColumn(uri, null, null, true);
			}
			// MediaProvider
			else if (UriHelper.isMediaDocument(uri)) {
				docId = DocumentsContract.getDocumentId(uri);
				let split = docId.split(':');
				type = split[0];
				id = split[1];

				if ('image' === type) {
					contentUri = android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
				} else if ('video' === type) {
					contentUri = android.provider.MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
				} else if ('audio' === type) {
					contentUri = android.provider.MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
				}

				let selection = '_id=?';
				let selectionArgs = [id];

				return UriHelper.getDataColumn(contentUri, selection, selectionArgs, false);
			}
		} else {
			// MediaStore (and general)
			if ('content' === uri.getScheme()) {
				return UriHelper.getDataColumn(uri, null, null, false);
			}
			// FILE
			else if ('file' === uri.getScheme()) {
				return uri.getPath();
			}
		}

		return undefined;
	}

	private static getDataColumn(uri: android.net.Uri, selection, selectionArgs, isDownload: boolean) {
		let cursor = null;
		let filePath;
		if (isDownload) {
			let columns = ['_display_name'];
			try {
				cursor = this.getContentResolver().query(uri, columns, selection, selectionArgs, null);
				if (cursor != null && cursor.moveToFirst()) {
					let column_index = cursor.getColumnIndexOrThrow(columns[0]);
					filePath = cursor.getString(column_index);
					if (filePath) {
						const dl = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS);
						filePath = `${dl}/${filePath}`;
						return filePath;
					}
				}
			} catch (e) {
				console.log(e);
			} finally {
				if (cursor) {
					cursor.close();
				}
			}
		} else {
			let columns = [android.provider.MediaStore.MediaColumns.DATA];
			let filePath;

			try {
				cursor = this.getContentResolver().query(uri, columns, selection, selectionArgs, null);
				if (cursor != null && cursor.moveToFirst()) {
					let column_index = cursor.getColumnIndexOrThrow(columns[0]);
					filePath = cursor.getString(column_index);
					if (filePath) {
						return filePath;
					}
				}
			} catch (e) {
				console.log(e);
			} finally {
				if (cursor) {
					cursor.close();
				}
			}
		}
		return undefined;
	}

	private static isExternalStorageDocument(uri: android.net.Uri) {
		return 'com.android.externalstorage.documents' === uri.getAuthority();
	}

	private static isDownloadsDocument(uri: android.net.Uri) {
		return 'com.android.providers.downloads.documents' === uri.getAuthority();
	}

	private static isMediaDocument(uri: android.net.Uri) {
		return 'com.android.providers.media.documents' === uri.getAuthority();
	}

	private static getContentResolver(): android.content.ContentResolver {
		return Application.android.nativeApp.getContentResolver();
	}
}

export class ImagePicker {
	private _options: Options;

	constructor(options: Options) {
		this._options = options;
	}

	get mode(): string {
		return this._options && this._options.mode && this._options.mode.toLowerCase() === 'single' ? 'single' : 'multiple';
	}

	get mediaType(): string {
		const mediaType = this._options && 'mediaType' in this._options ? this._options.mediaType : ImagePickerMediaType.Any;
		if (mediaType === ImagePickerMediaType.Image) {
			return 'image/*';
		} else if (mediaType === ImagePickerMediaType.Video) {
			return 'video/*';
		} else {
			return '*/*';
		}
	}

	get mimeTypes() {
		let length = this.mediaType === '*/*' ? 2 : 1;
		let mimeTypes = Array.create(java.lang.String, length);

		if (this.mediaType === '*/*') {
			mimeTypes[0] = 'image/*';
			mimeTypes[1] = 'video/*';
		} else {
			mimeTypes[0] = this.mediaType;
		}
		return mimeTypes;
	}

	authorize(): Promise<void> {
		if ((<any>android).os.Build.VERSION.SDK_INT >= 33 && Utils.ad.getApplicationContext().getApplicationInfo().targetSdkVersion >= 33) {
			console.log('In api 33');
			const requested = [];
			if (this.mediaType === 'image/*') {
				requested.push((<any>android).Manifest.permission.READ_MEDIA_IMAGES);
			} else if (this.mediaType === 'video/*') {
				requested.push((<any>android).Manifest.permission.READ_MEDIA_VIDEO);
			} else {
				requested.push((<any>android).Manifest.permission.READ_MEDIA_IMAGES);
				requested.push((<any>android).Manifest.permission.READ_MEDIA_VIDEO);
			}

			return permissions.requestPermission(requested);
		} else if ((<any>android).os.Build.VERSION.SDK_INT >= 23) {
			console.log('in api 23');
			return permissions.requestPermission([(<any>android).Manifest.permission.READ_EXTERNAL_STORAGE]);
		} else {
			return Promise.resolve();
		}
	}

	present(): Promise<ImageAsset[]> {
		return new Promise((resolve, reject) => {
			// WARNING: If we want to support multiple pickers we will need to have a range of IDs here:
			let RESULT_CODE_PICKER_IMAGES = 9192;

			Application.android.on(AndroidApplication.activityResultEvent, onResult);

			function onResult(args) {
				let requestCode = args.requestCode;
				let resultCode = args.resultCode;
				let data = args.intent;

				if (requestCode === RESULT_CODE_PICKER_IMAGES) {
					if (resultCode === android.app.Activity.RESULT_OK) {
						try {
							let results = [];
							let clip = data.getClipData();
							const useHelper = (<any>android).os.Build.VERSION.SDK_INT <= 28;
							if (clip) {
								let count = clip.getItemCount();
								for (let i = 0; i < count; i++) {
									let clipItem = clip.getItemAt(i);
									if (clipItem) {
										let uri = clipItem.getUri();
										if (uri) {
											const val = useHelper ? UriHelper._calculateFileUri(uri) : uri.toString();
											const selectedAsset = new ImageAsset(val);
											results.push(selectedAsset);
										}
									}
								}
							} else {
								const uri = data.getData();
								const val = useHelper ? UriHelper._calculateFileUri(uri) : uri.toString();
								const selectedAsset = new ImageAsset(val);
								results.push(selectedAsset);
							}

							Application.android.off(AndroidApplication.activityResultEvent, onResult);
							resolve(results);
							return;
						} catch (e) {
							Application.android.off(AndroidApplication.activityResultEvent, onResult);
							reject(e);
							return;
						}
					} else {
						Application.android.off(AndroidApplication.activityResultEvent, onResult);
						reject(new Error('Image picker activity result code ' + resultCode));
						return;
					}
				}
			}

			let Intent = android.content.Intent;
			let intent = new Intent();
			intent.setType(this.mediaType);

			// not in platform-declaration typings
			intent.putExtra((android.content.Intent as any).EXTRA_MIME_TYPES, this.mimeTypes);

			// TODO: Use (<any>android).content.Intent.EXTRA_ALLOW_MULTIPLE
			if (this.mode === 'multiple') {
				intent.putExtra('android.intent.extra.ALLOW_MULTIPLE', true);
			}

			if (this._options.showAdvanced) {
				intent.putExtra('android.content.extra.SHOW_ADVANCED', true);
			}

			intent.putExtra(android.content.Intent.EXTRA_LOCAL_ONLY, true);
			intent.setAction('android.intent.action.OPEN_DOCUMENT');
			let chooser = Intent.createChooser(intent, 'Select Picture');
			(Application.android.foregroundActivity || Application.android.startActivity).startActivityForResult(intent, RESULT_CODE_PICKER_IMAGES);
		});
	}
}

export function create(options?: Options): ImagePicker {
	return new ImagePicker(options);
}
