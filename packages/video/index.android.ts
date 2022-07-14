import { Utils } from '@nativescript/core';
import { CLog, CLogTypes, headersProperty, VideoCommon, videoSourceProperty, SeekToTimeOptions } from './common';

const STATE_IDLE = 0;
const STATE_PLAYING = 1;
const STATE_PAUSED = 2;
const SURFACE_WAITING = 0;
const SURFACE_READY = 1;

export class Video extends VideoCommon {
	public nativeView: android.view.TextureView = null;
	public player: android.media.MediaPlayer = null;
	private _textureView: android.widget.VideoView;
	private _src = '';
	private _owner: WeakRef<Video> = new WeakRef(this);
	private textureSurface: android.view.Surface = null;
	private mediaController: android.widget.MediaController = null;
	private videoWidth = 0;
	private videoHeight = 0;
	private _headers: java.util.Map<string, string> = null;
	private playState = STATE_IDLE;
	private mediaState = SURFACE_WAITING;
	private audioSession = -1;
	private preSeekTime = -1;
	private currentBufferPercentage = 0;
	private _playbackTimeObserver = null;
	private _playbackTimeObserverActive = false;

	constructor() {
		super();
	}

	// get android(): any {
	//   return this.nativeView;
	// }

	[headersProperty.setNative](value) {
		this._setHeader(value ? value : null);
	}

	[videoSourceProperty.setNative](value) {
		this._setNativeVideo(value ? value.android : null);
	}

	public createNativeView(): any {
		CLog(CLogTypes.info, 'Video.createNativeView');
		this.nativeView = new android.view.TextureView(this._context);
		this.nativeView.setFocusable(true);
		this.nativeView.setFocusableInTouchMode(true);
		this.nativeView.requestFocus();
		this.nativeView.setOnTouchListener(
			new android.view.View.OnTouchListener({
				onTouch: (view, event) => {
					CLog(CLogTypes.info, 'OnTouchListener --- onTouch', `view: ${view}, event: ${event}`);
					this._owner.get().toggleMediaControllerVisibility();
					return false;
				},
			})
		);

		this.nativeView.setSurfaceTextureListener(
			new android.view.TextureView.SurfaceTextureListener({
				onSurfaceTextureSizeChanged: (surface, width, height) => {
					CLog(CLogTypes.info, 'SurfaceTextureListener.onSurfaceTextureSizeChanged ---', `surface: ${surface}, width: ${width}, height: ${height}`);
					// do nothing
				},

				onSurfaceTextureAvailable: (surface, width, height) => {
					CLog(CLogTypes.info, 'SurfaceTextureListener.onSurfaceTextureAvailable ---', `surface: ${surface}`);
					this._owner.get().textureSurface = new android.view.Surface(surface);
					this._owner.get().mediaState = SURFACE_WAITING;
					this._owner.get()._openVideo();
				},

				onSurfaceTextureDestroyed: (surface) => {
					CLog(CLogTypes.info, 'SurfaceTextureListener.onSurfaceTextureDestroyed ---', `surface: ${surface}`);
					// after we return from this we can't use the surface any more
					if (this._owner.get().textureSurface !== null) {
						this._owner.get().textureSurface.release();
						this._owner.get().textureSurface = null;
					}
					if (this._owner.get().mediaController !== null) {
						this._owner.get().mediaController.hide();
					}
					this._owner.get().release();

					return true;
				},

				onSurfaceTextureUpdated: (/* surface */) => {
					// do nothing - this gets called a crap ton - so don't add logs
				},
			})
		);

		return this.nativeView;
	}

	public toggleMediaControllerVisibility() {
		CLog(CLogTypes.info, 'Video.toggleMediaControllerVisibility');
		if (!this.mediaController) {
			return;
		}
		if (this.mediaController.isShowing()) {
			this.mediaController.hide();
		} else {
			this.mediaController.show();
		}
	}

