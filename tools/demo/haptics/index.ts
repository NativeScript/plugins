import { DemoSharedBase } from '../utils';
import { Haptics, HapticsFallback, HapticNotificationType, HapticImpactType } from '@nativescript/haptics';

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
		Haptics.impact(HapticImpactType.LIGHT);
	}

	doImpactMedium() {
		Haptics.impact(HapticImpactType.MEDIUM);
	}

	doImpactHeavy() {
		Haptics.impact(HapticImpactType.HEAVY);
	}

	doWeakBoom() {
		HapticsFallback.weakBoom();
	}

	doStrongBoom() {
		HapticsFallback.strongBoom();
	}

	doBurst() {
		HapticsFallback.burst();
	}
}
