import { DemoSharedBase } from '../utils';
import { Haptics, HapticsUnofficial, HapticNotificationType, HapticImpactStyle } from '@nativescript/haptics';

export class DemoSharedHaptics extends DemoSharedBase {
	doNotificationSuccess() {
		Haptics.notification(HapticNotificationType.SUCCESS);
	}

	doNotificationWarning() {
		Haptics.notification(HapticNotificationType.WARNING);
	}

	doNotificationError() {
		Haptics.notification(HapticNotificationType.ERROR);
	}

	doSelection() {
		Haptics.selection();
	}

	doImpactLight() {
		Haptics.impact(HapticImpactStyle.LIGHT);
	}

	doImpactMedium() {
		Haptics.impact(HapticImpactStyle.MEDIUM);
	}

	doImpactHeavy() {
		Haptics.impact(HapticImpactStyle.HEAVY);
	}

	doWeakBoom() {
		HapticsUnofficial.weakBoom();
	}

	doStrongBoom() {
		HapticsUnofficial.strongBoom();
	}

	doBurst() {
		HapticsUnofficial.burst();
	}
}