	public play(): void {
		CLog(CLogTypes.info, 'Video.play');
		this.playState = STATE_PLAYING;
		if (this.mediaState === SURFACE_WAITING) {
			this._openVideo();
		} else {
			if (this.observeCurrentTime && !this._playbackTimeObserverActive) {
				this._addPlaybackTimeObserver();
			}
			this.player.start();
			CLog(CLogTypes.info, 'Video.play ---  emitting playbackStartEvent');
			this.sendEvent(VideoCommon.playbackStartEvent);
		}
	}

	public pause(): void {
		this.playState = STATE_PAUSED;
		this.player.pause();
		this.sendEvent(VideoCommon.pausedEvent);
		this._removePlaybackTimeObserver();
	}

	public mute(mute: boolean): void {
		if (this.player) {
			if (mute === true) {
				this.player.setVolume(0, 0);
				this.sendEvent(VideoCommon.mutedEvent);
			} else if (mute === false) {
				this.player.setVolume(1, 1);
				this.sendEvent(VideoCommon.unmutedEvent);
			}
		}
	}

	public stop(): void {
		this.player.stop();
		this._removePlaybackTimeObserver();
		this.playState = STATE_IDLE;
		this.release();
	}

	public seekToTime(ms: number, options?: SeekToTimeOptions): void {
		if (!this.player) {
			this.preSeekTime = ms;
			return;
		} else {
			this.preSeekTime = -1;
		}
		if (android.os.Build.VERSION.SDK_INT >= 26) {
			// SEEK_PREVIOUS_SYNC is the default
			const seekMode = options && options.androidSeekMode != null ? options.androidSeekMode : (android.media.MediaPlayer as any).SEEK_PREVIOUS_SYNC;
			(this.player as any).seekTo(ms, seekMode);
		} else {
			this.player.seekTo(ms);
		}
		CLog(CLogTypes.info, 'Video.play ---  emitting seekToTimeCompleteEvent');
		this.sendEvent(VideoCommon.seekToTimeCompleteEvent, { time: ms });
	}

	public isPlaying(): boolean {
		if (!this.player) {
			return false;
		}
		return this.player.isPlaying();
	}

	public getDuration(): number {
		if (!this.player || this.mediaState === SURFACE_WAITING || this.playState === STATE_IDLE) {
			return 0;
		}
		return this.player.getDuration();
	}

	public getCurrentTime(): number {
		if (!this.player) {
			return 0;
		}
		return this.player.getCurrentPosition();
	}

	public setVolume(volume: number) {
		this.player.setVolume(volume, volume);
		this.sendEvent(VideoCommon.volumeSetEvent);
	}

	public changePlayerSpeed(speed: number) {
		this.player.setPlaybackParams(this.player.getPlaybackParams().setSpeed(speed));
	}

	public destroy() {
		this.release();
		this.src = null;
		this.nativeView = null;
		this.player = null;
		this.mediaController = null;
	}

	public getVideoSize(): { width: number; height: number } {
		return {
			width: this.videoWidth,
			height: this.videoHeight,
		};
	}

	private release(): void {
		if (this.player !== null) {
			this.mediaState = SURFACE_WAITING;
			this.player.reset();
			this.player.release();
			this.player = null;
			if (this._playbackTimeObserverActive) {
				this._removePlaybackTimeObserver();
			}
			const am = Utils.android.getApplicationContext().getSystemService(android.content.Context.AUDIO_SERVICE);
			am.abandonAudioFocus(null);
		}
	}

	public suspendEvent(): void {
		this.release();
	}

	public resumeEvent(): void {
		this._openVideo();
	}

	public setNativeSource(nativePlayerSrc: string): void {
		this._src = nativePlayerSrc;
		this._openVideo();
	}

