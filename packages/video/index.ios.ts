import { Application } from '@nativescript/core';
import { CLog, CLogTypes, headersProperty, VideoCommon, videoSourceProperty, SeekToTimeOptions } from './common';

declare const NSMutableDictionary;

export class Video extends VideoCommon {
	private _playerController: AVPlayerViewController;
	private _src = '';
	private _url;
	private _headers: NSMutableDictionary<string, string>;
	private _didPlayToEndTimeObserver: any;
	private _didPlayToEndTimeActive: boolean;
	private _observer: NSObject;
	private _observerActive: boolean;
	private _playbackTimeObserver: any;
	private _playbackTimeObserverActive: boolean;
	private _videoPlaying: boolean;
	private _videoFinished = false;
	private _owner: WeakRef<Video>;
	public nativeView: UIView;
	public player: AVPlayer;
	public videoLoaded = false;

	constructor() {
		super();
		this._playerController = AVPlayerViewController.new();
		CLog(CLogTypes.info, 'this._playerController', this._playerController);
		this.player = AVPlayer.new();
		CLog(CLogTypes.info, 'this.player', this.player);
		this._playerController.player = this.player;
		// showsPlaybackControls must be set to false on init to avoid any potential 'Unable to simultaneously satisfy constraints' errors
		this._playerController.showsPlaybackControls = false;
		this.nativeView = this._playerController.view;
		this._observer = PlayerObserverClass.alloc().init();
		CLog(CLogTypes.info, 'this._observer', this._observer);
		this._observer['_owner'] = this;
		(this._observer as any).owner = this;
	}

	// get ios(): any {
	//   return this.nativeView;
	// }

	[headersProperty.setNative](value) {
		this._setHeader(value ? value : null);
	}

	[videoSourceProperty.setNative](value: AVPlayerItem) {
		this._setNativeVideo(value ? (value as any).ios : null);
	}

	public _setHeader(headers: Map<string, string>): void {
		CLog(CLogTypes.info, 'Video._setHeader ---', `headers: ${headers}`);
		if (headers && headers.size > 0) {
			this._headers = new NSMutableDictionary();
			CLog(CLogTypes.info, `Video._setHeader ---`, `this._headers: ${this._headers}`);
			headers.forEach((value: string, key: string) => {
				this._headers.setValueForKey(value, key);
			});
		}
		if (this._src) {
			CLog(CLogTypes.info, 'Video._setHeader ---', `this._src: ${this._src}`);
			this._setNativePlayerSource(this._src);
		}
	}

	public _setNativeVideo(nativeVideoPlayer: any) {
		CLog(CLogTypes.info, 'Video._setNativeVideo ---', `nativeVideoPlayer: ${nativeVideoPlayer}`);
		// if (this['_url'] && this._headers && this._headers.count > 0) {
		if (this._url && this._headers && this._headers.count > 0) {
			// adding headers if exist when loading video from URL
			CLog(CLogTypes.warning, 'Need to add headers!');
			// const url = NSURL.URLWithString(this['_url']);
			const url = NSURL.URLWithString(this._url);
			CLog(CLogTypes.info, 'Video._setNativeVideo ---', `url: ${url}`);
			const options: any = NSDictionary.dictionaryWithDictionary(<any>{
				AVURLAssetHTTPHeaderFieldsKey: this._headers,
			});
			const asset: AVURLAsset = AVURLAsset.alloc().initWithURLOptions(url, options);
			const item: AVPlayerItem = AVPlayerItem.playerItemWithAsset(asset);
			nativeVideoPlayer = item;
		}

		if (nativeVideoPlayer != null) {
			const currentItem = this.player.currentItem;
			this._addStatusObserver(nativeVideoPlayer);
			this._autoplayCheck();
			this._videoFinished = false;
			if (currentItem !== null) {
				this.videoLoaded = false;
				this._videoPlaying = false;
				this._removeStatusObserver(currentItem);
				// Need to set to null so the previous video is not shown while its loading
				this.player.replaceCurrentItemWithPlayerItem(null);
				this.player.replaceCurrentItemWithPlayerItem(nativeVideoPlayer);
			} else {
				this.player.replaceCurrentItemWithPlayerItem(nativeVideoPlayer);
				this._init();
			}
		}
	}

	public updateAsset(nativeVideoAsset: AVAsset) {
		CLog(CLogTypes.info, 'Video.updateAsset ---', `nativeVideoAsset: ${nativeVideoAsset}`);
		const newPlayerItem = AVPlayerItem.playerItemWithAsset(nativeVideoAsset);
		this._setNativeVideo(newPlayerItem);
	}

	public _setNativePlayerSource(nativePlayerSrc: string) {
		CLog(CLogTypes.info, 'Video._setNativePlayerSource ---', `nativePlayerSrc: ${nativePlayerSrc}`);
		this._src = nativePlayerSrc;
		const url = NSURL.URLWithString(this._src);
		this.player = AVPlayer.new();
		this._init();
	}

