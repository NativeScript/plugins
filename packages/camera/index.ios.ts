import { Device, Frame, ImageAsset, ImageSource, Trace, Utils } from '@nativescript/core';
import { CameraOptions } from '.';

import * as permissions from '@nativescript-community/perms';
import { combineCamerPhotoPermissions, mapCameraPermissionStatus, mapError, mapPhotoPermissionStatus, PermissionResult, PermissionsResult } from './common';

@NativeClass()
class UIImagePickerControllerDelegateImpl extends NSObject implements UIImagePickerControllerDelegate {
	public static ObjCProtocols = [UIImagePickerControllerDelegate];

	static new(): UIImagePickerControllerDelegateImpl {
		return <UIImagePickerControllerDelegateImpl>super.new();
	}

	private _callback: (result?) => void;
	private _errorCallback: (result?) => void;

	private _width: number;
	private _height: number;
	private _keepAspectRatio: boolean;
	private _saveToGallery: boolean;
	private _allowsEditing: boolean;

	public initWithCallback(callback: (result?) => void, errorCallback: (result?) => void): UIImagePickerControllerDelegateImpl {
		this._callback = callback;
		this._errorCallback = errorCallback;
		return this;
	}

	public initWithCallbackAndOptions(callback: (result?) => void, errorCallback: (result?) => void, options?): UIImagePickerControllerDelegateImpl {
		this._callback = callback;
		this._errorCallback = errorCallback;
		if (options) {
			this._width = options.width;
			this._height = options.height;
			this._saveToGallery = options.saveToGallery;
			this._allowsEditing = options.allowsEditing;
			this._keepAspectRatio = Utils.isNullOrUndefined(options.keepAspectRatio) ? true : options.keepAspectRatio;
		}
		return this;
	}

	imagePickerControllerDidFinishPickingMediaWithInfo(picker, info): void {
		if (info) {
			let currentDate: Date = new Date();
			let source = info.valueForKey(UIImagePickerControllerOriginalImage);
			if (this._allowsEditing) {
				source = info.valueForKey(UIImagePickerControllerEditedImage);
			}
			if (source) {
				let imageSourceResult = new ImageSource(source);

				if (this._callback) {
					let imageAsset: ImageAsset;
					if (this._saveToGallery) {
						PHPhotoLibrary.sharedPhotoLibrary().performChangesCompletionHandler(
							() => {
								PHAssetChangeRequest.creationRequestForAssetFromImage(imageSourceResult.ios);
							},
							(success, err) => {
								if (success) {
									let fetchOptions = PHFetchOptions.alloc().init();
									let sortDescriptors = NSArray.arrayWithObject(NSSortDescriptor.sortDescriptorWithKeyAscending('creationDate', false));
									fetchOptions.sortDescriptors = sortDescriptors;
									fetchOptions.predicate = NSPredicate.predicateWithFormatArgumentArray('mediaType = %d', NSArray.arrayWithObject(PHAssetMediaType.Image));
									let fetchResult = PHAsset.fetchAssetsWithOptions(fetchOptions);

									if (fetchResult.count > 0) {
										// Take last picture
										let asset = <PHAsset>fetchResult.objectAtIndex(0);

										const dateDiff = asset.creationDate.valueOf() - currentDate.valueOf();
										if (Math.abs(dateDiff) > 1000) {
											// Image assets create date is rounded when asset is created.
											// Display waring if the asset was created more than 1s before/after the current date.
											console.warn('Image asset returned was created more than 1 second ago');
										}
										imageAsset = new ImageAsset(asset);
										this.setImageAssetAndCallCallback(imageAsset);
									}
								} else {
									Trace.write('An error ocurred while saving image to gallery: ' + err, Trace.categories.Error, Trace.messageType.error);
								}
							}
						);
					} else {
						imageAsset = new ImageAsset(imageSourceResult.ios);
						this.setImageAssetAndCallCallback(imageAsset);
					}
				}
			}
		}
		picker.presentingViewController.dismissViewControllerAnimatedCompletion(true, null);
		listener = null;
	}

	private setImageAssetAndCallCallback(imageAsset: ImageAsset) {
		if (this._keepAspectRatio) {
			let pictureWidth = imageAsset.nativeImage ? imageAsset.nativeImage.size.width : imageAsset.ios.pixelWidth;
			let pictureHeight = imageAsset.nativeImage ? imageAsset.nativeImage.size.height : imageAsset.ios.pixelHeight;
			let isPictureLandscape = pictureWidth > pictureHeight;
			let areOptionsLandscape = this._width > this._height;
			if (isPictureLandscape !== areOptionsLandscape) {
				let oldWidth = this._width;
				this._width = this._height;
				this._height = oldWidth;
			}
		}
		imageAsset.options = {
			width: this._width,
			height: this._height,
			keepAspectRatio: this._keepAspectRatio,
		};
		this._callback(imageAsset);
	}

