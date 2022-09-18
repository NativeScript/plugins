import { Utils, Application, Device, Trace, ImageAsset, AndroidActivityResultEventData, AndroidApplication } from '@nativescript/core';

import * as permissions from 'nativescript-permissions';
import { CameraOptions, CameraRecordOptions } from '.';

let REQUEST_IMAGE_CAPTURE = 3453;
declare let global: any;

let useAndroidX = function () {
	return global.androidx && global.androidx.appcompat;
};
const FileProviderPackageName = useAndroidX() ? global.androidx.core.content : global.android.support.v4.content;

export let takePicture = function (options?: CameraOptions): Promise<any> {
	return new Promise((resolve, reject) => {
		try {
			if (!permissions.hasPermission(android.Manifest.permission.CAMERA)) {
				reject(new Error('Application does not have permissions to use Camera'));

				return;
			}

			let saveToGallery = true;
			let reqWidth = 0;
			let reqHeight = 0;
			let shouldKeepAspectRatio = true;

			let density = Utils.layout.getDisplayDensity();
			if (options) {
				saveToGallery = Utils.isNullOrUndefined(options.saveToGallery) ? saveToGallery : options.saveToGallery;
				reqWidth = options.width ? options.width * density : reqWidth;
				reqHeight = options.height ? options.height * density : reqWidth;
				shouldKeepAspectRatio = Utils.isNullOrUndefined(options.keepAspectRatio) ? shouldKeepAspectRatio : options.keepAspectRatio;
			}

			if (!permissions.hasPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE)) {
				saveToGallery = false;
			}

			let takePictureIntent = new android.content.Intent(android.provider.MediaStore.ACTION_IMAGE_CAPTURE);
			let dateStamp = createDateTimeStamp();

			let picturePath: string;
			let nativeFile;
			const fileName = 'NSIMG_' + dateStamp + '.jpg';
			const createTmpFile = () => {
				picturePath = Utils.android.getApplicationContext().getExternalFilesDir(null).getAbsolutePath() + '/' + fileName;
				nativeFile = new java.io.File(picturePath);
			};
			if (saveToGallery) {
				const externalDir = Utils.android.getApplicationContext().getExternalFilesDir(android.os.Environment.DIRECTORY_DCIM);
				if (externalDir == null) {
					createTmpFile();
				} else {
					if (!externalDir.exists()) {
						externalDir.mkdirs();
					}
					const cameraDir = new java.io.File(externalDir, 'Camera');

					if (!cameraDir.exists()) {
						cameraDir.mkdirs();
					}

					nativeFile = new java.io.File(cameraDir, fileName);
					picturePath = nativeFile.getAbsolutePath();
				}
			} else {
				createTmpFile();
			}
			const sdkVersionInt = parseInt(Device.sdkVersion, 10);
			let tempPictureUri;
			if (sdkVersionInt >= 21) {
				tempPictureUri = FileProviderPackageName.FileProvider.getUriForFile(Utils.android.getApplicationContext(), Application.android.nativeApp.getPackageName() + '.provider', nativeFile);
			} else {
				tempPictureUri = android.net.Uri.fromFile(nativeFile);
			}
			takePictureIntent.putExtra(android.provider.MediaStore.EXTRA_OUTPUT, tempPictureUri);

			if (options && options.cameraFacing === 'front') {
				takePictureIntent.putExtra('android.intent.extras.CAMERA_FACING', android.hardware.Camera.CameraInfo.CAMERA_FACING_FRONT);
			} else {
				takePictureIntent.putExtra('android.intent.extras.CAMERA_FACING', android.hardware.Camera.CameraInfo.CAMERA_FACING_BACK);
			}

			// Remove previous listeners if any
			Application.android.off('activityResult');

			Application.android.on('activityResult', (args) => {
				const requestCode = args.requestCode;
				const resultCode = args.resultCode;

				if (requestCode === REQUEST_IMAGE_CAPTURE && resultCode === android.app.Activity.RESULT_OK) {
					if (saveToGallery) {
						const currentTimeMillis = java.lang.Integer.valueOf(java.lang.System.currentTimeMillis());
						const values = new android.content.ContentValues();
						values.put(android.provider.MediaStore.MediaColumns.DISPLAY_NAME, fileName);
						values.put(android.provider.MediaStore.MediaColumns.DATE_ADDED, currentTimeMillis);
						values.put(android.provider.MediaStore.MediaColumns.DATE_MODIFIED, currentTimeMillis);
						values.put(android.provider.MediaStore.MediaColumns.MIME_TYPE, 'image/*');

						if (sdkVersionInt >= 29) {
							values.put(android.provider.MediaStore.MediaColumns.RELATIVE_PATH, android.os.Environment.DIRECTORY_DCIM);
							values.put(android.provider.MediaStore.MediaColumns.IS_PENDING, java.lang.Integer.valueOf(1));
							values.put(android.provider.MediaStore.MediaColumns.DATE_TAKEN, currentTimeMillis);
						}

						const uri = Utils.android.getApplicationContext().getContentResolver().insert(android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI, values);

						const fos: java.io.FileOutputStream = Utils.android.getApplicationContext().getContentResolver().openOutputStream(uri);
						const fis = new java.io.FileInputStream(nativeFile);
						try {
							(org as any).nativescript.plugins.camera.Utils.copy(fis, fos);
							if (sdkVersionInt >= 29) {
								values.clear();
								values.put((android as any).provider.MediaStore.Video.Media.IS_PENDING, java.lang.Integer.valueOf(0));
								Utils.android.getApplicationContext().getContentResolver().update(uri, values, null, null);
							}
						} catch (e) {
							reject(e);
						}
					}

					let exif = new android.media.ExifInterface(picturePath);
					let orientation = exif.getAttributeInt(android.media.ExifInterface.TAG_ORIENTATION, android.media.ExifInterface.ORIENTATION_NORMAL);

					if (orientation === android.media.ExifInterface.ORIENTATION_ROTATE_90) {
						rotateBitmap(picturePath, 90);
					} else if (orientation === android.media.ExifInterface.ORIENTATION_ROTATE_180) {
						rotateBitmap(picturePath, 180);
					} else if (orientation === android.media.ExifInterface.ORIENTATION_ROTATE_270) {
						rotateBitmap(picturePath, 270);
					}

					if (shouldKeepAspectRatio) {
						let pictureWidth = exif.getAttributeInt(android.media.ExifInterface.TAG_IMAGE_WIDTH, 0);
						let pictureHeight = exif.getAttributeInt(android.media.ExifInterface.TAG_IMAGE_LENGTH, 0);
						let isPictureLandscape = pictureWidth > pictureHeight;
						let areOptionsLandscape = reqWidth > reqHeight;
						if (isPictureLandscape !== areOptionsLandscape) {
							let oldReqWidth = reqWidth;
							reqWidth = reqHeight;
							reqHeight = oldReqWidth;
						}
					}

					let asset = new ImageAsset(picturePath);
					asset.options = {
						width: reqWidth,
						height: reqHeight,
						keepAspectRatio: shouldKeepAspectRatio,
					};
					resolve(asset);
				} else if (resultCode === android.app.Activity.RESULT_CANCELED) {
					// User cancelled the image capture
					reject(new Error('cancelled'));
				}
			});

			(Application.android.foregroundActivity || Application.android.startActivity).startActivityForResult(takePictureIntent, REQUEST_IMAGE_CAPTURE);
		} catch (e) {
			if (reject) {
				reject(e);
			}
		}
	});
};

