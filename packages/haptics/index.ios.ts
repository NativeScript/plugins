import { Utils } from '@nativescript/core';
import { HapticImpactType, HapticNotificationType } from './common';

export * from './common';

let generatorNotification: UINotificationFeedbackGenerator;
let generatorImpactMap: Map<HapticImpactType, UIImpactFeedbackGenerator>;
let generatorSelection: UISelectionFeedbackGenerator;

export class Haptics {
	static isSupported() {
		return Utils.SDK_VERSION >= 10.0;
	}

	static notification(type?: HapticNotificationType) {
		if (!generatorNotification) {
			generatorNotification = UINotificationFeedbackGenerator.new();
		}
		if (!generatorNotification) {
			return;
		}

		let feedbackType = UINotificationFeedbackType.Success;
		if (type === HapticNotificationType.WARNING) {
			feedbackType = UINotificationFeedbackType.Warning;
		} else if (type === HapticNotificationType.ERROR) {
			feedbackType = UINotificationFeedbackType.Error;
		}
		generatorNotification.notificationOccurred(feedbackType);
		generatorNotification.prepare();
	}

	static impact(type?: HapticImpactType) {
		const impactType = type || HapticImpactType.MEDIUM;
		let generator: UIImpactFeedbackGenerator;
		let feedbackStyle: UIImpactFeedbackStyle;
		if (!generatorImpactMap) {
			generatorImpactMap = new Map();
		}
		if (generatorImpactMap.has(impactType)) {
			generator = generatorImpactMap.get(impactType);
		} else {
			switch (impactType) {
				case HapticImpactType.LIGHT:
					feedbackStyle = UIImpactFeedbackStyle.Light;
					break;
				case HapticImpactType.MEDIUM:
					feedbackStyle = UIImpactFeedbackStyle.Medium;
					break;
				case HapticImpactType.HEAVY:
					feedbackStyle = UIImpactFeedbackStyle.Heavy;
					break;
			}
			generator = UIImpactFeedbackGenerator.alloc().initWithStyle(feedbackStyle);
		}

		if (!generator) {
			return;
		}

		generator.impactOccurred();
		generator.prepare();
	}

	static selection() {
		if (!generatorSelection) {
			generatorSelection = UISelectionFeedbackGenerator.new();
		}

		if (!generatorSelection) {
			return;
		}

		generatorSelection.selectionChanged();
		generatorSelection.prepare();
	}
}

export class HapticsFallback {
	static weakBoom() {
		AudioServicesPlaySystemSound(1519);
	}

	static strongBoom() {
		AudioServicesPlaySystemSound(1520);
	}

	static burst() {
		AudioServicesPlaySystemSound(1521);
	}
}
