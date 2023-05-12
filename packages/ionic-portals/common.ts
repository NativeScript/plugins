import { View } from '@nativescript/core';

export interface IonicPortalLiveUpdateConfig {
	appId: string;
	channel: string;
	syncOnAdd?: boolean;
}
export class IonicPortalManagerCommon {
	static AndroidPlugins: Array<string>;
	static InitialContexts: { [key: string]: any };
	static LiveUpdateConfigs: { [key: string]: IonicPortalLiveUpdateConfig };
	static Listeners: { [key: string]: Array<{ callback: (data?: any) => void; subscriptionId: number }> };
	static setAndroidPlugins(plugins: Array<string>) {
		if (!IonicPortalManagerCommon.AndroidPlugins) {
			IonicPortalManagerCommon.AndroidPlugins = [];
		}
		for (const plugin of plugins) {
			if (!IonicPortalManagerCommon.AndroidPlugins.includes(plugin)) {
				IonicPortalManagerCommon.AndroidPlugins.push(plugin);
			}
		}
	}
	static configureLiveUpdates(portalId: string, config: IonicPortalLiveUpdateConfig) {
		if (!IonicPortalManagerCommon.LiveUpdateConfigs) {
			IonicPortalManagerCommon.LiveUpdateConfigs = {};
		}
		IonicPortalManagerCommon.LiveUpdateConfigs[portalId] = config;
	}
	static setInitialContext(id: string, initialContext: any) {
		if (!IonicPortalManagerCommon.InitialContexts) {
			IonicPortalManagerCommon.InitialContexts = {};
		}
		IonicPortalManagerCommon.InitialContexts[id] = initialContext;
	}

	static subscribeToTopic(topic: string, callback: (data?: any) => void): number {
		if (!this.Listeners) {
			this.Listeners = {};
		}
		if (!this.Listeners[topic]) {
			this.Listeners[topic] = [];
		}
		return 0;
	}

	static unsubscribeFromTopic(topic: string, subscriptionId: number) {
		if (this.Listeners && this.Listeners[topic]) {
			const index = this.Listeners[topic].findIndex((ref) => ref.subscriptionId === subscriptionId);
			if (index > -1) {
				this.Listeners[topic].splice(index, 1);
			}
		}
	}
}

export class IonicPortalCommon extends View {
	initialContext: any;
	reload(): void {}
}
