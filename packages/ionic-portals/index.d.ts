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
     * @param startDir Set the web applications directory. By default it will look for a folder named the same as the portalId as the location of the web assets.
     * @returns
     */
    static create(portalId: string, startDir?: string): Portal;
}
export declare class IonicPortal extends IonicPortalCommon {
    
}