	private _setupMediaPlayerListeners() {
		CLog(CLogTypes.info, 'Video._setupMediaPlayerListeners');
		this.player.setOnPreparedListener(
			new android.media.MediaPlayer.OnPreparedListener({
				onPrepared: (mp) => {
					CLog(CLogTypes.info, 'MediaPlayer.OnPreparedListener.onPrepared ---', `mp: ${mp}`);
					if (this._owner.get()) {
						if (this._owner.get().muted === true) {
							mp.setVolume(0, 0);
						}

						if (this._owner.get().mediaController != null) {
							this._owner.get().mediaController.setEnabled(true);
						}

						if (this._owner.get().preSeekTime > 0) {
							mp.seekTo(this._owner.get().preSeekTime);
						}
						this._owner.get().preSeekTime = -1;

						this._owner.get().videoWidth = mp.getVideoWidth();
						this._owner.get().videoHeight = mp.getVideoHeight();

						this._owner.get().mediaState = SURFACE_READY;

						if (this._owner.get().fill === true) {
							this._owner.get()._resetAspectRatio();
						} else {
							this._owner.get()._setupAspectRatio();
						}

						if (this._owner.get().videoWidth !== 0 && this._owner.get().videoHeight !== 0) {
							this._owner.get().nativeView.getSurfaceTexture().setDefaultBufferSize(this._owner.get().videoWidth, this._owner.get().videoHeight);
						}

						if (this._owner.get().autoplay === true || this._owner.get().playState === STATE_PLAYING) {
							this._owner.get().play();
						}

						CLog(CLogTypes.info, 'Video.play ---  emitting playbackReadyEvent');
						this._owner.get().sendEvent(VideoCommon.playbackReadyEvent);
						if (this._owner.get().loop === true) {
							mp.setLooping(true);
						}
					}
				},
			})
		);

		this.player.setOnSeekCompleteListener(
			new android.media.MediaPlayer.OnSeekCompleteListener({
				onSeekComplete: (mp) => {
					CLog(CLogTypes.info, 'MediaPlayer.OnSeekCompleteListener.onSeekComplete ---', `mp: ${mp}`);
					if (this._owner.get()) {
						CLog(CLogTypes.info, 'Video.play ---  emitting seekToTimeCompleteEvent');
						this._owner.get().sendEvent(VideoCommon.seekToTimeCompleteEvent);
					}
				},
			})
		);

		this.player.setOnVideoSizeChangedListener(
			new android.media.MediaPlayer.OnVideoSizeChangedListener({
				onVideoSizeChanged: (mp, width, height) => {
					CLog(CLogTypes.info, 'MediaPlayer.setOnVideoSizeChangedListener.onVideoSizeChanged ---', `mp: ${mp}, width: ${width}, heigth: ${height}`);

					if (this._owner.get()) {
						this._owner.get().videoWidth = mp.getVideoWidth();
						this._owner.get().videoHeight = mp.getVideoHeight();
						if (this._owner.get().videoWidth !== 0 && this._owner.get().videoHeight !== 0) {
							this._owner.get().nativeView.getSurfaceTexture().setDefaultBufferSize(this._owner.get().videoWidth, this._owner.get().videoHeight);
							if (this._owner.get().fill === true) {
								this._owner.get()._resetAspectRatio();
							} else {
								this._owner.get()._setupAspectRatio();
							}
						}
					}
				},
			})
		);

		this.player.setOnCompletionListener(
			new android.media.MediaPlayer.OnCompletionListener({
				onCompletion: (mp) => {
					CLog(CLogTypes.info, 'MediaPlayer.OnCompletionListener.onCompletion ---', `mp: ${mp}`);
					if (this._owner.get()) {
						this._owner.get()._removePlaybackTimeObserver();
						CLog(CLogTypes.info, 'Video.play ---  emitting finishedEvent');
						this._owner.get().sendEvent(VideoCommon.finishedEvent);
					}
				},
			})
		);

		this.player.setOnBufferingUpdateListener(
			new android.media.MediaPlayer.OnBufferingUpdateListener({
				onBufferingUpdate: (mp, percent) => {
					CLog(CLogTypes.info, 'MediaPlayer.OnBufferingUpdateListener.onBufferingUpdate ---', `mp: ${mp}, percent: ${percent}`);
					this._owner.get().currentBufferPercentage = percent;
				},
			})
		);
		this.currentBufferPercentage = 0;
	}

