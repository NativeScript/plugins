import { DemoSharedBase } from '../utils';
import * as imagepicker from '@nativescript/imagepicker';
import { ImageAsset, ImageSource, ItemEventData, Label } from '@nativescript/core';

export class DemoSharedImagepicker extends DemoSharedBase {
	private _selection: any;
	private _imageSrc: ImageSource | ImageAsset;
	private _imageAssets: Array<any>;
	private _isSingleMode: boolean;
	private _progressText: string;
	private _progressValue: number;
	private _progressLog: string;
	private progressTicks: string[][] = [];

	get thumbSize(): any {
		return 80;
	}

	get previewSize(): any {
		return 300;
	}

	get imageSrc(): ImageSource | ImageAsset {
		return this._imageSrc;
	}

	set imageSrc(value: ImageSource | ImageAsset) {
		if (this._imageSrc !== value) {
			this._imageSrc = value;
			this.notifyPropertyChange('imageSrc', value);
		}
	}

	get selection(): any {
		return this._selection;
	}

	set selection(value: any) {
		if (this._selection !== value) {
			this._selection = value;
			this.notifyPropertyChange('selection', value);
		}
	}

	get imageAssets(): any {
		return this._imageAssets;
	}

	set imageAssets(value: any) {
		if (this._imageAssets !== value) {
			this._imageAssets = value;
			this.notifyPropertyChange('imageAssets', value);
		}
	}

	// Text and 0-100 value for the progress row while the picked items load.
	// iOS streams download progress for items in iCloud; Android only reports
	// each item once it has finished.
	get progressText(): string {
		return this._progressText;
	}

	set progressText(value: string) {
		if (this._progressText !== value) {
			this._progressText = value;
			this.notifyPropertyChange('progressText', value);
		}
	}

	get progressValue(): number {
		return this._progressValue;
	}

	set progressValue(value: number) {
		if (this._progressValue !== value) {
			this._progressValue = value;
			this.notifyPropertyChange('progressValue', value);
		}
	}

	// Every tick received so far, one line per item, so the streaming is still
	// visible after the selection has resolved (local items finish in a blink).
	get progressLog(): string {
		return this._progressLog;
	}

	set progressLog(value: string) {
		if (this._progressLog !== value) {
			this._progressLog = value;
			this.notifyPropertyChange('progressLog', value);
		}
	}

	// Ticks are queued and shown for a short moment each so the bar visibly
	// steps through what the plugin reported. Local items resolve in a blink,
	// which would otherwise jump the bar straight to 100%. The values shown are
	// exactly what onProgress delivered, only the display is paced.
	private tickQueue: imagepicker.ImagePickerProgress[] = [];
	private draining: Promise<void> = Promise.resolve();
	private lastTickShownAt = 0;

	private onProgress(progress: imagepicker.ImagePickerProgress) {
		const percent = Math.round(progress.fraction * 100);
		console.log(`Loading item ${progress.index + 1} of ${progress.total}: ${percent}%`);
		this.tickQueue.push(progress);
		this.draining = this.draining.then(() => this.showNextTick());
	}

	private showNextTick(): Promise<void> {
		const progress = this.tickQueue.shift();
		if (!progress) {
			return Promise.resolve();
		}
		const percent = Math.round(progress.fraction * 100);
		const ticks = this.progressTicks[progress.index] || (this.progressTicks[progress.index] = []);
		ticks.push(`${percent}%`);
		this.progressValue = percent;
		this.progressText = `Loading item ${progress.index + 1} of ${progress.total}: ${percent}%`;
		this.progressLog = this.progressTicks.map((ticks, i) => `Item ${i + 1}/${progress.total}: ${ticks.join(' → ')}`).join('\n');
		// Hold each tick for at least 600ms. Ticks that arrive slower than that
		// (a real iCloud download on a device) are shown as soon as they come in.
		const wait = Math.max(0, 600 - (Date.now() - this.lastTickShownAt));
		this.lastTickShownAt = Date.now() + wait;
		return new Promise((resolve) => setTimeout(resolve, wait));
	}

	get isSingleMode(): any {
		return this._isSingleMode;
	}

	set isSingleMode(value: any) {
		if (this._isSingleMode !== value) {
			this._isSingleMode = value;
			this.notifyPropertyChange('isSingleMode', value);
		}
	}

	public onSelectMultipleTap(args) {
		this.isSingleMode = false;
		let context = imagepicker.create({
			mode: 'multiple',
			mediaType: imagepicker.ImagePickerMediaType.Any,
			copyToAppFolder: 'media',
			renameFileTo: 'foobarmultiple',
			android: { use_photo_picker: true },
			maximumNumberOfSelection: 2,
			onProgress: (progress) => this.onProgress(progress),
		});
		this.startSelection(context);
	}

	public onSelectSingleTap(args) {
		this.isSingleMode = true;
		let context = imagepicker.create({
			mode: 'single',
			mediaType: imagepicker.ImagePickerMediaType.Any,
			copyToAppFolder: 'media',
			renameFileTo: 'foobar',
			android: { use_photo_picker: true },
			onProgress: (progress) => this.onProgress(progress),
		});
		this.startSelection(context);
	}

	private startSelection(context: imagepicker.ImagePicker) {
		context
			.authorize()
			.then((authResult) => {
				console.log(authResult);
				if (authResult.authorized) {
					this.imageAssets = [];
					this.imageSrc = null;
					this.selection = null;
					this.progressText = null;
					this.progressValue = 0;
					this.progressTicks = [];
					this.progressLog = null;
					this.tickQueue = [];
					return context
						.present()
						.then((selection: imagepicker.ImagePickerSelection[]) => {
							console.log('Selection done: ', selection);
							// Let the paced progress display finish before showing the results.
							return this.draining.then(() => selection);
						})
						.then((selection: imagepicker.ImagePickerSelection[]) => {
							this.progressText = null;
							this.imageSrc = this.isSingleMode && selection.length > 0 ? selection[0].asset : null;
							if (selection[0].thumbnail) {
								this.imageSrc = selection[0].thumbnail;
							}
							this.selection = this.isSingleMode && selection.length > 0 ? selection[0] : null;

							// set the images to be loaded from the assets with optimal sizes (optimize memory usage)
							selection.forEach((element) => {
								let asset = element.asset;
								asset.options.width = this.isSingleMode ? this.previewSize : this.thumbSize;
								asset.options.height = this.isSingleMode ? this.previewSize : this.thumbSize;
							});

							this.imageAssets = selection;
						});
				} else {
					console.log('UnAuthorized');
				}
			})
			.catch(function (e) {
				console.log('selection error', e);
			});
	}
}
