import { DemoSharedBase } from '../utils';
import { AudioRecorderOptions, TNSPlayer, TNSRecorder } from '@nativescript/audio';
import { Application, Dialogs, isAndroid, isIOS, knownFolders } from '@nativescript/core';

export class DemoSharedAudio extends DemoSharedBase {
	private _player: TNSPlayer;
	private _recorder: TNSRecorder;
	public isPlaying: boolean = false;
	private _meterInterval: any;
	public audioMeter: string;

	public currentTime: any = '0';
	private _timeInterval: any;
	private _recordingTimerInterval: any;
	public isRecording: boolean;
	public recordingTimer: any;
	public prettyTime: string;

	constructor() {
		super();
		this._player = new TNSPlayer();
		this._player.initFromUrl({
			audioFile: 'https://davecoffin.com/assets/thistooshallpass.mp3',
			loop: false,
			audioMixing: true,
			autoPlay: false,
			completeCallback: (data) => {
				console.log('song is done.');
			},
			errorCallback: (error) => {
				console.log('error playing track', error);
			},
		});

		this._recorder = new TNSRecorder();
		this._recorder.debug = true; // set true for tns_recorder logs
	}

	play() {
		this._player
			.play()
			.then(() => {
				this.set('isPlaying', true);
				this._initTimer();
			})
			.catch((error) => console.log(error));
	}

	pause() {
		this._player.pause();
		this.set('isPlaying', false);
		this.isPlaying = false;
	}

	seek() {
		this._player.seekTo(60).then(() => {
			this.play();
		});
	}
	startOver() {
		this._player.seekTo(0).then(() => this.play());
	}

	private resetTimer() {
		clearInterval(this._timeInterval);
		this._timeInterval = undefined;
	}

	private _initTimer() {
		this.resetTimer();
		this._timeInterval = setInterval(() => {
			this.set('currentTime', this._player.currentTime.toFixed(0));
			console.log(this.currentTime);
		}, 1000);
	}

	public filename: string;
	public recordingPath: string;
	public record() {
		if (!TNSRecorder.CAN_RECORD()) {
			Dialogs.alert('This device cannot record audio.');
			return;
		}
		let audioFolder;
		if (isIOS) {
			audioFolder = knownFolders.documents().getFolder('audio');
		} else {
			audioFolder = knownFolders.currentApp().getFolder('audio');
		}
		let androidFormat;
		let androidEncoder;
		if (isAndroid) {
			androidFormat = android.media.AudioFormat.ENCODING_PCM_16BIT;
			androidEncoder = android.media.MediaRecorder.AudioEncoder.AAC;
		}
		this.filename = 'foofile.' + this.platformExtension();
		this.recordingPath = `${audioFolder.path}/${this.filename}`;
		let bitDepth = 16;
		let sampleRate = 44100;
		let bitRate = sampleRate * bitDepth;
		const recorderOptions: AudioRecorderOptions = {
			filename: this.recordingPath,
			format: androidFormat,
			encoder: androidEncoder,
			sampleRate: sampleRate,
			bitRate: bitRate,
			metering: true,
			infoCallback: (infoObject) => {
				console.log(JSON.stringify(infoObject));
			},
			errorCallback: (errorObject) => {
				console.log(JSON.stringify(errorObject));
			},
		};
		this._recorder
			.start(recorderOptions)
			.then(() => {
				this._initRecordingTimer();
				this.isRecording = true;
				if (recorderOptions.metering) {
					this._initMeter();
				}
			})
			.catch((error) => {
				this.isRecording = false;
				this._resetMeter();
				Dialogs.alert(error);
			});
	}

	private platformExtension() {
		// 'mp3'
		return `${Application.android ? 'm4a' : 'caf'}`;
	}

	private _initRecordingTimer() {
		this._resetRecordingTimer();
		this._recordingTimerInterval = setInterval(() => {
			this.recordingTimer += 1;
			this.prettyTime = this.hhmmss(this.recordingTimer);
		}, 1000);
	}

	private _resetRecordingTimer() {
		if (this._recordingTimerInterval) {
			this.recordingTimer = 0;
			this.prettyTime = '0:00';
			clearInterval(this._recordingTimerInterval);
			this._recordingTimerInterval = undefined;
		}
	}

	private _resetMeter() {
		if (this._meterInterval) {
			this.set('audioMeter', '0');
			clearInterval(this._meterInterval);
			this._meterInterval = undefined;
		}
	}

	private _initMeter() {
		this._resetMeter();
		this._meterInterval = setInterval(() => {
			// this.audioMeter = this._player.
			// if (isIOS) {
			//   this.handleMeterUI(this.audioMeter+200)
			// } else {
			//   let db = (20 * Math.log10(parseInt(this.audioMeter) / .1));
			//   let percentage = db + 85;
			//   this.handleMeterUI(percentage)
			// }
		}, 150);
	}

	public hhmmss(secs, pretty = false) {
		if (secs) {
			if (typeof secs === 'string') secs = parseInt(secs);
			secs = secs.toFixed(0);
			var minutes: any = Math.floor(secs / 60);
			secs = secs % 60;
			var hours = Math.floor(minutes / 60);
			minutes = minutes % 60;
			if (pretty) {
				if (hours) {
					return hours + 'h ' + minutes + 'm';
				} else {
					return minutes ? minutes + 'm' : '<1m';
				}
			} else {
				if (hours) {
					if (minutes < 10) minutes = '0' + minutes;
					return `${hours}:${minutes}:${('0' + secs).slice(-2)}`;
				} else {
					return `${minutes}:${('0' + secs).slice(-2)}`;
				}
			}
		} else {
			return '0s';
		}
	}
}