	private _setupMediaController(): void {
		CLog(CLogTypes.info, 'Video._setupMediaController');
		if (this.controls !== false || this.controls === undefined) {
			if (this.mediaController == null) {
				CLog(CLogTypes.info, 'Video._setupMediaController ---', 'creating new MediaController');
				this.mediaController = new android.widget.MediaController(this._context);
			} else {
				// Already setup
				return;
			}

			// 'getAudioSessionId' was added in API level 18, the current generated TNS typings are level 17
			interface TNSMediaPlayerControlApiLevel18 extends android.widget.MediaController.MediaPlayerControl {
				getAudioSessionId(): number;
			}

			const mediaPlayerControl = new android.widget.MediaController.MediaPlayerControl(<TNSMediaPlayerControlApiLevel18>{
				canPause: () => {
					return true;
				},
				canSeekBackward: () => {
					return true;
				},
				canSeekForward: () => {
					return true;
				},
				getAudioSessionId: () => {
					return this._owner.get().audioSession;
				},
				getBufferPercentage: () => {
					return this._owner.get().currentBufferPercentage;
				},
				getCurrentPosition: () => {
					return this._owner.get().getCurrentTime();
				},
				getDuration: () => {
					return this._owner.get().getDuration();
				},
				isPlaying: () => {
					return this._owner.get().isPlaying();
				},
				pause: () => {
					this._owner.get().pause();
				},
				seekTo: (v) => {
					this._owner.get().seekToTime(v);
				},
				start: () => {
					this._owner.get().play();
				},
			});

			CLog(CLogTypes.info, `Video._setupMediaController ---`, `mediaController.setMediaPlayer(${mediaPlayerControl})`);
			this.mediaController.setMediaPlayer(mediaPlayerControl);
			CLog(CLogTypes.info, `Video._setupMediaController ---`, `mediaController.setAnchorView(${this.nativeView})`);
			this.mediaController.setAnchorView(this.nativeView);
			CLog(CLogTypes.info, `Video._setupMediaController ---`, `mediaController.setEnabled(true)`);
			this.mediaController.setEnabled(true);
		}
	}

	private _setupAspectRatio(): void {
		CLog(CLogTypes.info, `Video._setupAspectRatio`);
		const viewWidth = this.nativeView.getWidth();
		const viewHeight = this.nativeView.getHeight();
		const aspectRatio = this.videoHeight / this.videoWidth;
		CLog(CLogTypes.info, `Video._setupAspectRatio ---`, `viewHeight: ${viewHeight}, viewWidth: ${viewWidth}, aspectRatio: ${aspectRatio}`);

		let newWidth;
		let newHeight;
		if (viewHeight > viewWidth * aspectRatio) {
			// limited by narrow width; restrict height
			newWidth = viewWidth;
			newHeight = viewWidth * aspectRatio;
		} else {
			// limited by short height; restrict width
			newWidth = viewHeight / aspectRatio;
			newHeight = viewHeight;
		}

		CLog(CLogTypes.info, `Video._setupAspectRatio ---`, `newWidth: ${newWidth}, newHeight: ${newHeight}`);

		const xoff = (viewWidth - newWidth) / 2;
		const yoff = (viewHeight - newHeight) / 2;
		CLog(CLogTypes.info, `Video._setupAspectRatio ---`, `xoff: ${xoff}, yoff: ${yoff}`);

		const txform = new android.graphics.Matrix();
		CLog(CLogTypes.info, `Video._setupAspectRatio ---`, `txform: ${txform}, txform: ${txform}`);

		this.nativeView.getTransform(txform);
		txform.setScale(newWidth / viewWidth, newHeight / viewHeight);
		txform.postTranslate(xoff, yoff);
		this.nativeView.setTransform(txform);
	}

	private _resetAspectRatio() {
		const viewWidth = this.nativeView.getWidth();
		const viewHeight = this.nativeView.getHeight();
		const aspectRatio = this.videoWidth / this.videoHeight;

		let newWidth;
		let newHeight;

		// if (viewHeight < viewWidth * aspectRatio) {
		newHeight = viewHeight;
		newWidth = viewHeight * aspectRatio;
		// } else {
		//   newHeight = viewWidth / aspectRatio;
		//   newWidth = viewWidth;
		// }

		const xoff = (viewWidth - newWidth) / 2;
		const yoff = (viewHeight - newHeight) / 2;

		const txform = new android.graphics.Matrix();
		txform.setScale(newWidth / viewWidth, newHeight / viewHeight);
		txform.postTranslate(xoff, yoff);
		this.nativeView.setTransform(txform);
	}

