import { IonicPortalCommon } from './common';

export declare class IonicPortalManager {
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
	static create(portalId: string, startDir?: string, plugins?: Array<string> /* Android only - if using non-official Capacitor plugins, can pass array of fully qualified plugin namespaces */): any;
}
export declare class IonicPortal extends IonicPortalCommon {}
