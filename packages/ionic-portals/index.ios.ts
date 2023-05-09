import { Application, OrientationChangedEventData, Utils } from '@nativescript/core';
import { IonicPortalCommon, IonicPortalManagerCommon } from './common';

export class IonicPortalManager extends IonicPortalManagerCommon {
	static register(apiKey: string) {
		IONPortalsRegistrationManager.shared.registerWithKey(apiKey);
	}

	static syncNow(appIds: Array<string>, isParallel: boolean = false, complete: (status: string) => void = (status: string) => {}) {
		NSCIonicPortals.syncNowWithAppIdsIsParallelComplete(appIds, isParallel, complete);
	}

	static getLastSync(appId: string): number {
		return NSCIonicPortals.getLastSyncWithAppId(appId).getTime();
	}

	static publishTopic(topic: string, data?: any) {
		IONPortalsPubSub.publishMessageToTopic(Utils.dataSerialize(data, true), topic);
	}

	static subscribeToTopic(topic: string, callback: (data?: any) => void): number {
		super.subscribeToTopic(topic, callback);
		const subscriptionId = IONPortalsPubSub.subscribeToTopicCallback(topic, (data) => {
			if (this.Listeners && this.Listeners[topic]) {
				for (const listener of this.Listeners[topic]) {
					if (data) {
						listener.callback(Utils.dataDeserialize(data));
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
		if (IonicPortalManager.LiveUpdateConfigs?.[this.id]) {
			const config = IonicPortalManager.LiveUpdateConfigs[this.id];
			this._portal.setLiveUpdateConfigurationWithAppIdChannelSyncImmediately(config.appId, config.channel, config.syncOnAdd);
		}
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

	reload() {
		if (this.ios) {
			this.ios.reload();
		}
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
