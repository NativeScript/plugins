export * from './common';

import { Utils, Device } from '@nativescript/core';
import { HapticImpactType, HapticNotificationType } from './common';

export class Haptics {
	static isSupported() {
		return true;
	}

	static is6SAnd6SPlusSupported() {
		return false;
	}

	static notification(type?: HapticNotificationType) {
		trigger('notification', { notification: type });
	}

	static impact(type?: HapticImpactType) {
		trigger('impact', { impact: type });
	}

	static selection() {
		trigger('selection');
	}
}

export class HapticsFallback {
	static weakBoom() {}

	static strongBoom() {}

	static burst() {}
}

let vibrator: android.os.Vibrator;

function trigger(
	type: 'notification' | 'impact' | 'selection',
	options?: {
		impact?: HapticImpactType;
		notification?: HapticNotificationType;
		overrideSystemSettings?: boolean;
	}
) {
	// TODO: check android system settings and allow overrides via options
	// const hapticEnabledAndroidSystemSettings = android.provider.Settings.System.getInt(Utils.android.getApplicationContext().getContentResolver(), android.provider.Settings.System.HAPTIC_FEEDBACK_ENABLED, 0);
	// if (!options?.overrideSystemSettings && hapticEnabledAndroidSystemSettings == 0) return;
	if (!vibrator) {
		vibrator = Utils.android.getApplicationContext().getSystemService(android.content.Context.VIBRATOR_SERVICE);
	}

	if (!vibrator) return;

	if (parseFloat(Device.sdkVersion) >= 29 && vibrator.hasVibrator()) {
		switch (type) {
			case 'notification':
				vibrator.vibrate(android.os.VibrationEffect.createPredefined(android.os.VibrationEffect.EFFECT_TICK));
				break;
			case 'impact':
				if (options) {
					switch (options.impact) {
						case HapticImpactType.LIGHT:
							vibrator.vibrate(android.os.VibrationEffect.createPredefined(android.os.VibrationEffect.EFFECT_CLICK));
							break;
						case HapticImpactType.MEDIUM:
							vibrator.vibrate(android.os.VibrationEffect.createPredefined(android.os.VibrationEffect.EFFECT_DOUBLE_CLICK));
							break;
						case HapticImpactType.HEAVY:
							vibrator.vibrate(android.os.VibrationEffect.createPredefined(android.os.VibrationEffect.EFFECT_HEAVY_CLICK));
							break;
					}
				}
				break;
			case 'selection':
				vibrator.vibrate(android.os.VibrationEffect.createPredefined(android.os.VibrationEffect.EFFECT_CLICK));
				break;
		}
	}
}
