import { Utils, Application, Device, Trace, ImageAsset } from '@nativescript/core';
import * as permissions from 'nativescript-permissions';
import { CameraOptions } from '.';

const REQUEST_IMAGE_CAPTURE = 3453;
declare let global: any;

const useAndroidX = function () {
	return global.androidx && global.androidx.appcompat;
};
const FileProviderPackageName = useAndroidX() ? global.androidx.core.content : global.android.support.v4.content;

export const takePicture = function (options?: CameraOptions): Promise<any> {
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

			const density = Utils.layout.getDisplayDensity();
			if (options) {
				saveToGallery = Utils.isNullOrUndefined(options.saveToGallery) ? saveToGallery : options.saveToGallery;
				reqWidth = options.width ? options.width * density : reqWidth;
				reqHeight = options.height ? options.height * density : reqWidth;
				shouldKeepAspectRatio = Utils.isNullOrUndefined(options.keepAspectRatio) ? shouldKeepAspectRatio : options.keepAspectRatio;
			}

			if (!api33() && !permissions.hasPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE)) {
				saveToGallery = false;
			}

			const takePictureIntent = new android.content.Intent(android.provider.MediaStore.ACTION_IMAGE_CAPTURE);
			const dateStamp = createDateTimeStamp();

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
				tempPictureUri = FileProviderPackageName.FileProvider.getUriForFile(Application.android.context, Application.android.nativeApp.getPackageName() + '.provider', nativeFile);
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

						const fos = Utils.android.getApplicationContext().getContentResolver().openOutputStream(uri);
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

					const exif = new android.media.ExifInterface(picturePath);
					const orientation = exif.getAttributeInt(android.media.ExifInterface.TAG_ORIENTATION, android.media.ExifInterface.ORIENTATION_NORMAL);

					if (orientation === android.media.ExifInterface.ORIENTATION_ROTATE_90) {
						rotateBitmap(picturePath, 90);
					} else if (orientation === android.media.ExifInterface.ORIENTATION_ROTATE_180) {
						rotateBitmap(picturePath, 180);
					} else if (orientation === android.media.ExifInterface.ORIENTATION_ROTATE_270) {
						rotateBitmap(picturePath, 270);
					}

					if (shouldKeepAspectRatio) {
						const pictureWidth = exif.getAttributeInt(android.media.ExifInterface.TAG_IMAGE_WIDTH, 0);
						const pictureHeight = exif.getAttributeInt(android.media.ExifInterface.TAG_IMAGE_LENGTH, 0);
						const isPictureLandscape = pictureWidth > pictureHeight;
						const areOptionsLandscape = reqWidth > reqHeight;
						if (isPictureLandscape !== areOptionsLandscape) {
							const oldReqWidth = reqWidth;
							reqWidth = reqHeight;
							reqHeight = oldReqWidth;
						}
					}

					const asset = new ImageAsset(picturePath);
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

export const isAvailable = function () {
	return Utils.android.getApplicationContext().getPackageManager().hasSystemFeature(android.content.pm.PackageManager.FEATURE_CAMERA);
};

function api33(): boolean {
	return (<any>android).os.Build.VERSION.SDK_INT >= 33 && Utils.ad.getApplicationContext().getApplicationInfo().targetSdkVersion >= 33;
}

export const requestPermissions = function () {
	if (api33()) {
		return permissions.requestPermissions([android.Manifest.permission.CAMERA]);
	} else {
		return permissions.requestPermissions([android.Manifest.permission.WRITE_EXTERNAL_STORAGE, android.Manifest.permission.CAMERA]);
	}
};

export const requestPhotosPermissions = function () {
	return permissions.requestPermissions([android.Manifest.permission.WRITE_EXTERNAL_STORAGE]);
};

export const requestCameraPermissions = function () {
	return permissions.requestPermissions([android.Manifest.permission.CAMERA]);
};

const createDateTimeStamp = function () {
	let result = '';
	const date = new Date();
	result = date.getFullYear().toString() + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) + (date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString()) + '_' + date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString();

	return result;
};

const rotateBitmap = function (picturePath, angle) {
	try {
		const matrix = new android.graphics.Matrix();
		matrix.postRotate(angle);
		const bmOptions = new android.graphics.BitmapFactory.Options();
		const oldBitmap = android.graphics.BitmapFactory.decodeFile(picturePath, bmOptions);
		const finalBitmap = android.graphics.Bitmap.createBitmap(oldBitmap, 0, 0, oldBitmap.getWidth(), oldBitmap.getHeight(), matrix, true);
		const out = new java.io.FileOutputStream(picturePath);
		finalBitmap.compress(android.graphics.Bitmap.CompressFormat.JPEG, 100, out);
		out.flush();
		out.close();
	} catch (ex) {
		if (Trace.isEnabled()) {
			Trace.write(`An error occurred while rotating file ${picturePath} (using the original one): ${ex.message}!`, Trace.categories.Debug);
		}
	}
};
