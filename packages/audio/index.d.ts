import { Observable } from '@nativescript/core';

export interface AudioPlayerOptions {
	/**
	 * The audio file to play.
	 */
	audioFile: string;

	/**
	 * Set true to loop audio playback.
	 */
	loop: boolean;

	/**
	 * Prevent autoplay if desired as player autoplays be default
	 */
	autoPlay?: boolean;

	/**
	 * Set true to enable audio metering.
	 */
	metering?: boolean;
	audioMixing?: boolean;

	pitch?: number;

	/**
	 * Callback to execute when playback has completed.
	 * @returns {Object} An object containing the native values for the callback.
	 */
	completeCallback?: Function;

	/**
	 * Callback to execute when playback has an error.
	 * @returns {Object} An object containing the native values for the error callback.
	 */
	errorCallback?: Function;

	/**
	 * Callback to execute when info is emitted from the player.
	 * @returns {Object} An object containing the native values for the info callback.
	 */
	infoCallback?: Function;
}

export interface AudioRecorderOptions {
	/**
	 * The name of the file recorded.
	 */
	filename: string;

	/**
	 * The audio source to record *** ANDROID ONLY for now ***
	 * https://developer.android.com/reference/android/media/MediaRecorder.AudioSource.html
	 */
	source?: any;

	/**
	 * The max duration of the audio recording.
	 */
	maxDuration?: number;

	/**
	 * Set true to enable audio metering.
	 */
	metering?: boolean;

	/**
	 * The format of the audio recording.
	 */
	format?: any;
	channels?: any;
	sampleRate?: any;
	bitRate?: any;
	encoder?: any;

	/**
	 * Callback to execute when playback has an error.
	 * @returns {Object} An object containing the native values for the error callback.
	 */
	errorCallback?: Function;

	/**
	 * Callback to execute when info is emitted from the player.
	 * @returns {Object} An object containing the native values for the info callback.
	 */
	infoCallback?: Function;
}
export interface TNSPlayerI {
	readonly ios?: any;
	readonly android?: any;

	/**
	 * Set to true to enable console log output for debugging.
	 */
	debug: boolean;

	/**
	 * Volume getter/setter
	 */
	volume: any;

	/**
	 * Duration getter
	 */
	duration: number;

	initFromFile(options: AudioPlayerOptions): Promise<any>;
	/**
	 * Starts playing audio file from local app files.
	 */
	playFromFile(options: AudioPlayerOptions): Promise<any>;

	initFromUrl(options: AudioPlayerOptions): Promise<any>;

	/**
	 * Starts playing audio file from url
	 */
	playFromUrl(options: AudioPlayerOptions): Promise<any>;

	/**
	 * Play audio file.
	 */
	play(): Promise<boolean>;

	/**
	 * Pauses playing audio file.
	 */
	pause(): Promise<boolean>;

	/**
	 * Resume audio player.
	 */
	resume(): void;

	/**
	 * Seeks to specific time.
	 */
	seekTo(time: number): Promise<any>;

	/**
	 * Releases resources from the audio player.
	 */
	dispose(): Promise<boolean>;

	/**
	 * Check if the audio is actively playing.
	 */
	isAudioPlaying(): boolean;

	/**
	 * Get the duration of the audio file playing.
	 */
	getAudioTrackDuration(): Promise<string>;

	/**
	 * Sets the player playback speed rate. On Android this works on API 23+.
	 * @param speed [number] - The speed of the playback.
	 */
	changePlayerSpeed(speed: number): void;

	/**
	 * ** iOS ONLY ** - Begins playback at a certain delay, relative to the current playback time.
	 * @param time [number] - The time to start playing the audio track at.
	 */
	playAtTime(time: number);
}
export interface TNSRecordI {
	start(options: AudioRecorderOptions): Promise<any>;
	pause(): Promise<any>;
	resume(): Promise<any>;
	stop(): Promise<any>;
	dispose(): Promise<any>;
}
export declare class TNSPlayer {
	static ObjCProtocols: any[];
	readonly ios: any;
	readonly android: any;
	readonly events: Observable;

	/**
	 * Set to true to enable console log output for debugging.
	 */
	debug: boolean;

	/**
	 * Volume getter/setter
	 */
	volume: any;

	/**
	 * duration
	 */
	duration: number;

	/**
	 * current time
	 */
	readonly currentTime: number;

	/**
	 * @param  {AudioFocusDurationHint} durationHint - Determines differents behaviors by
	 * the system and the other application that previously held audio focus.
	 * See the {@link https://developer.android.com/reference/android/media/AudioFocusRequest#the-different-types-of-focus-requests different  types of focus requests}
	 */
	constructor(durationHint?: AudioFocusDurationHint | AudioFocusManager);

	/**
	 * Sets the audio focus manager for this player
	 * @param manager new Audio Focus Manager
	 */
	setAudioFocusManager(manager: AudioFocusManager);

	initFromFile(options: AudioPlayerOptions): Promise<any>;

	/**
	 * Starts playing audio file from local app files.
	 */
	playFromFile(options: AudioPlayerOptions): Promise<any>;
	initFromUrl(options: AudioPlayerOptions): Promise<any>;

