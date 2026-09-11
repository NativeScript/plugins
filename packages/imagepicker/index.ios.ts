import { ImageAsset, View, Utils, Application, path, knownFolders, ImageSource, Folder, File } from '@nativescript/core';
import * as permissions from '@nativescript-community/perms';
import { AuthorizationResult, ImagePickerBase, ImagePickerMediaType, ImagePickerSelection, Options } from './common';
export * from './common';

// iOS picker built on PHPickerViewController (iOS 14+): the system Photos
// picker with search, albums and the full library browser. It runs out of
// process, so it needs no photo-library permission to show. Calling
// authorize() first is still recommended: with permission granted the picked
// items resolve to their PHAsset (exactly as before), otherwise the plugin
// falls back to a copy of the file that the picker hands over.

const IMAGE_UTI = 'public.image';
const MOVIE_UTI = 'public.movie';

export class ImagePicker extends ImagePickerBase {
	_imagePickerController: PHPickerViewController;
	_hostView: View;
	_delegate: ImagePickerControllerDelegate;
	_options: Options;

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
		this._options = options;
		this._imagePickerController = createPickerController(options);
	}

	authorize(): Promise<AuthorizationResult> {
		return permissions.request('photo').then((result) => this.mapResult(result));
	}

	present(): Promise<ImagePickerSelection[]> {
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

function createPickerController(options: Options): PHPickerViewController {
	if (typeof PHPickerViewController === 'undefined') {
		throw new Error('@nativescript/imagepicker requires iOS 14 or later.');
	}

	// Binding the configuration to the shared photo library is what makes
	// PHPickerResult.assetIdentifier available, so picks can resolve to PHAssets.
	const config = PHPickerConfiguration.alloc().initWithPhotoLibrary(PHPhotoLibrary.sharedPhotoLibrary());
	config.filter = pickerFilter(options.mediaType);
	config.selectionLimit = options.mode === 'single' ? 1 : options.maximumNumberOfSelection || 0;
	if (config.selectionLimit !== 1 && config.respondsToSelector('setSelection:')) {
		config.selection = PHPickerConfigurationSelection.Ordered;
	}

	return PHPickerViewController.alloc().initWithConfiguration(config);
}

function pickerFilter(mediaType: ImagePickerMediaType | undefined): PHPickerFilter | null {
	switch (mediaType) {
		case ImagePickerMediaType.Image:
			return PHPickerFilter.imagesFilter;
		case ImagePickerMediaType.Video:
			return PHPickerFilter.videosFilter;
		default:
			return null; // images and videos
	}
}

@NativeClass()
class ImagePickerControllerDelegate extends NSObject implements PHPickerViewControllerDelegate {
	static ObjCProtocols = [PHPickerViewControllerDelegate];

	_resolve: (selections: ImagePickerSelection[]) => void;
	_reject: (error: Error) => void;
	owner: WeakRef<ImagePicker>;

	static initWithOwner(owner: ImagePicker, resolve, reject) {
		const delegate = new ImagePickerControllerDelegate();
		delegate.owner = new WeakRef(owner);
		delegate._resolve = resolve;
		delegate._reject = reject;
		return delegate;
	}

	// Cancel (button or swipe-down) arrives here with an empty results array.
	pickerDidFinishPicking(picker: PHPickerViewController, results: NSArray<PHPickerResult>): void {
		const owner = this.owner.deref();
		const pickerResults = toArray(results);

		if (pickerResults.length === 0) {
			dismiss(picker, owner).then(() => this._reject?.(new Error('Canceled')));
			return;
		}

		this.finishPicking(picker, owner, pickerResults).catch((error) => this._reject?.(error));
	}

	private async finishPicking(picker: PHPickerViewController, owner: ImagePicker | undefined, results: PHPickerResult[]): Promise<void> {
		const options = owner?._options ?? {};
		const selections: ImagePickerSelection[] = [];

		try {
			for (const result of results) {
				selections.push(await toSelection(result));
			}
		} catch (error) {
			await dismiss(picker, owner);
			throw error;
		}

		// Start dismissing as soon as the picks are known; copying and
		// thumbnailing continue behind the dismiss animation.
		const dismissed = dismiss(picker, owner);

		try {
			const augment = options.copyToAppFolder || options.augmentedAssetsInfo !== false;
			if (augment) {
				await Promise.all(selections.map((selection, index) => augmentSelection(selection, index, selections.length, options)));
			}
		} catch (error) {
			await dismissed;
			throw error;
		}

		if (options.resolveWhenDismissed) {
			await dismissed;
		}
		this._resolve?.(selections);
	}
}

function dismiss(picker: PHPickerViewController, owner: ImagePicker | undefined): Promise<void> {
	return new Promise<void>((resolve) => {
		picker.dismissViewControllerAnimatedCompletion(true, () => {
			owner?._cleanup();
			if (imagePicker === owner) {
				imagePicker = null;
			}
			// Picking repeatedly without a collection could leak native memory
			// https://github.com/NativeScript/nativescript-imagepicker/issues/222
			setTimeout(Utils.GC, 200);
			resolve();
		});
	});
}

function toArray(results: NSArray<PHPickerResult>): PHPickerResult[] {
	const items: PHPickerResult[] = [];
	for (let i = 0; i < results.count; i++) {
		items.push(results.objectAtIndex(i));
	}
	return items;
}

// A picked item resolves to its PHAsset when the app has photo-library access
// and Photos can hand out a file for it; otherwise the picker still vends the
// file itself and a copy of that is used instead.
async function toSelection(result: PHPickerResult): Promise<ImagePickerSelection> {
	const phAsset = fetchAsset(result.assetIdentifier);
	if (phAsset) {
		const selection = await selectionFromAsset(phAsset);
		if (selection.path) {
			return selection;
		}
	}
	return selectionFromItemProvider(result.itemProvider);
}

function hasLibraryAccess(): boolean {
	const status = PHPhotoLibrary.authorizationStatusForAccessLevel(PHAccessLevel.ReadWrite);
	return status === PHAuthorizationStatus.Authorized || status === PHAuthorizationStatus.Limited;
}

// Fetching assets without permission would trigger the system prompt, which
// the item-provider fallback exists to avoid.
function fetchAsset(identifier: string | null): PHAsset | null {
	if (!identifier || !hasLibraryAccess()) {
		return null;
	}
	const fetched = PHAsset.fetchAssetsWithLocalIdentifiersOptions([identifier], null);
	return fetched.count > 0 ? fetched.firstObject : null;
}

async function selectionFromAsset(phAsset: PHAsset): Promise<ImagePickerSelection> {
	const asset = new ImageAsset(phAsset);
	if (!asset.options) {
		asset.options = { keepAspectRatio: true };
	}
	const filename: string = phAsset.valueForKey('filename');
	const isVideo = phAsset.mediaType === PHAssetMediaType.Video;

	const selection: ImagePickerSelection = {
		asset,
		type: isVideo ? 'video' : 'image',
		filename,
		originalFilename: filename,
		filesize: 0,
		path: isVideo ? await videoPath(phAsset) : await imagePath(phAsset),
	};
	if (isVideo) {
		selection.duration = Math.round(phAsset.duration);
	}
	return selection;
}

function imagePath(phAsset: PHAsset): Promise<string> {
	return new Promise<string>((resolve) => {
		const options = new PHContentEditingInputRequestOptions();
		options.networkAccessAllowed = true;
		phAsset.requestContentEditingInputWithOptionsCompletionHandler(options, (input) => {
			Utils.dispatchToMainThread(() => resolve(filePath(input?.fullSizeImageURL)));
		});
	});
}

function videoPath(phAsset: PHAsset): Promise<string> {
	return new Promise<string>((resolve) => {
		const options = new PHVideoRequestOptions();
		options.networkAccessAllowed = true;
		PHImageManager.defaultManager().requestAVAssetForVideoOptionsResultHandler(phAsset, options, (avAsset) => {
			const url = avAsset instanceof AVURLAsset ? avAsset.URL : null;
			Utils.dispatchToMainThread(() => resolve(filePath(url)));
		});
	});
}

// Without photo-library access the picker copies the item to a temporary URL
// that is only valid inside the completion handler, so it is copied out again
// into the app's temp folder before anything else touches it.
function selectionFromItemProvider(provider: NSItemProvider): Promise<ImagePickerSelection> {
	const isVideo = provider.hasItemConformingToTypeIdentifier(MOVIE_UTI);
	const uti = isVideo ? MOVIE_UTI : IMAGE_UTI;

	return new Promise<ImagePickerSelection>((resolve, reject) => {
		const settle = (work: () => ImagePickerSelection) => {
			Utils.dispatchToMainThread(() => {
				try {
					resolve(work());
				} catch (error) {
					reject(error);
				}
			});
		};

		provider.loadFileRepresentationForTypeIdentifierCompletionHandler(uti, (url, error) => {
			if (error || !url) {
				settle(() => {
					throw new Error(error?.localizedDescription ?? 'Could not load the selected item.');
				});
				return;
			}

			// Copy synchronously: the source URL is gone once this handler returns.
			let copiedPath: string;
			try {
				copiedPath = copyToTempFolder(filePath(url));
			} catch (copyError) {
				settle(() => {
					throw copyError;
				});
				return;
			}

			settle(() => (isVideo ? videoSelectionFromFile(copiedPath) : imageSelectionFromFile(copiedPath)));
		});
	});
}

// Each pick gets its own folder so two files with the same name never collide.
function copyToTempFolder(sourcePath: string): string {
	const folder = knownFolders.temp().getFolder('imagepicker').getFolder(NSUUID.UUID().UUIDString);
	const destination = path.join(folder.path, NSString.stringWithString(sourcePath).lastPathComponent || 'file');
	copyFile(sourcePath, destination);
	return destination;
}

function imageSelectionFromFile(filePath: string): ImagePickerSelection {
	const filename = NSString.stringWithString(filePath).lastPathComponent;
	return {
		asset: new ImageAsset(filePath),
		type: 'image',
		filename,
		originalFilename: filename,
		filesize: 0,
		path: filePath,
	};
}

function videoSelectionFromFile(filePath: string): ImagePickerSelection {
	const filename = NSString.stringWithString(filePath).lastPathComponent;
	const avAsset = AVURLAsset.assetWithURL(NSURL.fileURLWithPath(filePath));
	const frame = firstVideoFrame(avAsset);
	return {
		// Like a PHAsset-backed video, the asset renders a preview frame.
		asset: new ImageAsset(frame ? UIImage.imageWithCGImage(frame) : filePath),
		type: 'video',
		filename,
		originalFilename: filename,
		filesize: 0,
		path: filePath,
		duration: Math.round(CMTimeGetSeconds(avAsset.duration)) || 0,
	};
}

function firstVideoFrame(avAsset: AVAsset): any {
	const generator = AVAssetImageGenerator.assetImageGeneratorWithAsset(avAsset);
	generator.appliesPreferredTrackTransform = true;
	try {
		return generator.copyCGImageAtTimeActualTimeError(CMTimeMake(0, 1), null);
	} catch {
		return null;
	}
}

// Optional post-processing: rename, copy into the app folder, and fill in
// filesize plus a video thumbnail. A failed copy keeps the original path, as
// before, rather than failing the whole selection.
async function augmentSelection(selection: ImagePickerSelection, index: number, total: number, options: Options): Promise<void> {
	selection.filename = targetFilename(selection.originalFilename, index, total, options.renameFileTo);

	if (options.copyToAppFolder) {
		const folder = knownFolders.documents().getFolder(options.copyToAppFolder);
		const destination = path.join(folder.path, selection.filename);
		try {
			copyFile(selection.path, destination);
			selection.path = destination;
		} catch (error) {
			console.log('Error copying file: ', selection.path, error);
		}
	}

	selection.filesize = fileSize(selection.path);
	if (selection.type === 'video') {
		const thumbnail = await ImageSource.fromAsset(selection.asset).catch(() => null);
		if (thumbnail) {
			selection.thumbnail = thumbnail;
		}
	}
}

function targetFilename(original: string, index: number, total: number, renameTo: string | undefined): string {
	if (!renameTo) {
		return original;
	}
	const extension = original.split('.').pop();
	return total > 1 ? `${renameTo}-${index}.${extension}` : `${renameTo}.${extension}`;
}

function fileSize(filePath: string): number {
	const attributes = NSFileManager.defaultManager.attributesOfItemAtPathError(filePath);
	return attributes ? attributes.fileSize() : 0;
}

// Replaces any file already at the destination. NativeScript throws the
// NSError of a failed copy, so callers decide how to handle it.
function copyFile(source: string, destination: string): void {
	if (File.exists(destination)) {
		File.fromPath(destination).removeSync();
	}
	if (!NSFileManager.defaultManager.copyItemAtPathToPathError(source, destination)) {
		throw new Error(`Could not copy ${source} to ${destination}`);
	}
}

function filePath(url: NSURL | null): string {
	return url ? url.path : '';
}

let imagePicker: ImagePicker;
export function create(options?: Options, hostView?: View): ImagePicker {
	imagePicker = new ImagePicker(options, hostView);
	return imagePicker;
}
