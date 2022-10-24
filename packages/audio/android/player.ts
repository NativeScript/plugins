import { Application, EventData, Observable, Utils } from '@nativescript/core';
import { resolveAudioFilePath, TNSPlayerI } from '../common';
import { AudioPlayerEvents, AudioPlayerOptions } from '../options';

export enum AudioFocusDurationHint {
	AUDIOFOCUS_GAIN = android.media.AudioManager.AUDIOFOCUS_GAIN,
	AUDIOFOCUS_GAIN_TRANSIENT = android.media.AudioManager.AUDIOFOCUS_GAIN_TRANSIENT,
	AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK = android.media.AudioManager.AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK,
	AUDIOFOCUS_GAIN_TRANSIENT_EXCLUSIVE = android.media.AudioManager.AUDIOFOCUS_GAIN_TRANSIENT_EXCLUSIVE,
}

const defaultAudioFocusManagerOptions: AudioFocusManagerOptions = {
	durationHint: AudioFocusDurationHint.AUDIOFOCUS_GAIN,
	usage: android.media.AudioAttributes.USAGE_MEDIA,
	contentType: android.media.AudioAttributes.CONTENT_TYPE_MUSIC,
};

export interface AudioFocusManagerOptions {
	durationHint?: AudioFocusDurationHint;
	usage?: number; // android.media.AudioAttributes.USAGE_MEDIA
	contentType?: number; // android.media.AudioAttributes.CONTENT_TYPE_MUSIC
}
export interface AudioFocusChangeEventData extends EventData {
	focusChange: number;
}

export class AudioFocusManager extends Observable {
	private _audioFocusRequest: android.media.AudioFocusRequest;
	private _mAudioFocusGranted: boolean = false;
	private _durationHint: AudioFocusDurationHint;
	private _audioPlayerSet = new Set<TNSPlayer>();

	constructor(options?: AudioFocusManagerOptions) {
		super();
		options = { ...defaultAudioFocusManagerOptions, ...(options || {}) };
		this._durationHint = options.durationHint;
		if (android.os.Build.VERSION.SDK_INT < 26) {
			return;
		}
		// Request audio focus for play back

		const playbackAttributes = new android.media.AudioAttributes.Builder().setUsage(options.usage).setContentType(options.contentType).build();
		this._audioFocusRequest = new android.media.AudioFocusRequest.Builder(options.durationHint).setAudioAttributes(playbackAttributes).setAcceptsDelayedFocusGain(true).setOnAudioFocusChangeListener(this._mOnAudioFocusChangeListener).build();
	}

	private _mOnAudioFocusChangeListener = new android.media.AudioManager.OnAudioFocusChangeListener({
		onAudioFocusChange: (focusChange: number) => {
			this.notify({
				eventName: 'audioFocusChange',
				object: this,
				focusChange,
			});
		},
	});

	private needsFocus(): boolean {
		return this._audioPlayerSet.size > 0;
	}
	/**
	 *
	 * @param owner player requesting focus
	 * @returns if we have focus or not
	 */
	requestAudioFocus(owner: TNSPlayer): boolean {
		// If it does not enter the condition block, means that we already
		// have focus. Therefore we have to start with `true`.
		let result = true;
		let focusResult = null;
		if (!this._mAudioFocusGranted) {
			const ctx = this._getAndroidContext();
			const am = ctx.getSystemService(android.content.Context.AUDIO_SERVICE) as android.media.AudioManager;

			// Request audio focus for play back
			if (android.os.Build.VERSION.SDK_INT >= 26) {
				focusResult = am.requestAudioFocus(this._audioFocusRequest);
			} else {
				focusResult = am.requestAudioFocus(this._mOnAudioFocusChangeListener, android.media.AudioManager.STREAM_MUSIC, this._durationHint);
			}

			if (focusResult === android.media.AudioManager.AUDIOFOCUS_REQUEST_GRANTED) {
				result = true;
			} else {
				result = false;
			}
		}

		this._audioPlayerSet.add(owner);
		this._mAudioFocusGranted = result;

		return result;
	}
	/**
	 * Abandons the audio focus for this player
	 * Audio focus request will not be made unless owner has previously requested focus or is null
	 * @param owner either a player or null if you want to manually release the audio focus
	 * @returns if we still have audio focus or not
	 */
	abandonAudioFocus(owner: TNSPlayer | null): boolean {
		if (owner) {
			if (!this._audioPlayerSet.has(owner)) {
				return this._mAudioFocusGranted;
			}
			this._audioPlayerSet.delete(owner);
		}
		if (this.needsFocus() || !this._mAudioFocusGranted) {
			return this._mAudioFocusGranted;
		}
		const ctx = this._getAndroidContext();
		const am = ctx.getSystemService(android.content.Context.AUDIO_SERVICE);
		let result = null;

		if (android.os.Build.VERSION.SDK_INT >= 26) {
			console.log('abandonAudioFocusRequest...', this._audioFocusRequest);
			result = am.abandonAudioFocusRequest(this._audioFocusRequest);
			console.log('abandonAudioFocusRequest...result...', result);

			// this._audioFocusRequest = null;
		} else {
			console.log('abandonAudioFocus...', this._mOnAudioFocusChangeListener);
			result = am.abandonAudioFocus(this._mOnAudioFocusChangeListener);
		}
		if (result === android.media.AudioManager.AUDIOFOCUS_REQUEST_GRANTED) {
			this._mAudioFocusGranted = false;
		} else {
			console.log('Failed to abandon audio focus.');
		}
		return this._mAudioFocusGranted;
	}
	private _getAndroidContext() {
		let ctx = Application.android.context;
		if (!ctx) {
			ctx = Application.getNativeApplication().getApplicationContext();
		}

		if (ctx === null) {
			setTimeout(() => {
				this._getAndroidContext();
			}, 200);

			return;
		}

		return ctx;
	}
}