	/**
	 * Starts playing audio file from url
	 */
	playFromUrl(options: AudioPlayerOptions): Promise<any>;

	/**
	 * Play audio file.
	 */
	play(): Promise<boolean>;

	/**
	 * Pauses playing audio file.
	 */
	pause(): Promise<boolean>;

	/**
	 * Resume audio player.
	 */
	resume(): void;

	/**
	 * Seeks to specific time in seconds.
	 * @param time [number] - The position of the track duration to seek to.
	 */
	seekTo(time: number): Promise<any>;

	/**
	 * Releases resources from the audio player.
	 */
	dispose(): Promise<boolean>;

	/**
	 * Check if the audio is actively playing.
	 */
	isAudioPlaying(): boolean;

	/**
	 * Get the duration of the audio file playing.
	 */
	getAudioTrackDuration(): Promise<string>;

	/**
	 * Android Only
	 * Will set the playback speed for Android 23+, this is not available on lower Android APIs.
	 * @param speed [number] - The speed of the playback.
	 */
	changePlayerSpeed(speed: number): void;

	audioPlayerDidFinishPlayingSuccessfully(player?: any, flag?: boolean): void;
}

export declare class TNSRecorder {
	static ObjCProtocols: any[];
	private _recorder;
	private _recordingSession;
	readonly ios: any;
	readonly android: any;

	/**
	 * Set to true to enable console log output for debugging.
	 */
	debug: boolean;

	/**
	 * Returns true if the device is capable of recording, false otherwise.
	 */
	static CAN_RECORD(): boolean;

	/**
	 * Android Only
	 * Returns true if the RECORD_AUDIO permission has been granted.
	 */
	hasRecordPermission(): boolean;

	/**
	 * Android Only
	 * Promise will resolve if the user grants the permission or if the permission has already been granted.
	 */
	requestRecordPermission(): Promise<any>;

	/**
	 * Starts a recording session with the provided options.
	 * @param options [AudioRecorderOptions]
	 */
	start(options: AudioRecorderOptions): Promise<any>;

	/**
	 * Pauses the recorder.
	 */
	pause(): Promise<any>;

	/**
	 * Resumes the recorder.
	 */
	resume(): Promise<any>;

	/**
	 * Stops the recording.
	 */
	stop(): Promise<any>;

	/**
	 * Disposes of the recorder session.
	 */
	dispose(): Promise<any>;

	/**
	 * Returns the maximum absolute amplitude that was sampled since the last call to this method.
	 * @param channel [number]
	 */
	getMeters(channel?: number): any;

	/**
	 * iOS Only
	 * Returns value indicating the recorder is currently recording.
	 */
	isRecording(): any;
	audioRecorderDidFinishRecording(recorder: any, success: boolean): void;
}

export interface IAudioPlayerEvents {
	seek: 'seek';
	paused: 'paused';
	started: 'started';
}

export const AudioPlayerEvents: IAudioPlayerEvents;

export enum AudioFocusDurationHint {
	/**
	 * Expresses the fact that your application is now the sole source
	 * of audio that the user is listening to. The duration of the
	 * audio playback is unknown, and is possibly very long: after the
	 * user finishes interacting with your application, (s)he doesn’t
	 * expect another audio stream to resume.
	 */
	AUDIOFOCUS_GAIN = android.media.AudioManager.AUDIOFOCUS_GAIN,
	/**
	 * For a situation when you know your application is temporarily
	 * grabbing focus from the current owner, but the user expects
	 * playback to go back to where it was once your application no
	 * longer requires audio focus.
	 */
	AUDIOFOCUS_GAIN_TRANSIENT = android.media.AudioManager.AUDIOFOCUS_GAIN_TRANSIENT,
	/**
	 * This focus request type is similar to AUDIOFOCUS_GAIN_TRANSIENT
	 * for the temporary aspect of the focus request, but it also
	 * expresses the fact during the time you own focus, you allow
	 * another application to keep playing at a reduced volume,
	 * “ducked”.
	 */
	AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK = android.media.AudioManager.AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK,
	/**
	 * Also for a temporary request, but also expresses that your
	 * application expects the device to not play anything else. This
	 * is typically used if you are doing audio recording or speech
	 * recognition, and don’t want for examples notifications to be
	 * played by the system during that time.
	 */
	AUDIOFOCUS_GAIN_TRANSIENT_EXCLUSIVE = android.media.AudioManager.AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK,
}

export interface AudioFocusManagerOptions {
	durationHint?: AudioFocusDurationHint;
	usage?: number; // android.media.AudioAttributes.USAGE_MEDIA
	contentType?: number; // android.media.AudioAttributes.CONTENT_TYPE_MUSIC
}
export interface AudioFocusChangeEventData extends EventData {
	focusChange: number;
}

export class AudioFocusManager extends Observable {
	constructor(options?: AudioFocusManagerOptions);
	on(event: 'audioFocusChange', callback: (data: AudioFocusChangeEventData) => void, thisArg?: any);
}
