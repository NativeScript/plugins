import { MobileAdsError } from '../error';
import { topViewController } from '../utils';
import { AdsConsentBase, AdsConsentDebugGeography, AdsConsentStatus } from './common';

export { AdsConsentStatus, AdsConsentDebugGeography };

export class AdsConsent extends AdsConsentBase {
	static _geography: AdsConsentDebugGeography;
	static _deviceIds: string[];
	static _tagForUnderAgeOfConsent: boolean;
	static _consentForm: UMPConsentForm;
	static reset() {
		UMPConsentInformation.sharedInstance.reset();
	}
	static addTestDevices(deviceIds: string[]) {
		this._deviceIds = deviceIds;
	}
	static getStatus(): AdsConsentStatus {
		switch (UMPConsentInformation.sharedInstance.consentStatus) {
			case UMPConsentStatus.NotRequired:
				return AdsConsentStatus.NOT_REQUIRED;
			case UMPConsentStatus.Obtained:
				return AdsConsentStatus.OBTAINED;
			case UMPConsentStatus.Required:
				return AdsConsentStatus.REQUIRED;
			case UMPConsentStatus.Unknown:
				return AdsConsentStatus.UNKNOWN;
		}
	}
	static requestInfoUpdate(): Promise<void> {
		return new Promise((resolve, reject) => {
			const request = UMPRequestParameters.new();
			switch (this._geography) {
				case AdsConsentDebugGeography.DISABLED:
					request.debugSettings.geography = UMPDebugGeography.Disabled;
					break;
				case AdsConsentDebugGeography.EEA:
					request.debugSettings.geography = UMPDebugGeography.EEA;
					break;
				case AdsConsentDebugGeography.NOT_EEA:
					request.debugSettings.geography = UMPDebugGeography.NotEEA;
					break;
			}

			if (Array.isArray(this._deviceIds)) {
				request.debugSettings.testDeviceIdentifiers = this._deviceIds.map((item) => {
					if (item === 'EMULATOR') {
						if (global.GADSimulatorID) {
							return GADSimulatorID;
						}
						return '';
					}
					return item;
				}) as any;
			}

			if (typeof this._tagForUnderAgeOfConsent === 'boolean') {
				request.tagForUnderAgeOfConsent = this._tagForUnderAgeOfConsent;
			}

			UMPConsentInformation.sharedInstance.requestConsentInfoUpdateWithParametersCompletionHandler(request, (error) => {
				if (error) {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					reject(MobileAdsError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}
	static setDebugGeography(geography: AdsConsentDebugGeography) {
		this._geography = geography;
	}
	static setTagForUnderAgeOfConsent(tag: boolean) {
		this._tagForUnderAgeOfConsent = tag;
	}

	static isConsentFormAvailable() {
		switch (UMPConsentInformation.sharedInstance.formStatus) {
			case UMPFormStatus.Available:
				return true;
			default:
				return false;
		}
	}

	static showForm(): Promise<void> {
		return new Promise((resolve, reject) => {
			this._consentForm.presentFromViewControllerCompletionHandler(topViewController(), (error) => {
				if (error) {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					reject(MobileAdsError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}
	static loadForm() {
		return new Promise<void>((resolve, reject) => {
			UMPConsentForm.loadWithCompletionHandler((form, error) => {
				if (error) {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					reject(MobileAdsError.fromNative(error));
				} else {
					AdsConsent._consentForm = form;
					resolve();
				}
			});
		});
	}
}
