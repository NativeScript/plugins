
declare class FileIntegrityCheckFacade extends NSObject {

	static alloc(): FileIntegrityCheckFacade; // inherited from NSObject

	static new(): FileIntegrityCheckFacade; // inherited from NSObject

	constructor(o: { bundleID: string; });

	constructor(o: { machO: string; machO1: string; });

	constructor(o: { mobileProvision: string; });

	initWithBundleID(bundleID: string): this;

	initWithMachOMachO1(machO: string, machO1: string): this;

	initWithMobileProvision(mobileProvision: string): this;
}

declare var NativeScriptIOSSecurityVersionNumber: number;

declare var NativeScriptIOSSecurityVersionString: interop.Reference<number>;

declare class SecurityFacade extends NSObject {

	static alloc(): SecurityFacade; // inherited from NSObject

	static amIDebugged(): boolean;

	static amIJailbroken(): boolean;

	static amIProxied(): boolean;

	static amIReverseEngineered(): boolean;

	static amIRunInEmulator(): boolean;

	static amIRuntimeHookedWithDyldWhiteListDetectionClassSelectorIsClassMethod(dyldWhiteList: NSArray<string> | string[], detectionClass: typeof NSObject, selector: string, isClassMethod: boolean): boolean;

	static amITampered(checks: NSArray<FileIntegrityCheckFacade> | FileIntegrityCheckFacade[]): NSArray<any>;

	static denyDebugger(): void;

	static new(): SecurityFacade; // inherited from NSObject
}
