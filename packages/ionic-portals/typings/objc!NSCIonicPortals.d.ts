declare class NSCIonicPortals extends NSObject {
	static alloc(): NSCIonicPortals; // inherited from NSObject

	static getLastSyncWithAppId(appId: string): Date;

	static new(): NSCIonicPortals; // inherited from NSObject

	static syncNowWithAppIdsIsParallelComplete(appIds: NSArray<string> | string[], isParallel: boolean, complete: (p1: string) => void): void;
}
