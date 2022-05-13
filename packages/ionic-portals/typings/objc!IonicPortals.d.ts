declare var IonicPortalsVersionNumber: number;

declare var IonicPortalsVersionNumberVar: number;

declare var IonicPortalsVersionString: interop.Reference<number>;

declare var IonicPortalsVersionStringVar: interop.Reference<number>;

declare class Portal extends NSObject {
	static alloc(): Portal; // inherited from NSObject

	static new(): Portal; // inherited from NSObject
}

declare class PortalBuilder extends NSObject {
	static alloc(): PortalBuilder; // inherited from NSObject

	static new(): PortalBuilder; // inherited from NSObject

	constructor();

	create(): Portal;

	init(name: string): this;

	setInitialContext(initialContext: NSDictionary<string, any>): PortalBuilder;

	setLiveUpdateConfigWithLiveUpdateConfigUpdateOnAppLoad(liveUpdateConfig: IONLiveUpdate, updateOnAppLoad: boolean): PortalBuilder;

	setStartDir(startDir: string): PortalBuilder;
}

declare class PortalManager extends NSObject {
	static addPortal(portal: Portal): void;

	static alloc(): PortalManager; // inherited from NSObject

	static count(): number;

	static getPortalError(name: string): Portal;

	static isRegistered(): boolean;

	static new(): PortalManager; // inherited from NSObject

	static newPortal(name: string): PortalBuilder;

	static register(key: string): void;
}

declare class PortalWebView extends UIView {
	static alloc(): PortalWebView; // inherited from NSObject

	static appearance(): PortalWebView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PortalWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PortalWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PortalWebView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PortalWebView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PortalWebView; // inherited from UIAppearance

	static new(): PortalWebView; // inherited from NSObject

	readonly bridge: CAPBridgeProtocol;

	constructor(o: { portal: Portal });

	initWithPortal(portal: Portal): this;

	reload(): void;
}

declare class PortalsPlugin extends CAPPlugin {
	static alloc(): PortalsPlugin; // inherited from NSObject

	static new(): PortalsPlugin; // inherited from NSObject
}

declare class UnregisteredView extends UIView {
	static alloc(): UnregisteredView; // inherited from NSObject

	static appearance(): UnregisteredView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UnregisteredView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UnregisteredView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UnregisteredView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UnregisteredView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UnregisteredView; // inherited from UIAppearance

	static new(): UnregisteredView; // inherited from NSObject
}
