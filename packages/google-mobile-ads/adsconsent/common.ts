export enum AdsConsentStatus {
	REQUIRED,
	NOT_REQUIRED,
	OBTAINED,
	UNKNOWN,
}

export enum AdsConsentDebugGeography {
	DISABLED,
	EEA,
	NOT_EEA,
}

export abstract class AdsConsentBase {
	static isConsentFormAvailable(): boolean {
		throw new Error('unimplemented');
	}

	static loadForm(): Promise<any> {
		return Promise.reject('unimplemented');
	}
	static setForceTesting(force: boolean) {
		throw new Error('unimplemented');
	}
	static reset(): void {
		throw new Error('unimplemented');
	}

	static addTestDevices(deviceIds: string[]) {
		throw new Error('unimplemented');
	}

	static getStatus(): AdsConsentStatus {
		throw new Error('unimplemented');
	}

	static requestInfoUpdate(): Promise<void> {
		return Promise.reject('unimplemented');
	}
	static setDebugGeography(geography: AdsConsentDebugGeography) {
		throw new Error('unimplemented');
	}
	static setTagForUnderAgeOfConsent(tag: boolean) {
		throw new Error('unimplemented');
	}
	static showForm(): Promise<void> {
		return Promise.reject('unimplemented');
	}
}