const RESULT_CANCELED = 0;
const RESULT_OK = -1;
const REQUEST_VIDEO_CAPTURE = 999;

export let recordVideo = function (options: CameraRecordOptions): Promise<{ file: string }> {
	return new Promise(async (resolve, reject) => {
		try {
			const pkgName = Utils.ad.getApplication().getPackageName();
			const state = android.os.Environment.getExternalStorageState();
			if (state !== android.os.Environment.MEDIA_MOUNTED) {
				return reject(new Error('Storage not mounted'));
			}
			const sdkVersionInt = parseInt(Device.sdkVersion, 10);

			const intent = new android.content.Intent(android.provider.MediaStore.ACTION_VIDEO_CAPTURE);

			intent.putExtra('android.intent.extra.videoQuality', options?.hd ? 1 : 0);

			if (sdkVersionInt >= 21) {
				intent.putExtra('android.intent.extras.CAMERA_FACING', options?.cameraFacing === 'front' ? android.hardware.Camera.CameraInfo.CAMERA_FACING_FRONT : android.hardware.Camera.CameraInfo.CAMERA_FACING_BACK);
				intent.putExtra('android.intent.extra.USE_FRONT_CAMERA', options?.cameraFacing === 'front');
				intent.putExtra('android.intent.extras.LENS_FACING_FRONT', options?.cameraFacing === 'front' ? 1 : 0);
			} else {
				intent.putExtra('android.intent.extras.CAMERA_FACING', options?.cameraFacing === 'front' ? android.hardware.Camera.CameraInfo.CAMERA_FACING_FRONT : android.hardware.Camera.CameraInfo.CAMERA_FACING_BACK);
			}

			if (typeof options?.size === 'number' && options?.size > 0) {
				intent.putExtra(android.provider.MediaStore.EXTRA_SIZE_LIMIT, options.size * 1024 * 1024);
			}

			let saveToGallery = options?.saveToGallery ?? false;

			const dateStamp = createDateTimeStamp();

			const fileName = `NSVID_${dateStamp}.mp4`;
			let videoPath: string;
			let nativeFile: java.io.File;
			let tempPictureUri;

			if (saveToGallery) {
				await permissions.requestPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE);
			}
			if (!permissions.hasPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE)) {
				saveToGallery = false;
			}
			const createTmpFile = () => {
				videoPath = Utils.android.getApplicationContext().getExternalFilesDir(null).getAbsolutePath() + '/' + fileName;
				nativeFile = new java.io.File(videoPath);
			};
			if (saveToGallery) {
				const externalDir = Utils.android.getApplicationContext().getExternalFilesDir(android.os.Environment.DIRECTORY_DCIM);
				if (externalDir == null) {
					createTmpFile();
				} else {
					if (!externalDir.exists()) {
						externalDir.mkdirs();
					}
					const cameraDir = new java.io.File(externalDir, 'Camera');

					if (!cameraDir.exists()) {
						cameraDir.mkdirs();
					}

					nativeFile = new java.io.File(cameraDir, fileName);
					videoPath = nativeFile.getAbsolutePath();
				}
			} else {
				createTmpFile();
			}

			if (sdkVersionInt >= 21) {
				tempPictureUri = androidx.core.content.FileProvider.getUriForFile(Utils.android.getApplicationContext(), `${pkgName}.provider`, nativeFile);
			} else {
				tempPictureUri = android.net.Uri.fromFile(nativeFile);
			}

			intent.putExtra(android.provider.MediaStore.EXTRA_OUTPUT, tempPictureUri);

			intent.setFlags(android.content.Intent.FLAG_GRANT_READ_URI_PERMISSION | android.content.Intent.FLAG_GRANT_WRITE_URI_PERMISSION);

			if (typeof options?.duration === 'number' && options?.duration > 0) {
				intent.putExtra(android.provider.MediaStore.EXTRA_DURATION_LIMIT, options.duration);
			}

			const callBack = (args: AndroidActivityResultEventData) => {
				if (args.requestCode === REQUEST_VIDEO_CAPTURE && args.resultCode === RESULT_OK) {
					if (saveToGallery) {
						try {
							const currentTimeMillis = java.lang.Integer.valueOf(java.lang.System.currentTimeMillis());
							const values = new android.content.ContentValues();

							values.put(android.provider.MediaStore.MediaColumns.DISPLAY_NAME, fileName);
							values.put(android.provider.MediaStore.MediaColumns.DATE_ADDED, currentTimeMillis);
							values.put(android.provider.MediaStore.MediaColumns.DATE_MODIFIED, currentTimeMillis);
							values.put(android.provider.MediaStore.MediaColumns.MIME_TYPE, 'video/*');

							if (sdkVersionInt >= 29) {
								values.put(android.provider.MediaStore.MediaColumns.RELATIVE_PATH, android.os.Environment.DIRECTORY_DCIM);
								values.put(android.provider.MediaStore.MediaColumns.IS_PENDING, java.lang.Integer.valueOf(1));
								values.put(android.provider.MediaStore.MediaColumns.DATE_TAKEN, currentTimeMillis);
							}

							const uri = Utils.android.getApplicationContext().getContentResolver().insert(android.provider.MediaStore.Video.Media.EXTERNAL_CONTENT_URI, values);

							const fos: java.io.FileOutputStream = Utils.android.getApplicationContext().getContentResolver().openOutputStream(uri);

							const fis = new java.io.FileInputStream(nativeFile);

							(org as any).nativescript.plugins.camera.Utils.copy(fis, fos);
							if (sdkVersionInt >= 29) {
								values.clear();
								// @ts-ignore
								values.put(android.provider.MediaStore.Video.Media.IS_PENDING, java.lang.Integer.valueOf(0));
								Utils.android.getApplicationContext().getContentResolver().update(uri, values, null, null);
							}
							resolve({ file: videoPath });
						} catch (e) {
							reject(e);
						}
					} else {
						resolve({ file: videoPath });
					}
				} else if (args.resultCode === RESULT_CANCELED) {
					// User cancelled the image capture
					reject(new Error('cancelled'));
				}

				Application.android.off(AndroidApplication.activityResultEvent, callBack);
			};
			Application.android.on(AndroidApplication.activityResultEvent, callBack);

			Application.android.foregroundActivity.startActivityForResult(intent, REQUEST_VIDEO_CAPTURE);
		} catch (e) {
			reject(e);
		}
	});
};

