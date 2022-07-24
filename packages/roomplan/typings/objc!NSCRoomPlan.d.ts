declare class NSCRoomPlan extends UIViewController {
	static alloc(): NSCRoomPlan; // inherited from NSObject

	static new(): NSCRoomPlan; // inherited from NSObject

	exportResultsWithFilePathCallback(filePath: string, callback: (p1: string) => void): void;

	startSession(): void;

	stopSession(): void;
}

declare class RoomCapture extends UIView {
	static alloc(): RoomCapture; // inherited from NSObject

	static appearance(): RoomCapture; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RoomCapture; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RoomCapture; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RoomCapture; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RoomCapture; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RoomCapture; // inherited from UIAppearance

	static new(): RoomCapture; // inherited from NSObject
}
