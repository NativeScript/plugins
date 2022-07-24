import { RoomCaptureViewCommon } from './common';

export declare class RoomCaptureView extends RoomCaptureViewCommon {
	start(): void;
	stop(): void;
	export(filePath: string, callback?: (outputPath: string) => void): void;
}
