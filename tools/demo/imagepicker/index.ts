import { DemoSharedBase } from '../utils';
import * as imagepicker from '@nativescript/imagepicker';
import { ImageAsset, ImageSource, ItemEventData, Label } from '@nativescript/core';

export class DemoSharedImagepicker extends DemoSharedBase {
	private _selection: any;
	private _imageSrc: ImageSource | ImageAsset;
	private _imageAssets: Array<any>;
	private _isSingleMode: boolean;

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
					return context.present().then((selection: imagepicker.ImagePickerSelection[]) => {
						console.log('Selection done: ', selection);
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
