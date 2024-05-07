import { ImageAsset, View, Utils, Application, path, knownFolders, ImageSource } from '@nativescript/core';
import { AuthorizationResult, ImagePickerBase, ImagePickerSelection, Options } from './common';
import { getFile } from '@nativescript/core/http';
import * as permissions from '@nativescript-community/perms';
export * from './common';
type FileMap = {
	[key: string]: ImagePickerSelection;
};
const defaultAssetCollectionSubtypes: NSArray<any> = NSArray.arrayWithArray(<any>[PHAssetCollectionSubtype.SmartAlbumRecentlyAdded, PHAssetCollectionSubtype.SmartAlbumUserLibrary, PHAssetCollectionSubtype.AlbumMyPhotoStream, PHAssetCollectionSubtype.SmartAlbumFavorites, PHAssetCollectionSubtype.SmartAlbumPanoramas, PHAssetCollectionSubtype.SmartAlbumBursts, PHAssetCollectionSubtype.AlbumCloudShared, PHAssetCollectionSubtype.SmartAlbumSelfPortraits, PHAssetCollectionSubtype.SmartAlbumScreenshots, PHAssetCollectionSubtype.SmartAlbumLivePhotos]);
let copyToAppFolder;
let renameFileTo;
let augmentedAssetsInfo;
let fileMap: FileMap = {};
export class ImagePicker extends ImagePickerBase {
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

		const imagePickerController = QBImagePickerController.alloc().init();

		imagePickerController.assetCollectionSubtypes = defaultAssetCollectionSubtypes;
		imagePickerController.mediaType = options.mediaType ? <QBImagePickerMediaType>options.mediaType.valueOf() : QBImagePickerMediaType.Any;
		imagePickerController.allowsMultipleSelection = options.mode !== 'single';
		imagePickerController.minimumNumberOfSelection = options.minimumNumberOfSelection || 0;
		imagePickerController.maximumNumberOfSelection = options.maximumNumberOfSelection || 0;
		imagePickerController.showsNumberOfSelectedAssets = options.showsNumberOfSelectedAssets || true;
		imagePickerController.numberOfColumnsInPortrait = options.numberOfColumnsInPortrait || imagePickerController.numberOfColumnsInPortrait;
		imagePickerController.numberOfColumnsInLandscape = options.numberOfColumnsInLandscape || imagePickerController.numberOfColumnsInLandscape;
		imagePickerController.prompt = options.prompt || imagePickerController.prompt;
		copyToAppFolder = options.copyToAppFolder || false;
		renameFileTo = options.renameFileTo || false;
		augmentedAssetsInfo = options.augmentedAssetsInfo ?? true;
		this._imagePickerController = imagePickerController;
	}

	authorize(): Promise<AuthorizationResult> {
		console.log('authorizing...');
		return permissions.request('photo').then((result) => this.mapResult(result));
	}

	present(): Promise<ImagePickerSelection[]> {
		fileMap = {};
		return new Promise<ImagePickerSelection[]>((resolve, reject) => {
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
class ImagePickerControllerDelegate extends NSObject implements QBImagePickerControllerDelegate {
	_resolve: any;
	_reject: any;
	owner: WeakRef<ImagePicker>;

	qb_imagePickerControllerDidCancel?(imagePickerController: QBImagePickerController): void {
		imagePickerController.dismissViewControllerAnimatedCompletion(true, () => {
			if (this._reject) {
				this._reject(new Error('Canceled'));
			}

			if (imagePicker) {
				imagePicker._cleanup();
			}
			imagePicker = null;
		});
	}

	async qb_imagePickerControllerDidFinishPickingAssets?(imagePickerController: QBImagePickerController, iosAssets: NSArray<any>): void {
		for (let i = 0; i < iosAssets.count; i++) {
			const asset = new ImageAsset(iosAssets.objectAtIndex(i));
			const phAssetImage: PHAsset = (<any>asset)._ios;
			// this fixes the image aspect ratio in tns-core-modules version < 4.0
			if (!asset.options) asset.options = { keepAspectRatio: true };
			const existingFileName = phAssetImage.valueForKey('filename');
			const pickerSelection: ImagePickerSelection = {
				asset: asset,
				type: phAssetImage.mediaType == 2 ? 'video' : 'image',
				filename: existingFileName,
				originalFilename: existingFileName,
				filesize: 0,
				path: '',
			};
			if (pickerSelection.type == 'video') pickerSelection.duration = parseInt(phAssetImage.duration.toFixed(0));
			fileMap[existingFileName] = pickerSelection;
			if (pickerSelection.type == 'video') {
				const manager = new PHImageManager();
				const options = new PHVideoRequestOptions();
				options.networkAccessAllowed = true;
				manager.requestAVAssetForVideoOptionsResultHandler(phAssetImage, options, (urlAsset: AVURLAsset, audioMix, info) => {
					fileMap[existingFileName].path = urlAsset.URL.toString().replace('file://', '');
				});
			} else {
				const imageOptions = new PHContentEditingInputRequestOptions();
				imageOptions.networkAccessAllowed = true;
				await new Promise(resolve => {
					phAssetImage.requestContentEditingInputWithOptionsCompletionHandler(imageOptions, (thing) => {
						fileMap[existingFileName].path = thing.fullSizeImageURL.toString().replace('file://', '');
						resolve();
					});
				});
			}
		}

		if (this._resolve) {
			if (!copyToAppFolder && augmentedAssetsInfo === false) {
				return this._resolve(Object.values(fileMap));
			}
			const promises = [];
			let count = 0;
			for (const key in fileMap) {
				const item = fileMap[key];
				const folder = knownFolders.documents();
				const extension = item.filename.split('.').pop();
				let filename = renameFileTo ? renameFileTo + '.' + extension : item.filename;
				if (iosAssets.count > 1) filename = renameFileTo ? renameFileTo + '-' + count + '.' + extension : item.filename;
				fileMap[item.filename].filename = filename;
				const fileManager = new NSFileManager();
				if (copyToAppFolder) {
					const filePath = path.join(folder.path + '/' + copyToAppFolder, filename);
					promises.push(
						getFile('file://' + item.path, filePath)
							.then((result) => {
								fileMap[item.originalFilename].path = filePath;
								fileMap[item.originalFilename].filesize = fileManager.attributesOfItemAtPathError(filePath).fileSize();
								if (item.type == 'video') {
									return ImageSource.fromAsset(item.asset).then((source) => {
										fileMap[item.originalFilename].thumbnail = source;
									});
								}
							})
							.catch((error) => {
								console.log('Error copying file: ', error);
							})
					);
				} else {
					fileMap[item.originalFilename].filesize = fileManager.attributesOfItemAtPathError(fileMap[item.filename].path).fileSize();
					if (item.type == 'video') {
						promises.push(
							ImageSource.fromAsset(item.asset).then((source) => {
								fileMap[item.originalFilename].thumbnail = source;
							})
						);
					}
				}
				count++;
			}

			Promise.all(promises).then(() => {
				const results: ImagePickerSelection[] = [];
				for (const key in fileMap) {
					results.push(fileMap[key]);
				}
				this._resolve(results);
			});
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
