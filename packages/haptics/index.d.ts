import { HapticImpactStyle, HapticNotificationType } from './common';

export * from './common';

export declare class Haptics {
	static notification(type?: HapticNotificationType): void;
	static impact(style?: HapticImpactStyle): void;
	static selection(): void;
}

export declare class HapticsUnofficial {
	static weakBoom();
	static strongBoom();
	static burst();
}
