import { Utils, ImageSource, ImageAsset, Trace, Frame, knownFolders, path as nsPath, File } from '@nativescript/core';
import { CameraOptions, CameraRecordOptions } from '.';

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

@NativeClass
@ObjCClass(UIImagePickerControllerDelegate)
class UIImagePickerControllerVideoDelegateImpl extends NSObject implements UIImagePickerControllerDelegate {
	private _saveToGallery: boolean;
	private _resolve: (result?: { file: string }) => void;
	private _reject: (error?: any) => void;
	private _format: 'default' | 'mp4' = 'default';
	private _hd: boolean;

	public static initWithCallback(resolve: (result?) => void, reject: () => void): UIImagePickerControllerVideoDelegateImpl {
		const delegate = UIImagePickerControllerVideoDelegateImpl.new() as UIImagePickerControllerVideoDelegateImpl;
		delegate._resolve = resolve;
		delegate._reject = reject;
		return delegate;
	}

	public static initWithCallbackOptions(resolve: (result?: { file: string }) => void, reject: (result?: { file: string }) => void, options?: CameraRecordOptions): UIImagePickerControllerVideoDelegateImpl {
		const delegate = UIImagePickerControllerVideoDelegateImpl.new() as UIImagePickerControllerVideoDelegateImpl;
		if (options) {
			delegate._saveToGallery = options.saveToGallery;
			delegate._format = options.format;
			delegate._hd = options.hd;
		}
		delegate._resolve = resolve;
		delegate._reject = reject;
		return delegate;
	}

	imagePickerControllerDidCancel(picker) {
		picker.presentingViewController.dismissViewControllerAnimatedCompletion(true, null);
		listener = null;
	}

	private saveToGallery(currentDate: Date, source: NSURL) {
		PHPhotoLibrary.sharedPhotoLibrary().performChangesCompletionHandler(
			() => {
				PHAssetChangeRequest.creationRequestForAssetFromVideoAtFileURL(source);
			},
			(success, err) => {
				if (success) {
					let fetchOptions = PHFetchOptions.alloc().init();
					let sortDescriptors = NSArray.arrayWithObject(NSSortDescriptor.sortDescriptorWithKeyAscending('creationDate', false));
					fetchOptions.sortDescriptors = sortDescriptors;
					fetchOptions.predicate = NSPredicate.predicateWithFormatArgumentArray('mediaType = %d', NSArray.arrayWithObject(PHAssetMediaType.Video));
					let fetchResult = PHAsset.fetchAssetsWithOptions(fetchOptions);

					if (fetchResult.count > 0) {
						let asset = <PHAsset>fetchResult.objectAtIndex(0);

						const opts = PHVideoRequestOptions.new();
						opts.version = PHVideoRequestOptionsVersion.Original;

						const dateDiff = asset.creationDate.valueOf() - currentDate.valueOf();
						if (Math.abs(dateDiff) > 1000) {
							// Video create date is rounded when asset is created.
							// Display waring if the asset was created more than 1s before/after the current date.
							console.warn('Video returned was created more than 1 second ago');
						}
						PHImageManager.defaultManager().requestAVAssetForVideoOptionsResultHandler(asset, opts, (asset, audioMix, info) => {
							if (asset instanceof AVURLAsset) {
								asset.URL;
								this._resolve({ file: asset.URL?.absoluteString });
							} else {
								this._reject('Failed to load asset');
							}
						});
					}
				} else {
					Trace.write('An error ocurred while saving image to gallery: ' + err, Trace.categories.Error, Trace.messageType.error);
				}
			}
		);
	}

