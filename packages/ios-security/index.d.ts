import { IosSecurityCommon } from './common';

export declare class IosSecurity extends IosSecurityCommon {
    static amIJailbroken():boolean;
    
    static amIDebugged(): boolean;
    
    static amIRunInEmulator(): boolean;
    
    static denyDebugger();
    
    static amIReverseEngineered();
    
    static amIProxied(): boolean;
}
