import { Observable } from '@nativescript/core';
import { TNSRecordI } from '../common';
import { AudioRecorderOptions } from '../options';
declare var kAudioFormatAppleLossless, kAudioFormatMPEG4AAC;
@NativeClass()
class TNSRecorderDelegate extends NSObject implements AVAudioRecorderDelegate {
	static ObjCProtocols = [AVAudioRecorderDelegate];
	private _owner: WeakRef<TNSRecorder>;

	static initWithOwner(owner: TNSRecorder) {
		const delegate = <TNSRecorderDelegate>TNSRecorderDelegate.new();
		delegate._owner = new WeakRef(owner);
		return delegate;
	}

	audioRecorderDidFinishRecording(recorder: any, success: boolean) {
		console.log(`audioRecorderDidFinishRecording: ${success}`);
		const owner = this._owner.get();
		if (owner) {
			// owner.notify({
			//   eventName: 'RecorderFinished',
			// })
		}
	}

	audioRecorderDidFinishRecordingSuccessfully(recorder: AVAudioRecorder, flag) {
		console.log(`audioRecorderDidFinishRecordingSuccessfully: ${flag}`);
		const owner = this._owner.get();
		if (owner) {
			// owner.notify({
			//   eventName: 'RecorderFinishedSuccessfully',
			// })
		}
	}
}

export { TNSRecorderDelegate };

export class TNSRecorder extends Observable implements TNSRecordI {
	private _recorder: any;
	private _recordingSession: any;

	private _recorderOptions: AudioRecorderOptions;

	static CAN_RECORD(): boolean {
		return true;
	}

	get ios() {
		return this._recorder;
	}

	requestRecordPermission() {
		return new Promise((resolve, reject) => {
			this._recordingSession.requestRecordPermission((allowed: boolean) => {
				if (allowed) {
					resolve(true);
				} else {
					reject('Record permissions denied');
				}
			});
		});
	}

	start(options: AudioRecorderOptions): Promise<any> {
		this._recorderOptions = options;
		return new Promise((resolve, reject) => {
			try {
				this._recordingSession = AVAudioSession.sharedInstance();
				let errorRef = new interop.Reference();
				this._recordingSession.setCategoryError(AVAudioSessionCategoryPlayAndRecord, errorRef);
				if (errorRef) {
					console.error(`setCategoryError: ${errorRef.value}, ${errorRef}`);
				}

				this._recordingSession.setActiveError(true, null);
				this._recordingSession.requestRecordPermission((allowed: boolean) => {
					if (allowed) {
						const recordSetting = NSMutableDictionary.alloc().init();
						let format = options.format ? options.format : kAudioFormatAppleLossless;
						console.log(`setting format: ${format}`);
						recordSetting.setValueForKey(NSNumber.numberWithInt(format), 'AVFormatIDKey');

						let avAudioQualityValue = AVAudioQuality.Medium;
						if (options.iosAudioQuality) {
							if (options.iosAudioQuality == 'Min') {
								avAudioQualityValue = AVAudioQuality.Min;
							} else if (options.iosAudioQuality == 'Low') {
								avAudioQualityValue = AVAudioQuality.Low;
							} else if (options.iosAudioQuality == 'Medium') {
								avAudioQualityValue = AVAudioQuality.Medium;
							} else if (options.iosAudioQuality == 'High') {
								avAudioQualityValue = AVAudioQuality.High;
							} else if (options.iosAudioQuality == 'Max') {
								avAudioQualityValue = AVAudioQuality.Max;
							}
						}
						console.log(`setting format: ${avAudioQualityValue}`); // https://developer.apple.com/documentation/avfaudio/avaudioquality;
						recordSetting.setValueForKey(NSNumber.numberWithInt(avAudioQualityValue), 'AVEncoderAudioQualityKey');

						let sampleRate: number = 44100.0;
						if (options.sampleRate) sampleRate = parseFloat(parseInt(options.sampleRate).toFixed(1));
						console.log(`setting sampleRate: ${sampleRate}`);
						recordSetting.setValueForKey(NSNumber.numberWithFloat(sampleRate), 'AVSampleRateKey');

						let channels = options.channels ? options.channels : 1;
						console.log(`setting channels: ${channels}`);
						recordSetting.setValueForKey(NSNumber.numberWithInt(channels), 'AVNumberOfChannelsKey');

						errorRef = new interop.Reference();

						const url = NSURL.fileURLWithPath(options.filename);

						this._recorder = (<any>AVAudioRecorder.alloc()).initWithURLSettingsError(url, recordSetting, errorRef);
						if (errorRef && errorRef.value) {
							console.error(`initWithURLSettingsError errorRef: ${errorRef.value}, ${errorRef}`);
						} else {
							this._recorder.delegate = TNSRecorderDelegate.initWithOwner(this);
							if (options.metering) {
								this._recorder.meteringEnabled = true;
							}
							if (options.maxDuration) {
								this._recorder.recordForDuration(options.maxDuration / 1000);
							} else {
								this._recorder.prepareToRecord();
								this._recorder.record();
							}

							resolve(null);
						}
					}
				});
			} catch (ex) {
				reject(ex);
			}
		});
	}

	pause(): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				if (this._recorder) {
					this._recorder.pause();
				}
				resolve(null);
			} catch (ex) {
				reject(ex);
			}
		});
	}

	resume(): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				if (this._recorder) {
					this._recorder.record();
				}
				resolve(null);
			} catch (ex) {
				reject(ex);
			}
		});
	}

	stop(): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				if (this._recorder) {
					this._recorder.stop();
				}
				// may need this in future
				// this._recordingSession.setActiveError(false, null);
				this._recorder.meteringEnabled = false;
				resolve(null);
			} catch (ex) {
				reject(ex);
			}
		});
	}

	dispose(): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				if (this._recorder) {
					this._recorder.stop();
					this._recorder.meteringEnabled = false;
					this._recordingSession.setActiveError(false, null);
					this._recorder.release();
					this._recorder = undefined;
				}
				resolve(null);
			} catch (ex) {
				reject(ex);
			}
		});
	}

	isRecording() {
		return this._recorder && this._recorder.recording;
	}

	getMeters(channel?: number) {
		if (this._recorder) {
			if (!this._recorder.meteringEnabled) {
				this._recorder.meteringEnabled = true;
			}
			this._recorder.updateMeters();
			return this._recorder.averagePowerForChannel(channel);
		}
	}
}
