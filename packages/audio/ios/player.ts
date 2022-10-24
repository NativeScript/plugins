import { knownFolders, Observable, path as nsFilePath, Utils } from '@nativescript/core';
import { TNSPlayerI } from '../common';
import { AudioPlayerOptions } from '../options';

declare var AVAudioPlayer;

@NativeClass()
class TNSPlayerDelegate extends NSObject implements AVAudioPlayerDelegate {
	static ObjCProtocols = [AVAudioPlayerDelegate];
	private _owner: WeakRef<TNSPlayer>;

	static initWithOwner(owner: TNSPlayer) {
		const delegate = <TNSPlayerDelegate>TNSPlayerDelegate.new();
		delegate._owner = new WeakRef(owner);
		return delegate;
	}

	audioPlayerDidFinishPlayingSuccessfully(player?: any, flag?: boolean) {
		const owner = this._owner.get();
		if (owner) {
			if (flag && owner.completeCallback) {
				owner.completeCallback({ player, flag });
			} else if (!flag && owner.errorCallback) {
				owner.errorCallback({ player, flag });
			}
		}
	}

	audioPlayerDecodeErrorDidOccurError(player: any, error: NSError) {
		const owner = this._owner.get();
		if (owner) {
			if (owner.errorCallback) {
				owner.errorCallback({ player, error });
			}
		}
	}
}

export { TNSPlayerDelegate };

export class AudioFocusManager extends Observable {}

export class TNSPlayer extends Observable implements TNSPlayerI {
	completeCallback: any;
	errorCallback: any;
	infoCallback: any;

	private _player: AVAudioPlayer;
	private _task: NSURLSessionDataTask;
	private delegate: TNSPlayerDelegate;

	get ios(): any {
		return this._player;
	}

	get volume(): number {
		return this._player ? this._player.volume : 0;
	}

	set volume(value: number) {
		if (this._player && value >= 0) {
			this._player.volume = value;
		}
	}

	public get duration() {
		if (this._player) {
			return this._player.duration;
		} else {
			return 0;
		}
	}

	get currentTime(): number {
		return this._player ? this._player.currentTime : 0;
	}

	public setAudioFocusManager(manager: any) {}

