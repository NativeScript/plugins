import { SharedNotificationDelegateCommon } from './common';

type DeferedPromise<T> = {
	promise: Promise<T>;
	resolve: (value?: T | PromiseLike<T>) => void;
	reject: (reason?: any) => void;
};
function createDeferedPromise<T>(): DeferedPromise<T> {
	const deferred: DeferedPromise<T> = {
		promise: undefined,
		reject: undefined,
		resolve: undefined,
	};

	deferred.promise = new Promise<T>((resolve, reject) => {
		deferred.resolve = resolve;
		deferred.reject = reject;
	});
	return deferred;
}

type StopNextPromise = {
	stop: () => void;
	next: () => void;
} & DeferedPromise<boolean>;

function createStopNextPromise(): StopNextPromise {
	const deferred = createDeferedPromise<boolean>();
	return {
		...deferred,
		next: () => deferred.resolve(false),
		stop: () => deferred.resolve(true),
	};
}

@NativeClass()
class UNUserNotificationCenterDelegateImpl extends NSObject implements UNUserNotificationCenterDelegate {
	public static ObjCProtocols = [];

	static new(): UNUserNotificationCenterDelegateImpl {
		if (UNUserNotificationCenterDelegateImpl.ObjCProtocols.length === 0 && typeof UNUserNotificationCenterDelegate !== 'undefined') {
			UNUserNotificationCenterDelegateImpl.ObjCProtocols.push(UNUserNotificationCenterDelegate);
		}
		return <UNUserNotificationCenterDelegateImpl>super.new();
	}

	private _owner: WeakRef<SharedNotificationDelegateImpl>;

	public static initWithOwner(owner: WeakRef<SharedNotificationDelegateImpl>): UNUserNotificationCenterDelegateImpl {
		const delegate = <UNUserNotificationCenterDelegateImpl>UNUserNotificationCenterDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}

	public userNotificationCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void {
		const owner = this._owner.get();
		if (owner) {
			let handled = false;
			const next = () => (handled = handled ? handled : false);
			const childHandler = (p1: UNNotificationPresentationOptions) => {
				if (handled) {
					return;
				}
				handled = true;
				completionHandler(p1);
			};
			owner._observers.some(({ observer }) => {
				if (observer.userNotificationCenterWillPresentNotificationWithCompletionHandler) {
					try {
						observer.userNotificationCenterWillPresentNotificationWithCompletionHandler(center, notification, childHandler, next);
					} catch (ignore) {
						next();
					}
				}
				return handled;
			});
			if (!handled) {
				if (!owner.disableUnhandledWarning) {
					console.log('WARNING[shared-notification-delegate]: Notification was received for presentation but was not handled by any observer');
				}
				childHandler(0);
			}
		}
	}

	public userNotificationCenterOpenSettingsForNotification(center: UNUserNotificationCenter, notification: UNNotification): void {
		let promise = Promise.resolve(false);
		const owner = this._owner.get();
		if (owner) {
			owner._observers.forEach(({ observer }) => {
				if (observer.userNotificationCenterOpenSettingsForNotification) {
					promise = promise.then((skip: boolean) => {
						if (skip) {
							return true;
						}
						const defPromise = createStopNextPromise();
						try {
							observer.userNotificationCenterOpenSettingsForNotification(center, notification, defPromise.stop, defPromise.next);
						} catch (ignore) {
							defPromise.next();
						}
						return defPromise.promise;
					});
				}
			});
		}
	}

	public userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void {
		let promise = Promise.resolve(false);
		const owner = this._owner.get();
		if (owner) {
			owner._observers.forEach(({ observer }) => {
				if (observer.userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler) {
					promise = promise.then((skip: boolean) => {
						if (skip) {
							return true;
						}
						const defPromise = createStopNextPromise();
						const childHandler: () => void = () => {
							defPromise.stop();
							completionHandler();
						};
						try {
							observer.userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center, response, childHandler, defPromise.next);
						} catch (ignore) {
							defPromise.next();
						}
						return defPromise.promise;
					});
				}
			});
			promise.then((handled: boolean) => {
				if (!handled) {
					if (!owner.disableUnhandledWarning) {
						console.log('WARNING[shared-notification-delegate]: Notification was received but was not handled by any observer');
					}
					completionHandler();
				}
				return true;
			});
		}
	}
}

export interface DelegateObserver {
	userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler?(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void, next: () => void): void;
	userNotificationCenterOpenSettingsForNotification?(center: UNUserNotificationCenter, notification: UNNotification, stop: () => void, next: () => void): void;
	userNotificationCenterWillPresentNotificationWithCompletionHandler?(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void, next: () => void): void;
	/**
	 * if set to not null/undefined, will ensure only one is registered
	 */
	observerUniqueKey?: any;
}
export class SharedNotificationDelegateImpl extends SharedNotificationDelegateCommon {
	_observers: Array<{ observer: DelegateObserver; priority: number }> = [];
	disableUnhandledWarning = false;
	private delegate: UNUserNotificationCenterDelegateImpl;

	constructor() {
		super();
		if (SharedNotificationDelegateImpl.isUNUserNotificationCenterAvailable()) {
			this.delegate = UNUserNotificationCenterDelegateImpl.initWithOwner(new WeakRef(this));
			UNUserNotificationCenter.currentNotificationCenter().delegate = this.delegate;
		}
	}

	static isUNUserNotificationCenterAvailable(): boolean {
		try {
			// available since iOS 10
			return !!UNUserNotificationCenter;
		} catch (ignore) {
			return false;
		}
	}

	addObserver(observer: DelegateObserver, priority: number = 100) {
		if (observer.observerUniqueKey != null) {
			this.removeObserverByUniqueKey(observer.observerUniqueKey);
		}
		this._observers.push({ observer, priority });
		this.sortObservers();
	}

	removeObserver(observer: DelegateObserver) {
		this._observers = this._observers.filter((v) => v.observer !== observer);
	}

	removeObserverByUniqueKey(key: string) {
		if (key == null) {
			console.log('SharedNotificationDelegate Warning: tried to remove null/undefined keys.');
			return;
		}
		this._observers = this._observers.filter((v) => v.observer.observerUniqueKey !== key);
	}

	clearObservers() {
		this._observers = [];
	}

	private sortObservers() {
		this._observers.sort((a, b) => (a.priority > b.priority ? 1 : a.priority < b.priority ? -1 : 0));
	}
}

const instance = new SharedNotificationDelegateImpl();

export const SharedNotificationDelegate = instance;
