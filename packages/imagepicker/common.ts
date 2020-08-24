export enum ImagePickerMediaType {
    Any = 0,
    Image = 1,
    Video = 2
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