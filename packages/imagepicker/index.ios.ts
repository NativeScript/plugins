import { ImageAsset, View, Utils, Application, path, knownFolders, ImageSource } from '@nativescript/core';
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

// Reports the progress of one item to Options.onProgress. Updates are
// delivered on the main thread and never go backwards; PhotoKit and
// NSProgress call back from arbitrary threads.
type ProgressReporter = (fraction: number) => void;

function progressReporter(options: Options, index: number, total: number): ProgressReporter {
	const onProgress = options.onProgress;
	if (!onProgress) {
		return () => {};
	}
	let last = -1;
	const deliver = (fraction: number) => {
		if (fraction > last) {
			last = fraction;
			onProgress({ index, total, fraction });
		}
	};
	return (fraction: number) => {
		const clamped = Math.min(1, Math.max(0, fraction));
		if (NSThread.isMainThread) {
			deliver(clamped);
		} else {
			Utils.dispatchToMainThread(() => deliver(clamped));
		}
	};
}

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
		// The first request resolves from Photos' own callback, which arrives on
		// a background thread; hand the result back on the main thread.
		return permissions.request('photo').then((result) => new Promise<AuthorizationResult>((resolve) => Utils.dispatchToMainThread(() => resolve(this.mapResult(result)))));
	}

	present(): Promise<ImagePickerSelection[]> {
		return new Promise<ImagePickerSelection[]>((resolve, reject) => {
			this._delegate = ImagePickerControllerDelegate.initWithOwner(this, resolve, reject);
			this._imagePickerController.delegate = this._delegate;
			// The picker runs out of process and is silently dropped when the app
			// is not active, which is the case right after the photo-permission
			// alert closes (a common moment to call present()).
			Utils.dispatchToMainThread(() => whenActive(() => this.hostController.presentViewControllerAnimatedCompletion(this._imagePickerController, true, null)));
		});
	}

	_cleanup() {
		this._imagePickerController = null;
		this._delegate = null;
	}
}