	public initFromFile(options: AudioPlayerOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			// init only
			options.autoPlay = false;
			this.playFromFile(options).then(resolve, reject);
		});
	}

	public playFromFile(options: AudioPlayerOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			// only if not explicitly set, default to true
			if (options.autoPlay !== false) {
				options.autoPlay = true;
			}

			try {
				let fileName = Utils.isString(options.audioFile) ? options.audioFile.trim() : '';
				if (fileName.indexOf('~/') === 0) {
					fileName = nsFilePath.join(knownFolders.currentApp().path, fileName.replace('~/', ''));
				}

				this.completeCallback = options.completeCallback;
				this.errorCallback = options.errorCallback;
				this.infoCallback = options.infoCallback;

				const audioSession = AVAudioSession.sharedInstance();
				if (options.audioMixing) {
					audioSession.setCategoryWithOptionsError(AVAudioSessionCategoryAmbient, AVAudioSessionCategoryOptions.MixWithOthers);
				} else {
					audioSession.setCategoryWithOptionsError(AVAudioSessionCategoryAmbient, AVAudioSessionCategoryOptions.DuckOthers);
				}

				const output = audioSession.currentRoute.outputs.lastObject.portType;

				if (output.match(/Receiver/)) {
					try {
						audioSession.setCategoryError(AVAudioSessionCategoryPlayAndRecord);
						audioSession.overrideOutputAudioPortError(AVAudioSessionPortOverride.Speaker);
						audioSession.setActiveError(true);
					} catch (err) {
						console.error('setting audioSession catergory failed', err);
					}
				}

				const errorRef = new interop.Reference();
				this._player = AVAudioPlayer.alloc().initWithContentsOfURLError(NSURL.fileURLWithPath(fileName), errorRef);
				if (errorRef && errorRef.value) {
					reject(errorRef.value);
					return;
				} else if (this._player) {
					if (this.delegate === undefined) this.delegate = TNSPlayerDelegate.initWithOwner(this);
					this._player.delegate = this.delegate;
					// enableRate to change playback speed
					this._player.enableRate = true;

					if (options.metering) {
						this._player.meteringEnabled = true;
					}

					if (options.loop) {
						this._player.numberOfLoops = -1;
					}

					if (options.autoPlay) {
						this._player.play();
					}

					resolve(null);
				} else {
					reject();
				}
			} catch (ex) {
				if (this.errorCallback) {
					this.errorCallback({ ex });
				}
				reject(ex);
			}
		});
	}

	public initFromUrl(options: AudioPlayerOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			// init only
			options.autoPlay = false;
			this.playFromUrl(options).then(resolve, reject);
		});
	}

	public playFromUrl(options: AudioPlayerOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			// only if not explicitly set, default to true
			if (options.autoPlay !== false) {
				options.autoPlay = true;
			}

			try {
				this._task = NSURLSession.sharedSession.dataTaskWithURLCompletionHandler(NSURL.URLWithString(options.audioFile), (data, response, error) => {
					if (error !== null) {
						if (this.errorCallback) {
							this.errorCallback({ error });
						}

						reject();
					}

					this.completeCallback = options.completeCallback;
					this.errorCallback = options.errorCallback;
					this.infoCallback = options.infoCallback;

					const audioSession = AVAudioSession.sharedInstance();
					if (options.audioMixing) {
						audioSession.setCategoryWithOptionsError(AVAudioSessionCategoryAmbient, AVAudioSessionCategoryOptions.MixWithOthers);
					} else {
						audioSession.setCategoryWithOptionsError(AVAudioSessionCategoryAmbient, AVAudioSessionCategoryOptions.DuckOthers);
					}
					const output = audioSession.currentRoute.outputs.lastObject.portType;

					if (output.match(/Receiver/)) {
						try {
							audioSession.setCategoryError(AVAudioSessionCategoryPlayAndRecord);
							audioSession.overrideOutputAudioPortError(AVAudioSessionPortOverride.Speaker);
							audioSession.setActiveError(true);
						} catch (err) {
							console.error('Setting audioSession category failed.', err);
						}
					}

					const errorRef = new interop.Reference();
					this._player = AVAudioPlayer.alloc().initWithDataError(data, errorRef);
					if (errorRef && errorRef.value) {
						reject(errorRef.value);
						return;
					} else if (this._player) {
						this._player.delegate = TNSPlayerDelegate.initWithOwner(this);

						// enableRate to change playback speed
						this._player.enableRate = true;

						this._player.numberOfLoops = options.loop ? -1 : 0;

						if (options.metering) {
							this._player.meteringEnabled = true;
						}

						if (options.autoPlay) {
							this._player.play();
						}

						resolve(null);
					} else {
						reject();
					}
				});

				this._task.resume();
			} catch (ex) {
				if (this.errorCallback) {
					this.errorCallback({ ex });
				}
				reject(ex);
			}
		});
	}

	public pause(): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				if (this._player && this._player.playing) {
					this._player.pause();
				}
				resolve(true);
			} catch (ex) {
				if (this.errorCallback) {
					this.errorCallback({ ex });
				}
				reject(ex);
			}
		});
	}

	public play(): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				if (!this.isAudioPlaying()) {
					this._player.play();
				}
				resolve(true);
			} catch (ex) {
				if (this.errorCallback) {
					this.errorCallback({ ex });
				}
				reject(ex);
			}
		});
	}

	public resume(): void {
		if (this._player) {
			this._player.play();
		}
	}

	public playAtTime(time: number): void {
		if (this._player) {
			this._player.playAtTime(time);
		}
	}

	public seekTo(time: number): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				if (this._player) {
					this._player.currentTime = time;
				}
				resolve(true);
			} catch (ex) {
				reject(ex);
			}
		});
	}

	public dispose(): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				if (this._player && this.isAudioPlaying()) {
					this._player.stop();
				}
				const audioSession = AVAudioSession.sharedInstance();
				audioSession.setActiveError(false);
				this._reset();
				resolve(null);
			} catch (ex) {
				if (this.errorCallback) {
					this.errorCallback({ ex });
				}
				reject(ex);
			}
		});
	}

	public isAudioPlaying(): boolean {
		return this._player ? this._player.playing : false;
	}

	public getAudioTrackDuration(): Promise<string> {
		return new Promise((resolve, reject) => {
			try {
				const duration = this._player ? this._player.duration : 0;
				resolve(duration.toString());
			} catch (ex) {
				if (this.errorCallback) {
					this.errorCallback({ ex });
				}
				reject(ex);
			}
		});
	}

	public changePlayerSpeed(speed) {
		if (this._player && speed) {
			// make sure speed is a number/float
			if (typeof speed === 'string') {
				speed = parseFloat(speed);
			}
			this._player.rate = speed;
		}
	}

	private _reset() {
		if (this._player) {
			this._player = undefined;
		}
		if (this.delegate) {
			this.delegate = undefined;
		}
		if (this._task) {
			this._task.cancel();
			this._task = undefined;
		}
	}
}