let globalMixingManager: AudioFocusManager | null;

function getGlobalMixingManager(): AudioFocusManager {
	if (!globalMixingManager) {
		globalMixingManager = new AudioFocusManager();
	}
	return globalMixingManager;
}

export class TNSPlayer implements TNSPlayerI {
	private _mediaPlayer: android.media.MediaPlayer;
	private _lastPlayerVolume; // ref to the last volume setting so we can reset after ducking
	private _wasPlaying = false;
	private _events: Observable;
	private _options: AudioPlayerOptions;
	private _audioFocusManager: AudioFocusManager | null;

	constructor(durationHint: AudioFocusDurationHint | AudioFocusManager = AudioFocusDurationHint.AUDIOFOCUS_GAIN) {
		if (!(durationHint instanceof AudioFocusManager)) {
			this.setAudioFocusManager(
				new AudioFocusManager({
					durationHint: durationHint,
				})
			);
		} else {
			this.setAudioFocusManager(durationHint);
		}
	}

	public get events() {
		if (!this._events) {
			this._events = new Observable();
		}
		return this._events;
	}

	get android(): any {
		return this._player;
	}

	get volume(): number {
		// TODO: find better way to get individual player volume
		const ctx = this._getAndroidContext();
		const mgr = ctx.getSystemService(android.content.Context.AUDIO_SERVICE);
		return mgr.getStreamVolume(android.media.AudioManager.STREAM_MUSIC);
	}

	set volume(value: number) {
		if (this._player && value >= 0) {
			this._player.setVolume(value, value);
		}
	}

	public get duration(): number {
		if (this._player) {
			return this._player.getDuration();
		} else {
			return 0;
		}
	}

	get currentTime(): number {
		return this._player ? this._player.getCurrentPosition() : 0;
	}

	public setAudioFocusManager(manager: AudioFocusManager) {
		if (manager === this._audioFocusManager) {
			return;
		}
		this._audioFocusManager?.off('audioFocusChange', this._onAudioFocusChange, this);
		this._audioFocusManager?.abandonAudioFocus(this);
		this._audioFocusManager = manager;
		this._audioFocusManager?.on('audioFocusChange', this._onAudioFocusChange, this);
	}

