declare var SecurityFacade;

export class IosSecurity  {
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
        return SecurityFacade.amIProxied()
    }
}
