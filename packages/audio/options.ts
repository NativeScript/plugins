/**
 * Provides options for the audio player.
 */
export interface AudioPlayerOptions {
	/**
	 * Gets or sets the audio file url.
	 */
	audioFile: string;

	/**
	 * Gets or sets the callback when the currently playing audio file completes.
	 * @returns {Object} An object containing the native values for the callback.
	 */
	completeCallback?: Function;

	/**
	 * Get or sets the player to loop playback.
	 */
	loop: boolean;

	/**
	 * Prevent autoplay if desired as player autoplays be default
	 */
	autoPlay?: boolean;

	/**
	 * Enable metering. Off by default.
	 */
	metering?: boolean;

	audioMixing?: boolean;

	pitch?: number;
	/**
	 * Gets or sets the callback when an error occurs with the audio player.
	 * @returns {Object} An object containing the native values for the error callback.
	 */
	errorCallback?: Function;

	/**
	 * Gets or sets the callback to be invoked to communicate some info and/or warning about the media or its playback.
	 * @returns {Object} An object containing the native values for the info callback.
	 */
	infoCallback?: Function;
}

export interface AudioRecorderOptions {
	/**
	 * Gets or sets the recorded file name.
	 */
	filename: string;

	/**
	 * Sets the source for recording ***ANDROID ONLY for now ***
	 */
	source?: any;

	/**
	 * Gets or set the max duration of the recording session.
	 * Input in milliseconds, which is Android's format.
	 * Will be converted appropriately for iOS.
	 */
	maxDuration?: number;

	/**
	 * Enable metering. Off by default.
	 */
	metering?: boolean;

	/**
	 * Format
	 */
	format?: any;

	/**
	 * Channels
	 */
	channels?: any;

	/**
	 * Sampling rate
	 */
	sampleRate?: any;

	/**
	 * Bit rate
	 */
	bitRate?: any;

	/**
	 * Encoding
	 */
	encoder?: any;

	/**
	 * Sets the ios audio quality setting. Options are Min|Low|Medium|High|Max. Set to Medium by default.
	 */
	iosAudioQuality?: string;

	/**
	 * Gets or sets the callback when an error occurs with the media recorder.
	 * @returns {Object} An object containing the native values for the error callback.
	 */
	errorCallback?: Function;

	/**
	 * Gets or sets the callback to be invoked to communicate some info and/or warning about the media or its playback.
	 * @returns {Object} An object containing the native values for the info callback.
	 */
	infoCallback?: Function;
}

export const AudioPlayerEvents = {
	seek: 'seek',
	paused: 'paused',
	started: 'started',
};