	public play() {
		CLog(CLogTypes.info, 'Video.play');
		if (this._videoFinished) {
			this._videoFinished = false;
			this.seekToTime(5);
		}

		if (this.observeCurrentTime && !this._playbackTimeObserverActive) {
			this._addPlaybackTimeObserver();
		}

		this.player.play();
		this.sendEvent(VideoCommon.playbackStartEvent);
	}

	public pause() {
		CLog(CLogTypes.info, 'Video.pause()');
		this.player.pause();
		this.sendEvent(VideoCommon.pausedEvent);
		if (this._playbackTimeObserverActive) {
			this._removePlaybackTimeObserver();
		}
	}

	public mute(mute: boolean) {
		CLog(CLogTypes.info, 'Video.mute ---', `mute: ${mute}`);
		this.player.muted = mute;
		// send the event
		if (mute === true) {
			this.sendEvent(VideoCommon.mutedEvent);
		} else {
			this.sendEvent(VideoCommon.unmutedEvent);
		}
	}

	public seekToTime(ms: number, options?: SeekToTimeOptions) {
		CLog(CLogTypes.info, 'Video.seekToTime ---', `ms: ${ms}`);
		const seconds = ms / 1000.0;
		const time = CMTimeMakeWithSeconds(seconds, this.player.currentTime().timescale);
		this.player.seekToTimeToleranceBeforeToleranceAfterCompletionHandler(time, kCMTimeZero, kCMTimeZero, (isFinished) => {
			CLog(CLogTypes.info, `Video.seekToTime ---`, 'emitting seekToTimeCompleteEvent');
			this.sendEvent(VideoCommon.seekToTimeCompleteEvent, { time: ms });
		});
	}

	public getDuration(): number {
		const seconds = CMTimeGetSeconds(this.player.currentItem.asset.duration);
		const milliseconds = seconds * 1000.0;
		return milliseconds;
	}

	public getCurrentTime(): any {
		if (this.player === null) {
			return false;
		}
		const result = (this.player.currentTime().value / this.player.currentTime().timescale) * 1000;
		return result;
	}

	public setVolume(volume: number) {
		CLog(CLogTypes.info, 'Video.setVolume ---', `volume: ${volume}`);
		this.player.volume = volume;
		this.sendEvent(VideoCommon.volumeSetEvent);
	}

	public destroy() {
		CLog(CLogTypes.info, 'Video.destroy');
		this._removeStatusObserver(this.player.currentItem);
		if (this._didPlayToEndTimeActive) {
			Application.ios.removeNotificationObserver(this._didPlayToEndTimeObserver, AVPlayerItemDidPlayToEndTimeNotification);
			this._didPlayToEndTimeActive = false;
		}

		if (this._playbackTimeObserverActive) {
			this._removePlaybackTimeObserver();
		}

		this.pause();
		this.player.replaceCurrentItemWithPlayerItem(null); // de-allocates the AVPlayer
		this._playerController = null;
		this.player = null;
	}

	public getVideoSize(): { width: number; height: number } {
		const r = this._playerController.videoBounds;
		return {
			width: r.size.width,
			height: r.size.height,
		};
	}

	private _init() {
		CLog(CLogTypes.info, 'Video._init');
		if (this.controls !== false) {
			this._playerController.showsPlaybackControls = true;
		}

		if (this.fill === true) {
			this._playerController.videoGravity = AVLayerVideoGravityResizeAspectFill;
		}

		this._playerController.player = this.player;

		if (isNaN(parseInt(this.width.toString(), 10)) || isNaN(parseInt(this.height.toString(), 10))) {
			this.requestLayout();
		}

		if (this.muted === true) {
			this.player.muted = true;
		}

		if (!this._didPlayToEndTimeActive) {
			this._didPlayToEndTimeObserver = Application.ios.addNotificationObserver(AVPlayerItemDidPlayToEndTimeNotification, this.AVPlayerItemDidPlayToEndTimeNotification.bind(this));
			this._didPlayToEndTimeActive = true;
		}
	}

	private AVPlayerItemDidPlayToEndTimeNotification(notification: any) {
		CLog(CLogTypes.info, 'Video.AVPlayerItemDidPlayToEndTimeNotification ---', `notification: ${notification}`);
		if (this.player.currentItem && this.player.currentItem === notification.object) {
			// This will match exactly to the object from the notification so can ensure only looping and finished event for the video that has finished.
			// Notification is structured like so: NSConcreteNotification 0x61000024f690 {name = AVPlayerItemDidPlayToEndTimeNotification; object = <AVPlayerItem: 0x600000204190, asset = <AVURLAsset: 0x60000022b7a0, URL = https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4>>}
			CLog(CLogTypes.info, 'Video.AVPlayerItemDidPlayToEndTimeNotification ---', 'emmitting finishedEvent');
			this.sendEvent(VideoCommon.finishedEvent);
			this._videoFinished = true;
			if (this.loop === true && this.player !== null) {
				// Go in 5ms for more seamless looping
				this.player.seekToTime(CMTimeMake(5, 100));
				this.player.play();
			}
		}
	}

