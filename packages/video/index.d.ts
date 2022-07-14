import { View } from '@nativescript/core';

export declare class Video extends View {
	/**
	 * If true console logs will be output to help debug the Video events.
	 */
	debug: boolean;

	/**
	 * String value for hooking into the errorEvent. This event fires when an error is emitted from Camera Plus.
	 */
	public static errorEvent: string;

	/**
	 * String value for hooking into the playbackReadyEvent. This event fires when a play back is ready.
	 */
	public static playbackReadyEvent: string;

	/**
	 * String value for hooking into the playbackStartEvent. This event fires when play back starts.
	 */
	public static playbackStartEvent: string;

	/**
	 * String value for hooking into the finishedEvent. This event fires when the video completes playing.
	 */
	public static finishedEvent: string;

	/**
	 * String value for hooking into the seekToTimeCompleteEvent. This event fires when seeking is completed.
	 */
	public static seekToTimeCompleteEvent: string;

	/**
	 * String value for hooking into the currentTimeUpdatedEvent. This event fires when current playing time is updated.
	 */
	public static currentTimeUpdatedEvent: string;

	/**
	 * String value for hooking into the mutedEvent. This event fires when video is muted.
	 */
	public static mutedEvent: string;

	/**
	 * String value for hooking into the unmutedEvent. This event fires when video is unmutedEvent.
	 */
	public static unmutedEvent: string;

	/**
	 * String value for hooking into the pausedEvent. This event fires when video is paused.
	 */
	public static pausedEvent: string;

	/**
	 * String value for hooking into the volumeSetEvent. This event fires when the volume is set.
	 */
	public static volumeSetEvent: string;
	/**
	 * android.view.TextureView
	 */
	android: any;

	/**
	 * UIView
	 */
	ios: any;

	/**
	 * The video player's src file.
	 */
	src: string;

	/**
	 *  The headers to use for video player.
	 */
	headers: Map<string, string>;

	/**
	 *   If true,  the video loops the playback after finishes.
	 */
	loop: boolean;

	/**
	 *   If true, the video to start playing when ready.
	 */
	autoplay: boolean;

	/**
	 *   If true the videoplayers creates the media player's playback controls.
	 */
	controls: boolean;

	_emit: any;

	/**
	 * Start playing the video.
	 */
	play(): void;

	/**
	 * Pause the currently playing video.
	 */
	pause(): void;

	/**
	 * Seek the video to a time.
	 * @param {number} time - Time of the video to seek to in milliseconds.
	 * @param {options} SeekToTimeOptions - Additional time seeking options
	 */
	seekToTime(time: number, options?: SeekToTimeOptions): void;

	/**
	 * Returns the current time of the video duration in milliseconds.
	 * @returns {number} Current time of the video duration.
	 */
	getCurrentTime(): number;

	/**
	 * Boolean to determine if observable for current time is registered.
	 * @param {boolean} observeCurrentTime - True to set observable on current time.
	 */
	observeCurrentTime(observeCurrentTime: boolean): void;

	/**
	 * Observable for current time of the video duration in milliseconds.
	 * @returns {number} Current time of the video duration.
	 */
	currentTime(): number;

	/**
	 * Set the volume of the video
	 * @param {number} volume - Volume to set the video between 0 and 1
	 */
	setVolume(volume: number): void;

	/**
	 *
	 * *** ANDROID ONLY ***
	 * Set the playback speed rate.
	 * @param {number}
	 */
	changePlayerSpeed(number): void;

	/**
	 * Destroy the video player and free up resources.
	 */
	destroy(): void;

	/**
	 * Mute and unmute the video.
	 * @param {boolean} mute - true to mute the video, false to unmute.
	 */
	mute(mute: boolean): void;

	/**
	 * Returns the duration of the video in milliseconds.
	 * @returns {number} Video duration in milliseconds.
	 */
	getDuration(): number;

	/**
	 * *** ANDROID ONLY ***
	 * Stop playback of the video. This resets the player and video src.
	 */
	stop(): void;

	getVideoSize(): { width: number; height: number };

	// setFill(fill: boolean): void;

	setMode(mode: string, fill: boolean): void;

	/**
	 * *** IOS ONLY ***
	 * Update the video player with an AVAsset file.
	 */
	updateAsset(asset): void;

	/**
	 * Callback to execute when the video is ready to play
	 * @param {function} callback - The callback function to execute.
	 */
	playbackReady(callback: Function): void;

	/**
	 * *** IOS ONLY ***
	 * Callback to execute when the video is playing.
	 * @param {function} callback - The callback function to execute.
	 */
	playbackStart(callback: Function): void;

	/**
	 * Callback to execute when the video has finished seekToTime.
	 * @param {function} callback - The callback function to execute.
	 */
	seekToTimeComplete(callback: Function): void;

	/**
	 * Callback to execute when the time is updated.
	 * @param {function} callback - The callback function to execute.
	 */
	currentTimeUpdated(callback: Function): void;
}

export interface IVideoPlayerEvents {
	errorEvent: any;
	finishedEvent: any;
	playbackReadyEvent: any;
	playbackStartEvent: any;
	seekToTimeCompleteEvent: any;
	currentTimeUpdatedEvent: any;
}

export interface SeekToTimeOptions {
	/**
	 * Android MediaPlayer time seek mode
	 * Changing this only affects API Version >= 26
	 * @default android.media.MediaPlayer.SEEK_PREVIOUS_SYNC
	 */
	androidSeekMode?: number;
}
