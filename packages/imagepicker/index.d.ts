import { ImageSource, ImageAsset, View } from '@nativescript/core';
import { AuthorizationResult, ImagePickerApi } from './common';
export class ImagePicker implements ImagePickerApi {
	constructor(options?: Options);

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

export declare const enum ImagePickerMediaType {
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
interface Options {
	/**
	 * Set the picker mode. Supported modes: "single" or "multiple" (default).
	 */
	mode?: string;

	/**
	 * Set the minumum number of selected assets in iOS
	 */
	minimumNumberOfSelection?: number;

	/**
	 * Set the maximum number of selected assets in iOS, and android using the photo picker option.
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
	 * Set to false on iOS to disable querying thumbnail/filesize for selected assets
	 */
	augmentedAssetsInfo?: boolean;

	/**
	 * Set to true on iOS to wait for controller to be dismissed before resolving
	 */
	resolveWhenDismissed?: boolean;

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
		/**
		 * Use the Photo Picker on android
		 */
		use_photo_picker?: boolean;
	};
}

/**
 * @param {Options} [options] - options for the image picker.
 * @param {View} [hostView] - [use in iOS] the view that hosts the image picker (e.g. to use when open from a modal page).
 */
export function create(options?: Options, hostView?: View): ImagePicker;
