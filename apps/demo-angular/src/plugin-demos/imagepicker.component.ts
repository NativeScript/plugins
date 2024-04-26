import { Component, NgZone } from '@angular/core';
import { ImageAsset, ImageSource } from '@nativescript/core';
import { ImagePicker, create, ImagePickerSelection } from '@nativescript/imagepicker';

@Component({
	selector: 'demo-imagepicker',
	templateUrl: 'imagepicker.component.html',
})
export class ImagepickerComponent {
	imageAssets: ImagePickerSelection[] = [];
	imageSrc: ImageAsset | ImageSource;
	isSingleMode: boolean = true;
	thumbSize: number = 80;
	previewSize: number = 300;

	constructor(private _ngZone: NgZone) {}

	public onSelectMultipleTap() {
		this.isSingleMode = false;

		let context = create({
			mode: 'multiple',
		});
		this.startSelection(context);
	}

	public onSelectSingleTap() {
		this.isSingleMode = true;

		let context = create({
			mode: 'single',
		});
		this.startSelection(context);
	}

	private startSelection(context: ImagePicker) {
		context
			.authorize()
			.then((authResult) => {
				this._ngZone.run(() => {
					this.imageAssets = [];
					this.imageSrc = null;
				});
				if (authResult.authorized) {
					return context.present().then((selection) => {
						this._ngZone.run(() => {
							console.log('Selection done: ' + JSON.stringify(selection));
							this.imageSrc = this.isSingleMode && selection.length > 0 ? selection[0].asset : null;

							// set the images to be loaded from the assets with optimal sizes (optimize memory usage)
							selection.forEach((el) => {
								el.asset.options.width = this.isSingleMode ? this.previewSize : this.thumbSize;
								el.asset.options.height = this.isSingleMode ? this.previewSize : this.thumbSize;
							});

							this.imageAssets = selection;
						});
					});
				} else {
					console.log('Unauthorised');
				}
			})

			.catch(function (e) {
				console.log(e);
			});
	}
}
