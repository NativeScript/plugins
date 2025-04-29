import { Application, Utils } from '@nativescript/core';
import { AdsConsentBase, AdsConsentDebugGeography, AdsConsentStatus } from './common';
import { MobileAdsError } from '../error';

export { AdsConsentStatus, AdsConsentDebugGeography };

export class AdsConsent extends AdsConsentBase {
	static _geography: AdsConsentDebugGeography;
	static _deviceIds: string[];
	static _tagForUnderAgeOfConsent: boolean;
	static _consentForm: com.google.android.ump.ConsentForm;
	static _consentInfo: com.google.android.ump.ConsentInformation;
	static reset() {
		org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.reset(Utils.android.getApplicationContext());
	}
	static addTestDevices(deviceIds: string[]) {
		this._deviceIds = deviceIds;
	}
	static getStatus(): AdsConsentStatus {
		return org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.getStatus(Utils.android.getApplicationContext()) as any;
	}
	static requestInfoUpdate(): Promise<void> {
		return new Promise((resolve, reject) => {
			const info = {};
			if (this._geography) {
				info['geography'] = this._geography;
			}

			if (this._deviceIds) {
				info['deviceIds'] = this._deviceIds;
			}

			if (typeof this._tagForUnderAgeOfConsent === 'boolean') {
				info['tagForUnderAgeOfConsent'] = this._tagForUnderAgeOfConsent;
			}

			org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.requestInfoUpdate(
				Application.android.foregroundActivity || Application.android.startActivity,
				JSON.stringify(info),
				new org.nativescript.firebase.admob.FirebaseAdmob.Callback<java.lang.Void>({
					onSuccess(value) {
						resolve();
					},
					onError(error) {
						reject(MobileAdsError.fromNative(error));
					},
				})
			);
		});
	}
	static setDebugGeography(geography: AdsConsentDebugGeography) {
		this._geography = geography;
	}
	static setTagForUnderAgeOfConsent(tag: boolean) {
		this._tagForUnderAgeOfConsent = tag;
	}

	static isConsentFormAvailable() {
		if (!this._consentInfo) {
			this._consentInfo = com.google.android.ump.UserMessagingPlatform.getConsentInformation(Utils.android.getApplicationContext());
		}
		return this._consentInfo.isConsentFormAvailable();
	}

	static showForm(): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.show(
				Application.android.foregroundActivity || Application.android.startActivity,
				this._consentForm,
				new org.nativescript.firebase.admob.FirebaseAdmob.Callback<java.lang.Void>({
					onSuccess(val) {
						resolve();
					},
					onError(error) {
						reject(MobileAdsError.fromNative(error));
					},
				})
			);
		});
	}

	static loadForm() {
		return new Promise<void>((resolve, reject) => {
			org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.load(
				Utils.android.getApplicationContext(),
				new org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.ump.ConsentForm>({
					onSuccess(form) {
						AdsConsent._consentForm = form;
						resolve();
					},
					onError(error) {
						reject(MobileAdsError.fromNative(error));
					},
				})
			);
		});
	}
}
