import { IosSecurityCommon } from './common';

export declare class IosSecurity extends IosSecurityCommon {
    static amIJailbroken():boolean;

    static amIDebugged(): boolean;
    
    static amIRunInEmulator(): boolean;
    
    static denyDebugger();
    
    static amIReverseEngineered();
    
    static amIProxied(): boolean;
 
    // @ts-ignore
	static amIRuntimeHookedWithDyldWhiteListDetectionClassSelectorIsClassMethod(dyldWhiteList: NSArray<string> | string[], detectionClass: typeof NSObject, selector: string, isClassMethod: boolean): boolean;

    // @ts-ignore
	static amITampered(checks: NSArray<FileIntegrityCheckFacade> | FileIntegrityCheckFacade[]): NSArray<any>;
}
