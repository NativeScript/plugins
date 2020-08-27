import { Observable, EventData, Page } from '@nativescript/core';
import { FingerprintAuth, BiometricIDAvailableResult } from '@nativescript/fingerprint-auth';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends Observable {
	private fingerprintAuth: FingerprintAuth;
	public status: string = 'Tap a button below..';
	private static CONFIGURED_PASSWORD = 'MyPassword';

	constructor() {
		super();
		this.fingerprintAuth = new FingerprintAuth();
	}

	public doCheckAvailable(): void {
		this.fingerprintAuth
			.available()
			.then((result: BiometricIDAvailableResult) => {
				console.log('doCheckAvailable result: ' + JSON.stringify(result));
				this.set('status', 'Biometric ID available? - ' + (result.any ? (result.face ? 'Face' : 'Touch') : 'NO'));
			})
			.catch((err) => {
				console.log('doCheckAvailable error: ' + err);
				this.set('status', 'Error: ' + err);
			});
	}

	public doCheckFingerprintsChanged(): void {
		this.fingerprintAuth.didFingerprintDatabaseChange().then((changed: boolean) => {
			this.set('status', 'Biometric ID changed? - ' + (changed ? 'YES' : 'NO'));
		});
	}

	public doVerifyFingerprint(): void {
		this.fingerprintAuth
			.verifyFingerprint({
				title: 'Enter your password',
				message: 'Scan yer finger', // optional
				authenticationValidityDuration: 10, // Android
			})
			.then(() => this.set('status', 'Biometric ID / passcode OK'))
			.catch((err) => {
				alert({
					title: 'Biometric ID NOT OK / canceled',
					message: JSON.stringify(err),
					okButtonText: 'Mmkay',
				});
			});
	}

	public doVerifyFingerprintWithCustomUI(): void {
		this.fingerprintAuth
			.verifyFingerprint({
				message: 'Scan yer finger', // optional
				useCustomAndroidUI: true, // Android
			})
			.then((enteredPassword?: string) => {
				if (enteredPassword === undefined) {
					this.set('status', 'Biometric ID OK');
				} else {
					// compare enteredPassword to the one the user previously configured for your app (which is not the users system password!)
					if (enteredPassword === DemoModel.CONFIGURED_PASSWORD) {
						this.set('status', 'Biometric ID OK, using password');
					} else {
						this.set('status', `Wrong password. Try '${DemoModel.CONFIGURED_PASSWORD}' 😉`);
					}
				}
			})
			.catch((err) => this.set('status', `Biometric ID NOT OK: " + ${JSON.stringify(err)}`));
	}

	public doVerifyFingerprintWithCustomFallback(): void {
		this.fingerprintAuth
			.verifyFingerprintWithCustomFallback({
				message: 'Scan yer finger', // optional
				fallbackMessage: 'Enter PIN', // optional
				authenticationValidityDuration: 10, // Android
			})
			.then(() => this.set('status', 'Biometric ID OK'))
			.catch((error) => {
				this.set('status', 'Biometric ID NOT OK: ' + JSON.stringify(error));
				alert({
					title: 'Biometric ID NOT OK',
					message: error.code === -3 ? 'Show custom fallback' : error.message,
					okButtonText: 'Mmkay',
				});
			});
	}
}
