import { Observable, ImageAsset, View, Utils, Application } from '@nativescript/core';
import { Options, ImagePickerMediaType } from './common';
export * from './common';

const defaultAssetCollectionSubtypes: NSArray<any> = NSArray.arrayWithArray(<any>[PHAssetCollectionSubtype.SmartAlbumRecentlyAdded, PHAssetCollectionSubtype.SmartAlbumUserLibrary, PHAssetCollectionSubtype.AlbumMyPhotoStream, PHAssetCollectionSubtype.SmartAlbumFavorites, PHAssetCollectionSubtype.SmartAlbumPanoramas, PHAssetCollectionSubtype.SmartAlbumBursts, PHAssetCollectionSubtype.AlbumCloudShared, PHAssetCollectionSubtype.SmartAlbumSelfPortraits, PHAssetCollectionSubtype.SmartAlbumScreenshots, PHAssetCollectionSubtype.SmartAlbumLivePhotos]);

export class ImagePicker extends Observable {
	_imagePickerController: QBImagePickerController;
	_hostView: View;
	_delegate: ImagePickerControllerDelegate;

	// lazy-load latest frame.topmost() if _hostName is not used
	get hostView() {
		return this._hostView;
	}

	get hostController(): UIViewController {
		let vc = Application.ios.rootController;
		while (vc && vc.presentedViewController) {
			vc = vc.presentedViewController;
		}
		return vc;
	}

	constructor(options: Options = {}, hostView: View) {
		super();

		this._hostView = hostView;

		let imagePickerController = QBImagePickerController.alloc().init();

		imagePickerController.assetCollectionSubtypes = defaultAssetCollectionSubtypes;
		imagePickerController.mediaType = options.mediaType ? <QBImagePickerMediaType>options.mediaType.valueOf() : QBImagePickerMediaType.Any;
		imagePickerController.allowsMultipleSelection = options.mode !== 'single';
		imagePickerController.minimumNumberOfSelection = options.minimumNumberOfSelection || 0;
		imagePickerController.maximumNumberOfSelection = options.maximumNumberOfSelection || 0;
		imagePickerController.showsNumberOfSelectedAssets = options.showsNumberOfSelectedAssets || true;
		imagePickerController.numberOfColumnsInPortrait = options.numberOfColumnsInPortrait || imagePickerController.numberOfColumnsInPortrait;
		imagePickerController.numberOfColumnsInLandscape = options.numberOfColumnsInLandscape || imagePickerController.numberOfColumnsInLandscape;
		imagePickerController.prompt = options.prompt || imagePickerController.prompt;

		this._imagePickerController = imagePickerController;
	}

	authorize(): Promise<void> {
		console.log('authorizing...');

		return new Promise<void>((resolve, reject) => {
			let runloop = CFRunLoopGetCurrent();
			PHPhotoLibrary.requestAuthorization(function (result) {
				if (result === PHAuthorizationStatus.Authorized) {
					resolve();
				} else {
					reject(new Error('Authorization failed. Status: ' + result));
				}
			});
		});
	}

	present() {
		return new Promise<void>((resolve, reject) => {
			this._delegate = ImagePickerControllerDelegate.initWithOwner(this, resolve, reject);

			this._imagePickerController.delegate = this._delegate;

			this.hostController.presentViewControllerAnimatedCompletion(this._imagePickerController, true, null);
		});
	}

	_cleanup() {
		this._imagePickerController = null;
		this._delegate = null;
	}
}

@NativeClass()
export class ImagePickerControllerDelegate extends NSObject implements QBImagePickerControllerDelegate {
	_resolve: any;
	_reject: any;
	owner: WeakRef<ImagePicker>;

	qb_imagePickerControllerDidCancel?(imagePickerController: QBImagePickerController): void {
		imagePickerController.dismissViewControllerAnimatedCompletion(true, () => {
			if (this._reject) {
				this._reject();
			}

			if (imagePicker) {
				imagePicker._cleanup();
			}
			imagePicker = null;
		});
	}

	qb_imagePickerControllerDidFinishPickingAssets?(imagePickerController: QBImagePickerController, iosAssets: NSArray<any>): void {
		let assets = [];

		for (let i = 0; i < iosAssets.count; i++) {
			let asset = new ImageAsset(iosAssets[i]);

			// this fixes the image aspect ratio in tns-core-modules version < 4.0
			if (!asset.options) {
				asset.options = { keepAspectRatio: true };
			}

			assets.push(asset);
		}

		if (this._resolve) {
			this._resolve(assets);
		}

		imagePickerController.dismissViewControllerAnimatedCompletion(true, () => {
			if (imagePicker) {
				imagePicker._cleanup();
			}
			imagePicker = null;
			// FIX: possible memory issue when picking images many times.
			// Not the best solution, but the only one working for now
			// https://github.com/NativeScript/nativescript-imagepicker/issues/222
			setTimeout(Utils.GC, 200);
		});
	}

	static ObjCProtocols = [QBImagePickerControllerDelegate];

	static initWithOwner(owner: ImagePicker, resolve, reject) {
		const delegate = new ImagePickerControllerDelegate();
		delegate.owner = new WeakRef(owner);
		delegate._resolve = resolve;
		delegate._reject = reject;
		return delegate;
	}
}

let imagePicker: ImagePicker;
export function create(options?: Options, hostView?: View): ImagePicker {
	imagePicker = new ImagePicker(options, hostView);
	return imagePicker;
}
