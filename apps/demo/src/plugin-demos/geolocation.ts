import { Observable, EventData, Page, Device, Application, Enums, ObservableArray, Utils } from '@nativescript/core';
import * as geolocation from '@nativescript/geolocation';
// import * as Toast from "nativescript-toast";

let watchId;

function _clearWatch() {
	if (watchId) {
		geolocation.clearWatch(watchId);
		watchId = null;
	}
}

function _startWatch() {
	geolocation.enableLocationRequest().then(
		function () {
			_clearWatch();
			watchId = geolocation.watchLocation(
				function (loc) {
					if (loc) {
						// let toast = Toast.makeText('Background Location: \n' + loc.latitude + ', ' + loc.longitude);
						// toast.show();
						console.log('Background Location: ' + loc.latitude + ' ' + loc.longitude);
					}
				},
				function (e) {
					console.log('Background watchLocation error: ' + (e.message || e));
				},
				{
					desiredAccuracy: Enums.Accuracy.high,
					updateDistance: 1.0,
					updateTime: 3000,
					minimumUpdateTime: 100,
				}
			);
		},
		function (e) {
			console.log('Background enableLocationRequest error: ' + (e.message || e));
		}
	);
}
Application.on(Application.exitEvent, _clearWatch);

function getBackgroundServiceClass(): any {
	if (global.isAndroid) {
		if (Device.sdkVersion < '26') {
			@NativeClass()
			@JavaProxy('com.nativescript.location.BackgroundService')
			class BackgroundService extends (<any>android).app.Service {
				constructor() {
					super();
					return global.__native(this);
				}
				onStartCommand(intent, flags, startId) {
					console.log('service onStartCommand');
					this.super.onStartCommand(intent, flags, startId);
					return android.app.Service.START_STICKY;
				}
				onCreate() {
					console.log('service onCreate');
					_startWatch();
				}
				onBind(intent) {
					console.log('service onBind');
				}
				onUnbind(intent) {
					console.log('service onUnbind');
				}
				onDestroy() {
					console.log('service onDestroy');
					_clearWatch();
				}
			}
			return BackgroundService;
		} else {
			@NativeClass()
			@JavaProxy('com.nativescript.location.BackgroundService26')
			class BackgroundService26 extends (<any>android.app).job.JobService {
				constructor() {
					super();
					return global.__native(this);
				}
				onStartJob(): boolean {
					console.log('service onStartJob');
					_startWatch();
					return true;
				}
				onStopJob(jobParameters: any): boolean {
					console.log('service onStopJob');
					this.jobFinished(jobParameters, false);
					_clearWatch();
					return false;
				}
			}
			return BackgroundService26;
		}
	} else {
		return null;
	}
}
const BackgroundServiceClass = getBackgroundServiceClass();
const jobId = 308; // the id should be unique for each background job. We only use one, so we set the id to be the same each time.

function _stopBackgroundJob() {
	if (global.isAndroid) {
		let context = Utils.android.getApplicationContext();
		const jobScheduler = context.getSystemService((<any>android.content.Context).JOB_SCHEDULER_SERVICE);
		if (jobScheduler.getPendingJob(jobId) !== null) {
			jobScheduler.cancel(jobId);
			console.log(`Job Canceled: ${jobId}`);
		}
	}
}
Application.on(Application.exitEvent, _stopBackgroundJob);

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

declare var com: any;

export class DemoModel extends Observable {
	page: Page;
	watchIds = [];

	private _locations: ObservableArray<geolocation.Location>;

	public get locations(): ObservableArray<geolocation.Location> {
		if (!this._locations) {
			this._locations = new ObservableArray<geolocation.Location>();
		}
		return this._locations;
	}

	public set locations(value: ObservableArray<geolocation.Location>) {
		if (this._locations !== value) {
			this._locations = value;
			this.notifyPropertyChange('locations', value);
		}
	}

	startBackgroundTap() {
		if (global.isAndroid) {
			let context = Utils.android.getApplicationContext();
			if (Device.sdkVersion >= '26') {
				const jobScheduler = context.getSystemService((<any>android.content.Context).JOB_SCHEDULER_SERVICE);
				const component = new android.content.ComponentName(context, BackgroundServiceClass.class);
				const builder = new (<any>android.app).job.JobInfo.Builder(jobId, component);
				builder.setOverrideDeadline(0);
				jobScheduler.schedule(builder.build());
			} else {
				let intent = new android.content.Intent(context, BackgroundServiceClass.class);
				context.startService(intent);
			}
		}
	}

	stopBackgroundTap() {
		if (global.isAndroid) {
			if (Device.sdkVersion >= '26') {
				_stopBackgroundJob();
			} else {
				let context = Utils.android.getApplicationContext();
				let intent = new android.content.Intent(context, BackgroundServiceClass.class);
				context.stopService(intent);
			}
		}
	}

	enableLocationTap() {
		geolocation.isEnabled().then(
			function (isEnabled) {
				if (!isEnabled) {
					geolocation
						.enableLocationRequest(true, true)
						.then(
							() => {
								console.log('User Enabled Location Service');
							},
							(e) => {
								console.log('Error: ' + (e.message || e));
							}
						)
						.catch((ex) => {
							console.log('Unable to Enable Location', ex);
						});
				}
			},
			function (e) {
				console.log('Error: ' + (e.message || e));
			}
		);
	}

	buttonGetLocationTap() {
		geolocation
			.getCurrentLocation({
				desiredAccuracy: Enums.Accuracy.high,
				maximumAge: 5000,
				timeout: 10000,
			})
			.then(
				function (loc) {
					if (loc) {
						this.locations.push(loc);
					}
				},
				function (e) {
					console.log('Error: ' + (e.message || e));
				}
			);
	}

	buttonStartTap() {
		try {
			this.watchIds.push(
				geolocation.watchLocation(
					function (loc) {
						if (loc) {
							this.locations.push(loc);
						}
					},
					function (e) {
						console.log('Error: ' + e.message);
					},
					{
						desiredAccuracy: Enums.Accuracy.high,
						updateDistance: 1,
						updateTime: 3000,
						minimumUpdateTime: 100,
					}
				)
			);
		} catch (ex) {
			console.log('Error: ' + ex.message);
		}
	}

	buttonStopTap() {
		const id = this.watchIds.pop();
		while (id != null) {
			geolocation.clearWatch(id);
			watchId = this.watchIds.pop();
		}
	}

	buttonClearTap() {
		this.locations.splice(0, this.locations.length);
	}
}
