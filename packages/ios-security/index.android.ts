export class IOSSecurity  {
    static amIJailbroken(): boolean {
        return false;
    }

    static amIDebugged(): boolean {
        return false;
    }
    
    static amIRunInEmulator(): boolean {
        return false;
    }
    
    static denyDebugger() {
        return false;
    }
    
    static amIReverseEngineered(): boolean {
        return false;
    }
    
    static amIProxied(): boolean {
        return false;
    }

    // @ts-ignore
    static amIRuntimeHookedWithDyldWhiteListDetectionClassSelectorIsClassMethod(dyldWhiteList: Array<unknown>, detectionClass: any, selector: string, isClassMethod: boolean): boolean {
        return false;
    }

    // @ts-ignore
	static amITampered(checks: Array<unknown>): Array<unknown> {
        return [];
    }

}
