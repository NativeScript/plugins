declare var DRCircularProgressVersionNumber: number;

declare var DRCircularProgressVersionString: interop.Reference<number>;

declare class DRCircularProgressView extends UIView {
	static alloc(): DRCircularProgressView; // inherited from NSObject

	static appearance(): DRCircularProgressView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): DRCircularProgressView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): DRCircularProgressView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DRCircularProgressView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): DRCircularProgressView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DRCircularProgressView; // inherited from UIAppearance

	static new(): DRCircularProgressView; // inherited from NSObject

	alternativeColor: UIColor;

	clockwise: boolean;

	endAngle: number;

	progressColor: UIColor;

	progressValue: number;

	startAngle: number;

	thickness: number;
}
