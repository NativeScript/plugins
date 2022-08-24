export * from './common';

import { Utils } from '@nativescript/core';
import { HapticImpactStyle, HapticNotificationType } from './common';

export class Haptics {
	static notification(type?: HapticNotificationType) {
		trigger('notification', { notificationType: type });
	}

	static impact(style?: HapticImpactStyle) {
		trigger('impact', { impactStyle: style });
	}

	static selection() {
		trigger('selection');
	}
}

export class HapticsUnofficial {
	static weakBoom() {}

	static strongBoom() {}

	static burst() {}
}

function trigger(
	type: 'notification' | 'impact' | 'selection',
	options?: {
		impactStyle?: HapticImpactStyle;
		notificationType?: HapticNotificationType;
	}
) {
	// TODO: check android system settings and allow overrides via options
	// const ignoreAndroidSystemSettings = options.getBoolean("ignoreAndroidSystemSettings");
	// const hapticEnabledAndroidSystemSettings = android.provider.Settings.System.getInt(Utils.android.getApplicationContext().getContentResolver(), android.provider.Settings.System.HAPTIC_FEEDBACK_ENABLED, 0);
	// if (ignoreAndroidSystemSettings == false && hapticEnabledAndroidSystemSettings == 0) return;
	const v: android.os.Vibrator = Utils.android.getApplicationContext().getSystemService(android.content.Context.VIBRATOR_SERVICE);

	if (!v) return;
	// android.view.HapticFeedbackConstants
	if (v.hasVibrator()) {
		switch (type) {
			case 'notification':
				v.vibrate(android.os.VibrationEffect.createPredefined(android.os.VibrationEffect.EFFECT_TICK));
				break;
			case 'impact':
				if (options) {
					switch (options.impactStyle) {
						case HapticImpactStyle.LIGHT:
							v.vibrate(android.os.VibrationEffect.createPredefined(android.os.VibrationEffect.EFFECT_CLICK));
							break;
						case HapticImpactStyle.MEDIUM:
							v.vibrate(android.os.VibrationEffect.createPredefined(android.os.VibrationEffect.EFFECT_DOUBLE_CLICK));
							break;
						case HapticImpactStyle.HEAVY:
							v.vibrate(android.os.VibrationEffect.createPredefined(android.os.VibrationEffect.EFFECT_HEAVY_CLICK));
							break;
					}
				}
				break;
			case 'selection':
				v.vibrate(android.os.VibrationEffect.createPredefined(android.os.VibrationEffect.EFFECT_CLICK));
				break;
		}
	}
}
