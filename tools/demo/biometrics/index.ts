import { DemoSharedBase } from '../utils';
import { BiometricAuth, BiometricIDAvailableResult } from '@nativescript/biometrics';

const CONFIGURED_PASSWORD = 'MyPassword';

export class DemoSharedBiometrics extends DemoSharedBase {
	private fingerprintAuth: BiometricAuth;
	status: string = 'Tap a button below..';
	encryptedPassword: string = 'WIll Hold Encrypted Password';
	IV: string = 'WIll Hold IV';
	decryptedPassword = CONFIGURED_PASSWORD;
	constructor() {
		super();
		this.fingerprintAuth = new BiometricAuth();
	}

	doCheckAvailable(): void {
		this.fingerprintAuth
			.available()
			.then((result: BiometricIDAvailableResult) => {
				console.log('doCheckAvailable result: ' + JSON.stringify(result));

				let availbleBio: string = 'None';
				if (result.face) {
					availbleBio = 'Face';
				} else if (result.touch) {
					availbleBio = 'Touch';
				} else if (result.biometrics) {
					availbleBio = 'Biometrics';
				} else if (result.any) {
					availbleBio = 'Pin';
				}

				this.set('status', 'Biometric ID available? - ' + availbleBio);
			})
			.catch((err) => {
				console.log('doCheckAvailable error: ' + err);
				this.set('status', 'Error: ' + err);
			});
	}

	doCheckFingerprintsChanged(): void {
		this.fingerprintAuth.didBiometricDatabaseChange().then((changed: boolean) => {
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
				android: { decryptText: this.encryptedPassword, iv: this.IV },
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