	private _openVideo(): void {
		if (this._src === null || this.textureSurface === null || (this._src !== null && typeof this._src === 'string' && this._src.length === 0)) {
			// we have to protect In case something else calls this before we are ready
			// the Surface event will then call this when we are ready...
			return;
		}
		CLog(CLogTypes.info, `Video._openVideo`);

		// clear any old stuff
		this.release();

		const am = Utils.android.getApplicationContext().getSystemService(android.content.Context.AUDIO_SERVICE);
		am.requestAudioFocus(null, android.media.AudioManager.STREAM_MUSIC, android.media.AudioManager.AUDIOFOCUS_GAIN);

		try {
			this.player = new android.media.MediaPlayer();
			CLog(CLogTypes.info, `Video._openVideo ---`, `this.player: ${this.player}`);

			if (this.audioSession !== null) {
				CLog(CLogTypes.info, `Video._openVideo ---`, `setting audio session Id: ${this.audioSession}`);
				this.player.setAudioSessionId(this.audioSession);
			} else {
				this.audioSession = this.player.getAudioSessionId();
			}

			CLog(CLogTypes.info, `Video._openVideo --- `, `setting up MediaPlayerListeners`);
			this._setupMediaPlayerListeners();

			if (!this._headers || this._headers.size() === 0) {
				this.player.setDataSource(this._src);
			} else {
				const videoUri = android.net.Uri.parse(this._src);
				this.player.setDataSource(Utils.android.getApplicationContext(), videoUri, this._headers);
			}

			this.player.setSurface(this.textureSurface);
			this.player.setAudioStreamType(android.media.AudioManager.STREAM_MUSIC);
			this.player.setScreenOnWhilePlaying(true);
			this.player.prepareAsync();

			this.player.setOnErrorListener(
				new android.media.MediaPlayer.OnErrorListener({
					onError: (mp, what, extra) => {
						const error = new Error();
						this._owner.get().sendEvent(VideoCommon.errorEvent, {
							error: { what: what, extra: extra },
							stack: error.stack,
						});
						return true;
					},
				})
			);

			this._setupMediaController();
		} catch (ex) {
			CLog(CLogTypes.error, `Video._openVideo --- error: ${ex}, stack: ${ex.stack}`);
			this._owner.get().sendEvent(VideoCommon.errorEvent, { error: ex, stack: ex.stack });
		}
	}

	private _setNativeVideo(nativeVideo: any): void {
		CLog(CLogTypes.error, `Video._setNativeVideo`);
		this._src = nativeVideo;
		this._openVideo();
	}

	private _setHeader(headers: Map<string, string>): void {
		CLog(CLogTypes.error, `Video._setHeader ---`, `headers: ${headers}`);
		if (headers && headers.size > 0) {
			this._headers = new java.util.HashMap();
			headers.forEach((value: string, key: string) => {
				this._headers.put(key, value);
			});
		}
		if (this._src) {
			this._openVideo();
		}
	}

	private _addPlaybackTimeObserver() {
		CLog(CLogTypes.error, `Video._addPlaybackTimeObserver`);
		this._playbackTimeObserverActive = true;
		this._playbackTimeObserver = Utils.setInterval(() => {
			if (this.player.isPlaying) {
				const _milliseconds = this.player.getCurrentPosition();
				this.notify({
					eventName: VideoCommon.currentTimeUpdatedEvent,
					object: this,
					position: _milliseconds,
				});
			}
		}, 500);
	}

