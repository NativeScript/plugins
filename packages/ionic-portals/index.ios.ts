import { Application, OrientationChangedEventData, Utils } from '@nativescript/core';
import { IonicPortalCommon, IonicPortalManagerCommon } from './common';

export class IonicPortalManager extends IonicPortalManagerCommon {
	static register(apiKey: string) {
		IONPortalsRegistrationManager.shared.registerWithKey(apiKey);
	}

	static publishTopic(topic: string, data?: any) {
		IONPortalsPubSub.publishMessageToTopic(dataSerialize(data, true), topic);
	}

	static subscribeToTopic(topic: string, callback: (data?: any) => void): number {
		super.subscribeToTopic(topic, callback);
		const subscriptionId = IONPortalsPubSub.subscribeToTopicCallback(topic, (data) => {
			if (this.Listeners && this.Listeners[topic]) {
				for (const listener of this.Listeners[topic]) {
					if (data) {
						listener.callback(dataDeserialize(data));
					} else {
						listener.callback();
					}
				}
			}
		});
		this.Listeners[topic].push({
			callback,
			subscriptionId,
		});
		return subscriptionId;
	}

	static unsubscribeFromTopic(topic: string, subscriptionId: number) {
		IONPortalsPubSub.unsubscribeFromTopicSubscriptionRef(topic, subscriptionId);
		super.unsubscribeFromTopic(topic, subscriptionId);
	}
}

export class IonicPortal extends IonicPortalCommon {
	private _portal: IONPortal;
	private _handleOrientationFn: (args: OrientationChangedEventData) => void;

	// @ts-ignore
	get ios(): IONPortalUIView {
		return this.nativeView;
	}

	createNativeView() {
		if (!this.id) {
			throw new Error(`IonicPortal requires an 'id' property.`);
		}
		this._portal = IONPortal.alloc().initWithNameStartDirInitialContext(this.id, this.id, IonicPortalManager.InitialContexts && IonicPortalManager.InitialContexts[this.id] ? IonicPortalManager.InitialContexts[this.id] : {});
		return IONPortalUIView.alloc().initWithPortal(this._portal);
	}

	initNativeView() {
		// auto-handle orientation
		this._handleOrientationFn = this._updateWebViewSize.bind(this);
		Application.on(Application.orientationChangedEvent, this._handleOrientationFn);
	}

	disposeNativeView() {
		Application.off(Application.orientationChangedEvent, this._handleOrientationFn);
		super.disposeNativeView();
	}

	onLoaded() {
		super.onLoaded();
		this._updateWebViewSize();
	}

	private _updateWebViewSize() {
		// updated size on next tick
		setTimeout(() => {
			// ensure the webview content inside also resizes with view size changes
			this.nativeView.subviews.objectAtIndex(0).subviews.objectAtIndex(0).frame = this.ios.bounds;
		});
	}
}

const dataDeserialize = function (nativeData?: any) {
	if (Utils.isNullOrUndefined(nativeData)) {
		// some native values will already be js null values
		// calling types.getClass below on null/undefined will cause crash
		return null;
	} else {
		switch (Utils.getClass(nativeData)) {
			case 'NSNull':
				return null;
			case 'NSMutableDictionary':
			case 'NSDictionary':
				let obj = {};
				const length = nativeData.count;
				const keysArray = nativeData.allKeys as NSArray<any>;
				for (let i = 0; i < length; i++) {
					const nativeKey = keysArray.objectAtIndex(i);
					obj[nativeKey] = dataDeserialize(nativeData.objectForKey(nativeKey));
				}
				return obj;
			case 'NSMutableArray':
			case 'NSArray':
				let array = [];
				const len = nativeData.count;
				for (let i = 0; i < len; i++) {
					array[i] = dataDeserialize(nativeData.objectAtIndex(i));
				}
				return array;
			default:
				return nativeData;
		}
	}
};

const dataSerialize = function (data?: any, wrapPrimitives?: boolean) {
	switch (typeof data) {
		case 'string':
		case 'boolean': {
			return data;
		}
		case 'number': {
			const hasDecimals = numberHasDecimals(data);
			if (numberIs64Bit(data)) {
				if (hasDecimals) {
					return NSNumber.alloc().initWithDouble(data);
				} else {
					return NSNumber.alloc().initWithLongLong(data);
				}
			} else {
				if (hasDecimals) {
					return NSNumber.alloc().initWithFloat(data);
				} else {
					return data;
				}
			}
		}

		case 'object': {
			if (data instanceof Date) {
				return NSDate.dateWithTimeIntervalSince1970(data.getTime() / 1000);
			}

			if (!data) {
				return null;
			}

			if (Array.isArray(data)) {
				return NSArray.arrayWithArray((<any>data).map(dataSerialize));
			}

			let node = {} as any;
			Object.keys(data).forEach(function (key) {
				let value = data[key];
				node[key] = dataSerialize(value, wrapPrimitives);
			});
			return NSDictionary.dictionaryWithDictionary(node);
		}

		default:
			return null;
	}
};
const numberHasDecimals = function (value: number): boolean {
	return !(value % 1 === 0);
};

const numberIs64Bit = function (value: number): boolean {
	return value < -Math.pow(2, 31) + 1 || value > Math.pow(2, 31) - 1;
};