	imagePickerControllerDidFinishPickingMediaWithInfo(picker, info) {
		if (info) {
			let currentDate: Date = new Date();
			let source = info.objectForKey(UIImagePickerControllerMediaURL);
			const fileName = `NSVID_${createDateTimeStamp()}.mp4`;
			const path = nsPath.join(knownFolders.documents().path, fileName);
			if (this._saveToGallery) {
				if (this._format === 'mp4') {
					let asset = AVAsset.assetWithURL(source);
					let preset = this._hd ? AVAssetExportPresetHighestQuality : AVAssetExportPresetLowQuality;
					let session = AVAssetExportSession.exportSessionWithAssetPresetName(asset, preset);
					session.outputFileType = AVFileTypeMPEG4;
					const nativePath = NSURL.fileURLWithPath(path);
					session.outputURL = nativePath;
					session.exportAsynchronouslyWithCompletionHandler(() => {
						this.saveToGallery(currentDate, nativePath);
					});
				} else {
					this.saveToGallery(currentDate, NSURL.fileURLWithPath(path));
				}
			} else {
				if (this._format === 'mp4') {
					const asset = AVAsset.assetWithURL(source);
					const preset = this._hd ? AVAssetExportPresetHighestQuality : AVAssetExportPresetLowQuality;
					const session = AVAssetExportSession.exportSessionWithAssetPresetName(asset, preset);
					session.outputFileType = AVFileTypeMPEG4;
					session.outputURL = NSURL.fileURLWithPath(path);
					session.exportAsynchronouslyWithCompletionHandler(() => {
						if (session.error) {
							this._reject(session.error.localizedDescription);
						} else {
							File.fromPath(source.path).removeSync();
							this._resolve({ file: path });
						}
					});
				} else {
					this._resolve({ file: source.path });
				}
			}
			picker.presentingViewController.dismissViewControllerAnimatedCompletion(true, null);
			listener = null;
		}
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

		let authStatus = PHPhotoLibrary.authorizationStatus();
		if (authStatus !== PHAuthorizationStatus.Authorized) {
			saveToGallery = false;
		}

		if (reqWidth && reqHeight) {
			listener = UIImagePickerControllerDelegateImpl.new().initWithCallbackAndOptions(resolve, reject, { width: reqWidth, height: reqHeight, keepAspectRatio: keepAspectRatio, saveToGallery: saveToGallery, allowsEditing: allowsEditing });
		} else if (saveToGallery) {
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

export let recordVideo = function (options: CameraRecordOptions): Promise<{ file: string }> {
	return new Promise((resolve, reject) => {
		listener = null;
		let modalPresentationStyle = UIModalPresentationStyle.FullScreen;
		let picker = UIImagePickerController.new();
		picker.mediaTypes = <any>[kUTTypeMovie];
		picker.sourceType = UIImagePickerControllerSourceType.Camera;
		picker.cameraCaptureMode = UIImagePickerControllerCameraCaptureMode.Video;

		picker.cameraDevice = options?.cameraFacing === 'front' ? UIImagePickerControllerCameraDevice.Front : UIImagePickerControllerCameraDevice.Rear;
		picker.allowsEditing = typeof options?.allowsEditing === 'boolean' ? options.allowsEditing : false;
		picker.videoQuality = options?.hd ? UIImagePickerControllerQualityType.TypeHigh : UIImagePickerControllerQualityType.TypeLow;

		if (typeof options?.duration === 'number' && options.duration > 0) {
			picker.videoMaximumDuration = options.duration;
		}

		if (options) {
			listener = UIImagePickerControllerVideoDelegateImpl.initWithCallbackOptions(resolve, reject, options);
		} else {
			listener = UIImagePickerControllerVideoDelegateImpl.initWithCallback(resolve, reject);
		}

		picker.delegate = listener;
		picker.modalPresentationStyle = modalPresentationStyle;

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

				viewController.presentViewControllerAnimatedCompletion(picker, true, null);
			}
		}
	});
};

export let isAvailable = function () {
	return UIImagePickerController.isSourceTypeAvailable(UIImagePickerControllerSourceType.Camera);
};

export let requestPermissions = function () {
	return new Promise(function (resolve, reject) {
		requestPhotosPermissions().then(() => {
			requestCameraPermissions().then(resolve, reject);
		}, reject);
	});
};

export let requestPhotosPermissions = function () {
	return new Promise<void>(function (resolve, reject) {
		let authStatus = PHPhotoLibrary.authorizationStatus();
		switch (authStatus) {
			case PHAuthorizationStatus.NotDetermined: {
				PHPhotoLibrary.requestAuthorization((auth) => {
					if (auth === PHAuthorizationStatus.Authorized) {
						if (Trace.isEnabled()) {
							Trace.write('Application can access photo library assets.', Trace.categories.Debug);
						}
						resolve();
					} else {
						reject();
					}
				});
				break;
			}
			case PHAuthorizationStatus.Authorized: {
				if (Trace.isEnabled()) {
					Trace.write('Application can access photo library assets.', Trace.categories.Debug);
				}
				resolve();
				break;
			}
			case PHAuthorizationStatus.Restricted:
			case PHAuthorizationStatus.Denied: {
				if (Trace.isEnabled()) {
					Trace.write('Application can not access photo library assets.', Trace.categories.Debug);
				}
				reject();
				break;
			}
		}
	});
};

export let requestCameraPermissions = function () {
	return new Promise<void>(function (resolve, reject) {
		let cameraStatus = AVCaptureDevice.authorizationStatusForMediaType(AVMediaTypeVideo);
		switch (cameraStatus) {
			case AVAuthorizationStatus.NotDetermined: {
				AVCaptureDevice.requestAccessForMediaTypeCompletionHandler(AVMediaTypeVideo, (granted) => {
					if (granted) {
						resolve();
					} else {
						reject();
					}
				});
				break;
			}
			case AVAuthorizationStatus.Authorized: {
				resolve();
				break;
			}
			case AVAuthorizationStatus.Restricted:
			case AVAuthorizationStatus.Denied: {
				if (Trace.isEnabled()) {
					Trace.write('Application can not access Camera assets.', Trace.categories.Debug);
				}
				reject();
				break;
			}
		}
	});
};

let createDateTimeStamp = function () {
	let result = '';
	let date = new Date();
	result = date.getFullYear().toString() + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) + (date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString()) + '_' + date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString();

	return result;
};