export let isAvailable = function () {
	return Utils.android.getApplicationContext().getPackageManager().hasSystemFeature(android.content.pm.PackageManager.FEATURE_CAMERA);
};

export let requestPermissions = function () {
	return permissions.requestPermissions([android.Manifest.permission.WRITE_EXTERNAL_STORAGE, android.Manifest.permission.CAMERA]);
};

export let requestPhotosPermissions = function () {
	return permissions.requestPermissions([android.Manifest.permission.WRITE_EXTERNAL_STORAGE]);
};

export let requestCameraPermissions = function () {
	return permissions.requestPermissions([android.Manifest.permission.CAMERA]);
};

export let requestRecordPermissions = function () {
	return permissions.requestPermissions([android.Manifest.permission.CAMERA, android.Manifest.permission.RECORD_AUDIO]);
};

let createDateTimeStamp = function () {
	let result = '';
	let date = new Date();
	result = date.getFullYear().toString() + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) + (date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString()) + '_' + date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString();

	return result;
};

let rotateBitmap = function (picturePath, angle) {
	try {
		let matrix = new android.graphics.Matrix();
		matrix.postRotate(angle);
		let bmOptions = new android.graphics.BitmapFactory.Options();
		let oldBitmap = android.graphics.BitmapFactory.decodeFile(picturePath, bmOptions);
		let finalBitmap = android.graphics.Bitmap.createBitmap(oldBitmap, 0, 0, oldBitmap.getWidth(), oldBitmap.getHeight(), matrix, true);
		let out = new java.io.FileOutputStream(picturePath);
		finalBitmap.compress(android.graphics.Bitmap.CompressFormat.JPEG, 100, out);
		out.flush();
		out.close();
	} catch (ex) {
		if (Trace.isEnabled()) {
			Trace.write(`An error occurred while rotating file ${picturePath} (using the original one): ${ex.message}!`, Trace.categories.Debug);
		}
	}
};
