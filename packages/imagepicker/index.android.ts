import { ImageAsset, Application, AndroidApplication, Utils, File, knownFolders, ImageSource } from '@nativescript/core';
import * as permissions from '@nativescript-community/perms';

import { ImagePickerMediaType, Options, AuthorizationResult, ImagePickerBase, ImagePickerSelection } from './common';
export * from './common';
let copyToAppFolder;
let renameFileTo;

const videoFiles = {
	mp4: true,
	mov: true,
	avi: true,
	mkv: true,
	wmv: true,
	flv: true,
	m4v: true,
	'3gp': true,
	'3g2': true,
	mpeg: true,
	mpeg4: true,
	mpeg2: true,
};
class UriHelper {
	public static _calculateFileUri(uri: android.net.Uri) {
		const DocumentsContract = (<any>android.provider).DocumentsContract;
		const isKitKat = android.os.Build.VERSION.SDK_INT >= 19; // android.os.Build.VERSION_CODES.KITKAT

		if (isKitKat && DocumentsContract.isDocumentUri(Utils.android.getApplicationContext(), uri)) {
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
						const externalMediaDirs = Utils.android.getApplicationContext().getExternalMediaDirs();
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
				const split = docId.split(':');
				type = split[0];
				id = split[1];

				if ('image' === type) {
					contentUri = android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
				} else if ('video' === type) {
					contentUri = android.provider.MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
				} else if ('audio' === type) {
					contentUri = android.provider.MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
				}

				const selection = '_id=?';
				const selectionArgs = [id];

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
		let filePath: string;
		if (isDownload) {
			const columns = ['_display_name'];
			try {
				cursor = this.getContentResolver().query(uri, columns, selection, selectionArgs, null);
				if (cursor != null && cursor.moveToFirst()) {
					const column_index = cursor.getColumnIndexOrThrow(columns[0]);
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
			const columns = [android.provider.MediaStore.MediaColumns.DATA];
			let filePath;

			try {
				cursor = this.getContentResolver().query(uri, columns, selection, selectionArgs, null);
				if (cursor != null && cursor.moveToFirst()) {
					const column_index = cursor.getColumnIndexOrThrow(columns[0]);
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

export class ImagePicker extends ImagePickerBase {
	private _options: Options;

	constructor(options: Options) {
		super();
		this._options = options;
		copyToAppFolder = options.copyToAppFolder;
		renameFileTo = options.renameFileTo;
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
		const length = this.mediaType === '*/*' ? 2 : 1;
		const mimeTypes = Array.create(java.lang.String, length);

		if (this.mediaType === '*/*') {
			mimeTypes[0] = 'image/*';
			mimeTypes[1] = 'video/*';
		} else {
			mimeTypes[0] = this.mediaType;
		}
		return mimeTypes;
	}

	authorize(): Promise<AuthorizationResult> {
		let requested: { [key: string]: permissions.PermissionOptions } = {};
		if ((<any>android).os.Build.VERSION.SDK_INT >= 33 && Utils.ad.getApplicationContext().getApplicationInfo().targetSdkVersion >= 33) {
			const mediaPerms = {
				photo: { reason: 'To pick images from your gallery' },
				video: { reason: 'To pick videos from your gallery' },
			};
			if (this.mediaType === 'image/*') {
				requested['photo'] = mediaPerms['photo'];
			} else if (this.mediaType === 'video/*') {
				requested['video'] = mediaPerms['video'];
			} else {
				requested = mediaPerms;
			}

			return permissions.request(requested).then((result) => this.mapResult(result));
		} else if ((<any>android).os.Build.VERSION.SDK_INT >= 23) {
			requested['storage'] = { read: true, write: false };
			return permissions.request(requested).then((result) => this.mapResult(result));
		} else {
			return Promise.resolve({ details: null, authorized: true });
		}
	}

	present(): Promise<ImagePickerSelection[]> {
		return new Promise((resolve, reject) => {
			// WARNING: If we want to support multiple pickers we will need to have a range of IDs here:
			let RESULT_CODE_PICKER_IMAGES = 9192;

			Application.android.on(AndroidApplication.activityResultEvent, onResult);

			function onResult(args) {
				let requestCode = args.requestCode;
				let resultCode = args.resultCode;
				let data = args.intent;

				const handle = (selectedAsset, i?) => {
					const file = File.fromPath(selectedAsset.android);
					let copiedFile: any = false;

					const item: ImagePickerSelection = {
						asset: selectedAsset,
						filename: file.name,
						originalFilename: file.name,
						type: videoFiles[file.extension.replace('.', '')] ? 'video' : 'image',
						path: file.path,
						filesize: file.size,
					};
					if (copyToAppFolder) {
						let extension = file.name.split('.').pop();
						let filename = file.name;
						if (renameFileTo) {
							if (i || i === 0) {
								filename = renameFileTo + '-' + i + '.' + extension;
							} else {
								filename = renameFileTo + '.' + extension;
							}
							item.filename = filename;
						}
						let newPath = knownFolders.documents().path + '/' + copyToAppFolder + '/' + filename;
						copiedFile = File.fromPath(newPath);
						item.path = newPath;
						item.asset.android = item.path;
						copiedFile.writeSync(file.readSync());
						item.filesize = new java.io.File(item.path).length();
					}
					if (item.type == 'video') {
						const thumb = android.media.ThumbnailUtils.createVideoThumbnail(copiedFile ? copiedFile.path : file.path, android.provider.MediaStore.Video.Thumbnails.MINI_KIND);
						let retriever = new android.media.MediaMetadataRetriever();
						retriever.setDataSource(item.path);
						item.thumbnail = new ImageSource(thumb);
						let time = retriever.extractMetadata(android.media.MediaMetadataRetriever.METADATA_KEY_DURATION);
						let duration = parseInt(time) / 1000;
						item.duration = duration;
					}
					return item;
				};

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
											let item = handle(selectedAsset, i);
											results.push(item);
										}
									}
								}
							} else {
								const uri = data.getData();
								const val = useHelper ? UriHelper._calculateFileUri(uri) : uri.toString();
								const selectedAsset = new ImageAsset(val);
								let item = handle(selectedAsset);
								results.push(item);
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
			intent.addFlags(android.content.Intent.FLAG_GRANT_READ_URI_PERMISSION | android.content.Intent.FLAG_GRANT_PERSISTABLE_URI_PERMISSION);
			let chooser = Intent.createChooser(intent, 'Select Picture');
			(Application.android.foregroundActivity || Application.android.startActivity).startActivityForResult(intent, RESULT_CODE_PICKER_IMAGES);
		});
	}
}

export function create(options?: Options): ImagePicker {
	return new ImagePicker(options);
}
