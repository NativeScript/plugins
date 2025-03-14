import { Dialogs, EventData, ImageAsset } from '@nativescript/core';
import { requestPermissions, takePicture } from '@nativescript/camera';
import { DemoSharedBase } from '../utils';

export class DemoSharedCamera extends DemoSharedBase {
	picturePath: string;
	cameraImage: any;
	saveToGallery = false;
	allowsEditing = false;
	keepAspectRatio = true;
	width = 320;
	height = 240;

	onTakePictureTap(args: EventData) {
		requestPermissions().then((perms) => {
			if (perms.Success) {
				takePicture({ width: this.width, height: this.height, keepAspectRatio: this.keepAspectRatio, saveToGallery: this.saveToGallery, allowsEditing: this.allowsEditing }).then(
					(imageAsset: ImageAsset) => {
						this.set('cameraImage', imageAsset);
						imageAsset.getImageAsync((nativeImage) => {
							let scale = 1;
							let actualWidth = 0;
							let actualHeight = 0;
							if (imageAsset.android) {
								// get the current density of the screen (dpi) and divide it by the default one to get the scale
								scale = nativeImage.getDensity() / android.util.DisplayMetrics.DENSITY_DEFAULT;
								actualWidth = nativeImage.getWidth();
								actualHeight = nativeImage.getHeight();
							} else {
								scale = nativeImage.scale;
								actualWidth = nativeImage.size.width * scale;
								actualHeight = nativeImage.size.height * scale;
							}
							let labelText = `Displayed Size: ${actualWidth}x${actualHeight} with scale ${scale}\n` + `Image Size: ${Math.round(actualWidth / scale)}x${Math.round(actualHeight / scale)}`;
							this.set('labelText', labelText);

							console.log(`${labelText}`);
						});
					},
					(err) => {
						console.log('Error -> ' + err.message);
					}
				);
			} else {
				Dialogs.alert(`permissions rejected: camera ${perms.Details.Camera?.Success}, photo ${perms.Details.Photo?.Success}`);
			}
		});
	}
}