	imagePickerControllerDidCancel(picker): void {
		picker.presentingViewController.dismissViewControllerAnimatedCompletion(true, null);
		listener = null;
		this._errorCallback(new Error('cancelled'));
	}
}

let listener;

export let takePicture = function (options: CameraOptions): Promise<any> {
	return new Promise((resolve, reject) => {
		listener = null;
		let imagePickerController = UIImagePickerController.new();
		let reqWidth = 0;
		let reqHeight = 0;
		let keepAspectRatio = true;
		let saveToGallery = true;
		let allowsEditing = false;
		let modalPresentationStyle = UIModalPresentationStyle.FullScreen;

		if (options) {
			reqWidth = options.width || 0;
			reqHeight = options.height || reqWidth;
			keepAspectRatio = Utils.isNullOrUndefined(options.keepAspectRatio) ? keepAspectRatio : options.keepAspectRatio;
			saveToGallery = Utils.isNullOrUndefined(options.saveToGallery) ? saveToGallery : options.saveToGallery;
			allowsEditing = Utils.isNullOrUndefined(options.allowsEditing) ? allowsEditing : options.allowsEditing;
			if (typeof options.modalPresentationStyle === 'number') {
				modalPresentationStyle = options.modalPresentationStyle;
			}
		}
		let authStatus: PHAuthorizationStatus;
		if (parseFloat(Device.osVersion) >= 14) {
			authStatus = PHPhotoLibrary.authorizationStatusForAccessLevel(PHAccessLevel.ReadWrite);
		} else {
			authStatus = PHPhotoLibrary.authorizationStatus();
		}

		if (authStatus !== PHAuthorizationStatus.Authorized && authStatus !== PHAuthorizationStatus.Limited) {
			saveToGallery = false;
		}

		if (reqWidth && reqHeight) {
			listener = UIImagePickerControllerDelegateImpl.new().initWithCallbackAndOptions(resolve, reject, { width: reqWidth, height: reqHeight, keepAspectRatio: keepAspectRatio, saveToGallery: saveToGallery, allowsEditing: allowsEditing });
		} else if (saveToGallery || keepAspectRatio) {
			listener = UIImagePickerControllerDelegateImpl.new().initWithCallbackAndOptions(resolve, reject, { saveToGallery: saveToGallery, keepAspectRatio: keepAspectRatio, allowsEditing: allowsEditing });
		} else {
			listener = UIImagePickerControllerDelegateImpl.new().initWithCallback(resolve, reject);
		}
		imagePickerController.delegate = listener;

		let sourceType = UIImagePickerControllerSourceType.Camera;
		let mediaTypes = UIImagePickerController.availableMediaTypesForSourceType(sourceType);
		let imageMediaType = 'public.image';
		if (mediaTypes && mediaTypes.containsObject(imageMediaType)) {
			let mediaTypesArray = new NSMutableArray<string>({ capacity: 1 });
			mediaTypesArray.addObject(imageMediaType);
			imagePickerController.mediaTypes = mediaTypesArray;
			imagePickerController.sourceType = sourceType;
			imagePickerController.cameraDevice = options && options.cameraFacing === 'front' ? UIImagePickerControllerCameraDevice.Front : UIImagePickerControllerCameraDevice.Rear;
			imagePickerController.allowsEditing = allowsEditing;
		}

		imagePickerController.modalPresentationStyle = modalPresentationStyle;

		let topMostFrame = Frame.topmost();
		if (topMostFrame) {
			let viewController: UIViewController = topMostFrame.currentPage && topMostFrame.currentPage.ios;
			if (viewController) {
				while (viewController.parentViewController) {
					// find top-most view controler
					viewController = viewController.parentViewController;
				}

				while (viewController.presentedViewController) {
					// find last presented modal
					viewController = viewController.presentedViewController;
				}

				viewController.presentViewControllerAnimatedCompletion(imagePickerController, true, null);
			}
		}
	});
};

export let isAvailable = function () {
	return UIImagePickerController.isSourceTypeAvailable(UIImagePickerControllerSourceType.Camera);
};

export let requestPermissions = function (): Promise<PermissionsResult> {
	return requestCameraPermissions().then((cameraPermissions) => requestPhotosPermissions().then((photoPermissions) => combineCamerPhotoPermissions(cameraPermissions, photoPermissions)));
};

export let requestPhotosPermissions = function (): Promise<PermissionResult> {
	return permissions
		.request('photo')
		.then((photoPermissions) => mapPhotoPermissionStatus(photoPermissions))
		.catch((e) => mapError(e));
};

export let requestCameraPermissions = function (): Promise<PermissionResult> {
	return permissions
		.request('camera')
		.then((photoPermissions) => mapCameraPermissionStatus(photoPermissions))
		.catch((e) => mapError(e));
};
