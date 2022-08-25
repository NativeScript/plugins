import { HapticImpactType, HapticNotificationType } from './common';

export * from './common';

export declare class Haptics {
	static isSupported(): boolean;
	static is6SAnd6SPlusSupported(): boolean;
	static notification(type?: HapticNotificationType): void;
	static impact(type?: HapticImpactType): void;
	static selection(): void;
}

export declare class HapticsFallback {
	static weakBoom();
	static strongBoom();
	static burst();
}