function whenActive(run: () => void): void {
	if (UIApplication.sharedApplication.applicationState === UIApplicationState.Active) {
		run();
		return;
	}
	const center = NSNotificationCenter.defaultCenter;
	let token: any = center.addObserverForNameObjectQueueUsingBlock(UIApplicationDidBecomeActiveNotification, null, NSOperationQueue.mainQueue, () => {
		center.removeObserver(token);
		token = null;
		run();
	});
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
		const reporters = results.map((_, index) => progressReporter(options, index, results.length));

		// Start dismissing as soon as the picks are known; resolving the files
		// (which can mean an iCloud download), copying and thumbnailing all
		// continue behind the dismiss animation.
		const dismissed = dismiss(picker, owner);

		try {
			for (let index = 0; index < results.length; index++) {
				selections.push(await toSelection(results[index], reporters[index]));
			}
			const augment = options.copyToAppFolder || options.augmentedAssetsInfo !== false;
			if (augment) {
				await Promise.all(selections.map((selection, index) => augmentSelection(selection, index, selections.length, options)));
			}
		} catch (error) {
			await dismissed;
			throw error;
		}

		// Every item is complete by now, whether or not its source reported progress.
		reporters.forEach((report) => report(1));

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
async function toSelection(result: PHPickerResult, report: ProgressReporter): Promise<ImagePickerSelection> {
	const phAsset = fetchAsset(result.assetIdentifier);
	if (phAsset) {
		const selection = await selectionFromAsset(phAsset, report);
		if (selection.path) {
			return selection;
		}
	}
	return selectionFromItemProvider(result.itemProvider, report);
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

async function selectionFromAsset(phAsset: PHAsset, report: ProgressReporter): Promise<ImagePickerSelection> {
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
		path: isVideo ? await videoPath(phAsset, report) : await imagePath(phAsset, report),
	};
	if (isVideo) {
		selection.duration = Math.round(phAsset.duration);
	}
	return selection;
}

// The progress handlers only fire while Photos downloads the item from iCloud.
function imagePath(phAsset: PHAsset, report: ProgressReporter): Promise<string> {
	return new Promise<string>((resolve) => {
		const options = new PHContentEditingInputRequestOptions();
		options.networkAccessAllowed = true;
		options.progressHandler = (progress) => report(progress);
		phAsset.requestContentEditingInputWithOptionsCompletionHandler(options, (input) => {
			Utils.dispatchToMainThread(() => resolve(filePath(input?.fullSizeImageURL)));
		});
	});
}

function videoPath(phAsset: PHAsset, report: ProgressReporter): Promise<string> {
	return new Promise<string>((resolve) => {
		const options = new PHVideoRequestOptions();
		options.networkAccessAllowed = true;
		options.progressHandler = (progress) => report(progress);
		PHImageManager.defaultManager().requestAVAssetForVideoOptionsResultHandler(phAsset, options, (avAsset) => {
			const url = avAsset instanceof AVURLAsset ? avAsset.URL : null;
			Utils.dispatchToMainThread(() => resolve(filePath(url)));
		});
	});
}

// Without photo-library access the picker copies the item to a temporary URL
// that is only valid inside the completion handler, so it is copied out again
// into the app's temp folder before anything else touches it.
function selectionFromItemProvider(provider: NSItemProvider, report: ProgressReporter): Promise<ImagePickerSelection> {
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

		let observer: ProgressObserver | null = null;
		const progress = provider.loadFileRepresentationForTypeIdentifierCompletionHandler(uti, (url, error) => {
			observer?.stop();
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
		observer = ProgressObserver.observe(progress, report);
	});
}

// Watches an NSProgress (the item provider's iCloud download) through KVO and
// forwards its fractionCompleted to the reporter.
@NativeClass()
class ProgressObserver extends NSObject {
	private progress: NSProgress;
	private report: ProgressReporter;
	private observing = false;

	static observe(progress: NSProgress | null, report: ProgressReporter): ProgressObserver | null {
		if (!progress) {
			return null;
		}
		const observer = <ProgressObserver>ProgressObserver.new();
		observer.progress = progress;
		observer.report = report;
		observer.observing = true;
		progress.addObserverForKeyPathOptionsContext(observer, 'fractionCompleted', NSKeyValueObservingOptions.New, null);
		return observer;
	}

	stop(): void {
		if (this.observing) {
			this.observing = false;
			this.progress.removeObserverForKeyPath(this, 'fractionCompleted');
		}
	}

	observeValueForKeyPathOfObjectChangeContext(keyPath: string, object: any, change: NSDictionary<string, any>, context: interop.Pointer): void {
		if (keyPath === 'fractionCompleted') {
			this.report(this.progress.fractionCompleted);
		}
	}
}

// Each pick gets its own folder so two files with the same name never collide.
// This runs inside the item provider's completion handler, which the system
// already calls on a background thread, so the copy never blocks the UI.
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
// filesize plus a video thumbnail. The copy runs on a background queue so a
// large video never stalls the UI. A failed copy keeps the original path, as
// before, rather than failing the whole selection.
async function augmentSelection(selection: ImagePickerSelection, index: number, total: number, options: Options): Promise<void> {
	selection.filename = targetFilename(selection.originalFilename, index, total, options.renameFileTo);

	if (options.copyToAppFolder) {
		const folder = knownFolders.documents().getFolder(options.copyToAppFolder);
		const destination = path.join(folder.path, selection.filename);
		try {
			await copyFileInBackground(selection.path, destination);
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

// Replaces any file already at the destination and throws a descriptive
// error when the copy fails, so callers decide how to handle it.
function copyFile(source: string, destination: string): void {
	const fileManager = NSFileManager.defaultManager;
	if (fileManager.fileExistsAtPath(destination)) {
		fileManager.removeItemAtPathError(destination, null);
	}
	const error = new interop.Reference<NSError>();
	if (!fileManager.copyItemAtPathToPathError(source, destination, error)) {
		const reason = error.value ? error.value.localizedDescription : 'unknown error';
		throw new Error(`Could not copy ${source} to ${destination}: ${reason}`);
	}
}

// Same as copyFile, but off the main thread: the copy itself runs on a global
// dispatch queue and only the result is handed back to the main thread.
function copyFileInBackground(source: string, destination: string): Promise<void> {
	return new Promise<void>((resolve, reject) => {
		dispatch_async(dispatch_get_global_queue(21 /* qos_class_t.QOS_CLASS_DEFAULT */, 0), () => {
			let failure: Error | null = null;
			try {
				copyFile(source, destination);
			} catch (error) {
				failure = error;
			}
			Utils.dispatchToMainThread(() => (failure ? reject(failure) : resolve()));
		});
	});
}

function filePath(url: NSURL | null): string {
	return url ? url.path : '';
}

let imagePicker: ImagePicker;
export function create(options?: Options, hostView?: View): ImagePicker {
	imagePicker = new ImagePicker(options, hostView);
	return imagePicker;
}
