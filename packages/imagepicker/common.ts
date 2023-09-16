import { ImageAsset, ImageSource } from '@nativescript/core';
import { MultiResult, Result } from '@nativescript-community/perms';

export enum ImagePickerMediaType {
	Any = 0,
	Image = 1,
	Video = 2,
}

export interface ImagePickerSelection {
	/**
	 * The selected image source
	 */
	asset: ImageAsset;

	/**
	 * The size in bytes of the selected file
	 */
	filesize: number;

	/**
	 * The type of file, either image or video.
	 */
	type: 'image' | 'video';

	/**
	 * The name of the file.
	 */
	filename: string;

	/**
	 * The original name of the file, could be useful if the file was renamed.
	 */
	originalFilename: string;

	/**
	 * The path to the file.
	 */
	path: string;

	/**
	 * The duration of the video. Only passed if type is 'video'
	 */
	duration?: number;

	/**
	 * An image to use for the video thumbnail. Only passed if type is 'video'
	 */
	thumbnail?: ImageSource;
}

/**
 * Provide options for the image picker.
 */
export interface Options {
	/**
	 * Set the picker mode. Supported modes: "single" or "multiple" (default).
	 */
	mode?: string;

	/**
	 * Set the minumum number of selected assets in iOS
	 */
	minimumNumberOfSelection?: number;

	/**
	 * Set the maximum number of selected assets in iOS
	 */
	maximumNumberOfSelection?: number;

	/**
	 * Display the number of selected assets in iOS
	 */
	showsNumberOfSelectedAssets?: boolean;

	/**
	 * Display prompt text when selecting assets in iOS
	 */
	prompt?: string;

	/**
	 * Set the number of columns in Portrait in iOS
	 */
	numberOfColumnsInPortrait?: number;

	/**
	 * Set the number of columns in Landscape in iOS
	 */
	numberOfColumnsInLandscape?: number;

	/**
	 * Set the media type (image/video/any) to pick
	 */
	mediaType?: ImagePickerMediaType;

	/**
	 * An option to copy the image or video to your apps folder. If not passed, it wont copy
	 * If you pass a string, it will be used as the folder name to copy the file to.
	 */
	copyToAppFolder?: string;

	/**
	 * If you want to rename the file when copying it to your app folder, you can pass a string here.
	 */
	renameFileTo?: string;

	/**
	 * Show internal and removable storage options on Android.
	 * Not supported officially, see https://issuetracker.google.com/issues/72053350 |
	 */
	showAdvanced?: boolean;

	android?: {
		/**
		 * Provide a reason for permission request to access external storage on api levels above 23.
		 */
		read_external_storage?: string;
	};
}

export interface ImagePickerApi {
	/**
	 * Call this before 'present' to request any additional permissions that may be necessary.
	 * In case of failed authorization consider notifying the user for degraded functionality.
	 */
	authorize(): Promise<AuthorizationResult>;

	/**
	 * Present the image picker UI.
	 * The result will be an array of SelectedAsset instances provided when the promise is fulfilled.
	 */
	present(): Promise<ImagePickerSelection[]>;
}

export interface AuthorizationResult {
	authorized: boolean;
	details: MultiResult | Result;
}
const requestingPermissions = ['android.permission.READ_MEDIA_IMAGES', 'android.permission.READ_MEDIA_VIDEO'];

export abstract class ImagePickerBase implements ImagePickerApi {
	abstract authorize(): Promise<AuthorizationResult>;
	abstract present(): Promise<ImagePickerSelection[]>;
	protected mapResult(result: MultiResult | Result): AuthorizationResult {
		let authorized = true;
		if (Array.isArray(result) && result.length == 2) {
			// is of type Result
			authorized = result[0] === 'authorized';
		} else {
			const t = result as MultiResult;
			requestingPermissions.forEach((permission) => {
				if (t[permission] !== undefined) {
					authorized = authorized && t[permission] === 'authorized';
				}
			});
		}
		return {
			details: result,
			authorized,
		};
	}
}
