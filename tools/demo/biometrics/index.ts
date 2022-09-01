import { DemoSharedBase } from '../utils';
import { BiometricAuth, BiometricIDAvailableResult } from '@nativescript/biometrics';

const CONFIGURED_PASSWORD = 'MyPassword';

export class DemoSharedBiometrics extends DemoSharedBase {
	private fingerprintAuth: BiometricAuth;
	status: string = 'Tap a button below..';
	encryptedPassword: string = 'WIll Hold Encrypted Password';
	IV: string = 'WIll Hold IV';
	decryptedPassword = CONFIGURED_PASSWORD;
	androidKeyTimeout = 0;
	constructor() {
		super();
		this.fingerprintAuth = new BiometricAuth();
	}

	doDeleteKey(): void {
		this.fingerprintAuth.deleteKey('MySecretKeyName');
	}

	doCheckAvailable(): void {
		this.fingerprintAuth
			.available()
			.then((result: BiometricIDAvailableResult) => {
				console.log('doCheckAvailable result: ' + JSON.stringify(result));

				let availableBio: string = 'None';
				if (result.face) {
					availableBio = 'Face';
				} else if (result.touch) {
					availableBio = 'Touch';
				} else if (result.biometrics) {
					availableBio = 'Biometrics';
				} else if (result.any) {
					availableBio = 'Pin';
				}

				this.set('status', 'Biometric ID available? - ' + availableBio);
			})
			.catch((err) => {
				console.log('doCheckAvailable error: ' + err);
				this.set('status', 'Error: ' + err);
			});
	}

	doCheckFingerprintsChanged(): void {
		this.fingerprintAuth
			.didBiometricDatabaseChange({
				keyName: 'MySecretKeyName',
			})
			.then((changed: boolean) => {
				this.set('status', 'Biometric ID changed? - ' + (changed ? 'YES' : 'NO'));
			});
	}

	doVerifyFingerprint(): void {
		this.fingerprintAuth
			.verifyBiometric({
				title: 'Enter your password',
				message: 'Scan yer finger', // optional
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

	doVerifyFingerprintWithPinFallBack(): void {
		this.fingerprintAuth
			.verifyBiometric({
				title: 'Enter your password',
				message: 'Scan yer finger', // optional
				pinFallback: true,
			})
			.then(() => {
				this.set('status', 'Biometric ID OK');
			})
			.catch((err) => this.set('status', `Biometric ID NOT OK: " + ${JSON.stringify(err)}`));
	}

	doVerifyFingerprintWithCustomFallback(): void {
		this.fingerprintAuth
			.verifyBiometric({
				title: 'Enter your password',
				message: 'Scan yer finger', // optional
				fallbackMessage: 'Enter PIN', // optional
				pinFallback: true,
				ios: { customFallback: true },
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

	doVerifyFingerprintWithEncrypt(): void {
		this.fingerprintAuth
			.verifyBiometric({
				title: 'Enter your password',
				message: 'Scan yer finger', // optional
				pinFallback: false,
				keyName: 'MySecretKeyName',
				secret: this.decryptedPassword,
				android: { validityDuration: this.androidKeyTimeout },
			})
			.then((result) => {
				this.setProperty('encryptedPassword', result.encrypted);
				this.setProperty('IV', result.iv);
				this.set('status', 'Biometric ID OK');
			})
			.catch((err) => this.set('status', `Biometric ID NOT OK: " + ${JSON.stringify(err)}`));
	}
	doVerifyFingerprintWithDecrypt(): void {
		this.fingerprintAuth
			.verifyBiometric({
				title: 'Enter your password',
				message: 'Scan yer finger', // optional
				pinFallback: false,
				keyName: 'MySecretKeyName',
				android: { decryptText: this.encryptedPassword, iv: this.IV, validityDuration: this.androidKeyTimeout },
				ios: { fetchSecret: true },
			})
			.then((result) => {
				if (result.decrypted === this.decryptedPassword) {
					this.set('status', 'Biometric ID OK');
				} else {
					this.set('status', `Biometric ID NOT OK: ${result.decrypted} is not the PASSWORD`);
				}
			})
			.catch((err) => this.set('status', `Biometric ID NOT OK: " + ${JSON.stringify(err)}`));
	}
}
