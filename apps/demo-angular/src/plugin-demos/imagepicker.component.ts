import { Component, NgZone } from '@angular/core';
import { ImageAsset } from '@nativescript/core';
import * as imagepicker from '@nativescript/imagepicker';

@Component({
	selector: 'demo-imagepicker',
	templateUrl: 'imagepicker.component.html',
})
export class ImagepickerComponent {
	imageAssets = [];
	imageSrc: any;
	isSingleMode: boolean = true;
	thumbSize: number = 80;
	previewSize: number = 300;

	constructor(private _ngZone: NgZone) {}

	public onSelectMultipleTap() {
		this.isSingleMode = false;

		let context = imagepicker.create({
			mode: 'multiple',
		});
		this.startSelection(context);
	}

	public onSelectSingleTap() {
		this.isSingleMode = true;

		let context = imagepicker.create({
			mode: 'single',
		});
		this.startSelection(context);
	}

	private startSelection(context) {
		context
			.authorize()
			.then(() => {
				this._ngZone.run(() => {
					this.imageAssets = [];
					this.imageSrc = null;
				});
				return context.present();
			})
			.then((selection) => {
				this._ngZone.run(() => {
					console.log('Selection done: ' + JSON.stringify(selection));
					this.imageSrc = this.isSingleMode && selection.length > 0 ? selection[0] : null;

					// set the images to be loaded from the assets with optimal sizes (optimize memory usage)
					selection.forEach((el: ImageAsset) => {
						el.options.width = this.isSingleMode ? this.previewSize : this.thumbSize;
						el.options.height = this.isSingleMode ? this.previewSize : this.thumbSize;
					});

					this.imageAssets = selection;
				});
			})
			.catch(function (e) {
				console.log(e);
			});
	}
}