	private _removePlaybackTimeObserver() {
		CLog(CLogTypes.error, `Video._removePlaybackTimeObserver`);
		if (this._playbackTimeObserverActive) {
			// one last emit of the most up-to-date time index
			if (this.player !== null) {
				const _milliseconds = this.player.getCurrentPosition();
				CLog(CLogTypes.info, 'Video._removePlaybackTimeObserver', 'emitting currentTimeUpdatedEvent');
				this.sendEvent(VideoCommon.currentTimeUpdatedEvent, {
					currentPosition: _milliseconds,
				});
			}

			Utils.clearInterval(this._playbackTimeObserver);
			this._playbackTimeObserverActive = false;
		}
	}

	// public setFill(fill: boolean): void {
	//   this.fill = fill;

	//   if (fill) {
	//     this._resetAspectRatio();
	//   } else {
	//     this._setupAspectRatio();
	//   }
	// }

	setMode(mode: string, fill: boolean) {
		const viewWidth = this.nativeView.getWidth();
		const viewHeight = this.nativeView.getHeight();

		if (mode === 'LANDSCAPE') {
			this.configureTransform(viewWidth, viewHeight, true, fill);
		} else if (mode === 'PORTRAIT') {
			this.configureTransform(viewWidth, viewHeight, false, fill);
		}

		this.mode = mode;
		this.fill = fill;
	}

	configureTransform(viewWidth, viewHeight, isLandscape, fill) {
		const matrix = new android.graphics.Matrix();
		const viewRect = new android.graphics.RectF(0, 0, viewWidth, viewHeight);
		let bufferRect;

		if (isLandscape) {
			bufferRect = new android.graphics.RectF(0, 0, viewHeight, viewWidth);
		} else {
			bufferRect = new android.graphics.RectF(0, 0, viewWidth, viewHeight);
		}

		const centerX = viewRect.centerX();
		const centerY = viewRect.centerY();

		let scaleX, scaleY;

		const currentHeight = (viewWidth * this.videoHeight) / this.videoWidth;
		const currentWidth = viewWidth;

		if (isLandscape) {
			if (fill) {
				scaleX = viewHeight / currentHeight;
				scaleY = (currentWidth * this.videoHeight) / this.videoWidth / currentWidth;

				if (scaleY * currentWidth < viewWidth) {
					scaleY = viewWidth / currentWidth;
					scaleX = (scaleY * currentWidth * this.videoWidth) / this.videoHeight / currentHeight;
				} else if (scaleX * currentHeight < viewHeight) {
					scaleX = viewHeight / currentHeight;
					scaleY = (scaleX * currentHeight * this.videoHeight) / this.videoWidth / currentWidth;
				}
			} else {
				scaleX = viewHeight / currentHeight;
				scaleY = (scaleX * currentHeight * this.videoHeight) / this.videoWidth / currentWidth;

				if (scaleY * currentWidth > viewWidth) {
					scaleY = viewWidth / currentWidth;
					scaleX = (currentWidth * this.videoWidth) / this.videoHeight / currentHeight;
				}
			}
		} else {
			if (fill) {
				scaleY = 1;
				scaleX = (viewHeight * this.videoWidth) / this.videoHeight / currentWidth;
				// if (scaleY * currentHeight < viewHeight) {
				//     scaleY = viewHeight / currentHeight;
				//     scaleX = (scaleY * currentHeight * this.videoWidth / this.videoHeight) / currentWidth;
				// }
				// else if (scaleX * currentWidth < viewWidth) {
				//     scaleX = viewWidth / currentWidth;
				//     scaleY = (scaleX * currentWidth * this.videoHeight / this.videoWidth) / currentHeight;
				// }
			} else {
				scaleX = viewWidth / currentWidth;
				scaleY = (currentWidth * this.videoHeight) / this.videoWidth / viewHeight;
			}
		}

		bufferRect.offset(centerX - bufferRect.centerX(), centerY - bufferRect.centerY());
		matrix.setRectToRect(viewRect, bufferRect, android.graphics.Matrix.ScaleToFit.CENTER);
		matrix.postScale(scaleX, scaleY, centerX, centerY);

		if (isLandscape) {
			matrix.postRotate(90, centerX, centerY);
		} else {
			matrix.postRotate(0, centerX, centerY);
		}

		this.nativeView.setTransform(matrix);
	}
}
