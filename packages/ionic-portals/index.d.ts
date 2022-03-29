import { IonicPortalCommon } from './common';

export declare class IonicPortalManager {
	/**
	 * Names of registered Capacitor plugins for use within your portals
	 */
	static registeredPlugins: Array<string>;
	/**
	 * Register Portals when your app boots
	 * https://ionic.io/docs/portals/getting-started/guide#configure
	 * @param apiKey your portal api key
	 */
	static register(apiKey: string): void;
	/**
	 * Create a Portal
	 * @param portalId The portal id to register
	 * @param startDir Set the web application directory. By default it will look for a folder named the same as the portalId as the location of the web assets.
	 * @returns platform native Portal
	 * For example if you created a Portal with id 'webPortal':
	 * iOS: App_Resources/iOS/webPortal
	 * Android: App_Resources/Android/src/main/asssets/webPortal
	 */
	static create(portalId: string, startDir?: string): any;

	/**
	 * Register Capacitor plugins by name to make available to your portals
	 * @param names names of Capacitor plugins
	 */
	static registerPlugins(names: Array<string>): void;
}
export declare class IonicPortal extends IonicPortalCommon {}
