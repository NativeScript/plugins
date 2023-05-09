import { IonicPortalCommon, IonicPortalManagerCommon, IonicPortalLiveUpdateConfig } from './common';

export declare class IonicPortalManager extends IonicPortalManagerCommon {
	/**
	 * Register Portals when your app boots
	 * https://ionic.io/docs/portals/getting-started/guide#configure
	 * @param apiKey your portal api key
	 */
	static register(apiKey: string): void;
	/**
	 * Used to set the initial context of any portal id before the portal is shown
	 * @param id portal id
	 * @param initialContext data provided as the initial context to the portal
	 */
	static setInitialContext(id: string, initialContext: any): void;
	/**
	 * Define usage of non-official Capacitor Plugins via Android package names
	 * @param plugins list of non-official Capacitor package names
	 */
	static setAndroidPlugins(plugins: Array<string>): void;
	/**
	 * Configure Live Updates
	 * @param portalId portal id
	 * @param config live update configuration
	 */
	static configureLiveUpdates(portalId: string, config: IonicPortalLiveUpdateConfig): void;

	/**
	 * Sync Live Updates for given app ids
	 * @param appIds portal ids to sync
	 * @param isParallel whether to sync in parallel or not
	 * @param complete callback to receive sync status when complete or errors
	 */
	static syncNow(appIds: Array<string>, isParallel: boolean = false, complete: (status: string) => void = (status: string) => {}): void;

	/**
	 * Get last synced date from given portal id
	 * @param appId portal id
	 * @return datetimestamp
	 */
	static getLastSync(appId: string): number;
	/**
	 * Send a message to any web portal via publishing a topic (aka. event)
	 * @param topic name of topic/event
	 * @param data payload to send
	 */
	static publishTopic(topic: string, data?: any): void;
	/**
	 * Listen to any message sent from any web portal via subscribing to the topic (aka. event)
	 * @param topic name of topic/event
	 * @param callback method which is invoked everytime a message is sent via the topic
	 * @returns subscription id used to unsubscribe later
	 */
	static subscribeToTopic(topic: string, callback: (data?: any) => void): number;
	/**
	 * Unsubscribe from any topic (aka. event)
	 * @param topic name of topic/event
	 * @param subscriptionId subscription id
	 */
	static unsubscribeFromTopic(topic: string, subscriptionId: number): void;
}
export declare class IonicPortal extends IonicPortalCommon {}