	private _addStatusObserver(currentItem) {
		CLog(CLogTypes.info, 'Video._addStatusObserver ---', `currentItem: ${currentItem}`);
		this._observerActive = true;
		currentItem.addObserverForKeyPathOptionsContext(this._observer, 'status', 0, null);
	}

	private _removeStatusObserver(currentItem) {
		CLog(CLogTypes.info, 'Video._removeStatusObserver ---', `currentItem: ${currentItem}`);
		this._observerActive = false;
		currentItem.removeObserverForKeyPath(this._observer, 'status');
	}

	private _addPlaybackTimeObserver() {
		CLog(CLogTypes.info, 'Video._addPlaybackTimeObserver');
		this._playbackTimeObserverActive = true;
		const _interval = CMTimeMake(1, 5);
		this._playbackTimeObserver = this.player.addPeriodicTimeObserverForIntervalQueueUsingBlock(_interval, null, (currentTime) => {
			const _seconds = CMTimeGetSeconds(currentTime);
			const _milliseconds = _seconds * 1000.0;
			CLog(CLogTypes.info, `Video._addPlaybackTimeObserver ---`, 'emitting currentTimeUpdatedEvent');
			this.notify({
				eventName: VideoCommon.currentTimeUpdatedEvent,
				object: this,
				position: _milliseconds,
			});
		});
	}

	private _removePlaybackTimeObserver() {
		CLog(CLogTypes.info, 'Video._removePlaybackTimeObserver');
		this._playbackTimeObserverActive = false;
		this.player.removeTimeObserver(this._playbackTimeObserver);
	}

	private _autoplayCheck() {
		CLog(CLogTypes.info, 'Video._autoplayCheck ---', `this.autoplay ${this.autoplay}`);
		if (this.autoplay) {
			this.play();
		}
	}

	playbackReady() {
		this.videoLoaded = true;
		CLog(CLogTypes.info, `Video.playbackReady ---`, 'emitting playbackReadyEvent');
		this.sendEvent(VideoCommon.playbackReadyEvent);
	}

	playbackStart() {
		this._videoPlaying = true;
		CLog(CLogTypes.info, `Video.playbackStart ---`, 'emitting playbackStartEvent');
		this.sendEvent(VideoCommon.playbackStartEvent);
	}

	public setMode(mode: string, fill: boolean) {
		if (this.mode !== mode) {
			let transform = CGAffineTransformIdentity;

			if (mode === 'LANDSCAPE') {
				transform = CGAffineTransformRotate(transform, (90 * 3.14159265358979) / 180);
				this._playerController.view.transform = transform;

				const newFrame = CGRectMake(0, 0, this.nativeView.bounds.size.width, this.nativeView.bounds.size.height);
				this.nativeView.frame = newFrame;
			} else if (this.mode !== mode && mode === 'PORTRAIT') {
				transform = CGAffineTransformRotate(transform, (0 * 3.14159265358979) / 180);
				this._playerController.view.transform = transform;
				const newFrame = CGRectMake(0, 0, this.nativeView.bounds.size.height, this.nativeView.bounds.size.width);
				this.nativeView.frame = newFrame;
			}

			this.mode = mode;
		}

		if (this.fill !== fill) {
			if (fill) {
				this._playerController.videoGravity = AVLayerVideoGravityResizeAspectFill;
			} else {
				this._playerController.videoGravity = AVLayerVideoGravityResizeAspect;
			}

			this.fill = fill;
		}
	}
}

@NativeClass()
class PlayerObserverClass extends NSObject {
	observeValueForKeyPathOfObjectChangeContext(path: string, obj: Object, change: NSDictionary<any, any>, context: any) {
		CLog(CLogTypes.info, 'PlayerObserverClass.observeValueForKeyPathOfObjectChangeContext ---', `path: ${path}, obj: ${obj}, change: ${change}, context: ${context}`);
		if (path === 'status') {
			const owner = (this as any).owner as Video;

			if (owner.player.currentItem.status === AVPlayerItemStatus.Failed) {
				const baseError = owner.player.currentItem.error.userInfo.objectForKey(NSUnderlyingErrorKey);
				const error = new Error();

				owner.sendEvent(VideoCommon.errorEvent, {
					error: {
						code: baseError.code,
						domain: baseError.domain,
					},
					stack: error.stack,
				});
			}

			if (owner.player && owner.player.currentItem.status === AVPlayerItemStatus.ReadyToPlay && !owner.videoLoaded) {
				owner.playbackReady();
			}
		}
	}
}
