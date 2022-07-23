declare class NSCRoomPlan extends UIViewController {
	static alloc(): NSCRoomPlan; // inherited from NSObject

	static new(): NSCRoomPlan; // inherited from NSObject

	exportResultsWithFilePath(filePath: string): void;

	startSession(): void;

	stopSession(): void;
}
