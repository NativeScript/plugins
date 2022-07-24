declare class NSCRoomPlan extends UIViewController {
	static alloc(): NSCRoomPlan; // inherited from NSObject

	static new(): NSCRoomPlan; // inherited from NSObject

	exportResultsWithFilePathCallback(filePath: string, callback: (p1: string) => void): void;

	startSession(): void;

	stopSession(): void;
}