	/**
	 * Initializes the player with options, will not start playing audio.
	 * @param options [AudioPlayerOptions]
	 */
	public initFromFile(options: AudioPlayerOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			options.autoPlay = false;
			this.playFromFile(options).then(resolve, reject);
		});
	}

	public playFromFile(options: AudioPlayerOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				this._options = options;
				if (options.autoPlay !== false) {
					options.autoPlay = true;
				}

				const audioPath = resolveAudioFilePath(options.audioFile);
				this._player.setAudioStreamType(android.media.AudioManager.STREAM_MUSIC);
				this._player.reset();
				this._player.setDataSource(audioPath);

				// check if local file or remote - local then `prepare` is okay https://developer.android.com/reference/android/media/MediaPlayer.html#prepare()
				if (Utils.isFileOrResourcePath(audioPath)) {
					this._player.prepare();
				} else {
					this._player.prepareAsync();
				}

				// On Info
				if (options.infoCallback) {
					this._player.setOnInfoListener(
						new android.media.MediaPlayer.OnInfoListener({
							onInfo: (player: any, info: number, extra: number) => {
								options.infoCallback({ player, info, extra });
								return true;
							},
						})
					);
				}

				// On Prepared
				this._player.setOnPreparedListener(
					new android.media.MediaPlayer.OnPreparedListener({
						onPrepared: (mp) => {
							if (options.autoPlay) {
								this.play();
							}
							resolve(null);
						},
					})
				);
			} catch (ex) {
				this._abandonAudioFocus();
				reject(ex);
			}
		});
	}

	/**
	 * Initializes the player with options, will not start playing audio.
	 * @param options
	 */
	public initFromUrl(options: AudioPlayerOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			options.autoPlay = false;
			this.playFromUrl(options).then(resolve, reject);
		});
	}

	public playFromUrl(options: AudioPlayerOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			resolve(this.playFromFile(options));
		});
	}

	public pause(): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				if (this._player && this._player.isPlaying()) {
					this._player.pause();
					// We abandon the audio focus but we still preserve
					// the MediaPlayer so we can resume it in the future
					this._abandonAudioFocus(true);
					this._sendEvent(AudioPlayerEvents.paused);
				}

				resolve(true);
			} catch (ex) {
				reject(ex);
			}
		});
	}

	public play(): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				console.log('player play()');
				if (this._player && !this._player.isPlaying()) {
					// request audio focus, this will setup the onAudioFocusChangeListener
					if (this._options.audioMixing) {
						// we're mixing audio, so we use a global mixing manager
						// all players need to set this to true if they're supporting mixing
						this.setAudioFocusManager(getGlobalMixingManager());
						// TODO: maybe reset to a default audio manager?
					}
					const audioFocusGranted = this._requestAudioFocus();
					if (!audioFocusGranted) {
						throw new Error('Could not request audio focus');
					}

					this._sendEvent(AudioPlayerEvents.started);
					// set volume controls
					// https://developer.android.com/reference/android/app/Activity.html#setVolumeControlStream(int)
					Application.android.foregroundActivity.setVolumeControlStream(android.media.AudioManager.STREAM_MUSIC);

					// register the receiver so when calls or another app takes main audio focus the player pauses
					Application.android.registerBroadcastReceiver(android.media.AudioManager.ACTION_AUDIO_BECOMING_NOISY, (context: android.content.Context, intent: android.content.Intent) => {
						this.pause();
					});

					if (this._options?.pitch) {
						const playBackParams = new android.media.PlaybackParams();
						playBackParams.setPitch(this._options!.pitch);
						this._player.setPlaybackParams(playBackParams);
					}

					this._player.start();
				}
				resolve(true);
			} catch (ex) {
				reject(ex);
			}
		});
	}

	public resume(): void {
		if (this._player) {
			// We call play so it can request audio focus
			this.play();
			this._sendEvent(AudioPlayerEvents.started);
		}
	}

	public seekTo(time: number): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				if (this._player) {
					time = time * 1000;
					this._player.seekTo(time);
					this._sendEvent(AudioPlayerEvents.seek);
				}
				resolve(true);
			} catch (ex) {
				reject(ex);
			}
		});
	}

	public changePlayerSpeed(speed) {
		// this checks on API 23 and up
		if (android.os.Build.VERSION.SDK_INT >= 23 && this.play) {
			if (this._player?.isPlaying()) {
				(this._player as any).setPlaybackParams((this._player as any).getPlaybackParams().setSpeed(speed));
			} else {
				(this._player as any).setPlaybackParams((this._player as any).getPlaybackParams().setSpeed(speed));
				this._player?.pause();
			}
		} else {
			console.warn('Android device API is not 23+. Cannot set the playbackRate on lower Android APIs.');
		}
	}

	public dispose(): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				if (this._player) {
					this._player.stop();
					this._player.reset();
					// Remove _options since we are back to the Idle state
					// (Refer to: https://developer.android.com/reference/android/media/MediaPlayer#state-diagram)
					this._options = undefined;
					// unregister broadcast receiver
					Application.android.unregisterBroadcastReceiver(android.media.AudioManager.ACTION_AUDIO_BECOMING_NOISY);

					this._abandonAudioFocus();
					this.setAudioFocusManager(null);
				}
				resolve(null);
			} catch (ex) {
				reject(ex);
			}
		});
	}

	public isAudioPlaying(): boolean {
		if (this._player) {
			return this._player.isPlaying();
		} else {
			return false;
		}
	}

	public getAudioTrackDuration(): Promise<string> {
		return new Promise((resolve, reject) => {
			try {
				const duration = this._player ? this._player.getDuration() : 0;
				resolve(duration.toString());
			} catch (ex) {
				reject(ex);
			}
		});
	}

	/**
	 * Notify events by name and optionally pass data
	 */
	private _sendEvent(eventName: string, data?: any) {
		if (this.events) {
			this.events.notify(<any>{
				eventName,
				object: this,
				data: data,
			});
		}
	}

	/**
	 * Helper method to ensure audio focus.
	 */
	private _requestAudioFocus(): boolean {
		return this._audioFocusManager?.requestAudioFocus(this);
	}

	private _abandonAudioFocus(preserveMP: boolean = false): void {
		this._audioFocusManager?.abandonAudioFocus(this);

		// Normally we will preserve the MediaPlayer only when pausing
		if (this._mediaPlayer && !preserveMP) {
			this._mediaPlayer.release();
			this._mediaPlayer = undefined;
		}
	}

	private _getAndroidContext() {
		let ctx = Application.android.context;
		if (!ctx) {
			ctx = Application.getNativeApplication().getApplicationContext();
		}

		if (ctx === null) {
			setTimeout(() => {
				this._getAndroidContext();
			}, 200);

			return;
		}

		return ctx;
	}
	/**
	 * This getter will instantiate the MediaPlayer if needed
	 * and register the listeners. This is done here to avoid
	 * code duplication. This is also the reason why we have
	 * a `_options`
	 */
	private get _player() {
		if (!this._mediaPlayer && this._options) {
			this._mediaPlayer = new android.media.MediaPlayer();

			this._mediaPlayer.setOnCompletionListener(
				new android.media.MediaPlayer.OnCompletionListener({
					onCompletion: (mp) => {
						if (this._options && this._options.completeCallback) {
							if (this._options.loop === true) {
								mp.seekTo(5);
								mp.start();
							}
							this._options.completeCallback({ player: mp });
						}

						if (this._options && !this._options.loop) {
							// Make sure that we abandon audio focus when playback stops
							this._abandonAudioFocus(true);
						}
					},
				})
			);

			this._mediaPlayer.setOnErrorListener(
				new android.media.MediaPlayer.OnErrorListener({
					onError: (player: any, error: number, extra: number) => {
						if (this._options && this._options.errorCallback) {
							this._options.errorCallback({ player, error, extra });
						}
						this.dispose();
						return true;
					},
				})
			);
		}

		return this._mediaPlayer;
	}

	private _onAudioFocusChange(data: AudioFocusChangeEventData) {
		const focusChange = data.focusChange;
		switch (focusChange) {
			case android.media.AudioManager.AUDIOFOCUS_GAIN:
				// Set volume level to desired levels
				// if last volume more than 10 just set to 1.0 float
				if (this._lastPlayerVolume && this._lastPlayerVolume >= 10) {
					this.volume = 1.0;
				} else if (this._lastPlayerVolume) {
					this.volume = parseFloat('0.' + this._lastPlayerVolume.toString());
				}

				if (this._wasPlaying) {
					this.resume();
				}
				break;
			case android.media.AudioManager.AUDIOFOCUS_GAIN_TRANSIENT:
				// You have audio focus for a short time
				break;
			case android.media.AudioManager.AUDIOFOCUS_LOSS:
				this._wasPlaying = this._player?.isPlaying() ?? false;
				this.pause();
				break;
			case android.media.AudioManager.AUDIOFOCUS_LOSS_TRANSIENT:
				// Temporary loss of audio focus - expect to get it back - you can keep your resources around
				this._wasPlaying = this._player?.isPlaying() ?? false;
				this.pause();
				break;
			case android.media.AudioManager.AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK:
				// Lower the volume, keep playing
				this._lastPlayerVolume = this.volume;
				this.volume = 0.2;
				break;
		}
	}
}
