declare var NativeScriptIosSecurityVersionNumber: number;

declare var NativeScriptIosSecurityVersionString: number;

// @ts-ignore
declare class SecurityFacade extends NSObject {

	static alloc(): SecurityFacade; // inherited from NSObject

	static amIDebugged(): boolean;

	static amIJailbroken(): boolean;

	static amIProxied(): boolean;

	static amIReverseEngineered(): boolean;

	static amIRunInEmulator(): boolean;

	static denyDebugger(): void;

	static new(): SecurityFacade; // inherited from NSObject
}