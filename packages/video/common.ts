import { booleanConverter, Property, Utils, View } from '@nativescript/core';
import { fromFileOrResource, fromNativeSource, fromUrl, VideoSource } from './video-source';

export class VideoPlayerUtil {
	public static debug: boolean = false;
}

export interface SeekToTimeOptions {
	androidSeekMode?: number;
}

export enum CLogTypes {
	info,
	warning,
	error,
}

export const CLog = (type: CLogTypes = 0, ...args) => {
	if (VideoPlayerUtil.debug) {
		if (type === 0) {
			// Info
			console.log('NativeScript-VideoPlayer: INFO', args);
		} else if (type === 1) {
			// Warning
			console.log('NativeScript-VideoPlayer: WARNING', args);
		} else if (type === 2) {
			console.log('NativeScript-VideoPlayer: ERROR', args);
		}
	}
};

export class VideoCommon extends View {
	/**
	 * If true console logs will be output to help debug the Video events.
	 */
	public set debug(value: boolean) {
		VideoPlayerUtil.debug = value;
	}

	/**
	 * String value for hooking into the errorEvent. This event fires when an error/exception throws in the Video source.
	 */
	public static errorEvent = 'error';

	/**
	 * String value for hooking into the finishedEvent. This event fires when the video is ready.
	 */
	public static playbackReadyEvent = 'playbackReady';

	/**
	 * String value for hooking into the playbackStartEvent. This event fires when video starts playback.
	 */
	public static playbackStartEvent = 'playbackStart';

	/**
	 * String value for hooking into the seekToTimeCompleteEvent. This event fires when seeking is complete.
	 */
	public static seekToTimeCompleteEvent = 'seekToTimeComplete';
	/**
	 * String value for hooking into the currentTimeUpdatedEvent. This event fires when the current time of playing video is changed.
	 */
	public static currentTimeUpdatedEvent = 'currentTimeUpdated';

	/**
	 * String value for hooking into the finishedEvent. This event fires when the video is complete.
	 */
	public static finishedEvent = 'finished';

	/**
	 * String value for hooking into the mutedEvent. This event fires when video is muted.
	 */
	public static mutedEvent = 'muted';

	/**
	 * String value for hooking into the unmutedEvent. This event fires when video is unmutedEvent.
	 */
	public static unmutedEvent = 'unmuted';

	/**
	 * String value for hooking into the pausedEvent. This event fires when video is paused.
	 */
	public static pausedEvent = 'paused';

	/**
	 * String value for hooking into the volumeSetEvent. This event fires when the volume is set.
	 */
	public static volumeSetEvent = 'volumeSet';

	/**
	 * The android nativeView for the VideoPlayer. android.view.TextureView.
	 */
	public android: android.view.TextureView;

	/**
	 * This iOS nativeView for the VideoPlayer.
	 */
	public ios: UIView;

	/**
	 * The native video player class. Android: android.media.MediaPlayer --- iOS: AVPlayer
	 */
	public player;

	/**
	 * The video source file.
	 */
	public src: string;

	/**
	 *  Headers to use.
	 */
	public headers: Map<string, string>;

	/**
	 * If true then it will setup an observer observe current time.
	 */
	public observeCurrentTime: boolean;

	/**
	 * If true the video will to start playing when ready.
	 */
	public autoplay = false;

	/**
	 * If true will enable the media player's playback controls.
	 */
	public controls = true;

	/**
	 * If true, the video loops the playback after ending.
	 */
	public loop = false;

	public muted = false;

	public fill = false;

	public mode = 'PORTRAIT';

	/**
	 * Notify events by name and optionally pass data
	 */
	public sendEvent(eventName: string, data?: any, msg?: string) {
		this.notify({
			eventName,
			object: this,
			data,
			message: msg,
		});
	}
}

export const srcProperty = new Property<VideoCommon, any>({
	name: 'src',
	valueChanged: onSrcPropertyChanged,
});
srcProperty.register(VideoCommon);

export const headersProperty = new Property<VideoCommon, any>({
	name: 'headers',
	valueChanged: onHeadersPropertyChanged,
});
headersProperty.register(VideoCommon);

export const videoSourceProperty = new Property<VideoCommon, any>({
	name: 'videoSource',
});
videoSourceProperty.register(VideoCommon);

export const isLoadingProperty = new Property<VideoCommon, boolean>({
	name: 'isLoading',
	valueConverter: booleanConverter,
});
isLoadingProperty.register(VideoCommon);

export const observeCurrentTimeProperty = new Property<VideoCommon, boolean>({
	name: 'observeCurrentTime',
	valueConverter: booleanConverter,
});
observeCurrentTimeProperty.register(VideoCommon);

export const autoplayProperty = new Property<VideoCommon, boolean>({
	name: 'autoplay',
	valueConverter: booleanConverter,
});
autoplayProperty.register(VideoCommon);

export const controlsProperty = new Property<VideoCommon, boolean>({
	name: 'controls',
	valueConverter: booleanConverter,
});
controlsProperty.register(VideoCommon);

export const loopProperty = new Property<VideoCommon, boolean>({
	name: 'loop',
	valueConverter: booleanConverter,
});
loopProperty.register(VideoCommon);

export const mutedProperty = new Property<VideoCommon, boolean>({
	name: 'muted',
	valueConverter: booleanConverter,
});
mutedProperty.register(VideoCommon);

export const fillProperty = new Property<VideoCommon, boolean>({
	name: 'fill',
	valueConverter: booleanConverter,
});
fillProperty.register(VideoCommon);

// on Android we explicitly set propertySettings to None because android will invalidate its layout (skip unnecessary native call).
// var AffectsLayout = platform.device.os === platform.platformNames.android ? dependencyObservable.PropertyMetadataSettings.None : dependencyObservable.PropertyMetadataSettings.AffectsLayout;

function onSrcPropertyChanged(view, oldValue, newValue) {
	CLog(CLogTypes.info, 'VideoCommon.onSrcPropertyChanged ---', `view: ${view}, oldValue: ${oldValue}, newValue: ${newValue}`);
	const video = view;
	let value = newValue;

	if (Utils.isString(value)) {
		value = value.trim();
		video.videoSource = null;
		video['_url'] = value;
		video.isLoadingProperty = true;
		if (Utils.isFileOrResourcePath(value)) {
			video.videoSource = fromFileOrResource(value);
			video.isLoadingProperty = false;
		} else {
			if (video['_url'] === value) {
				video.videoSource = fromUrl(value);
				video.isLoadingProperty = false;
			}
		}
	} else if (value instanceof VideoSource) {
		video.videoSource = value;
	} else {
		video.videoSource = fromNativeSource(value);
	}
}

function onHeadersPropertyChanged(view, oldValue, newValue) {
	CLog(CLogTypes.info, 'VideoCommon.onHeadersPropertyChanged ---', `view: ${view}, oldValue: ${oldValue}, newValue: ${newValue}`);
	const video = view;

	if (oldValue !== newValue) {
		if (video.src) {
			onSrcPropertyChanged(view, null, null);
			onSrcPropertyChanged(view, null, video.src);
		}
	}
}
