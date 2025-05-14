import { AdsConsentStatus, AdsConsentDebugGeography } from './common';
export { AdsConsentStatus, AdsConsentDebugGeography };

export declare class AdsConsent extends AdsConsentBase {
	static reset();
	static addTestDevices(deviceIds: string[]);
	static getStatus(): AdsConsentStatus;
	static requestInfoUpdate(): Promise<void>;
	static setDebugGeography(geography: AdsConsentDebugGeography);
	static setTagForUnderAgeOfConsent(tag: boolean);
	static isConsentFormAvailable();
	static showForm(): Promise<void>;
	static loadForm(): Promise<void>;
}
