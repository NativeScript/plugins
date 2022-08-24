import { Utils } from '@nativescript/core';
import { HapticImpactStyle, HapticNotificationType } from './common';

export * from './common';

let generatorNotification: UINotificationFeedbackGenerator;
let generatorImpactMap: Map<HapticImpactStyle, UIImpactFeedbackGenerator>;
let generatorSelection: UISelectionFeedbackGenerator;

export class Haptics {
	static isSupported() {
		return Utils.ios.MajorVersion >= 10.0 && deviceInfo().version > 8;
	}

	static is6SAnd6SPlusSupported() {
		const details = deviceInfo();
		return Utils.ios.MajorVersion >= 10.0 && (details.name?.indexOf('iPhone8,1') > -1 || details.name?.indexOf('iPhone8,2') > -1);
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

	static impact(style?: HapticImpactStyle) {
		const impactStyle = style || HapticImpactStyle.MEDIUM;
		let generator: UIImpactFeedbackGenerator;
		let feedbackStyle: UIImpactFeedbackStyle;
		if (!generatorImpactMap) {
			generatorImpactMap = new Map();
		}
		if (generatorImpactMap.has(impactStyle)) {
			generator = generatorImpactMap.get(impactStyle);
		} else {
			switch (impactStyle) {
				case HapticImpactStyle.LIGHT:
					feedbackStyle = UIImpactFeedbackStyle.Light;
					break;
				case HapticImpactStyle.MEDIUM:
					feedbackStyle = UIImpactFeedbackStyle.Medium;
					break;
				case HapticImpactStyle.HEAVY:
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

export class HapticsUnofficial {
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

function deviceInfo() {
	const _SYS_NAMELEN: number = 256;

	const buffer: any = interop.alloc(5 * _SYS_NAMELEN);
	uname(buffer);
	let name: string = NSString.stringWithUTF8String(buffer.add(_SYS_NAMELEN * 4)).toString();

	// Get machine name for Simulator
	if (name === 'x86_64' || name === 'i386' || name === 'arm64') {
		name = NSProcessInfo.processInfo.environment.objectForKey('SIMULATOR_MODEL_IDENTIFIER');
	}

	const parts = name.toLowerCase().split('iphone');
	let version: number;
	if (parts && parts.length > 1) {
		version = parseInt(parts[1]);
	}
	return {
		name,
		version: isNaN(version) ? 0 : version,
	};
}
