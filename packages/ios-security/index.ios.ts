export class IOSSecurity  {
    static amIJailbroken(): boolean {
        return SecurityFacade.amIJailbroken();
    }

    static amIDebugged(): boolean {
        return SecurityFacade.amIDebugged();
    }
    
    static amIRunInEmulator(): boolean {
        return SecurityFacade.amIRunInEmulator();
    }
    
    static denyDebugger() {
        return SecurityFacade.denyDebugger();
    }
    
    static amIReverseEngineered(): boolean {
        return SecurityFacade.amIReverseEngineered();
    }
    
    static amIProxied(): boolean {
        return SecurityFacade.amIProxied();
    }

    // @ts-ignore
    static amIRuntimeHookedWithDyldWhiteListDetectionClassSelectorIsClassMethod(dyldWhiteList: NSArray<string> | string[], detectionClass: typeof NSObject, selector: string, isClassMethod: boolean): boolean {
        return SecurityFacade.amIRuntimeHookedWithDyldWhiteListDetectionClassSelectorIsClassMethod(dyldWhiteList, detectionClass, selector, isClassMethod);
    }

    // @ts-ignore
	static amITampered(checks: NSArray<FileIntegrityCheckFacade> | FileIntegrityCheckFacade[]): NSArray<any> {
        return SecurityFacade.amITampered(checks);
    }

}
